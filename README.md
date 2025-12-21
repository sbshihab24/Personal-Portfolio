# Portfolio Website (React + Tailwind)

This is a personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. It features a modern dark-themed design, smooth scrolling, and full responsiveness.

## 🚀 Features
- **Modern UI**: Dark mode, Glassmorphism, and Animations (Framer Motion).
- **Responsive**: Fully optimized for Mobile, Tablet, and Desktop.
- **Sections**: Home, About, Skills, Experience, Projects, Contact.
- **Interactive**: Scrollspy navigation, mobile menu, and hover effects.

## 🛠 Tech Stack
-   [React](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Framer Motion](https://www.framer.com/motion/)

## 🏃‍♂️ Running Locally

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Dev Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Deployment

### GitHub Pages
This project is pre-configured for GitHub Pages.

1.  **Update `vite.config.js`** (Optional):
    If you are deploying to a user site (`username.github.io`), mostly fine.
    If deploying to a repo (`username.github.io/repo-name`), ensure `base: '/repo-name/'` in `vite.config.js`.
    *Current config uses `base: './'` which handles most relative path cases.*

2.  **Deploy Command**:
    ```bash
    npm run deploy
    ```
    This script runs `npm run build` and then pushes the `dist` folder to the `gh-pages` branch.

### Netlify / Vercel
Connect your GitHub repository to Netlify or Vercel. The settings are auto-detected:
-   **Build Command**: `npm run build`
-   **Publish Directory**: `dist`

## 📁 Project Structure
-   `src/components/`: Reusable UI sections (Hero, About, etc.)
-   `src/index.css`: Tailwind imports and global styles.
-   `tailwind.config.js`: Custom theme configuration (colors, fonts).
