document.getElementById('cashbox-tip').innerText = "$0.00"
document.getElementById('cashbox-total').innerText = "$0.00"
document.getElementById('people-input').value = 1

let header = document.getElementsByClassName('btn-container')
let buttons = document.getElementsByClassName('tip-amount-btn')

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        var current = document.getElementsByClassName("active")

        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "")
        }

        this.className += " active"   

    })
}

console.log(document.querySelector('.active'))

function calculateTip() {
    let stringBill = document.getElementById('bill-input').value
    let numberBill = parseFloat(stringBill)

    let peopleStringAmount = document.getElementById('people-input').value
    let peopleNumberAmount = parseInt(peopleStringAmount)
    
    let tipAmount = ((numberBill * 15) / 100) / peopleNumberAmount
    document.getElementById('cashbox-tip').innerText = "$" + tipAmount.toFixed(2)

    let totalAmount = (numberBill / peopleNumberAmount) + tipAmount
    document.getElementById('cashbox-total').innerText = "$" + totalAmount.toFixed(2)
}