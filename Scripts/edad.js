$(document).ready(
    function actAge() {
        var hoy = new Date();
        var actYear = hoy.getFullYear();
        var actMes = hoy.getMonth();
        var actDia = hoy.getDate();
        var age = actYear - 1987;
        if(actMes < 11){
            age--;
        } else if((actMes == 11) && (actDia < 16)){
            age--;
        }

        $('#edad').html(age);
    }
);
