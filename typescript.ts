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

    
    const audioElement = document.getElementById("myAudio") as HTMLAudioElement;

function playSound() {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.currentTime = 0;
  }
}

// 特定の場所で音を鳴らすトリガー例（クリック時）
const triggerElement = document.getElementById("triggerElement");

if (triggerElement) {
  triggerElement.addEventListener("click", playSound);
}


      const character = document.getElementById("character") as HTMLElement;
      let characterX: number = 0;
      let characterY: number = 0;
      let characterSpeed: number = 5;
      
      document.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
          characterX += characterSpeed;
        } else if (event.key === "ArrowLeft") {
          characterX -= characterSpeed;
        } else if (event.key === "ArrowUp") {
          characterY -= characterSpeed;
          
        } else if (event.key === "ArrowDown") {
          characterY += characterSpeed;
        }
      
        updateCharacterPosition();
      });
      
      function updateCharacterPosition() {
        character.style.transform = `translate(${characterX}px, ${characterY}px)`;
      }
      
      // ゲームループまたはアニメーションフレームを使用してゲームロジックを実行
      function gameLoop() {
        // ここでゲームの更新処理を追加
        requestAnimationFrame(gameLoop);
      }
      
      // ゲームループを開始
      gameLoop();




      

      
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
