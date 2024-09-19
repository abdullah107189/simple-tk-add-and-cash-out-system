const loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const inputNumber = parseFloat(document.getElementById('input-number').value)
    const inputPin = parseFloat(document.getElementById('input-pin').value)
    if (inputNumber === 5 && inputPin === 1234){
        window.location.href = 'account.html'
    }
    else{
        alert('Who are you?')
    }
})