$(document).ready(function(){
    $('#formLista').submit(function(e){
        e.preventDefault();

        let novoItem = $('#novoItem').val();
        
        if(novoItem) {
            $('#listaItem').append('<li>' + novoItem + '</li>');

            $('#novoItem').val('');
        }

        $('#listaItem').on('click', 'li', function() { 
            $(this).toggleClass('line-through');
        });
    });
});