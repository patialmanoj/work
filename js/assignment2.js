
$(function() {
            
    $("#tabs").tabs({
          //heightStyle:"fill",
          //collapsible:true,
          //hide:"slideUp",

          
     });
    $("#tabs-1").tabs();
	$("#tabsort").sortable();
	$("#error_name").hide(); 
    
    /*
    $('#contact_name').on('input', function() {
        var input=$(this);

        var is_name=input.val();
        if(is_name && parseInt(is_name)){
   	    	input.removeClass("valid").addClass("invalid");
	    	$("#error_name").text('Please Enter only String !!!');
            $("#error_name").show(); 

        }
        else{
            input.removeClass("invalid").addClass("valid");
            $("#error_name").hide(); 
        }   
        
    });
*/

 /*$('#contact_name').keyup(function() {

        var value = $(this).val();
        check = /[^-\.a-zA-Z\s\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02AE]/.test(value);
        if (check == true)
       		$('#error_name').show();
       else
       		$('#error_name').hide();
       

        debugger;
      });*/


	$('#contact_name').on('input', function() {
    	var input=$(this);
    	var is_name=input.val();
    	
    	if(is_name)
    		{
    			input.removeClass("invalid").addClass("valid");
    			error_element.removeClass("error").addClass("error_show");
    			error_free=false;
    		}
    	else
    		{
    			input.removeClass("valid").addClass("invalid");
    			error_element.removeClass("error_show").addClass("error");
    		}

    	//if (!is_name){error_element.removeClass("error").addClass("error_show"); error_free=false;}
      //  else{error_element.removeClass("error_show").addClass("error");}
	});

	$('#contact_email').on('input', function() {
    	var input=$(this);
    	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   		var is_email=re.test(input.val());
    	if(is_email){input.removeClass("invalid").addClass("valid");}
    	else{input.removeClass("valid").addClass("invalid");}
	});

	$('#contact_website').on('input', function() {
    	var input=$(this);
    	if (input.val().substring(0,4)=='www.'){input.val('http://www.'+input.val().substring(4));}
    	var re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/;
    	var is_url=re.test(input.val());
    	if(is_url){input.removeClass("invalid").addClass("valid");}
    	else{input.removeClass("valid").addClass("invalid");}
	});






});







