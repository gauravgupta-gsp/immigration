						$(document).ready(function(){
		             	$('#btn_saveEnquiry').click(function(event){
		 				if(validate())
		 				{
		 					var form_data = new FormData();
		 					form_data.append("name",$('#name').val());
		 					form_data.append("phoneNo",$('#phoneNo').val());
		 					form_data.append("email",$('#email').val());
		 					if($('#radio_male').is(':checked')==true)
		 					{
		 						form_data.append("gender","Male");		
		 					}else
		 					{
		 						form_data.append("gender","Female");
		 					}
		 					form_data.append("address",$('#address').val());
		 					form_data.append("purposeOfVisit",$('#purposeOfVisit').text());
		 					form_data.append("referredBy",$('#referredBy').text());
		 					form_data.append("referDetails",$('#referDetails').val());
		 					form_data.append("extraMessage",$('#extraMessage').val());
		 					form_data.append("employeeId","101");
		 					alert(form_data);
		 					$.ajax({
		 					 url:"database_insertion.php",
		 					 method:"POST",
		 					 data: form_data,
		 					 contentType: false,
		 					 cache: false,
		 					 processData: false,
		 					 beforeSend:function(){
		 					  // $('#uploaded_image').html("<label class='text-success'>Image Uploading...</label>");
		 					 },   
		 					 success:function(data)
		 					 {
		 					  // $('#uploaded_image').html(data);
		 					   // alert($(this).attr('id'));
		 					  // document.getElementById(selectedId +"_status").innerHTML = data;
		 					  // $('#'+selectedId+'_status').val(data);
		 					  alert(data);
		 					 }
		 					});
		 					
		 				}
		              else
		              {
		              	alert('problem')
		              }
		             });
		            });

		 				      function validate()
		 				      {      	
		 				      
		 				         if($.trim($('#name').val())== "" )
		 				         {
		 				            alert( "Please provide your name!" );
		 				            $('#name').focus();
		 				            // document.enquiryForm.name.focus() ;
		 				            return false;
		 				         }
		 				         //if( ! document.enquiryForm.gender.checked || )
		 				     	/*if(!document.getElementById('gender').checked) 
		 				         {
		 				            alert( "Please provide your gendername!" );
		 				            //document.enquiryForm.name.focus() ;
		 				            return false;
		 				         }*/
		 				        else if($.trim($('#phoneNo').val())=="" )
		 				         {
		 				            alert( "Please provide your phone number!" );
		 				              $('#phoneNo').focus();
		 				            return false;
		 				         }
		 				         else if($.trim($('#email').val())=="" )
		 				         {
		 				            alert( "Please provide your email!" );
		 				              $('#email').focus();
		 				            return false;
		 				         } 
		 				         else if($('#radio_male').is(':checked')==false && $('#radio_female').is(':checked')==false)
		 				         {
		 				         	alert( "Please select the gender!" );
		 				         	return false;
		 				         }
		 				         else if($.trim($('#address').val())=="" )
		 				         {
		 				            alert( "Please provide your address!" );
		 				              $('#address').focus();
		 				            return false;
		 				         }
   	
		 				         return (true);
		 						}

		 						 	function showCountry() {

		 						 		var selectedValue = document.enquiryForm.purposeOfVisit.value;
		 						 		
		 						 		if(selectedValue == "workPermit"  || selectedValue == "studyVisa") { 			
		 						 			
		 						 			document.enquiryForm.country.style.display ="inline";
		 						 			document.getElementById("country_label").style.display ="inline";
		 						 			// document.enquiryForm.idcountry_label.style.display ="none"; 			
		 						 		}
		 						 		
		 						 	}
		 						 	function showMoreDetailsInput() {
		 						 		document.getElementById("details").style.display ="inline";
		 						 	}

		 						 	function fetchReferrals() {	
		 						     
		 						        if (window.XMLHttpRequest) {
		 						            // code for IE7+, Firefox, Chrome, Opera, Safari
		 						            xmlhttp = new XMLHttpRequest();
		 						        } else {
		 						            // code for IE6, IE5
		 						            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		 						        }
		 						        xmlhttp.onreadystatechange = function() {
		 						            if (this.readyState == 4 && this.status == 200) {
		 						            	// alert("called "+ this.responseText);
		 						                // var jsonarray = <?php echo json_encode(this.responseText); ?>;
		 						                var myObj = JSON.parse(this.responseText);
		 						                var selectList = document.getElementById("country");
		 						                for( i =0; i < myObj.length; i++) {                    
		 						                    var option = document.createElement("option");
		 						                    option.value = myObj[i];
		 						                    option.text = myObj[i];
		 						                    selectList.appendChild(option);
		 						                }

		 						                /*alert(myObj.length);
		 						                document.getElementById("passport").innerHTML = this.responseText;*/
		 						            }
		 						        };
		 						        xmlhttp.open("GET","referrals.php",true);
		 						        xmlhttp.send();
		 						    
		 							}
