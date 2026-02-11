const button = document.getElementById('floatButton');

button.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.className = 'floatingHeart';
  heart.innerHTML = '💖';

  // Random horizontal position near the button
  const x = button.offsetLeft + Math.random() * button.offsetWidth;
  const y = button.offsetTop;
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';

  document.body.appendChild(heart);

  // Remove the heart after animation ends
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
});
