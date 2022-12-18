const button = document.getElementById('buttonEmail')
const buttonContainer = document.getElementById('buttonContainer')
const email = document.getElementById('email').innerHTML
const alert = document.createElement('p')
alert.innerHTML = 'Email copiado!'
alert.className =
  'bg-green-800 rounded text-lg opacity-75 mt-5 text-slate-50 p-2'

button.addEventListener('click', () => {
  button.setAttribute('disabled', true)
  navigator.clipboard.writeText(email)
  buttonContainer.appendChild(alert)
  setTimeout(() => {
    button.removeAttribute('disabled')
    buttonContainer.removeChild(alert)
  }, 3000)
})
