const button = document.getElementById('convert-button')

const dolar = 5.2

const convertValues = () => {
    const input = document.getElementById('input-real').value
    console.log(input)
}

button.addEventListener('click', convertValues)