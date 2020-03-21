(()=>{
    'use strict';

    // findProgLangs();

    // findbbTags();

    // findQuotedString();

    findFullTag();

    // functions


    function findFullTag(){
        let myRegExp = /<style(\s+\w+="[^"]*")*\s*>/g;

        let regexp = /<style(>|\s.*?>)/g;

        alert('Mine:' +  '<style <styler> <style test="...">'.match(myRegExp) ); // <style>, <style test="...">

        alert('Not Mine:' + '<style <styler> <style test="...">'.match(regexp) ); 
    }


    function findQuotedString(){
        let str = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';

        let regex = /"(\\.|[^"\\])*"/g;

        let s = str.match(regex);
        // the in-memory string
        alert(s); //  .. "test me" .. "Say \"Hello\"! \ " .. "\\ \"" ..
    }


    function findbbTags(){
        let regexp = /\[(\w+).*?\[\/\1\]/sg;

        let str = `
            [b]hello![/b]
            [quote]
            [url]http://google.com[/url]
            [/quote]
        `;
        alert( str.match(regexp) );
    }


    function findProgLangs(){
        let regexp = /java(?:script)?|php|c(?:\+\+)?/gi;

        alert("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C
    }
})();