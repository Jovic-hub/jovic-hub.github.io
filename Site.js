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