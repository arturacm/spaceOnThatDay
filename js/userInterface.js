
//Fazendo o texto principal da tela ficar arrastavel
$( function() {
    $( ".content" )
      .draggable({ 
        scroll: false,
        iframeFix: true,
        opacity: 0.35,
        containment: "window",
        // scrollSensitivity: 50
      })
      
  } );


  //tornado as informações extras da parte direita da tela, colapsaveis
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      active:false
    })
  } );
