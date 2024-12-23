const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
let counter = 0; // Đếm số lần nút "No" di chuyển
const maxMoves = 10; // Số lần tối đa nút "No" di chuyển

// Chuyển hướng khi nhấn "Yes"
yesButton.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/watch?v=TmwgIcCU0GE'; // Thay bằng trang bạn muốn chuyển đến
});

// Xử lý khi hover vào "No"
noButton.addEventListener('mouseover', () => {
  if (counter < maxMoves) {
    // Di chuyển nút "No" tới vị trí mới
    const x = Math.random() * window.innerWidth * 0.3; // Giới hạn vị trí trong màn hình
    const y = Math.random() * window.innerHeight * 0.3;

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // Giảm kích thước và độ mờ
    const scale = 1 - (counter + 1) * 0.05; // Giảm kích thước
    noButton.style.transform = `scale(${scale})`;
    noButton.style.opacity = 1 - (counter + 1) * 0.1; // Mờ dần

    counter++;
  } else {
    // Nếu đã di chuyển maxMoves lần thì không làm gì thêm
    noButton.style.pointerEvents = 'none'; // Không cho hover nữa
  }
});
