function switchDisplay(x) {
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function switchDisplayByClassName(className) {
  var x = document.getElementsByClassName(className);
  for (i=0 ; i<x.length ; i++) {
    switchDisplay(x.item(i))
  }
}
