fetch('https://api.vschool.io/SeanLarsen/todo')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  appendData(data);
})
.catch(function (err) {
  console.log(err);
});

// var x = document.getElementById("button");
// x.addEventListener("click", appendData(data));

// function appendData(data) {
//   mainContainer = document.getElementById("myData");
//   for (var i = 0; i < data.length; i++) {
//     var p = document.createElement("p");  
//     p.innerHTML = 'Chore: ' + data[i].description
    
//     mainContainer.appendChild(p);
//   }
  
// }

document.getElementById("button").addEventListener("click", function appendData(data) {
    mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
      var p = document.createElement("p");  
      p.innerHTML = 'Chore: ' + data[i].description
      
      mainContainer.appendChild(p);
    }
    
  })



// const axios = require('axios');

// axios.get("https://api.vschool.io/SeanLarsen/todo")
//     .then(response => {
//         for(let i = 0; i < response.data.length; i++){
//             const p = document.createElement('p')
//             p.textContent = response.data[i].title
//             document.body.appendChild(p)
//         }
//     })
//     .catch(error => console.log(error))



// console.log(appendData)


