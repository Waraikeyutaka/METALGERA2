onload = function() { 
  draw(100,100); 
  draw(300,100);
};
var cvs
var xx=370 ,yy=270
function draw(x:number,y:number) {
  var canvas:HTMLCanvasElement = document.getElementById('rectangle') as HTMLCanvasElement;
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  cvs = canvas.getContext('2d');

  if(cvs==null){return}
  const chara1 = new Image();
chara1.src = "./棒人間素材.png";  // 画像のURLを指定
chara1.onload = () => {
  if(cvs==null){return}
  cvs.drawImage(chara, 170, 80,50,50);
};


  if(cvs==null){return}
  const chara = new Image();
chara.src = "./棒人間素材.png";  // 画像のURLを指定
chara.onload = () => {
  if(cvs==null){return}
  cvs.drawImage(chara, 370, 270,50,50);
};

window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // 既定のアクションがキャンセルされている場合は何もしないようにします。
    }

    let handled = false;
    if (event.key !== undefined) {
      // KeyboardEvent.key でイベントを処理し、handled を true に設定します。
      handled = true;
    } else if (event.keyCode !== undefined) {
      // KeyboardEvent.keyCode でイベントを処理し、handled を true に設定します。
      handled = true;
    }

    if (handled) {
      // イベントが処理された場合、"ダブルアクション" を抑制する
      event.preventDefault();
      console.log("movement")
      if(event.keyCode == 37) {
        cvs.fillStyle = "white";
        cvs.fillRect(0, 0, 1200,1200)
       xx-=10
        console.log("left")
        cvs.drawImage(chara, xx, 270,50,50);
        cvs.drawImage(chara, 170, 80,50,50);
        draw(100,100); 
        draw(300,100);
      }

      if(event.keyCode == 38) {
        cvs.fillStyle = "white";
        cvs.fillRect(0, 0, 1200,1200)
       yy-=10 
        console.log("UP")
        cvs.drawImage(chara, xx, yy,50,50);
        cvs.drawImage(chara, 170, 80,50,50);
        draw(100,100); 
        draw(300,100);
      }

      if(event.keyCode == 40) {
        cvs.fillStyle = "white";
        cvs.fillRect(0, 0, 1200,1200)
       yy+=10 
        console.log("down")
        cvs.drawImage(chara, xx, yy,50,50);
        cvs.drawImage(chara, 170, 80,50,50);
        draw(100,100); 
        draw(300,100);
      }


// 効果音のファイルパス
const soundEffectFile: string = 'sound_effect.mp3';

// 音声再生用の要素を取得
const soundElement: HTMLAudioElement | null = document.getElementById('sound') as HTMLAudioElement | null;

// 音声再生をトリガーする領域の要素を取得
const soundTriggerArea: HTMLElement | null = document.getElementById('soundTriggerArea');

// 音声再生関数
function playSound() {
    if (soundElement) {
        soundElement.play().catch((error: Error) => {
            console.error("音声再生中にエラーが発生しました:", error);
        });
    }
}

// 特定の場所がクリックされたときに音声再生関数を呼び出す
if (soundTriggerArea) {
    soundTriggerArea.addEventListener('click', playSound);
}






      
      
      if(event.keyCode == 39) {
        cvs.fillStyle = "white";
        cvs.fillRect(0, 0, 1200,1200)
       xx+=10
        console.log("left")
        cvs.drawImage(chara, xx, 270,50,50);
        cvs.drawImage(chara, 170, 80,50,50);
        draw(100,100); 
        draw(300,100);
      }
    }
  },
  true,
);
  

  /* rectangle */
  cvs.beginPath(); /* 図形を描き始めることを宣言 */
  cvs.moveTo(50+x, 50+y); /* 図形の描き始めを移動 */
  cvs.lineTo(150+x, 50+y); /* 図形の線の終わりを決める */
  cvs.lineTo(150+x, 150+y);
  cvs.lineTo(50+x, 150+y);
  cvs.closePath(); /* 描いた線を閉じる */
  cvs.stroke(); /* 描いた図形を線で表示させる */
}
