// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

const state = {
    parrotCount: 0,
    countDisplay: null,
    parrotButton: null,
    parrotContainer: null,
    resetButton: null,
};

const addParrotButtonClicked = () => {
    const newParrot = document.createElement('img');
    newParrot.src = 'https://cultofthepartyparrot.com/parrots/hd/parrot.gif';
    state.parrotCount += 1;
    state.countDisplay.textContent = `Clicks: ${state.parrotCount}`;
    state.parrotContainer.appendChild(newParrot);
};

const resetButtonClicked = () => {
    state.parrotCount = 0;
    state.parrotContainer.innerHTML = '';
    state.countDisplay.textContent = `Clicks: ${state.parrotCount}`;
}

const loadControls = () => {
    state.parrotButton = document.getElementById('parrotButton');
    state.countDisplay = document.getElementById('clickcounts');
    state.parrotContainer = document.getElementById('parrotContainer');
    state.resetButton = document.getElementById('resetButton');
};

const registerEvents = () => {
    state.parrotButton.addEventListener('click', addParrotButtonClicked);
    state.resetButton.addEventListener('click', resetButtonClicked);
};

const onLoaded = () => {
    loadControls();
    addParrotButtonClicked();
    resetButtonClicked();
    registerEvents();
};

onLoaded();

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
