export function chat(){
    class User{
        constructor({username, rate, job, city, photo}){
            this.username = username;
            this.rate = rate;
            this.job = job;
            this.city = city;
            this.photo = photo;
        }
    }

    class Client{
        constructor({username, photo}){
            this.username = username;
            this.photo = photo;
        }
    }
         

    let user = new User({username: 'Наталья Полянская',
                        rate: '8',  //from 10
                        job: 'фотограф',
                        city: 'Баварии',
                        photo: 'Oval2.png'
                        });
           
    let client = new Client({username: 'Ghost',
                        photo: 'Oval21.png'
                        });

    
    
    let chatBox = document.getElementById('chatUser');
    
    chatBox.querySelectorAll('.chat__star').forEach((star, index)=>{
        if(index + 1 <= user.rate / 2){
            star.classList.add('chat__star--gold');
        }
    });
    
    let imageUser = chatBox.querySelector('.chat__header .chat__photo img');

    imageUser.src = `../img/${user.photo}`;
    imageUser.alt = user.username;


    let imageClient = chatBox.querySelector('.chat__footer .chat__photo img');

    imageClient.src = `../img/${client.photo}`;
    imageClient.alt = client.username;
    
};

