(function (){
    'use strict';


    function preloadImages(sources, callback) {
        let counter = 0;
        sources.forEach(url=>{
            let img = document.createElement('img');
            img.onload = img.onerror = onLoad;
            img.src = url;
        });

        function onLoad(){
            counter++;
            if(counter == sources.length) callback();
        }
    }

    // ---------- The test ----------

    let sources = [
    "https://en.js.cx/images-load/1.jpg",
    "https://en.js.cx/images-load/2.jpg",
    "https://en.js.cx/images-load/3.jpg"
    ];

    // add random characters to prevent browser caching
    for (let i = 0; i < sources.length; i++) {
    sources[i] += '?' + Math.random();
    }

    // for each image,
    // let's create another img with the same src and check that we have its width immediately
    function testLoaded() {
    let widthSum = 0;
    for (let i = 0; i < sources.length; i++) {
        let img = document.createElement('img');
        img.src = sources[i];
        widthSum += img.width;
    }
    alert(widthSum);
    }

    // every image is 100x100, the total width should be 300
    preloadImages(sources, testLoaded);


})();