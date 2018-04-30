var Title = new Image();
Title.src = "resources/Title.PNG";
var checkmark = new Image();
checkmark.src = "resources/checkmark.png";

function addImage(src, x,y, width, height){
    var image = new Image();
    image.src = src;
    return {
        image: image,
        x:x,
        y:y,
        width:width,
        height:height
    }
}

var beach = new Image();
beach.src = "resources/beach.jpg";
var beachImages = [
    addImage("resources/sailboat.png",60,265,47,41),
    addImage("resources/speedboat.png",30,330,66,25),
    addImage("resources/beachball.png",525,375,30,29),
    addImage("resources/towel.png",390,415,60,22),
    addImage("resources/umbrella.png",415,375,64,58),
    addImage("resources/dolphin.png",265,265,30,30),
    addImage("resources/floaty.png",250,350,42,26),
    addImage("resources/airplane.jpg",50,50,71,35),
    addImage("resources/beachchair.png",430,410,30,35),
    addImage("resources/soccerball.png",299,422,15,15)
];

var garden = new Image();
garden.src = "resources/garden.jpg";
var gardenImages = [
    addImage("resources/tree.png",225,55,273,300),
    addImage("resources/blueflower.png",150,265,16,32),
    addImage("resources/dog.jpg",470,355,125,91),
    addImage("resources/doghouse.png",450,250,132,120),
    addImage("resources/gloves.png",25,420,38,30),
    addImage("resources/pinkpottedflower.png",70,320,63,120),
    addImage("resources/pottedflowers.png",180,235,67,80),
    addImage("resources/sunflowers.png",490,130,44,60),
    addImage("resources/wateringcan.png",70,260,69,57),
    addImage("resources/wheelbarrow.png",130,300,136,68)

];

var underwater = new Image();
underwater.src = "resources/underwater.png";
var underwaterImages = [
    addImage("resources/seaweed.png",250,375,90,60),
    addImage("resources/bluefish.png",350,285,95,47),
    addImage("resources/seahorse.png",550,350,30,55),
    addImage("resources/starfish.png",225,425,38,20),
    addImage("resources/submarine.png",60,80,120,120),
    addImage("resources/whale.png",325,30,240,136),
    addImage("resources/jellyfish.png",500,300,60,46),
    addImage("resources/seaturtle.png",125,225,96,72),
    addImage("resources/shell.png",175,375,60,37),
    addImage("resources/angelfish.png",275,200,60,84)
];

var gameItems =[];

function drawCanvasItems(allItems){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    for(i=0;i<allItems.length;i++){
        var img = allItems[i];
        var image = img.image;
        ctx.drawImage(image, img.x, img.y, img.width, img.height);
    }
}
var selectedCanvas = 'none';

function imageClicked(evt){
    var whichItemClicked = detectItemClicked(evt.clientX, evt.clientY);

    if(whichItemClicked!=null){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        // alert("You clicked: " + whichItemClicked.image.src + " at: " + evt.clientX + "," + evt.clientY);
        ctx.drawImage(checkmark,whichItemClicked.searchX+(whichItemClicked.searchWidth-15)/2,512, 30 , 36);
    }
}
function detectItemClicked(x, y) {
    if (selectedCanvas === 'none') {
        return null;
    }
    else {
        for (i = 0; i < gameItems.length; i++) {
            var gameItem = gameItems[i];
            if ((gameItem.x <= x) && (x <= (gameItem.x + gameItem.width))
                && (gameItem.y <= y) && (y <= (gameItem.y + gameItem.height))) {
                return gameItem;
            }
        }
        return null;
    }
}

function initialize() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(Title,0,0,600,600);
    document.getElementById("myCanvas").addEventListener('click', imageClicked,false);
}

function Beach(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,600,600);
    ctx.drawImage(beach,0,0,600,450);

    selectedCanvas = 'beach';

    drawCanvasItems(beachImages);
    drawSearchItems(beachImages);
}
function Garden(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,600,600);
    ctx.drawImage(garden,0,0,600,450);

    selectedCanvas = 'garden';

    drawCanvasItems(gardenImages);
    drawSearchItems(gardenImages);
}
function Underwater(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,600,600);

    selectedCanvas = 'underwater';

    ctx.drawImage(underwater,0,0,600,450);
    drawCanvasItems(underwaterImages);
    drawSearchItems(underwaterImages);
}

function drawSearchItems(allItems){
    allItems.forEach(function(item){item.selected = false});//reset from previous game

    gameItems = pickGameItems(allItems);
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Find These Items:",0,473);
    var left = 10;
    for(i=0;i<gameItems.length;i++) {
        var image = gameItems[i].image;
        var proportions = image.height/image.width;
        var width = 60/proportions;
        ctx.drawImage(image,left, 500, width, 60);
        gameItems[i].searchX = left;
        gameItems[i].searchWidth = width;
        left+= width+10;
    }
}
function pickGameItems(allItems) {
    var gameItems = [];
    for (i = 0; i < 5; i++) {
        var chooseItems = allItems.filter(function(item){return item.selected!==true});
        var bnum = Math.floor(Math.random() * chooseItems.length);
        gameItems.push(chooseItems[bnum]);
        chooseItems[bnum].selected = true;
    }
    return gameItems;
}
