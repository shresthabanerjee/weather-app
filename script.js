
  if (typeof document !== 'undefined'){
const search=document.querySelector('.input-box');
const searchbutton=document.getElementById('searchbtn');
const img=document.querySelector('.image');
const temp=document.querySelector('.temperature');
const desc=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind=document.getElementById('wind-speed');
const err=document.getElementsByClassName('error')[0]

async function searchf(city)
{
    const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'7038e72b1b19525c601f209fbe091d8e'}`)
    .then(res=>res.json())
    

    if(data.cod==`404`){
      err.style.display='flex';
      document.getElementsByClassName('weather-body')[0].style.display='none';
      console.log('city not found!!!!')
    }
    else{
      document.getElementsByClassName('error')[0].style.display='none';

      document.getElementsByClassName('weather-body')[0].style.display='flex';
    temp.innerHTML=`${Math.round(data.main.temp-273)}°C`
    wind.innerHTML=`${data.wind.speed}km/hr`
    desc.innerHTML=data.weather[0].main;
    humidity.innerHTML=`${data.main.humidity}%`;
    if(data.weather[0].main=='Clouds') img.src='cloud.png'
    if(data.weather[0].main=='Haze') img.src='mist.png'
    if(data.weather[0].main=='Clear') img.src='clear.png'
    if(data.weather[0].main=='Thunderstorm') img.src='snow.png'
    if(data.weather[0].main=='Rain') img.src='rain.png'
    if(data.weather[0].main=='Mist') img.src='mist.png'
    }



}





searchbutton.addEventListener('click',()=>{
    searchf(search.value)
})
  }