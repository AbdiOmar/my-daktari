$(".display-profiles").hide()
$(".book").hide();

$(document).ready(function(){
  $(".search-doctor").submit(function(event){    // submit search
    event.preventDefault();
    var selectedLocation = $(".select-location").val();
    var selectedSpecialty = $(".select-specialty").val();

    $(".doctor-profile").remove();
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
    $(".book-profile").click(function(){
      $(".doctor-profile").hide();
      $(this).closest(".doctor-profile").show();
      $(".book").show();
    })
    $(".book-form").submit(function(event){
      event.preventDefault();
      swal({
        title: "Booking Confirmed!",
        text: "Thanks for your booking! Your request is being processed!",
        icon: "success",
        confirmButtonText: "OK"
      }).then(function () {
        window.location.href = "index.html";
      });  //SweetAlert to confirm booking and redirected to HomePage

    }); //end submit book-form

  }); //end submit-search
}); //end ready




//script for hours and disable some of them
var selection = "";
var i = 0;
for(var i = 8; i < 19; i++)
{
    var j = zeroFill(i, 2);
        if (j%2 != 0) {
          selection += "<option disabled value='"+ j +"00'>"+ j + ":00" + "</option>";
              selection += "<option disabled value='"+ j +"30'>"+ j + ":30" + "</option>";
        } else {
          selection += "<option value='"+ j +"00'>"+ j + ":00" + "</option>";
              selection += "<option value='"+ j +"30'>"+ j + ":30" + "</option>";
        }
}
$(".book-hour").html(selection);
function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // always return a string
}
