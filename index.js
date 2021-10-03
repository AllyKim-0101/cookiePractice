let showCookieMessageTimeOut;
//on load, the cookie pop-up will appear after 8 seconds, if the user has not accepted cookie

setTimeout(() => {
  showAOCmessage();
  showCookieMessageTimeOut = setTimeout(() => {
    closeAOCmessage();
    showCookieMessage();
  }, 5000);
}, 3000);

//// AOC

let AOCpopUp = document.querySelector(".AOCpopUp");
//when user clicks
document
  .querySelector(".AOC-ModalButton")
  .addEventListener("click", function () {
    closeAOCmessage();
    clearTimeout(showCookieMessageTimeOut);
    showCookieMessage();
  });

//show AOC message
function showAOCmessage() {
  console.log("showAOC");
  if (!readCookie("hasSeenAOC")) {
    createCookie("hasSeenAOC", true, 1);
    AOCpopUp.style.visibility = "visible";
  }
}
//close AOC message
function closeAOCmessage() {
  console.log("closeAOC");
  AOCpopUp.style.visibility = "hidden";
  console.log("closeMessage");
}

// Cookie
let cookieModalBox = document.querySelector(".cookieModalBox");
//user clicks
document
  .querySelector(".cookieModalButton")
  .addEventListener("click", function () {
    closeCookieMessage();
    createCookie("accepted", true, 3650);
  });

// check if user accepted cookies
function readCookie(name) {
  console.log("readCookie");

  const cookie = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .find((ele) => ele[0].trim() === name);
  return cookie ? cookie[1] : null;
}

//show cookie message
function showCookieMessage() {
  console.log("showCookie");
  if (!readCookie("accepted")) {
    cookieModalBox.style.visibility = "visible";
  }
}
//close cookie message
function closeCookieMessage() {
  console.log("closeCookie");
  cookieModalBox.style.visibility = "hidden";
}

//save/create a cookie to remember that user accepted cookies
function createCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  let cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log(cookie);
  document.cookie = cookie;
}
