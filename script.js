document.addEventListener('DOMContentLoaded', function() {

  const modal = document.getElementById('modal');

  const bookBtn = document.getElementById('book-consult-btn');
  const learnBtn = document.getElementById('learn-more-btn');

  const bookContent = document.getElementById('book-content');
  const learnContent = document.getElementById('learn-content');

  const closeBtn = document.getElementsByClassName('modal-close-btn')[0];

  bookBtn.onclick = function() {
    modal.style.display = 'block';
    bookContent.style.display = 'block';
    learnContent.style.display = 'none';
  }

  learnBtn.onclick = function() {
    modal.style.display = 'block';
    learnContent.style.display = 'block';
    bookContent.style.display = 'none';
  }

  closeBtn.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});
