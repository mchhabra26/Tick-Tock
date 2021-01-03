var hr, mn, sc

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)

  
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();
  
  sa=map(sc,0,60,0,360)
  ma=map(mn,0,60,0,360)
  ha=map(hr%12,0,12,0,360)

  push()
  rotate(sa)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(ma)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(ha)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  stroke(255,0,255)
  point(0,0)
  strokeWeight(10)
  noFill()

  stroke(255,0,0)
  arc(0,0,300,300,0,sa)

  stroke(0,255,0)
  arc(0,0,280,280,0,ma)

  stroke(0,0,255)
  arc(0,0,260,260,0,ha)









 
}