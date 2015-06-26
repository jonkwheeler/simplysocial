//HEADER DROPDOWN
var dropdown = $('.avatar .dropdown');
var backdrop = $('.avatar .backdrop');

$('.avatar').click(function() {
  if(dropdown.hasClass('js--hide')) {
    dropdown.removeClass('js--hide').addClass('js--show').addClass('fadeIn');
    backdrop.removeClass('js--hide').addClass('js--show');
  }
  else if(dropdown.hasClass('js--show')) {
    dropdown.removeClass('js--show').removeClass('fadeIn').addClass('js--hide');
    backdrop.removeClass('js--show').addClass('js--hide');
  }
});

$(backdrop).click(function() {
    console.log('backdrop');
    backdrop.removeClass('js--show').addClass('js--hide');
});

//HEADER NEW MESSAGE MODAL
var messageModal = $('.new-message .message-modal');
var messageBox = $('.new-message .message-modal .messagebox');
var lights = $('.new-message .dimthelights');

$('.new-message span').click(function() {
    messageModal.removeClass('js--hide').addClass('js--show');
    messageBox.addClass('fadeIn');
    lights.removeClass('js--hide').removeClass('js--hide').addClass('js--show');
});

$('.new-message .modal-close').click(function() {
    messageModal.removeClass('js--show').removeClass('fadeIn').addClass('js--hide');
    messageBox.removeClass('fadeIn');
    lights.removeClass('js--show').addClass('js--hide');
  }
);

$(lights).click(function() {
    messageModal.removeClass('js--show').removeClass('fadeIn').addClass('js--hide');
    messageBox.removeClass('fadeIn');
    lights.removeClass('js--show').addClass('js--hide');
  }
);


//PAGES
var home = $('.newsfeed');
var profile = $('.profile');

$('.home').click(function() {
  if(home.hasClass('js--hide')) {
    home.removeClass('js--hide').addClass('js--show').addClass('fadeIn');
    profile.removeClass('js--hide').addClass('js--show');
  }
  if(profile.hasClass('js--show')) {
    profile.removeClass('js--show').removeClass('fadeIn').addClass('js--hide');
  }
});

$('.profile-link').click(function() {
  if(profile.hasClass('js--hide')) {
    if(home.hasClass('js--show')) {
      home.removeClass('js--show').removeClass('fadeIn').addClass('js--hide');
    }
    profile.removeClass('js--hide').addClass('js--show').addClass('fadeIn');
  }
});
