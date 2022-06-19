const image_box = document.getElementById("image_box");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const images = document.querySelectorAll("#image_box div");
const landscape = document.getElementById("landscape")
const title = document.querySelectorAll(".box h1")
console.log(title)
console.log(images);

landscape.style.left = "50%"

let index = 0;

let interval = setInterval(automatic, 5000);

function automatic() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }
  image_box.style.transform = `translateY(${-index * 400}px)`;
  title[index].style.left = "50%"
  title[index].style.transform = "translate(-50%, -50%)"
 
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(automatic, 5000);
}

btnLeft.addEventListener("click", () => {
  index--;
  changeImage();
  resetInterval();
});

btnRight.addEventListener("click", () => {
  index++;
  changeImage();
  resetInterval();
});
