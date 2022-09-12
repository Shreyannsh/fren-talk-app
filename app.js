var inputText = document.querySelector("#input-text");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output-text");

var userUrl = "https://api.funtranslations.com/translate/ferb-latin.json";

function readUrl(input){
    return userUrl + "?" + "text=" + input;
};

function catchError(error){
    console.log("Error occured", error);
    alert("Something went wrong. Please try in sometime.");
};

function clickHandler(){
    var userinput = inputText.value;
    fetch(readUrl(userinput))
    .then (response => response.json())
    .then( json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(catchError)


};

btnTranslate.addEventListener("click",clickHandler);