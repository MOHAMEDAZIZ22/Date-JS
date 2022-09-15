
// const date = new Date();
// document.getElementById("da").innerHTML = date.toISOString();
// console.log(date);



// Date()
// document.getElementById('da').innerHTML = value1;
// document.getElementById('da2').innerHTML = value2;
// document.getElementById('da3').innerHTML = value2;


// value1.innerText = date.getDate()
// value2.innerText = now.getMonth()
// value3.innerText = now.getFullYear()
// const date = Date().toString();

// const now = new Date();

// console.log(now.getDate());
// console.log(now.getMonth());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());



//NEW Date//

var button1 = document.querySelector('#btn1');
var button2 = document.querySelector('#btn2');

button1.addEventListener('click', () => {
    var today = new Date();
    

    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = today.getDate();

    var current_date = `${month}/${date}/${year}`;

    button1.innerText = current_date;
});

button2.addEventListener('click', () => {
    var time = new Date();
      
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();

        var current_time = `${hours}:${minutes}:${seconds}`;
        button2.innerText = current_time;

});

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(toString(fruits));
// document.getElementById("demo").innerHTML = fruits.toString();


// console.log(a);
// var a = 10;




