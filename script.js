function updateclock(){
    const time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    if(hours<10){
        hours='0'+hours;
    }
    if(minutes<10){
        minutes='0'+minutes;
    }
    if(seconds<10){
        seconds='0'+seconds;
    }
    let merdian='AM';
    if(hours>12){
        merdian='PM';
    }
    if (hours==0){
        hours=12;
    }
    if(hours>12){
        hours=hours-12;
    }
    if(hours<10){
        hours='0'+hours;
    }

    document.getElementById('clockcount').textContent=hours + ":" + minutes + ":" + seconds + merdian;
}
updateclock();
setInterval(updateclock,1000);