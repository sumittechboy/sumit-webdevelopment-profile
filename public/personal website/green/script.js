// (The file d:\my_profile\script.js exists, but is empty)
// $(document).ready(function(){
// 	$('#nav-icon2,').click(function(){
// 		$(this).toggleClass('open');
// 	});
// });

//  navIcon.addEventListener('click', function () {
//     navIcon.classList.toggle('open');
//  })


// document.addEventListener('DOMContentLoaded', function () {
//     const navIcon = document.getElementById('nav-icon2');
    
//     if (!navIcon) return;
//     navIcon.addEventListener('click', function () {
//         navIcon.classList.toggle('open');
//         alert('clicked')
        
//     });
//     const logo = document.getElementsByClassName('logo')
//     logo.style.display = 'none';


//     if(navIcon > 0) {
//         alert('clicked');
//          // Now this is only executed if the condition is met
//     }
    


// });


// Clean script: toggle nav icon open state and hide/show the logo element
document.addEventListener('DOMContentLoaded', function () {
  const navIcon = document.getElementById('nav-icon2');
  const logo = document.querySelector('.logo');
  const navBar = document.querySelector('.navBar'); // wrapper that contains the navigation

  if (!navIcon) return; // nothing to do

  navIcon.addEventListener('click', function () {
    const isOpen = navIcon.classList.toggle('open');
    // hide the logo when menu is open, restore when closed
    if (logo) logo.style.display = isOpen ? 'none' : '';
    // toggle the open class on the navBar so CSS handles the slide transition
    if (navBar) navBar.classList.toggle('open', isOpen);
    // update aria-expanded for accessibility
    navIcon.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});



