$( function() {
    $( ".content" )
      .draggable({ 
        scroll: false,
        iframeFix: true,
        opacity: 0.35,
        containment: "window",
        // scrollSensitivity: 50
      })
      
      // .accordion()
  } );