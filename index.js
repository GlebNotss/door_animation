const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

let x = 0
let countTick = 0

let speedFrame = 14
let lastFrame = 576
let frameY = -5

const sprite = new Image()
sprite.src = 'https://www.html5canvastutorials.com/cookbook/ch8/img/hero_sprites.png'
sprite.onload = () => {
    tick()
    requestAnimationFrame(tick)
}

function tick () {
    if (countTick > speedFrame) {
        draw()
        countTick = 0
    }

    countTick++
    requestAnimationFrame(tick)
}

function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x = (x === lastFrame ? 0 : x + 144)
    ctx.drawImage(sprite, x, frameY, 130, 150, 15, 15, 130, 150)
}

// Выбор анимации

const select = document.querySelector('#select_animation')

select.addEventListener('change', () => {
    switch(select.value) {
        case '0':
            speedFrame = 14
            lastFrame = 576
            frameY = -5
            break;
        case '1':
            speedFrame = 15
            lastFrame = 576
            frameY = 150
            break;
        case '2':
            speedFrame = 10
            lastFrame = 720
            frameY = 300
            break;
        case '3':
            speedFrame = 15
            lastFrame = 576
            frameY = 450
            break;
    }
})