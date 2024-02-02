$(document).ready(function(){
    document.querySelector('header button')


    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#enderecoImagemNova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlayImagemLink">
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#enderecoImagemNova').val('');
    })
})