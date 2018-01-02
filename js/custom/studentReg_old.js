$(document).ready(function (e) {

  getUnattendedStudent();

    $("#uploadForm").on('submit',(function(e){
    e.preventDefault();
    $.ajax({
    url: "upload.php",
    type: "POST",
    data:  new FormData(this),
    contentType: false,
    cache: false,
    processData:false,
    success: function(data) {
     alert(data +" is " );
     // $("#targetLayer").html(data);
    },
    error: function(){
     alert ('error');
    }             
    });
    }));

 // $(document).on('change', '#browse_pass_front', function(){
 $(document).on('change', '.multiple_file_upload', function(){
   alert($(this).attr('id'));
   var selectedId=$(this).attr('id');
   var name = document.getElementById(selectedId).files[0].name;
    // var name = document.getElementById("browse_pass_front").files[0].name;
  var form_data = new FormData();
  alert( name );
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
   form_data.append("studentId", "101");
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
     $('#'+selectedId+'_status').val(data);
     alert(data);
    }
   });
  }
 });

  $('#btn_saveEnquiry').click(function(event  ) {
              var form_data = new FormData();
              form_data.append("type","getUnattendedStudent");             
              alert(form_data);
              $.ajax({
               url:"http://localhost/countries",
               method:"POST",
               data: form_data,
               contentType: "application/json",
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
                 });
 
});

  /*function fetchReferrals() { 
     
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {               
                var myObj = JSON.parse(this.responseText);
                var selectList = document.getElementById("country");
                for( i =0; i < myObj.length; i++) {                    
                    var option = document.createElement("option");
                    option.value = myObj[i];
                    option.text = myObj[i];
                    selectList.appendChild(option);
                }
            }
        };
        xmlhttp.open("GET","http://localhost/webservice/",true);
        xmlhttp.send();
    
  }*/

 /* function fetchReferrals() { 
     alert("fetchReferrals");
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
          alert("alert");
            if (this.readyState == 4 && this.status == 200) {               
              alert("ok");

                var myObj = JSON.parse(this.responseText);
                var selectList = document.getElementById("country");
                for( i =0; i < myObj.length; i++) {                    
                    var option = document.createElement("option");
                    option.value = myObj[i];
                    option.text = myObj[i];
                    selectList.appendChild(option);
                }
            }
        };
        xmlhttp.open("GET","http://localhost/webservice/countries",true);
        xmlhttp.send();
    
  }*/


  function uploadDocument() {
      var x = document.createElement("INPUT");
      x.setAttribute("type", "file");
      document.body.appendChild(x);
  }

  function showCountry() {

    var selectedValue = document.enquiryForm.purposeOfVisit.value;
    
    if(selectedValue == "workPermit"  || selectedValue == "studyVisa") {      
      
      document.enquiryForm.country.style.display ="inline";
      document.getElementById("country_label").style.display ="inline";
      // document.enquiryForm.idcountry_label.style.display ="none";      
    }
    
  }
   
      // Form validation code will come here.
      function validate()
      {       
      
         if( document.enquiryForm.name.value == "" )
         {
            alert( "Please provide your name!" );
            document.enquiryForm.name.focus() ;
            return false;
         }
         //if( ! document.enquiryForm.gender.checked || )
      /*if(!document.getElementById('gender').checked) 
         {
            alert( "Please provide your gendername!" );
            //document.enquiryForm.name.focus() ;
            return false;
         }*/
         if( document.enquiryForm.phoneNo.value=="" )
         {
            alert( "Please provide your phone number!" );
            document.enquiryForm.phoneNo.focus() ;
            return false;
         }
         if( document.enquiryForm.address.value=="" )
         {
            alert( "Please provide your address!" );
            document.enquiryForm.address.focus() ;
            return false;
         }
         if( document.enquiryForm.email.value=="" )
         {
            alert( "Please provide your email!" );
            document.enquiryForm.email.focus() ;
            return false;
         }                           
         return (true);
    }


    
         

    

 /*function fetchCountries()  {
  alert("focus");
  $.ajax({
        type: "GET",
        url: "http://localhost/webservice/countries",
        alert("1");        
        contentType: "application/json",
        dataType: "json",
        success: succeeded,
        error: queryError
    });
  }

function succeeded(data, textStatus, request) {
    var result = $.parseJSON(data.d);
    alert(result);

}

function queryError(request, textStatus, errorThrown) {
    alert(request.responseText, textStatus + " " + errorThrown);
}*/

$(document).ready(function() 
{
  alert("called on load");
    $.ajax(
    {
        post: "GET",
        url: "http://localhost/webservice/countries",
        Accept: "application/json",
        contentType: "application/json"
    }).done(function() 
    {
        alert(this.responseText);
    }).fail(function() 
    {
        alert(this.responseText);
    });

});