'use strict'

const API_KEY = '284aad3b1f0e19c9948e86c8752e4e71'

setInterval(() => {
  document.getElementById('clock').innerHTML = new Date().toLocaleTimeString()
}, 1000)

const getData = async () => {
  const tempData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cochabamba&units=metric&appid=${API_KEY}`)
  const temp = await tempData.json()
  console.log(temp);
  document.getElementById('temperature').innerText = parseInt(temp.main.temp)
  document.getElementById('humidity').innerText = temp.main.humidity
  document.getElementById('min').innerText = parseInt(temp.main.temp_min)
  document.getElementById('max').innerText = parseInt(temp.main.temp_max)
  document.getElementById('weather-main').innerText = temp.weather[0].main
  document.getElementsByTagName('img')[0].src = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@4x.png`
}

const fetchedData = getData()
console.log(fetchedData)

const mainElement = document.getElementById('weather-app-main')
const themeToggle = document.getElementById('theme-toggle-input')
const themeLabel = document.getElementById('theme-label')
const footer = document.getElementsByTagName('footer')[0]

themeToggle.addEventListener('change', (e) => {
  themeLabel.innerText = e.target.checked ? 'Dark' : 'Light'
  mainElement.className = `${e.target.checked ? 'dark' : 'light'}-theme`
  footer.className = `${e.target.checked ? 'dark' : 'light'}-theme`
})
