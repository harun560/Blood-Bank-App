const cards = document.querySelectorAll('#left');
cards.forEach(card => {
  const maximizeBtn = card.querySelector('.maximize-btn');
  maximizeBtn.addEventListener('click', () => {
    card.classList.toggle('maximized');
  });
});


function har() {
  document.getElementById(green).textcontent = "check this"
}
