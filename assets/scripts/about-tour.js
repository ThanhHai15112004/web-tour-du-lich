document.addEventListener("DOMContentLoaded", function () {
  // Dữ liệu JSON (bạn sẽ copy dữ liệu vào đây)
  const tourData = {
    "tours": [
      {
        "id": 1,
        "category": "regular",
        "image": "/assets/imgs/contents/tour1.jpg",
        "alt": "Tour thường 1",
        "discount": "",
        "title": "KHÁM PHÁ THÀNH PHỐ VỚI NHỮNG TRẢI NGHIỆM ĐA DẠNG VÀ SỰ GIAO THOA VĂN HÓA ĐỘC ĐÁO TRONG MỖI GÓC NHÌN",
        "duration": "3 Ngày 2 Đêm",
        "features": [
          "Tour thành phố",
          "Ẩm thực địa phương"
        ],
        "price_old": "",
        "price_new": "5.000.000 VND"
      },
      {
        "id": 2,
        "category": "regular",
        "image": "data:image/jpeg;base64,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",
        "alt": "Tour thường 2",
        "discount": "",
        "title": "TRẢI NGHIỆM VĂN HÓA ĐA DẠNG VỚI CHI TIẾT DI TÍCH VÀ ẨM THỰC TRUYỀN THỐNG KẾT HỢP HÀNH TRÌNH DU LỊCH ĐỘC ĐÁO",
        "duration": "4 Ngày 3 Đêm",
        "features": [
          "Tham quan di tích",
          "Ẩm thực truyền thống"
        ],
        "price_old": "",
        "price_new": "6.500.000 VND"
      },
      {
        "id": 3,
        "category": "regular",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETXsdNyPl1Ogy6noiKZ11ChvF8uW3y124rQ&s",
        "alt": "Tour thường 3",
        "discount": "",
        "title": "DU LỊCH THIÊN NHIÊN VỚI NHỮNG CẢNH QUAN TUYỆT VỜI VÀ KHÔNG KHÍ TRONG LÀNH TRONG MỖI CHI TIẾT",
        "duration": "3 Ngày 2 Đêm",
        "features": [
          "Tham quan công viên",
          "Dã ngoại"
        ],
        "price_old": "",
        "price_new": "4.800.000 VND"
      },
      {
        "id": 4,
        "category": "regular",
        "image": "https://cdn.xanhsm.com/2024/11/698a7d6b-den-co-loa-thumb.jpg",
        "alt": "Tour thường 4",
        "discount": "",
        "title": "KHÁM PHÁ LỊCH SỬ VỚI NHỮNG DI TÍCH CỔ KIẾN VÀ HÀNH TRÌNH KHOẢNG KHẮC ĐÁNG NHỚ TRONG QUÁ KHỨ VÀ HIỆN TẠI",
        "duration": "4 Ngày 3 Đêm",
        "features": [
          "Di tích lịch sử",
          "Trung tâm thành phố"
        ],
        "price_old": "",
        "price_new": "7.200.000 VND"
      },
      {
        "id": 5,
        "category": "regular",
        "image": "https://images.hcmcpv.org.vn/res/news/2023/01/24-01-2023-doc-dao-van-hoa-am-thuc-viet-ngay-tet-4CBDB0B0.jpg",
        "alt": "Tour thường 5",
        "discount": "",
        "title": "TRẢI NGHIỆM ẨM THỰC ĐA DẠNG VỚI NHỮNG HƯƠNG VỊ TRUYỀN THỐNG KẾT HỢP HIỆN ĐẠI TRONG MỘT HÀNH TRÌNH ẨM THỰC SÔI ĐỘNG",
        "duration": "3 Ngày 2 Đêm",
        "features": [
          "Tour ẩm thực",
          "Chợ địa phương"
        ],
        "price_old": "",
        "price_new": "5.800.000 VND"
      },
      {
        "id": 6,
        "category": "regular",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNU6Vbvi2PzvrisrC3N_Rw3akkKRDHFAldXw&s",
        "alt": "Tour thường 6",
        "discount": "",
        "title": "KHÁM PHÁ CÁC BẢN LÀNG TRUYỀN THỐNG VỚI CẢNH QUAN ĐỒNG BÀN VÀ VĂN HÓA ĐA NGHỆ TẠO NÊN MỘT HÀNH TRÌNH DU LỊCH ĐẶC BIỆT",
        "duration": "4 Ngày 3 Đêm",
        "features": [
          "Bản làng truyền thống",
          "Phong cảnh hữu tình"
        ],
        "price_old": "",
        "price_new": "6.000.000 VND"
      },
      {
        "id": 7,
        "category": "sale",
        "image": "https://images.baodantoc.vn/uploads/2023/Thang-10/Ngay-13/Truong-Thuan/1.jpg",
        "alt": "Tour giảm giá 1",
        "discount": "SALE 20%",
        "title": "TRẢI NGHIỆM SỰ SĂN SALE VỚI ƯU ĐÃI KHỦNG VÀ GIÁ SỐC CHO DU KHÁCH NHỮNG NGÀY ĐẶC BIỆT",
        "duration": "5 Ngày 4 Đêm",
        "features": [
          "Giá sốc",
          "Khuyến mãi đặc biệt"
        ],
        "price_old": "7.000.000 VND",
        "price_new": "5.600.000 VND"
      },
      {
        "id": 8,
        "category": "sale",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8anpBKfMPtNcr7F4b7xljYsWXUtP1oQeQ4A&s",
        "alt": "Tour giảm giá 2",
        "discount": "SALE 15%",
        "title": "DU LỊCH SALE HOT VỚI CHƯƠNG TRÌNH ƯU ĐÃI ĐỘC QUYỀN VÀ TRẢI NGHIỆM DU LỊCH ĐỈNH CAO CHO MỌI DU KHÁCH",
        "duration": "6 Ngày 5 Đêm",
        "features": [
          "Ưu đãi cực sốc",
          "Trải nghiệm đỉnh cao"
        ],
        "price_old": "10.000.000 VND",
        "price_new": "8.500.000 VND"
      },
      {
        "id": 9,
        "category": "sale",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRocpG4U_lXWqaezy45px7noN7fERP4UJHrRg&s",
        "alt": "Tour giảm giá 3",
        "discount": "SALE 25%",
        "title": "KHÁM PHÁ VÀ ƯU ĐÃI VỚI CHIẾN DỊCH GIẢM GIÁ HẤP DẪN VÀ ƯU ĐÃI SIÊU KHỦNG CHO DU KHÁCH THÔNG MINH",
        "duration": "4 Ngày 3 Đêm",
        "features": [
          "Ưu đãi hấp dẫn",
          "Chương trình khuyến mãi"
        ],
        "price_old": "8.000.000 VND",
        "price_new": "6.000.000 VND"
      },
      {
        "id": 10,
        "category": "sale",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNRJWaH5FfBkqgnzDn2D9jsIUdF1NJFgSMw&s",
        "alt": "Tour giảm giá 4",
        "discount": "SALE 10%",
        "title": "DU LỊCH THOẢI MÁI VỚI DỊCH VỤ CHUYÊN NGHIỆP VÀ ƯU ĐÃI SIÊU HOT CHO TRẢI NGHIỆM DU LỊCH ĐỘC NHẤT",
        "duration": "5 Ngày 4 Đêm",
        "features": [
          "Giá ưu đãi",
          "Trải nghiệm đẳng cấp"
        ],
        "price_old": "9.000.000 VND",
        "price_new": "8.100.000 VND"
      },
      {
        "id": 11,
        "category": "sale",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEnRcWhUV8OZNxU2J8qIpcyD4IX5-h2EzKAg&s",
        "alt": "Tour giảm giá 5",
        "discount": "SALE 30%",
        "title": "ƯU ĐÃI KHỦNG VỚI GIÁ CỰC SỐC VÀ TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO CHO NHỮNG DU KHÁCH TÍCH CỰC",
        "duration": "7 Ngày 6 Đêm",
        "features": [
          "Giá cực sốc",
          "Ưu đãi không giới hạn"
        ],
        "price_old": "14.000.000 VND",
        "price_new": "9.800.000 VND"
      },
      {
        "id": 12,
        "category": "sale",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelrqAe0RL7KabnVJ89bj3Ht_lVuZ82-EZ2Q&s",
        "alt": "Tour giảm giá 6",
        "discount": "SALE 20%",
        "title": "SĂN SALE CÙNG CHÚNG TÔI VỚI CHƯƠNG TRÌNH ƯU ĐÃI ĐỘC QUYỀN VÀ GIÁ MỜI KHÔNG THỂ BỎ LỠ TRONG MỖI NGÀY DU LỊCH",
        "duration": "4 Ngày 3 Đêm",
        "features": [
          "Ưu đãi độc quyền",
          "Giá mềm"
        ],
        "price_old": "7.500.000 VND",
        "price_new": "6.000.000 VND"
      },
      {
        "id": 13,
        "category": "domestic",
        "image": "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/06/13/du-lich-sai-gon-29-1549.jpg",
        "alt": "Tour trong nước 1",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ SÀI GÒN VỚI NHỮNG CẢNH ĐẸP ĐẦY MÀU SẮC VÀ ẨM THỰC SÔI ĐỘNG TRONG TRÁI TIM THÀNH PHỐ",
        "duration": "3 Ngày 2 Đêm",
        "features": [
          "Tham quan thành phố",
          "Ẩm thực đường phố"
        ],
        "price_old": "2 khách đặt",
        "price_new": "4.500.000 VND"
      },
      {
        "id": 14,
        "category": "domestic",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSObpd_N9G_Ryy8m19fkMqRv0Tu0kjHbr_iKw&s",
        "alt": "Tour trong nước 2",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ ĐÀ NẴNG VỚI NHỮNG BÃI BIỂN XANH MÁT, ẨM THỰC ĐẶC SẮC VÀ VĂN HÓA SẮP XẾP TRONG MỘT HÀNH TRÌNH DU LỊCH ĐẦY ẤN TƯỢNG",
        "duration": "4 Ngày 3 Đêm",
        "features": [
          "Bãi biển Mỹ Khê",
          "Ẩm thực đặc sắc"
        ],
        "price_old": "",
        "price_new": "7.800.000 VND"
      },
      {
        "id": 15,
        "category": "domestic",
        "image": "https://resource.kinhtedothi.vn/2025/01/11/pho-tong-duy-tan-1.jpg",
        "alt": "Tour trong nước 3",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ HÀ NỘI VỚI NHỮNG CÂU CHUYỆN LỊCH SỬ, DI TÍCH VÀ ẨM THỰC TRUYỀN THỐNG ĐẶC SẮC",
        "duration": "2 Ngày 1 Đêm",
        "features": [
          "Phố cổ",
          "Ẩm thực truyền thống"
        ],
        "price_old": "1 khách đặt",
        "price_new": "3.000.000 VND"
      },
      {
        "id": 16,
        "category": "domestic",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1Qvdv5AftnmBtNyhytE0cUZa0h30xo2A5Q&s",
        "alt": "Tour trong nước 4",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ SAPA VỚI NHỮNG CẢNH QUAN NHIÊN THƠ MƠ VÀ BẢN LÀNG TRUYỀN THỐNG GẮN KÉO CẢM XÚC DU LỊCH",
        "duration": "3 Ngày 2 Đêm",
        "features": [
          "Fansipan",
          "Bản làng dân tộc"
        ],
        "price_old": "",
        "price_new": "4.800.000 VND"
      },
      {
        "id": 17,
        "category": "domestic",
        "image": "https://cdn.xanhsm.com/2025/02/a65235e8-choi-gi-o-nha-trang-11.jpg",
        "alt": "Tour trong nước 5",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ NHA TRANG VỚI BÃI BIỂN XANH NGỌT NGÀO, NƯỚC MÁT VÀ TRẢI NGHIỆM DU LỊCH SÔI ĐỘNG",
        "duration": "3 Ngày 2 Đêm",
        "features": [
          "Bãi biển xanh",
          "Lặn biển"
        ],
        "price_old": "3 khách đặt",
        "price_new": "5.500.000 VND"
      },
      {
        "id": 18,
        "category": "domestic",
        "image": "https://static-image.adavigo.com/uploads/545ecfaf-fabd-4f67-91fb-a85fbb94112a.jpg",
        "alt": "Tour trong nước 6",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ HUẾ VỚI DI TÍCH VĂN HÓA TRUYỀN THỐNG VÀ ẨM THỰC ĐỘC ĐÁO TRONG MỘT HÀNH TRÌNH DU LỊCH GẮN KÉO CẢM XÚC",
        "duration": "2 Ngày 1 Đêm",
        "features": [
          "Di tích Cố đô",
          "Ẩm thực Huế"
        ],
        "price_old": "1 khách đặt",
        "price_new": "3.200.000 VND"
      },
      {
        "id": 19,
        "category": "international",
        "image": "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock1020921643huge-1661704936584.jpg",
        "alt": "Tour nước ngoài 1",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ HÀN QUỐC VỚI NHỮNG CẢNH QUAN HIỆN ĐẠI, ẨM THỰC PHONG PHÚ VÀ TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO",
        "duration": "5 Ngày 4 Đêm",
        "features": [
          "SEOUL",
          "JEJU"
        ],
        "price_old": "5 khách đặt",
        "price_new": "18.900.000 VND"
      },
      {
        "id": 20,
        "category": "international",
        "image": "https://namthanhtravel.s3-ap-southeast-1.amazonaws.com/images/tinymce/2022/12/240a1e09-8b0d-475a-adcf-32265188d356.jpg",
        "alt": "Tour nước ngoài 2",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ THÁI LAN VỚI NHỮNG TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO VÀ ẨM THỰC SẤP XẾP TRONG MỘT HÀNH TRÌNH DU LỊCH ĐẶC BIỆT",
        "duration": "4 Ngày 3 Đêm",
        "features": [
          "BANGKOK",
          "PATTAYA"
        ],
        "price_old": "",
        "price_new": "6.200.000 VND"
      },
      {
        "id": 21,
        "category": "international",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGdDVbE4J1eHl3uLr4MXA0QWdAK8zCGKqIw&s",
        "alt": "Tour nước ngoài 3",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ CHÂU ÂU VỚI NHỮNG THÀNH PHỐ KIÊN TRÚC, ẨM THỰC CỰC SỐC VÀ TRẢI NGHIỆM DU LỊCH ĐẲNG CẤP",
        "duration": "10 Ngày 9 Đêm",
        "features": [
          "PARIS",
          "ROME",
          "BERLIN"
        ],
        "price_old": "3 khách đặt",
        "price_new": "50.000.000 VND"
      },
      {
        "id": 22,
        "category": "international",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pych4AfiLSaLkE8C1WmRLSlUFQDS1-lRKA&s",
        "alt": "Tour nước ngoài 4",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ ÚC VỚI NHỮNG CẢNH QUAN HẤP DẪN, TRẢI NGHIỆM DU LỊCH CHUYÊN NGHIỆP VÀ ẨM THỰC ĐẶC SẮC",
        "duration": "8 Ngày 7 Đêm",
        "features": [
          "SYDNEY",
          "MELBOURNE"
        ],
        "price_old": "",
        "price_new": "40.000.000 VND"
      },
      {
        "id": 23,
        "category": "international",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13ayGmZT_52xIoj_CJFE3EJOVdXRwj7sivg&s",
        "alt": "Tour nước ngoài 5",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ CANADA VỚI NHỮNG THÀNH PHỐ SÔI ĐỘNG, CẢNH QUAN HAO HỨNG VÀ TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO",
        "duration": "9 Ngày 8 Đêm",
        "features": [
          "TORONTO",
          "VANCOUVER"
        ],
        "price_old": "4 khách đặt",
        "price_new": "60.000.000 VND"
      },
      {
        "id": 24,
        "category": "international",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJS75BriGErLn_04I_XxxvUrdsMSE9fqFqw&s",
        "alt": "Tour nước ngoài 6",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ NHẬT BẢN VỚI VĂN HÓA TRUYỀN THỐNG, CÔNG NGHỆ HIỆN ĐẠI VÀ ẨM THỰC ĐA DẠNG TRONG MỘT HÀNH TRÌNH DU LỊCH SÂU SẮC",
        "duration": "7 Ngày 6 Đêm",
        "features": [
          "TOKYO",
          "OSA",
          "KYOTO"
        ],
        "price_old": "2 khách đặt",
        "price_new": "35.000.000 VND"
      },
      {
        "id": 25,
        "category": "regular",
        "image": "data:image/jpeg;base64,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",
        "alt": "Tour thường 25",
        "discount": "",
        "title": "KHÁM PHÁ LỄ HỘI ẨM THỰC ĐÀ NẴNG VỚI HƠN 200 MÓN NGON ĐẶC SẮC",
        "duration": "2 Ngày 1 Đêm",
        "features": [
          "Trải nghiệm lễ hội ẩm thực",
          "Thưởng thức món ngon đặc sản"
        ],
        "price_old": "",
        "price_new": "4.800.000 VND"
      },
      {
        "id": 26,
        "category": "regular",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs3FFE0eaFD9mqHsRIx38Rh5yv80CTBAeEw&s",
        "alt": "Tour thường 26",
        "discount": "",
        "title": "TREKKING KHÁM PHÁ BẢN TẢ VAN VÀ VĂN HÓA DÂN TỘC SAPA",
        "duration": "3 Ngày 2 Đêm",
        "features": [
          "Trekking bản làng",
          "Khám phá văn hóa dân tộc"
        ],
        "price_old": "",
        "price_new": "5.500.000 VND"
      },
      
      {
        "id": 27,
        "category": "sale",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaoVsR6QVnMSEnkJD65a7omP20OFFs0N9iw&s",
        "alt": "Tour giảm giá 25",
        "discount": "SALE 30%",
        "title": "KHÁM PHÁ ĐÀ LẠT VỚI GIÁ ƯU ĐÃI CHỈ CÒN 3.490.000 VND",
        "duration": "4 Ngày 3 Đêm",
        "features": [
          "Thăm quan Thung Lũng Tình Yêu",
          "Tham gia tour xe jeep khám phá đồi chè Cầu Đất",
          "Thưởng thức đặc sản địa phương tại chợ Đà Lạt"
        ],
        "price_old": "4.990.000 VND",
        "price_new": "3.490.000 VND"
      },
      {
        "id": 28,
        "category": "sale",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkThYgU7NbZSzDQSwSpc1Z02AI33lX4xLvvA&s",
        "alt": "Tour giảm giá 26",
        "discount": "SALE 20%",
        "title": "TRẢI NGHIỆM NHA TRANG VỚI CHƯƠNG TRÌNH GIẢM GIÁ ĐẶC BIỆT",
        "duration": "3 Ngày 3 Đêm",
        "features": [
          "Thăm quan Vinpearl Land Nha Trang",
          "Thư giãn tại suối khoáng nóng Tháp Bà",
          "Khám phá đảo Hòn Mun bằng tàu đáy kính"
        ],
        "price_old": "4.500.000 VND",
        "price_new": "3.600.000 VND"
      },
      {
        "id": 29,
        "category": "domestic",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxQeVFyO9xN-zffRd4K-Raz2Era5apU23Uw&s",
        "alt": "Tour trong nước 29",
        "discount": "SALE 20%",
        "title": "KHÁM PHÁ HÀ NỘI VỚI NHỮNG CÂU CHUYỆN LỊCH SỬ, DI TÍCH VÀ ẨM THỰC TRUYỀN THỐNG ĐẶC SẮC",
        "duration": "2 Ngày 1 Đêm",
        "features": [
          "Phố cổ",
          "Ẩm thực truyền thống"
        ],
        "price_old": "",
        "price_new": "3.000.000 VND"
      },
      {
        "id": 30,
        "category": "domestic",
        "image": "https://media.vov.vn/sites/default/files/styles/large_watermark/public/2022-09/chua_bo_da_24.jpg",
        "alt": "Tour trong nước 30",
        "discount": "SALE 30%",
        "title": "KHÁM PHÁ BẮC GIANG VỚI NHỮNG CẢNH QUAN VĂN HÓA VÀ DI TÍCH LỊCH SỬ QUAN TRỌNG",
        "duration": "3 Ngày 2 Đêm",
        "features": [
          "Chùa Bổ Đà",
          "Khám phá khu di tích Côn Sơn"
        ],
        "price_old": "5.000.000 VND",
        "price_new": "3.500.000 VND"
      },
      {
        "id": 31,
        "category": "international",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a3/8b/5f/niagara-falls.jpg?w=900&h=-1&s=1",
        "alt": "Tour nước ngoài 7",
        "discount": "ƯU ĐÃI",
        "title": "KHÁM PHÁ CANADA: TỪ THÁC NIAGARA ĐẾN CÁC THÀNH PHỐ SÔI ĐỘNG NHƯ TORONTO VÀ VANCOUVER",
        "duration": "10 Ngày 9 Đêm",
        "features": [
          "Niagara Falls",
          "Toronto CN Tower"
        ],
        "price_old": "3 khách đặt",
        "price_new": "65.000.000 VND"
      },
      {
        "id": 32,
        "category": "international",
        "image": "https://d1s09xku4jkn9v.cloudfront.net/alternate/abe1213d4c8341619a765fd241c05ac6_800.jpeg",
        "alt": "Tour nước ngoài 8",
        "discount": "ƯU ĐÃI",
        "title": "TRẢI NGHIỆM NHẬT BẢN MÙA HOA ANH ĐÀO: KHÁM PHÁ TOKYO, KYOTO VÀ HIMEJI",
        "duration": "8 Ngày 7 Đêm",
        "features": [
          "Tokyo Cherry Blossom",
          "Kyoto Golden Pavilion"
        ],
        "price_old": "5 khách đặt",
        "price_new": "40.000.000 VND"
      }
      
      
    ]
  };

  // Các biến và hằng số
  const tours = tourData.tours;
  const toursPerPage = 6; // Số tour mỗi trang
  const totalPages = Math.ceil(tours.length / toursPerPage); // Tính tổng số trang
  let currentPage = 1;

  const tourContainer = document.querySelector(".tour-container");
  const paginationContainer = document.querySelector(".pagination");

  // Hàm render tour cho một trang
  function renderTours(page) {
    tourContainer.innerHTML = ""; // Xóa nội dung cũ

    const startIndex = (page - 1) * toursPerPage;
    const endIndex = Math.min(startIndex + toursPerPage, tours.length);

    for (let i = startIndex; i < endIndex; i++) {
      const tour = tours[i];
      const tourCard = document.createElement("div");
      tourCard.classList.add("tour-card");

      // Tạo HTML cho tour card
      tourCard.innerHTML = `
                <div class="tour-image-container">
                    <img src="${tour.image}" alt="${
        tour.alt
      }" class="tour-image" />
                    <span class="favorite-icon">❤️</span>
                    ${
                      tour.discount
                        ? `<span class="discount-label">${tour.discount}</span>`
                        : ""
                    }
                </div>
                <div class="tour-content">
                    <div class="tour-header">
                        <h3 class="tour-title">${tour.title}</h3>
                    </div>
                    <div class="tour-meta">
                        <span class="tour-duration"><i class="icon-clock">⏰</i> Thời gian: ${
                          tour.duration
                        }</span>
                        <ul class="tour-features">
                            ${tour.features
                              .map((feature) => `<li>${feature}</li>`)
                              .join("")}
                        </ul>
                    </div>
                    <div class="tour-footer">
                        <div class="tour-price-container">
                            ${
                              tour.price_old
                                ? `<span class="tour-price-old">${tour.price_old}</span>`
                                : ""
                            }
                            <span class="tour-price">${tour.price_new}</span>
                        </div>
                        <a href="#" class="view-detail-btn">Xem chi tiết</a>
                    </div>
                </div>
            `;

      tourContainer.appendChild(tourCard);
    }
  }

  // Hàm render phân trang
  function renderPagination() {
    paginationContainer.innerHTML = ""; // Xóa nội dung cũ

    // Nút "Trước"
    const prevButton = document.createElement("a");
    prevButton.href = "#";
    prevButton.classList.add("page-item", "prev");
    if (currentPage === 1) prevButton.classList.add("disabled");
    prevButton.textContent = "« Trước";
    paginationContainer.appendChild(prevButton);

    // Các nút số trang
    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement("a");
      pageItem.href = "#";
      pageItem.classList.add("page-item");
      if (i === currentPage) pageItem.classList.add("active");
      pageItem.setAttribute("data-page", i);
      pageItem.textContent = i;
      paginationContainer.appendChild(pageItem);
    }

    // Nút "Tiếp"
    const nextButton = document.createElement("a");
    nextButton.href = "#";
    nextButton.classList.add("page-item", "next");
    if (currentPage === totalPages) nextButton.classList.add("disabled");
    nextButton.textContent = "Tiếp »";
    paginationContainer.appendChild(nextButton);

    // Thêm sự kiện cho các nút
    addPaginationEvents();
  }

  // Hàm thêm sự kiện cho các nút phân trang
  function addPaginationEvents() {
    const pageItems = document.querySelectorAll(".page-item[data-page]");
    const prevButton = document.querySelector(".page-item.prev");
    const nextButton = document.querySelector(".page-item.next");

    pageItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const page = parseInt(this.getAttribute("data-page"));
        if (page !== currentPage) {
          currentPage = page;
          renderTours(currentPage);
          renderPagination();
        }
      });
    });

    prevButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        renderTours(currentPage);
        renderPagination();
      }
    });

    nextButton.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        renderTours(currentPage);
        renderPagination();
      }
    });
  }

  // Khởi tạo: render trang đầu tiên và phân trang
  renderTours(currentPage);
  renderPagination();
});
