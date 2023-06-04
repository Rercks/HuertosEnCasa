// array of images
const images = [
    'imgdescubre/img 2.jpeg', 
    'imgdescubre/img 6.jpeg', 
    'imgdescubre/img 7.jpeg',
];

const firstImage = 0;
const lastImage = images.length -1;
let currentImage = 0;

//next
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{

        // get image tag
        const imageTag = document.getElementById('image');
        currentImage++;
        if(currentImage >= lastImage){
            currentImage= 2;
        }
        imageTag.src = images[currentImage];
        document.getElementById('info').innerHTML = (currentImage +1) + '/3';
});

//prev
const preBtn = document.getElementById('prev');
preBtn.addEventListener('click',()=>{

    // get image tag
    const imageTag = document.getElementById('image');
    currentImage--;
    if(currentImage <= firstImage){
        currentImage= 0;
    }
    imageTag.src = images[currentImage];
    document.getElementById('info').innerHTML = (currentImage +1) + '/3';

});

let toggle_bar = document.querySelector(".nav-header");

let sidebar = document.querySelector(".sidebar");

toggle_bar.addEventListener("click", function(){
    if(toggle_bar.firstElementChild.classList.contains("fa-bars"))
    {
        toggle_bar.firstElementChild.classList.replace("fa-bars","fa-times");
    }
    else
    {
        toggle_bar.firstElementChild.classList.replace("fa-times","fa-bars");
    }
   sidebar.classList.toggle("sidebaractive")
});
