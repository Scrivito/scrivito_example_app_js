// This file is for executing JavaScript code immediately before the body element is closed.
// Here you can, for example, let third-party code render additional markup.
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
}, 1000);
