function calculate() {

    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;

    var checkboxAdd = document.getElementById('add').checked;
    var checkboxSubtract = document.getElementById('subtract').checked;
    var checkboxMultiply = document.getElementById('multiply').checked;
    var checkboxDivide = document.getElementById('divide').checked;


    if (checkboxAdd == true) {
        var res = +x + +y;
    } else if (checkboxSubtract == true) {
        var res = +x - +y;
    }
    else if (checkboxMultiply == true) {
        var res = +x * +y;
    }
    else if (checkboxDivide == true) {
        var res = +x / +y;

    }
    document.getElementById("result").innerHTML = res;
}

