const filteredPositions = positions.filter(pos => pos.difficulty <= difficulty);
const startTime = Date.now();
let intervalId;

intervalId = setInterval(() => {
  const currentTime = Date.now();
  if (currentTime - startTime >= duration * 1000) {
    clearInterval(intervalId);
    alert("Training session complete!");
    currentPositionNameElement.textContent = "";
    currentPositionImageElement.src = "";
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredPositions.length);
  const currentPosition = filteredPositions [randomIndex];

  currentPositionNameElement.textContent = currentPosition.name;
  currentPositionImageElement.src = currentPosition.imageFile;
  playAudio(currentPosition.audioFile);

  // Generate random hold time (adjust ranges based on difficulty)
  let minHold, maxHold;
  switch (difficulty) {
    case 1: minHold = 3000; maxHold = 7000; break; // 3-7 seconds
    case 2: minHold = 5000; maxHold = 10000; break; // 5-10 seconds
    case 3: minHold = 8000; maxHold = 15000; break; // 8-15 seconds
    default: minHold = 4000; maxHold = 8000;
  }
  const holdTime = Math.random() * (maxHold - minHold) + minHold;

  // Set a timeout for the next position change
  setTimeout(() => {
    // This will happen after the hold time
  }, holdTime);

}, 100); // Initial interval, the next position is triggered by the timeout
