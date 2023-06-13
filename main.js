function preload(){
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);    
}

function take_snapshot(){
    save("filterImage.png");
}

function modelLoaded(){
    console.log('poseNet model initiated!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("results nose x="+results[0].pose.nose.x);
        console.log("results nose y="+results[0].pose.nose.y);
    }
}