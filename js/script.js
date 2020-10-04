 $(function () {
    // Toggle On click  Funtion
    var design_paragraph = $('#design_paragraph');
    var development_paragraph = $('#development_paragraph');
    var product_paragraph = $('#product_paragraph');
    var design_text = $('#destxt');
    var development_text = $('#development_text');
    var product_text = $('#product_text');
    
    $(design_paragraph).hide();
    $(development_paragraph).hide();
    $(product_paragraph).hide();

    //Script to Show the paragraph Contents
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(design_paragraph).show(500);

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(development_paragraph).show(500);
        $(development_text).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(product_paragraph).show(500);
        $(product_text).animate({fontWeight:'bolder',fontSize:'30px'})
    });

    //Script to Hide paragraph content
    $(design_paragraph, design_text).on('click', function () {
        $('.des').slideDown();
        $(design_paragraph).hide(500);
        $(design_text).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(development_paragraph, development_text).on('click', function () {
        $('.dev').slideDown();
        $(development_paragraph).hide(500);
        $(development_text).animate({fontWeight:'normal',fontSize:'16px'})
    });
    $(product_paragraph, product_text).on('click', function () {
        $('.pro').slideDown();
        $(product_paragraph).hide(500);
        $(product_text).animate({fontWeight:'normal',fontSize:'16px'})
    })




});