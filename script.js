function showTime() {
  
  /* PRIMARY VARIBABLES */

  var date    = new Date();

  var h       = date.getHours();                     // 0 - 23

  var m       = date.getMinutes();                   // 0 - 59

  var s       = date.getSeconds();                   // 0 - 59

  var session = "AM";

  /* CONDITIONS */
  
  if (h == 0) {h =     12;}  

  if (h > 12) {h = h - 12; session = "PM";}


  h = (h < 10) ? "0" + h : h;
  
  m = (m < 10) ? "0" + m : m;

  s = (s < 10) ? "0" + s : s;

  /* SECONDERY VARIABILES */
  
  var time    = h + ":" + m + ":" + s + " " + session; // 24:60:60

 /* SHOW ITEMS  */

  document.getElementById("MyClockDisplay").innerText   = time;

  document.getElementById("MyClockDisplay").textContent = time;

 /* CONTROL OF SHOWING ITEMS */

  setInterval(showTime, 1000);

}

showTime();
