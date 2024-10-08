// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menuIcon.classList.remove ('bx-x')
    navbar.classList.remove ('active')
}

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Web developer', 'UI UX Designer', 'Also Exu Wife<3'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})


window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section'); // Ambil semua elemen dengan class .section
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      
      // Menambahkan class show ketika section berada di dalam viewport
      if (sectionTop < window.innerHeight && sectionBottom > 0) {
        section.classList.add('show');
      } 
      // Menghapus class show ketika section keluar dari viewport
      else {
        section.classList.remove('show');
      }
    });
  });