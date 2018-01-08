var check_session;
	$(document).ready(function(){
		CheckForSession();
$('#hEmpName').text( window.sessionStorage.getItem('emp_name'));
$('#hEmpName1').text( window.sessionStorage.getItem('emp_name'));

		$('#anchorLogOut').click(function(event){
		
			// if(window.sessionStorage.getItem('empId')!=null && window.sessionStorage.getItem('empId')!='')
			// {
				// var empId=window.sessionStorage.getItem('empId');
			// window.sessionStorage.getItem('empType',response.emp_type);
			jQuery.ajax({
					type: "GET",
					url: "http://buoot.com/webservice/killSession",
					// url: "chk_session.php",
					data: "",
					cache: false,
					success: function(res){
						 window.sessionStorage.setItem('empId','');
						 window.sessionStorage.setItem('empType','');
						 window.sessionStorage.setItem('emp_name','');
					     window.location='index.html';
						}
					
				});
			// }
			// else
			// {
			// 	window.location='index.html';
			// }
		

		
		});
		});
function CheckForSession() {
		// var str="chksession=true";
		console.log('Checking')
		if(window.sessionStorage.getItem('empId')!=null && window.sessionStorage.getItem('empId')!='')
		{
			var empId=window.sessionStorage.getItem('empId');
		// window.sessionStorage.getItem('empType',response.emp_type);
		jQuery.ajax({
				type: "POST",
				url: "http://buoot.com/webservice/checkSession",
				// url: "chk_session.php",
				data: {"emp_id": empId},
				cache: false,
				success: function(res){
					console.log('Session value is '+res);
					if(res == "1") {
					console.log('Your session has been expired!');
						window.location='index.html';
					}
				}
			});
		}
		else
		{
			window.location='index.html';
		}		
		
}
check_session = setInterval(CheckForSession, 5000);