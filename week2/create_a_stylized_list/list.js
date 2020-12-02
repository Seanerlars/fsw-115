fetch('index.json')
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
      var div = document.createElement("div");  
      div.innerHTML = 'Category: ' + data[i].category + '     ' + 'Type: ' + data[i].type + '     ' + 'Difficulty:' + data[i].difficulty + '     ' + 'Question: ' + data[i].question +
      '   ' + 'Correct Answer: ' + data[i].correct_answer + '     ' + 'Incorrect Answer: ' + '     ' + data[i].incorrect_answers + '     '
      
      mainContainer.appendChild(div);
    }
    
  }
  
  console.log(appendData)