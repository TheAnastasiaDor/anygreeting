// Event listener for the "Design a Card" button
document.getElementById('designCard').addEventListener('click', function() {
    // Hide the buttons and show the input fields and p5.js canvas container
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('inputFields').style.display = 'block';
    document.getElementById('p5Container').style.display = 'block';
});

// p5.js specific setup and functions
let sliderX, sliderY; // Position of the sliders
let sliderMax; // Maximum position of the slider

function setup() {
    let canvas = createCanvas(800, 400); // Canvas size
    canvas.parent('p5Container'); // Attaching the canvas to the div
    sliderX = sliderY = 100; // Initial slider positions
    sliderMax = width - 100; // Maximum slider position
}

function draw() {
    background(255);
    // Common text properties for questions in the canvas
    textSize(16);
    fill('#228B22'); // Forest green color
    textAlign(CENTER, CENTER);

    // Drawing sliders
    drawSlider(150, "A minute ago", "Within a year", "It's been a century or more", sliderX);
    drawSlider(300, "Two bodies, one soul", "Close enough to send a card", "Strangers would be an improvement", sliderY);
}

function drawSlider(y, leftText, midText, rightText, sliderPos) {
    // Set text size for slider labels
    textSize(12);
    fill(0); // Black color for slider labels

    // Draw slider line
    stroke(0);
    line(100, y, width - 100, y);

    // Draw midpoint line
    stroke(0);
    line(width / 2, y - 10, width / 2, y + 10);

    // Draw slider
    fill(0);
    ellipse(sliderPos, y, 20, 20);

    // Draw texts
    text(leftText, 100, y + 30);
    text(midText, width / 2, y + 30);
    text(rightText, width - 100, y + 30);
}

function mouseDragged() {
    // Check if we're near either slider line
    if (mouseY > 140 && mouseY < 160) {
        sliderX = mouseX;
        sliderX = constrain(sliderX, 100, sliderMax);
    } else if (mouseY > 290 && mouseY < 310) {
        sliderY = mouseX;
        sliderY = constrain(sliderY, 100, sliderMax);
    }
}

// Event listener for the "Submit" button
document.getElementById('submitBtn').addEventListener('click', function() {
    // Hide the input fields and p5.js canvas container
    document.getElementById('inputFields').style.display = 'none';
    document.getElementById('p5Container').style.display = 'none';

    // Create and display the draft image only if it doesn't exist yet
    if (!document.getElementById('draftImg')) {
        var img = document.createElement('img');
        img.id = 'draftImg'; // Assign an ID to the image
        img.src = 'draft.png';
        img.alt = 'Draft Image';
        img.style.display = 'block';
        img.style.margin = 'auto';
        img.style.position = 'absolute';
        img.style.top = '50%';
        img.style.left = '50%';
        img.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(img);
    }
});
