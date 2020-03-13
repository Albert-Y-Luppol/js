(function (){
    'use strict';

    liveTimerElemFn();


    // functions


    function liveTimerElemFn(){

        document.body.innerHTML = `<time-formatted hour="numeric" minute="numeric" second="numeric"></time-formatted>`

        setInterval(()=>{
            document.querySelector('time-formatted').setAttribute('datetime', new Date());
        }, 1000);

        document.body.insertAdjacentHTML('beforeend', '<br><live-timer></live-timer>');

        document.querySelector('live-timer').addEventListener('tick', (e)=>{
            console.log(e.details);
        });

        setTimeout(()=>{document.querySelector('live-timer').remove()}, 5000);

        class TimeFormatted extends HTMLElement{
            render(){
                let date = new Date(this.getAttribute('datetime') || Date.now());

                this.innerHTML = new Intl.DateTimeFormat('default', {
                    year: this.getAttribute('year') || undefined,
                    month: this.getAttribute('month') || undefined,
                    day: this.getAttribute('day') || undefined,
                    hour: this.getAttribute('hour') || undefined,
                    minute: this.getAttribute('minute') || undefined,
                    second: this.getAttribute('second') || undefined,
                    timeZoneName: this.getAttribute('time-zone-name') || undefined
                }).format(date);
            }

            connectedCallback(){
                if(!this.rendered){
                    this.render();
                    this.rendered = true;
                }
            }

            static get observedAttributes(){
                return ['datetime' ,'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
            }

            attributeChangedCallback(name, oldValue, newValue){
                this.render();
            }
        }

        customElements.define('time-formatted', TimeFormatted);


        class LiveTimer extends TimeFormatted {
            connectedCallback(){
                this.setAttribute('hour', "numeric");
                this.setAttribute('minute', "numeric");
                this.setAttribute('second', "numeric");
                this.timer = setInterval(this.tick.bind(this), 1000);
            }

            disconnectedCallback(){
                clearInterval(this.timer);
            }

            tick(){
                this.setAttribute('datetime', new Date());

                let tick = new Event('tick', {bubbles: true, cancelable: true});
                tick.details = this.getAttribute('datetime');
                this.dispatchEvent(tick);
            }
        }

        customElements.define('live-timer', LiveTimer);
    }
})();