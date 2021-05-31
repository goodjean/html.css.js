var link = {
  setcolors:function(color){
    var alist =
    document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }
}

var body = {
  setbackcolor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  },
  setcolor:function(color){
    document.querySelector('body').style.color = color;
   }
  }

function nightdaybutton(self){
  var target =
  document.querySelector('body')
  if(self.value === 'night'){
    body.setbackcolor('black');
    body.setcolor('white');
    link.setcolors('yellow');
    self.value = 'day';
  }
  else{
    body.setbackcolor('white');
    body.setcolor('black');
    link.setcolors('blue');
    self.value = 'night';
  }
}
