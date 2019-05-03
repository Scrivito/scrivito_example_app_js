// This file is for executing JavaScript code immediately before the body element is closed.
// Here you can, for example, let third-party code render additional markup.
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name+'=; Max-Age=-99999999;';  
}
var ckie = getCookie('scrivitobarryform');
if (!ckie) {
  setTimeout(function() {
    document.getElementById('first-popup-wrapper').style.display = "block";
    document.body.className = "fixed";
    setCookie('scrivitobarryform','1',30);
  }, 60000);
}

function showTerms() {
  document.getElementById('terms-condition').className = "active";
  document.body.className="fixed";
}
function closeTerms() {
  document.getElementById('terms-condition').className = "";
  if (document.getElementById('first-popup-wrapper').style.display != "block") {
    document.body.className="";  
  }
}

function addWaitingList() {
  const params = {
    email: document.getElementsByClassName('send-link-input1')[0].value,
    source: 'homepage',
  }
  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      var res = JSON.parse(xmlhttp.response);
      if (res.error) {
        alert(res.messages[0]);
      } else {
        alert("Email successfully registered");
      }
    }
  }
  xmlhttp.open("POST", "https://wpk2il4zj0.execute-api.eu-central-1.amazonaws.com/dev/user/add");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(params));
  
}

document.body.getElementsByClassName('content-wrapper')[0].addEventListener('DOMSubtreeModified', function () {
  if (window.location.hash != "") {
    if (document.getElementById(window.location.hash.replace('#', ''))) {
      setTimeout(function() {document.getElementById(window.location.hash.replace('#', '')).scrollIntoView();}, 500);
    }
  }
}, false);

setTimeout(function() {
  moreBlock = document.getElementsByClassName('more-block');
  for (index in moreBlock) {
    moreBlock[index].onclick = function(evt) {
      console.log('here', evt.target)
      if (evt.target.className.indexOf("closed") >= 0) {
        evt.target.className = evt.target.className.replace("closed", "open");
      } else {
        evt.target.className = evt.target.className.replace("open", "closed");
      }
    }
  }

  expandBlock = document.getElementsByClassName('expand-more-link');
  for (index in expandBlock) {
    expandBlock[index].onclick = function(evt) {
      evt.target.nextElementSibling.className = "";
      evt.target.className += " hide-p";
    }
  }

  popupClose = document.getElementById('first-popup-close');
  popupClose.onclick = function() {
    document.getElementById('first-popup-wrapper').style.display = "none";
    document.body.className = "";
  }
  
  document.getElementById('close_term').onclick = function() {
    closeTerms();
  }
  document.getElementById('show_term').onclick = function() {
    showTerms();
  }
  document.getElementById('show_term1').onclick = function() {
    showTerms();
  }
  document.getElementsByClassName('send-link-button1')[0].onclick = function() {
    addWaitingList();
  }
}, 5000);

