let pointer =1;
let paths=["../ex00/assets/profile.png","../ex00/assets/profile2.png"];
let image=document.getElementById("profile-image");
let switcher=document.getElementById("switcher");
switcher.addEventListener("click",getImage);

function getImage() {
    if (pointer==1) {
        image.classList.add("fade-out");
       setTimeout(function(){
         image.src=paths[1];
        image.alt="formal profile image";
        pointer=2;
        
        image.classList.remove("fade-out");
       },300)
    }
    else{
        image.classList.add("fade-out");
       setTimeout(function(){
         image.src=paths[0];
         image.alt="casual profile image";
         pointer=1;
        
        image.classList.remove("fade-out");
       },300)
        
    }
}