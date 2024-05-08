const btn = document.querySelector('button');
const container = document.querySelector('.container');

function draw(num) {
    container.replaceChildren();
    const newWidth = 640 / num;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let block = document.createElement('div');
            block.classList.add('pixel');
            block.style.width = newWidth + "px";
            block.style.height = newWidth + "px";
            container.appendChild(block);
        }
    }
    setUpBlocks();
}

function setUpBlocks() {
    const blocks = container.querySelectorAll('div');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.classList.add('color-change');
        });
    });
}

btn.addEventListener('click', () => {
    let num = +prompt('Please enter how many square you would like per row (max 100)');
    while (num > 100) {
        num = +prompt('Please enter how many square you would like per row (max 100)');
    }
    draw(num);
});

draw(16);
setUpBlocks();


