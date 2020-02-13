(()=>{
    'use strict';

    // Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
    
    // createDate();


    // Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
    
    // showWeekDay();


    // European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.
    
    // getLocalDayFn();


    // Create a function getDateAgo(date, days) to return the day of month days ago from the date.
    // For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
    // Should work reliably for days=365 or more:

    // dateAgoFn();


    // lastDayOfMonthFn();


    // Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

    // secondsTodayFn();


    // Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

    // secondsToTomorrowFn();


    // Write a function formatDate(date) that should format date as follows:
    // If since date passed less than 1 second, then "right now".
    // Otherwise, if since date passed less than 1 minute, then "n sec. ago".
    // Otherwise, if less than an hour, then "m min. ago".
    // Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

    formatDateFn();

    // functions

    function formatDateFn(){
        alert( formatDate(new Date(new Date - 1)) ); // "right now"

        alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

        alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

        // yesterday's date like 31.12.16, 20:00
        alert( formatDate(new Date(new Date - 86400 * 1000)) );

        function formatDate(date){
            let time =Math.floor((Date.now() - date.getTime())/ 1000);
            switch(true){
                case (time < 1): return 'right now';
                case (time < 60): return `${time} sec. ago`;
                case (time < 60 * 60): return `${Math.floor(time/60)} min. ago`;
                default:
                    return `${('0'+date.getDate()).substr(-2)}.${('0'+(date.getMonth()+1)).substr(-2)}.${(date.getFullYear()%100)} ${('0'+date.getHours()).substr(-2)}:${('0'+date.getMinutes()).substr(-2)}`; 
            }
        }
    }


    function secondsToTomorrowFn(){
        alert(getSecondsToTomorrow());

        function getSecondsToTomorrow(){
            let now = new Date();
            let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            return Math.ceil((tomorrow - now) / 1000);


        }
    }


    function secondsTodayFn(){
        alert(getSecondsToday());

        function getSecondsToday(){
            let dayBegin = new Date();
            dayBegin.setHours(0,0,0,0);
            return Math.floor((Date.now() - dayBegin.getTime())/1000);
        }
    }


    function lastDayOfMonthFn(){
        alert(getLastDayOfMonth(2011, 1));

        function getLastDayOfMonth(y, m){
            let date = new Date(y, m + 1, 0);
            return date.getDate();
        }
    }


    function dateAgoFn(){

        let date = new Date(2015, 0, 2);

        alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
        alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
        alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

        function getDateAgo(dateObj, days){
            let d = new Date(dateObj);
            d.setDate(d.getDate() - days);
            return d.getDate();
        }
    }


    function getLocalDayFn(){
        let date = new Date(2012, 0, 3);  // 3 Jan 2012
        alert( getLocalDay(date) );       // tuesday, should show 2
        alert(date);

        function getLocalDay(dateObj){
            let days = ['Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday'];
            return days[dateObj.getDay()];
        }

        function getNumOfDay(dateObj){
            let day = dateObj.getDay();
            day = day == 0 ? 7 : day;
            return day;
        }
    }


    function showWeekDay(){
        let date = new Date(2012, 0, 3);  // 3 Jan 2012
        let start = Date.now();
        alert(getWeekDay(date) );        // should output "TU"
        alert(`Speed f1 - f2 = ${compareSpeed(getWeekDayFast, getDayBySwitch)}`);
        
        //the fastest fn is getWeekDayFast

        function getWeekDay(dateObj){
            let [[d,a,y]] = String(dateObj).split(' ');
            a = a.toUpperCase();
            return d+a;
        }

        function getWeekDayFast(dateObj){
            let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
            return days[dateObj.getDay()];
        }

        function compareSpeed(f1, f2){
            let timeF1 = 0;
            let timeF2 = 0;
            for(let i = 0; i < 100; i++){
                timeF1 += testSpeed(f1);
                timeF2 += testSpeed(f2);             
            }

            return timeF1 - timeF2;

            function testSpeed(f){
                let time = 0;
                for(let i = 0; i < 100000; i++){
                    let start = Date.now();
                    f(new Date());
                    time += Date.now() - start;
                }
                return time;
            }
        }

        function getDayBySwitch(dateObj){
            switch(dateObj.getDay()){
                case 0: return 'SU';
                case 1: return 'MO';
                case 2: return 'TU';
                case 3: return 'WE';
                case 4: return 'TH';
                case 5: return 'FR';
                case 6: return 'SA';
            }
        }
    }


    function createDate(){

        let date = new Date ('2012-02-20T03:12:00.000+02:00');
        let thatDay = new Date(2012, 1, 20, 3, 12);

        alert(date);
        alert(thatDay);
    }
})();