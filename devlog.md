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

# 15/12/2025
Added basic nav bar ui, need to find the website I saw on my macbook which had a great UI example. 
Played around with CSS a bit. Trying to get a good base. 

# 28/12/2025
Took a bit of a break, but built nav bar now for mob and desktop, need to work on the navigation for the gallery.
For the most part I think I need to just tidy it up + figure out what content goes on what pages. Installed font awesome so I can use the emojis for the mobile nav, rather than generic emojis. 

# 02/01/2026
Changed icons to fontawrsome ones, I don't really like the gold colouring but Isreal wanted that, I hope he asks for a nice rich blue tbh but might also look a tad dog. Never really know what colouring looks good and what looks basic/tacky. 

# 05/01/2026
Started playing with home page UI, wanna get a good basis. Playing with font sizding, colours, fonts, etc.
- note: change sun icon, Isreal said it looks like settings (he is right)

# 15/01/2026
Added content to About Me page and added footer on all pages.

# 19/01/2026
Added carousel to gallery page, how I imagined it. Still got placeholder images atm. Want to be able to swap out the images easily as and when but might do that myself backend wise. Not got any content on the niche pages yet, need Big Swizz to send me the content he wants featured. Then I guess its just ensuring that looks alright.
Plan for that is probably a camera roll type vibe, can click to expand image, can swipe or scroll through images left and right, and also maybe split into event categories with like a contents page type thing, on the same page, so you can jump down to any event. 
For the about me, maybe discuss things like turn around, how photos are delivered, availability? 
Contact page is there, phone number??? Do we wanna publisize his legit phone number? Idk about all that. 

# 25/01/2026
i wanna get the site out lol