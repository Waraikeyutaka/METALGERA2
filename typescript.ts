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

    


      function playSoundEffect(soundPath: string) {
        const audio = new Audio(soundPath);
        audio.play();
      }

      // 効果音ファイルのパス
      const soundFilePath1 = "sound1.wav";
      const soundFilePath2 = "sound2.wav";
      
      // 特定の場所で効果音を再生
      function playSoundsAtSpecificLocation() {
        // ここに効果音1の再生タイミングを設定
        setTimeout(() => {
          playSoundEffect(soundFilePath1);
        }, 2000); // 2秒後に再生
      
        // ここに効果音2の再生タイミングを設定
        setTimeout(() => {
          playSoundEffect(soundFilePath2);
        }, 5000); // 5秒後に再生
      }
      
      // 特定の場所で効果音再生関数を呼び出す
      playSoundsAtSpecificLocation(); 



      
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
