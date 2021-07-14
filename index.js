"use strict"

setInterval(() => {
  document.getElementById('clock').innerHTML = new Date().toLocaleTimeString()
}, 1000)

const mainElement = document.getElementById('weather-app-main')
const themeToggle = document.getElementById('theme-toggle')
const themeLabel = document.getElementById('theme-label')

themeToggle.addEventListener('change', (e) => {
  themeLabel.innerText = e.target.checked ? 'Dark' : 'Light'
  mainElement.className = e.target.checked ? 'dark-theme' : 'light-theme'
})
