
let button = document.getElementById("button")
let names = document.querySelector('#names')
let planetNames = document.querySelector('#planetNames')


//CharacterNames

function getName(){

    let randomNum = Math.floor((Math.random() * 88) + 1)
    let apiUrl = 'http://swapi.dev/api/people/' + randomNum


   axios.get(apiUrl).then(function(response){
       updateInfo(response.data)
   })
}

function updateInfo(data) {
    names.innerText = data.name

}


button.addEventListener('click', getName)

//PlanetNames


function getPlanet(){

    let randomNum = Math.floor((Math.random() * 59) + 1)
    let apiUrl2 = 'http://swapi.dev/api/planets/' + randomNum


   axios.get(apiUrl2).then(function(response){
       updateInfo1(response.data)
   })
}

function updateInfo1(data) {
    planetNames.innerText = data.name

}


button1.addEventListener('click', getPlanet)

//StarShipNames


function getShip(){

    let randomNum = Math.floor((Math.random() * 30) + 1)
    let apiUrl3 = 'http://swapi.dev/api/starships/' + randomNum


   axios.get(apiUrl3).then(function(response){
       updateInfo2(response.data)
   })
}

function updateInfo2(data) {
    shipNames.innerText = data.name

}


button2.addEventListener('click', getShip)