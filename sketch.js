let background; // background image 
let line1;
let line2;
let line3;
let line4;
let wave;
let albums;
let song;

// if image clicked
let clicked_line1 = false;
let clicked_line2 = false;
let clicked_line3 = false;
let clicked_line4 = false;
let clicked_central = false;

function preload() {
  background = loadImage('background_画板 1.jpg');
  line1 = loadImage('III 2013.png');
  line2 = loadImage('sun transmission 2014.png');
  line3 = loadImage('underwater pipe dreams 2017.png');
  line4 = loadImage('apoptosis 2021.png');
  wave = loadImage('wave.png');
  albums = loadImage('albums.png');
  song = loadSound('X2Convert.cc - American Spirits - Inner Wave (III) (128 kbps).mp3')
}

function setup() {
  createCanvas(1536, 2048);

  // set up for dim
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(2.6);
  song.play();
  song.setVolume(0.3);
}
  
function draw() {
  image(background, 0, 0);
  background.resize(width, height);
  image(albums, 317, 617)
  albums.resize(902, 646)

  if (!clicked_line1) {
    image(line1, 83, 1550, 540, 76);
  }
  if (!clicked_line2) {
    image(line2, 99, 1650, 510, 76);
  }
  if (!clicked_line3) {
    image(line3, 90, 1750, 510, 110);
  }
  if (!clicked_line4) {
    image(line4, 92, 1862, 514, 80);
  }
  if (!clicked_central) {
    image(wave, 317, 617, 902, 646);
  }
  
  // draw gradient (put x, y, radius here)
  drawGradient(1350, 500, 130);
  drawGradient(800, 375, 90);
  // one line draws one 
  drawGradient(170, 900, 85);
  drawGradient(1400, 1100, 80);
  drawGradient(900, 1570, 170);


  
}

function mouseClicked() {
  if ((!clicked_line1) && mouseX >= 83 && mouseX <= 83 + 540 && mouseY >= 1550 && mouseY <= 1550 + 76) {
    clicked_line1 = true;
    console.log('true');
  } else if (clicked_line1 && mouseX >= 83 && mouseX <= 83 + 540 && mouseY >= 1550 && mouseY <= 1550 + 76) {
    clicked_line1 = false;
    console.log('false');
  }

  if ((!clicked_line2) && mouseX >= 99 && mouseX <= 99 + 510 && mouseY >= 1650 && mouseY <= 1650 + 76) {
    clicked_line2 = true;
    console.log('true');
  } else if (clicked_line2 && mouseX >= 99 && mouseX <= 99 + 510 && mouseY >= 1650 && mouseY <= 1650 + 76) {
    clicked_line2 = false;
    console.log('false');
  }

  if ((!clicked_line3) && mouseX >= 90 && mouseX <= 90 + 510 && mouseY >= 1750 && mouseY <= 1750 + 110) {
    clicked_line3 = true;
    console.log('true');
  } else if (clicked_line3 && mouseX >= 90 && mouseX <= 90 + 510 && mouseY >= 1750 && mouseY <= 1750 + 110) {
    clicked_line3 = false;
    console.log('false');
  }

  if ((!clicked_line4) && mouseX >= 92 && mouseX <= 92 + 514 && mouseY >= 1862 && mouseY <= 1862 + 92) {
    clicked_line4 = true;
    console.log('true');
  } else if (clicked_line4 && mouseX >= 92 && mouseX <= 92 + 514 && mouseY >= 1862 && mouseY <= 1862 + 92) {
    clicked_line4 = false;
    console.log('false');
  }

  if ((!clicked_central) && mouseX >= 317 && mouseX <= 317 + 902 && mouseY >= 617 && mouseY <= 617 + 646) {
    clicked_central = true;
    console.log('true');
  } else if (clicked_central && mouseX >= 317 && mouseX <= 317 + 902 && mouseY >= 617 && mouseY <= 617 + 646) {
    clicked_central = false;
    console.log('false');
  }
}

function drawGradient(x, y, radius) {
  let h = random(0, 360); // variable about coor
  for (let r = radius; r > 0; --r) {
    fill(h, 80, 87);
    ellipse(x, y, r, r); // you can even change the shape here to be not ellipse (e..g be other shape)
    h = (1*h + 0.5) % 360;
  }
}