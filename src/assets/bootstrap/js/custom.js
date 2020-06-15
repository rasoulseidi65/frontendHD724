$(window).scroll(function(){
  if($('.container-fluid').offset().top>900) {
    $('.row-link').addClass('container-fluid-techer')
  }
  else{
    $('.row-link').removeClass('container-fluid-techer')
  }
});
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});


