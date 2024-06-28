function func_x() {
    var inp_x = document.getElementById("number_x").value; 
    var int_x = parseInt(inp_x); 
    var f;
try {
        if (isNaN(int_x)) {
            throw "Ошибка: введено не число";
        } else if (int_x <-6) {
            f = 3*Math.pow(int_x ,2)-int_x;
        } else if (int_x >= -6 && int_x <= 5) {
            f = Math.sqrt(7-int_x);
        } else {
            f = 7*int_x-3;
        }

        document.getElementById("result").textContent = "Результат: " + f;
    } 
    catch(err) 
    {
        alert(err);
    }
}