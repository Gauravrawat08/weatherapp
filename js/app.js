const API_key ="sfA7CPtZbqKoeGVWGdSs28Pl09KPCc5A";
const api_url ="https://api.openweathermap.org/data/2.5/weather?q&units=metric";


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function chechkweather(city){
    const response = await fetch(api_url + city + `appid=${API_key}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + ".c";
    document.querySelector(".humdity").innerHTML = Math.round(data.main.humidity) +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";
}




searchbtn.addEventListener("click" , ()=>{

    chechkweather(searchbox.value);
})