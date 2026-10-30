# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks and no build step. Files open directly in a browser.

## Project Structure

- `index.html`: start page with two buttons, one for each part.
- `arduino.html`: Part 1, Arduino lessons (one scrolling page).
- `vision.html`: Part 2, machine vision lessons (one scrolling page).
- `css/style.css`: styles and light/dark theme colours.
- `js/main.js`: theme toggle and code copy buttons.
- `images/`: pictures taken from the course slides.
- `README.md`: project title.
- `CLAUDE.md`: this file.

Update this section as files are added.

## Key Requirements

1. Every page must be responsive and work on desktop, tablet, and phone.
2. Users can toggle between a light and a dark theme. The default is the light theme.

## Rules for Claude

- Explain technical terms in plain language.
- Ask before making big changes.
- Ask rather than guess.

## Feature Plan

### Site structure

Three pages. `index.html` is a start page with two buttons. Each part is its own page of numbered lessons that students scroll through, or jump around with the sticky top menu. A button at the bottom of each part leads to the other part. Every lesson follows the same pattern: a plain-language explanation, copyable code where it helps, and a "check yourself" box.

- **Part 1, `arduino.html` (lessons 1-14):** the board, program structure, constants and variables, `pinMode`, `digitalWrite`, `digitalRead`, LED and button circuits in Tinkercad, and the first loop (blink). A short "parts for a robot car" extra follows.
- **Part 2, `vision.html` (lessons 1-10):** computer vision, the Raspberry Pi camera loop, training a good vs bad apple model in Teachable Machine, running it on the Pi, YOLO, and edge AI.

### Phases

1. **Course from the slides (done):** Parts 1 and 2 above, with light/dark theme, copy buttons and a look based on the E377 deck.
2. **Quiz (later):** a short quiz at the end of each part.
3. **Simulator (later):** a small blinking-LED loop demo on the page.
