
import axios from 'axios';
const product_01_image_01 = require('../images/products/product01.jpg')
const product_01_image_02 = require('../images/products/product01 (2).jpg')
// const product_01_image_03 = require('../images/products/product-01 (3).jpg')

const product_02_image_01 = require('../images/products/product02.jpg')
const product_02_image_02 = require('../images/products/product02 (2).jpeg')

const product_03_image_01 = require('../images/products/product03.jpg')
const product_03_image_02 = require('../images/products/product03 (2).jpg')

const product_04_image_01 = require('../images/products/product04.jpg')
const product_04_image_02 = require('../images/products/product04 (2).jpg')

const product_05_image_01 = require('../images/products/product05.jpg')
const product_05_image_02 = require('../images/products/product05 (2).jpg')

const product_06_image_01 = require('../images/products/product06.jpg')
const product_06_image_02 = require('../images/products/product06 (2).jpg')

const product_07_image_01 = require('../images/products/product07.jpg')
const product_07_image_02 = require('../images/products/product07 (2).jpg')

const product_08_image_01 = require('../images/products/product08.jpg')
const product_08_image_02 = require('../images/products/product08 (2).jpg')

const product_09_image_01 = require('../images/products/product09.jpg')
const product_09_image_02 = require('../images/products/product09 (2).jpg')

const product_10_image_01 = require('../images/products/product10.jpg')
const product_10_image_02 = require('../images/products/product10 (2).png')

const product_11_image_01 = require('../images/products/product11.jpg')
const product_11_image_02 = require('../images/products/product11 (2).png')

const product_12_image_01 = require('../images/products/product12.jpg')
const product_12_image_02 = require('../images/products/product12 (2).jpg')

const product_13_image_01 = require('../images/products/product13.jpg')
const product_13_image_02 = require('../images/products/product13 (2).jpg')
const product_14_image_01 = require('../images/products/product14.jpeg')
const product_14_image_02 = require('../images/products/product14 (2).jpeg')
const product_15_image_01 = require('../images/products/product15.jpg')
const product_15_image_02 = require('../images/products/product15 (2).jpg')
const product_16_image_01 = require('../images/products/product16.jpg')
const product_16_image_02 = require('../images/products/product16 (2).png')
const product_17_image_01 = require('../images/products/product17.jpg')
const product_17_image_02 = require('../images/products/product17 (2).jpg')
const product_18_image_01 = require('../images/products/product18.jpg')
const product_18_image_02 = require('../images/products/product18 (2).jpg')
const product_19_image_01 = require('../images/products/product19.jpg')
const product_19_image_02 = require('../images/products/product19 (2).jpg')
const product_20_image_01 = require('../images/products/product20.jpg')
const product_20_image_02 = require('../images/products/product20 (2).jpg')
const product_21_image_01 = require('../images/products/product21.jpg')
const product_21_image_02 = require('../images/products/product21 (2).jpg')
const product_22_image_01 = require('../images/products/product22.jpg')
const product_22_image_02 = require('../images/products/product22 (2).jpg')
const product_23_image_01 = require('../images/products/product23.png')
const product_23_image_02 = require('../images/products/product23 (2).jpg')
const product_24_image_01 = require('../images/products/product24.jpg')
const product_24_image_02 = require('../images/products/product24 (2).jpg')
const product_25_image_01 = require('../images/products/product25.jpg')
const product_25_image_02 = require('../images/products/product25 (2).jpg')
const product_26_image_01 = require('../images/products/product26.jpg')
const product_26_image_02 = require('../images/products/product26 (2).jpg')

const product_27_image_01 = require('../images/products/product27.jpg')
const product_27_image_02 = require('../images/products/product27 (2).jpg')
const product_28_image_01 = require('../images/products/product28.jpg')
const product_28_image_02 = require('../images/products/product28 (2).jpeg')
const product_29_image_01 = require('../images/products/product29.jpg')
const product_29_image_02 = require('../images/products/product29 (2).png')
const product_30_image_01 = require('../images/products/product30.jpg')
const product_30_image_02 = require('../images/products/product30 (2).png')


// var products =[];
// axios.get('http://192.168.1.6:8080/api/v1/all_product')
//         .then((res) => {
//              products = res.data;
//              console.log(products)
//              return products
//         })
//         .catch(err => {
//             console.log(err);
//         })








const products = [
    {
        title: "Samsung Galaxy M53",
        price: '12490000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "dien-thoai",
        colors: ["white", "red", "orange"],
        slug: "dien-thoai-01",
        size: ["64GB", "128GB", "256GB"],
        description: "Samsung đã trình làng Galaxy M53 với ba phiên bản màu vô cùng đẹp mắt như mình đang cầm trên tay, với tone màu có hơi sẫm đi một tí làm toát lên một vẻ huyền bí đầy cuốn hút và thanh lịch."
    },
    {
        title: "iPhone 13 Pro Max",
        price: '29290000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "dien-thoai",
        colors: ["white", "red", "blue"],
        slug: "dien-thoai-02",
        size: ["64GB", "128GB", "256GB"],
        description: "iPhone mới kế thừa thiết kế đặc trưng từ iPhone 12 Pro Max khi sở hữu khung viền vuông vức, mặt lưng kính cùng màn hình tai thỏ tràn viền nằm ở phía trước."
    },
    {
        title: "OPPO Reno7 Z 5G",
        price: '10490000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "dien-thoai",
        colors: ["white", "red", "orange", "yellow"],
        slug: "dien-thoai-03",
        size: ["64GB", "128GB", "256GB"],
        description: "Điện thoại OPPO Reno7 Z 5G có khung viền vát phẳng, vuông vức trendy làm cho máy toát lên nét hiện đại và năng động. Bốn góc được bo cong mềm mại tạo cảm giác thoải mái và nhẹ nhàng (chỉ 173 g). Với thiết kế nguyên khối làm tổng thể máy trở nên cực kỳ chắc chắn, không chỉ đẹp mà còn tăng độ bền."
    },
    {
        title: "POCO C40 ",
        price: '3490000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "dien-thoai",
        colors: ["white", "orange", "blue"],
        slug: "dienthoai-04",
        size: ["64GB", "128GB", "256GB"],
        description: "Cung cấp năng lượng cho C40 là viên pin khủng với dung lượng 6000 mAh. Mình khá bất ngờ với thời gian sử dụng liên tục của điện thoại khi đạt đến hơn 10 tiếng* cho các tác vụ rất cơ bản như chơi game, xem phim, mạng xã hội. Đây quả thật là một chiếc điện thoại pin khủng cho bạn thời gian trải nghiệm gần như 1 ngày với mọi tác vụ."
    },
    {
        title: "Vivo Y01 ",
        price: '2990000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "dien-thoai",
        colors: ["yellow", "pink"],
        slug: "dien-thoai-05",
        size: ["64GB", "128GB", "256GB"],
        description: "Ấn tượng đầu tiên khi mình cầm chiếc máy trên tay là một cảm giác chắc chắn và đầm tay, tuy tổng thể được làm từ nhựa nhưng vẫn mang đến một độ bền bỉ nhất định, tình trạng “ọp ẹp” gần như không xuất hiện."
    },
    {
        title: "Realme C21-Y 4GB",
        price: '4290000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "dien-thoai",
        colors: ["black"],
        slug: "dien-thoai-06",
        size: ["64GB", "128GB", "256GB"],
        description: "Vẻ ngoài của Realme C21-Y có thiết kế độc đáo với các khối hình học đan chéo tạo hiệu ứng thị giác đặc biệt khi nhìn vào, vừa độc đáo vừa sang trọng. Máy được thiết kế nguyên khối với mặt lưng và khung được làm từ chất liệu nhựa cao cấp có độ bền cao, đảm bảo sự chắc chắn, nhẹ nhàng và tối ưu giá thành của sản phẩm."
    },
    {
        title: "Nokia G11",
        price: '3890000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "dien-thoai",
        colors: ["white", "red", "orange", "blue"],
        slug: "dien-thoai-07",
        size: ["64GB", "128GB", "256GB"],
        description: "Máy trang bị tấm nền TFT LCD giúp tiết kiệm năng lượng một cách tối ưu nhằm cho ra thời gian sử dụng điện thoại lâu dài cùng màu sắc hiển thị tương đối hài hòa. Với độ phân giải HD+ giúp hiển thị hình ảnh có độ chi tiết khá cao trên một màn hình kích thước 6.5 inch."
    },
    {
        title: "Lenovo Ideapad 1 11IGL05",
        price: '5990000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "lap-top",
        colors: ["white", "red", "black"],
        slug: "lap-top-08",
        size: ["256GB"],
        description: "là chiếc laptop mỏng nhẹ và một mức giá lý tưởng mà phụ huynh có thể mua cho học sinh, con em. Đáp ứng tốt các tác vụ học tập trên các phần mềm Office, học trực tuyến hay giải trí cơ bản."
    },
    {
        title: "Asus TUF Gaming FX506LH",
        price: '16690000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "lap-top",
        colors: ["white", "blue"],
        slug: "lap-top-09",
        size: ["512GB"],
        description: "Với cấu hình khoẻ từ card rời NVIDIA GeForce GTX cùng một thiết kế ấn tượng, laptop Asus TUF Gaming FX506LH i5 (HN188W) sẽ mang đến nhiều trải nghiệm thú vị cho các game thủ."
    },
    {
        title: "Laptop Acer Nitro 5 gaming",
        price: '19190000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "lap-top",
        colors: ["blue", "black"],
        slug: "lap-top-10",
        size: ["512GB"],
        description: "Phá cách với diện mạo mạnh mẽ đến từ laptop Acer Nitro 5 Gaming AN515 45 R6EV R5 5600H (NH.QBMSV.006) mang đến cho người dùng hiệu năng ổn định, hỗ trợ bạn trong mọi tác vụ hằng ngày hay chiến những trận game cực căng một cách mượt mà.<br/>Kiểu dáng nổi bật, thu hút mọi ánh nhìn <br/>Laptop Acer Nitro với tính bền bỉ vượt bậc khi được trang bị lớp vỏ nhựa chắc chắn cùng trọng lượng không quá nặng cho một chiếc laptop gaming 2.2 kg và dày 23.9 mm, sẵn sàng cùng bạn đi đến bất kỳ đâu, phục vụ tốt cho cả nhu cầu công việc hay giải trí, cho phép bạn chiến game ở khắp mọi nơi trong cuộc hành trình."
    },
    {
        title: "Apple MacBook Air M1 2020",
        price: '28690000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "lap-top",
        colors: ["blue", "black"],
        slug: "lap-top-11",
        size: ["256GB"],
        description: "Laptop Apple Air M1 2020 có thiết kế đẹp, sang trọng với CPU M1 độc quyền từ Apple cho hiệu năng đồ họa cao, màn hình Retina hiển thị siêu nét cùng với hệ thống bảo mật tối ưu.<br/>Hiệu năng ấn tượng đến từ chip M1<br/>Chip M1 được Apple thiết kế dành riêng cho MacBook mang đến hiệu năng vượt trội. Thực hiện tốt các tác vụ văn phòng trên các phần mềm như Word, Excel, Powerpoint,... Thiết kế đồ hoạ cũng chuyên nghiệp không kém, cho phép bạn chỉnh sửa hình ảnh với dung lượng lớn, kết xuất 2D mượt mà trên các phần mềm Photoshop, AI, Figma,...<br/>Card đồ họa GPU 7 nhân đem lại hiệu suất cao đáng kinh ngạc, đồ họa cao hơn gấp 5 lần, thảo sức sáng tạo nội dung, kết xuất 3D ổn định, render video, phát trực tiếp với chất lượng cao với chất ảnh sắc nét cùng độ phân giải lên đến 4K.<br/>Laptop RAM 16 GB cho phép bạn sử dụng đa nhiệm, bạn có thể thao tác nhiều ứng dụng cùng một lúc thoải mái với những tác vụ như lướt web, soạn thảo văn bản, xem video hay thiết kế hình ảnh bằng Photoshop, Adobe IIIustrator,..."
    },
    {
        title: "Tai nghe bluetooth AirPods 2",
        price: '3490000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "phu-kien",
        colors: ["white"],
        slug: "phu-kien-12",
        size: ["16.5mm"],
        description: "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!<br><br><br>Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động <br><br><br> Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!<br><br><br>Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào. Cùng với đó, áo thun nữ cotton cổ tròn Yody có khả năng thâm shuts mồ hôi rất tốt nên người mặc không bị cảm giác bí bách, dính dính trên da khi đổ mồ hôi vào mùa hè. Bên cạnh đó, sản phẩm cũng chưa 5% spandex - loại sợi giúp co giãn, đàn hồi hiệu quả thích hợp mặc tới nhiều môi trường, ngay cả khi vận động"
    },
    {
        title: "Pin sạc dự phòng Polymer 10.000mAh",
        price: '245000',
        image01: product_13_image_01,
        image02: product_13_image_02,
        categorySlug: "phu-kien",
        colors: ["blue", "black"],
        slug: "phu-kien-",
        size: ["10Ah"],
        description: "Hiệu suất sạc tới 64%, dung lượng sạc dự phòng 10.000 mAh<br/>Hydrus PA CK01 có khả năng tương thích cao với nhiều dòng thiết bị di động, dung lượng pin và hiệu suất sạc cao cho phép sản phẩm sạc được nhiều lần cho 1 thiết bị hoặc sạc đa dạng thiết bị, nhờ đó bạn có thể yên tâm trải nghiệm các thiết bị thông minh, nhất là khi đi đến những vùng không có nguồn điện. <br/> Hỗ trợ lõi pin Polymer cho dòng xả liên tục giúp cấp nguồn cho thiết bị ổn định, độ bền cao, bảo vệ cho cả người dùng và phụ kiện."
    },
    {
        title: "Tai nghe Bluetooth wireless JBL",
        price: '990000',
        image01: product_14_image_01,
        image02: product_14_image_02,
        categorySlug: "phu-kien",
        colors: ["white", "black"],
        slug: "phu-kien-14",
        size: ["type-C"],
        description: "Thiết kế housing với đường nét tinh tế, uốn cong theo hình oval, bề mặt bằng nhựa sần tốt, bền bỉ, kháng vỡ, cầm nắm dễ chịu, xoay chuyển vị trí linh hoạt để đeo tai vừa vặn. Nút tai silicone mềm mại, nâng cao khả năng cách âm khi chọn nút tai phù hợp với khổ tai của mình."
    },
    {
        title: "Loa Bluetooth Mozard",
        price: '1000000',
        image01: product_15_image_01,
        image02: product_15_image_02,
        categorySlug: "phu-kien",
        colors: ["black"],
        slug: "phu-kien-15",
        size: ["36W"],
        description: "Loa Bluetooth Mozard BT100 có kiểu dáng đơn giản, các góc bo cong ôm trọn thân loa cho thiết kế hoàn thiện, sử dụng chất liệu vải để lọc âm và được bọc lớp da xung quanh tránh việc bám vân tay. Dạng loa Bluetooth nhỏ nhắn, dễ dàng mang theo để nghe nhạc cho các chuyến đi xa thêm thú vị, phấn khích. "
    },
    {
        title: "Apple Watch S6",
        price: '8191000',
        image01: product_16_image_01,
        image02: product_16_image_02,
        categorySlug: "smart-watch",
        colors: ["blue", "black","white","pink"],
        slug: "smart-watch-16",
        size: ["1.57inch"],
        description: "Chiếc Apple Watch S6 40mm viền nhôm dây silicone này vẫn giữ trọn vẹn nét tinh tế và sắc sảo trong thiết kế từ trước đến nay, mặt kính Ion-X strengthened glass ưu việt, viền nhôm được vát gọt công phu và dây đeo silicone co dãn tốt, êm tay."
    },
    {
        title: "Samsung Galaxy Watch 4",
        price: '5490000',
        image01: product_17_image_01,
        image02: product_17_image_02,
        categorySlug: "smart-watch",
        colors: ["black", "pink"],
        slug: "smart-watch-17",
        size: ["1.2inch"],
        description: "Phiên bản đồng hồ Samsung Galaxy Watch 4 này được thiết kế đơn giản với mặt đồng hồ dạng tròn có đường kính 40 mm thường thấy ở đồng hồ thông minh tạo nên phong cách năng động, cuốn hút. Khung viền đồng hồ được làm từ chất liệu nhôm bền chắc, trọng lượng nhẹ. Bên cạnh đó dây đeo silicone êm ái, không gây khó chịu khi đeo suốt ngày dài, kể cả khi người dùng vận động, tập thể thao ra nhiều mồ hôi tay."
    },
    {
        title: "Samsung Galaxy A33",
        price: '8490000',
        image01: product_18_image_01,
        image02: product_18_image_02,
        categorySlug: "dien-thoai",
        colors: ["blue", "black"],
        slug: "dien-thoai-18",
        size: ["128GB"],
        description: "Samsung Galaxy A33 5G 6GB ra mắt vào ngày 17/03, được xem là bản cập nhật khá lớn so với thế hệ tiền nhiệm Galaxy A32 về thiết kế đến thông số kỹ thuật bên trong, nhằm mang đến vẻ ngoài đẹp mắt cũng như cạnh tranh trực tiếp ở phần hiệu năng đối với các đối thủ cùng phân khúc giá."
    },
    {
        title: "iPhone 11 64GB",
        price: '12390000',
        image01: product_19_image_01,
        image02: product_19_image_02,
        categorySlug: "dien-thoai",
        colors: ["blue", "black"],
        slug: "dien-thoai-19",
        size: ["64GB","128GB"],
        description: "Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11 64GB có mức giá rẻ nhất nhưng vẫn được nâng cấp mạnh mẽ như iPhone Xr ra mắt trước đó."
    },
    {
        title: "OPPO A95 ",
        price: '6990000',
        image01: product_20_image_01,
        image02: product_20_image_02,
        categorySlug: "dien-thoai",
        colors: ["blue", "black"],
        slug: "dien-thoai-20",
        size: ["128GB"],
        description: "Bên cạnh phiên bản 5G, OPPO còn bổ sung phiên bản OPPO A95 4G với giá thành phải chăng tập trung vào thiết kế năng động, sạc nhanh và hiệu năng đa nhiệm ấn tượng sẽ giúp cho cuộc sống của bạn thêm phần hấp dẫn, ngập tràn niềm vui."
    },
    {
        title: "Intel NUC M15 Kit ",
        price: '24990000',
        image01: product_21_image_01,
        image02: product_21_image_02,
        categorySlug: "lap-top",
        colors: ["blue", "black"],
        slug: "lap-top-21",
        size: ["512GB"],
        description:"Nếu bạn đang tìm kiếm một phiên bản laptop cao cấp sở hữu đầy đủ các tính năng vượt trội với cấu hình mạnh mẽ và phong cách thiết kế thời thượng, sang trọng, Intel NUC M15 i5 (BBC510EAUXBC1) sẽ là một sự lựa chọn sáng giá, đáp ứng mọi nhu cầu cần thiết cho người dùng.<br/>Thu hút mọi ánh nhìn với ngoại hình tối giản, thanh lịch<br/>Khoác lên mình vẻ ngoài tối giản nhưng không kém phần thời thượng với lớp vỏ kim loại cứng cáp cùng gam màu xám chủ đạo, laptop Intel NUC tạo nên một điểm nhấn đặc biệt làm nổi bật hơn hẳn mỗi khi nó xuất hiện ở bất kỳ không gian làm việc nào. Bề dày 14.9 mm và trọng lượng 1.65 kg vẫn có thể cất gọn gàng vào balo và đồng hành cùng người dùng đến những chuyến công tác xa."
    },
    {
        title: "Acer TravelMate TMB311",
        price: '5490000',
        image01: product_22_image_01,
        image02: product_22_image_02,
        categorySlug: "lap-top",
        colors: ["blue", "black"],
        slug: "lap-top-22",
        size: ["256GB"],
        description:"Thiết kế đơn giản, chắc chắn<br/>Acer TravelMate B3 được chế tác từ chất liệu nhựa cứng cáp, trọng lượng 1.4 kg và độ dày 20.99 mm, lúc cầm mình cảm thấy chiếc máy sẽ hơi nặng một xíu nhưng bù lại rất chắc tay, cứng cáp và không quá cồng kềnh."
    },
    {
        title: "MacBook Pro M1 2020",
        price: '31490000',
        image01: product_23_image_01,
        image02: product_23_image_02,
        categorySlug: "lap-top",
        colors: ["blue", "black"],
        slug: "lap-top-23",
        size: ["256GB"],
        description:"Thiết kế mỏng nhẹ, cao cấp<br/>Vẫn là thiết kế kim loại nguyên khối thường thấy ở các thế hệ trước, phiên bản MacBook Pro luôn mang lại một ngoại hình sang trọng đẳng cấp, mỏng nhẹ chỉ 15.6 mm từ độ dày, trọng lượng 1.4 kg có thể tự tin đồng hành mọi lúc, cùng bạn đến bất cứ đâu mà bạn muốn như đi học, đi chơi, đi công tác,..."
    },
    {
        title: "MSI Modern 14 B11MOU",
        price: '11610000',
        image01: product_24_image_01,
        image02: product_24_image_02,
        categorySlug: "lap-top",
        colors: ["blue", "black"],
        slug: "lap-top-24",
        size: ["256GB"],
        description:"Thu hút mọi ánh nhìn với lối thiết kế sang trọng<br/>Lớp vỏ kim loại bền chắc có gam màu xám chủ đạo đã toát lên vẻ sang trọng và thời thượng cho laptop MSI Modern, giúp cho chủ nhân sở hữu nó nổi bật hơn hẳn dù làm việc trong văn phòng hay những quán cafe đông người. Độ linh hoạt được hoàn thiện đáng kể khi máy sở hữu trọng lượng chỉ vỏn vẹn 1.3 kg, cho phép bạn di chuyển đến bất cứ mọi không gian bạn muốn mà không lo cồng kềnh, nặng nhọc."
    },
    {
        title: "Dell Gaming G15 5515",
        price: '20990000',
        image01: product_25_image_01,
        image02: product_25_image_02,
        categorySlug: "lap-top",
        colors: ["blue", "black"],
        slug: "lap-top-25",
        size: ["256GB"],
        description:"Chơi game mượt mà cùng chip AMD<br/>Laptop Dell sở hữu CPU AMD Ryzen 5 5600H kết hợp với card đồ họa NVIDIA RTX 3050 4 GB giúp khả năng chơi game trơn tru. Trong lúc trải nghiệm, hầu hết khi chiến các tựa game trực tuyến như Liên Minh Huyền Thoại, CS:GO,... tình trạng giật lag thường xảy ra ở các dòng laptop gaming giá rẻ do máy thu bắt sóng internet yếu, tuy nhiên chiếc máy này đã vượt qua và chạy tốt, không ảnh hưởng đến trải nghiệm chơi game nhờ công nghệ Wi-Fi 6 (802.11ax)."
    },
    {
        title: "Laptop LG Gram 16 2021 i7",
        price: '3889000',
        image01: product_26_image_01,
        image02: product_26_image_02,
        categorySlug: "lap-top",
        colors: ["blue", "black"],
        slug: "lap-top-26",
        size: ["256GB"],
        description:"Laptop LG Gram 16 2021 i7 (16Z90P-G.AH73A5) với thiết kế siêu mỏng cùng cấu hình mạnh với chip Intel thế hệ 11, card đồ họa Intel Iris Xe Graphics đáp ứng mọi nhu cầu người dùng từ văn phòng đến đồ họa chuyên nghiệp.<br/>  Thiết kế tinh gọn, siêu di độngLaptop LG Gram được thiết kế thân máy bằng hợp kim Nano Carbon - Magie màu bạc đặc trưng chỉ nhẹ 1.190 kg và mỏng 16.8 mm. Vì vậy, dù bạn đi đâu, bạn cũng có thể tiện lợi mang theo cả ngày dài. "
    },
    {
        title: "Ốp lưng iPhone 13 pro max",
        price: '1100000',
        image01: product_27_image_01,
        image02: product_27_image_02,
        categorySlug: "phu-kien",
        colors: ["orange", "black"],
        slug: "phu-kien-27",
        size: ["normal"],
        description:"Ốp lưng dành cho iPhone 13 Pro Max, sản phẩm chính hãng Apple.<br/>Chất liệu nhựa dẻo dùng bền bỉ, chịu lực tốt, dễ tháo lắp trên điện thoại.<br/>Bảo vệ tốt thân máy khỏi trầy xước, hư hại khi va chạm. <br/> Hỗ trợ sạc không dây Magsafe tiện lợi."
    },
    {
        title: "Apple Watch Series 7",
        price: '9259000',
        image01: product_28_image_01,
        image02: product_28_image_02,
        categorySlug: "smart-watch",
        colors: ["orange", "black"],
        slug: "smart-watch-28",
        size: ["1.61inch"],
        description:"Thiết kế của Apple Watch S7 GPS 41 mm thừa hưởng nhiều nét tương đồng với 'người anh' Apple Watch S6 nhưng các góc cạnh được vát tròn mềm mại hơn mang đến cho người đeo cảm giác thanh lịch nhưng không kém phần năng động. Chiếc smartwatch thế hệ thứ 7 được nhà Táo trang bị màn hình OLED 1.61 inch với viền màn hình mỏng hơn 40%, nâng diện tích màn hình lên 20% và nội dung hiển thị trên màn hình cũng nhiều hơn 50% so với thế hệ cũ."
    },
    {
        title: "Apple Watch SE 40mm",
        price: '7371000',
        image01: product_29_image_01,
        image02: product_29_image_02,
        categorySlug: "smart-watch",
        colors: ["orange", "black"],
        slug: "smart-watch-29",
        size: ["40mm"],
        description:"Apple Watch SE 40mm viền nhôm dây silicone hồng có thiết kế bo tròn 4 góc giúp thao tác vuốt chạm thoải mái hơn. Mặt kính cường lực Ion-X strengthened glass với kích thước 1.57 inch, hiển thị rõ ràng. Khung viền nhôm chắc chắn cùng dây đeo silicone có độ đàn hồi cao, êm ái, tạo cảm giác thoải mái khi đeo"
    },
    {
        title: "Samsung Galaxy Watch 4",
        price: '6320000',
        image01: product_30_image_01,
        image02: product_30_image_02,
        categorySlug: "smart-watch",
        colors: ["white", "black"],
        slug: "smart-watch-30",
        size: ["42mm"],
        description:"Đồng hồ Samsung Galaxy Watch 4 Classic 42mm sở hữu khung viền làm từ thép không gỉ bền chắc và được chứng nhận độ bền MIL-STD-810G, cho khả năng chống ăn mòn tốt hơn trong những điều kiện thời tiết khác nhau. Chiếc đồng hồ điều hướng linh hoạt với vòng xoay bezel độc đáo tạo nên vẻ đẹp sang trọng vượt thời gian. Samsung đã sử dụng phần dây đeo silicone mang lại cho bạn cảm giác êm ái, thỏa sức tham gia các hoạt động thể thao như chạy bộ, đạp xe,..."
    },


    // 20 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(a => a.slug === slug)
const getProductsByCategorySlug =(categorySlug) => {
    
    return  (products.filter(a => a.categorySlug === categorySlug))
}

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    // console.log(res)
    // console.log('sorted')
    // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getProductsByCategorySlug,
    getCartItemsInfo
}
export default productData