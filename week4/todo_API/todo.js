
 loadList();
function loadList(){
   document.querySelector('form').addEventListener('submit',submit);
 }

 function submit(a){
   a.preventDefault();
   let input = document.querySelector('input');
   if(input.value != '')
    addToDo(input.value);
  input.value = '';
 }


 function addToDo(task){
   let ul = document.querySelector('ul');
   let li = document.createElement('li');
   li.innerHTML = `<label>${task}</label>`;
   ul.appendChild(li);
   document.querySelector('.errandList').style.display = 'block';
 }



 loadList();
 function loadList(){
   document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
}

 function clearList(a){
   let ul = document.querySelector('ul').innerHTML = '';
 }


 loadList();
 function loadList(){
   document.querySelector('form').addEventListener('submit',submit);
   document.getElementById('clear').addEventListener('click',clearList);
}

// //  fetch("https://api.vschool.io/SeanLarsen/todo")
// //      .then(res => res.json())
// //     .then(res => {

// //          for(let i=0; i < res.results.length; i++){
// //              const h1 = document.createElement('h1')
// //              h1.textContent = res.results[i].description
// //              document.body.appendChild(h1)
// //          }
// //     })

    // axios.get("https://api.vschool.io/SeanLarsen/todo")
    // .then(response => {
    //     for(let i = 0; i < response.data.length; i++){
    //         const h2 = document.createElement('h2')
    //         h2.textContent = response.data[i].title
    //         document.body.appendChild(h1)
    //     }
    // })
    // .catch(error => console.log(error))

    fetch('todo.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log(err);
    });
  
    function appendData(data) {
      var mainContainer = document.getElementById("myData");
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");  
        li.innerHTML = 'Category: ' + data[i].description
        
        mainContainer.appendChild(li);
      }
      
    }
    
    console.log(appendData)





