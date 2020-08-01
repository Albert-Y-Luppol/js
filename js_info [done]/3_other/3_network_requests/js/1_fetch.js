(async function (){
    'use strict';

    console.log(getUsers(['iliakan', 'remy', 'no.such.users', 'albert-y-luppol']));

    // console.log(getUsersMore(['iliakan', 'remy', 'no.such.users', 'albert-y-luppol']));


    async function getUsersMore(names){

        let users = [];

        names.forEach(name=>{
            
            let user = fetch(`https://api.github.com/users/${name}`).then(resolvedUser=>{
                if(resolvedUser.ok) return resolvedUser.json();
                return null;
            }, rejectedUser=>{
                return null;
            });

            users.push(user);
        });

        let result = await Promise.all(users);

        return result;
    }
    

    async function getUsers(userNames){
        let users = [];

        userNames.forEach(async (name)=>{
            let response = await fetch(`https://api.github.com/users/${name}`);

            if(response.ok){
                
                users.push(await response.json());
                return;
            }

            users.push(null);

        });

        return users;
    }

})();