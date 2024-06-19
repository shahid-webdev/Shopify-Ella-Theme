
var html_code = "";
function read_file() {
    var file = $('#code_genderator_start .highlight-code').attr('include');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", file, true);
    xmlhttp.onreadystatechange = function ()
    {
        if(xmlhttp.readyState === 4)
        {
            if(xmlhttp.status === 200 || xmlhttp.status == 0)
            {
                html_code = xmlhttp.responseText;
                $('#code_genderator_start code.html').html(html_code);
            }
        }
    }
    xmlhttp.send(null);
}

function genderator_click() {
    $('.btn-generator').on('click', function() {
        $(this).next().find('.code_genderator').attr('id', 'code_genderator_start');
        read_file();
    });

    $('.modal .close').on('click', function() {
        $('.code_genderator').removeAttr( "id" );
    });

    $('.modal').on('hidden.bs.modal', function (e) {
        $('.code_genderator').removeAttr( "id" );
    });

    var clipboard = new ClipboardJS('.btn-clone-html');
}
function genderator_code(value, position) {
    var html = html_code;
    $('#code_genderator_start .card').each(function(i){
        html = html.replace('{{input_question_'+(i+1)+'}}', $(this).find('#input_question'+(i+1)).val());
        html = html.replace('{{input_answer_'+(i+1)+'}}', $(this).find('#input_answer'+(i+1)).val());
    });
    $('#code_genderator_start code.html').html(html);
};


$(document).ready(function() {
    genderator_code();
    genderator_click();
    
});
