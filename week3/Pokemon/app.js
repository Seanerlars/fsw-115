function getPoke(){

    let xhr = new XMLHttpRequest()
    console.log(xhr)

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
    console.log(xhr.response)
            let data = JSON.parse(xhr.response)
            console.log(data.results)
            displayPokeData(data.results)

        }
    }

    xhr.open('GET', 'https://api.vschool.io/pokemon' )
    xhr.send()
}


function displayPokeData(data){
    for(let i = 0; i < data.length; i++){
        console.log(data[i].name)
    }
}


      
       
      
  
  
 







// function getPoke(){

//     xhr.onreadystatechange = function() {

//         if (this.onreadyState === 4 && this.status ===200){
//             let data = JSON.parse(xhr.response)
//             console.log(data)
//             displayPokeData(data.results)
//         }
//     }

//     xhr.open('GET',  'https://api.vschool.io/pokemon')
//     xhr.send()
// }

// function displayPokeData(data){
//     console.log(data)
//     for(let i = 0; i < data.length; i++){
//         console.log(data[i].name)
//     }
// }