// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    const trashButtons = document.querySelectorAll(".fa-trash-alt");
    const heartButtons = document.querySelectorAll(".fa-heart");
  
    function updateTotal() {
      let total = 0;
      document.querySelectorAll(".card-body").forEach((cardBody) => {
        const priceText = cardBody.querySelector(".unit-price");
        const quantityText = cardBody.querySelector(".quantity");
        if (priceText && quantityText) {
          const price = parseFloat(priceText.textContent);
          const quantity = parseInt(quantityText.textContent);
          total += price * quantity;
        }
      });
      document.querySelector(".total").textContent = `${total} $`;
    }
  
    // Increase the quantity
    plusButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const quantitySpan = this.nextElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = ++quantity;
        updateTotal();
      });
    });
  
    // Decrease quantity
    minusButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const quantitySpan = this.previousElementSibling;
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 0) {
          quantitySpan.textContent = --quantity;
          updateTotal();
        }
      });
    });
  
    // Delete item
    trashButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const cardBody = this.closest(".card-body");
        cardBody.remove();
        updateTotal();
      });
    });
  
    // Like item
    heartButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        this.classList.toggle("liked");
        this.style.color = this.classList.contains("liked") ? "red" : "black";
      });
    });
  
    updateTotal(); // in case there are predefined quantities
  });
  