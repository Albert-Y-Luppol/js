(()=>{
    'use strict';

    setUpSocialsElement();

    document.body.append(document.getElementById('socialsLight').content.cloneNode(true));

    addLinkDynamicly();


    // functions


    function setUpSocialsElement(){
        customElements.define('social-links', class extends HTMLElement {

            constructor(){
                super();
                this.observer = new MutationObserver(this.buildSocials.bind(this));
            }

            connectedCallback(){
                this.buildSocials();
                this.observer.observe(this, {childList: true});
                this.attachShadow({mode: 'open'});
                this.shadowRoot.append(document.getElementById('socialsShadow').content.cloneNode(true));
            }

            buildSocials(){
                
                this.querySelectorAll('social-links>a').forEach(a=>{
                    let li = document.createElement('li');
                    li.setAttribute('slot', 'socials');
                    this.append(li);
                    li.append(a);
                });
                this.querySelectorAll('li[slot="socials"]').forEach(li=>{
                    if(!li.querySelector('a')){
                        li.remove();
                    }
                });
            }
            
        });
    }


    function addLinkDynamicly(){
        let a = document.createElement('a');
        a.setAttribute('href', 'https://github.com');
        a.setAttribute('target', '_blank');

        setTimeout(()=>{document.querySelector('social-links').append(a)}, 3000);
        

        setTimeout(()=>{a.innerHTML = "GitHub"}, 9000);
        
    }
})();