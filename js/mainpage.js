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

const rpg=()=>{
    $.ajax({
        url:'pages/rpg.html',
        method:'get',
        dataType:'text html',
        success:function(data){
            $('#aside').html(data);
        }
    });
}
