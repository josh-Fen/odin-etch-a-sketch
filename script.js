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
            let opacity = block.style.opacity
            if (opacity) {
                opacity = +opacity - 0.1;
                block.style.opacity = String(opacity);
                console.log(String(opacity));
            } else {
                block.style.opacity = '0.9';
            }
        });
    });
}

btn.addEventListener('click', () => {
    let num = +prompt('Please enter how many squares you would like per side (max 100)');
    while (num > 100) {
        num = +prompt('Please enter how many squares you would like per side (max 100)');
    }
    draw(num);
});

draw(16);
setUpBlocks();


