'use strict'

const cities = [
  {
    "id": "3911924",
    "name": "La Paz"
  },
  {
    "id": "3919966",
    "name": "Cochabamba"
  },
  {
    "id": "3904906",
    "name": "Santa Cruz"
  },
  {
    "id": "3920177",
    "name": "Chuquisaca"
  },
  {
    "id": "3909233",
    "name": "Oruro"
  },
  {
    "id": "3903319",
    "name": "Tarija"
  },
  {
    "id": "3923172",
    "name": "Beni"
  },
  {
    "id": "3908600",
    "name": "Pando"
  },
  {
    "id": "3907580",
    "name": "Potosí"
  }
]

const API_KEY = '284aad3b1f0e19c9948e86c8752e4e71'

const mainElement = document.getElementById('weather-app-main')
const themeToggle = document.getElementById('theme-toggle-input')
const themeLabel = document.getElementById('theme-label')
const footer = document.getElementsByTagName('footer')[0]
const citiesDropdown = document.getElementById('cities-dropdown')

setInterval(() => {
  document.getElementById('clock').innerHTML = new Date().toLocaleTimeString()
}, 1000)

cities.forEach(city => {
  const option = document.createElement('option')
  option.appendChild(document.createTextNode(city.name))
  citiesDropdown.appendChild(option)
})

citiesDropdown.addEventListener('change', e => {
  getData()
})

const getData = async () => {
  const city = document.getElementById('cities-dropdown').value
  const tempData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
  const temp = await tempData.json()
  console.log(temp);
  document.getElementById('temperature').innerText = parseInt(temp.main.temp)
  document.getElementById('humidity').innerText = temp.main.humidity
  document.getElementById('min').innerText = parseInt(temp.main.temp_min)
  document.getElementById('max').innerText = parseInt(temp.main.temp_max)
  document.getElementById('weather-main').innerText = temp.weather[0].main
  document.getElementsByTagName('img')[0].src = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@4x.png`
}

themeToggle.addEventListener('change', e => {
  themeLabel.innerText = e.target.checked ? 'Dark' : 'Light'
  mainElement.className = `${e.target.checked ? 'dark' : 'light'}-theme`
  footer.className = `${e.target.checked ? 'dark' : 'light'}-theme`
})

getData()
