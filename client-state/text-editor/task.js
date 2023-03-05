const textarea = document.getElementById('editor');
const btn = document.querySelector('button');

textarea.value = localStorage.getItem('text');

textarea.addEventListener('input', () => {
    localStorage.setItem('text', textarea.value);
});

btn.addEventListener('click', () => {
    textarea.value = '';
    localStorage.removeItem('text');
});