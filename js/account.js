const addAmmountBtn = document.getElementById('addAmmountBtn')
const cashOutBtn = document.getElementById('cashOutBtn')

const addAmmountForm = document.getElementById('addAmmountForm')
const cashOutForm = document.getElementById('cashOutForm')
cashOutBtn.addEventListener('click', () => {
    addAmmountForm.classList.add('hidden')
    cashOutForm.classList.remove('hidden')
})
addAmmountBtn.addEventListener('click', () => {
    addAmmountForm.classList.remove('hidden')
    cashOutForm.classList.add('hidden')
})

const resultCashOutBtn = document.getElementById('resultCashOutBtn')
const resultAddAmmount = document.getElementById('resultAddAmmount')
const mainBalanceString = document.getElementById('mainBalance')
const mainBalance = parseFloat(mainBalanceString.innerText)

resultAddAmmount.addEventListener('click', (e) => {
    e.preventDefault()

    const inputAddAmmount = parseFloat(document.getElementById('input-add-ammount').value)
    const inputAddPin = parseFloat(document.getElementById('input-add-pin').value)

    if (inputAddPin === 1234) {
        const addTotal = (mainBalance + inputAddAmmount)
        console.log('total', addTotal)
        mainBalanceString.innerText = addTotal
        document.getElementById('input-add-ammount').value = ''
        document.getElementById('input-add-pin').value = ''
    }
    else {
        alert('please enter correct pin number')
    }
})

resultCashOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputCashAmmount = parseFloat(document.getElementById('input-cash-ammount').value)
    const inputCashPin = parseFloat(document.getElementById('input-cash-pin').value)
    if (inputCashPin === 1234) {
        const currentBalance = (mainBalance - inputCashAmmount)
        mainBalanceString.innerText = currentBalance
    }
    else {
        alert('enter correct pin')
    }
})