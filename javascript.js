var Title = new Image();
Title.src = "resources/Title.PNG";

var airplane = new Image();
airplane.src = "resources/airplane.jpg";
var beach = new Image();
beach.src = "resources/beach.jpg";
var beachball = new Image();
beachball.src = "resources/beachball.png";
var beachchair = new Image();
beachchair.src = "resources/beachchair.png";
var dolphin = new Image();
dolphin.src = "resources/dolphin.png";
var floaty = new Image();
floaty.src = "resources/floaty.png";
var sailboat = new Image();
sailboat.src = "resources/sailboat.png";
var soccerball = new Image();
soccerball.src = "resources/soccerball.png";
var speedboat = new Image();
speedboat.src = "resources/speedboat.png";
var towel = new Image();
towel.src = "resources/towel.png";
var umbrella = new Image();
umbrella.src = "resources/umbrella.png";

var blueflower = new Image();
blueflower.src = "resources/blueflower.png";
var dog = new Image();
dog.src = "resources/dog.jpg";
var doghouse = new Image();
doghouse.src = "resources/doghouse.png";
var garden = new Image();
garden.src = "resources/garden.jpg";
var gloves = new Image();
gloves.src = "resources/gloves.png";
var pinkpottedflower = new Image();
pinkpottedflower.src = "resources/pinkpottedflower.png";
var pottedflowers = new Image();
pottedflowers.src = "resources/pottedflowers.png";
var sunflowers = new Image();
sunflowers.src = "resources/sunflowers.png";
var tree = new Image();
tree.src = "resources/tree.png";
var wateringcan = new Image();
wateringcan.src = "resources/wateringcan.png";
var wheelbarrow = new Image();
wheelbarrow.src = "resources/wheelbarrow.png";

var bluefish = new Image();
bluefish.src = "resources/bluefish.png";
var jellyfish = new Image();
jellyfish.src = "resources/jellyfish.png";
var mantaray = new Image();
mantaray.src = "resources/mantaray.jpg";
var seahorse = new Image();
seahorse.src = "resources/seahorse.png";
var seaturtle = new Image();
seaturtle.src = "resources/seaturtle.png";
var starfish = new Image();
starfish.src = "resources/starfish.png";
var submarine = new Image();
submarine.src = "resources/submarine.png";
var underwater = new Image();
underwater.src = "resources/underwater.png";
var whale = new Image();
whale.src = "resources/whale.png";





function initialize() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(Title,0,0,600,600);
}
// var createImage = function(src, title,xcoord,ycoord,mover) {
//     var img   = new Image();
//     img.src   = src;
//     img.alt   = title;
//     img.title = title;
//     img.left = xcoord;
//     img.top = ycoord;
//     img.move = mover;
//     return img;
// };
function Beach(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,600,600);
    ctx.drawImage(beach,0,0,600,450);
    ctx.drawImage(sailboat,60,265,47,41);
    ctx.drawImage(speedboat,30,330,66,25);
    ctx.drawImage(beachball,525,375,30,29);
    ctx.drawImage(towel,390,415,60,22);
    ctx.drawImage(umbrella,415,375,64,58);
    ctx.drawImage(dolphin,265,265,30,30);
    ctx.drawImage(floaty,250,350,42,26);
    ctx.drawImage(airplane,50,50,71,35);
    ctx.drawImage(beachchair,430,410,30,35);
    ctx.drawImage(soccerball,299,422,15,15);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Find These Items:",0,473);
    playBeach();
}
function Garden(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,600,600);
    ctx.drawImage(garden,0,0,600,450);
    ctx.drawImage(tree,225,55,273,300);
    ctx.drawImage(blueflower,150,265,16,32);
    ctx.drawImage(dog,470,355,125,91);
    ctx.drawImage(doghouse,450,250,132,120);
    ctx.drawImage(gloves,25,420,38,30);
    ctx.drawImage(pinkpottedflower,70,320,63,120);
    ctx.drawImage(pottedflowers,180,235,67,80);
    ctx.drawImage(sunflowers,490,130,44,60);
    ctx.drawImage(wateringcan,70,260,69,57);
    ctx.drawImage(wheelbarrow,130,300,136,68);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Find These Items:",0,473);
    playGarden();
}
function Underwater(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0,600,600);
    ctx.drawImage(underwater,0,0,600,450);
    ctx.drawImage(bluefish,350,285,95,47);
    ctx.drawImage(seahorse,550,350,30,55);
    ctx.drawImage(starfish,225,425,38,20);
    ctx.drawImage(submarine,60,80,120,120);
    ctx.drawImage(whale,325,30,240,136);
    ctx.drawImage(jellyfish,500,300,60,46);
    ctx.drawImage(seaturtle,125,225,96,72);
    ctx.drawImage(mantaray,250,400,90,36);
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Find These Items:",0,473);
    playUnderwater();
}

function playBeach(){
    var beachitems = ["airplane" , "beachball" , "beachchair" , "dolphin" , "floaty" , "sailboat" , "soccerball" , "speedboat" , "towel" , "umbrella" ];
    var gameitems = [];
    for (i=0 ; i<6 ; i++ ){
        var bnum = Math.floor(Math.random() * beachitems.length);
        gameitems.add(bnum);
        beachitems.remove(beachitems[bnum]);
    }
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(gameitems[0],0,500);

}
function playGarden(){
    var gardenitems = ["blue flower" , "dog" , "doghouse" , "gloves" , "pink flowers" , "blue potted flowers" , "sunflowers" , "tree" , "waateringcan" , "wheelbarrow"];
    var gameitems = [];
    for (i=0 ; i<6 ; i++ ){
        var bnum = Math.floor(Math.random() * gardenitems.length);
        gameitems.add(bnum);
        gardenitems.remove(gardenitems[bnum]);
    }
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(gameitems[0],0,500);

}
function playUnderwater(){
    var bedroomitems = ["blue flower" , "dog" , "doghouse" , "gloves" , "pink flowers" , "blue potted flowers" , "sunflowers" , "tree" , "waateringcan" , "wheelbarrow"];
    var gameitems = [];
    for (i=0 ; i<6 ; i++ ){
        var bnum = Math.floor(Math.random() * bedroomitems.length);
        gameitems.add(bnum);
        bedroomitems.remove(bedroomitems[bnum]);
    }
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText(gameitems[0],0,500);

}
