document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('trailerModal');
    const frame = document.getElementById('trailerFrame');
    const title = document.getElementById('modal-title');
    const closeBtn = document.querySelector('.close');
  
    document.querySelectorAll('.movie-frame').forEach(frameEl => {
      frameEl.addEventListener('click', () => {
        const trailer = frameEl.getAttribute('data-trailer');
        const movieTitle = frameEl.getAttribute('data-title');
  
        frame.src = trailer + "?autoplay=1";
        title.textContent = movieTitle;
        modal.style.display = "block";
      });
    });
  
    closeBtn.onclick = () => {
      modal.style.display = "none";
      frame.src = "";
    };
  
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        frame.src = "";
      }
    };
  });
  