const form = document.querySelector('form');
const input = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const list = []

    forEach(input, (input, index) => {
        const inp = input[index].value;
        list.push(inp);
    })

    const result = { ...list };
    return result;
})