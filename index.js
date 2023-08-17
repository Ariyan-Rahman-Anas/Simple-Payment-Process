//code for apply coupon button
let applyBtn = document.getElementById("apply-btn").addEventListener("click", function(){
    const Payable = 1000;
    const offerPercentage = 30;
    const discountedAmount = (offerPercentage / 100) * Payable;
    let discountedPay = Payable - discountedAmount;
    let couponInput = document.getElementById("coupon-input");
    if(couponInput.value == "#COUP30"){
        let discountedTk = document.getElementById("discounted-amount").innerText = discountedAmount;
        let paymentTk  = document.getElementById("Payable-amount").innerText = discountedPay;
    }
    else{
        alert("Please enter valid coupon code")
        couponInput.value = "";
    }
})

//code for confirm payment
let paymentConfirmed = document.getElementById("payment-confirmed").addEventListener("click", function(){
    const Payable = 1000;
    const offerPercentage = 30;
    const discountedAmount = (offerPercentage / 100) * Payable;
    let discountedPay = Payable - discountedAmount;

    let amountInput = document.getElementById("amount-input");
    let amountInputValue = amountInput.value;
    let convertedAmountInputValue = parseFloat(amountInputValue);

    let payWithoutDiscount = document.getElementById("Payable-amount");
    let payWithoutDiscountValue = payWithoutDiscount.innerText;
    let convertedPayWithoutDiscountValue = parseFloat(payWithoutDiscountValue)

    document.getElementById("coupon-input").value = "";
    document.getElementById("discounted-amount").innerText = "";
    payWithoutDiscount.innerText = Payable;
    amountInput.value = "";

    if(convertedAmountInputValue == discountedPay || convertedAmountInputValue == convertedPayWithoutDiscountValue){
        alert(`
        You will receive a confirmation message of your payment.
        Thank you!`);
    }
    else{
        alert("Please enter  your payable amount.");
    }
})