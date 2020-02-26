let p,b,a, ax, bx;
let width = 420;
let circCenterX = width/2;
let running = false;
function setup(){
	canvasDiv = createDiv();
	canvasDiv.size(width,width);
	canvas = createCanvas(width,width);
	canvas.parent(canvasDiv);
	background(184);

	inputDiv = createDiv();
	inputDiv.size(width,width);

	kp = createElement('label',"p between 0 and 1:").parent(inputDiv);
	createElement('br').parent(inputDiv);
	pInput = createInput();
	pInput.parent(inputDiv);
	createElement('br').parent(inputDiv);

	kp = createElement('label',"b between 0 and 200:").parent(inputDiv);
	createElement('br').parent(inputDiv);
	bInput = createInput();
	bInput.parent(inputDiv);
	createElement('br').parent(inputDiv);

	kp = createElement('label',"a between 0 and 200:").parent(inputDiv);
	createElement('br').parent(inputDiv);
	aInput = createInput();
	aInput.parent(inputDiv);
	createElement('br').parent(inputDiv);

	submitBtn = createButton('Submit');
	submitBtn.parent(inputDiv);
	submitBtn.mousePressed(buttonPressed);
}

function draw(){

	if(running){
		p = pInput.value()
		b = bInput.value()
		a = aInput.value()

		if(random()<p){circCenterX++;}else{circCenterX--;}
		if(circCenterX == bx || circCenterX	 == ax){
			running = false;
			p = 0; a = undefined; b = undefined;
		}
	}
	bx = width/2 - b;
	ax = width/2 + parseInt(a);

	noStroke();
	background(184);
	fill(255,0,0);
	ellipse(circCenterX,height/2 + 10,20,20);
	fill(0);
	rect(bx-10,height/2,10,20);
	rect(ax,height/2,10,20);
}
function buttonPressed(){
	circCenterX = width/2;
	running = true;
}