const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const maximizeBtn = card.querySelector('.maximize-btn');
  maximizeBtn.addEventListener('click', () => {
    card.classList.toggle('maximized');
  });
});
