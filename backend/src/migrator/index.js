const config = require('../config');
const db_mongo = require(config.models_dir + '/mongo/db');
const fs= require('fs')
const data_path = __dirname + `/data`
const version_path = __dirname + '/version.json'

let current_version = -1
if (fs.existsSync(version_path)){
    current_version =  Math.max(require(version_path), -1)
}

const list_migrations = getListMigrations()

let argv = process.argv

if(argv.length<=2)
    console.error("invalid command")

let cmd = argv[2]
switch(cmd){
case "up":
    up()
    break
case "down":
    down()
    break
case "list":
    console.log(list_migrations)
    break
case "version":
    console.log(current_version)
    break
case "create":
    if(argv.length<=3){
        console.error("missing mirgation name")
        break
    }

    createMirgate(argv[3])
    break
}

function getListMigrations(){
    if (!fs.existsSync(data_path)){
        return []
    }
    return fs.readdirSync(data_path, {withFileTypes: true})
}

function createMirgate(name){
    if (!fs.existsSync(data_path)){
        fs.mkdirSync(data_path);
    }

    name = `${list_migrations.length}.${name}.js`
    let newFile = `${data_path}/${name}`
    fs.writeFileSync(newFile, "const mongoose = require('mongoose')\r\nexports.up = ()=>{\r\n\t\r\n}\r\nexports.down = ()=>{\r\n\t\r\n}")
}

function up(){
    let x = db_mongo.connect()
        .then(()=>{
            for(let i = current_version + 1; i < list_migrations.length; i++){
                let m = require(`${data_path}/${list_migrations[i]}`)
                if(m.up){
                    m.up()
                    fs.writeFileSync(version_path, i)
                }
            }
            db_mongo.close()
        })
        .catch(err=>console.error(err))
}

function down(){
    if(current_version < 0)
        return

    let m = require(`${data_path}/${list_migrations[current_version]}`)
    if(m.down){
        db_mongo.connect()
            .then(()=>{
                m.down()
                db_mongo.close()
            })
            .catch(err=>console.error(err))

        // remove file
        if(current_version == 0){
            fs.unlinkSync(version_path)
        } else {
            fs.writeFileSync(version_path, current_version - 1)
        }
    }
}
