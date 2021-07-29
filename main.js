document.getElementById('cashbox-tip').innerText = "$0.00"
document.getElementById('cashbox-total').innerText = "$0.00"
document.getElementById('people-input').value = 1

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