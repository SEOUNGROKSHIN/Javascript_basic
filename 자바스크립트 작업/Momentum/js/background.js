const images = ['바다.jpg','강아지.jpg','고양이.jpg']

const chosenImage = images[(Math.floor(Math.random() * images.length))];

const bgImage = document.createElement("img");
// 사진 경로
bgImage.src = `img/${chosenImage}`;
// html 요소 추가
document.body.appendChild(bgImage);
