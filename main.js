NoseX=0;
NoseY=0;

function preload(){
clown_nose= loadImage('https://i.postimg.cc/NFbzXWTs/clown-nose-png-12-removebg-preview.png');
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
    image(clown_nose,NoseX,NoseY,30,30);  
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
        NoseX=results[0].pose.nose.x-15;
        NoseY=results[0].pose.nose.y-15;
        console.log("results nose x="+NoseX);
        console.log("results nose y="+NoseY);
    }
}