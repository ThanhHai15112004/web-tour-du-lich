document.addEventListener("DOMContentLoaded", function () {
  // Dữ liệu JSON (bạn sẽ copy dữ liệu vào đây)
  const tourData = {
    tours: [
      {
        id: 1,
        category: "regular",
        image: "/assets/imgs/contents/tour1.jpg",
        alt: "Tour phổ biến",
        discount: "",
        title:
          "KHÁM PHÁ THÀNH PHỐ VỚI NHỮNG TRẢI NGHIỆM ĐA DẠNG VÀ SỰ GIAO THOA VĂN HÓA ĐỘC ĐÁO TRONG MỖI GÓC NHÌN",
        duration: "3 Ngày 2 Đêm",
        features: ["Tour thành phố", "Ẩm thực địa phương"],
        price_old: "",
        price_new: "5.000.000 VND",
      },
      {
        id: 2,
        category: "regular",
        image: "/assets/imgs/contents/tour_regular_2.jpg",
        alt: "Tour phổ biến",
        discount: "",
        title:
          "TRẢI NGHIỆM VĂN HÓA ĐA DẠNG VỚI CHI TIẾT DI TÍCH VÀ ẨM THỰC TRUYỀN THỐNG KẾT HỢP HÀNH TRÌNH DU LỊCH ĐỘC ĐÁO",
        duration: "4 Ngày 3 Đêm",
        features: ["Tham quan di tích", "Ẩm thực truyền thống"],
        price_old: "",
        price_new: "6.500.000 VND",
      },
      {
        id: 3,
        category: "regular",
        image: "/assets/imgs/contents/tour_regular_3.jpg",
        alt: "Tour phổ biến",
        discount: "",
        title:
          "DU LỊCH THIÊN NHIÊN VỚI NHỮNG CẢNH QUAN TUYỆT VỜI VÀ KHÔNG KHÍ TRONG LÀNH TRONG MỖI CHI TIẾT",
        duration: "3 Ngày 2 Đêm",
        features: ["Tham quan công viên", "Dã ngoại"],
        price_old: "",
        price_new: "4.800.000 VND",
      },
      {
        id: 4,
        category: "regular",
        image: "/assets/imgs/contents/tour_regular_4.jpg",
        alt: "Tour phổ biến",
        discount: "",
        title:
          "KHÁM PHÁ LỊCH SỬ VỚI NHỮNG DI TÍCH CỔ KIẾN VÀ HÀNH TRÌNH KHOẢNG KHẮC ĐÁNG NHỚ TRONG QUÁ KHỨ VÀ HIỆN TẠI",
        duration: "4 Ngày 3 Đêm",
        features: ["Di tích lịch sử", "Trung tâm thành phố"],
        price_old: "",
        price_new: "7.200.000 VND",
      },
      {
        id: 5,
        category: "regular",
        image: "/assets/imgs/contents/tour_regular_5.jpg",
        alt: "Tour phổ biến",
        discount: "",
        title:
          "TRẢI NGHIỆM ẨM THỰC ĐA DẠNG VỚI NHỮNG HƯƠNG VỊ TRUYỀN THỐNG KẾT HỢP HIỆN ĐẠI TRONG MỘT HÀNH TRÌNH ẨM THỰC SÔI ĐỘNG",
        duration: "3 Ngày 2 Đêm",
        features: ["Tour ẩm thực", "Chợ địa phương"],
        price_old: "",
        price_new: "5.800.000 VND",
      },
      {
        id: 6,
        category: "regular",
        image: "/assets/imgs/contents/tour_regular_6.jpg",
        alt: "Tour phổ biến",
        discount: "",
        title:
          "KHÁM PHÁ CÁC BẢN LÀNG TRUYỀN THỐNG VỚI CẢNH QUAN ĐỒNG BÀN VÀ VĂN HÓA ĐA NGHỆ TẠO NÊN MỘT HÀNH TRÌNH DU LỊCH ĐẶC BIỆT",
        duration: "4 Ngày 3 Đêm",
        features: ["Bản làng truyền thống", "Phong cảnh hữu tình"],
        price_old: "",
        price_new: "6.000.000 VND",
      },
      {
        id: 7,
        category: "sale",
        image: "/assets/imgs/contents/tour_sale_1.jpg",
        alt: "Tour giảm giá",
        discount: "SALE 20%",
        title:
          "TRẢI NGHIỆM SỰ SĂN SALE VỚI ƯU ĐÃI KHỦNG VÀ GIÁ SỐC CHO DU KHÁCH NHỮNG NGÀY ĐẶC BIỆT",
        duration: "5 Ngày 4 Đêm",
        features: ["Giá sốc", "Khuyến mãi đặc biệt"],
        price_old: "7.000.000 VND",
        price_new: "5.600.000 VND",
      },
      {
        id: 8,
        category: "sale",
        image: "/assets/imgs/contents/tour_sale_2.jpg",
        alt: "Tour giảm giá",
        discount: "SALE 15%",
        title:
          "DU LỊCH SALE HOT VỚI CHƯƠNG TRÌNH ƯU ĐÃI ĐỘC QUYỀN VÀ TRẢI NGHIỆM DU LỊCH ĐỈNH CAO CHO MỌI DU KHÁCH",
        duration: "6 Ngày 5 Đêm",
        features: ["Ưu đãi cực sốc", "Trải nghiệm đỉnh cao"],
        price_old: "10.000.000 VND",
        price_new: "8.500.000 VND",
      },
      {
        id: 9,
        category: "sale",
        image: "/assets/imgs/contents/tour_sale_3.jpg",
        alt: "Tour giảm giá",
        discount: "SALE 25%",
        title:
          "KHÁM PHÁ VÀ ƯU ĐÃI VỚI CHIẾN DỊCH GIẢM GIÁ HẤP DẪN VÀ ƯU ĐÃI SIÊU KHỦNG CHO DU KHÁCH THÔNG MINH",
        duration: "4 Ngày 3 Đêm",
        features: ["Ưu đãi hấp dẫn", "Chương trình khuyến mãi"],
        price_old: "8.000.000 VND",
        price_new: "6.000.000 VND",
      },
      {
        id: 10,
        category: "sale",
        image: "/assets/imgs/contents/tour_sale_4.jpg",
        alt: "Tour giảm giá",
        discount: "SALE 10%",
        title:
          "DU LỊCH THOẢI MÁI VỚI DỊCH VỤ CHUYÊN NGHIỆP VÀ ƯU ĐÃI SIÊU HOT CHO TRẢI NGHIỆM DU LỊCH ĐỘC NHẤT",
        duration: "5 Ngày 4 Đêm",
        features: ["Giá ưu đãi", "Trải nghiệm đẳng cấp"],
        price_old: "9.000.000 VND",
        price_new: "8.100.000 VND",
      },
      {
        id: 11,
        category: "sale",
        image: "/assets/imgs/contents/tour_sale_5.jpg",
        alt: "Tour giảm giá",
        discount: "SALE 30%",
        title:
          "ƯU ĐÃI KHỦNG VỚI GIÁ CỰC SỐC VÀ TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO CHO NHỮNG DU KHÁCH TÍCH CỰC",
        duration: "7 Ngày 6 Đêm",
        features: ["Giá cực sốc", "Ưu đãi không giới hạn"],
        price_old: "14.000.000 VND",
        price_new: "9.800.000 VND",
      },
      {
        id: 12,
        category: "sale",
        image: "/assets/imgs/contents/tour_sale_6.jpg",
        alt: "Tour giảm giá",
        discount: "SALE 20%",
        title:
          "SĂN SALE CÙNG CHÚNG TÔI VỚI CHƯƠNG TRÌNH ƯU ĐÃI ĐỘC QUYỀN VÀ GIÁ MỜI KHÔNG THỂ BỎ LỠ TRONG MỖI NGÀY DU LỊCH",
        duration: "4 Ngày 3 Đêm",
        features: ["Ưu đãi độc quyền", "Giá mềm"],
        price_old: "7.500.000 VND",
        price_new: "6.000.000 VND",
      },
      {
        id: 13,
        category: "domestic",
        image: "/assets/imgs/contents/tour_domestic_1.jpg",
        alt: "Tour trong nước ",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ SÀI GÒN VỚI NHỮNG CẢNH ĐẸP ĐẦY MÀU SẮC VÀ ẨM THỰC SÔI ĐỘNG TRONG TRÁI TIM THÀNH PHỐ",
        duration: "3 Ngày 2 Đêm",
        features: ["Tham quan thành phố", "Ẩm thực đường phố"],
        price_old: "2 khách đặt",
        price_new: "4.500.000 VND",
      },
      {
        id: 14,
        category: "domestic",
        image: "/assets/imgs/contents/tour_domestic_2.jpg",
        alt: "Tour trong nước ",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ ĐÀ NẴNG VỚI NHỮNG BÃI BIỂN XANH MÁT, ẨM THỰC ĐẶC SẮC VÀ VĂN HÓA SẮP XẾP TRONG MỘT HÀNH TRÌNH DU LỊCH ĐẦY ẤN TƯỢNG",
        duration: "4 Ngày 3 Đêm",
        features: ["Bãi biển Mỹ Khê", "Ẩm thực đặc sắc"],
        price_old: "",
        price_new: "7.800.000 VND",
      },
      {
        id: 15,
        category: "domestic",
        image: "/assets/imgs/contents/tour_domestic_3.jpg",
        alt: "Tour trong nước ",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ HÀ NỘI VỚI NHỮNG CÂU CHUYỆN LỊCH SỬ, DI TÍCH VÀ ẨM THỰC TRUYỀN THỐNG ĐẶC SẮC",
        duration: "2 Ngày 1 Đêm",
        features: ["Phố cổ", "Ẩm thực truyền thống"],
        price_old: "1 khách đặt",
        price_new: "3.000.000 VND",
      },
      {
        id: 16,
        category: "domestic",
        image: "/assets/imgs/contents/tour_domestic_4.jpg",
        alt: "Tour trong nước ",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ SAPA VỚI NHỮNG CẢNH QUAN NHIÊN THƠ MƠ VÀ BẢN LÀNG TRUYỀN THỐNG GẮN KÉO CẢM XÚC DU LỊCH",
        duration: "3 Ngày 2 Đêm",
        features: ["Fansipan", "Bản làng dân tộc"],
        price_old: "",
        price_new: "4.800.000 VND",
      },
      {
        id: 17,
        category: "domestic",
        image: "/assets/imgs/contents/tour_domestic_5.jpg",
        alt: "Tour trong nước ",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ NHA TRANG VỚI BÃI BIỂN XANH NGỌT NGÀO, NƯỚC MÁT VÀ TRẢI NGHIỆM DU LỊCH SÔI ĐỘNG",
        duration: "3 Ngày 2 Đêm",
        features: ["Bãi biển xanh", "Lặn biển"],
        price_old: "3 khách đặt",
        price_new: "5.500.000 VND",
      },
      {
        id: 18,
        category: "domestic",
        image: "/assets/imgs/contents/tour_domestic_6.jpg",
        alt: "Tour trong nước ",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ HUẾ VỚI DI TÍCH VĂN HÓA TRUYỀN THỐNG VÀ ẨM THỰC ĐỘC ĐÁO TRONG MỘT HÀNH TRÌNH DU LỊCH GẮN KÉO CẢM XÚC",
        duration: "2 Ngày 1 Đêm",
        features: ["Di tích Cố đô", "Ẩm thực Huế"],
        price_old: "1 khách đặt",
        price_new: "3.200.000 VND",
      },
      {
        id: 19,
        category: "international",
        image: "/assets/imgs/contents/tour_international_1.jpg",
        alt: "Tour nước ngoài",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ HÀN QUỐC VỚI NHỮNG CẢNH QUAN HIỆN ĐẠI, ẨM THỰC PHONG PHÚ VÀ TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO",
        duration: "5 Ngày 4 Đêm",
        features: ["SEOUL", "JEJU"],
        price_old: "5 khách đặt",
        price_new: "18.900.000 VND",
      },
      {
        id: 20,
        category: "international",
        image: "/assets/imgs/contents/tour_international_2.jpg",
        alt: "Tour nước ngoài",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ THÁI LAN VỚI NHỮNG TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO VÀ ẨM THỰC SẤP XẾP TRONG MỘT HÀNH TRÌNH DU LỊCH ĐẶC BIỆT",
        duration: "4 Ngày 3 Đêm",
        features: ["BANGKOK", "PATTAYA"],
        price_old: "",
        price_new: "6.200.000 VND",
      },
      {
        id: 21,
        category: "international",
        image: "/assets/imgs/contents/tour_international_3.jpg",
        alt: "Tour nước ngoài",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ CHÂU ÂU VỚI NHỮNG THÀNH PHỐ KIÊN TRÚC, ẨM THỰC CỰC SỐC VÀ TRẢI NGHIỆM DU LỊCH ĐẲNG CẤP",
        duration: "10 Ngày 9 Đêm",
        features: ["PARIS", "ROME", "BERLIN"],
        price_old: "3 khách đặt",
        price_new: "50.000.000 VND",
      },
      {
        id: 22,
        category: "international",
        image: "/assets/imgs/contents/tour_international_4.jpg",
        alt: "Tour nước ngoài",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ ÚC VỚI NHỮNG CẢNH QUAN HẤP DẪN, TRẢI NGHIỆM DU LỊCH CHUYÊN NGHIỆP VÀ ẨM THỰC ĐẶC SẮC",
        duration: "8 Ngày 7 Đêm",
        features: ["SYDNEY", "MELBOURNE"],
        price_old: "",
        price_new: "40.000.000 VND",
      },
      {
        id: 23,
        category: "international",
        image: "/assets/imgs/contents/tour_international_5.jpg",
        alt: "Tour nước ngoài",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ CANADA VỚI NHỮNG THÀNH PHỐ SÔI ĐỘNG, CẢNH QUAN HAO HỨNG VÀ TRẢI NGHIỆM DU LỊCH ĐỘC ĐÁO",
        duration: "9 Ngày 8 Đêm",
        features: ["TORONTO", "VANCOUVER"],
        price_old: "4 khách đặt",
        price_new: "60.000.000 VND",
      },
      {
        id: 24,
        category: "international",
        image: "/assets/imgs/contents/tour_international_6.jpg",
        alt: "Tour nước ngoài",
        discount: "ƯU ĐÃI",
        title:
          "KHÁM PHÁ NHẬT BẢN VỚI VĂN HÓA TRUYỀN THỐNG, CÔNG NGHỆ HIỆN ĐẠI VÀ ẨM THỰC ĐA DẠNG TRONG MỘT HÀNH TRÌNH DU LỊCH SÂU SẮC",
        duration: "7 Ngày 6 Đêm",
        features: ["TOKYO", "OSA", "KYOTO"],
        price_old: "2 khách đặt",
        price_new: "35.000.000 VND",
      },
    ],
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
