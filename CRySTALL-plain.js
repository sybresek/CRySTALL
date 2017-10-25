function checkPass() {
    passGiven = document.getElementById("password").value;
    urlString = "https://haveibeenpwned.com/api/v2/pwnedpassword/" + passGiven;
    xmlHttp.open("GET",urlString,true);
    xmlHttp.send();
    xmlHttp.onloadend = function() {
        if (xmlHttp.status == "404") {
            // The supplied password was not found in the HIBP Pwned Passwords list. This is ideal.
        } else if (xmlHttp.status == "200") {
            // The supplies password was found in the HIBP Pwned Passwords list. The user should be prompted to choose a different password.
        } else {
            // There was an error with your request. 429 is thrown for exceeding rate-limiting, 403 is thrown for invalid requests.
        }
    }
}
