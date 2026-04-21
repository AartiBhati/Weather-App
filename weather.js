document.querySelector('button').addEventListener('click',()=>{
    const input=document.getElementById('location').value;
    const promise=fetch(`http://api.weatherapi.com/v1/current.json?key=2dfd2ffce2164ed7b8b51824262104&q=${input}&aqi=yes`)
    promise
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const e=document.querySelector(".error");
        if(e){e.remove()}
        let city =document.querySelector('.city');
        let temp=document.querySelector('.temperature');
        let humidity=document.getElementById('humidity');
        let wind=document.getElementById('wind');
        city.innerHTML=data.location.name;
        temp.innerHTML=`${data.current.temp_c} °C`;
        humidity.innerHTML=`${data.current.humidity}%`;
        wind.innerHTML=`${data.current.wind_kph} Km/h`;
    })
    .catch((error)=>{
        const e=document.querySelector(".error");
        if(e){e.remove()}
        const para=document.createElement('p');
        para.className='error';
        const weather_card=document.getElementsByClassName("weather-card")[0];
        
        para.innerText=error.message;
        para.style.textAlign='center';
        para.style.color = 'white';
        para.style.backgroundColor='#FF4D4D';
        para.style.borderRadius = '8px';
        weather_card.appendChild(para);

    })
})