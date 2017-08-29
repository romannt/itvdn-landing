(function () {
  
  var me = {};
  
  me.toggleToActiveLink = function (target) {
    var links = document.querySelectorAll('.nav__link');
    var showedSection = target.dataset.link;
    for(var i = 0; i < links.length; i++) {
      if (links[i].classList.contains('nav__link--active'))
        links[i].classList.remove('nav__link--active');
    }
    target.classList.add('nav__link--active');
    scrollToActiveSection(showedSection);
  };

  function scrollToActiveSection(showedSection) {
    var section = document.querySelector('.' + showedSection);
    var animateTime = 0.3;
    if (section) {
      var coords = section.getBoundingClientRect();
      var timerID = setInterval(function () {
        if (document.body.scrollTop < coords.top) {
          window.scrollBy(0, 10);
        } else {
          clearInterval(timerID);
        }
      }, animateTime || 0.3); // Задаем время по умолчанию
    }
  }

  ITVDN.navigation = me;
}());