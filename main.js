video = "";
function Start() {
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function setup() {
canvas = createCanvas(480, 380);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
video = "";
function preload() {
video = createVideo('video.mp4');
video.hide();
}
function draw() {
image(video, 0, 0, 500, 450);
}
function modelLoaded() {
console.log("Model Loaded");
}
function gotResult(error ,results) {
if (error) {
console.log(error);
}
console.log(results);
objects = results;
}