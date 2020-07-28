$(document).ready (function() { 
    // let desp = $('#desp');
    // let devp = $('#devp');
    // let prop = $('#prop');
    // let destext = $('#destxt');
    // let devtext = $('#devtext');
    // let protext = $('#protext');

    // $(desp).hide();
    // $(devp).hide();
    // $(prop).hide();

    $(".design").click(function(){
        $("#design-p").toggle();
        $("#design").toggle();
    });
    $(".development").click(function(){
        $("#development-p").toggle();
        $("#development").toggle();
    });
    $(".product").click(function(){
        $("#product-p").toggle();
        $("#product").toggle();
     });

    //Show paragraph content
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $(desp).show(1000);
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})

    });
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $(devp).show(1000);
        $(devtext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $(prop).show(1000);
        $(protext).animate({fontWeight:'bolder',fontSize:'30px'})
    });

    //Hide paragraph content
    // $(desp, destext).on('click', function () {
    //     $('.des').slideDown();
    //     $(desp).hide(500);
    //     $(destext).animate({fontWeight:'normal',fontSize:'16px'})
    // });
    // $(devp, devtext).on('click', function () {
    //     $('.dev').slideDown();
    //     $(devp).hide(500);
    //     $(devtext).animate({fontWeight:'normal',fontSize:'16px'})
    // });
    // $(prop, protext).on('click', function () {
    //     $('.pro').slideDown();
    //     $(prop).hide(500);
    //     $(protext).animate({fontWeight:'normal',fontSize:'16px'})
    // })

    $('.des').on('click', function () {
        $('.des').toggle('slow');
        $(desp).hide(500);
        $(destext).animate({fontWeight:'bolder',fontSize:'16px'})

    });
    $('.dev').on('click', function () {
        $('.dev').toggle('slow');
        $(devp).hide(500);
        $(devtext).animate({fontWeight:'bolder',fontSize:'16px'})
    });
    $('.pro').on('click', function () {
        $('.pro').toggle('slow');
        $(prop).hide(500);
        $(protext).animate({fontWeight:'bolder',fontSize:'16px'})
    });

    //Overlay images

    $('.portimg').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });


    //Form Validation
        $("form#form").on('submit',function(event){
            event.preventDefault();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();

            if ($("input#name").val() && $("input#email").val()){
                alert ("Hello " + name + ", Thanks for reaching out, we'll contact you shortly...have a great time.");
            }
            else {
                alert("Please provide your correct name and email!");
            }

        });



});