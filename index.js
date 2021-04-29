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
    console.log("cheguei aqui")
    console.log(JSON.stringify(obj))
    $("#image").attr("src", obj.url)
    $("h1").html(obj.title)
}