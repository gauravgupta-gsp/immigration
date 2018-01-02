					/*$(document).ready(function(){
	             	$('#btn_login').click(function(event){
	             		window.location = "enquiry.html";
	 				// if(validate())
	 				// {

	 					var form_data = new FormData();
	 					form_data.append("userName",$('#txt_userName').val());
	 					form_data.append("password",$('#txt_password').val());	 					
	 					alert(form_data);
	 					$.ajax({
	 					 url:"login.php",
	 					 method:"POST",
	 					 data: form_data,
	 					 contentType: false,
	 					 cache: false,
	 					 processData: false,
	 					 beforeSend:function(){
	 					  
	 					 },   
	 					 success:function(data)
	 					 {	 					  
	 					  alert(data);	 	
	 					  if(data == "success") {
	 					  	window.location = "enquiry.html";
	 					  } else {
	 					  	alert('wrong user name or password');
	 					  }
	 					 }
	 					});
	 					
	 				// }
	     //          else
	     //          {
	     //          	alert('problem');

	     //          }
	             });
	            });*/

	/*				

	function AjaxCall() {
    $.ajax({
        type: "POST",
        url: "http://buoot.com/webservice/referers",
        alert($("txt_userName").val());
        data: "{email : $("txt_userName").val(), passCodeHash: $("txt_password").val()}",
        contentType: "application/json",
        dataType: "json",
        success: succeeded,
        error: queryError
    });
}*/

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
			       		window.location='enquiry.html';
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