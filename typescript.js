window.onload = function () {
    draw(100, 100);
    draw(300, 100);
};
var cvs;
var xx = 370, yy = 270;
function draw(x, y) {
    var canvas = document.getElementById('myCanvas');
    // let canvas:HTMLCanvasElement = document.getElementById('rectangle') as HTMLCanvasElement;
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
    // オーディオ要素とキャンバスを取得
    var audioElement = document.getElementById('audio');
    if (audioElement && canvas) {
        // キャンバス内でのクリックをリッスン
        // canvas.addEventListener('click', (event: MouseEvent) => {
        //     const x = event.clientX - canvas.getBoundingClientRect().left;
        //     const y = event.clientY - canvas.getBoundingClientRect().top;
        //     console.log(y)
        //     // 特定の座標で音を再生
        //     if ( y > 200) {
        //         audioElement.play()
        //             .then(() => {
        //                 console.log('音が再生されました');
        //             })
        //             .catch(error => {
        //                 console.error('音の再生中にエラーが発生しました', error);
        //             });
        //     }
        // });
        // オーディオが読み込まれない場合のエラーハンドリング
        audioElement.addEventListener('error', function () {
            console.error('オーディオの読み込み中にエラーが発生しました');
        });
    }
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
                var playerPositionX = xx;
                console.log("left");
                cvs.drawImage(chara, xx, 270, 50, 50);
                cvs.drawImage(chara, 170, 80, 50, 50);
                draw(100, 100);
                draw(300, 100);
            }
            if (event.keyCode == 38) {
                cvs.fillStyle = "white";
                cvs.fillRect(0, 0, 1200, 1200);
                yy -= 10;
                console.log("UP");
                cvs.drawImage(chara, xx, yy, 50, 50);
                cvs.drawImage(chara, 170, 80, 50, 50);
                draw(100, 100);
                draw(300, 100);
            }
            if (event.keyCode == 40) {
                cvs.fillStyle = "white";
                cvs.fillRect(0, 0, 1200, 1200);
                yy += 10;
                console.log("down");
                cvs.drawImage(chara, xx, yy, 50, 50);
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
            console.log(yy);
            // 特定の座標で音を再生
            if (yy < 200) {
                if (audioElement && canvas) {
                    audioElement.addEventListener('error', function () {
                        console.error('オーディオの読み込み中にエラーが発生しました');
                    });
                    audioElement.play()
                        .then(function () {
                        console.log('音が再生されました');
                    })
                        .catch(function (error) {
                        console.error('音の再生中にエラーが発生しました', error);
                    });
                }
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
var Character = /** @class */ (function () {
    function Character(x, y) {
        this.x = x;
        this.y = y;
    }
    Character.prototype.move = function (dx, dy, walls) {
        var new_x = this.x + dx;
        var new_y = this.y + dy;
        // 壁に当たるかどうかの判定
        if (!this.isWallCollision(new_x, new_y, walls)) {
            this.x = new_x;
            this.y = new_y;
            console.log("移動成功");
        }
        else {
            console.log("壁に当たりました");
        }
    };
    Character.prototype.isWallCollision = function (x, y, walls) {
        return walls.some(function (wall) { return wall.x === x && wall.y === y; });
    };
    return Character;
}());
// キャラクターの初期位置
var character = new Character(0, 0);
// 壁の位置
var walls = [{ x: 1, y: 0 }, { x: 2, y: 2 }];
// 移動テスト
character.move(1, 0, walls); // 移動成功
character.move(1, 0, walls); // 壁に当たりました
character.move(0, 1, walls); // 移動成功
character.move(1, 1, walls); // 壁に当たりました
