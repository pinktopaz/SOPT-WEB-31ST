const orderBtn = document.querySelector(".order_btn");

const orderModal = document.querySelector(".order_modal_wrap");

const orderModalNo = document.querySelector(".order_modal_no");

orderBtn.addEventListener("click", () => {
  orderModal.style.visibility = "visible";
});

orderModalNo.addEventListener("click", () => {
  orderModal.style.visibility = "hidden";
});
