function getHeadingTitle(containerId) {
    switch (containerId) {
      case "regular-tours":
        return "✈️ TOUR THƯỜNG";
      case "sale-tours":
        return "🔥 TOUR GIẢM GIÁ";
      case "domestic-tours":
        return "🏠 TOUR TRONG NƯỚC";
      case "international-tours":
        return "🌍 TOUR NƯỚC NGOÀI";
      default:
        return "TOUR KHÁC";
    }
  }
  
  function getHeadingDescription(containerId) {
    switch (containerId) {
      case "regular-tours":
        return "Hãy cùng chúng tôi khám phá những hành trình du lịch độc đáo, mang đậm dấu ấn văn hóa và trải nghiệm thực tế trong từng chuyến đi.";
      case "sale-tours":
        return "Nhanh tay đặt ngay các tour giảm giá với ưu đãi sốc, giúp bạn tiết kiệm chi phí mà vẫn tận hưởng chuyến du lịch trọn gói.";
      case "domestic-tours":
        return "Khám phá vẻ đẹp tiềm ẩn của đất nước qua những tour trong nước được thiết kế tỉ mỉ, phù hợp cho mọi gia đình.";
      case "international-tours":
        return "Trải nghiệm hành trình toàn cầu với các tour du lịch quốc tế, mang đến những kỷ niệm khó quên và trải nghiệm văn hóa đa dạng.";
      default:
        return "Hãy lựa chọn tour phù hợp với phong cách du lịch của bạn.";
    }
  }
  

  // Hàm tạo HTML cho 1 tour card (không thay đổi)
  function createTourCard(tour) {
    return `
      <div class="tour-card">
        <div class="rainbow-border"></div>
        <div class="tour-card-content">
          <div class="tour-image">
            <img src="${tour.image}" alt="${tour.alt}">
            ${tour.discount ? `<span class="discount">${tour.discount}</span>` : ""}
          </div>
          <div class="tour-info">
            <h3>${tour.title}</h3>
            <p class="duration">⏰ ${tour.duration} ✈️</p>
            <ul>
              ${tour.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <div class="price">
              <span class="price-old">${tour.price_old}</span>
              <span class="price-new">${tour.price_new}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  
  // Hàm render danh sách tours + thêm nút "Xem thêm tours"
  function renderTours(containerId, tours) {
    const container = document.getElementById(containerId);
    const headingTitle = getHeadingTitle(containerId); // Lấy tiêu đề tiếng Việt
    const headingDescription = getHeadingDescription(containerId); // Lấy đoạn giới thiệu tiếng Việt
  
    container.innerHTML = `
      <div class="tour-header">
        <h2>${headingTitle}</h2>
        <p>${headingDescription}</p>
      </div>
      <div class="tour-list">
        ${tours.map(tour => createTourCard(tour)).join('')}
      </div>
      <div class="view-more">
        <button onclick="loadMore('${containerId}')">Xem thêm tours</button>
      </div>
    `;
  }
  
  
  // Hàm load dữ liệu JSON và render các danh mục (không thay đổi)
  function loadTours() {
    fetch('/databases/tour_data.json')
      .then(response => response.json())
      .then(data => {
        const tours = data.tours;
        const regularTours = tours.filter(t => t.category === 'regular');
        const saleTours = tours.filter(t => t.category === 'sale');
        const domesticTours = tours.filter(t => t.category === 'domestic');
        const internationalTours = tours.filter(t => t.category === 'international');
  
        renderTours('regular-tours', regularTours);
        renderTours('sale-tours', saleTours);
        renderTours('domestic-tours', domesticTours);
        renderTours('international-tours', internationalTours);
      })
      .catch(error => console.error("Error loading tours:", error));
  }
  
  // Hàm giả lập xử lý "Xem thêm tours"
  function loadMore(containerId) {
    alert('Load thêm tours cho danh mục: ' + containerId);
    // Tại đây bạn có thể thêm logic gọi API, render thêm...
  }
  
  // Khi trang tải xong, gọi loadTours()
  document.addEventListener('DOMContentLoaded', loadTours);
  