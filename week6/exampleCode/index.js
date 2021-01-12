let useableData;

const getData = (loopUrl) => {
    return new Promise( (resolve, reject) => {
        axios.get(loopUrl)
        .then(res => {
            resolve(res.data.results)
        })
        .catch(err => {
            reject(err)
        })
    })

}


const initGetData = () => {

    let characterUrl = 'https://rickandmortyapi.com/api/character?page='
    let characterEnpdointsPromises = []
    for (let i = 1 ; i < 35; i++){
        let loopUrl = characterUrl + i
        let pendingPromise = getData(loopUrl) 
        characterEnpdointsPromises.push(pendingPromise)
    }

    Promise.all(characterEnpdointsPromises).then((allRickData) => {
        let allData = allRickData.flat()
        // console.log(allData)
        useableData = allData
        buildPage(useableData)
    })
}

initGetData()







const buildPage = (data) => {
    let container = document.getElementById('character-container')
    container.innerHTML = ''

    data.forEach(character => {
        console.log(character)

        let characterFlipCardContainer = document.createElement('div')
        characterFlipCardContainer.classList.add('flip-card')

        let characterFlipCardInner = document.createElement('div')
        characterFlipCardInner.classList.add('flip-card-inner')

        let characterCardFront = document.createElement('div')
        characterCardFront.classList.add('flip-card-front')
        let characterImage = document.createElement('img')
        characterImage.src = character.image
        characterCardFront.appendChild(characterImage)
        characterFlipCardInner.appendChild(characterCardFront)

        let characterCardBack = document.createElement('div')
        characterCardBack.classList.add('flip-card-back')

        // Builds Card Name
        let characterName = document.createElement('h1')
        characterName.textContent = character.name
        characterCardBack.appendChild(characterName)

        // Builds Card Location
        let characterLocation = document.createElement('h3')
        characterLocation.textContent = `Current Location: ${character.location.name}`
        characterCardBack.appendChild(characterLocation)

        // Builds Card Origin
        let characterOrigin = document.createElement('h3')
        characterOrigin.textContent = `Origin: ${character.origin.name}`
        characterCardBack.appendChild(characterOrigin)

        // Builds Card Status
        let characterSpecies = document.createElement('h4')
        characterSpecies.textContent = `Species: ${character.species}`
        characterCardBack.appendChild(characterSpecies)

        // Builds Card Status
        let characterStatus = document.createElement('h4')
        characterStatus.textContent = `Status: ${character.status}`
        characterCardBack.appendChild(characterStatus)
        

        // location origin species status
        characterFlipCardInner.appendChild(characterCardBack)

        characterFlipCardContainer.appendChild(characterFlipCardInner)

        container.appendChild(characterFlipCardContainer)
    });
}


const searchCharacters = (e) => {
    e.preventDefault()
    let searchinput = document.getElementById('searchInput').value
    let filteredCharacters = useableData.filter( character => character.staus.includes(searchinput) )
    buildPage(filteredCharacters)
}

const searchForm = document.getElementById('searchForm')
searchForm.addEventListener('submit', searchCharacters)

