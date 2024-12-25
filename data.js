const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const popupContainer = document.getElementById("popupContainer");

// Hiện popup và khóa các thao tác bên ngoài
yesButton.addEventListener("click", () => {
  popupContainer.classList.remove("hidden");

  // Khóa tất cả các sự kiện nhấp chuột, chuột phải và cảm ứng trên body
  document.body.style.pointerEvents = "none";
  popupContainer.style.pointerEvents = "all"; // Chỉ cho phép tương tác với popup
});

// Tắt chuột phải và các phím nhấn
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  // Ngăn đóng popup bằng các phím như ESC hoặc F5
  if (e.key === "Escape" || e.key === "F5") {
    e.preventDefault();
  }
});
