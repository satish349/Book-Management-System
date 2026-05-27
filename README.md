# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




# 📚 Book Management System

A dynamic, multi-component React library management application built with **Vite**, **Tailwind CSS**, and modern JavaScript utility patterns. This application allows users to perform full CRUD workflows (Add, Read, Update, Delete) on an in-memory data store with instantaneous UI synchronization and real-time search queries.

---

## 🚀 Project Links
* **Live Production URL:** [https://book-management-system-cyan.vercel.app](https://book-management-system-cyan.vercel.app)
* **GitHub Code Repository:** [https://github.com/satish349/Book-Management-System](https://github.com/satish349/Book-Management-System)

---

## ✨ Features

* **Decoupled Architecture**: Volatile data tracking is kept independent from layout layers inside a dedicated state module (`booksData.js`).
* **Complete CRUD Management**: 
  * **Create**: Add entries with titles, authors, genres, and publication timelines through a native semantic dialog.
  * **Read**: Instantly view overall records on a centralized dashboard panel.
  * **Update**: Modify fields inline with targeted micro-forms without data collisions.
  * **Delete**: Wipe targeted items safely from memory structures using unique token matching.
* **Global Event Signalling**: Uses standard `window.dispatchEvent` messaging contexts to synchronize detached layout views completely independent of state boilerplate overhead.
* **Fuzzy Multi-Field Filtering**: High-density lookup filters match typed strings against title text, author names, genres, or calendar dates instantly from the navigation search bar.
* **Responsive Layout Design**: Built using fluid Tailwind layout grids to ensure smooth viewing on desktop, tablet, and mobile displays.

---

## 🛠️ File Structure

The project features a highly modular structure divided into standalone user interface components:

```text
src/
├── components/
│   ├── booksData.js       # Centralized memory array storage schema
│   ├── AddDialog.jsx      # Input form rendered inside native HTML dialog elements
│   ├── BookListDisplay.jsx# Display dashboard showcasing entries, edit modes, and metrics
│   ├── Home.jsx           # Canvas coordinator handling views and trigger signals
│   └── Navbar.jsx         # Header navigation anchoring structural search broadcast bars
├── App.jsx                # Layout shell setting standard navigation viewports
└── main.jsx               # React initialization core bootstrap
```

---

## ⚙️ Installation & Setup Instructions

Follow these instructions to clone, build, and run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) installed (v18 or higher recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/satish349/Book-Management-System.git
cd Book-Management-System
```

### 2. Install Project Dependencies
Installs React, Vite, Tailwind CSS, and other development dependencies:
```bash
npm install
```

### 3. Run the Development Server
Launch the application locally:
```bash
npm run dev
```
Open your browser and navigate to the local network port listed in your terminal (typically `http://localhost:5173`).

### 4. Build for Production
To generate optimized static build configurations inside the production `/dist` target asset folder:
```bash
npm run build
```

---

## 🌐 Deployment Configuration (Vercel)

This application is ready for instant deployment to Vercel. Because Vite build assets automatically compile output configurations correctly, you can deploy your application instantly by linking your GitHub repository to Vercel with zero environmental adjustments.
