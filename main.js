difference = "";
Xaxis = 140;
Yaxis = 140;
function preload(){

}
function setup(){
    canvas = createCanvas(530,400);
    canvas.position(725,250);

    video = createCapture(VIDEO);
    video.size(530,400);
    video.position(100,250);
    
    poseNets = ml5.poseNet(video,loaded);
    poseNets.on('pose',results);
}
function results(result){
    console.log(result);
    if(result.length>0){
        leftX = result[0].pose.leftWrist.x;
        rightX = result[0].pose.rightWrist.x;

        difference = Math.round(leftX - rightX);
    }
}
function loaded(){
    console.log("pose net loaded!!");
}
function draw(){
    background("#ffffff");
    document.getElementById("distance").innerHTML = "The size of the text is "+difference+"px";
    textSize(difference);
    textFont(document.getElementById("fonts").value);
    fill(document.getElementById("color").value);
    stroke(document.getElementById("color").value);
    text(document.getElementById("texts").value,Xaxis,Yaxis);
}