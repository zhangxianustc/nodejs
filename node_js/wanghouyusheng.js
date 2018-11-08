var http = require('http');

let lyric = [
    "       ",
    "    在没风的地方找太阳      认", 
    "    在你冷的地方做暖阳      识", 
    "   人事纷纷  你总太天真     你",
    "   往后的余生  我只要你     是",
    "    往后余生   风雪是你     我",
    "    平淡是你  清贫也是你    的",
    "   荣华是你  心里温柔是你   幸",
    "     目光所至  也是你       运",
    "         ",
    "    想带你去看晴空万里      喜",
    "   想大声告诉你我为你着迷   欢",
    "   往事匆匆  你总会被感动   你",
    "    往后的余生  我只要你    不",
    "    往后余生   冬雪是你     需",
    "    春华是你  夏雨也是你    要",
    "   秋黄是你  四季冷暖是你   解",
    "     目光所致  也是你       释",
    "         ",
    "     往后余生  风雪是你     永",
    "    平淡是你  清贫也是你    远",
    "   荣华是你  心里温柔是你   爱",
    "     目光所至  也是你       你",
] 

function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

for(let it of lyric){
    for(let char of it) {
        process.stdout.write(char + "\033[?25l")
        sleep(150)
    }
    console.log('')
}

sleep(200000)
