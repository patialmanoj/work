$(function() {
            


  $("#tabs").tabs();
  $("#tabs-1").tabs();
	$("#tabsort").sortable();
	$("#error_name").hide(); 
 
$('#contact_name').keyup(function() {

        var value = $(this).val();
        check = /[^-\.a-zA-Z\s\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02AE]/.test(value);

        if (check == true || value=="")
          $('#error_name').show();
       else
          $('#error_name').hide();
       

      debugger;
  });


$('#contact_email').first().keyup(function () {
    var $email = this.value;
    validateEmail($email);
});

function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    if (emailReg.test(email)) {
        $('#error_email').show();
    } else {
        $('#error_email').hide();
    }
}

$('#phone_number').keypress(function(event){

          //
        var $number = this.value; 
        $('#error_number').hide();

        if($number.length >10)
        {
          //$('#error_number').show();
          $('#error_number').html(" Cannot have more than 10 digits");
          event.preventDefault();
        }
       if(  event.which != 8 && isNaN(String.fromCharCode(event.which))  ){
          $('#error_number').show();
          //$('#error_number').html( $number.length);
          //$('#error_number').html(" Must have 10 digits");
           event.preventDefault(); //stop character from entering input
       }

   });

  $("#tabs-4").tabs();
  


});




