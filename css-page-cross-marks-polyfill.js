document.addEventListener('DOMContentLoaded', function() {
  var wrapper = document.createElement('div');
  wrapper.style.cssText = "position: absolute; top: 0; left: 0; z-index: 1000;"
  document.body.appendChild(wrapper);
  for(var i=0; i < 10; i++) {
    var page = document.createElement('div');
    page.style.cssText = "position: absolute; top: "+ (i * 297) +"mm; left: 0; border: 1px dashed #333; height: 297mm; width: 210mm;"
    wrapper.appendChild(page);
  }
}, false);
