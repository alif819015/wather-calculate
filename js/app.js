
const city_api = `3242ecd56552b2cf3b7510ce79047030`;
const loadCountry = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${city_api}&units=imperial`;
    fetch(url)
    .then( res => res.json())
    .then( data => displayCountry(data))
}
const displayCountry = data =>{
// console.log(data);
// const temperature = document.getElementById('Temperature');
// temperature.innerText = data.main.temp;
    setInnerTextById('Temperature',data.main.temp);
    setInnerTextById('conditions',data.weather[0].main);
}

const setInnerTextById = ( id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('search-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const city = inputField.value;
    document.getElementById('city').innerText = city;
    loadCountry(city);


})
loadCountry('dhaka');