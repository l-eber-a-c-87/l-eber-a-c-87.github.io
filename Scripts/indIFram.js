$(document).ready(
    function(){
        $('#cambPag').attr('src','/Pags/personal.html');
        
        $('#pers').click(
            function(){
                $('#cambPag').attr('src','/Pags/personal.html')
            }
        );
        $('#estud').click(
            function(){
                $('#cambPag').attr('src','/Pags/estudios.html')
            }
        );

        $('#expe').click(
            function(){
                $('#cambPag').attr('src','/Pags/experiencia.html')
            }
        );

        $('#hobbi').click(
            function(){
                $('#cambPag').attr('src','/Pags/hobbies.html')
            }
        );

    }
);
