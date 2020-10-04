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




   //Form Validation
        $("form.form").on('submit',function(event){
            event.preventDefault();
            var name = $("input.name").val();
            var email = $("input.name").val();
            var message = $("textarea.message").val();

            if ($("input.name").val() && $("input.email").val()){
                alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly...cheers");
                window.location.href = "index.html";
                
                (function($) {
                    window.fnames = new Array(); 
                    window.ftypes = new Array();fnames[0]='EMAIL';
                    ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';
                    fnames[2]='MMERGE2';ftypes[2]='text';}
                    (jQuery));
                var $mcj = jQuery.noConflict(true);

            }
            else {
                alert("Please provide your correct name and email!");
            }

        });
});