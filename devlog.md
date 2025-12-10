# Development Log

24/11/2025

Started with running `npm create vite@latest my-app -- --template react-ts` to create this react project

Added `npm i react-router` to add routing. 

Installed `nvm install 24`

Googled routing in React Vite and it showed me how to do this on the React website. Loads of sources. 
Isreal and I spoke about how his gallery page wants to look, and he wants his three niches to branch out. 
The current website tree looks like:

Home 
About 
Gallery
    Events
    Sports
    Lifestyle
Contact

This could easily grow more, but I am now aware of how to route things.

01/12/2025

Removed the React/Vite garb from the App.tsx to stop myself from getting confused.
Updated react-router to react-router-dom as there was a mismatch in my versioning. 
To run a view of the app in-browser, run `npm run dev` in an npm console.

07/12/2025

Tried to build a darkmode button via this: (website)[https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/] but it just won't work. 
Going to push up code anyway as a progress report. 

10/12/2025 
Looked into dark mode issue and have resolved this, was an issue with App being named app somewhere. 
Fixed the button in bottom right corner for east access on mobile but may need to move it when I add navbar implementation. This is the next part of the project I am looking into. 
Oh and we want Gold as an accent colour. 