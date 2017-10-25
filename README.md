# CRySTALL
CRedential STuffing ALLeviator
Made for Troy Hunt's HIBP API contest.

The purpose of this utility is to provide a way for developers, sysadmins, and the like to easily allow end-users to be made aware if they are creating or setting a password that has a high likelyhood for compromise in a credential stuffing attack (see https://www.owasp.org/index.php/Credential_stuffing).

CRySTALL-plain.js is the plaintext implementation. This is not recommended for use in production networks as unencrypted passwords are sent over the internet with this - not terribly safe (even though HIBP's API is using SSL!). This may also cause errors if various webserver-affecting symbols are present in the password, like directory transversals.

CRySTALL-sha1.js is the SHA-1 implementation. This is preferred for production networks, as it gives a greater degree of security and encodes the passwords to help the HIBP receive them with fewer errors.

Please take note - neither of these implement rate limiting on their own, because I found it can be disruptive for the end user expecting a certain degree of feedback in the front-end. Rate limiting guidelines for the API can be found here: https://haveibeenpwned.com/API/v2#RateLimiting. Rate limiting IS implemented in my demo code, which you are free to use directly or as a template/guideline, if you'd like.

CRySTALL-demo.js is the demo implementation, used in demo.html. It uses SHA-1, a rate limiting system, and very responsive output to the end user who's trying to pick a password.

Full disclosure: the SHA1 hashing function was not written by me, but no license indicating usage restrictions was present when I retrieved it. Original source is available here: http://sha1.nichabi.com/javascript-function.php. Credit goes to the author of the nichabi.com website for that functionality. Credit also goes to Troy Hunt and the API he has made available for his already-amazing project, "Have I Been Pwned". I highly recommend giving it a look if you haven't before, as it absolutely exemplifies the right idea and right implementation of responsible third-party breach disclosure: https://haveibeenpwned.com/. Thank you for HIBP, Troy!
