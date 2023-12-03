console.log('script');
let h_nidle = document.getElementById('hours')
let m_nidle = document.getElementById('min')
let s_nidle = document.getElementById('sec')



setInterval(() => {
    let d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds(); 

let hour_r = 30*hour +min/2;
let min_r = 6*min;
let sec_r = 6*sec;

h_nidle.style.transform=`rotate(${hour_r}deg)`;
m_nidle.style.transform=`rotate(${min_r}deg)`;
s_nidle.style.transform=`rotate(${sec_r}deg)`;
}, 1000);






// digital clock 
 
setInterval(() => {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
  
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;  
}, 1000);
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = new Date();
var day = date.getDay(); // 0 - 59
document.getElementById('day_name').innerHTML = days[day];