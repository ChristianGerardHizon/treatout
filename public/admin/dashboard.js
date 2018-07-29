
var isLoggedIn = false

function checkCookie( data ){
    return localStorage.getItem('token');
 }

 function checkCred() {
     console.log( checkCookie() )
     if( checkCookie() ){
         isLoggedIn = true
     }else {
        isLoggedIn = false
     }
 }

 $(window).bind('load', function (){
     checkCred()
 })

 window.onpopstate = function(e) { // executed when using the back button for example
    alert("Current location: " + location.href); // location.href is current location

    var data = e.state;
    if(data) {
        alert(JSON.stringify(e.state)); // additional data like your "object or string"
    }
};
