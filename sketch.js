function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent(document.querySelector(".sketch"));
  noStroke();
}

function draw() {
  background(17, 17, 17);
  fill(random(100,255), random(100,255), random(100,255));
  circle(random(width), random(height), random(10, 40));
}
