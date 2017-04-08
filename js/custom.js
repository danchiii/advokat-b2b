
// PRELOADER JS
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


// jQuery to collapse the navbar on scroll //
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/

$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
        effect: 'fadeScale',
    });


  // HOME BACKGROUND SLIDESHOW

  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       //"images/home-bg-slideshow1.jpg",
       "images/IMG_2520.jpg",
        ],  {duration: 2000, fade: 1000, alignY:top});
    });
  })

});


function clicked( stroka){
    swal.setDefaults({
        input: 'text',
        confirmButtonText: 'Далее',
        cancelButtonText:'Отмена',
        showCancelButton: true,
        animation: false,
        progressSteps: ['1', '2', '3'],


    })

    var steps = [
        {
            title:'Введите ваше имя'
        },
        {
            title:'Введите ваш email'
        },
        {
            title: 'Опишите проблему',
            input: 'textarea',
            confirmButtonText:stroka,
            showLoaderOnConfirm: true,
        }
    ]

    swal.queue(steps).then(function (result) {
        swal.resetDefaults();

        data={
            Name:result[0],
            email:result[1],
            Problem:result[2]
        }
/*
        $.post( "http://lending-advokat.azurewebsites.net/api/values", function( data ) {
        },'json').done(function() {
            alert( "second success" );
        }).fail(function(e) {
            alert( "error"+e );
        });
        *//*
        $.ajax({
            type        :   'POST'  ,
            url         :   "http://lending-advokat.azurewebsites.net/api/values",
            data        :   data,
            contentType :   'application/json'
        });*/



/*
        fetch('http://lending-advokat.azurewebsites.net/api/values', {mode: 'cors'})
            .then(function(response) {
                return response.text();
            })
            .then(function(text) {
                console.log('Request successful', text);
            })
            .catch(function(error) {
                log('Request failed', error)
            });*/

       fetch('https://lending-advokat.azurewebsites.net/api/values/'+JSON.stringify(data), {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/x-www-form-urlencoded, text/plain, */*',
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(data)
        })



/*
        $.ajax({
            type: "POST",
            url: "http://localhost:65473/api/values",
            headers: { 'Accept': 'application/x-www-form-urlencoded' },
            data:JSON.stringify(data)
        });*/






        swal(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    }, function () {
        swal.resetDefaults()
    })
}
