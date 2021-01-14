const pause = {
    _status: false,
    down: new KeyboardEvent('keydown', {bubbles : true, cancelable : true, key : "ArrowDown", code: "ArrowDown",  shiftKey : false}),
    up: new KeyboardEvent('keyup', {bubbles : true, cancelable : true, key : "ArrowDown", code: "ArrowDown",  shiftKey : false}),
    set status(stat){
      if(stat){
          this._status = true;
          console.log('Pause ON!');
          this.runPause();
      } else {
          this._status = false;
          console.log('Pause OFF!');
      }
    },

    get status(){
        return this._status;
    },

    runPause(){
        if(!this.status) return;
        let c = document.body.querySelector('canvas');
        if(c){
            c.dispatchEvent(this.down);
            setTimeout(()=>{
                c.dispatchEvent(this.up);
            }, Math.floor(Math.random()*1000 + 100));
        }

        setTimeout(this.runPause.bind(this), Math.floor(Math.random()*45000 + 2000));
    },

    start(){
        this.status = true;
    },

    stop(){
        this.status = false;
    }
}

const clicker = {
    a(){
        console.log('Entering team Alpha!');
        let a = setInterval(()=>{
            let btn = document.body.querySelector('[data-style="JoinToBattleComponentStyle-buttonJoinBlue JoinToBattleComponentStyle-buttonJoin"]');
            if(btn) {
                btn.click();
                clearInterval(a);
                setTimeout(()=>{
                    pause.start();
                }, 53000);
            }
        }, 1);
    },
    b(){
        console.log('Entering team Betta!');
        let b = setInterval(()=>{
            let btn = document.body.querySelector('[data-style="JoinToBattleComponentStyle-buttonJoinRed JoinToBattleComponentStyle-buttonJoin"]');
            if(btn) {
                btn.click();
                clearInterval(b);
                setTimeout(()=>{
                    pause.start();
                }, 53000);
            };
        }, 1);
    }
}
