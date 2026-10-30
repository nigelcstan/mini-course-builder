# CLAUDE.md

## Tech Stack

- Plain HTML, CSS, and JavaScript only.
- No frameworks and no build step. Files open directly in a browser.

## Project Structure

- `index.html`: the single scrolling course page with all lessons.
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

One long scrolling page (`index.html`) made of numbered lessons. Students move by scrolling, or by tapping a link in the sticky top menu to jump to any lesson. Every lesson follows the same pattern: a plain-language explanation, copyable code where it helps, and a "check yourself" box.

- **Part 1, Arduino basics (lessons 1-14):** the board, program structure, constants and variables, `pinMode`, `digitalWrite`, `digitalRead`, LED and button circuits in Tinkercad, and the first loop (blink).
- **Part 2, Machine vision (lessons 15-24):** computer vision, the Raspberry Pi camera loop, training a good vs bad apple model in Teachable Machine, running it on the Pi, YOLO, and edge AI.
- **Extra:** a short "parts for a robot car" section after Part 1.

### Phases

1. **Course from the slides (done):** Parts 1 and 2 above, with light/dark theme and copy buttons.
2. **Quiz (later):** a short quiz at the end of each part.
3. **Simulator (later):** a small blinking-LED loop demo on the page.
