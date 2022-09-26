const about=() =>{ 
    $.ajax({
        url:'pages/about.html',
        method:'get',
        dataType:'text html',
        success:function(data){
            $('#content').html(data);
        }
    });
}