  var browse_pass_front="",
  browse_pass_back="",
  browse_ielts="",
  browse_tenth="",
  browse_twelth="",
  browse_graduation="",
  browse_post_graduation="",
  browse_phd="",
  browse_resume="",
  browse_work_experience="";

    $(document).ready(function (e) {
 // <?php $_SESSION['isloggedIn']=false;?>
  // var session1 = '<?php $_SESSION['isloggedIn'];?>'
  // console.log('ss '+session1);
    getUnattended();

    /* code to upload files */

     $(document).on('change', '.multiple_file_upload', function(){
       console.log($(this).attr('id'));
       var selectedId=$(this).attr('id');
       var name = document.getElementById(selectedId).files[0].name;
        // var name = document.getElementById("browse_pass_front").files[0].name;
      var form_data = new FormData();
      console.log( name );
      var ext = name.split('.').pop().toLowerCase();
      
      var oFReader = new FileReader();
      oFReader.readAsDataURL(document.getElementById(selectedId).files[0]);
      var f = document.getElementById(selectedId).files[0];
      var fsize = f.size||f.fileSize;
      if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) == -1) 
      {
       alert("Invalid Image File");
      }
      else if(fsize > 2000000)
      {
       alert("Image File Size is very big");
      }
      else
      {
       form_data.append("file", document.getElementById(selectedId).files[0]);
       form_data.append("selectedId", selectedId);
       form_data.append("studentId", $('#current_student_id').val());
       $.ajax({
        url:"upload-images.php",
        method:"POST",
        data: form_data,
        contentType: false,
        cache: false,
        processData: false,
        beforeSend:function(){
         $('#uploaded_image').html("<label class='text-success'>Image Uploading...</label>");
        },   
        success:function(data)
        {
         // $('#uploaded_image').html(data);
          // alert($(this).attr('id'));
         // document.getElementById(selectedId +"_status").innerHTML = data;
         $('#'+selectedId+'_status').text(data);
         updateDocsVar(selectedId,data);
         // selectedId =data;
         console.log(selectedId)
         // alert(data);
        }
       });
      }
     });


     $("#btn_saveEnquiry").on( "click", function( event ) {
        if(validate())
        {
          console.log("Validation Done");
          // alert($("#txt_userName").val());
            $.ajax({
                  type: "POST",
                  url: "http://buoot.com/webservice/studentDocs",
                  // data: "{username : $("#txt_userName").val(), password: $("#txt_password").val()}",
                  data: {
                  "student_id": $("#current_student_id").val(), 
                  "name": $("#name").val(),
                  "phoneNo":  $("#phoneNo").val(),
                  "bday":  $("#bday").val(),
                  "email":  $("#email").val(),
                  "passportNo":  $("#passportNo").val(),
                  "visaType":  $("#visaType").val(),
                  "country":  $("#country").val(),
                  "browse_pass_front_value": browse_pass_front,
                  "browse_pass_back_value": browse_pass_back,
                  "browse_ielts_value": browse_ielts ,
                  "browse_tenth_value": browse_tenth  ,
                  "browse_twelth_value": browse_twelth ,
                  "browse_graduation_value": browse_graduation ,
                  "browse_post_graduation_value": browse_post_graduation,
                  "browse_phd_value": browse_phd ,
                  "browse_resume_value": browse_resume ,
                  "browse_work_experience_value": browse_work_experience
                },
                  dataType: "json",
                  accepts: {
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript"
                  },
                  success: function (response) {
                  console.log(response.message);
                  if($.trim(response.message)=='New record created successfully')
                  {
                    // window.location='enquiry.html';
                    resetStudentReg();
                    alert(response.message);
                  }
                  // else
                  // {
                  //    alert("Invalid User Name or Password");
                  // }
                  },
                  error: function(error){
                    console.log('Something went wrong '+error.message);
                  // alert("Something went wrong", error);
                  }
              });
        }
     });
    });

    function updateDocsVar(selectedId,data)
    {
      switch(selectedId)
       {
        case "browse_pass_front":
            browse_pass_front=data;
            break;
        case "browse_pass_back":
           browse_pass_back=data;
            break;

        case "browse_ielts":
             browse_ielts=data;
            break;
        case "browse_tenth":
           browse_tenth=data;
            break;
         
         case "browse_twelth":
             browse_twelth=data;
            break;
        case "browse_graduation":
           browse_graduation=data;
            break;

         case "browse_post_graduation":
             browse_post_graduation=data;
            break;
        case "browse_phd":
           browse_phd=data;
            break;
         
          case "browse_resume":
              browse_resume=data;
             break;
         case "browse_work_experience":
            browse_work_experience=data;
             break;
        // default:
        //     code block
    } 
    }
    function validate() {       

   if($.trim($('#name').val())== "" )
   {
      alert( "Please provide your student name!" );
      $('#name').focus();     
      return false;
   }   
  else if($.trim($('#phoneNo').val())=="" )
   {
      alert( "Please enter phone number!" );
        $('#phoneNo').focus();
      return false;
   }
   else if($.trim($('#bday').val())=="" )
    {
       alert( "Please enter Date of Birth!" );
         $('#bday').focus();
       return false;
    }
    else if($.trim($('#email').val())=="" )
     {
        alert( "Please enter email!" );
          $('#email').focus();
        return false;
     }
     else if($.trim($('#passportNo').val())=="" )
      {
         alert( "Please enter Passport Number!" );
           $('#passportNo').focus();
         return false;
      }
      else if($.trim($('#visaType').val())=="" )
       {
          alert( "Please select Visa Type!" );
            $('#visaType').focus();
          return false;
       }
       else if($.trim($('#country').val())=="" )
        {
           alert( "Please select Country!" );
             $('#country').focus();
           return false;
        }
   return (true);
  }


    function getUnattended()
    {
    	$.ajax({
    	url: 'http://buoot.com/webservice/getUnattended',
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
    	console.log(response);
      $('#current_student_id').val(response.student_id);
      $('#name').val(response.student_name);
      $('#phoneNo').val(response.phone_no);
      $('#bday').val(response.bday);
      $('#email').val(response.email);
      $('#passportNo').val('');
      console.log('Updated is '+response.updateResult);
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


function resetStudentReg()
{

$('#current_student_id').val('');
$('#name').val('');
$('#phoneNo').val('');
$('#bday').val('');
$('#email').val('');
$('#passportNo').val('');
$('#visaType').val('');
$('#country').val('');
$('#browse_pass_front').val('');
$('#browse_pass_back').val('');
$('#browse_ielts').val('');
$('#browse_tenth').val('');
$('#browse_twelth').val('');
$('#browse_graduation').val('');
$('#browse_post_graduation').val('');
$('#browse_phd').val('');
$('#browse_resume').val('');
$('#browse_work_experience').val('');
}