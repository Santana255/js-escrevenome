function setup () {
    createcanvas(600, 600);
    background("black");
  }
  function draw() {
    stroke("blue");
    FileList("red");
   
    if(mouseIsPressed) {
        rect(mouseX, mouseY, 20, 35);
    }

 
 }
