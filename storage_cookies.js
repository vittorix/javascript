import { p, stringy } from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n============= LOCAL/SESSION STORAGE AND COOKIES ============");

/* 
    LOCAL STORAGE accessible from all tabs and windows of site, never expires, 10MB limit
    SESSION STORAGE accessible from only the tab on which is defined, gets deleted when tab is closed, 5MB limit
    COOKIE accessible from all tabs and windows of site, expires  only if you set expiration, set expiration in the past to removed it, gets sent to server with all requests, 4kB limit
*/

localStorage.setItem("name", "VittoLocal");
localStorage.setItem("height", 72);
p(localStorage);

sessionStorage.setItem("name", "VittoSession");
sessionStorage.setItem("height", 72);
p(sessionStorage);

document.cookie = "name=VittoCookie";
p(document.cookie);
document.cookie = `name=Vitto; expires=${new Date(9999, 0, 1).toUTCString()}`;

const q = (message) => {
  p(message);
  return message;
};

// cookie that does not expire
document.cookie = `name=Vitto; expires=${new Date(9999, 0, 1).toUTCString()}`;

//prettier-ignore
document.getElementById("root").innerHTML +=
  "<p> localStorage: " + q(stringy(localStorage)) + "</p>" +
  "<p> sessionStorage: " + q(stringy(sessionStorage)) + "</p>" +
  "<p> cookie: " + q(stringy(document.cookie)) + "</p>";

export default "";
