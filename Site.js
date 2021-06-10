function blue(){
    document.bgColor="#0091AD";
    changeFavicon("Images/favicon2.ico")
}
function red(){
    document.bgColor="#bc575f";
    changeFavicon("Images/favicon3.ico")
}
function green(){
    document.bgColor="#06d6a0";
    changeFavicon("Images/favicon4.ico")
}
function yellow(){
    document.bgColor="#ffb703";
    changeFavicon("Images/favicon5.ico")
}
function white(){
    document.bgColor="#ffffff";
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
    let month = Math.floor(diff/(30*24*60*60)); 
    diff = diff-(30*month*24*60*60);
    let days = Math.floor(diff/(24*60*60)); 
    diff = diff-(days*24*60*60);
    let hours = Math.floor(diff/(60*60));
    diff = diff-(hours*60*60);
    let minutes = Math.floor(diff/(60));
    diff = diff-(minutes*60);
    let seconds = diff;
    

    document.getElementById("time-elapsed").innerHTML = year+" year(s), " + month+" month(s), "+ days+" day(s), "+hours+" hour(s), "+minutes+" minute(s), "+seconds+" second(s)";
}

timer = setInterval(updateClock, 1000);