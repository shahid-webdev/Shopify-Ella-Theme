
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
        html = html.replace('{{link_'+(i+1)+'}}', $(this).find('#input_url'+(i+1)).val());
        html = html.replace('{{image_'+(i+1)+'}}', $(this).find('#input_image'+(i+1)).val());
        html = html.replace('{{label_'+(i+1)+'}}', $(this).find('#input_label'+(i+1)).val());
        html = html.replace('{{title_'+(i+1)+'}}', $(this).find('#input_title'+(i+1)).val());

        html = html.replace('{{descrition_top_'+(i+1)+'}}', $(this).find('#input_descrition_top'+(i+1)).val())
        html = html.replace('{{sub_heading_banner_'+(i+1)+'}}', $(this).find('#input_sub_heading_banner'+(i+1)).val());
        html = html.replace('{{heading_banner_'+(i+1)+'}}', $(this).find('#input_heading_banner'+(i+1)).val());
        html = html.replace('{{des_banner_'+(i+1)+'}}', $(this).find('#input_des_banner'+(i+1)).val());

        html = html.replace('{{title1_mid_'+(i+1)+'}}', $(this).find('#input_title1_mid'+(i+1)).val());
        html = html.replace('{{title2_mid_'+(i+1)+'}}', $(this).find('#input_title2_mid'+(i+1)).val());
        html = html.replace('{{text1_mid_'+(i+1)+'}}', $(this).find('#input_text1_mid'+(i+1)).val());
        html = html.replace('{{text2_mid_'+(i+1)+'}}', $(this).find('#input_text2_mid'+(i+1)).val());
        html = html.replace('{{text3_mid_'+(i+1)+'}}', $(this).find('#input_text3_mid'+(i+1)).val());
        html = html.replace('{{text4_mid_'+(i+1)+'}}', $(this).find('#input_text4_mid'+(i+1)).val());
        html = html.replace('{{text5_mid_'+(i+1)+'}}', $(this).find('#input_text5_mid'+(i+1)).val());
        html = html.replace('{{text6_mid_'+(i+1)+'}}', $(this).find('#input_text6_mid'+(i+1)).val());

        html = html.replace('{{title_sample_'+(i+1)+'}}', $(this).find('#input_title_sample'+(i+1)).val());
        html = html.replace('{{des_sample_'+(i+1)+'}}', $(this).find('#input_des_sample'+(i+1)).val());

        html = html.replace('{{image1_bottom_'+(i+1)+'}}', $(this).find('#input_image1_bottom'+(i+1)).val());
        html = html.replace('{{image2_bottom_'+(i+1)+'}}', $(this).find('#input_image2_bottom'+(i+1)).val());
        html = html.replace('{{image3_bottom_'+(i+1)+'}}', $(this).find('#input_image3_bottom'+(i+1)).val());
        html = html.replace('{{image4_bottom_'+(i+1)+'}}', $(this).find('#input_image4_bottom'+(i+1)).val());
        
    });
    $('#code_genderator_start code.html').html(html);
};


$(document).ready(function() {
    // genderator_code();
    genderator_click();
    
});
