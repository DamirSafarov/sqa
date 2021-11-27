
      $('.tabs-inner').each(function() {
        let ths = $(this);
        ths.find('.tab-content').not(':first').hide();
        ths.find('.tab-button').click(function() {
          ths.find('.tab-button').removeClass('active').eq($(this).index()).addClass('active');
          ths.find('.tab-content').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active');

        new WOW().init();

        $(document).ready(function(){
            $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
                $(this).toggleClass('open');
            });
        });

        $('.burger-mobile').on('click',function(){
            $('.header-list').toggleClass('header-list__open')
        })
   
      });
