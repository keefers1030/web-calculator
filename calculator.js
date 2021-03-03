console.log('Welcome to My Calculator');


function add() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    let res = +x + +y; //the + in front of the x and y mean they are numbers and allowed them to be added
    alert(res);
}


