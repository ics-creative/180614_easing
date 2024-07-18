// モバイル対応のための処理
window.addEventListener("resize", resize);
resize();

// media query change
function resize() {
  const element = document.querySelector("section");

  const contentWidth = 750;
  if (innerWidth < contentWidth) {
    // スマートフォンのサイズだったら
    const scale = innerWidth / contentWidth;
    element.style.transform = `scale(${scale})`;
  } else {
    // デスクトップのサイズだったら
    element.style.transform = null;
  }
}


function setupHoverAndTap() {
  const element = document.querySelector("section");
  // マウスのインタラクション
  element.addEventListener("mouseover", () => {
    element.classList.add("motion");
  });

  element.addEventListener("mouseout", () => {
    element.classList.remove("motion");
  });

  // タッチデバイスでのインタラクション
  element.addEventListener("touchstart", (event) => {
    element.classList.add("motion");
    event.preventDefault();
  });

  element.addEventListener("touchend", () => {
    element.classList.remove("motion");
  });
}
