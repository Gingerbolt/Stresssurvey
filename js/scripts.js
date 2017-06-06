$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();

    var userResponses1 = [];

     $("input:checkbox[name=fun-symptoms]:checked").each(function(){
     var funsymptoms = $(this).val();
     userResponses1.push(funsymptoms);
    });
    var userResponses2 = [];
    $("input:checkbox[name=fun-signs]:checked").each(function(){
    var funsigns = $(this).val();
    userResponses2.push(funsigns);


    });
    var userResponses3 = [];
    $("input:checkbox[name=fun-coping]:checked").each(function(){
    var funcoping = $(this).val();
    userResponses3.push(funcoping);
    });
    stresstotal = userResponses1.length * 2 + userResponses2.length
    antistresstotal = userResponses3.length * 1.5
    if (stresstotal > antistresstotal) {
      $("#stressed").show()
      $("#even").hide()
      $("#unstressed").hide()
    } else if (stresstotal === antistresstotal) {
      $("#even").show()
      $("#stressed").hide()
      $("#unstressed").hide()
    } else {
      $("#unstressed").show()
      $("#stressed").hide()
      $("#even").hide()
    }


  });
});
