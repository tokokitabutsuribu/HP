const cvs=document.querySelector("canvas");
const ctx=cvs.getContext("2d");

const player=Array.from(Array(3),x=>new Image());
const player_walk=[new Image(),new Image()];
const hand_raised_player_walk=[new Image(),new Image()];
const meteor_img=new Image();
const logo=new Image();
const obstacle_img=Array.from(Array(6),x=>new Image());

player[0].src="imgs/players/256×256白黒ドットえねる.png";
player[1].src="imgs/players/えねる死亡.png";
player[2].src="imgs/players/えねる転倒.png";
meteor_img.src="imgs/隕石.png";
logo.src="imgs/ロゴ.png";

player_walk[0].src="imgs/players/えねる歩き1.png";
player_walk[1].src="imgs/players/えねる歩き2.png";
hand_raised_player_walk[0].src="imgs/players/両手上げえねる歩き1.png";
hand_raised_player_walk[1].src="imgs/players/両手上げえねる歩き2.png";

obstacle_img[0].src="imgs/obstacles/オームの呪い(本体).png";
obstacle_img[1].src="imgs/obstacles/シュレディンガーの猫1.png";
obstacle_img[2].src="imgs/obstacles/念動ベクトル.png";
obstacle_img[3].src="imgs/obstacles/ハードル.png";
obstacle_img[4].src="imgs/obstacles/オームの呪い(雷).png";
obstacle_img[5].src="imgs/obstacles/シュレディンガーの猫2.png";

const width=1200;

let speed=1;
let player_y=0;
let player_vy=0;
let jump_time=0;
let score=0;
let highscore=0;
let now_time=0;
let start_time=0;
let last_obstacle_time=0;
let last_meteor_time=0;
let power=0;
let gameover_type=0;
let gameover_time=0;
let obstacles=[];
let meteors=[];
let motion_start_time=-100000;
let motion_start_y=0
let page=0;
function reset(){
    player_y=0;
    player_vy=0;
    jump_time=0;
    score=0;
    last_obstacle_time=0;
    last_meteor_time=0;
    power=0;
    gameover_type=0;
    gameover_time=0;
    obstacles=[];
    meteors=[];
    motion_start_time=-100000;
    ctx.filter="blur(0px)";
}


const meteor_type=[
    "ma=F",
    "V=IR",
    "W=Fx"
];


let condition="stay";
let canJump=true;

document.addEventListener("keydown",e=>{
    if (condition=="stay"&&e.key==" ") {                        //スタート
        condition="play";
        reset();
    }
    if (condition=="play"){                                     //ジャンプ
        if (e.key=="ArrowDown"||e.key=="s"||e.shiftKey) {
            if (player_y!=0) {
                player_vy=-12
            }else{
                canJump=false;
            }
        }
        if (canJump&&e.key==" "||e.key=="ArrowUp"||e.key=="w") {
            if (player_y==0) {
                player_vy=12;
                jump_time=now_time;
            }
        }
    }
    if (condition=="rule"&&e.key==" ") {
        if (page<1) page++;
        else condition="stay";
    }
});
document.addEventListener("keyup",e=>{
    if (condition=="play"){
        if ((e.key=="ArrowDown"||e.key=="s"||e.shiftKey)&&player_y==0) {
            canJump=true;power+=5;
            if (power>100) power=100;
        }
    }
});

cvs.addEventListener("mousedown",e=>{
    const x=e.offsetX;
    const y=e.offsetY;
    if (condition=="play"){
        meteors.forEach((meteor,value)=>{
            const meteor_x=meteor.x0+(meteor.time-now_time)/10;
            const meteor_y=-50+(now_time-meteor.time)/50;
            if (x<meteor_x&&x>meteor_x-meteor.width&&y>meteor_y&&y<meteor_y+meteor.height&&power==100) {
                meteor.broken=true;
                power=0;
                motion_start_time=now_time;
                motion_start_y=player_y;
            }
        });
    }
    if (condition=="stay") {
        if (x<200&&y<50) {page=0;condition="rule";}
    }
});



document.addEventListener("visibilitychange",()=>{                  //ズル防止用（他タブに移動したとき、初期画面に戻る）
    if (document.hidden) {
        condition="stay";
        start_time=0;
    }
});

function power_view(rate){
    ctx.strokeStyle="white"
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(30,30,20,-Math.PI/2,(rate/50-0.5)*Math.PI);
    ctx.lineTo(30,30);
    ctx.fill();
    ctx.fillStyle="white";
    ctx.beginPath()
    ctx.arc(30,30,15,0,Math.PI*2);
    ctx.fill();
    ctx.fillStyle="black";
}

function gameover(type){                                            //死亡～初期画面・スコア適用
    ctx.clearRect(0,0,width,300);
    ctx.moveTo(0,270);
    ctx.lineTo(width,270);
    ctx.stroke();

    //ゲームオーバー後の描画
    obstacles.slice(1).forEach(obstacle=>{
        if (obstacle.type==0||obstacle.type==3) {                   //オーム・ハードル
            ctx.drawImage(obstacle_img[obstacle.type],obstacle.x,200,64,64);
        }else if (obstacle.type==1) {                               //猫
            ctx.drawImage(obstacle_img[[1,5][Math.floor(now_time/200%2)]],obstacle.x,200,64,64);
            ctx.drawImage(obstacle_img[[1,5][1-Math.floor(now_time/200%2)]],obstacle.x+64,200,64,64);
        }else if (obstacle.type==2) {                               //ベクトル
            ctx.drawImage(obstacle_img[2],obstacle.x,100,64,64);
        }
    });

    //ゲームオーバー後のプレイヤーの動き
    if (type==0) {                                                  //オーム
        if (now_time-gameover_time>500&&Math.floor((now_time-gameover_time)/500)%2==1) ctx.drawImage(obstacle_img[4],-28,0,256,256);
        ctx.drawImage(obstacle_img[0],obstacles[0].x*Math.max(0,1-(now_time-gameover_time)/400)+50*Math.min(1,(now_time-gameover_time)/400),Math.max(0,200-(now_time-gameover_time)*0.5),64,64);
        if (now_time-gameover_time>500) ctx.drawImage(player[1],50,200-player_y,64,64);
        else ctx.drawImage(player[0],50,200-player_y,64,64);
    }else if (type==1) {                                            //猫
        ctx.drawImage(obstacle_img[1],obstacles[0].x,200,64,64);
        ctx.drawImage(obstacle_img[5],obstacles[0].x+64,200,64,64);
        obstacles[0].x=width*1.4-(now_time-obstacles[0].time)*0.7*obstacles[0].speed;
        if ((now_time-gameover_time)%100<50) ctx.drawImage(player[0],50,200-player_y,64,64);
        else ctx.drawImage(player[0],55,180-player_y,64,64);
    }else if (type==2) {                                            //ベクトル
        ctx.drawImage(obstacle_img[2],obstacles[0].x,100,64,64);
        ctx.drawImage(player[0],obstacles[0].x,player_y,64,64);
        obstacles[0].x=+width*1.4-(now_time-obstacles[0].time)*0.7*obstacles[0].speed;
    }else if (type==3) {                                            //ハードル
        ctx.drawImage(obstacle_img[3],obstacles[0].x,200,64,64);
        if (now_time-gameover_time<500) ctx.drawImage(player[0],50,200-player_y,64,64);
        else if (now_time-gameover_time<1000) ctx.drawImage(player[1],80,130,64,64);
        else ctx.drawImage(player[2],160,200,64,64);
    }
    obstacles.map((obstacle,n)=>{                                   //移動
        if (n!=0) {
            if (gameover_type==1||gameover_type==2) {               //ゲームオーバー後動くか
                if (obstacle.type==1||obstacle.type==2) obstacle.x=width*1.4-(now_time-obstacle.time)*0.7*obstacle.speed;
                else obstacle.x=width-(now_time-obstacle.time)*0.5*obstacle.speed;
            }
        }
    });


    meteors.forEach(meteor=>{                                       //障害物
        meteor.z=2000+(meteor.time-now_time)/5;
            
        ctx.textAlign="right";
        ctx.textBaseline="top";
        ctx.font=`${Math.floor(8000/meteor.z)}px serif`;
            
        if (meteor.type==0) {
            meteor.width=8000/meteor.z;
        }else{
            meteor.width=ctx.measureText(meteor_type[meteor.type-1]).width;
        }
    
        meteor.height=8000/meteor.z;
    });
    meteors.forEach(meteor=>{                                       //隕石
        if(meteor.z<=0) return 0;
        ctx.textAlign="right";
        ctx.textBaseline="top";
        ctx.font=`${Math.floor(8000/meteor.z)}px serif`;
    
        const x=meteor.x0+(meteor.time-now_time)/10;
        const y=-50+(now_time-meteor.time)/50;
    
        if (meteor.type==0) {
            ctx.drawImage(
                meteor_img,
                x,
                y,
                -8000/meteor.z,
                8000/meteor.z
            );
        }else{
            ctx.fillText(
                meteor_type[meteor.type-1],
                x,
                y
            );
        }
    
        if (meteor.z<=100&&!meteor.broken) {
            gameover_time=now_time;
            gameover_type=4;
            condition="gameover";
        }
    });
    //ぼかす
    if (now_time-gameover_time>2000) ctx.filter=`blur(${Math.floor((now_time-gameover_time-2000)/100)}px)`;
    //戻る
    if (now_time-gameover_time>4000) {
        ctx.filter="blur(0px)";
        condition="stay";
        start_time=0;
    }
    if (gameover_type==4) ctx.clearRect(0,0,width,300);
    ctx.font="20px DotGothic16";
    highscore=Math.max(score,highscore);
    ctx.textAlign="right";
    ctx.textBaseline="alphabetic"
    ctx.fillText(`${score}`,width-10,30);
}

function play(){
    ctx.font="20px DotGothic16";                                  //プレイ中
    ctx.clearRect(0,0,width,300);
    power_view(power);
    ctx.textAlign="right";
    ctx.textBaseline="alphabetic"
    ctx.fillText(`${score}`,width-10,30)
    ctx.moveTo(0,270);
    ctx.lineTo(width,270);
    ctx.stroke();

    //障害物の描画
    obstacles.forEach(obstacle=>{
        if (obstacle.type==0||obstacle.type==3) {                   //オーム・ハードル
            ctx.drawImage(obstacle_img[obstacle.type],obstacle.x,200,64,64);
            if (obstacle.x>30&&obstacle.x<94&&player_y<40) {                    //当たり判定
                gameover_type=obstacle.type;
                gameover_time=now_time;
                condition="gameover";
                return;
            }
        }else if (obstacle.type==1) {                               //猫
            ctx.drawImage(obstacle_img[[1,5][Math.floor(now_time/200%2)]],obstacle.x,200,64,64);
            ctx.drawImage(obstacle_img[[1,5][1-Math.floor(now_time/200%2)]],obstacle.x+64,200,64,64);
            if (obstacle.x>-34&&obstacle.x<94&&player_y<40) {                   //当たり判定
                gameover_type=obstacle.type;
                gameover_time=now_time;
                condition="gameover";
                return;
            }
        }else if (obstacle.type==2) {                               //ベクトル
            ctx.drawImage(obstacle_img[2],obstacle.x,100,64,64);
            if (obstacle.x>18&&obstacle.x<94&&player_y>68&&player_y<132) {      //当たり判定
                gameover_type=obstacle.type;
                gameover_time=now_time;
                condition="gameover";
                return;
            }
        }
    });

    if (now_time-last_obstacle_time>750) {                         //次を生成
        obstacles.push({
            time:now_time,
            x:width,
            type:Math.floor(Math.random()*4),
            speed:speed
        });
        last_obstacle_time=now_time+Math.random()*750;
    }

    obstacles.map(obstacle=>{                                       //移動
        if (obstacle.type==0||obstacle.type==3) obstacle.x=width-(now_time-obstacle.time)*0.5*obstacle.speed;
        else obstacle.x=width*1.4-(now_time-obstacle.time)*0.7*obstacle.speed;
    });
    
    if (score>=2000) {                                              //隕石
        if (now_time-last_meteor_time>=10000) {                     //間隔                 
            last_meteor_time=now_time+Math.random()*5000;
            meteors.push({
                time:now_time,
                x0:width+Math.random()*500-300,
                z:2000,
                type:Math.floor(Math.random()*4),
                width:0,
                height:0,
                broken:false
            });
        }
        meteors.forEach(meteor=>{
            meteor.z=2000+(meteor.time-now_time)/5;
                
            ctx.textAlign="right";
            ctx.textBaseline="top";
            ctx.font=`${Math.floor(8000/meteor.z)}px serif`;
                
            if (meteor.type==0) {
                meteor.width=8000/meteor.z;
            }else{
                meteor.width=ctx.measureText(meteor_type[meteor.type-1]).width;
            }
        
            meteor.height=8000/meteor.z;
        });
        meteors.forEach(meteor=>{
            if(meteor.z<=0) return 0;
            ctx.textAlign="right";
            ctx.textBaseline="top";
            ctx.font=`${Math.floor(8000/meteor.z)}px serif`;
        
            const x=meteor.x0+(meteor.time-now_time)/10;
            const y=-50+(now_time-meteor.time)/50;
            if (meteor.type==0) {
                ctx.drawImage(
                    meteor_img,
                    x,
                    y,
                    -8000/meteor.z,
                    8000/meteor.z
                );
            }else{
                ctx.fillText(
                    meteor_type[meteor.type-1],
                    x,
                    y
                );
            }
        
            if (meteor.z<=100&&!meteor.broken) {
                gameover_time=now_time;
                gameover_type=4;
                condition="gameover";
            }
        });
    }

    ctx.textAlign="center";
    ctx.textBaseline="bottom";
    ctx.font=`bold ${power}px DotGothic16`;
    ctx.fillText("物理",82,130-player_y);
    if (motion_start_time+10000>now_time) {
        ctx.font=`bold 100px DotGothic16`;
        const x=82+now_time-motion_start_time;
        ctx.fillText("物理",x,130-motion_start_y+(now_time-motion_start_time)/10);
        meteors=meteors.filter(meteor=>!meteor.broken||meteor.x0+(meteor.time-now_time)/10>=x);
    }
    //プレイヤーの描画
    if (player_y>0||player_vy>0) {                                  //落下
        player_vy-=0.5;
        player_y+=player_vy;
        ctx.drawImage(player[0],50,200-player_y,64,64);
    }else{
        player_y=0;
        player_vy=0;
        if (canJump) ctx.drawImage(player_walk[Math.floor(now_time/200)%2],50,200-player_y,64,64);
        else ctx.drawImage(hand_raised_player_walk[Math.floor(now_time/200)%2],50,200-player_y,64,64);
    }
    while (obstacles.length>0&&obstacles[0].x<-128) obstacles.shift();
}

function stay(time){                                                //初期画面
    ctx.filter="blur(0px)";
    ctx.font="20px DotGothic16";
    ctx.textBaseline="alphabetic";
    ctx.clearRect(0,0,width,300);
    if (Math.floor(time/200)%10==0) ctx.drawImage(player[0],50,195,64,64);
    else ctx.drawImage(player[0],50,200,64,64);
    let logoXSize=64;
    logoXSize=Math.max(logoXSize,time/2-256);
    ctx.drawImage(logo,0,0,logoXSize,64,width/2-128,100,logoXSize,64);
    ctx.textAlign="center";
    if (time>1500) ctx.fillText("Let's press >>SPACE<< to start game",width/2,200);
    ctx.textAlign="right";
    if (highscore!=0) ctx.fillText(`HIGH SCORE:  ${highscore}`,width-10,30);
    ctx.textAlign="left";
    if (time>1500) ctx.fillText("Rule >>CLICK HERE<<",10,30)
}
function rule(){
    ctx.clearRect(0,0,width,300);
    ctx.font="20px DotGothic16";
    ctx.textAlign="left"
    ctx.textBaseline="middle";
    if (page==0) {
        for (let i = 0;i<4;i++) ctx.drawImage(obstacle_img[i],50,80+50*i,48,48);
        ctx.fillText("右から障害物が出てきます。上矢印キー／Wキー／SPACEキーでジャンプしてよけましょう。",50,30);
        ctx.fillText("空中で下矢印キー／Sキー／SHIFTキーを押すことでそのまま落下もできます。",50,50);
        ctx.fillText("オームの呪い",120,104);                  ctx.fillText("電気抵抗の単位Ωの形状をしており、雷のようなものを発生させ対象をしびれさせる。",400,104,width-420);
        ctx.fillText("シュレディンガーの猫",120,154);           ctx.fillText("量子力学の思考実験における猫。なぜか両方生きている。相手の状態を確率的にする。",400,154,width-420);
        ctx.fillText("念動ベクトル",120,204);                  ctx.fillText("ただの矢印の見た目をしている。超能力「念動力」で働くとされる力を表す。物理学には実際にはない。",400,204,width-420);
        ctx.fillText("ハードル",120,254);                      ctx.fillText("正真正銘ただのハードル。physicalなだけ。",400,254,width-420);
        ctx.textAlign="right";
        ctx.fillText("Next >>SPACE<<",width-10,30)
    } else if (page==1) {
        ctx.drawImage(meteor_img,50,80,48,48);
        ctx.fillText("時間がたつと隕石が降ってきます。地面についた状態で下矢印キー／Sキー／SHIFTキーでゲージをためてから",50,30)
        ctx.fillText("隕石をクリックして破壊しましょう。ゲージは左上に表示されます。",50,50);
        ctx.fillText("隕石",150,104);                         ctx.fillText("通常の隕石。他にも、物理公式の形状をしたものがある。小さいほうが当てにくい。",400,104,width-420);
        ctx.fillText("物理（論理）",150,170);                  ctx.fillText("物理部に伝わる、物理法則を破壊する力を持った「物理（物理）」がコンピューター内に入った状態。",400,160,width-420);ctx.fillText("物理（物理）より劣るが、隕石を破壊することができるだけのエネルギーを持つ。",400,180,width-420);
        ctx.fillText("進んだ距離がスコアです。高スコアを目指して頑張ってください。",50,240);
        ctx.textAlign="right";
        ctx.fillText("Exit >>SPACE<<",width-10,30)
        ctx.textAlign="left";
        ctx.font="bold 50px DotGothic16";
        ctx.fillText("物理",20,170);
    }
}
function drawFrame(time){                                           //ループ・画面移動
    if (condition=="stay") stay(time);
    else if (condition=="play") {
        if (start_time==0) {
            start_time=time;
            reset();
        }
        now_time=time-start_time;
        score=Math.floor(Math.pow(now_time,1.1)/100);
        speed=Math.floor(now_time/10000)/20+0.8;
        play();
    }else if (condition=="gameover") {
        now_time=time-start_time;
        gameover(gameover_type);
    }else if (condition=="rule") {rule();}
    requestAnimationFrame(drawFrame);
}
drawFrame();