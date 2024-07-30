var count = 1
var arr = []
var _count_ = 0
var head = document.getElementById('heading')
arr[0] = Math.floor(Math.random() * (25 - 1) + 1)
function bgChange(num) {
    k = document.getElementById(`btn${num}`).style
    if (Result()) {
        k.background = "url('bgimage/coin.png') 0% 0% / cover"
        count++
        for (i = 0; i <= count - 1; i++) {
            arr[i] = Math.floor(Math.random() * (25 - 1) + 1)
        }
        next_level()
    }
    else {
        if (check(num)) {
            k.background = "url('bgimage/coin.png') 0% 0% / cover"
        }
        else {
            k.background = "url('bgimage/bomb.png') 0% 0% / cover"
            setInterval(() => {
              alert("You Lose The Game\nRefresh to Play Again")
            }, 1000);
        }
    }
}
function next_level() {
    for (let j = 1; j <= 25; j++) {
        g = document.getElementById(`btn${j}`).style
        g.background = 'none'
        _count_ = 0
    }
    head.textContent = `Mining Game - Level ${count}`
    setTimeout(() => {
        alert(`This is Level ${count}`)
    }, 1000)
}
function Result() {
    for (let j = 1; j <= 25; j++) {
        g = document.getElementById(`btn${j}`).style.background
        if (g == "url('coin.png') 0% 0% / cover") {
            _count_++
        }
    }
    _count_++
    if (_count_ + count == 25) { return 1 }
    return 0
}
function check(num) {
    for (let i = 0; i <= count - 1; i++) {
        if (arr[i] == num) {
            return 0;
        }
    }
    return 1;
}