//on load, the cookie pop-up will appear after 8 seconds, if the user has not accepted cookie
if (!readCookie("accepted")) {
  setTimeout(() => {
    showCookieMessage();
  }, 3000);
}

let cookieModalBox = document.querySelector(".cookieModalBox");
//user clicks
document
  .querySelector(".cookieModalButton")
  .addEventListener("click", function () {
    closeCookieMessage();
    createCookie("accepted", true, 1000000);
  });

// 1: check if user accepted cookies
function readCookie(name) {
  const cookie = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .find((ele) => ele[0].trim() === name);
  console.log("readCookie");
  return cookie ? cookie[1] : null;
}

//2:show cookie message
function showCookieMessage() {
  console.log("showCookie");
  cookieModalBox.style.visibility = "visible";
}
//3:close cookie message
function closeCookieMessage() {
  console.log("closeCookie");
  cookieModalBox.style.visibility = "hidden";
}

//4: save/create a cookie to remember that user accepted cookies
function createCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  let cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log(cookie);
  document.cookie = cookie;
}
