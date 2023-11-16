song="";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
webcam=createCapture(VIDEO);
webcam.hide()
poseNet=ml5.poseNet(webcam,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(webcam,0,0,600,500);

}

function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(2);
}

function modelLoaded(){
    console.log("poseNet is initiallized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristY=results[0].pose.leftWrist.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftWristX= "+leftWristX);
        console.log("leftWristY= "+leftWristY);
        console.log("rightWristX= "+rightWristX);
        console.log("rightWristY= "+rightWristY);
    }
}

