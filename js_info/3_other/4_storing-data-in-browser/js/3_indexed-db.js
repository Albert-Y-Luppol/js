
document.body.innerHTML = `
    <button onclick="addMovie()" style="margin: 10px">Add Movie</button>
    <button onclick="removeAllMovies()" style="margin: 10px">Remove All Movies</button>
    <button onclick="removeDB()" style="margin: 10px">Remove DB</button>
    <ul id="movies"></ul>
`;

let box = document.getElementById('movies'),
    thumb = document.createElement('li');
    thumb.innerHTML = `There is no movies in DB!<br>Insert some movies!`;

let db;

initMoviesDB();

function removeDB(){
    let req = indexedDB.deleteDatabase('movies');
    if (confirm('DB will be removed after reloading!\n Reload now?')) location.reload();

    req.onsuccess = function () {
        alert("Deleted database successfully");
    };
    req.onerror = function () {
        alert("Couldn't delete database");
    };
    req.onblocked = function () {
        alert("Couldn't delete database due to the operation being blocked");
    };
}


function initMoviesDB(){
    let openMovieDataBaseRequest = indexedDB.open('movies', 1);

    openMovieDataBaseRequest.onupgradeneeded = ()=>{

        let database = openMovieDataBaseRequest.result;

        if(!database.objectStoreNames.contains('movies')){
            database.createObjectStore('movies', {keyPath: 'name'});
            
            alert('Create ObjectStore');
            
            return;
        }
        alert('Something goes wrong from init DB!');
    };

    openMovieDataBaseRequest.onsuccess = ()=>{
        db = openMovieDataBaseRequest.result;
        alert('DB on table!');
        showAllMovies();
    };
}


function addMovie(){
    let  movie = {
        name: prompt('Enter Movie Name:'),
        price: +prompt('Enter Movie Price:')
    };

    let transaction = db.transaction('movies', 'readwrite'),
        movies = transaction.objectStore('movies');

    let addMovieRequest = movies.add(movie);

    transaction.oncomplete = ()=>{
        alert('Saved!');
        showAllMovies();
    };

    addMovieRequest.onerror = (e)=>{
        if(addMovieRequest.error.name == 'ConstraintError'){
            e.preventDefault();
            e.stopPropagation();
            if(confirm("Movie With Such Name already exist!\n Replace it?")) {

                movies.put(movie);
                return;
            };

            transaction.abort();
            addMovie();
        }
    };
}


function showAllMovies(){
    box.innerHTML = "";

    let movies = db.transaction('movies').objectStore('movies'),
        cursorRequest = movies.openCursor();

    cursorRequest.onsuccess = ()=>{
        let movie = cursorRequest.result;

        if(movie){
            box.insertAdjacentHTML('beforeend', `
                <li>"${movie.value.name.charAt(0).toUpperCase() + movie.value.name.slice(1)}" cost: $${movie.value.price}.</li>
            `);

            movie.continue();
        } else if(box.innerHTML == ""){
            box.append(thumb);
        }
    };
    
}


function removeAllMovies(){
    let transaction = db.transaction('movies','readwrite'),
        movies = transaction.objectStore('movies');

    movies.clear();

    transaction.oncomplete = ()=>{
        showAllMovies();
    };
}
