function setCookie( data) {
    localStorage.setItem('token', data);

}

function checkCookie( data ){
   return localStorage.getItem('token');
}

function checkCred() {
    console.log( checkCookie() )
    if( checkCookie() ){
        window.location = 'dashboard.html'
    }
}

$(window).bind('load', function (){
    checkCred()
})




var form = $('#login')
// form.validate({
//   rules: {
//     email: {
//       required: true,
//       email: true
//     },
//     password: {
//       required: true,
//       minlength: 5
//     }
//   }
// });

function verifyUser(email, password){
    console.log($('#email').val(), $('#password').val())
    var acccess = false

    if( $('#email').val() === 'bypass@bypass.co' && $('#password').val() === 'bypass') {
    //   accessConfirmed('tokenbypass')
    }

    // Place AJAX VERIFICATION HERE
    var payload = {
      email: $('#email').val(),
      password: $('#password').val()
    }
    $.post('https://api.corvenik.com/api/auth/login', payload, )
      .done(data => {
        // WHEN SUCCESS
        window.location = 'dashboard.html'
        setCookie( data )
      })
      .fail(() => {
        // WHEN FAILED DO SOMETHING
        alert('Login Error')
    })
    return false
  }



$("#login").submit(function (event) {
    verifyUser()
    event.preventDefault();
});

