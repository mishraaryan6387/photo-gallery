# 📸 Photo Gallery

A modern, responsive, and performant photo gallery web application built with **React 19**, **Vite**, and **Tailwind CSS v4**. It fetches curated photos from the Picsum Photos API, provides live real-time filtering by photographer/author, and allows users to bookmark their favourite photos with persistent `localStorage` support.

---

## ✨ Features

- **⚡ Fast & Modern Tooling**: Built on Vite with React 19 and Tailwind CSS v4 for lightning-fast HMR and minimal bundle footprint.
- **🖼️ Curated Photo Feed**: Fetches high-quality images from the [Picsum Photos API](https://picsum.photos/) via a custom React hook (`useFetchPhotos`).
- **🔍 Real-Time Search**: Instant filtering by photographer/author name with memoized lookups for snappy performance.
- **❤️ Favourites System**: Add or remove photos from your personal favourites list using a predictable `useReducer` state model.
- **💾 Persistent State**: Automatically preserves your favourited photos in browser `localStorage` across page reloads and browser sessions.
- **📱 Fully Responsive Design**: Adapts seamlessly across mobile, tablet, and desktop screens with a 1-to-4 column responsive grid layout.
- **💫 Polished UX & Feedback**:
  - Animated loading spinner during initial data fetch.
  - User-friendly error card if network requests fail.
  - Informative empty state message when search returns no matches.
  - Live photo counter showing currently displayed photos and total favourited count.
  - Smooth card hover lift animations and lazy image loading.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core frontend component library |
| **Vite** | Next-generation frontend build tool and dev server |
| **Tailwind CSS v4** | Modern utility-first CSS framework (using `@tailwindcss/vite`) |
| **JavaScript (ES Modules)** | Clean, modular application logic |
| **Picsum API** | REST API providing placeholder photos and metadata |

---

## 📁 Project Structure

```text
photo-gallery/
├── public/                 # Static assets (favicons, icons)
├── src/
│   ├── assets/             # Project-specific static media
│   ├── components/         # Reusable UI components
│   │   ├── Gallery.jsx          # Main gallery view with state coordination
│   │   ├── LoadingSpinner.jsx   # Animated loading spinner
│   │   ├── PhotoCard.jsx        # Individual photo card with favourite toggle
│   │   └── SearchBar.jsx        # Search input for author filtering
│   ├── hooks/
│   │   └── useFetchPhotos.jsx   # Custom hook handling API fetch, loading & error states
│   ├── reducers/
│   │   └── favouritesReducer.js # Reducer managing favourite photo IDs
│   ├── App.css             # Component-level styles
│   ├── App.jsx             # Main layout shell & header
│   ├── index.css           # Tailwind base directives and global styles
│   └── main.jsx            # React root mount point
├── eslint.config.js        # ESLint flat config
├── index.html              # HTML template entry point
├── package.json            # Project dependencies and script commands
├── vite.config.js          # Vite configuration with Tailwind CSS plugin
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mishraaryan6387/photo-gallery.git
   cd photo-gallery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and optimizes assets into the `dist/` directory for production |
| `npm run preview` | Locally previews the production build created in `dist/` |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🧩 Architectural Highlights & Patterns

- **Custom Hook Separation (`useFetchPhotos`)**: Isolates the data fetching logic, network error handling, and loading state away from presentation components.
- **Predictable State with `useReducer` (`favouritesReducer`)**: Follows Redux-style action dispatching (`TOGGLE_FAVOURITE`) to ensure clean and testable state transitions.
- **Performance Optimizations**:
  - `useMemo`: Prevents unnecessary recalculations of filtered photos on irrelevant re-renders.
  - `useCallback`: Keeps handler functions (`handleSearch`, `handleToggleFavourite`) referentially stable.
  - `loading="lazy"`: Defers off-screen image loading to improve page load speed and bandwidth usage.
- **Robust Storage Sync**: Initial state initializes synchronously from `localStorage`, while an effect keeps `localStorage` in sync whenever the favourites list changes.

---

## 🌐 API Reference

Photos are loaded via the public [Lorem Picsum API](https://picsum.photos/):
- **Endpoint**: `https://picsum.photos/v2/list?limit=30`
- **Response Fields Used**:
  - `id`: Unique identifier for each photo
  - `author`: Name of the photographer
  - `download_url`: High-resolution photo image URL

---

## 👤 Author

- **Aryan Mishra** – [GitHub (@mishraaryan6387)](https://github.com/mishraaryan6387)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
