document.addEventListener("DOMContentLoaded", () => {
    const moreInfoBtn = document.getElementById("more-info");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("close-popup");
  
    moreInfoBtn.addEventListener("click", () => {
      popup.classList.remove("hidden");
    });
  
    closePopupBtn.addEventListener("click", () => {
      popup.classList.add("hidden");
    });
  });
  