(()=>{
    'use srict';

    // Turn the user into JSON and then read it back into another variable.

    // swipToJSON();


    // In simple cases of circular references, we can exclude an offending property from serialization by its name. But sometimes we can’t just use the name, as it may be used both in circular references and normal properties. So we can check the property by its value. Write replacer function to stringify everything, but remove properties that reference meetup:

    excludeBackreferences();


    // functions

    function excludeBackreferences(){
        let room = {
            number: 23
        };
          
        let meetup = {
            title: "Conference",
            occupiedBy: [{name: "John"}, {name: "Alice"}],
            place: room
        };
          
        // circular references
        room.occupiedBy = meetup;
        meetup.self = meetup;
          
        alert( JSON.stringify(meetup, function replacer(key, value) {
        /* your code */
        return (value == meetup && key != "") ? undefined : value;        
        }));
          
        /* result should be:
        {
            "title":"Conference",
            "occupiedBy":[{"name":"John"},{"name":"Alice"}],
            "place":{"number":23}
        }
        */
    }



    function swipToJSON(){
        let user = {
            name: "John Smith",
            age: 35
        };

        let jsonString = JSON.stringify(user);

        alert(jsonString);

        let userObj = JSON.parse(jsonString);
        console.log(userObj);
        console.log(user);

        alert(user == userObj);
    }
})();