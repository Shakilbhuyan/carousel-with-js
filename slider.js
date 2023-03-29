const imges = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
]

let imageIndex = 0;
const imgEl = document.getElementById('slider-img');
setInterval( ()=>{
    if(imageIndex === imges.length){
        imageIndex = 0;
    };
    const imgUrl = imges[imageIndex];
    imgEl.setAttribute('src',imgUrl);
//    console.log(imgUrl);
   imageIndex++;
} , 1000)