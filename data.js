const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const popupContainer = document.getElementById("popupContainer");

let noClickCount = 0; // Số lần hover vào nút No

// Hiện popup và khóa các thao tác bên ngoài
yesButton.addEventListener("click", () => {
  popupContainer.classList.remove("hidden");

  // Khóa tất cả các sự kiện nhấp chuột, chuột phải và cảm ứng trên body
  document.body.style.pointerEvents = "none";
  popupContainer.style.pointerEvents = "all"; // Chỉ cho phép tương tác với popup
});

// Nút "No" di chuyển đến vị trí bất kỳ khi hover
noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  // Thu nhỏ và làm mờ dần
  noButton.style.transform = `scale(${1 - noClickCount * 0.1})`;
  noButton.style.opacity = `${1 - noClickCount * 0.1}`;

  // Tăng số lần hover
  noClickCount++;

  // Ngăn hover thêm sau 5 lần
  if (noClickCount >= 5) {
    noButton.style.pointerEvents = "none";
  }
});

// Ngăn đóng popup bằng chuột phải và các phím như ESC
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" || e.key === "F5") {
    e.preventDefault();
  }
});
