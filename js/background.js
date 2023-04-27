const images = [];
for(var i=0;i<6;i++){
    images.push(i+ ".jpg");
}

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';


// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);