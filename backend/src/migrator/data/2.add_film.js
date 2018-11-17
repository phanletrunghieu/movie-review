const mongoose = require('mongoose')
const config = require('../../config')
const Film = require(config.models_dir + '/mongo/film')
exports.up = ()=>{
	return Film.create([
        {
            _id: mongoose.Types.ObjectId("5bcf03d89036025ad45d5a1c"),
            name: "Kẻ Đánh Cắp Lễ Giáng Sinh - The Grinch",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/10/ke-danh-cap-le-giang-sinh-the-grinch-15403525831650_220x310.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/ke-danh-cap-le-giang-sinh-the-grinch-15418306587096.jpg",
            trailers: [
                "oPLJbf2Jerg"
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad45d5a7c"),
            is_top: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03d89036025ad45d5a1d"),
            name: "Sinh Vật Huyền Bí: Tội Ác Của Grindelwald",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-15410565516581_220x310.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-c13-15423356631387.jpg",
            trailers: [
                "YbjUe8w3uwc"
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad45d5a7c"),
            is_top: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03d89036025ad45d5a1e"),
            name: "Thạch Thảo",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/10/thach-thao-15393428200928_220x310.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/thach-thao-c13-15423297233613.jpg",
            trailers: [
                "AijaNHdLpIg"
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad45d5a7d"),
            is_top: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03d89036025ad45d5a1f"),
            name: "The Pokémon Movie: Sức Mạnh Của Chúng Ta",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/11/the-pokemon-movie-suc-manh-cua-chung-ta-15410559922377_220x310.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/the-pokemon-movie-suc-manh-cua-chung-ta-15410560063730.jpg",
            trailers: [
                "ILKiX297L3A"
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad45d5a7d"),
            is_top: true,
        },
    ])
}
exports.down = ()=>{
	
}