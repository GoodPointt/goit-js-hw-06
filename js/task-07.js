const sizeControlRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

sizeControlRef.addEventListener('input', () => {
  textRef.style.fontSize = `${sizeControlRef.value}px`;
});
