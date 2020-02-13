(()=>{
    'use strict';
    
    
    function list(names){
        return names.reduce(((string, {name}, i) => {
          if(i == 0){
            return name;
          }
          if(i == (names.length - 1)){
            string += ' & '+ name;
            return string;
          }
          string += ', ' + name;
          return string;
        }), "");
      }
})();