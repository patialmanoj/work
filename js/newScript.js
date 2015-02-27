$(function(){

 	$("#tabs").tabs();
 	$("#tabsort").sortable();
 //for effect on key tabs
    $("#one").click(function() {
	    $('#three, #two, #four').removeClass('makeBold');
 	    $('#one').addClass('makeBold');
     });
    $("#two").click(function() {
	    $('#three, #one, #four').removeClass('makeBold');
	    $('#two').addClass('makeBold');
     });
    $("#three").click(function() {
	    $('#two, #one, #four').removeClass('makeBold');
	    $('#three').addClass('makeBold');
     });
    $("#four").click(function() {
	    $('#three, #two, #one').removeClass('makeBold');
	    $('#four').addClass('makeBold');
     });

// hiding error divisions
	$('#error_name, #error_number, #error_website, #error_email').hide();     

//validation

	function validateEmail(input) {
    
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=re.test(input.val());

		if(is_email){input.removeClass("invalid").addClass("valid");
				$('#error_email').hide();
			}
		else{
			  input.removeClass("valid").addClass("invalid");
			  $('#error_email').show();
			  $('#error_email').addClass('error_show')
	        }
		
	}
	function validateWebsite(input)
	{

		if (input.val().substring(0,4)=='www.')
			{input.val('http://www.'+input.val().substring(4));}
		var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var is_url=re.test(input.val());
		if(is_url)
			{
				input.removeClass("invalid").addClass("valid");
				$('#error_website').hide();

			}
		else
			{
				input.removeClass("valid").addClass("invalid");
				$('#error_website').show();
				$('#error_website').addClass('error_show');
			}
	}

	function validateName(name)
	{ 
		var stringReg = /[^-\.a-zA-Z\s\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02AE]/
		if(stringReg.test(name))
			{
				$('#error_name').show();
				$('#error_name').addClass('error_show')
				$('#contact_name').removeClass("valid").addClass("invalid");		
			} 
		else
			{
			    $('#contact_name').removeClass("invalid").addClass("valid")
				$('#error_name').hide();		
			}

	}

	function validatePhone(number)
	{

		
	}

	$('#phone_number').keypress(function(event){

     		   var $number = this.value; 
        	   $('#error_number').hide();

        	if($number.length >10)
        	{
          
          		$('#error_number').html(" Cannot have more than 10 digits");
         		 event.preventDefault();
       		 }
       		if(  event.which != 8 && isNaN(String.fromCharCode(event.which))  ){
          		$('#error_number').show();
          		 event.preventDefault(); //stop character from entering input
       	}

  	 });


	$('#contact_website').keyup(function() {
			var input=$(this);
		 	validateWebsite(input);
	});
	
	$('#contact_name').keyup(function() {
	    var name = $(this).val();
        validateName(name);
    });

	$('#contact_email').on('input', function() {
		var input=$(this);
		validateEmail(input);
	});

	//********** For button click code 
	$("#bt").click(function() {
 			 var recRow = $("<tr>  <td> "+ $("#contact_name").val() +"</td> <td>"+ $("#contact_email").val() +"</td> <td>"+ $("#contact_website").val() +"</td> "+ $("#phone_number").val() +"<td></td> </tr>" );
			 $('#someTable').append(recRow);
	});

	


});
