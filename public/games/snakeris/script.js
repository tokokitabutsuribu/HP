const width=10;
const height=20;
const size=30;
const el=(e)=>document.getElementById(e);
const board=el("board").getContext("2d");
board.font="20px sanserif";
board.textAlign="center";

const gameOverImg=new Image();
gameOverImg.src="img/game_over.png";
const appleImg=new Image();
appleImg.src="img/apple.png";
let gameStop=true;

let highScore=0;
let score=0;
let line=0;
let level=1;

let dx=[0,0,1,-1]; let dy=[1,-1,0,0]
let direction=0;    // 0: 下    1: 上    2: 右    3: 左
let way=[];
let box=[];         // 0: 空欄    1:  ヘビの死骸    2: りんご


let apple=0;

function dataUpdate(){
    el("score").textContent=score;
    el("line").textContent=line;
    el("level").textContent=level;
}



function boxReset(){
    box=Array.from(Array(height+3),()=>Array(width).fill(0));
    apple=0;
    score=0;
    line=0;
    level=1;
}

function wayReset(){
    way=[
        {x:width/2, y:0},
        {x:width/2, y:1},
        {x:width/2, y:2}
    ];
    direction=0;
    move();
    draw();
}



function listToMap(list) {
    let listMap=Array.from(Array(height+3),()=>Array(width).fill(0));
    list.forEach(pos => {listMap[pos.y][pos.x]=1;});
    return listMap;
}

function setApple() {
    let wayMap=listToMap(way);
    let empty=[];
    for (let i=3;i<height+3;i++) {
        for (let j=0;j<width;j++) {
            if(box[i][j]==0&&wayMap[i][j]==0) empty.push({x:j,y:i});
        }
    }
    let newApple=empty[Math.floor(Math.random()*empty.length)];
    box[newApple.y][newApple.x]=2;
    apple++;
}



function draw(){
    board.clearRect(0,0,300,600);
    box.forEach((row,y)=>{row.forEach((block,x)=>{
        if(block==1){
            board.fillStyle = "gray";
            board.fillRect(x*size,(y-3)*size,size,size);
        }else if(block==2){
            board.drawImage(appleImg,x*size,(y-3)*size,size,size*8/7);
        }
    })});
    board.fillStyle = "green";
    way.forEach(block=>{
        board.fillRect(block.x*size,(block.y-3)*size,size,size);
    });
    board.fillStyle="white";
}



function clearLine(){
    let newBox=[];
    let count=0;
    for (let i=0;i<box.length;i++) {
        if (box[i].includes(0)||box[i].includes(2)) newBox.push(box[i]);
        else count++;
    }
    while (newBox.length<height+3) {
        newBox.unshift(Array(width).fill(0));
    }
    box=newBox;
    line+=count;
    score+=level*(count*2-1)*10*(count>0);
    level=Math.floor(line/5)+1;
}

function merge(){
    way.forEach(pos=>{
        box[pos.y][pos.x]=1;
    });
    clearLine();
    if(box[3][width/2]==1){
        gameStop=true;
        return;
    }
    wayReset();
}

function drop(){
    while (true) {
        let newPos=[];
        for (let i=0;i<way.length;i++) {
            newPos.push({x: way[i].x, y: way[i].y+1});
            if (way[i].y-1>height||box[way[i].y+1][way[i].x]==1) {
                merge();
                return 0;
            }
        }
        way=newPos;
        newPos.forEach(pos=>{
            if(box[pos.y][pos.x]==2){
                apple--;
                box[pos.y][pos.x]=0;
            }
        });
    }
}

function move(){
    let nextPos={
        x: way[way.length-1].x+dx[direction],
        y: way[way.length-1].y+dy[direction]
    }
    let wayMap=listToMap(way);
    if (nextPos.x<0||nextPos.x>=width||nextPos.y<3||nextPos.y>height+2||box[nextPos.y][nextPos.x]==1||wayMap[nextPos.y][nextPos.x]==1) {
        drop();
        return;
    }
    if(box[nextPos.y][nextPos.x]==0){
        way.shift();
    }else{
        box[nextPos.y][nextPos.x]=0;
        score+=level*10;
        apple--;
    }
    way.push(nextPos);
    dataUpdate();
}


let moved=false;
document.addEventListener("keydown",(e)=>{
    firstBody=way[way.length-1];
    secondBody=way[way.length-2];
    if(gameStop){
        if(e.key==" "){
            gameStop=false;
            lastTime=0;
            boxReset();
            wayReset();
            requestAnimationFrame(update);
        };
    }else{
        if(e.key=="ArrowDown"&&firstBody.y-secondBody.y==0) {direction=0;moved=true;}                   //moved: 動かした後すぐ移動するためのもの
        else if(e.key=="ArrowUp"&&firstBody.y-secondBody.y==0) {direction=1;moved=true;}
        else if(e.key=="ArrowRight"&&firstBody.x-secondBody.x==0) {direction=2;moved=true;}
        else if(e.key=="ArrowLeft"&&firstBody.x-secondBody.x==0) {direction=3;moved=true;}
    }
});

let lastTime=0;
function update(time=0) {
    if(time-lastTime>=3000/(level+9)||moved) {                                                          //moved: 上で動いた後に次動くまでの時間をリセットするためにいれてる
        lastTime=time;
        moved=false;
        move();
        if(Math.random()*20<1||apple<=0) setApple();
        draw();
    }
    dataUpdate();
    if(gameStop){
        board.drawImage(gameOverImg,0,50,300,300);
        board.fillStyle="black";

        board.fillText("SpaceKey to restart",150,400);
        let updated=false;
        if(highScore<score){
            highScore=score;
            updated=true;
        }
        board.strokeStyle="darkblue";
        board.fillStyle="red";
        board.strokeText(`HighScore:${highScore}`,150,430);
        if(updated)board.fillText("updated!",200,460);
    }
    else requestAnimationFrame(update);
}

board.font="50px sanserif";
board.strokeStyle="darkgreen";
board.strokeText("SNAKERIS",150,200);

board.font="20px sanserif";
board.fillStyle="black";
board.fillText("SpaceKey to start",150,400);

/*
boxReset();
wayReset();
for (let i=7;i<height+3;i++)box[i].fill(1);
setApple();
drop();
draw();
clearLine();

dataUpdate();
*/
//alert(box);
//alert(way.map(pos=>`${pos.x}-${pos.y}`));
