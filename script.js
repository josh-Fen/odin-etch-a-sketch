const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let block = document.createElement('div');
        block.classList.add('pixel');
        container.appendChild(block);
    }
}

const blocks = container.querySelectorAll('div');

blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.classList.add('color-change');
    });
});
