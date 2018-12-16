const mongoose = require('mongoose')
const config = require('../../config')
const Film = require(config.models_dir + '/mongo/film')
exports.up = ()=>{
	return Film.create([
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a11"),
            name: "Kẻ Đánh Cắp Lễ Giáng Sinh - The Grinch",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/10/ke-danh-cap-le-giang-sinh-the-grinch-15403525831650_220x310.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/ke-danh-cap-le-giang-sinh-the-grinch-15418306587096.jpg",
            trailers: [
                "4JKVax7hh3s"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/juc9wt7Eh2IarLL5S1yQ1a21O1A.jpg",
                "https://image.tmdb.org/t/p/original/zRDkmww7Bu11wiz2g86RxSreiY4.jpg",
                "https://image.tmdb.org/t/p/original/fdpRBTIhmoaiBJNjikNB4fJxCON.jpg",
                "https://image.tmdb.org/t/p/original/gefpwX7OuiR0ygo944hg9GVj0Kf.jpg",
                "https://image.tmdb.org/t/p/original/rWW4fIPeAXJwObE9rHaUI2Wisj5.jpg",
                "https://image.tmdb.org/t/p/original/uHThxLkA9Gf4SVLhixXjdzzH5RF.jpg",
                "https://image.tmdb.org/t/p/original/isIqcXZE7jwUTdYWPp3TBX8a1zo.jpg",
                "https://image.tmdb.org/t/p/original/kHhCz4JCs5oDp4xo2tuuYF88M34.jpg",
            ],
            actors: [
                "http://www.gstatic.com/tv/thumb/persons/275459/275459_v9_bb.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a81"),
            description: "Là bộ phim hoạt hình thứ 8 được sản xuất hoàn toàn bởi Illumination và Universal Pictures The Grinch dựa trên truyện cổ tích kinh điển của Dr. Seuss. The Grinch kể về một gã cau có, hay hoài nghi đang tiến hành nhiệm vụ ăn cắp Giáng sinh, chỉ khi trái tim bị khuất phục bởi tinh thần Giáng sinh hào phóng của một cô gái trẻ gã mới thay đổi. Hài hước, ấm áp và tràn đầy những hình ảnh tuyệt đẹp về thị giác, The Grinch là một câu chuyện về tinh thần Giáng sinh và sức mạnh không thể lay chuyển của sự lạc quan. Diễn viên từng được đề cử giải Oscar Benedict Cumberbatch sẽ lồng tiếng cho nhân vật nổi tiếng Grinch.",
            is_top: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a12"),
            name: "Nữ Siêu Nhân - Supergirl",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7609/poster.medium.jpg",
            banner: "https://img-www.tf-cdn.com/show/2/supergirl.jpeg",
            trailers: [
                "wv7jAKfSG8w"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/2qou2R47XZ1N6SlqGZcoCHDyEhN.jpg",
                "https://image.tmdb.org/t/p/original/3x1lVyxtsLKsZyR2E3qRe1EAXG4.jpg",
                "https://image.tmdb.org/t/p/original/lyA5Bw5paTzsVFGYHx3EbZNR9mK.jpg",
                "https://image.tmdb.org/t/p/original/mmprryb2r0X8u9JkZCnaJIzyYX4.jpg",
                "https://image.tmdb.org/t/p/original/p39NvmMdBA9WE2JYTQG0EUtNWeR.jpg",
                "https://image.tmdb.org/t/p/original/6DgJmsG8anuZyolr4viflMCQazK.jpg",
                "https://image.tmdb.org/t/p/original/hTnMOqUxYWSXqggzlY13NATnuTv.jpg",
                "https://image.tmdb.org/t/p/original/steBw729OGp321eNqT47qvFrtpH.jpg",
                "https://image.tmdb.org/t/p/original/tevGaNTGWFkJNfLw89k4T55zgIJ.jpg",
                "https://image.tmdb.org/t/p/original/eJ0oz0K6F9Mr9av8Px9uyaLmP2j.jpg",
                "https://image.tmdb.org/t/p/original/gKWdk1kyCQHT3S02hUyJDtiRTQA.jpg",
                "https://image.tmdb.org/t/p/original/rGVnN0eLSJ7ePrsciWFWU3VXPUp.jpg",
                "https://image.tmdb.org/t/p/original/vLAIAo5rz9P8rapGzz7vM6lTWWc.jpg",
                "https://image.tmdb.org/t/p/original/mrX4bst4eAU6ri1mXtBYkom7Xx9.jpg",
                "https://image.tmdb.org/t/p/original/wb3rdSD9JxV1QAvnNArhS3snMmN.jpg",
                "https://image.tmdb.org/t/p/original/wmKwHUwQkzkmJGSLPEueGxacF47.jpg",
                "https://image.tmdb.org/t/p/original/5wj5tBJKlcMSdU7nv1BgBtKUSji.jpg",
                "https://image.tmdb.org/t/p/original/zT3AnlRwWVjXe8SgMgpyaixHIBN.jpg",
                "https://image.tmdb.org/t/p/original/vW4uwLusTnfQpjvDpBG2443gueq.jpg",
            ],
            actors: [
                "http://image.phimmoi.net/profile/17762/medium.jpg",
                "http://image.phimmoi.net/profile/24164/medium.jpg",
                "http://image.phimmoi.net/profile/19966/medium.jpg",
                "http://image.phimmoi.net/profile/10559/medium.jpg",
                "http://image.phimmoi.net/profile/24166/medium.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a81"),
            description: "Supergirl phần 4 tiếp tục kể về cô gái 24 tuổi Kara Zor - El, cô chị họ của Superman. Cô nàng đã trốn thoát khỏi Krypton sau vụ nổ và trú ngụ tại trái đất dưới lốt một cô gái bình thường tên Kara Devengers. Nhưng sau đó ở tuổi 24, Kara quyết định sử dụng khả năng siêu nhiên của mình để trở thành siêu anh hùng.",
            is_top: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a13"),
            name: "Sinh Vật Huyền Bí: Tội Ác Của Grindelwald",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-15410565516581_220x310.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-c13-15423356631387.jpg",
            trailers: [
                "YbjUe8w3uwc"
            ],
            actors: [
                "http://www.gstatic.com/tv/thumb/persons/71369/71369_v9_ba.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Eddie_Redmayne_by_Gage_Skidmore.jpg/220px-Eddie_Redmayne_by_Gage_Skidmore.jpg",
                "http://www.gstatic.com/tv/thumb/persons/528415/528415_v9_ba.jpg",
                "http://www.gstatic.com/tv/thumb/persons/506834/506834_v9_bb.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b4/Johnny_Depp_2016.jpg",
                "http://www.gstatic.com/tv/thumb/persons/518777/518777_v9_bb.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a81"),
            description: "Lấy bối cảnh 70 năm trước sự kiện của Harry Potter và Voldemort, Sinh Vật Huyền Bí: Tội Ác Của Grindelwald tiếp tục theo chân nhà nghiên cứu sinh vật huyền bí Newt Scamander và hành trình phiêu lưu khắp thế giới của anh.",
            is_top: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a14"),
            name: "Tinh Thần Biến - Stellar Transformation",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7831/poster.medium.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-c13-15423356631387.jpg",
            trailers: [
                "8Lwv3BOmdt0"
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a81"),
            description: "Tinh Thần Biến là một tiểu thuyết võ hiệp có nội dung về một câu Truyện Tiên Hiệp hoành tráng kể về người thanh niên Tần Vũ gian khổ tu luyện, vượt hết khó khăn này đến nguy hiểm khác để lên Thần Giới tìm người yêu. Tần Vũ đã gặp duyên kỳ ngộ học được Tinh Thần Biến công pháp của Lôi Vệ, gian khổ tu luyện để làm cho người thân mình an toàn, nhờ sự giúp sức của Lan thúc(chú của người yêu) và Nghịch Ương tiên đế để phi thăng lên tiên giới và thần giới, nhưng rồi tại thần giới tranh đấu với cả nhà thần vương của Lôi Phạt thành và Lôi Phạt thiên tôn, cuối cùng nhờ sự giúp sức của Lôi Mông (sau này là nhị sư huynh của Tần Vũ và cũng là Lâm Lôi trong truyện Bàn Long cùng tác giả) phát triển lên sau này đã sáng tạo ra Tần Mông vũ trụ của riêng mình. Tinh Thần Biến mang đậm sắc thái tiên, thần, lấy tinh thần dũng cảm vượt khó khăn, cố gắng đến cực hạn của bản thân nhân vật chính để đi tìm được tình yêu của mình.",
            is_top: false,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a15"),
            name: "Tia Chớp Đen 2 - Black Lightning 2",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7668/poster.medium.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-c13-15423356631387.jpg",
            trailers: [
                "_ZnemILe3DY"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/bEAqNPtkhSlCbrUgsvsfVyR56Ug.jpg",
                "https://image.tmdb.org/t/p/original/sFh0ZMH1cgXcfcydqDrjaFCC9Ak.jpg",
                "https://image.tmdb.org/t/p/original/fXVciWWFWLZLCxwG0c0Bdrw0MG0.jpg",
                "https://image.tmdb.org/t/p/original/2z1Y6zG0fuyVSsvv7McJkUUHNyt.jpg",
                "https://image.tmdb.org/t/p/original/g5l5W0yMR5p5GeHKrPDx3NUtwNu.jpg",
                "https://image.tmdb.org/t/p/original/71Vb4CwgTkFxgFsGfUFwkoGbZnh.jpg",
            ],
            actors: [
                "http://image.phimmoi.net/profile/16972/medium.jpg",
                "http://image.phimmoi.net/profile/37453/medium.jpg",
                "http://image.phimmoi.net/profile/40534/medium.jpg",
                "http://image.phimmoi.net/profile/22302/medium.jpg",
                "http://image.phimmoi.net/profile/40535/medium.jpg",
                "http://image.phimmoi.net/profile/17764/medium.jpg",
                "http://image.phimmoi.net/profile/262/medium.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a81"),
            description: "Black Lightning phần 2 tiếp tục câu chuyện về Jefferson Pierce - một siêu anh hùng đã về hưu trở thành người bảo vệ công lý. Black Lightning là siêu anh hùng có khả năng có khả năng tạo ra và phóng các tia điện, mặc dù không ai biết được những tia điện này mạnh cỡ nào nhưng nó đủ để làm choáng và thậm chí giết người.",
            is_top: false,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a16"),
            name: "Hồi Ức Alhambra: Thành Phố Phép Thuật-Memories of the Alhambra",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7939/poster.medium.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-c13-15423356631387.jpg",
            trailers: [
                "2Lcy3XUDd_A"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/lPnWhpVe81isngx5Dmrq3itjuF0.jpg",
                "https://image.tmdb.org/t/p/original/3U7BSGExgEoFMoQzHtORAYZ8YUF.jpg",
            ],
            actors: [
                "http://image.phimmoi.net/profile/17543/medium.jpg",
                "http://image.phimmoi.net/profile/638/medium.jpg",
                "http://image.phimmoi.net/profile/16892/medium.jpg",
                "http://image.phimmoi.net/profile/32888/medium.jpg",
                "http://image.phimmoi.net/profile/23554/medium.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a82"),
            description: "Bộ phim Memories of the Alhambra (Hồi Ức Alhambra) xoay quanh mối tình vừa bí ẩn vừa lãng mạn giữa Jung Hee Joo (Park Shin Hye), một \"bà chủ\" nhà nghỉ và Yoo Jin Woo (Hyun Bin) - một CEO thiên tài đến Tây Ban Nha trong một chuyến công tác. Jung Sae Joo (Chanyeol), em trai của Hee Joo đồng thời là một lập trình viên tài giỏi chỉ thích sống trong thế giới của riêng mình. Họ sẽ bị cuốn vào hàng loạt bí ẩn tại Granada, thành phố của ma thuật, và từ đó hình thành những mối liên kết đặc biệt với nhau.",
            is_top: false,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a17"),
            name: "Thiếu Gia Ác Ma Đừng Hôn Tôi - Master Devil Do Not Kiss Me",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7882/poster.medium.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-c13-15423356631387.jpg",
            trailers: [
                "-fEd4hsl52c"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/85SoWDsnqGpJW2jcY6UHRrU4r80.jpg",
                "https://image.tmdb.org/t/p/original/qFWPqKLf5D8HawqxhhH1b0LbegX.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a82"),
            description: "Thiếu Gia Ác Ma Đừng Hôn Tôi (Phần 3) xoay quanh câu chuyện về cô gái cá tính An Sơ Hạ và cuộc sống nghèo khó, vất vả với mẹ sau khi bố mất tích. Sau một tai nạn giao thông, mẹ An Sơ Hạ qua đời, cô về sống cùng với nhà họ Hàn – gia đình đã được mẹ cô hiến thận sau khi mất. Từ đây, cuộc đời của cô gái này bước sang trang mới khi được đến học tại ngôi trường nổi tiếng, quen với những người bạn giàu có, thượng lưu. Đặc biệt, tại đây, An Sơ Hạ được bốn anh chàng theo đuổi, mỗi người lại có một tính cách, một cách quan tâm đến nữ chính khác nhau nhưng cả bốn anh chàng đẹp trai, tốt bụng này đều khiến người hâm mộ “đổ rầm”.",
            is_top: false,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a18"),
            name: "Thạch Thảo",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/10/thach-thao-15393428200928_220x310.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/thach-thao-c13-15423297233613.jpg",
            trailers: [
                "AijaNHdLpIg"
            ],
            actors: [
                "http://cdn.hoahoctro.vn/uploads/2018/06/5b24d40bc3304-tung-maru-bich-ngoc-tha-hon-tren-canh-ong-hoa-thach-thao5.jpg",
                "https://image1.thegioitre.vn/2017/11/05/tung-9.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a82"),
            description: "Thạch Thảo là chuyện tình học đường vô cùng lãng mạn, dễ thương nhưng cũng không kém phần kịch tính của hai nhân vật Thạch và Thảo. Một câu chuyện về tình cảm gia đình, tình bạn ở bối cảnh núi rừng Tây Nguyên. Một chàng học sinh mới từ Saigon di chuyển đến Kon Tum để học, từ đó trúng phải “bùa yêu” của một cô gái xinh đẹp cùng lớp. Phát hiện cô nàng có nhiều tâm sự và nỗi niềm riêng, chàng trai quyết tâm tìm hiểu và từ đó nhiều vấn đề khác được mở ra.",
            is_top: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a19"),
            name: "Cuộc Đời Của Tôi-It's My Life",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7794/poster.medium.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-c13-15423356631387.jpg",
            trailers: [
                "DozaK5Jgr0A"
            ],
            actors: [
                "http://image.phimmoi.net/profile/46045/medium.jpg",
                "http://image.phimmoi.net/profile/28612/medium.jpg",
                "http://image.phimmoi.net/profile/46046/medium.jpg",
                "http://image.phimmoi.net/profile/16891/medium.jpg",
                "http://image.phimmoi.net/profile/29240/medium.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a82"),
            description: "Cuộc Đời Của Tôi đây là câu chuyện về một người đàn ông từ vùng nông thôn không vui và quyết định đưa vấn đề vào tay mình và thay đổi một cách tương lai.",
            is_top: false,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a20"),
            name: "The Pokémon Movie: Sức Mạnh Của Chúng Ta",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/11/the-pokemon-movie-suc-manh-cua-chung-ta-15410559922377_220x310.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/the-pokemon-movie-suc-manh-cua-chung-ta-15410560063730.jpg",
            trailers: [
                "ILKiX297L3A"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/b1EKIjZWYAoC3WUk14012DX46Cb.jpg",
                "https://image.tmdb.org/t/p/original/6aQ1C6RJAzeyqXRpLNeQNnxKJnL.jpg",
                "https://image.tmdb.org/t/p/original/88bx7yPJ8eiCvR69h2KHwe6L2Xq.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a83"),
            description: "Như thường lệ mỗi năm, Pokemon sẽ cho ra mắt một phần mới của series phim hoạt hình nổi tiếng từ Nhật Bản. Trong năm nay, nội dung phim sẽ tiếp tục xoay quanh câu chuyện của phần trước về nhân vật Pokemon Lugia trong truyền thuyết & sự gặp gỡ tình cờ của 5 huấn luyện viên Pokemon khi tham gia vào lễ hội Gió linh thiêng tại thành phố Fury. Theo phong tục, vào ngày cuối cùng của lễ hội, Pokemon Lugia sẽ ban phước lành cho người dân. Tuy nhiên, khi một sự kiện bất ngờ xảy ra, những cơn gió biến mất và thành phố bị đe dọa bởi một cuộc tấn công bí ẩn. Satoshi & Pikachu đã đứng lên kêu gọi những người bạn mới ra sức bảo vệ thành phố",
            is_top: true,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a21"),
            name: "Ma Giới Kỵ Sĩ: Thần Nha Jinga-Fang Of God: Jinga",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7946/poster.medium.jpg",
            banner: "https://s3img.vcdn.vn/123phim/2018/11/sinh-vat-huyen-bi-toi-ac-cua-grindelwald-c13-15423356631387.jpg",
            trailers: [
                "WfHyWRtZ8v8"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/8o8md5JjOx4k1ZrCe5hoo1F8xiL.jpg",
                "https://image.tmdb.org/t/p/original/c4pw1l3gaLH5krzuDhdXwYnEeIT.jpg",
            ],
            actors: [],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a83"),
            description: "Bối cảnh trong seri này nằm ở một tương lai cách sự kiện Ryuuga khoảng từ mấy chục năm đến hàng thế kỷ. Nội dung kể về con quỷ tà ác nhất mà nhân loại từng biết đã nhập vào Messiah, nguồn gốc của mọi Horror gây tai ương trên Trái Đất.Nhưng hắn đã bị đánh bại.Một thời gian dài, linh hồn hắn chìm trong bóng tối vô định.Nhưng hắn đã hồi sinh thành thứ mà hắn ghét nhất...Ánh sáng. Hắn không biết gì về quá khứ.Nhưng hắn sẽ biết đến hy vọng...và tuyệt vọng.",
            is_top: false,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a22"),
            name: "Mũi tên xanh (Phần 7) - Arrow (Season 7)",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7625/poster.medium.jpg",
            banner: "http://image.phimmoi.net/post/2018/10/17/arrow-cw-season-7-ratings-canceled-or-renewed-season-8-e1539641523613.jpg",
            trailers: [
                "x-6HwQ_6Iu8"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
                "https://image.tmdb.org/t/p/original/dXTyVDTIgeByvUOUEiHjbi8xX9A.jpg",
                "https://image.tmdb.org/t/p/original/scivLGg7zdqmdw5eDW3rvrEavr6.jpg",
                "https://image.tmdb.org/t/p/original/2yfXq8JFNz6719MjCA5GgQne04b.jpg",
                "https://image.tmdb.org/t/p/original/hD76ZDNjCAbGrKzAYJAHVCJ2ba7.jpg",
            ],
            actors: [
                "http://image.phimmoi.net/profile/1987/medium.jpg",
                "http://image.phimmoi.net/profile/1989/medium.jpg",
                "http://image.phimmoi.net/profile/1992/medium.jpg",
                "http://image.phimmoi.net/profile/1993/medium.jpg",
                "http://image.phimmoi.net/profile/1990/medium.jpg",
                "http://image.phimmoi.net/profile/1988/medium.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a83"),
            description: "Arrow 7 (Mũi tên xanh phần 7) tiếp tục câu chuyện Sau một vụ đắm tàu nghiêm trọng, chàng tỉ phú ăn chơi có tiếng của thành phố Starling - Oliver Queen mất tích và không có hy vọng sống sót. Năm năm sau, anh bất ngờ xuất hiện trên một hòn đảo xa xôi ở Thái Bình Dương. Trở về nhà, tất cả người thân không nhận ra được bên trong Oliver đã có một sự đổi thay mạnh mẽ, trừ một người là mẹ của anh - Moira.",
            is_top: false,
        },
        {
            _id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23"),
            name: "Người hùng tia chớp (Phần 5)-The Flash (Season 5)",
            author: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a7c"),
            poster: "http://image.phimmoi.net/film/7584/poster.medium.jpg",
            banner: "http://image.phimmoi.net/post/2018/10/17/arrow-cw-season-7-ratings-canceled-or-renewed-season-8-e1539641523613.jpg",
            trailers: [
                "x-6HwQ_6Iu8"
            ],
            images: [
                "https://image.tmdb.org/t/p/original/mmxxEpTqVdwBlu5Pii7tbedBkPC.jpg",
                "https://image.tmdb.org/t/p/original/9NzRllYCJyvn8SUnif6HyHPvLNH.jpg",
                "https://image.tmdb.org/t/p/original/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
                "https://image.tmdb.org/t/p/original/6ZdQTBy20HzWudZthAV7NkZWfIb.jpg",
                "https://image.tmdb.org/t/p/original/lhBBQ5SL956mYp4oyv3b5yHMc4o.jpg",
                "https://image.tmdb.org/t/p/original/AqHNEp9i4cemeHM6088tlzq2tgZ.jpg",
            ],
            actors: [
                "http://image.phimmoi.net/profile/11298/medium.jpg",
                "http://image.phimmoi.net/profile/11299/medium.jpg",
                "http://image.phimmoi.net/profile/7214/medium.jpg",
                "http://image.phimmoi.net/profile/11301/medium.jpg",
                "http://image.phimmoi.net/profile/11302/medium.jpg",
                "http://image.phimmoi.net/profile/11303/medium.jpg",
            ],
            genre: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a83"),
            description: "The Flash phần 5 tiếp tục tập trung vào khoa học Barry Allen, người trở thành siêu anh hùng với sức mạnh và tốc độ đáng kinh ngạc sau khi bị sét đánh do vụ nổ máy gia tốc Harrison Wells.",
            is_top: false,
        },
    ])
}
exports.down = ()=>{
	return Promise.all([
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a11")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a12")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a13")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a14")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a15")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a16")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a17")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a18")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a19")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a20")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a21")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a22")}),
        Film.deleteOne({_id: mongoose.Types.ObjectId("5bcf03c89036025ad43e5a23")}),
    ])
}