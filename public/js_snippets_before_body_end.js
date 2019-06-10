// This file is for executing JavaScript code immediately before the body element is closed.
// Here you can, for example, let third-party code render additional markup.
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${  date.toUTCString()}`;
  }
  document.cookie = `${name  }=${  value || ""   }${expires  }; path=/`;
}
function getCookie(name) {
  let nameEQ = `${name  }=`;
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = `${name}=; Max-Age=-99999999;`;
}
let ckie = getCookie("scrivitobarryform");

function showTerms() {
  document.getElementById("terms-condition").className = "active";
  document.body.className = "fixed";
}
function closeTerms() {
  document.getElementById("terms-condition").className = "";
}

function addWaitingList() {
  const params = {
    email: document.getElementsByClassName("send-link-input1")[0].value,
    source: "homepage",
  };
  let xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      let res = JSON.parse(xmlhttp.response);
      document.getElementById("signup_confirmation").getElementsByClassName("error")[0].style.display = "none";
      document.getElementById("signup_confirmation").getElementsByClassName("success")[0].style.display = "none";
      if (res.error) {
        document.getElementById("signup_confirmation").className = "active";
        document.getElementById("signup_confirmation").getElementsByClassName("error")[0].style.display = "block";
        document.getElementById("signup_confirmation").getElementsByClassName("error")[0].innerHTML = res.messages[0];
        document.body.className = "fixed";
      } else {
        // alert("Email successfully registered");
        document.getElementById("signup_confirmation").className = "active";
        document.getElementById("signup_confirmation").getElementsByClassName("success")[0].style.display = "block";
        document.body.className = "fixed";
      }
    }
  };
  xmlhttp.open(
    "POST",
    "https://wpk2il4zj0.execute-api.eu-central-1.amazonaws.com/dev/user/add"
  );
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(params));
}

document.body.getElementsByClassName("content-wrapper")[0].addEventListener(
  "DOMSubtreeModified",
  function() {
    if (window.location.hash != "") {
      if (document.getElementById(window.location.hash.replace("#", ""))) {
        setTimeout(function() {
          document
            .getElementById(window.location.hash.replace("#", ""))
            .scrollIntoView();
        }, 500);
      }
    }
  },
  false
);

setTimeout(function() {
  moreBlock = document.getElementsByClassName("more-block");
  for (index in moreBlock) {
    moreBlock[index].onclick = function(evt) {
      if (evt.target.className.indexOf("closed") >= 0) {
        evt.target.className = evt.target.className.replace("closed", "open");
      } else {
        evt.target.className = evt.target.className.replace("open", "closed");
      }
    };
  }

  if (document.getElementsByClassName("expand-more-link").length > 0) {
    expandBlock = document.getElementsByClassName("expand-more-link");
    for (index in expandBlock) {
      expandBlock[index].onclick = function(evt) {
        evt.target.nextElementSibling.className = "";
        evt.target.className += " hide-p";
      };
    }
  }

  if (document.getElementById("close_term")) {
    document.getElementById("close_term").onclick = function() {
      closeTerms();
    };
  }
  if (document.getElementById("show_term")) {
    document.getElementById("show_term").onclick = function() {
      showTerms();
    };
  }
  if (document.getElementsByClassName("send-link-button1").length > 0) {
    document.getElementsByClassName(
      "send-link-button1"
    )[0].onclick = function() {
      addWaitingList();
    };
  }
  if (document.getElementById("close_signup")) {
    document.getElementById("close_signup").onclick = function() {
      document.getElementById("signup_confirmation").className = "";
      document.body.className = "";
    };
  }

  if (document.getElementById("first-popup-close1")) {
    popupClose = document.getElementById("first-popup-close1");
    popupClose.onclick = function() {
      document.getElementById("first-popup-wrapper").style.display = "none";
      document.body.className = "";
    };
  }
  if (document.getElementById("first-popup-close2")) {
    popupClose = document.getElementById("first-popup-close2");
    popupClose.onclick = function() {
      document.getElementById("first-popup-wrapper").style.display = "none";
      document.body.className = "";
    };
  }

}, 5000);


