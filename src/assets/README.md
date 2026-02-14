# Assets

## App Icon

Currently, the landing page uses an embedded SVG placeholder for the brand icon in `src/App.jsx`.

To use a real app icon:
1. Replace the `brandImage` data URI in `src/App.jsx` with an import statement:
   ```javascript
   import brandImage from './assets/AppIcon (1).png';
   ```
2. Place your actual `AppIcon (1).png` file in this directory.
3. The image should be a high-quality PNG (at least 300x300px) that represents the MiFido brand.
