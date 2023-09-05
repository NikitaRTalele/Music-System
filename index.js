const box = document.getElementsByClassName('box');

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  if (box.style.display === 'none') {
    box.style.display = 'block';

    btn.textContent = 'Hide div';
  } else {
    box.style.display = 'none';

    btn.textContent = 'Show div';
  }
});
