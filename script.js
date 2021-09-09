const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".change-class");
const arrow = document.querySelector(".arrow-img");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        nav.style.backgroundColor = "white";
        nav.style.boxShadow = "0 9px 15px -6px rgb(212, 212, 212)";
        arrow.style.display = "inline";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
        arrow.style.display = "none";
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
//yes i totaly wrote this by myself :)

function closeVid(){
  const iframe = document.getElementById('youtube-video');
  iframe.src = iframe.src;

  const vidDiv = document.querySelector(".video-div");
  vidDiv.style.display = "none";
}
function openVid(){
  const vidDiv = document.querySelector(".video-div");
  vidDiv.style.display = "flex";
}
function closeReg(){
  const vidDiv = document.querySelector(".registration-div-container");
  vidDiv.style.display = "none";
}
function openReg(){
  const vidDiv = document.querySelector(".registration-div-container");
  vidDiv.style.display = "flex";
}

/* borgir */

const menuBtn = document.querySelector(".menu-btn");
const body = document.querySelector(".body");
const borgirBlack = document.querySelector(".burger-black");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.add("open");
    borgirBlack.classList.remove("translateChange2");
    borgirBlack.style.display = "flex";
    borgirBlack.classList.add("translateChange");
    body.style.overflow = "hidden";
})

closeBtn.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    borgirBlack.classList.remove("translateChange");
    borgirBlack.classList.add("translateChange2");
    body.style.overflow = "auto";

})

