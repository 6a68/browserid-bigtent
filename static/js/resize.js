if (!! localStorage.width && !! localStorage.height) {
  var w = parseInt(localStorage.getItem('width'), 10);
  var h = parseInt(localStorage.getItem('height'), 10);
  if (! isNaN(w) && w > 100 && ! isNaN(h) && h > 100) {
    var dw = w - (window.innerWidth || document.documentElement.offsetWidth);
    var dh = h - (window.innerHeight || document.documentElement.offsetHeight);
    window.resizeBy(dw, dh);
  }
}
