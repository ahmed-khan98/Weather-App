const inputcity = document.getElementById("userinput")
const cityname = document.getElementById("cityname")
const temp = document.getElementById("temp")
const desc_temp = document.getElementById("desc_temp")
const feel_temp = document.getElementById("feelTemp")

let weather_info = () => {
    console.log(inputcity.value)
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputcity.value+'&appid=40b0676f040aec84d02abdaac37e34c8')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const city = data.name
        const temperature = data.main.temp
        const tem = temperature -273.15;
        const feeltemp = data.main.feels_like -273.15
        const desc = data.weather[0].description
        cityname.innerHTML =city
        temp.innerHTML = Math.ceil(tem.toFixed(2))
        desc_temp.innerHTML = desc;
        console.log(desc_temp.innerHTML)
        console.log(`feel like ${feeltemp}`)
    })
    .catch(response => alert("please insert a correct city name"))

    inputcity.value = "";
}

