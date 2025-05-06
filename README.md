# Hành Trình Giảm Cân của Trọng Nhân | Trọng Nhân's Weight Loss Journey

## Cấu Trúc Dự Án | Project Structure
- `index.html` - Tệp HTML chính | Main HTML file
- `style.css` - Kiểu CSS | CSS styles
- `js/` - Thư mục JavaScript | JavaScript files
  - `charts.js` - Khởi tạo và cấu hình biểu đồ | Chart initialization and configuration
  - `language.js` - Chức năng chuyển đổi ngôn ngữ | Language switching functionality
- `images/` - Thư mục hình ảnh | Image files for charts and visualizations
  - Hình ảnh tiếng Việt | Vietnamese images:
    - `summary_dashboard_vi.png` - Tổng quan bảng điều khiển | Main dashboard summary
    - `inbody_score_trend_vi.png` - Xu hướng điểm InBody | InBody score trend chart
    - `obesity_degree_trend_vi.png` - Xu hướng mức độ béo phì | Obesity degree trend chart
    - `pbf_trend_vi.png` - Xu hướng tỷ lệ mỡ cơ thể | Percent Body Fat trend chart
    - `metrics_comparison_vi.png` - So sánh cân nặng và thành phần cơ thể | Weight and body composition comparison
  - Hình ảnh tiếng Anh | English images:
    - `summary_dashboard-eng.png` - Tổng quan bảng điều khiển | Main dashboard summary
    - `inbody_score_trend-eng.png` - Xu hướng điểm InBody | InBody score trend chart
    - `obesity_degree_trend-eng.png` - Xu hướng mức độ béo phì | Obesity degree trend chart
    - `pbf_trend-eng.png` - Xu hướng tỷ lệ mỡ cơ thể | Percent Body Fat trend chart
    - `metrics_comparison-eng.png` - So sánh cân nặng và thành phần cơ thể | Weight and body composition comparison
  - Hình ảnh cờ | Flag images:
    - `vietnam-flag.png` - Cờ Việt Nam | Vietnam flag
    - `uk-flag.png` - Cờ Vương quốc Anh | UK flag

## Hướng Dẫn Cài Đặt | Setup Instructions
1. Đặt tất cả các tệp hình ảnh vào thư mục `images/` | Place all image files in the `images/` directory
2. Mở `index.html` trong trình duyệt web để xem bảng điều khiển | Open `index.html` in a web browser to view the dashboard

## Phụ Thuộc | Dependencies
- Bootstrap 5.3.0 (tải từ CDN | loaded from CDN)
- Chart.js (tải từ CDN | loaded from CDN)
- Font Awesome 6.0.0 (tải từ CDN | loaded from CDN)

## Tính Năng | Features
- Thiết kế đáp ứng hoạt động trên máy tính để bàn và thiết bị di động | Responsive design that works on desktop and mobile devices
- Biểu đồ tương tác hiển thị tiến trình theo thời gian | Interactive charts showing progress over time
- Thẻ tóm tắt với các chỉ số chính | Summary cards with key metrics
- Theo dõi cột mốc | Milestone tracking
- Khuyến nghị cá nhân hóa | Personalized recommendations
- Hỗ trợ song ngữ (Tiếng Việt và Tiếng Anh) với cờ quốc gia | Bilingual support (Vietnamese and English) with national flags
- Tự động chuyển đổi hình ảnh dựa trên ngôn ngữ đã chọn | Automatic image switching based on selected language

## Tùy Chỉnh | Customization
Bạn có thể tùy chỉnh bảng điều khiển này bằng cách | You can customize this dashboard by:
1. Cập nhật giá trị trong thẻ tiến trình | Updating the values in the progress cards
2. Sửa đổi dữ liệu biểu đồ trong `js/charts.js` | Modifying the chart data in `js/charts.js`
3. Thêm hoặc xóa cột mốc và khuyến nghị | Adding or removing milestones and recommendations
4. Thay đổi bảng màu trong `style.css` | Changing the color scheme in `style.css`
