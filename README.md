# WordFlow Bot

I made a script designed to automate gameplay for the online word game at [mewtru.com/wordflow](http://mewtru.com/wordflow). This script intelligently submits valid words based on the letters available in the game, streamlining the experience.

> **Note:** This script is created out of curiosity and may diminish the fun and challenge of the game. For a more authentic experience, consider playing without it. However, feel free to try it out and see how it works!

## Features

- **Fetch Valid Words:** Retrieves a list of valid words from the TWL06 Scrabble Word List.
- **Auto-Submission:** Automatically submits valid words derived from the current set of letters in the game.
- **Dynamic Button Interaction:** Interacts with the game's interface to submit letters in the correct sequence seamlessly.
- **Recursive Word Building:** Constructs potential words using available letters and validates them against the word list.

## Usage

1. **Open the Game:**

   - Navigate to [mewtru.com/wordflow](http://mewtru.com/wordflow) in your web browser.

1. **Download the Script:**

   - Open the developer console by pressing F12 or Ctrl+Shift+J, or by right-clicking on the page and selecting "Inspect."

1. **Access Developer Console:**

   - Open the developer console (typically F12 or Ctrl+shift+j right-click > Inspect).

1. **Run the Script:**
   - Paste the contents of the `WordFlow.js` file into the console.
   - Execute the following command to start the automation:
     ```javascript
     await start();
     ```
