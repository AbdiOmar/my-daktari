$(".display-profiles").hide()
$(".book").hide();

$(document).ready(function(){
  $(".search-doctor").submit(function(event){    // submit search
    event.preventDefault();
    var selectedLocation = $(".select-location").val();
    var selectedSpecialty = $(".select-specialty").val();

    $(".display-profiles").show();

    if (selectedSpecialty == null && selectedLocation == null) {
      doctors.forEach(function(doctor){
        $(".display-profiles").append('<div class="doctor-profile col-md-3">' +
                                        '<div>' +
                                          '<img src="'+doctor.photo+'" alt="Profile Photo">' +
                                          '<p>'+doctor.title + ' ' + doctor.firstName + ' ' + doctor.lastName+'</p>' +
                                        '</div>' +
                                        '<div>' +
                                          '<p>'+doctor.specialty+'</p>' +
                                          '<p>'+doctor.location+'</p>' +
                                          '<p>'+doctor.gender+'</p>' +
                                          '<p> <img src="images/'+doctor.ratings+'stars.png" alt="'+doctor.ratings+' stars"> </p>' +
                                        '</div>' +
                                        '<div>' +
                                          '<p>'+doctor.biography+'</p>' +
                                        '</div>' +
                                        '<button class="book-profile" type="button" name="button"> BOOK </button>' +
                                      '</div>')
      }); //end loop arrayDoctors
    } else if (selectedLocation == null) {
      doctors.forEach(function(doctor){
        if (doctor.specialty == selectedSpecialty) {
          $(".display-profiles").append('<div class="doctor-profile col-md-3">' +
                                          '<div>' +
                                            '<img src="'+doctor.photo+'" alt="Profile Photo">' +
                                            '<p>'+doctor.title + ' ' + doctor.firstName + ' ' + doctor.lastName+'</p>' +
                                          '</div>' +
                                          '<div>' +
                                            '<p>'+doctor.specialty+'</p>' +
                                            '<p>'+doctor.location+'</p>' +
                                            '<p>'+doctor.gender+'</p>' +
                                            '<p> <img src="images/'+doctor.ratings+'stars.png" alt="'+doctor.ratings+' stars"> </p>' +
                                          '</div>' +
                                          '<div>' +
                                            '<p>'+doctor.biography+'</p>' +
                                          '</div>' +
                                          '<button class="book-profile" type="button" name="button"> BOOK </button>' +
                                        '</div>')
        }
      }); //end loop arrayDoctors
    } else if (selectedSpecialty == null) {
      doctors.forEach(function(doctor){
        if (doctor.location == selectedLocation) {
          $(".display-profiles").append('<div class="doctor-profile col-md-3">' +
                                          '<div>' +
                                            '<img src="'+doctor.photo+'" alt="Profile Photo">' +
                                            '<p>'+doctor.title + ' ' + doctor.firstName + ' ' + doctor.lastName+'</p>' +
                                          '</div>' +
                                          '<div>' +
                                            '<p>'+doctor.specialty+'</p>' +
                                            '<p>'+doctor.location+'</p>' +
                                            '<p>'+doctor.gender+'</p>' +
                                            '<p> <img src="images/'+doctor.ratings+'stars.png" alt="'+doctor.ratings+' stars"> </p>' +
                                          '</div>' +
                                          '<div>' +
                                            '<p>'+doctor.biography+'</p>' +
                                          '</div>' +
                                          '<button class="book-profile" type="button" name="button"> BOOK </button>' +
                                        '</div>')
        }
      }); //end loop arrayDoctors
    } else if (selectedSpecialty != null && selectedLocation != null) {
      doctors.forEach(function(doctor){
        if (doctor.specialty == selectedSpecialty && doctor.location == selectedLocation) {
          $(".display-profiles").append('<div class="doctor-profile col-md-3">' +
                                          '<div>' +
                                            '<img src="'+doctor.photo+'" alt="Profile Photo">' +
                                            '<p>'+doctor.title + ' ' + doctor.firstName + ' ' + doctor.lastName+'</p>' +
                                          '</div>' +
                                          '<div>' +
                                            '<p>'+doctor.specialty+'</p>' +
                                            '<p>'+doctor.location+'</p>' +
                                            '<p>'+doctor.gender+'</p>' +
                                            '<p> <img src="images/'+doctor.ratings+'stars.png" alt="'+doctor.ratings+' stars"> </p>' +
                                          '</div>' +
                                          '<div>' +
                                            '<p>'+doctor.biography+'</p>' +
                                          '</div>' +
                                          '<button class="book-profile" type="button" name="button"> BOOK </button>' +
                                        '</div>')
        }
      }); //end loop arrayDoctors
    }; //end of the control flow to display doctors profiles
    

  }); //end submit-search
}); //end ready
