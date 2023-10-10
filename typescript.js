onload = function () {
    draw(100, 100);
    draw(300, 100);
};
var cvs;
var xx = 370;
function draw(x, y) {
    var canvas = document.getElementById('rectangle');
    if (!canvas || !canvas.getContext) {
        return false;
    }
    cvs = canvas.getContext('2d');
    if (cvs == null) {
        return;
    }
    var chara1 = new Image();
    chara1.src = "./棒人間素材.png"; // 画像のURLを指定
    chara1.onload = function () {
        if (cvs == null) {
            return;
        }
        cvs.drawImage(chara, 170, 80, 50, 50);
    };
    if (cvs == null) {
        return;
    }
    var chara = new Image();
    chara.src = "./棒人間素材.png"; // 画像のURLを指定
    chara.onload = function () {
        if (cvs == null) {
            return;
        }
        cvs.drawImage(chara, 370, 270, 50, 50);
    };
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return; // 既定のアクションがキャンセルされている場合は何もしないようにします。
        }
        var handled = false;
        if (event.key !== undefined) {
            // KeyboardEvent.key でイベントを処理し、handled を true に設定します。
            handled = true;
        }
        else if (event.keyCode !== undefined) {
            // KeyboardEvent.keyCode でイベントを処理し、handled を true に設定します。
            handled = true;
        }
        if (handled) {
            // イベントが処理された場合、"ダブルアクション" を抑制する
            event.preventDefault();
            console.log("movement");
            if (event.keyCode == 37) {
                cvs.fillStyle = "white";
                cvs.fillRect(0, 0, 1200, 1200);
                xx -= 10;
                console.log("left");
                cvs.drawImage(chara, xx, 270, 50, 50);
                cvs.drawImage(chara, 170, 80, 50, 50);
                draw(100, 100);
                draw(300, 100);
            }
            if (event.keyCode == 39) {
                cvs.fillStyle = "white";
                cvs.fillRect(0, 0, 1200, 1200);
                xx += 10;
                console.log("left");
                cvs.drawImage(chara, xx, 270, 50, 50);
                cvs.drawImage(chara, 170, 80, 50, 50);
                draw(100, 100);
                draw(300, 100);
            }
        }
    }, true);
    /* rectangle */
    cvs.beginPath(); /* 図形を描き始めることを宣言 */
    cvs.moveTo(50 + x, 50 + y); /* 図形の描き始めを移動 */
    cvs.lineTo(150 + x, 50 + y); /* 図形の線の終わりを決める */
    cvs.lineTo(150 + x, 150 + y);
    cvs.lineTo(50 + x, 150 + y);
    cvs.closePath(); /* 描いた線を閉じる */
    cvs.stroke(); /* 描いた図形を線で表示させる */
}
