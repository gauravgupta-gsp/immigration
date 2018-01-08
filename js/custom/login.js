						$(document).ready(function(){
		             	$('#btn_saveEmp').click(function(event){
		             		if(validateUserCreation())
		             		{
		             			console.log("Validation Done");
		             			// alert($("#txt_userName").val());
		             			  $.ajax({
		             			        type: "POST",
		             			        url: "http://buoot.com/webservice/createEmployee",
		             			        // data: "{username : $("#txt_userName").val(), password: $("#txt_password").val()}",
		             			        data: {"txt_emp_name": $("#txt_emp_name").val(), "txt_emp_pass":  $("#txt_emp_pass").val(),
		             			         "drp_emp_type":  $("#drp_emp_type").val()},
		             			        dataType: "json",
		             			        accepts: {
		             			        text: "text/plain",
		             			        html: "text/html",
		             			        xml: "application/xml, text/xml",
		             			        json: "application/json, text/javascript"
		             			        },
		             			        success: function (response)
		             			         {
		             			        console.log(response.message);
		             			        alert(response.message);
		             			    	 },
		             			    	 error: function(error){
		             			    	 alert(error.message);
		             			    	 }
		             		});
		             	}
		             	// else
		             	// 	{
		             	// 		console.log("Validation Fail");
		             	// 	}
		             		   });

		             	      });

	function succeeded(data, textStatus, request) {
	    var result = $.parseJSON(data.d);

	}

	function queryError(request, textStatus, errorThrown) {
	    alert(request.responseText, textStatus + " " + errorThrown);
	}

	$("#btn_login").on( "click", function( event ) {
			if(validate())
			{
				console.log("Validation Done");
				// alert($("#txt_userName").val());
				  $.ajax({
				        type: "POST",
				        url: "http://buoot.com/webservice/validateLogin",
				        // data: "{username : $("#txt_userName").val(), password: $("#txt_password").val()}",
				        data: {"emp_id": $("#txt_userName").val(), "pass":  $("#txt_password").val()},
				        dataType: "json",
				        accepts: {
				        text: "text/plain",
				        html: "text/html",
				        xml: "application/xml, text/xml",
				        json: "application/json, text/javascript"
				        },
				        success: function (response) {
				        console.log(response);
				       	if(response.message=='Success')
				       	{
				       		 window.sessionStorage.setItem('empId',$("#txt_userName").val());
				       		 window.sessionStorage.setItem('empType',response.emp_type);
				       		 window.sessionStorage.setItem('emp_name',response.emp_name);
				       		if(response.emp_type=='0')	
				       		{
				       			window.location='enquiry.html';
				       		}
				       		else
				       		{
				       			window.location='userCreation.html';	
				       		}	
				       	}
				       	else
				       	{
				       		 alert("Invalid User Name or Password");
				       	}
				        },
				        error: function(error){
				        alert("Something went wrong", error);
				        }
				    });
			}
	});

	function validate() {      	

		 if($.trim($('#txt_userName').val())== "" )
		 {
		    alert( "Please provide your user name!" );
		    $('#txt_userName').focus();	    
		    return false;
		 }	 
		else if($.trim($('#txt_password').val())=="" )
		 {
		    alert( "Please enter password!" );
		      $('#txt_password').focus();
		    return false;
		 }
		 return (true);
		}	


		function validateUserCreation() {      	

			 if($.trim($('#txt_emp_name').val())== "" )
			 {
			    alert( "Please provide Employee name!" );
			    $('#txt_emp_name').focus();	    
			    return false;
			 }	 
			else if($.trim($('#txt_emp_pass').val())=="" )
			 {
			    alert( "Please enter employee password!" );
			      $('#txt_emp_pass').focus();
			    return false;
			 }
			 else if($.trim($('#drp_emp_type').val())=="" )
			  {
			     alert( "Please select employee type!" );
			       $('#drp_emp_type').focus();
			     return false;
			  }
			 return (true);
			}	


	function succeeded(data, textStatus, request) {
	    var result = $.parseJSON(data.d);
	    alert(result);

	}

	function queryError(request, textStatus, errorThrown) {
	    alert(request.responseText, textStatus + " " + errorThrown);
	}

	function helloSay() {
		alert("clicked");
	}
	function resetCreateEmp()
	{
		$('#txt_emp_name').val('');
		$('#txt_emp_pass').val('');
		$('#drp_emp_type').val('-1');
	}