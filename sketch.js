let hearts = []; // Array to store star positions, velocities, and colors
let portfolioDropdown; // Dropdown menu for "作品集"
let notesDropdown; // Dropdown menu for "筆記"
let introBoxVisible = false; // Track visibility of the introduction box
let iframe; // Declare iframe globally

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Initial position and spacing
  let xPosition = 10; // Starting x position
  const spacing = 150; // Fixed spacing between most buttons
  const closerSpacing = 100; // Reduced spacing for "筆記" and "測驗卷"
  const portfolioToNotesSpacing = 120; // Reduced spacing between "作品集" and "筆記"

  // Create buttons
  let introButton = createButton('自我介紹');
  introButton.position(xPosition, 10);
  introButton.style('background-color', '#cdb4db'); // Updated color
  introButton.style('font-size', '20px');
  introButton.style('padding', '10px 20px');

  // Show introduction box when "自我介紹" button is clicked
  introButton.mousePressed(() => {
    introBoxVisible = !introBoxVisible; // Toggle visibility
  });

  xPosition += spacing; // Update x position for the next button

  // Create "作品集" button
  let portfolioButton = createButton('作品集');
  portfolioButton.position(xPosition, 10);
  portfolioButton.style('background-color', '#cdb4db'); // Updated color
  portfolioButton.style('font-size', '20px');
  portfolioButton.style('padding', '10px 20px');

  // Create sub-buttons for "作品集"
  let portfolioOption1 = createButton('作品一');
  portfolioOption1.position(xPosition, 50); // Position below "作品集"
  portfolioOption1.style('background-color', '#cdb4db');
  portfolioOption1.style('font-size', '16px');
  portfolioOption1.style('padding', '5px 10px');
  portfolioOption1.hide(); // Hide initially

  let portfolioOption2 = createButton('作品二');
  portfolioOption2.position(xPosition, 90); // Position below "作品一"
  portfolioOption2.style('background-color', '#cdb4db');
  portfolioOption2.style('font-size', '16px');
  portfolioOption2.style('padding', '5px 10px');
  portfolioOption2.hide(); // Hide initially

  let portfolioOption3 = createButton('作品三');
  portfolioOption3.position(xPosition, 130); // Position below "作品二"
  portfolioOption3.style('background-color', '#cdb4db');
  portfolioOption3.style('font-size', '16px');
  portfolioOption3.style('padding', '5px 10px');
  portfolioOption3.hide(); // Hide initially

  // Show sub-buttons when mouse is over the "作品集" button
  portfolioButton.mouseOver(() => {
    portfolioOption1.show();
    portfolioOption2.show();
    portfolioOption3.show();
  });

  // Keep sub-buttons visible when mouse is over them
  portfolioOption1.mouseOver(() => {
    portfolioOption1.show();
    portfolioOption2.show();
    portfolioOption3.show();
  });
  portfolioOption2.mouseOver(() => {
    portfolioOption1.show();
    portfolioOption2.show();
    portfolioOption3.show();
  });
  portfolioOption3.mouseOver(() => {
    portfolioOption1.show();
    portfolioOption2.show();
    portfolioOption3.show();
  });

  // Hide sub-buttons when mouse leaves both the "作品集" button and sub-buttons
  portfolioButton.mouseOut(() => {
    setTimeout(() => {
      if (!portfolioOption1.elt.matches(':hover') &&
          !portfolioOption2.elt.matches(':hover') &&
          !portfolioOption3.elt.matches(':hover')) {
        portfolioOption1.hide();
        portfolioOption2.hide();
        portfolioOption3.hide();
      }
    }, 200); // Add a small delay to prevent flickering
  });

  portfolioOption1.mouseOut(() => {
    setTimeout(() => {
      if (!portfolioButton.elt.matches(':hover') &&
          !portfolioOption2.elt.matches(':hover') &&
          !portfolioOption3.elt.matches(':hover')) {
        portfolioOption1.hide();
        portfolioOption2.hide();
        portfolioOption3.hide();
      }
    }, 200);
  });
  portfolioOption2.mouseOut(() => {
    setTimeout(() => {
      if (!portfolioButton.elt.matches(':hover') &&
          !portfolioOption1.elt.matches(':hover') &&
          !portfolioOption3.elt.matches(':hover')) {
        portfolioOption1.hide();
        portfolioOption2.hide();
        portfolioOption3.hide();
      }
    }, 200);
  });
  portfolioOption3.mouseOut(() => {
    setTimeout(() => {
      if (!portfolioButton.elt.matches(':hover') &&
          !portfolioOption1.elt.matches(':hover') &&
          !portfolioOption2.elt.matches(':hover')) {
        portfolioOption1.hide();
        portfolioOption2.hide();
        portfolioOption3.hide();
      }
    }, 200);
  });

  // Add functionality to sub-buttons
  portfolioOption1.mousePressed(() => {
    iframe.attribute('src', 'https://stingray114.github.io/20250303-5/');
    iframe.show();
  });

  portfolioOption2.mousePressed(() => {
    iframe.attribute('src', 'https://stingray114.github.io/20250317-1/');
    iframe.show();
  });

  portfolioOption3.mousePressed(() => {
    iframe.attribute('src', 'https://stingray114.github.io/20250324/');
    iframe.show();
  });

  // Create iframe for displaying content
  iframe = createElement('iframe');
  updateIframePositionAndSize(); // Set initial position and size
  iframe.hide(); // Hide initially

  // Update iframe position and size when window is resized
  windowResized();

  xPosition += portfolioToNotesSpacing; // Use reduced spacing for the next button

  // Create "筆記" button
  let notesButton = createButton('筆記');
  notesButton.position(xPosition, 10);
  notesButton.style('background-color', '#cdb4db'); // Updated color
  notesButton.style('font-size', '20px');
  notesButton.style('padding', '10px 20px');

  // Create sub-buttons for "筆記"
  let notesOption1 = createButton('筆記一');
  notesOption1.position(xPosition, 50); // Position below "筆記"
  notesOption1.style('background-color', '#cdb4db');
  notesOption1.style('font-size', '16px');
  notesOption1.style('padding', '5px 10px');
  notesOption1.hide(); // Hide initially

  let notesOption2 = createButton('筆記二');
  notesOption2.position(xPosition, 90); // Position below "筆記一"
  notesOption2.style('background-color', '#cdb4db');
  notesOption2.style('font-size', '16px');
  notesOption2.style('padding', '5px 10px');
  notesOption2.hide(); // Hide initially

  let notesOption3 = createButton('筆記三');
  notesOption3.position(xPosition, 130); // Position below "筆記二"
  notesOption3.style('background-color', '#cdb4db');
  notesOption3.style('font-size', '16px');
  notesOption3.style('padding', '5px 10px');
  notesOption3.hide(); // Hide initially

  // Create "測驗卷" button under "筆記"
  let notesOption4 = createButton('測驗卷');
  notesOption4.position(xPosition, 170); // Position below "筆記三"
  notesOption4.style('background-color', '#cdb4db');
  notesOption4.style('font-size', '16px');
  notesOption4.style('padding', '5px 10px');
  notesOption4.hide(); // Hide initially

  // Show sub-buttons when mouse is over the "筆記" button
  notesButton.mouseOver(() => {
    notesOption1.show();
    notesOption2.show();
    notesOption3.show();
    notesOption4.show(); // Show "測驗卷" button
  });

  // Keep sub-buttons visible when mouse is over them
  notesOption1.mouseOver(() => {
    notesOption1.show();
    notesOption2.show();
    notesOption3.show();
    notesOption4.show();
  });
  notesOption2.mouseOver(() => {
    notesOption1.show();
    notesOption2.show();
    notesOption3.show();
    notesOption4.show();
  });
  notesOption3.mouseOver(() => {
    notesOption1.show();
    notesOption2.show();
    notesOption3.show();
    notesOption4.show();
  });
  notesOption4.mouseOver(() => {
    notesOption1.show();
    notesOption2.show();
    notesOption3.show();
    notesOption4.show();
  });

  // Hide sub-buttons when mouse leaves both the "筆記" button and sub-buttons
  notesButton.mouseOut(() => {
    setTimeout(() => {
      if (!notesOption1.elt.matches(':hover') &&
          !notesOption2.elt.matches(':hover') &&
          !notesOption3.elt.matches(':hover') &&
          !notesOption4.elt.matches(':hover')) {
        notesOption1.hide();
        notesOption2.hide();
        notesOption3.hide();
        notesOption4.hide();
      }
    }, 200); // Add a small delay to prevent flickering
  });

  notesOption1.mouseOut(() => {
    setTimeout(() => {
      if (!notesButton.elt.matches(':hover') &&
          !notesOption2.elt.matches(':hover') &&
          !notesOption3.elt.matches(':hover') &&
          !notesOption4.elt.matches(':hover')) {
        notesOption1.hide();
        notesOption2.hide();
        notesOption3.hide();
        notesOption4.hide();
      }
    }, 200);
  });
  notesOption2.mouseOut(() => {
    setTimeout(() => {
      if (!notesButton.elt.matches(':hover') &&
          !notesOption1.elt.matches(':hover') &&
          !notesOption3.elt.matches(':hover') &&
          !notesOption4.elt.matches(':hover')) {
        notesOption1.hide();
        notesOption2.hide();
        notesOption3.hide();
        notesOption4.hide();
      }
    }, 200);
  });
  notesOption3.mouseOut(() => {
    setTimeout(() => {
      if (!notesButton.elt.matches(':hover') &&
          !notesOption1.elt.matches(':hover') &&
          !notesOption2.elt.matches(':hover') &&
          !notesOption4.elt.matches(':hover')) {
        notesOption1.hide();
        notesOption2.hide();
        notesOption3.hide();
        notesOption4.hide();
      }
    }, 200);
  });
  notesOption4.mouseOut(() => {
    setTimeout(() => {
      if (!notesButton.elt.matches(':hover') &&
          !notesOption1.elt.matches(':hover') &&
          !notesOption2.elt.matches(':hover') &&
          !notesOption3.elt.matches(':hover')) {
        notesOption1.hide();
        notesOption2.hide();
        notesOption3.hide();
        notesOption4.hide();
      }
    }, 200);
  });

  // Add functionality to sub-buttons
  notesOption1.mousePressed(() => {
    iframe.attribute('src', 'https://hackmd.io/@stingray/SkMVWHBAkx'); // Set iframe to the specified URL
    iframe.show(); // Show the iframe
  });

  // Add functionality to "筆記二" button
  notesOption2.mousePressed(() => {
    iframe.attribute('src', 'https://hackmd.io/@stingray/SkXIfrHA1l'); // Set iframe to the specified URL
    iframe.show(); // Show the iframe
  });

  // Add functionality to "筆記三" button
  notesOption3.mousePressed(() => {
    iframe.attribute('src', 'https://hackmd.io/@stingray/rJQ5MrS0kl'); // Set iframe to the specified URL
    iframe.show(); // Show the iframe
  });

  // Add functionality to "測驗卷" button
  notesOption4.mousePressed(() => {
    iframe.attribute('src', 'https://hackmd.io/@stingray/HyIszHBRkl'); // Set iframe to the specified URL
    iframe.show(); // Show the iframe
  });

  xPosition += closerSpacing; // Use reduced spacing for the next button

  let quizButton = createButton('測驗卷');
  quizButton.position(xPosition, 10);
  quizButton.style('background-color', '#cdb4db'); // Updated color
  quizButton.style('font-size', '20px');
  quizButton.style('padding', '10px 20px');

  // Add functionality to "測驗卷" button
  quizButton.mousePressed(() => {
    iframe.attribute('src', 'https://stingray114.github.io/20250310-3/'); // Set iframe to the specified URL
    iframe.show(); // Show the iframe
  });

  // Create "背景" button
  xPosition += closerSpacing; // Adjust position to be next to "測驗卷"
  let backgroundButton = createButton('背景');
  backgroundButton.position(xPosition, 10); // Position next to "測驗卷"
  backgroundButton.style('background-color', '#cdb4db');
  backgroundButton.style('font-size', '20px');
  backgroundButton.style('padding', '10px 20px');

  // Add functionality to "背景" button
  backgroundButton.mousePressed(() => {
    iframe.hide(); // Hide iframe
    iframe.attribute('src', ''); // Clear iframe content
  });

  // Create "影片" button
  xPosition += closerSpacing; // Adjust position to be next to "背景"
  let videoButton = createButton('影片');
  videoButton.position(xPosition, 10); // Position next to "背景"
  videoButton.style('background-color', '#cdb4db');
  videoButton.style('font-size', '20px');
  videoButton.style('padding', '10px 20px');

  // Add functionality to "影片" button
  videoButton.mousePressed(() => {
    // Set iframe to the embedded YouTube video URL
    iframe.attribute('src', 'https://www.youtube.com/embed/KVvO5nneYSA'); // Embedded URL for YouTube
    iframe.show(); // Show the iframe
  });

  // Generate initial stars
  for (let i = 0; i < 100; i++) {
    hearts.push({
      x: random(width),
      y: random(height),
      size: random(10, 30),
      speed: random(1, 3), // Adjusted speed range for medium falling speed
      color: i % 2 === 0 ? '#a2d2ff' : '#fefae0' // Alternate between blue and white
    });
  }
}

function draw() {
  background('#ffc8dd'); // Background color

  // Draw and animate stars
  noStroke();
  for (let heart of hearts) {
    fill(heart.color); // Use the fixed color for each star

    // Update star position (vertical falling)
    heart.y += heart.speed;

    // Reset star to top if it goes off-screen
    if (heart.y > height) {
      heart.y = -heart.size;
      heart.x = random(width);
    }

    // Draw the star
    drawStar(heart.x, heart.y, heart.size, heart.size / 2, 5);
  }

  // Draw introduction box if visible
  if (introBoxVisible) {
    const boxWidth = width - 200; // Smaller width
    const boxHeight = height - 300; // Smaller height
    const boxX = 100; // Offset from left
    const boxY = 150; // Offset from top
    const padding = 20; // Padding inside the box

    fill('#caf0f8'); // Set the box background color to light blue (#caf0f8)
    stroke('#000'); // Set the border color to black
    rect(boxX, boxY, boxWidth, boxHeight, 20); // Draw a rounded rectangle

    fill('#000'); // Set the text color to black
    noStroke();
    textSize(20); // Adjust text size to fit inside the box
    textAlign(LEFT, TOP); // Align text to the top-left corner
    textWrap(WORD); // Enable word wrapping
    text(
      '大家好我是陳虹羽，我喜歡追劇、睡覺、騷擾貓咪跟小狗，喜歡白色、粉紅色，還有哈密瓜、草莓、烤布雷、布朗尼讚讚並列第一名',
      boxX + padding, // Add padding to the left
      boxY + padding, // Add padding to the top
      boxWidth - 2 * padding // Reduce width to account for padding
    );
  }
}

// Function to draw a star shape
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius1;
    let sy = y + sin(a) * radius1;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius2;
    sy = y + sin(a + halfAngle) * radius2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Function to update iframe position and size
function updateIframePositionAndSize() {
  iframe.position(width * 0.2, height * 0.2); // Move iframe down with 20% margin
  iframe.size(width * 0.6, height * 0.6); // Set iframe size to 60% of canvas width and height
}

// Function to handle window resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateIframePositionAndSize(); // Update iframe position and size
}
