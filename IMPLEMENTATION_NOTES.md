# Implementation Notes for Future Development

## Organizing Multiple Games/Events (Rugby, Football, etc.)

### Option 1: Folder Structure
```
/images/sports/rugby/
  - game-1/
    - rugby-1.JPG
    - rugby-2.JPG
    ...
  - game-2/
    - rugby-1.JPG
    - rugby-2.JPG
    ...
```

**Implementation:**
- Create subfolders for each game/event (e.g., `/game-1/`, `/game-2/`, etc.)
- On the Rugby page, display a list/gallery of games with thumbnails or cards
- Each card shows metadata like "vs Team A - Jan 2025", "vs Team B - Feb 2025"
- Clicking a game card loads that game's images in the same gallery view
- Can be a carousel or grid of game thumbnails

**Pros:**
- Scales beautifully as you add more games
- Clean file organization
- Minimal code changes needed—just update image paths
- DRY (Don't Repeat Yourself) - reuse existing gallery component logic
- Good UX with single page to navigate

**Cons:**
- Requires some logic to determine available games and load correct folder

---

### Option 2: Dropdown/Filter on Current Page
```
Rugby page with:
- Dropdown/button selector: "Game 1", "Game 2", etc.
- Single gallery below that updates when selection changes
```

**Implementation:**
- Add a dropdown or button group to select which game
- State variable tracks current selected game
- Gallery images load based on current selection
- Can use same gallery component, just swap the image paths

**Pros:**
- Very simple to implement
- No extra pages or navigation needed
- Can display game info above gallery

**Cons:**
- Page could feel cluttered with many games
- Less scalable than Option 1
- All games on one page might impact performance

---

## Decision
**Recommended:** Use Option 1 for the best long-term scalability and user experience.

## Other Options (Not Recommended)
- **Option 3:** Separate pages per game (e.g., `/rugby/game-1`, `/rugby/game-2`) - creates too many pages to maintain
