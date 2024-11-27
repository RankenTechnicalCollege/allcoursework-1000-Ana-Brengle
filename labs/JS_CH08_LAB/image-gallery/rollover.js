"use strict";



$(document).ready(function()  {

    $('#image_list a').each(function() {
        const image = new Image();
        image.src = $(this).attr('href');
    });

    $('#image_list a').first().focus();


    $('#image_list a').click(function(event) {
        event.preventDefault();

        let imageSrc = $(this).attr('href');
        let caption = $(this).attr('title');

        $('#image').attr('src', imageSrc);
        $('#caption').text(caption);

        $('#image_list a').removeClass('active');
        $(this).addClass('active');
    });

    $(document).keydown(function(event) {
        let activeLink = $('#image_list a.active');
        let links = $('#image_list a');
        let currentIndex = links.index(activeLink);


        if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'Tab') {
            let nextIndex = (currentIndex + 1) % links.length;
            links.eq(nextIndex).focus();
            links.eq(nextIndex).trigger('click'); 
        }

        else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || (event.key === 'Tab' && event.shiftKey)) {
            let prevIndex = (currentIndex - 1 + links.length) % links.length;
            links.eq(prevIndex).focus();
            links.eq(prevIndex).trigger('click');
        }
    });


});