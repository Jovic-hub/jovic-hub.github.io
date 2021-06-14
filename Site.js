function blue(){
    document.querySelector('section#home').style.background = '#4895ef';
    document.querySelector('section#about').style.background = '#4361ee';
    document.querySelector('section#portfolio').style.background = '#3f37c9';
    changeFavicon("Images/favicon2.ico")
}
function red(){
    document.querySelector('section#home').style.background = '#e5383b';
    document.querySelector('section#about').style.background = '#ba181b';
    document.querySelector('section#portfolio').style.background = '#a4161a';
    changeFavicon("Images/favicon3.ico")
}
function green(){
    document.querySelector('section#home').style.background = '#6ede8a';
    document.querySelector('section#about').style.background = '#4ad66d';
    document.querySelector('section#portfolio').style.background = '#25a244';
    changeFavicon("Images/favicon4.ico")
}
function yellow(){
    document.querySelector('section#home').style.background = '#ffff0a';
    document.querySelector('section#about').style.background = '#ffea00';
    document.querySelector('section#portfolio').style.background = '#ffdd00';
    changeFavicon("Images/favicon5.ico")
}
function white(){
    document.querySelector('section#home').style.background = 'white';
    document.querySelector('section#about').style.background = 'white';
    document.querySelector('section#portfolio').style.background = 'white';
    changeFavicon("Images/favicon.ico")
}
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}
function toggleContact(){
    document.getElementById("popup-2").classList.toggle("active");
}

const changeFavicon = link => {
    let $favicon = document.querySelector("link[rel='shortcut icon']")
    if ($favicon !== null) {
      $favicon.href = link
    } else {
      $favicon = document.createElement("link")
      $favicon.rel = "icon"
      $favicon.href = link
      document.head.appendChild($favicon)
    }
}


function updateClock() {
    var startDateTime = new Date(2020,7,10,23,59,59,0); // YYYY (M-1) D H m s ms (start time and date from DB)
    var startStamp = startDateTime.getTime();
    
    var newDate = new Date();
    var newStamp = newDate.getTime();
    
    var timer; 

    newDate = new Date();
    newStamp = newDate.getTime();
    let diff = Math.round((newStamp-startStamp)/1000);
    
    let year = Math.floor(diff/(12*30*24*60*60)); 
    diff = diff-(12*year*30*24*60*60);
    if(year === 0){
        year = ""
    }else if(year <= 1){
        year = year + " year, "
    }
    else{
        year = year + " years, "
    }
    let month = Math.floor(diff/(30*24*60*60)); 
    diff = diff-(30*month*24*60*60);
    if(month <= 1){
        month = month + " month, "
    }else{
        month = month + " months, "
    }
    let days = Math.floor(diff/(24*60*60)); 
    diff = diff-(days*24*60*60);
    if(days <= 1){
        days = days + " day, "
    }else{
        days = days + " days, "
    }
    let hours = Math.floor(diff/(60*60));
    diff = diff-(hours*60*60);
    if(hours <= 1){
        hours = hours + " hour, "
    }else{
        hours = hours + " hours, "
    }
    let minutes = Math.floor(diff/(60));
    diff = diff-(minutes*60);
    if(minutes <= 1){
        minutes = minutes + " minute, "
    }else{
        minutes = minutes + " minutes, "
    }
    let seconds = diff;
    if(seconds <= 1){
        seconds = seconds + " second"
    }else{
        seconds = seconds + " seconds"
    }

    document.getElementById("time-elapsed").innerHTML = year + month + days + hours + minutes + seconds;

}

timer = setInterval(updateClock, 1000);