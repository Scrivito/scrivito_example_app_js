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
  }
  
  var ckie = getCookie('scrivitobarryform');
  if (!ckie) {
    setTimeout(function() {
      document.getElementById('first-popup-wrapper').style.display = "block";
      setCookie('scrivitobarryform','1',30);
    }, 58000);
  }
  
}, 2000);
