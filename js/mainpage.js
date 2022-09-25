const about=() =>{ 
    $.ajax({
        url:'page/about.html',
        method:'get',
        dataType:'text html',
        success:function(data){
            $('#content').html(data);
        }
    });
}