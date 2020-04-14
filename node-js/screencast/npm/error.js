let util = require('util');

let phrases = {
    "Hello": "Hi! Ho-ho,",
    "world": "Everyone!"
};

function PhraseError(message){
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message){
    this.message = message;
    this.status = status;
    Error.captureStackTrace(this, HttpError);
}

util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

function getPhrase(name){
    if(!phrases[name]){
        throw new PhraseError("There is no such phrase! Phrase: " + name ); // HTTp 500
    }
    return phrases[name];
}

function makePage(url){
    if(url != 'index.html'){
        throw new HttpError(404,"There is no such page!"); // HTTP 404
    }
    return util.format("%s, %s!", getPhrase("Hell"), getPhrase("world"));
}

try{
    
    let page = makePage('index.html');
    console.log(page);

} catch (e){
    if(e instanceof HttpError){
        console.log(e.status, e.message);
    } else {
        console.error("Error %s\n message: %s\n stack: %s", e.name, e.message, e.stack);
    }
}
