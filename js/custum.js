$(document).ready(function(){  

//   var _fetchProjectType = function (callback) {
//     var req = $.ajax({
//         // url: "https://soundcheckrecords.herokuapp.com/activitytypeList",
//         url:"http://localhost:8080/activitytypeList",
//         type: "GET",
//         dataType: 'json'
//     });
//     req.done(function (data) {
//         callback(data);
//     }).fail(function (jqXHR, textStatus) {

//     });
// };

// _fetchProjectType(function (data) {
//     $.each(data, function (i, item) {
//         $('#project').append($('<option >', {
//             value: item.id,
//             text: item.activitytype
//         }));
//     });
// });
      
      $('#bookbtn').on("click", function(event){  
           event.preventDefault();  
                $.ajax({  
                     // url:"https://soundcheckrecords.herokuapp.com/booking", 
                     url:"http://localhost:8081/booking",
                     method:"POST",  
                     data:$('#booking-form').serialize(),                         
                     success:function(data){  
                     	console.log(data);
                          $('#booking-form')[0].reset();  
                          $('#bookingPopup').modal('hide');  
                          swal("Message Sent!",data.message, "success")  
                     },
                     error: function(data){

                     }
                });  
           }); 
      });  
 