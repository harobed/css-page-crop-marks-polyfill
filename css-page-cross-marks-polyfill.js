document.addEventListener('DOMContentLoaded', function() {
  function getParam(name) {
    elements = document.querySelector("*[data-" + name + "]");
    if (elements) {
      return elements.attributes['data-' + name].nodeValue;
    }
  }
  page_margin = getParam('page-margin') ? getParam('page-margin') : '10mm';
  page_height = getParam('page-height') ? getParam('page-height') : '297mm';
  page_width = getParam('page-width') ? getParam('page-width') : '210mm';

  var wrapper = document.createElement('div');
  wrapper.style.cssText = "position: absolute; top: 0; left: 0; z-index: 1000;"
  document.body.appendChild(wrapper);
  for(var i=0; i < 10; i++) {
    var page = document.createElement('div');
    page.style.cssText = "position: absolute; top: calc("+ i + " * (" + page_height + " - (" + page_margin + " * 2))); left: 0; border: 1px dashed #333; height: calc(" + page_height + " - (" + page_margin + " * 2)); width: calc(" + page_width + " - (" + page_margin + " * 2));"
    wrapper.appendChild(page);
  }
}, false);
