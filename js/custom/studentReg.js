  $(document).ready(function (e) {

  getCountries();

  });

  // function getCountries(){
  //   alert("called on load");
  //     $.ajax(
  //     {
  //         post: "GET",
  //         url: "http://localhost/webservice/countries",
  //         // url: "http://buoot.com/webservice/countries",
          
  //         accept: "application/json",
  //         // contentType: "application/json",
  //         success: function(data) {
  //          alert(data +" is " );
  //          // $("#targetLayer").html(data);
  //         },
  //          //  error: function (req, status, err) {
  //          //   console.log('Something went wrong', status, err);
  //          // }

  //         error: function(data)
  //         {
  //          alert ('error'+JSON.stringify(data));
  //         }             
  //         });

  

  function getCountries()
  {
  	$.ajax({
  	url: 'http://buoot.com/webservice/countries',
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
  	},
  	error: function(error){
  	alert("Something went wrong", error);
  	}
  	});
  }

