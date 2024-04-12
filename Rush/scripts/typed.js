$('.dropdown-menu a').on('click', function(e) {
    e.preventDefault();
    console.log('You clicked on ' + $(this).text());
});

var typed = new Typed('#animated-text', {
    strings: ["Them an you need"],
    typeSpeed: 65,
    backSpeed: 50,
    loop: true
});