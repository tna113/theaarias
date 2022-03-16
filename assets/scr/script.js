const proj_title = ['partytime app', 'cebu at a glace', 'bon appetit'];
const proj_description = ["[Currently under development] An application dedicated to organizing, viewing and tracking party events.", "Cebu At A Glance is a website curated for people who are interested in visiting, travelling to and/or learning about my hometown, Cebu, Philippines.", "Bon Appetit is a website focused on pastries and baking, originally designed and created for a client's upcoming small bakery business."];
const proj_link = ['https://www.figma.com/file/uq7fnYiSZ7s6qOYPZ36HSz/partytime?node-id=2%3A4', '/projects/cebu_travel/index.php', './projects/bon_appetit/index.html'];
// const proj_img = ['./assets/img/cebu', './assets/img/bon_appetit'];
// const proj_img_alt = ['cebu at a glance website screenshot', 'bon appetit website screenshot'];


$(document).ready(function() {
    var menuVal = 0;
    // console.log("menuVal start:"+menuVal);
    var menuButton = $("#menuButton");
    var front = $("#front");
    var menu = $("#menu");


    menuButton.click(function(e) {
        e.preventDefault();

        if (menuVal == 0) {
            // console.log("menuVal:"+menuVal);
            //hide front, change bg, show menu, change button
            front.hide();
            menu.show();
            menu.css({
                "display": "flex"
            })
            $(".container").css({
                "background-color": "var(--darkgrey)",
                "opacity": "0.9"
            })
            $(this).css({
                "color": "white"
            })
            document.getElementById('menuButton').innerHTML = 'x';
            menuVal = 1;
        } else {
            // console.log("menuVal:"+menuVal);
            //hide menu, change bg, show front
            $(".container").css({
                "background-color": "#00000000",
            })
            $(this).css({
                "color": "var(--grey)"
            })
            menu.hide();
            front.show();
            document.getElementById('menuButton').innerHTML = '=';
            menuVal = 0;
        }
    })

    //page stuff
    //projects page
    var page = document.body.getElementsByTagName('h2')[0].innerHTML;
    if (page == 'projects') {
        //desktop media query
        if ($(window).width() > 820) {
            $('#front').css({
                'display': 'flex',
                'flex-direction': 'row',
                'justify-content': 'center',
                'padding': '0',
                'position': 'sticky',
                'width': '55%'
            })

            let holder = document.getElementById('holder');

            //build links
            for (let i = 0, len = proj_title.length; i < len; i++) {

                //create button n p element
                var btn = document.createElement('button');
                var txt = document.createElement('div');
                btn.innerHTML = '✧ ' + proj_title[i];
                txt.innerHTML = '↳ ' + proj_description[i];
                txt.className = 'description';

                var link = document.createElement('a');
                link.href = proj_link[i];
                link.innerHTML = 'visit ' + proj_title[i];
                link.className = 'link';
                link.target = '_blank';
                txt.append(document.createElement('br'));
                txt.append(document.createTextNode('↳ '));
                txt.append(link);

                //append to holder
                holder.append(btn);
                holder.append(txt);
                holder.append(document.createElement('br'));
            }

            //link styling
            $('button').css({
                'border': '0',
                'background-color': '#A6C5CC',
                'color': '#3C3C3C',
                'padding': '2px 5px',
                'font-size': '1.2em',
                'font-family': "'DM Mono', monospace"
            })

            $('.description').css({
                'display': 'none',
                'padding': '5px 10px 5px 15px',
                'font-size': '.9em',
                'font-family': "'Inria Sans', sans-serif",
                'line-height': '16px',
                'text-align': 'justify',
                'background-color': '#A6C5CC'
            })

            $('.link').css({
                'text-transform': 'uppercase',
                'font-family': "'DM Mono', monospace"
            })

            //button click events
            var clicked = 0;
            $('button').click(function() {
                //alert($(this).prop('nodeName'));
                //alert($(this).parent().prop('nodeName')); //parent div
                var child = $(this).parent().find('div');

                if (clicked == 0) {
                    child.slideDown();
                    clicked = 1;
                } else {
                    child.slideUp();
                    clicked = 0;
                }

            })
        }
        // ipads and mobile devices media query
        else {
            $('h2').css('color', 'red')
        }
    }

    if (page == 'about') {
        $('#front').css({
            // 'border': '1px solid green',
            'width': '800px',
            'margin-top': '100px',
            'display': 'flex',
            'flex-direction': 'row',
            'justify-content': 'center',
            'color': '#687A7D'
        })

        $('.left').css({
            // 'border': '1px solid red',
            'width': '40%',
            'display': 'flex',
            'flex-direction': 'column',
            'justify-content': 'flex-end',
            'text-align': 'left'
        })

        $('h2').css({
            'color': '#EDF3F3',
            'text-align': 'center',
            'border-radius': '10px 0 0 0'
        })

        $('.marquee').css({
            'margin': '0',
            'text-align': 'center',
            'padding-bottom': '32px'
        })

        $('.left>*').css('background-color', '#A6C5CC')

        $('.marquee').css({
            'font-family': "'DM Mono', monospace"
        })

        $('.description').css({
            'width': '310px',
            'font-size': '.95em',
            'font-family': "'Inria Sans', sans-serif",
            'line-height': '16px',
            'padding': '8px',
            'text-align': 'justify'
        })

        $('img').css({
            'opacity': '0.9',
            'max-width': '60%',
            'height': 'auto',
            'border-radius': '0 10px 10px 0px',
            'border-left': '15px solid #A6C5CC'
        })
    }

    if (page == 'contact') {
        $('h2').css('padding', '16px');
    }
})

function showform() {
    document.getElementById('list').slideUp();
}