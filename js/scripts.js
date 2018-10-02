$(document).ready(function(){
  $(".display-profiles").hide()
  $(".book").hide();

  $(".search-doctor").submit(function(event){    // submit search
    event.preventDefault();
    var selectedLocation = $(".select-location").val();
    var selectedSpecialty = $(".select-specialty").val();
    


  }) //end submit-search
}); //end ready
