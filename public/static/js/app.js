function toggleNav(){
  const nav = $('.nav-links');
  if (nav.attr('class') === 'nav-links'){
    nav.attr('class', 'nav-links responsive');
  } else {
    nav.attr('class', 'nav-links');
  }
}

function setMenu(type) {
  if(type === 'user') {
    $('.public-link').css('display', 'none');
    $('.splash').css('display', 'none');
    $('.user-link').css('display', 'block');
  } else {
    $('.user-link').css('display', 'none');
    $('.public-link').css('display', 'block');
  }
}

function setHeader(xhr) {
  xhr.setRequestHeader('Authorization', `Bearer ${Cookies.get('_dream-catcher-token')}`);
}

function setJournalDreams(data) {
  appState.journalDreams = data.dreams;
}

function getUserOnAppStartError() {
  $('.home-screen-message')
  .text('There was an error in retrieving your user information.')
  .css('display', 'block');  
}

function handleToggleNav() {
  $('.menu-link').click(() => {
    toggleNav();
  })
}

function startApp() {
  setMenu('public');
  handleToggleNav();
}

$(startApp);