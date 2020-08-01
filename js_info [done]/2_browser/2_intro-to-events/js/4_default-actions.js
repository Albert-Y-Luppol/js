(()=>{
    'use strict';

    // returnFalseFn();

    // catchLinkFn();

    // galleryFn();


    // functions

    function galleryFn(){
        
        insertHtmlAndCss();

        setGalleryCSS();

        thumbEventHandler();


        // functions

        function thumbEventHandler(){
            let thumb = document.getElementById('thumbs');

            thumb.addEventListener('click', (e)=>{
                let target = e.target.closest('a');

                if(!target) return;

                e.preventDefault();

                let targetHref = target.getAttribute('href'),
                    lgImg = document.getElementById('largeImg'),
                    lgSrc = lgImg.getAttribute('src');
                    
                lgImg.setAttribute('src', targetHref);
                lgImg.setAttribute('alt', target.getAttribute('title'));

                //task done, next is mine improvement

                target.setAttribute('href', lgSrc);

                lgSrc = lgSrc.replace('-lg.jpg', '');

                let i = 1;

                while(Number(lgSrc.slice(-i)) || Number(lgSrc.slice(-i)) == 0){
                    i++;
                }

                i--;

                let imgNum = lgSrc.slice(-i);

                let img = target.querySelector('img');

                img.setAttribute('src', lgSrc + '-thumb.jpg');
                target.setAttribute('title', 'Image ' + imgNum);

            });
        }

        
        function setGalleryCSS(){
            
            let lgImg = document.getElementById('largeImg'),
                gallery = document.getElementById('gallery');

            lgImg.onload= ()=>{
                gallery.style.width = lgImg.offsetWidth + 'px';
            };
        }


        function insertHtmlAndCss(){
            document.body.insertAdjacentHTML('afterbegin', `
                <div class="container" id="gallery">
                    <p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large image"></p>

                    <ul id="thumbs">
                        <!-- the browser shows a small built-in tooltip on hover with the text from "title" attribute -->
                        <li>
                            <a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2">
                                <img src="https://en.js.cx/gallery/img2-thumb.jpg">
                            </a>
                        </li>
                        <li>
                            <a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3">
                                <img src="https://en.js.cx/gallery/img3-thumb.jpg">
                            </a>
                        </li>
                        <li>
                            <a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4">
                                <img src="https://en.js.cx/gallery/img4-thumb.jpg">
                            </a>
                        </li>
                        <li>
                            <a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5">
                                <img src="https://en.js.cx/gallery/img5-thumb.jpg">
                            </a>
                        </li>
                        <li>
                            <a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6">
                                <img src="https://en.js.cx/gallery/img6-thumb.jpg">
                            </a>
                        </li>
                    </ul>
                </div>

                <p style="text-align: center"> There is no thumb for initial large image, so it's OK.</p>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>

                    *{
                        margin: 0;
                        padding: 0;
                    }

                    #gallery {
                        margin: 25px auto;
                    }

                    #thumbs {
                        display: flex;
                        justify-content: space-evenly;

                    }

                    img {
                        padding: 5px;
                        border: 1px solid #ccc;
                    }

                    ul img {
                        padding: 3px;
                    }

                    li {
                        display: inline-block;
                    }
                </style>
            `);
        }
    }


    function catchLinkFn(){

        insertHtmlAndCss();

        catchLink();


        // functions

        
        function catchLink(){
            
            let container = document.getElementById('contents');

            container.addEventListener('click', (e)=>{
                let target = e.target.closest('a');

                if(!target) return;

                if(confirm(`Leave for: ${target.getAttribute('href')}?`)) return;

                e.preventDefault();
            });
        }


        function insertHtmlAndCss(){
            document.body.insertAdjacentHTML('afterbegin', `
                <fieldset id="contents">
                    <legend>#contents</legend>
                    <p>
                        How about to read <a href="https://wikipedia.org">Wikipedia</a> or visit <a href="https://w3.org"><i>W3.org</i></a> and learn about modern standards?
                    </p>
                </fieldset>
            `);

            document.head.insertAdjacentHTML('beforeend', `
                <style>
                    #contents {
                        padding: 5px;
                        border: 1px green solid;
                    }
                </style>
            `);
        }
    }


    function returnFalseFn(){
        insertHtmlAndCss();


        // functions


        function insertHtmlAndCss(){
            document.body.insertAdjacentHTML('afterbegin', `
                <a href="https://w3.org" onclick="return handler()">the browser will go to w3.org</a>
            `);
        }
    }
})();


function handler() {
    alert( "..." );
    return false;
}