function openLightbox(src) {
    event.stopPropagation();
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('open');
  }
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
      closeModal(id);
    }
  });