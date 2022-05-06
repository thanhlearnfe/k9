

var vm = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components:{
      CoolLightBox,
    },
    data: {
      overlay: false,
      zIndex: 0,
      videoIndex:0,
      indexMap:null,
      tab:null,
      tabInfo:null,
      tab3D:null,
      tabImg:null,
      tabHis:null,
      tabTimelines:null,
      items:[
        {
          id:2,
          title: "THÔNG TIN<br> GIỚI THIỆU CHUNG",
          padding:"74px 76px",

        },
        {
          id:3,
          title:  "MÔ HÌNH 3D",
          padding:  "95px 120px",

        },
        {
          id:4,
          title: "THƯ VIỆN <br>HÌNH ẢNH, VIDEO",
          padding: "76px 91px",

        },
        {
          id:6,
          title:  "LỊCH SỬ<br> CỤC BƯU ĐIỆN TW",
          padding: "76px 84px",

        },
        {
          id:5,
          title:  "THAM QUAN 3D<br> BẢN ĐỒ KẾT NỐI",
          padding:"76px 97px",

        },
       
        {
          id:7,
          title:   "CÁC DI TÍCH KHÁC<br> TRONG KHU DI TÍCH K9",
          padding: "76px 58px",

        },
       
       
       
       
      ],
      itemsIntro:[
        {
          id:1,
          title: "Chức năng, nhiệm vụ",
          bgrcolor:'#E8EEF6'
        },
        {
          id:2,
          title: "Nhân sự vận hành",
          bgrcolor:'#E8EEF6'
        },
        {
          id:3,
          title: "Lịch sử xây dựng, phục vụ",
          bgrcolor:'#E8EEF6'
        }
       
        
      ],
      libraImgs:[
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-1.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-2.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-3.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-17.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-18.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-19.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-20.jpg',
        './images/libra/test2.png',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-23.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-24.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-25.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-26.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-27.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-28.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-29.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-30.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-31.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-32.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-33.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-34.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-35.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-36.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-37.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-38.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-39.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-40.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-41.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-42.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-43.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-44.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-45.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-46.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-47.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-48.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-49.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-50.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-51.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-52.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-53.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-54.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-55.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-56.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-57.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-58.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-59.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-60.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-61.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-62.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-63.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-64.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-65.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-66.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-67.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-68.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-69.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-70.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-71.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-72.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-73.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-74.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-75.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-76.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-77.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-78.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-79.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-80.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-81.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-82.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-83.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-84.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-85.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-86.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-87.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-88.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-89.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-90.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-91.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-92.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-93.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-94.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-95.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-96.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-97.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-98.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-99.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-100.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-101.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-102.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-103.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-104.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-105.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-106.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-107.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-108.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-109.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-110.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-111.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-112.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-113.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-114.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-115.jpg',
        './images/libra//images/libra/Lich su Cuc BUU DIEN TRUNG UONG-116.jpg',

       
      ],
      libraText:[
        
          
              {
                  content: "“…Việc liên lạc là một việc quan trọng bậc nhất trong công tác cách mạng vì chính nó quyết định sự thống nhất chỉ huy, sự phân phối lực lượng và do đó bảo đảm thắng lợi…”. <br>- Chủ tịch Hồ Chí Minh -<br>"
              },
              {
                  content: "CỤC BƯU ĐIỆN TRUNG ƯƠNG<br>Là đơn vị đặc biệt, đảm bảo phục vụ thông tin <br>an toàn, bí mật cho Đảng và Nhà nước"
              },
              {
                  content: "Tổ chức hội thảo Lịch sử Cục Bưu điện Trung ương ngày 6 tháng 11 năm 1997 với sự có mặt của Đại tướng Võ Nguyên Giáp, Tổng cục Trưởng Tổng cục Bưu Điện Mai Liêm Trực và hơn 50 cán bộ lãnh đạo phòng TW Đảng, Văn phòng Chính phủ Cục Bưu điện TW và các vị lão thành thuộc lực lượng Bưu điện chuyên trách phục vụ Đảng và Chính phủ Thông qua cầu Truyền hình tại Hội trường Cục Bưu điện TW 16 Đường Hùng Vương, Hà Nội và T78 số 10 Đoàn Công Bửu thành phố Hồ Chí Minh"
              },
              {
                  content: "QUYẾT ĐỊNH THÀNH LẬP, THƯ CỦA CÁC ĐỒNG CHÍ LÃNH <br>ĐẠO GỬI CỤC BƯU ĐIỆN TRUNG ƯƠNG"
              },
              {
                  content: "QUYẾT ĐỊNH THÀNH LẬP, THƯ CỦA CÁC ĐỒNG CHÍ LÃNH <br>ĐẠO GỬI CỤC BƯU ĐIỆN TRUNG ƯƠNG <br>"
              },
              {
                  content: "QUYẾT ĐỊNH THÀNH LẬP, THƯ CỦA CÁC ĐỒNG CHÍ LÃNH <br>ĐẠO GỬI CỤC BƯU ĐIỆN TRUNG ƯƠNG<br>"
              },
              {
                  content: "QUYẾT ĐỊNH THÀNH LẬP, THƯ CỦA CÁC ĐỒNG CHÍ LÃNH <br>ĐẠO GỬI CỤC BƯU ĐIỆN TRUNG ƯƠNG<br>"
              },
              {
                  content: "HOÀNG VĂN HẢI <br>Giám đốc Bưu điện TW <br>từ 04/2011 đến 06/2015"
              },
              {
                  content: "HOÀNG MINH CƯỜNG <br>Cục trưởng Cục Bưu điện TW <br>từ 07/2015<br>"
              },
              {
                  content: "Trần Quang Đạt<br>Cục phó giai đoạn 1976 - 1990"
              },
              {
                  content: "Nguyễn Hồng Trường<br>Cục phó giai đoạn 1997 - 2008"
              },
              {
                  content: "Nguyễn Xuyến<br>Cục phó giai đoạn 1984 - 1990"
              },
              {
                  content: "Nguyễn Khánh Tường<br>Cục phó giai đoạn 1997 - 2015<br>"
              },
              {
                  content: "Trần Quang Minh<br>Phó giám đốc từ 2008"
              },
              {
                  content: "Trần Duy Ninh<br>Phó giám đốc từ 2012"
              },
              {
                  content: "Mai Thị Tường<br>Phó giám đốc 2008 - 2014<br>"
              },
              {
                  content: "Bản đồ ghi nhận hệ thống thông tin liên lạc trong và ngoài nước của Đảng Cộng sản Đông Dương năm 1930 trong hồ sơ mật thám Pháp<br>"
              },
              {
                  content: "Đồng chí Nguyễn Công Thu một trong những giao thông viên đầu tiên của Đảng"
              },
              {
                  content: "Đồng chí Nguyễn Lương Bằng, một trong những giao thông viên đầu tiên của Đảng năm 1930 (sau này đồng chí là Phó Chủ tịch nước Việt Nam).<br>"
              },
              {
                  content: "Đồng chí Nguyễn Thị Nghĩa một trong những giao thông viên đầu tiên của Đảng"
              },
              {
                  content: "Chủ tịch Hồ Chí Minh đến thăm Ban Vô tuyến điện Trung ương năm 1949"
              },
              {
                  content: "Từ trái sang phải: đ/c Nam Sơn; Nguyễn Văn Học, Nguyễn Văn Đỗ trên đường đi làm nhiệm vụ ở ATK Việt Bắc năm 1950<br>"
              },
              {
                  content: "Các đồng chí trong văn phòng Ty giao thông đặc biệt tại chiến khu Việt Bắc<br>"
              },
              {
                  content: "Đồng chí Trần Quang Bình (người đứng thứ 3 từ bên trái sang), Giám đốc phụ trách <br>Nha Bưu điện, Vô tuyến điện Việt Nam tại chiến khu Việt Bắc năm 1951"
              },
              {
                  content: "Hồ Chủ tịch chụp ảnh với các đại biểu về dự Đại hội anh hùng chiến sỹ thi đua toàn quốc lần thứ I, ngày 1-5-1952 trong đó có 4 Chiến sỹ thi đua của Ngành Bưu điện. Hàng ghế đầu từ trái sang phải: ông Nguyễn Văn Ngôn, ông Nguyễn Văn Đỗ (là cán bộ Ty Bưu điện đặc biệt Trung ương), bà Nguyễn Thị Điều (người chít khăn trắng) và bà Nguyễn Thị Lâm (ngồi cạnh bà Điều)<br>"
              },
              {
                  content: "Bác Hồ và đồng chí Nguyễn Lương Bằng thăm bộ phận Điện đài phục vụ Đại hội Đảng lần thứ 3 - năm 1960<br>"
              },
              {
                  content: "Bác Hồ chụp ảnh chung với anh chị em phục vụ thông tin liên lạc tại Đại hội Đảng toàn quốc lần thứ III năm 1960<br>"
              },
              {
                  content: "Bác Hồ chụp ảnh kỷ nhiệm với một số đồng chí phục vụ Đại hội III của Đảng <br>(Đ/c Vũ Chính Xương đứng bên trái Bác, sau này là Cục phó Cục BĐTW <br>và đ/c Võ Văn Thông, cán bộ của Cục) "
              },
              {
                  content: "Thủ tướng Phạm Văn Đồng chụp ảnh cùng với chị em Điện thoại viên trong tổng đài 5 của CP16"
              },
              {
                  content: "Khi đế quốc Mỹ leo thang chiến tranh, ném bom, bắn phá Miền Bắc nước ta Đài điện thoại sơ tán một bộ phận lên hang núi Chùa Thầy (Quốc Oai, Hà Tây)<br>"
              },
              {
                  content: "Tập thể điện thoại viên Tổng đài, Đạt danh hiệu Tổ lao động Xã hội chủ nghĩa đầu <br>tiên của Cục Bưu điện Trung ương năm 1967"
              },
              {
                  content: "Cố vấn Liên Xô thăm Cục Bưu điện Trung ương, chụp ảnh chung với các đồng chí Lãnh đạo Ngành Bưu điện và Cục Bưu điện Trung ương<br>"
              },
              {
                  content: "Đồng chí Vũ Chính Xương (người đứng bên trái) Phó Cục trưởng Cục Bưu điện Trung ương với anh em cán bộ kỹ thuật tại xe thông tin Viba di động năm 1969"
              },
              {
                  content: "Hang đặt thiết bị của Đài phát C32 trong chiến tranh chống Mỹ (1969-1975)<br>"
              },
              {
                  content: "Tổ điện báo C1 Đài thu - Cục Bưu điện Trung ương<br>Đặt dưới hầm CP16 liên lạc 24/24 giờ với Đại sứ quán Việt Nam tại Pari phục vụ phái đoàn đàm phán của ta tại hội nghị Pari (1969 - 1972) về chấm dứt chiến tranh Việt Nam."
              },
              {
                  content: "Đồng chí Lã Tiến Vượng (người thứ 4 từ trái sang) được chụp ảnh chung với các đ/c <br>Cay Sỏn Phôm Vihản Tổng Bí thư Đảng Nhân dân cách mạng Lào, Hoàng thân XU <br>pha Nu Vông Chủ tịch nước Cộng hòa Nhân dân Lào trong thời gian Cục cử sang giúp bạn phục vụ Đại hội Đảng Nhân dân Cách mạng Lào - 1972<br>"
              },
              {
                  content: "Điện thoại viên tiếp dây tại tổng đài 8 đặt dưới hầm nhà số 8 Chu Văn An - Hà Nội"
              },
              {
                  content: "Đồng chí Xuân Thủy (người đứng giữa) trưởng đoàn đại biểu Chính phủ Việt Nam Dân chủ Cộng hòa chụp ảnh chung với Điện báo viên Cục Bưu điện Trung ương (trong đó có đ/c Huỳnh Hữu Cự - người thứ 3 từ trái sang)<br>"
              },
              {
                  content: "Thủ tướng Phạm Văn Đồng chụp ảnh chung với cán bộ công nhân viên Cục Bưu điện Trung ương tại Phủ Thủ tướng ngay sau khi được tin Miền Nam hoàn toàn giải phóng, trưa 30 tháng 4 năm 1975<br>"
              },
              {
                  content: "Tổng Bí thư Lê Duẩn - chụp ảnh chung với đội Giao thông hỏa tốc Cục Bưu điện Trung ương tại nhà riêng - năm 1978"
              },
              {
                  content: "Đồng chí Trần Quang Bình tại Hội nghị thống nhất quản lý Ngành Bưu điện hai miền Bắc - Nam<br>"
              },
              {
                  content: "Hệ thống máy vô tuyến có công suất từ 150 đến 5000W tại Đài phát tín Cầu Giấy phục vụ liên lạc giữa Hà Nội với các chiến trường và Đại sứ quán Việt Nam ở nước ngoài"
              },
              {
                  content: "Toàn thể cán bộ công nhân viên Phòng thông tin T78 TP.Hồ Chí Minh (28/10/1983)<br>"
              },
              {
                  content: "Đồng chí Phạm Văn Nam phát biểu tại Hội nghị Tổng kết công tác của Cục Bưu điện Trung ương năm 1985"
              },
              {
                  content: "Lãnh đạo Cục Bưu điện Trung ương họp bàn biện pháp nâng cao chất lượng thông tin hệ I<br>"
              },
              {
                  content: "Tổng Bí thư Lê Duẩn chụp ảnh chung với cán bộ công nhân viên Cục Bưu điện Trung ương (07/ 04/1985)<br>"
              },
              {
                  content: "Cán bộ, công nhân viên Phòng thông tin B68 phục vụ thông tin cho đoàn Chuyên gia K (CPC) từ năm 1979 - 1989<br>"
              },
              {
                  content: "Đồng chí Đặng Văn Thân - Tổng Cục trưởng Tổng cục Bưu điện và đ/c Nguyễn Tiến Chất, phó Văn phòng Trung ương Đảng cắt băng khánh thành tổng đài điện tử JS 6000 tại Hà Nội (31/5/1991)"
              },
              {
                  content: "Phòng khai thác Bưu chính hệ I thuộc Cục Bưu điện Trung ương tại Hà Nội<br>"
              },
              {
                  content: "Bàn OP của tổng đài điện tử số JS6000 của Cục Bưu điện Trung ương"
              },
              {
                  content: "Những đơn vị xuất sắc trong công tác thông tin hệ I tại Hội nghị <br>tổng kết công tác 3 năm 1994 - 1996<br>"
              },
              {
                  content: "Lễ bế giảng lớp Trung cấp tại chức Cục Bưu điện Trung ương<br>"
              },
              {
                  content: "Lãnh đạo Cục Bưu điện Trung ương cùng anh em trực tiếp phục vụ Đại hội Đảng toàn quốc lần thứ VIII"
              },
              {
                  content: "Hội nghị Tổng kết công tác thông tin hệ I, 3 năm 1994 - 1996"
              },
              {
                  content: "Đại tướng Võ Nguyên Giáp đến thăm tổng đài đa dịch vụ của Cục Bưu điện Trung ương tại T78 T.P Hồ Chí Minh (ngày 22 tháng 10 năm 1996)<br>"
              },
              {
                  content: "Cục Bưu điện Trung ương đang giới thiệu tổng đài đa dịch vụ ISDN phục vụ Trung ương với Ban Bí thư Trung ương Đảng tại Hội trường Bộ Chính trị (năm 1997)"
              },
              {
                  content: "Lãnh đạo Ngành Bưu điện và Cục Bưu điện Trung ương giới thiệu Tổng đài đa dịch vụ ISDN và dịch vụ Internet với đồng chí Đỗ Mười tại Hội nghị TW 2 <br>khóa VIII tại Hội trường Bộ Chính trị<br>"
              },
              {
                  content: "Lễ đón nhận huân chương Lao động hạng Nhất và khánh thành mạng Viễn thông đa <br>dịch vụ Cục Bưu điện Trung ương giai đoạn 1996 - 1997"
              },
              {
                  content: "Các giao thông viên trực thuộc Trung tâm Bưu chính lên đường vận chuyển công văn tài liệu phục vụ Trung ương<br>"
              },
              {
                  content: "Thủ tướng Võ Văn Kiệt tới thăm tổng đài đa dịch vụ của Cục Bưu điện Trung ương tại Hà Nội (19/9/1997)"
              },
              {
                  content: "Cán bộ Trung tâm Điện thoại thao tác trên Tổng đài đa dịch vụ MD110 tại Hà Nội"
              },
              {
                  content: "Hình ảnh về phong trào thể dục thể thao của Cục Bưu điện Trung ương tháng 03/1998"
              },
              {
                  content: "Đồng chí Vũ Mão, Ủy viên Trung ương Đảng, Ủy viên Ủy ban Thường vụ Quốc hội, Chủ nhiệm Văn phòng Quốc hội thăm cơ sở thông tin của Cục Bưu điện Trung ương (02/10/1998)<br>"
              },
              {
                  content: "Hội nghị các cơ quan sử dụng Bưu điện hệ I Cục Bưu điện Trung ương (10/2/1999)"
              },
              {
                  content: "Lãnh đạo Cục Bưu điện Trung ương thăm gia đình bác Phan Việt Bắc, cán bộ cách <br>mạng lão thành, nguyên trưởng phòng Vô tuyến điện Cục Bưu điện Trung ương<br>"
              },
              {
                  content: "Đại hội thi đua Cục Bưu điện Trung ương năm 2000"
              },
              {
                  content: "Lực lượng tự vệ của Cục Bưu điện Trung ương luyện tập sẵn sàng chiến đấu, bảo đảm an toàn cơ sở<br>"
              },
              {
                  content: "Cục Bưu điện Trung ương đón nhận danh hiệu Anh hùng lực lượng vũ trang nhân dân tháng 12/2000"
              },
              {
                  content: "Cục Bưu điện Trung ương đón Mẹ Việt Nam Anh hùng Nguyễn Thị Phải từ Tiền Giang ra thăm Hà Nội và đưa mẹ đi viếng lăng Bác Hồ.<br>"
              },
              {
                  content: "Tổng Bí thư Nông Đức Mạnh chụp ảnh chung với cán bộ công nhân viên Cục Bưu điện Trung ương tại Hội trường Ba Đình tháng 4/2001<br>"
              },
              {
                  content: "Đồng chí Phạm Thế Duyệt, ủy viên Bộ Chính trị, Thường trực Bộ Chính trị, <br>Trưởng ban tổ chức Đại hội đại biểu toàn quốc lần thứ IX của Đảng tặng bằng <br>khen cho Cục Bưu điện Trung ương (18-5-2001)"
              },
              {
                  content: "Đồng chí Đỗ Trung Tá, ủy viên Trung ương Đảng, Chủ tịch Hội đồng quản trị <br>Tổng công ty BCVT Việt Nam trao tặng bằng khen cho các đơn vị của Cục Bưu <br>điện Trung ương phục vụ Đại hội toàn quốc lần thứ IX của Đảng<br>"
              },
              {
                  content: "Đồng chí Nguyễn Văn Lung, Cục trưởng Cục Bưu điện Trung ương viếng mộ Liệt sỹ Ngô Văn Phấn<br>"
              },
              {
                  content: "Lễ trao tặng kỷ niệm chương vì sự nghiệp văn phòng cấp ủy"
              },
              {
                  content: "Lễ khởi công xây dựng Trung tâm quản lý và điều hành Bưu điện hệ I tại Cầu Giấy, Hà Nội"
              },
              {
                  content: "Ban chấp hành Đảng bộ và các đồng chí Bí thư chi bộ thăm cơ sở cách mạng tại Tân Trào (02/11/2002)<br>"
              },
              {
                  content: "Phó Thủ tướng Vũ Khoan chụp ảnh lưu niệm với cán bộ Bưu điện hệ I <br>trực tiếp phục vụ hội nghị ASEM 5 (10/2004) tại Trung tâm Hội nghị Quốc tế"
              },
              {
                  content: "Lễ kỷ niệm 40 năm thành lập Cục Bưu điện Trung ương và đón nhận <br>Huân chương Độc lập hạng hạng Ba (17-6-2005)<br>"
              },
              {
                  content: "Tổng Bí thư Nông Đức Mạnh chụp ảnh với cán bộ CNV Cục Bưu điện Trung ương tại Đại hội Đảng toàn quốc lần thứ X (4/2006)<br>"
              },
              {
                  content: "Lễ gắn biển “Nơi đặt tổng đài phục vụ Hồ Chủ tịch và Trung ương Đảng từ năm 1967 đến năm 1973” - tại di tích lịch sử K9 tháng 5/2006"
              },
              {
                  content: "Các cán bộ thăm lại nơi đặt tổng đài Cục Bưu điện Trung ương phục vụ Bác Hồ tại K9"
              },
              {
                  content: "Căn hầm nơi đặt tổng đài điện thoại do Cục Bưu điện Trung ương đảm nhiệm - phục vụ Chủ tịch HỒ CHÍ MINH và Lãnh đạo Đảng và Nhà nước từ tháng 5/1967 đến tháng 3/1973<br>"
              },
              {
                  content: "Hình ảnh Trung tâm Báo chí Quốc tế Hội nghị thượng đỉnh APEC 2006 <br>do Cục Bưu điện Trung ương phục vụ hệ thống thông tin"
              },
              {
                  content: "Cán bộ công nhân viên Cục Bưu điện Trung ương phục vụ Hội nghị thượng đỉnh châu Á - Thái Bình Dương APEC lần thứ 14 tổ chức tại Trung tâm Hội nghị Quốc gia tháng 11/2006<br>"
              },
              {
                  content: "Đồng chí Trương Tấn Sang, Ủy viên Bộ Chính trị, Thường trực Ban Bí thư đến thăm và làm việc tại Cục Bưu điện Trung ương tháng 5/2007<br>"
              },
              {
                  content: "Đồng chí Nguyễn Xuân Phúc, Ủy viên Trung ưởng Đảng, Bộ trưởng Chủ nhiệm Văn phòng Chính phủ đến thăm và làm việc tại Cục Bưu điện Trung ương tháng 11/2007<br>"
              },
              {
                  content: "Lễ kỷ niệm 40 năm trường K27 (năm 2008)"
              },
              {
                  content: "Dịch vụ truyền hình IP công nghệ SD lần đầu tiên phục vụ cho Thủ tướng Chính phủ <br>họp với các địa phương (04/2008)"
              },
              {
                  content: "Hội nghị cấp cao Ngoại trưởng các nước Á Âu ASEM 9 tổ chức tại Việt Nam năm 2009"
              },
              {
                  content: "Lễ Ký kết Nghị định thư kỹ thuật Đường dây nóng bảo mật phục vụ Lãnh đạo cấp cao hai nước Việt Nam Trung Quốc tháng 3/2009 tại Bắc Bộ Phủ (Nhà khách Chính phủ - số 12 Ngô Quyền, Hà Nội)<br>"
              },
              {
                  content: "Thủ tướng Nguyễn Tấn Dũng họp với Tổng Thư ký Liên hợp quốc và lãnh đạo 9 nước qua dịch vụ Truyền hình hội nghị do Bưu điện Trung ương phục vụ tháng 12/2009"
              },
              {
                  content: "Thủ tướng Chính phủ Nguyễn Tấn Dũng họp qua cầu Truyền hình với Lãnh đạo 63 tỉnh/thành phố qua Hội nghị truyền hình công nghệ HD do Bưu điện Trung ương phục vụ<br>"
              },
              {
                  content: "Đại hội Đảng bộ Bưu điện Trung ương năm 2010 tổ chức tại văn phòng Tập đoàn Bưu chính Viễn thông Việt Nam (tháng 4/2010)<br>"
              },
              {
                  content: "Lễ ký kết bàn giao đợt 1 - Đường dây nóng bảo mật Việt Nam - Trung Quốc giữa Bưu điện Trung ương và Cục điện tín Trung Nam Hải tại Hà Nội"
              },
              {
                  content: "Tổng Bí thư Nguyễn Phú Trọng chụp ảnh với cán bộ công nhân viên Bưu điện Trung ương tại Đại hội Đảng toàn quốc lần thứ XI (01/2011)<br>"
              },
              {
                  content: "Lễ ký kết biên bản hội đàm về thiết lập Đường dây nóng phục vụ Lãnh đạo cấp cao hai nước Việt Nam - Trung Quốc tại Trung Nam Hải tháng 3/2011<br>"
              },
              {
                  content: "Lãnh đạo Tập đoàn Bưu chính Viễn thông Việt Nam chụp ảnh với cán bộ chủ chốt Bưu điện Trung ương tại buổi lễ công bố quyết định bổ nhiệm đồng chí Hoàng Văn Hải, Giám đốc Bưu điện Trung ương"
              },
              {
                  content: "Đồng chí Nguyễn Thị Kim Ngân, Phó Chủ tịch Quốc hội tại buổi lễ đón nhận danh hiệu Anh hùng Lao động của Bưu điện Trung ương<br>"
              },
              {
                  content: "Phó Thủ tướng Nguyễn Thiện Nhân dự Lễ khai trương Mạng truyền số liệu chuyên dùng của các cơ quan Đảng và Nhà nước do Bưu điện Trung ương quản lý (03/2012)<br>"
              },
              {
                  content: "Giao lưu thể thao giữa Bưu điện Trung ương và 4 Văn phòng, Văn phòng Trung ương Đảng, Văn phòng Chính phủ, Văn phòng Quốc hội và Văn phòng Chủ tịch nước.<br>"
              },
              {
                  content: "Đảng ủy Bưu điện Trung ương thăm di tích lịch sử Cao Bằng, chụp ảnh lưu niệm tại đền thờ Bác Hồ (01/2015)<br>"
              },
              {
                  content: "Cán bộ kỹ thuật Bưu điện Trung ương phục vụ tại Trung tâm báo chí Đại hội <br>đồng liên minh Nghị viện thế giới IPU-132 (04/2015"
              },
              {
                  content: "Quầy thông tin truyền thông của Bưu điện Trung ương, phục vụ hội nghị <br>Đại hội đồng liên minh Nghị viện thế giới IPU-132 tại Hà Nội (04/2015)<br>"
              }
          
      

      ],
      libras:[
        {
            "STT": "1",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-1.jpg",
            "content": "“…Việc liên lạc là một việc quan trọng bậc nhất trong công tác cách mạng vì chính nó quyết định sự thống nhất chỉ huy, sự phân phối lực lượng và do đó bảo đảm thắng lợi…”. <br>- Chủ tịch Hồ Chí Minh -<br>"
        },
        {
            "STT": "2",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-2.jpg",
            "content": "CỤC BƯU ĐIỆN TRUNG ƯƠNG<br>Là đơn vị đặc biệt, đảm bảo phục vụ thông tin <br>an toàn, bí mật cho Đảng và Nhà nước"
        },
        {
            "STT": "3",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-3.jpg",
            "content": "Tổ chức hội thảo Lịch sử Cục Bưu điện Trung ương ngày 6 tháng 11 năm 1997 với sự có mặt của Đại tướng Võ Nguyên Giáp, Tổng cục Trưởng Tổng cục Bưu Điện Mai Liêm Trực và hơn 50 cán bộ lãnh đạo phòng TW Đảng, Văn phòng Chính phủ Cục Bưu điện TW và các vị lão thành thuộc lực lượng Bưu điện chuyên trách phục vụ Đảng và Chính phủ Thông qua cầu Truyền hình tại Hội trường Cục Bưu điện TW 16 Đường Hùng Vương, Hà Nội và T78 số 10 Đoàn Công Bửu thành phố Hồ Chí Minh"
        },
        {
            "STT": "4",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-17.jpg",
            "content": "QUYẾT ĐỊNH THÀNH LẬP, THƯ CỦA CÁC ĐỒNG CHÍ LÃNH <br>ĐẠO GỬI CỤC BƯU ĐIỆN TRUNG ƯƠNG  "
        },
        {
            "STT": "5",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-18.jpg",
            "content": "QUYẾT ĐỊNH THÀNH LẬP, THƯ CỦA CÁC ĐỒNG CHÍ LÃNH <br>ĐẠO GỬI CỤC BƯU ĐIỆN TRUNG ƯƠNG  "
        },
        {
            "STT": "6",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-19.jpg",
            "content": "QUYẾT ĐỊNH THÀNH LẬP, THƯ CỦA CÁC ĐỒNG CHÍ LÃNH <br>ĐẠO GỬI CỤC BƯU ĐIỆN TRUNG ƯƠNG<br>"
        },
        {
            "STT": "7",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-20.jpg",
            "content": "QUYẾT ĐỊNH THÀNH LẬP, THƯ CỦA CÁC ĐỒNG CHÍ LÃNH <br>ĐẠO GỬI CỤC BƯU ĐIỆN TRUNG ƯƠNG<br>"
        },
        {
            "STT": "17",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-30.jpg",
            "content": "Bản đồ ghi nhận hệ thống thông tin liên lạc trong và ngoài nước của Đảng Cộng sản Đông Dương năm 1930 trong hồ sơ mật thám Pháp<br>"
        },
        {
            "STT": "18",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-31.jpg",
            "content": "Đồng chí Nguyễn Công Thu một trong những giao thông viên đầu tiên của Đảng"
        },
        {
            "STT": "19",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-32.jpg",
            "content": "Đồng chí Nguyễn Lương Bằng, một trong những giao thông viên đầu tiên của Đảng năm 1930 (sau này đồng chí là Phó Chủ tịch nước Việt Nam).<br>"
        },
        {
            "STT": "20",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-33.jpg",
            "content": "Đồng chí Nguyễn Thị Nghĩa một trong những giao thông viên đầu tiên của Đảng"
        },
        {
            "STT": "21",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-34.jpg",
            "content": "Chủ tịch Hồ Chí Minh đến thăm Ban Vô tuyến điện Trung ương năm 1949"
        },
        {
            "STT": "22",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-35.jpg",
            "content": "Từ trái sang phải: đ/c Nam Sơn; Nguyễn Văn Học, Nguyễn Văn Đỗ trên đường đi làm nhiệm vụ ở ATK Việt Bắc năm 1950<br>"
        },
        {
            "STT": "23",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-36.jpg",
            "content": "Các đồng chí trong văn phòng Ty giao thông đặc biệt tại chiến khu Việt Bắc<br>"
        },
        {
            "STT": "24",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-37.jpg",
            "content": "Đồng chí Trần Quang Bình (người đứng thứ 3 từ bên trái sang), Giám đốc phụ trách <br>Nha Bưu điện, Vô tuyến điện Việt Nam tại chiến khu Việt Bắc năm 1951"
        },
        {
            "STT": "25",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-38.jpg",
            "content": "Hồ Chủ tịch chụp ảnh với các đại biểu về dự Đại hội anh hùng chiến sỹ thi đua toàn quốc lần thứ I, ngày 1-5-1952 trong đó có 4 Chiến sỹ thi đua của Ngành Bưu điện. Hàng ghế đầu từ trái sang phải: ông Nguyễn Văn Ngôn, ông Nguyễn Văn Đỗ (là cán bộ Ty Bưu điện đặc biệt Trung ương), bà Nguyễn Thị Điều (người chít khăn trắng) và bà Nguyễn Thị Lâm (ngồi cạnh bà Điều)<br>"
        },
        {
            "STT": "26",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-39.jpg",
            "content": "Bác Hồ và đồng chí Nguyễn Lương Bằng thăm bộ phận Điện đài phục vụ Đại hội Đảng lần thứ 3 - năm 1960<br>"
        },
        {
            "STT": "27",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-40.jpg",
            "content": "Bác Hồ chụp ảnh chung với anh chị em phục vụ thông tin liên lạc tại Đại hội Đảng toàn quốc lần thứ III năm 1960<br>"
        },
        {
            "STT": "28",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-41.jpg",
            "content": "Bác Hồ chụp ảnh kỷ nhiệm với một số đồng chí phục vụ Đại hội III của Đảng <br>(Đ/c Vũ Chính Xương đứng bên trái Bác, sau này là Cục phó Cục BĐTW <br>và đ/c Võ Văn Thông, cán bộ của Cục) "
        },
        {
            "STT": "29",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-42.jpg",
            "content": "Thủ tướng Phạm Văn Đồng chụp ảnh cùng với chị em Điện thoại viên trong tổng đài 5 của CP16"
        },
        {
            "STT": "30",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-43.jpg",
            "content": "Khi đế quốc Mỹ leo thang chiến tranh, ném bom, bắn phá Miền Bắc nước ta Đài điện thoại sơ tán một bộ phận lên hang núi Chùa Thầy (Quốc Oai, Hà Tây)<br>"
        },
        {
            "STT": "31",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-44.jpg",
            "content": "Tập thể điện thoại viên Tổng đài, Đạt danh hiệu Tổ lao động Xã hội chủ nghĩa đầu <br>tiên của Cục Bưu điện Trung ương năm 1967"
        },
        {
            "STT": "32",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-45.jpg",
            "content": "Cố vấn Liên Xô thăm Cục Bưu điện Trung ương, chụp ảnh chung với các đồng chí Lãnh đạo Ngành Bưu điện và Cục Bưu điện Trung ương<br>"
        },
        {
            "STT": "33",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-46.jpg",
            "content": "Đồng chí Vũ Chính Xương (người đứng bên trái) Phó Cục trưởng Cục Bưu điện Trung ương với anh em cán bộ kỹ thuật tại xe thông tin Viba di động năm 1969"
        },
        {
            "STT": "34",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-47.jpg",
            "content": "Hang đặt thiết bị của Đài phát C32 trong chiến tranh chống Mỹ (1969-1975)<br>"
        },
        {
            "STT": "35",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-48.jpg",
            "content": "Tổ điện báo C1 Đài thu - Cục Bưu điện Trung ương<br>Đặt dưới hầm CP16 liên lạc 24/24 giờ với Đại sứ quán Việt Nam tại Pari phục vụ phái đoàn đàm phán của ta tại hội nghị Pari (1969 - 1972) về chấm dứt chiến tranh Việt Nam."
        },
        {
            "STT": "36",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-49.jpg",
            "content": "Đồng chí Lã Tiến Vượng (người thứ 4 từ trái sang) được chụp ảnh chung với các đ/c <br>Cay Sỏn Phôm Vihản Tổng Bí thư Đảng Nhân dân cách mạng Lào, Hoàng thân XU <br>pha Nu Vông Chủ tịch nước Cộng hòa Nhân dân Lào trong thời gian Cục cử sang giúp bạn phục vụ Đại hội Đảng Nhân dân Cách mạng Lào - 1972<br>"
        },
        {
            "STT": "37",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-50.jpg",
            "content": "Điện thoại viên tiếp dây tại tổng đài 8 đặt dưới hầm nhà số 8 Chu Văn An - Hà Nội"
        },
        {
            "STT": "38",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-51.jpg",
            "content": "Đồng chí Xuân Thủy (người đứng giữa) trưởng đoàn đại biểu Chính phủ Việt Nam Dân chủ Cộng hòa chụp ảnh chung với Điện báo viên Cục Bưu điện Trung ương (trong đó có đ/c Huỳnh Hữu Cự - người thứ 3 từ trái sang)<br>"
        },
        {
            "STT": "39",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-52.jpg",
            "content": "Thủ tướng Phạm Văn Đồng chụp ảnh chung với cán bộ công nhân viên Cục Bưu điện Trung ương tại Phủ Thủ tướng ngay sau khi được tin Miền Nam hoàn toàn giải phóng, trưa 30 tháng 4 năm 1975<br>"
        },
        {
            "STT": "40",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-53.jpg",
            "content": "Tổng Bí thư Lê Duẩn - chụp ảnh chung với đội Giao thông hỏa tốc Cục Bưu điện Trung ương tại nhà riêng - năm 1978"
        },
        {
            "STT": "41",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-54.jpg",
            "content": "Đồng chí Trần Quang Bình tại Hội nghị thống nhất quản lý Ngành Bưu điện hai miền Bắc - Nam<br>"
        },
        {
            "STT": "42",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-55.jpg",
            "content": "Hệ thống máy vô tuyến có công suất từ 150 đến 5000W tại Đài phát tín Cầu Giấy phục vụ liên lạc giữa Hà Nội với các chiến trường và Đại sứ quán Việt Nam ở nước ngoài"
        },
        {
            "STT": "43",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-56.jpg",
            "content": "Toàn thể cán bộ công nhân viên Phòng thông tin T78 TP.Hồ Chí Minh (28/10/1983)<br>"
        },
        {
            "STT": "44",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-57.jpg",
            "content": "Đồng chí Phạm Văn Nam phát biểu tại Hội nghị Tổng kết công tác của Cục Bưu điện Trung ương năm 1985"
        },
        {
            "STT": "45",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-58.jpg",
            "content": "Lãnh đạo Cục Bưu điện Trung ương họp bàn biện pháp nâng cao chất lượng thông tin hệ I<br>"
        },
        {
            "STT": "46",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-59.jpg",
            "content": "Tổng Bí thư Lê Duẩn chụp ảnh chung với cán bộ công nhân viên Cục Bưu điện Trung ương (07/ 04/1985)<br>"
        },
        {
            "STT": "47",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-60.jpg",
            "content": "Cán bộ, công nhân viên Phòng thông tin B68 phục vụ thông tin cho đoàn Chuyên gia K (CPC) từ năm 1979 - 1989<br>"
        },
        {
            "STT": "48",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-61.jpg",
            "content": "Đồng chí Đặng Văn Thân - Tổng Cục trưởng Tổng cục Bưu điện và đ/c Nguyễn Tiến Chất, phó Văn phòng Trung ương Đảng cắt băng khánh thành tổng đài điện tử JS 6000 tại Hà Nội (31/5/1991)"
        },
        {
            "STT": "49",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-62.jpg",
            "content": "Phòng khai thác Bưu chính hệ I thuộc Cục Bưu điện Trung ương tại Hà Nội<br>"
        },
        {
            "STT": "50",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-63.jpg",
            "content": "Bàn OP của tổng đài điện tử số JS6000 của Cục Bưu điện Trung ương"
        },
        {
            "STT": "51",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-64.jpg",
            "content": "Những đơn vị xuất sắc trong công tác thông tin hệ I tại Hội nghị <br>tổng kết công tác 3 năm 1994 - 1996<br>"
        },
        {
            "STT": "52",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-65.jpg",
            "content": "Lễ bế giảng lớp Trung cấp tại chức Cục Bưu điện Trung ương<br>"
        },
        {
            "STT": "53",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-66.jpg",
            "content": "Lãnh đạo Cục Bưu điện Trung ương cùng anh em trực tiếp phục vụ Đại hội Đảng toàn quốc lần thứ VIII"
        },
        {
            "STT": "54",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-67.jpg",
            "content": "Hội nghị Tổng kết công tác thông tin hệ I, 3 năm 1994 - 1996"
        },
        {
            "STT": "55",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-68.jpg",
            "content": "Đại tướng Võ Nguyên Giáp đến thăm tổng đài đa dịch vụ của Cục Bưu điện Trung ương tại T78 T.P Hồ Chí Minh (ngày 22 tháng 10 năm 1996)<br>"
        },
        {
            "STT": "56",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-69.jpg",
            "content": "Cục Bưu điện Trung ương đang giới thiệu tổng đài đa dịch vụ ISDN phục vụ Trung ương với Ban Bí thư Trung ương Đảng tại Hội trường Bộ Chính trị (năm 1997)"
        },
        {
            "STT": "57",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-70.jpg",
            "content": "Lãnh đạo Ngành Bưu điện và Cục Bưu điện Trung ương giới thiệu Tổng đài đa dịch vụ ISDN và dịch vụ Internet với đồng chí Đỗ Mười tại Hội nghị TW 2 <br>khóa VIII tại Hội trường Bộ Chính trị<br>"
        },
        {
            "STT": "58",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-71.jpg",
            "content": "Lễ đón nhận huân chương Lao động hạng Nhất và khánh thành mạng Viễn thông đa <br>dịch vụ Cục Bưu điện Trung ương giai đoạn 1996 - 1997"
        },
        {
            "STT": "59",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-72.jpg",
            "content": "Các giao thông viên trực thuộc Trung tâm Bưu chính lên đường vận chuyển công văn tài liệu phục vụ Trung ương<br>"
        },
        {
            "STT": "60",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-73.jpg",
            "content": "Thủ tướng Võ Văn Kiệt tới thăm tổng đài đa dịch vụ của Cục Bưu điện Trung ương tại Hà Nội (19/9/1997)"
        },
        {
            "STT": "61",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-74.jpg",
            "content": "Cán bộ Trung tâm Điện thoại thao tác trên Tổng đài đa dịch vụ MD110 tại Hà Nội"
        },
        {
            "STT": "62",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-75.jpg",
            "content": "Hình ảnh về phong trào thể dục thể thao của Cục Bưu điện Trung ương tháng 03/1998"
        },
        {
            "STT": "63",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-76.jpg",
            "content": "Đồng chí Vũ Mão, Ủy viên Trung ương Đảng, Ủy viên Ủy ban Thường vụ Quốc hội, Chủ nhiệm Văn phòng Quốc hội thăm cơ sở thông tin của Cục Bưu điện Trung ương (02/10/1998)<br>"
        },
        {
            "STT": "64",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-77.jpg",
            "content": "Hội nghị các cơ quan sử dụng Bưu điện hệ I Cục Bưu điện Trung ương (10/2/1999)"
        },
        {
            "STT": "65",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-78.jpg",
            "content": "Lãnh đạo Cục Bưu điện Trung ương thăm gia đình bác Phan Việt Bắc, cán bộ cách <br>mạng lão thành, nguyên trưởng phòng Vô tuyến điện Cục Bưu điện Trung ương<br>"
        },
        {
            "STT": "66",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-79.jpg",
            "content": "Đại hội thi đua Cục Bưu điện Trung ương năm 2000"
        },
        {
            "STT": "67",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-80.jpg",
            "content": "Lực lượng tự vệ của Cục Bưu điện Trung ương luyện tập sẵn sàng chiến đấu, bảo đảm an toàn cơ sở<br>"
        },
        {
            "STT": "68",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-81.jpg",
            "content": "Cục Bưu điện Trung ương đón nhận danh hiệu Anh hùng lực lượng vũ trang nhân dân tháng 12/2000"
        },
        {
            "STT": "69",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-82.jpg",
            "content": "Cục Bưu điện Trung ương đón Mẹ Việt Nam Anh hùng Nguyễn Thị Phải từ Tiền Giang ra thăm Hà Nội và đưa mẹ đi viếng lăng Bác Hồ.<br>"
        },
        {
            "STT": "70",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-83.jpg",
            "content": "Tổng Bí thư Nông Đức Mạnh chụp ảnh chung với cán bộ công nhân viên Cục Bưu điện Trung ương tại Hội trường Ba Đình tháng 4/2001<br>"
        },
        {
            "STT": "71",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-84.jpg",
            "content": "Đồng chí Phạm Thế Duyệt, ủy viên Bộ Chính trị, Thường trực Bộ Chính trị, <br>Trưởng ban tổ chức Đại hội đại biểu toàn quốc lần thứ IX của Đảng tặng bằng <br>khen cho Cục Bưu điện Trung ương (18-5-2001)"
        },
        {
            "STT": "72",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-85.jpg",
            "content": "Đồng chí Đỗ Trung Tá, ủy viên Trung ương Đảng, Chủ tịch Hội đồng quản trị <br>Tổng công ty BCVT Việt Nam trao tặng bằng khen cho các đơn vị của Cục Bưu <br>điện Trung ương phục vụ Đại hội toàn quốc lần thứ IX của Đảng<br>"
        },
        {
            "STT": "73",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-86.jpg",
            "content": "Đồng chí Nguyễn Văn Lung, Cục trưởng Cục Bưu điện Trung ương viếng mộ Liệt sỹ Ngô Văn Phấn<br>"
        },
        {
            "STT": "74",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-87.jpg",
            "content": "Lễ trao tặng kỷ niệm chương vì sự nghiệp văn phòng cấp ủy"
        },
        {
            "STT": "75",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-88.jpg",
            "content": "Lễ khởi công xây dựng Trung tâm quản lý và điều hành Bưu điện hệ I tại Cầu Giấy, Hà Nội"
        },
        {
            "STT": "76",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-89.jpg",
            "content": "Ban chấp hành Đảng bộ và các đồng chí Bí thư chi bộ thăm cơ sở cách mạng tại Tân Trào (02/11/2002)<br>"
        },
        {
            "STT": "77",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-90.jpg",
            "content": "Phó Thủ tướng Vũ Khoan chụp ảnh lưu niệm với cán bộ Bưu điện hệ I <br>trực tiếp phục vụ hội nghị ASEM 5 (10/2004) tại Trung tâm Hội nghị Quốc tế"
        },
        {
            "STT": "78",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-91.jpg",
            "content": "Lễ kỷ niệm 40 năm thành lập Cục Bưu điện Trung ương và đón nhận <br>Huân chương Độc lập hạng hạng Ba (17-6-2005)<br>"
        },
        {
            "STT": "79",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-92.jpg",
            "content": "Tổng Bí thư Nông Đức Mạnh chụp ảnh với cán bộ CNV Cục Bưu điện Trung ương tại Đại hội Đảng toàn quốc lần thứ X (4/2006)<br>"
        },
        {
            "STT": "80",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-93.jpg",
            "content": "Lễ gắn biển “Nơi đặt tổng đài phục vụ Hồ Chủ tịch và Trung ương Đảng từ năm 1967 đến năm 1973” - tại di tích lịch sử K9 tháng 5/2006"
        },
        {
            "STT": "81",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-94.jpg",
            "content": "Các cán bộ thăm lại nơi đặt tổng đài Cục Bưu điện Trung ương phục vụ Bác Hồ tại K9"
        },
        {
            "STT": "82",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-95.jpg",
            "content": "Căn hầm nơi đặt tổng đài điện thoại do Cục Bưu điện Trung ương đảm nhiệm - phục vụ Chủ tịch HỒ CHÍ MINH và Lãnh đạo Đảng và Nhà nước từ tháng 5/1967 đến tháng 3/1973<br>"
        },
        {
            "STT": "83",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-96.jpg",
            "content": "Hình ảnh Trung tâm Báo chí Quốc tế Hội nghị thượng đỉnh APEC 2006 <br>do Cục Bưu điện Trung ương phục vụ hệ thống thông tin"
        },
        {
            "STT": "84",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-97.jpg",
            "content": "Cán bộ công nhân viên Cục Bưu điện Trung ương phục vụ Hội nghị thượng đỉnh châu Á - Thái Bình Dương APEC lần thứ 14 tổ chức tại Trung tâm Hội nghị Quốc gia tháng 11/2006<br>"
        },
        {
            "STT": "85",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-98.jpg",
            "content": "Đồng chí Trương Tấn Sang, Ủy viên Bộ Chính trị, Thường trực Ban Bí thư đến thăm và làm việc tại Cục Bưu điện Trung ương tháng 5/2007<br>"
        },
        {
            "STT": "86",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-99.jpg",
            "content": "Đồng chí Nguyễn Xuân Phúc, Ủy viên Trung ưởng Đảng, Bộ trưởng Chủ nhiệm Văn phòng Chính phủ đến thăm và làm việc tại Cục Bưu điện Trung ương tháng 11/2007<br>"
        },
        {
            "STT": "87",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-100.jpg",
            "content": "Lễ kỷ niệm 40 năm trường K27 (năm 2008)"
        },
        {
            "STT": "88",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-101.jpg",
            "content": "Dịch vụ truyền hình IP công nghệ SD lần đầu tiên phục vụ cho Thủ tướng Chính phủ <br>họp với các địa phương (04/2008)"
        },
        {
            "STT": "89",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-102.jpg",
            "content": "Hội nghị cấp cao Ngoại trưởng các nước Á Âu ASEM 9 tổ chức tại Việt Nam năm 2009"
        },
        {
            "STT": "90",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-103.jpg",
            "content": "Lễ Ký kết Nghị định thư kỹ thuật Đường dây nóng bảo mật phục vụ Lãnh đạo cấp cao hai nước Việt Nam Trung Quốc tháng 3/2009 tại Bắc Bộ Phủ (Nhà khách Chính phủ - số 12 Ngô Quyền, Hà Nội)<br>"
        },
        {
            "STT": "91",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-104.jpg",
            "content": "Thủ tướng Nguyễn Tấn Dũng họp với Tổng Thư ký Liên hợp quốc và lãnh đạo 9 nước qua dịch vụ Truyền hình hội nghị do Bưu điện Trung ương phục vụ tháng 12/2009"
        },
        {
            "STT": "92",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-105.jpg",
            "content": "Thủ tướng Chính phủ Nguyễn Tấn Dũng họp qua cầu Truyền hình với Lãnh đạo 63 tỉnh/thành phố qua Hội nghị truyền hình công nghệ HD do Bưu điện Trung ương phục vụ<br>"
        },
        {
            "STT": "93",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-106.jpg",
            "content": "Đại hội Đảng bộ Bưu điện Trung ương năm 2010 tổ chức tại văn phòng Tập đoàn Bưu chính Viễn thông Việt Nam (tháng 4/2010)<br>"
        },
        {
            "STT": "94",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-107.jpg",
            "content": "Lễ ký kết bàn giao đợt 1 - Đường dây nóng bảo mật Việt Nam - Trung Quốc giữa Bưu điện Trung ương và Cục điện tín Trung Nam Hải tại Hà Nội"
        },
        {
            "STT": "95",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-108.jpg",
            "content": "Tổng Bí thư Nguyễn Phú Trọng chụp ảnh với cán bộ công nhân viên Bưu điện Trung ương tại Đại hội Đảng toàn quốc lần thứ XI (01/2011)<br>"
        },
        {
            "STT": "96",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-109.jpg",
            "content": "Lễ ký kết biên bản hội đàm về thiết lập Đường dây nóng phục vụ Lãnh đạo cấp cao hai nước Việt Nam - Trung Quốc tại Trung Nam Hải tháng 3/2011<br>"
        },
        {
            "STT": "97",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-110.jpg",
            "content": "Lãnh đạo Tập đoàn Bưu chính Viễn thông Việt Nam chụp ảnh với cán bộ chủ chốt Bưu điện Trung ương tại buổi lễ công bố quyết định bổ nhiệm đồng chí Hoàng Văn Hải, Giám đốc Bưu điện Trung ương"
        },
        {
            "STT": "98",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-111.jpg",
            "content": "Đồng chí Nguyễn Thị Kim Ngân, Phó Chủ tịch Quốc hội tại buổi lễ đón nhận danh hiệu Anh hùng Lao động của Bưu điện Trung ương<br>"
        },
        {
            "STT": "99",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-112.jpg",
            "content": "Phó Thủ tướng Nguyễn Thiện Nhân dự Lễ khai trương Mạng truyền số liệu chuyên dùng của các cơ quan Đảng và Nhà nước do Bưu điện Trung ương quản lý (03/2012)<br>"
        },
        {
            "STT": "100",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-113.jpg",
            "content": "Giao lưu thể thao giữa Bưu điện Trung ương và 4 Văn phòng, Văn phòng Trung ương Đảng, Văn phòng Chính phủ, Văn phòng Quốc hội và Văn phòng Chủ tịch nước.<br>"
        },
        {
            "STT": "101",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-114.jpg",
            "content": "Đảng ủy Bưu điện Trung ương thăm di tích lịch sử Cao Bằng, chụp ảnh lưu niệm tại đền thờ Bác Hồ (01/2015)<br>"
        },
        {
            "STT": "102",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-115.jpg",
            "content": "Cán bộ kỹ thuật Bưu điện Trung ương phục vụ tại Trung tâm báo chí Đại hội <br>đồng liên minh Nghị viện thế giới IPU-132 (04/2015"
        },
        {
            "STT": "103",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-116.jpg",
            "content": "Quầy thông tin truyền thông của Bưu điện Trung ương, phục vụ hội nghị <br>Đại hội đồng liên minh Nghị viện thế giới IPU-132 tại Hà Nội (04/2015)<br>"
        },
        {
            "STT": "104",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-21.jpg",
            "content": "HOÀNG VĂN HẢI <br>Giám đốc Bưu điện TW <br>từ 04/2011 đến 06/2015"
        },
        {
            "STT": "105",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-22.jpg",
            "content": "HOÀNG MINH CƯỜNG <br>Cục trưởng Cục Bưu điện TW <br>từ 07/2015<br>"
        },
        {
            "STT": "106",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-23.jpg",
            "content": "Trần Quang Đạt<br>Cục phó giai đoạn 1976 - 1990"
        },
        {
            "STT": "107",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-24.jpg",
            "content": "Nguyễn Hồng Trường<br>Cục phó giai đoạn 1997 - 2008"
        },
        {
            "STT": "108",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-25.jpg",
            "content": "Nguyễn Xuyến<br>Cục phó giai đoạn 1984 - 1990"
        },
        {
            "STT": "109",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-26.jpg",
            "content": "Nguyễn Khánh Tường<br>Cục phó giai đoạn 1997 - 2015<br>"
        },
        {
            "STT": "110",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-27.jpg",
            "content": "Trần Quang Minh<br>Phó giám đốc từ 2008"
        },
        {
            "STT": "111",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-28.jpg",
            "content": "Trần Duy Ninh<br>Phó giám đốc từ 2012"
        },
        {
            "STT": "112",
            "image": "/images/libra/Lich su Cuc BUU DIEN TRUNG UONG-29.jpg",
            "content": "Mai Thị Tường<br>Phó giám đốc 2008 - 2014<br>"
        }
      ],
      historys:[
        {
            heading:'Tháng 5/1967: Thiết lập tổng đài tại K9 – Đá Chông',
            content:'Đầu năm 1967, giặc Mỹ tăng cường đánh phá miền Bắc bằng không quân và hải quân. Các cơ quan, đơn vị được lệnh triệt để sơ tán khỏi thành phố, tránh thiệt hại khi giặc Mỹ điên cuồng leo lên nấc thang chiến tranh mới. Thực hiện triển khai mạng liên lạc hữu tuyến phục vụ các cơ quan Trung ương sơ tán ở khu vực Ba Vì, Hà Tây. Tháng 5 năm 1967, thiết lập tổng đài điện thoại K9 tại Đá Chông. Lập đường dây từ khu C (chân núi Đá Chông) sang đài phát tín 80B của Cục Bưu điện Trung ương đặt trong khu rừng thuộc địa phận xóm Lặt, xã Minh Quang, Ba Vì.',
            img:'/images/history/timeline1.png',
            imgactive:'/images/history/timelineactive1.png',
        },
        {
            heading:'Từ năm 1969 đến năm 2001: Quá trình phục vụ, đảm bảo thông tin liên lạc cho Trung Ương và giữ gìn thi hài Bác.',
            content:'Tháng 9/1969, Hồ chủ tịch qua đời, Bộ Chính trị và Quân ủy Trung ương quyết định chọn Khu căn cứ Đá Chông (K9) để xây dựng thêm công trình "Ngôi nhà kính", "Hầm ngầm" phục vụ nhiệm vụ giữ gìn thi hài Bác. <br>Tháng 3/1973, sau nhiều lần di chuyển thi hài Hồ chủ tịch đến các địa điểm khác thì Bộ Chính trị và Quân ủy Trung ương đã quyết định đưa thi hài Bác đưa trở lại K84 để bảo quản vì nơi đây có điều kiện kỹ thuật tốt.<br>Năm 1995, Bộ Tư lệnh Bảo vệ Lăng đã tổ chức đón tiếp, phục vụ các đồng chí lãnh đạo Đảng, Nhà nước, lãnh đạo các bộ, ban, ngành ở Trung ương, các địa phương và nhiều đoàn đại biểu của các cơ quan, đơn vị, nhà trường đến dâng hương tưởng niệm Chủ tịch Hồ Chí Minh, tham quan khu vực, trồng cây lưu niệm, tổ chức lễ báo công, lễ kết nạp Đảng, kết nạp Đoàn, sinh hoạt truyền thống.<br>Đặc biệt, ngày 16/05/2001, Tổng Bí thư Nông Đức Mạnh đã trồng cây lưu niệm và dự lễ đặt tấm biển đồng kỷ niệm nơi giữ gìn thi hài Bác trong 6 năm chiến tranh chống Mỹ: <i>“Đây là nơi đã giữ gìn thi hài Chủ tịch Hồ Chí Minh từ năm 1969 đến năm 1975”.</i>',
            img:'/images/history/timeline2.png',
            imgactive:'/images/history/timelineactive2.png',
        },
        {
            heading:'Ngày 16/5/2006: Gắn biển di tích tổng đài điện thoại K9 – Đá Chông',
            content:'Nhân dịp kỷ niệm 116 năm Ngày sinh của Người, Cục Bưu điện Trung ương phối hợp với Bộ Tư lệnh Bảo vệ Lăng Chủ tịch Hồ Chí Minh đã tổ chức lễ gắn biển di tích lịch sử nơi đặt Tổng đài điện thoại phục vụ Trung ương Đảng, Bác Hồ trong những năm từ 1967-1973.<br> Năm 2012, đơn vị tiếp tục xây dựng, mở rộng, cải tạo, nâng cấp thành khu hoàn chỉnh để phục vụ đón khách tham quan như hiện nay. Năm 2014, Ban Bí thư Trung ương Đảng đồng ý xây dựng Nhà tưởng niệm Chủ tịch Hồ Chí Minh tại K9. Sau hơn một năm triển khai thực hiện, công trình đã hoàn thành với chất lượng cao về nội dung tư tưởng, kỹ thuật, mỹ thuật, xứng tầm với giá trị của Khu K9.',
            img:'/images/history/timeline3.png',
            imgactive:'/images/history/timelineactive3.png',
        },
        {
            heading:'Năm 2017: Trùng tu, bảo dưỡng di tích',
            content:'Sau khi khánh thành Nhà tưởng niệm Chủ tịch Hồ Chí Minh tại Khu K9 ngày 02/09/2015, đến ngày 19/05/2016, Ban Quản lý Lăng Chủ tịch Hồ Chí Minh đã quyết định mở rộng tham quan tới tất cả đồng bào trong cả nước. Tới ngày 19/05/2017 chính thức mở rộng đón khách quốc tế.<br> Đặc biệt, năm 2017, Bộ Tư lệnh Bảo vệ Lăng đã tổ chức Hội thảo khoa học “Kỷ niệm 60 năm Chủ tịch Hồ Chí Minh đến Đá Chông (05/1957- 05/2017).',
            img:'/images/history/timeline4.png',
            imgactive:'/images/history/timelineactive4.png',
        },
        {
            heading:'Hiện nay: phục vụ khách trong nước và quốc tế',
            content:'Hiện nay, Khu di tích tổng đài điện thoại K9 – Đá Chông vẫn đang mở cửa đón tiếp du khách cả trong nước và quốc tế.',
            img:'/images/history/timeline5.png',
            imgactive:'/images/history/timelineactive5.png',
        },
      ],
      tours:[
          './tour/nhatuongniem/index.htm',
          './tour/contrinhgiuginthihaibac/index.htm',
          './tour/honnonbo/index.htm',
          './tour/dachong/index.htm',
          './tour/nhasan/index.htm',
          './tour/nhaphucvu/index.htm',
          './tour/doanxe/index.htm',
          './tour/hambuudien/index.htm',
          './tour/duongrenluyen/index.htm'
      ],
      pages: [
        // null,
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-001.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-002.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-003.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-004.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-005.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-006.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-007.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-008.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-009.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-010.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-011.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-012.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-013.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-014.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-015.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-016.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-017.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-018.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-019.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-020.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-021.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-022.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-023.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-024.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-025.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-026.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-027.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-028.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-029.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-030.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-031.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-032.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-033.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-034.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-035.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-036.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-037.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-038.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-039.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-040.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-041.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-042.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-043.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-044.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-045.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-046.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-047.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-048.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-049.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-050.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-051.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-052.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-053.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-054.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-055.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-056.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-057.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-058.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-059.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-060.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-061.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-062.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-063.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-064.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-065.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-066.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-067.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-068.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-069.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-070.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-071.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-072.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-073.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-074.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-075.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-076.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-077.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-078.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-079.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-080.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-081.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-082.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-083.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-084.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-085.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-086.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-087.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-088.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-089.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-090.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-091.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-092.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-093.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-094.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-095.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-096.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-097.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-098.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-099.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-100.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-101.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-102.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-103.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-104.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-105.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-106.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-107.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-108.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-109.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-110.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-111.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-112.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-113.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-114.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-115.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-116.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-117.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-118.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-119.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-120.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-121.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-122.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-123.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-124.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-125.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-126.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-127.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-128.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-129.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-130.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-131.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-132.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-133.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-134.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-135.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-136.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-137.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-138.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-139.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-140.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-141.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-142.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-143.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-144.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-145.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-146.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-147.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-148.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-149.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-150.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-151.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-152.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-153.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-154.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-155.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-156.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-157.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-158.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-159.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-160.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-161.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-162.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-163.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-164.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-165.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-166.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-167.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-168.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-169.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-170.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-171.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-172.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-173.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-174.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-175.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-176.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-177.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-178.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-179.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-180.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-181.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-182.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-183.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-184.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-185.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-186.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-187.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-188.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-189.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-190.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-191.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-192.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-193.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-194.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-195.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-196.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-197.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-198.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-199.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-200.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-201.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-202.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-203.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-204.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-205.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-206.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-207.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-208.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-209.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-210.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-211.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-212.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-213.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-214.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-215.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-216.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-217.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-218.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-219.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-220.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-221.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-222.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-223.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-224.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-225.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-226.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-227.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-228.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-229.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-230.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-231.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-232.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-233.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-234.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-235.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-236.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-237.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-238.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-239.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-240.jpg",
        
        
      ],
      pagesHiRes: [
        // null,
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-001.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-002.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-003.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-004.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-005.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-006.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-007.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-008.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-009.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-010.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-011.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-012.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-013.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-014.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-015.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-016.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-017.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-018.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-019.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-020.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-021.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-022.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-023.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-024.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-025.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-026.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-027.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-028.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-029.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-030.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-031.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-032.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-033.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-034.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-035.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-036.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-037.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-038.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-039.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-040.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-041.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-042.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-043.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-044.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-045.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-046.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-047.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-048.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-049.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-050.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-051.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-052.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-053.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-054.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-055.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-056.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-057.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-058.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-059.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-060.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-061.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-062.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-063.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-064.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-065.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-066.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-067.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-068.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-069.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-070.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-071.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-072.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-073.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-074.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-075.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-076.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-077.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-078.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-079.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-080.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-081.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-082.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-083.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-084.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-085.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-086.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-087.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-088.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-089.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-090.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-091.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-092.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-093.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-094.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-095.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-096.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-097.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-098.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-099.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-100.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-101.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-102.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-103.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-104.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-105.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-106.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-107.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-108.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-109.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-110.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-111.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-112.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-113.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-114.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-115.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-116.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-117.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-118.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-119.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-120.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-121.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-122.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-123.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-124.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-125.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-126.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-127.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-128.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-129.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-130.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-131.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-132.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-133.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-134.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-135.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-136.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-137.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-138.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-139.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-140.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-141.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-142.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-143.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-144.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-145.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-146.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-147.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-148.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-149.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-150.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-151.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-152.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-153.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-154.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-155.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-156.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-157.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-158.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-159.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-160.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-161.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-162.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-163.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-164.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-165.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-166.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-167.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-168.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-169.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-170.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-171.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-172.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-173.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-174.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-175.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-176.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-177.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-178.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-179.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-180.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-181.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-182.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-183.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-184.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-185.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-186.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-187.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-188.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-189.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-190.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-191.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-192.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-193.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-194.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-195.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-196.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-197.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-198.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-199.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-200.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-201.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-202.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-203.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-204.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-205.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-206.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-207.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-208.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-209.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-210.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-211.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-212.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-213.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-214.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-215.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-216.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-217.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-218.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-219.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-220.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-221.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-222.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-223.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-224.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-225.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-226.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-227.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-228.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-229.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-230.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-231.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-232.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-233.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-234.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-235.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-236.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-237.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-238.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-239.jpg",
        "./flipbook/Lich su Cuc BUU DIEN TRUNG UONG/Lich su Cuc BUU DIEN TRUNG UONG-page-240.jpg",
      ],
      video:[
          './video/pagevideo1.mp4',
          './video/pagevideo2.mp4',
          './video/pagevideo3.mp4',

      ]
    },
    methods: {
      nextPage: function(imagesindex){
        this.zIndex = imagesindex;
      },
      nextvideo: function(videoindex){
        this.videoIndex = videoindex;
        console.log(videoindex)
      },
      setTab(_tab) {
           this.tab=_tab;
      },
      mute: function(){
        audio.muted = true;
      },
      mutefalse: function(){
        audio.muted = false;
      },
     setMap: function(index){
        this.indexMap = index -1;
       
        console.log(this.indexMap)
      }
    }
  });



  const audio = document.querySelector('#audio');
  const tabVideo = document.querySelector('#video');
    document.body.addEventListener("mousemove", function () {
        audio.play()
    })
