						$(document).ready(function(){

		             	$('#btn_saveEmp').click(function(event){
		             		if(validateUserCreation())
		             		{
		             			console.log("Validation Done");
		             			// alert($("#txt_userName").val());
		             			  $.ajax({
		             			        type: "POST",
		             			        url: "http://buoot.com/immigration/webservice/createEmployee",
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
		             			        // console.log(response.message);
                              getEmployees();
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
				        url: "http://buoot.com/immigration/webservice/validateLogin",
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
                   console.log("Session Data "+$("#txt_userName").val()+" "+response.emp_type+" "+response.emp_name);
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

	 function getEmployees()
    {
    	$.ajax({
    	url: 'http://buoot.com/immigration/webservice/getEmployees',
    	type: "GET",
    	//accepts: "application/json; charset=utf-8",
    	//data: {"event":{"title": title, "description": desc, "start": start}},
    	dataType:'json',
    	accepts: {
    	text: "text/plain",
    	html: "text/html",
    	xml: "application/xml, text/xml",
    	json: "application/json, text/javascript"
    	},
    	success: function (response) {
    	console.log(response.data[0]);

    	var tableData = response.data;
    	var i =1;

    	$(response.data).each(function(index, element){  
    		if(i % 2 == 0) {
    	     $('#employeeTable').append('<tr class="odd pointer"><td> '+element.emp_id+' </td> <td> '+element.emp_name+'  </td> </td> <td> '+element.password+'  </td> </td> <td> '+element.user_type+'  </td></tr>');       
    	 	}
    	 	else {
    	 		$('#employeeTable').append('<tr class="even pointer"><td> '+element.emp_id+' </td> <td> '+element.emp_name+'  </td> </td> <td> '+element.password+'  </td> </td> <td> '+element.user_type+'  </td></tr>');
    	 	}
    	});
    	// var tableData = response.data;
    	// console.log('Data ' +  tableData[0]);

    	/*var data = { "scores" : [ ["3/1/2011", 610],["4/1/2011", 610],["5/1/2011", 610],["6/1/2011", 610], ["7/1/2011", 720], ["8/1/2011", 500], ["9/1/2011", 500] ] }
    	$(data.scores).each(function(index, element){  
    	     $('#scores').append('<tr><td> '+element[0]+' </td> <td> '+element[1]+' </td></tr>');       
    	})*/
      // $('#current_student_id').val(response.student_id);
      // $('#name').val(response.student_name);
      // $('#phoneNo').val(response.phone_no);
      // $('#bday').val(response.bday);
      // $('#email').val(response.email);
      // $('#passportNo').val('');
      // console.log('Updated is '+response.updateResult);
      // $('#').val(response.);
      // $('#').val(response.);
      // $('#').val(response.);
      // $('#').val(response.);
      // $('#').val(response.);
    	},
    	error: function(error){
    	alert("Something went wrong", error);
    	}
    	});
    }

   