// $(document).ready(function(){
//   $("#form1").submit(function(event){
//     // event.preventDefault();
//     console.log("wassup")
//
//   });
// });

$(document).ready(function(){
  $("#form1").submit(function(event){
      event.preventDefault();

      $("#bad").hide();
      $("#good").hide();
      $("#almost").hide();

      var stressCounter = 0;
      var chillCounter = 0;

      $("input:checkbox[name=warning]:checked").each(function(){
        stressCounter+=1
      });

      $("input:checkbox[name=coping]:checked").each(function(){
        chillCounter+=1
    });

    if(stressCounter>chillCounter){
      $("#bad").show();
    }else if(chillCounter>stressCounter){
      $("#good").show();
    }else{
      $("#almost").show();
    }
  });
});
