(async ()=>{
    'use strict';

    document.addEventListener('click', async ()=>{
        alert('Start');

        new Promise(resolve=>{
            resolve(
            document.dispatchEvent(new CustomEvent('hello', {
                bubbles: true, cancelable: true, detail:{
                    purpose: 'Just Checking:\nCan I make it asynchronious with promise?'
                }
            })));
        });

        await new Promise(resolve=>{
            resolve(
                document.dispatchEvent(new CustomEvent('hello', {
                    bubbles: true, cancelable: true, detail:{
                        purpose: 'Just Checking:\nCan I make it asynchronious with async/await?'
                    }
                }))
            );
        });

        setTimeout(
            ()=>{
                document.dispatchEvent(new CustomEvent('hello', {
                    bubbles: true, cancelable: true, detail:{
                        purpose: 'The only way is to use setTimeout!'
                    }
                }))
            },
        0);

        alert('End');
    });

    document.addEventListener('hello', (e)=>{
        alert('Custom:\n' + e.detail.purpose);
    })
})();