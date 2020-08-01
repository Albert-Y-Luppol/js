(()=>{
    'use strict';

    let box = document.createElement('div');

    box.append(document.getElementById('shadowDOMAndTemplatesLight').content.cloneNode(true));

    document.body.append(box);

    box.addEventListener('click', attachShadowRoot, {once: true});
    

    function attachShadowRoot(){

        let theShadowRoot = box.attachShadow({mode: 'closed'});

        theShadowRoot.append(document.getElementById('shadowDOMAndTemplatesShadow').content.cloneNode(true));

        console.log(box.shadowRoot);
    }
    
})();