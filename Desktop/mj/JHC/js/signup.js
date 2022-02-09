$(document).ready(function(){
    $('#enter').on('click', function(e){
        var a = $("#enter").prop("checked");
        if (a == true){
            $('.bizWrap').css('display','block');
        }
    });
    
    $('#mtype').on('click',function(e){
       var b = $('#mtype').prop("checked");
        if(b == true){
            $('.bizWrap').css('display','none');
        }
    });
    
    $('.eInner select').on('change', function(){
    $('.eInner option:selected').each(function(){
       if($(this).val() == '직접입력'){
           $('.e2').val('');
           $('.e2').attr('disabled',false);
       } else {
           $('.e2').val($(this).text());
           $('.e2').attr('disabled',true);
       }
    });
});
});


