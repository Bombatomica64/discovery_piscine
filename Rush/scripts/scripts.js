$('.dropdown-menu a').on('click', function(e) {
    e.preventDefault();
    console.log('You clicked on ' + $(this).text());
});