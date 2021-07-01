var elHeaderSection = document.querySelector('.header-section')
var elHeaderButton = document.querySelector('.js-header-button');


if(elHeaderButton){
  elHeaderButton.addEventListener('click', function() {
    elHeaderSection.classList.toggle('header-section--open');
  });
}