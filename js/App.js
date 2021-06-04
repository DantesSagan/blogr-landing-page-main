const dropbtn = document.getElementById('btn');

dropbtn.addEventListener('click', function () {
  // get random number between 0-3 colors(0-3)
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.classList.toggle.name = dropbtn;
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
