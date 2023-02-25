bones = "";
believer = "";

function preload() {
    bones = loadSound("bones.mp3");
    believer = loadSound("believer.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}