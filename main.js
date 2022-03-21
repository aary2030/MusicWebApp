song1 = "";
song2 = "";
currentSongStatus = "";
leftwrist = 0;
leftwristx =0;
leftwristy =0;


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); 
}

function modelLoaded(){
    console.log("Posenet is not as initialized as you want it to be so their might be no function");
}

function preload(){
    song1 = loadSound("candyland.mp3");
    song2 = loadSound("invicible.mp3");
    console.log("song are initialized");
}

function draw(){
    image(video,0,0,600,500);
    
    song1.isPlaying();
    currentSongStatus = song1;
    fill("#FF0000");
    stroke("#FF0000");

    
if(leftwristy > 0.2){
    circle(leftwristx,leftwristy,20);
    song2.stop();
    
    if(song1 = currentSongStatus){
        song1.play();
        document.getElementById("song_name").innerHTML = "Song Name: "+song1;
    }
}
    
}

function gotPoses(results){
    if(results.length > 0 ){
        
        leftWrist = results[0].pose.keypoints[9].score;
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        

    }
}
