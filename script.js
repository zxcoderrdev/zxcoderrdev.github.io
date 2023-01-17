document.onmousemove = animateCircles; // circle follow mouse

var colors = ['#1abc9c', '#3498db', '#f1c40f']

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle); // adds function to body

  // adds motion
  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  // randomize color
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  // adds animation
  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + 'px';
  circle.style.top = circle.offsetTop - 20 + 'px';

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
}

var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);
 
var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];
 
//transition speed
var gradientSpeed = 0.002;
 
function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];
 
var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";
 
var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";
 
$('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}
 
setInterval(updateGradient,10);

function fun1() {
  var deist = "User tapped on the button"
  console.log(deist)
}
function fn2() {
  alert('Coming soon...')
  return false;
}

document.onmousemove = animateCircles; // circle follow mouse

var colors = ['#1abc9c', '#3498db', '#f1c40f']

function animateCircles(event) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle); // adds function to body

  // adds motion
  circle.style.left = event.clientX + 'px';
  circle.style.top = event.clientY + 'px';

  // randomize color
  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  // adds animation
  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + 'px';
  circle.style.top = circle.offsetTop - 20 + 'px';

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
}

// FULL OR PARTIAL COPYING OF FILES IS PROHIBITED OR CONTACT THE OWNER in Telegram @zxcoderr
// FULL OR PARTIAL COPYING OF FILES IS PROHIBITED OR CONTACT THE OWNER in Telegram @zxcoderr
// FULL OR PARTIAL COPYING OF FILES IS PROHIBITED OR CONTACT THE OWNER in Telegram @zxcoderr
