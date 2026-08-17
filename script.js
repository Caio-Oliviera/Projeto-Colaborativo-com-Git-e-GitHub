const form = document.querySelector('form');
const input = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const list = []

    input.forEach((inp) => {
        list.push(inp.value);
    });

    return list;
});