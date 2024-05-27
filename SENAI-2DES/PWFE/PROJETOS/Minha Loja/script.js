 $(document).ready(function() {

    $('.btn-details').click(function() {

        $(this).next('.custom-modal').toggle();

    });

    $('.btn-close').click(function() {

        $(this).closest('.custom-modal').hide();

    });

});


