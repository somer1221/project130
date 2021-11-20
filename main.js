song_1 = '';
song_2 = '';
leftWrist_X = "";
leftWrist_Y = "";
rightWrist_X = "";
rightWrist_Y = "";
lepic = "";
leftscore = 0;
rightscore = 0
songtrue = "";

function preload() {
    song_1 = loadSound("night running.mp3");
    song_2 = loadSound("dire dire docks but weird.mp3");
}

function setup() {
    canvas = createCanvas(500,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);


    lepic = song_1.isPlaying();

    stroke(0,255,0);
    fill(0,255,0);

    if(leftscore > 0.1) {

        circle(leftWrist_X,leftWrist_Y,20);
        song_2.stop();
        console.log(leftscore);
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333333 also the variable is " + lepic);
        if(lepic != "false") {
            console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO also song 1 is playing");
            song_1.play();
            document.getElementById("thetext").innerHTML = "Song 1 is playing now.";

            
        }
    }

    songtrue = song_2.isPlaying();

    if(rightscore > 0.1) {
        circle(rightWrist_X,rightWrist_Y,20);
        song_1.stop()
          if(songtrue != "false") {
              console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM also song 2 is playing");
              song_2.play();
              document.getElementById("thetext").innerHTML = "Song 2 is playing now."
          }
    }

}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWrist_X = results[0].pose.leftWrist.x;
        leftWrist_Y = results[0].pose.leftWrist.y;
        console.log("The Left wrist X coordinate is: " + leftWrist_X + " The Left wrist Y coordinate is: " + leftWrist_Y);
        rightWrist_X = results[0].pose.rightWrist.x;
        rightWrist_Y = results[0].pose.rightWrist.y;
        console.log("The Right wrist X coordinate is: " + rightWrist_X + " The Right wrist Y coordinate is: " + rightWrist_Y);
        leftscore = results[0].pose.keypoints[9].score;
        rightscore = results[0].pose.keypoints[10].score;
}
}

function modelLoaded() {
    console.log("Model has been loaded!")
}
