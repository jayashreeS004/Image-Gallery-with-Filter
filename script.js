const buttons = document.querySelectorAll('.filter-btn');
const imageBoxes = document.querySelectorAll('.image-box');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    imageBoxes.forEach(box => {
      if (category === 'all' || box.classList.contains(category)) {
        box.classList.remove('hide');
      } else {
        box.classList.add('hide');
      }
    });
  });
});
