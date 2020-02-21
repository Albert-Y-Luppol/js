(()=>{
    'use strict';

    // getAttributeFn();

    // getAllExternalLinks();


    // functions
    

    function getAllExternalLinks(){
        document.body.insertAdjacentHTML('afterbegin', `
            <a name="list">the list</a>
            <ul>
                <li><a href="http://google.com">http://google.com</a></li>
                <li><a href="/tutorial">/tutorial.html</a></li>
                <li><a href="local/path">local/path</a></li>
                <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
                <li><a href="http://nodejs.org">http://nodejs.org</a></li>
                <li><a href="http://internal.com/test">http://internal.com/test</a></li>
            </ul>
        `);

        let links = document.body.querySelectorAll('a');

        links.forEach(link=>{
            let attr = link.getAttribute('href');
            if(attr && attr.includes('://') && !attr.includes('http://internal.com')){
                link.style.color = 'orange';
            }
        });

        //same with CSS selector

        let selector = 'a[href*="://"]:not([href^="http://internal.com"])';

        document.body.querySelectorAll(selector).forEach(link=>link.style.color = 'green');
    }


    function getAttributeFn(){

        // Write the code to select the element with data-widget-name attribute from the document and to read its value.

        document.body.insertAdjacentHTML('afterbegin', `<div data-widget-name="menu">Choose the genre</div>`);

        let element = document.body.querySelector('[data-widget-name]');

        alert(element.getAttribute('data-widget-name') == element.dataset.widgetName);
    }
})();