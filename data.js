const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const popupContainer = document.getElementById("popupContainer");

let noClickCount = 0; // Số lần hover vào nút No tối đa là 5 lần.

yesButton.addEventListener("click", () => {
  popupContainer.classList.remove("hidden");
});

noButton.addEventListener("mouseover", () => {
  if (noClickCount < 5) {
    const randomX = Math.random() * window.innerWidth - 100;
    const randomY = Math.random() * window.innerHeight - 50;

    noButton.style.position = "absolute";
    noButton.style.left = `${Math.max(0, randomX)}px`;
    noButton.style.top = `${Math.max(0, randomY)}px`;

    noButton.style.transform = `scale(${1 - noClickCount * 0.2})`;
    noButton.style.opacity = `${1 - noClickCount * 0.2}`;

    noClickCount++;
  }
});

// Ẩn popup khi nhấn vào vùng nền mờ
popupContainer.addEventListener("click", () => {
  popupContainer.classList.add("hidden");
});
