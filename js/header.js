
        var headerHeight = $('.header-wrap').innerHeight();
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            var x, y, i, arrNo = [];
            x = document.getElementsByClassName("select-items");
            y = document.getElementsByClassName("select-selected");
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove("select-arrow-active");
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add("select-hide");
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener("click", closeAllSelect);

        $(document).ready(function () {

            var headerHeight = $('.header').innerHeight();
            var fooHeight = $('.footer').innerHeight();

            $('.inner-pagewidth').css('padding-top', headerHeight);

            $('.inner-pagewidth').css('margin-bottom', '-' + fooHeight + 'px');
            $('.push-inner-footer').css('height', fooHeight);

            AOS.init();

            $("#weeklyCommuteCarousel").owlCarousel({
                items: 1,
                nav: true,
                dots: false
            });

            $("#charginStationCarousel").owlCarousel({
                margin: 30,
                center: false,
                items: 2,
                dots: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        center: true,
                        items: 1,
                        autoplay: true,
                        loop: true
                    },
                    // breakpoint from 768 up
                    767: {
                        center: false,
                        items: 2,
                        autoplay: false,
                        loop: false
                    }
                }
            });

            $("#subcidyCarousel").owlCarousel({
                margin: 30,
                items: 3,
                center: false,
                dots: false,
                autoplay: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 1,
                        dots: true,
                        loop: true
                    },
                    // breakpoint from 762 up
                    762: {
                        items: 2
                    },
                    // breakpoint from 1022 up
                    1022: {
                        items: 3,
                        loop: false
                    }
                }
            });

            /*$("#reviewsCarousel").owlCarousel({
                margin: 30,
                center: true,
                items: 6,
                dots: false
            });*/

            var rotation = 0;

            $.fn.rotate = function (degrees) {
                $(this).css({
                    '-webkit-transform': 'rotate(' + degrees + 'deg)',
                    '-moz-transform': 'rotate(' + degrees + 'deg)',
                    '-ms-transform': 'rotate(' + degrees + 'deg)',
                    'transform': 'rotate(' + degrees + 'deg)'
                });
            };

            //toggle for hamburger
            var status_0 = 0;
            function update_status_menu() {
                if (status_0 == 0) {
                    status_0 = 1;

                    $('#hamburger').attr('src', tweb + '/images/ico-hamburger-close.png');
                }
                else {
                    status_0 = 0;

                    $('#hamburger').attr('src', tweb + '/images/ico-hamburger.png');
                }
            }
            $('.dropdownMenu').click(function () {
                event.stopPropagation();
                $('.customDrowpdownMenu').slideToggle();

                update_status_menu();
            });

            //toggle for dropdown
            var status_1 = 0;
            function update_status() {
                if (status_1 == 0) {
                    status_1 = 1;

                    rotation = 180;
                    $('.arrBlack').rotate(rotation);
                }
                else {
                    status_1 = 0;

                    rotation = 0;
                    $('.arrBlack').rotate(rotation);
                }
            }

            $('.selectedMenu').click(function (event) {
                event.stopPropagation();
                $('.menuList').slideToggle();

                update_status();
            });

            //click any where to close dropdown or hamburger toggle
            $(document).on("click", function () {
                $('.menuList').slideUp();
                if (status_1 == 1) {
                    update_status();
                }

                $('.customDrowpdownMenu').slideUp();
                if (status_0 == 1) {
                    update_status_menu();
                }
            });

            //scroll down
            $('.scrollDown').click(function () {
                $('html, body').animate({
                    'scrollTop': $("#first").position().top
                });
            });

            //input has content
            $(".input-field input").focusout(function () {
                if ($(this).val() != "") {
                    $(this).addClass("has-content");
                } else {
                    $(this).removeClass("has-content");
                }
            });

            //fuel saving calculator 

            $("#fuelSavingCalculate").click(function () {
                //console.log("fkjlj");
                var val1 = $("#kms").val();
                var val2 = $("#fuel").val();
                console.log(val2);
                var total = (((val1 * 30 * 12 * 5) / 16) * val2) - (val1 * 30 * 12 * 5 * 0.9679487179487179);
                var total1 = ((val1 / 16) * 2351 * 360 * 5) / 1000000;
                var total2 = ((val1 / 16) * 2351 * 360) / 21600;
                console.log(total1 + " " + total2);
                $(".fuelSaved").html(Math.ceil(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
                $("#ocd1").html(total1.toFixed(2));
                $("#ocd2").html(parseInt(total2));
                $('html,body').animate({ scrollTop: $(".fuelSavingCalcSection").offset().top }, 'slow');
            });


        });

        $(window).on("load", function () {
            var val1 = $("#kms").val();
            var val2 = $("#fuel").val();

            var total = (((val1 * 30 * 12 * 5) / 16) * val2) - (val1 * 30 * 12 * 5 * 0.9679487179487179);
            var total1 = ((val1 / 16) * 2351 * 360 * 5) / 1000000;
            var total2 = ((val1 / 16) * 2351 * 360) / 21600;

            $(".fuelSaved").html(Math.ceil(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
            $("#ocd1").html(total1.toFixed(2));
            $("#ocd2").html(parseInt(total2));
            $(".siteLoaderWrap").fadeOut();


        });

        //menu active
        $(function () {
            var current = window.location.href;
            $('.menuList li a').each(function () {
                var $this = $(this);
                // if the current path is like this link, make it active
                if ($this.attr('href') === current) {
                    $this.addClass('active');
                    $(".selectedMenu p").html($this.html());
                }
            });

            $('.overview-menu-desktop li a').each(function () {
                var $this = $(this);
                // if the current path is like this link, make it active
                if ($this.attr('href') === current) {
                    $(".overview-menu-desktop li").removeClass("active");
                    $(".cta-rbb-desktop li").removeClass("active");
                    $this.parent().addClass('active');
                }
            });

            $('.cta-rbb-desktop li a').each(function () {
                var $this = $(this);
                // if the current path is like this link, make it active
                if ($this.attr('href') === current) {
                    $(".cta-rbb-desktop li").removeClass("active");
                    $(".overview-menu-desktop li").removeClass("active");
                    $this.parent().addClass('active');
                }
            });

        });
