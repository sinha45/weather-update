// api key(43b839254f9b1542a05ba07326c47eff)

const api_Key = `43b839254f9b1542a05ba07326c47eff
`;


const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
    // console.log(data);
    // console.log(displayTemp(data));

}

const displayTemp = data => {

    console.log(data);

    // const temp = document.getElementById('temperature');
    // temp.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('weather-condition', data.weather[0].main)

}

const setInnerTextById = (id, text) => {
    const temp = document.getElementById(id)
    temp.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    //     //set city
    document.getElementById('city').innerText = city;

    loadTemperature(city);
})



loadTemperature('dhaka');






