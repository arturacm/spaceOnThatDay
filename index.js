let url = "https://api.nasa.gov/planetary/apod?api_key=jXsOlWB7fEPgHYhuVbn6g7bIPXJQnaI5e2Jx1avI";
function start(){
    let date = $("#dateinput").val()
    console.log(date)
    $.ajax({url: url+"&date="+ date,
    success: (result)=>{
        mostrar(result)
    }})
}
function mostrar(obj){
    //console.log("cheguei aqui");
    //console.log(JSON.stringify(obj));
    //$("#image").attr("src", obj.url)
    $("#title").html(obj.title);
    $("#explanation").html(obj.explanation);
    if (obj.media_type == "image"){
        $(".container").css('background-image', 'url('+obj.url+')');
        $("iframe").attr("src", "")
    }
    else{
        console.log("video!",obj.url)
        $(".container").css('background-image', 'url("")');
        $("iframe").attr("src", obj.url)
    }

}