"use strict"

setInterval(() => {
  document.getElementById('clock').innerHTML = new Date().toLocaleTimeString()
}, 1000)

const mainElement = document.getElementById('weather-app-main')
const themeToggle = document.getElementById('theme-toggle-input')
const themeLabel = document.getElementById('theme-label')
const footer = document.getElementsByTagName('footer')[0]

themeToggle.addEventListener('change', (e) => {
  themeLabel.innerText = e.target.checked ? 'Dark' : 'Light'
  mainElement.className = `${e.target.checked ? 'dark' : 'light'}-theme`
  footer.className = `${e.target.checked ? 'dark' : 'light'}-theme`
})
