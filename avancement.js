 
 window.addEventListener('load', function () {  
  document.getElementById('demarrage1').style.height = window.innerHeight+'px';
  document.getElementById('demarrage1').style.width = window.innerWidth+'px';
  save1 = window.innerHeight + 50
  save2 = window.innerWidth + 10
  document.getElementById('demarrage2').style.height = save1+'px';
  document.getElementById('demarrage2').style.width = save2+'px';
  document.getElementById('test11').style.display = "block";
  document.getElementById('test22').style.display = "none";
  updateView();
 });


window.addEventListener('resize', function () {    
  document.getElementById('demarrage1').style.height = window.innerHeight+'px';
  document.getElementById('demarrage1').style.width = window.innerWidth+'px';
  save1 = window.innerHeight + 10
  save2 = window.innerWidth + 120
  document.getElementById('demarrage2').style.height = save1+'px';
  document.getElementById('demarrage2').style.width = save2+'px';
  updateView();
});


window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  document.getElementById("myBar").style.background="#b36e42";
}
  
const bootstrapDetectBreakpoint = function () {
  // cache some values on first call
  if (!this.breakpointValues) {
      this.breakpointNames = ["xl", "lg", "md", "sm", "xs"]
      this.breakpointValues = []
      for (const breakpointName of this.breakpointNames) {
          this.breakpointValues[breakpointName] = window.getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-' + breakpointName)
      }
  }
  let i = this.breakpointNames.length
  
  for (const breakpointName of this.breakpointNames) {
      i--
      if (window.matchMedia("(min-width: " + this.breakpointValues[breakpointName] + ")").matches) {
          return {name: breakpointName, index: i}
      }
  }
  return null
}

function move_left(){
  document.getElementById('scrollmenu').scrollLeft -= 200;
}

function move_right(){
  document.getElementById('scrollmenu').scrollLeft += 200;
}

// ------------

function changementDiv1(){  
  if(document.getElementById('test22').style.display = "none"){
    document.getElementById('test22').style.display = "block";
    document.getElementById('test11').style.display = "none";
    console.log("tt")
  }
}
function changementDiv2(){  
  if(document.getElementById('test22').style.display = "block"){
    document.getElementById('test22').style.display = "none";
    document.getElementById('test11').style.display = "block";
    console.log("ii")
  }
}
function changementDiv3(){  
  div1 = document.getElementById('aideXs')
  div2 = document.getElementById('aideXl')
  
  
  if(div1.style.display = "none"){
    div1.style.display = "block";
    div2.style.display = "none";
  }
}

function changementDiv4(){  
  div1 = document.getElementById('aideXs')
  div2 = document.getElementById('aideXl')
  
  if(div1.style.display = "block"){
    div1.style.display = "none";
    div2.style.display = "block";
  }
}
function changementDiv5(){  
  div1 = document.getElementById('demarrage1')
  div2 = document.getElementById('demarrage2')
  
  
  if(div1.style.display = "block"){
    div1.style.display = "none";
    div2.style.display = "block";
  }
}

function changementDiv6(){  
  div1 = document.getElementById('demarrage1')
  div2 = document.getElementById('demarrage2')
  
  if(div1.style.display = "none"){
    div1.style.display = "block";
    div2.style.display = "none";
  }
}

function updateView() {
  console.log("categorieTaille: "+bootstrapDetectBreakpoint().index)
  if(bootstrapDetectBreakpoint().index<=1){
    changementDiv1()
    changementDiv3()
  }else{
    changementDiv2()
    changementDiv4()
  }
  if(bootstrapDetectBreakpoint().index<1){
    changementDiv5()
  }else{
    changementDiv6()
  }

}

// ------------

function activation1(){  
  if(document.getElementById('activation1').style.maxHeight === 0+"em"){
        document.getElementById('activation1').style.maxHeight = 21+"em";
        document.getElementById('activation2').style.maxHeight = 0+"em";
        document.getElementById('activation3').style.maxHeight = 0+"em";
        document.getElementById('fleche-bas1').style.display = "block";
        document.getElementById('fleche-haut1').style.display = "none";
  }else{
       document.getElementById('activation1').style.maxHeight = 0+"em";
       document.getElementById('fleche-haut1').style.display = "block";
       document.getElementById('fleche-bas1').style.display = "none";
  }
}

function activation2(){  
  if(document.getElementById('activation2').style.maxHeight === 0+"em"){
     document.getElementById('activation2').style.maxHeight = 21+"em";
     document.getElementById('activation1').style.maxHeight = 0+"em";
     document.getElementById('activation3').style.maxHeight = 0+"em";
     document.getElementById('fleche-bas2').style.display = "block";
     document.getElementById('fleche-haut2').style.display = "none";
  }else{
    document.getElementById('activation2').style.maxHeight = 0+"em";
    document.getElementById('fleche-bas2').style.display = "none";
    document.getElementById('fleche-haut2').style.display = "block";
  }
}

function activation3(){  
  if(document.getElementById('activation3').style.maxHeight === 0+"em"){
    document.getElementById('activation3').style.maxHeight = 21+"em";
    document.getElementById('activation1').style.maxHeight = 0+"em";
    document.getElementById('activation2').style.maxHeight = 0+"em";
    document.getElementById('fleche-bas3').style.display = "block";
    document.getElementById('fleche-haut3').style.display = "none";
  }else{
    document.getElementById('activation3').style.maxHeight = 0+"em";
    document.getElementById('fleche-bas3').style.display = "none";
    document.getElementById('fleche-haut3').style.display = "block";
  }
}

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
 







