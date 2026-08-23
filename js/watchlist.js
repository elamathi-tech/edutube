// --------------------------------------------------------------------------
// 1. Constants & Global State
// --------------------------------------------------------------------------
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}


const WATCHLIST_STORAGE_KEY = "edutube_watchlist";
const THEME_STORAGE_KEY = "edutube_theme";

// Internal state for Watchlist search, category filter, and sorting
let currentSearchQuery = "";
let currentCategoryFilter = "all";
let currentSortOption = "recently-added";

// Default Catalog Videos (Seed Data)
const EDUTUBE_CATALOG = [
  {
    id: "html-fundamentals",
    title: "HTML Fundamentals",
    instructor: "Sarah Jenkins",
    category: "HTML",
    duration: 45,
    difficulty: "Beginner",
    thumbnail: "../assets/images/html.svg",
    description: "Master HTML5 structural tags, semantic web design, form controls, and web accessibility standards.",
    status: "not-started",
    addedAt: Date.now() - 86400000 * 5
  },
  {
    id: "css-flexbox-grid",
    title: "CSS Flexbox & Grid",
    instructor: "Alex Rivera",
    category: "CSS",
    duration: 60,
    difficulty: "Intermediate",
    thumbnail: "../assets/images/css.svg",
    description: "Build modern, responsive, fluid web layouts using CSS Flexbox, CSS Grid, and container queries.",
    status: "in-progress",
    addedAt: Date.now() - 86400000 * 3
  },
  {
    id: "js-basics",
    title: "JavaScript Basics",
    instructor: "John Smith",
    category: "JavaScript",
    duration: 25,
    difficulty: "Beginner",
    thumbnail: "../assets/images/javascript.svg",
    description: "Learn the core fundamentals of JavaScript programming including variables, data types, logic operators, and functions.",
    status: "not-started",
    addedAt: Date.now() - 86400000 * 2
  },
  {
    id: "dom-manipulation",
    title: "DOM Manipulation",
    instructor: "Emily Zhang",
    category: "DOM",
    duration: 40,
    difficulty: "Intermediate",
    thumbnail: "../assets/images/dom.svg",
    description: "Understand how to select, modify, create DOM elements dynamically and construct interactive user interfaces.",
    status: "completed",
    addedAt: Date.now() - 86400000 * 1
  },
  {
    id: "build-first-js-project",
    title: "Build Your First JS Project",
    instructor: "Michael Chang",
    category: "Projects",
    duration: 90,
    difficulty: "Advanced",
    thumbnail: "../assets/images/projects.svg",
    description: "Apply HTML, CSS, and Vanilla JavaScript to construct a full-featured web app step-by-step from scratch.",
    status: "in-progress",
    addedAt: Date.now()
  }
];

// --------------------------------------------------------------------------
// 2. Initialization on DOM Load
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Dark/Light Theme from localStorage
  initTheme();

  // Seed sample initial watchlist if visiting for the very first time
  seedInitialWatchlistIfEmpty();

  // Update navbar Watchlist count on every page
  updateWatchlistCount();

  // If on pages/watchlist.html (container #watchlist-grid or #watchlistGrid exists)
  if (document.getElementById("watchlist-grid") || document.getElementById("watchlistGrid")) {
    loadWatchlist();
    initWatchlistEventListeners();
  }

  // Mobile menu drawer toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

// Helper to seed initial items if local storage is empty
function seedInitialWatchlistIfEmpty() {
  const existing = localStorage.getItem(WATCHLIST_STORAGE_KEY);
  if (!existing || JSON.parse(existing).length === 0) {
    const initialSeed = [
      EDUTUBE_CATALOG[2], // JavaScript Basics
      EDUTUBE_CATALOG[1], // CSS Flexbox & Grid
      EDUTUBE_CATALOG[3]  // DOM Manipulation
    ];
    saveWatchlist(initialSeed);
  }
}

// --------------------------------------------------------------------------
// 3. Core LocalStorage Functions
// --------------------------------------------------------------------------

/**
 * Get current Watchlist array from localStorage
 * @returns {Array} List of video objects
 */
function getWatchlist() {
  const data = localStorage.getItem(WATCHLIST_STORAGE_KEY);
  try {
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Error reading edutube_watchlist from localStorage:", e);
    return [];
  }
}

/**
 * Save Watchlist array to localStorage
 * @param {Array} watchlist 
 */
function saveWatchlist(watchlist) {
  localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(watchlist));
}

/**
 * Add a video to Watchlist with duplicate prevention
 * @param {Object} video 
 */
function addToWatchlist(video) {
  if (!video || !video.id) return;

  let watchlist = getWatchlist();

  // Prevent duplicate additions using video.id
  const isDuplicate = watchlist.some((item) => item.id === video.id);
  if (isDuplicate) {
    showNotification("Video is already in your watchlist.", "info");
    return;
  }

  const videoToAdd = {
    ...video,
    status: video.status || "not-started",
    addedAt: video.addedAt || Date.now()
  };

  watchlist.unshift(videoToAdd);
  saveWatchlist(watchlist);

  updateWatchlistCount();
  showNotification("❤️ Video added to your watchlist!", "success");

  // If currently viewing watchlist page, reload grid
  if (document.getElementById("watchlist-grid") || document.getElementById("watchlistGrid")) {
    loadWatchlist();
  }
}

/**
 * Remove a video from Watchlist using video ID
 * @param {string} videoId 
 */
function removeFromWatchlist(videoId) {
  let watchlist = getWatchlist();
  const updated = watchlist.filter((item) => item.id !== videoId);

  saveWatchlist(updated);

  updateWatchlistCount();
  showNotification("Video removed from your watchlist.", "remove");

  // Re-render without full page refresh
  if (document.getElementById("watchlist-grid") || document.getElementById("watchlistGrid")) {
    loadWatchlist();
  }
}

// --------------------------------------------------------------------------
// 4. Watchlist Page Processing (Load, Filter, Sort & Render)
// --------------------------------------------------------------------------

/**
 * Loads Watchlist from localStorage, applies active search, category filter,
 * and sorting criteria, then renders the grid.
 */
function loadWatchlist() {
  const watchlist = getWatchlist();

  // Apply Search (Title, Category, Instructor)
  let filtered = watchlist.filter((video) => {
    const query = currentSearchQuery.toLowerCase().trim();
    if (!query) return true;

    const matchesTitle = video.title && video.title.toLowerCase().includes(query);
    const matchesCategory = video.category && video.category.toLowerCase().includes(query);
    const matchesInstructor = video.instructor && video.instructor.toLowerCase().includes(query);

    return matchesTitle || matchesCategory || matchesInstructor;
  });

  // Apply Category Filter
  if (currentCategoryFilter !== "all") {
    filtered = filtered.filter((video) => {
      return video.category && video.category.toLowerCase() === currentCategoryFilter.toLowerCase();
    });
  }

  // Apply Sorting
  filtered = sortVideoList(filtered, currentSortOption);

  // Render Grid DOM
  renderWatchlist(filtered, watchlist.length);
}

/**
 * Render Watchlist Video Cards dynamically or Empty State View
 * @param {Array} videos - Filtered and sorted videos
 * @param {number} totalSavedCount - Total count before search/filter
 */
function renderWatchlist(videos, totalSavedCount = 0) {
  const gridContainer = document.getElementById("watchlist-grid") || document.getElementById("watchlistGrid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  // Render Empty State if no saved videos OR filtered query returns 0
  if (videos.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-watchlist-state">
        <div class="empty-icon-circle">❤️</div>
        <h2 class="empty-title">Your Watchlist is Empty</h2>
        <p class="empty-description">
          Save educational videos here and watch them whenever you're ready to learn.
        </p>
        <a href="explore.html" class="btn-browse">
          Browse Videos
        </a>
      </div>
    `;
    return;
  }

  // Render Dynamic Cards
  videos.forEach((video) => {
    const cardEl = document.createElement("div");
    cardEl.className = "video-card";
    cardEl.setAttribute("data-id", video.id);

    const difficultyClass = (video.difficulty || "Beginner").toLowerCase();
    const status = video.status || "not-started";

    const statusBadgeText = status === 'completed' ? '🟢 Completed' : status === 'in-progress' ? '🟡 In Progress' : '⚪ Not Started';

    const durationText = typeof video.duration === 'number' ? `${video.duration} min` : video.duration;

    cardEl.innerHTML = `
      <div class="card-thumbnail-wrapper">
        <img src="${fixImagePath(video.thumbnail)}" alt="${escapeHTML(video.title)}" class="card-thumbnail" loading="lazy" onError="this.src='../assets/images/html.svg'">
        <span class="category-badge">${escapeHTML(video.category)}</span>
        <span class="duration-badge">⏱ ${escapeHTML(durationText)}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHTML(video.title)}</h3>
        <div class="card-meta-row">
          <span>👨‍🏫 ${escapeHTML(video.instructor)}</span>
          <span class="difficulty-pill ${difficultyClass}">🟢 ${escapeHTML(video.difficulty)}</span>
        </div>
        <p class="card-description">${escapeHTML(video.description || "")}</p>
        
        <div class="card-status-container">
          <select class="status-badge-select" onchange="updateVideoStatus('${video.id}', this.value)" aria-label="Completion status">
            <option value="not-started" ${status === 'not-started' ? 'selected' : ''}>⚪ Not Started</option>
            <option value="in-progress" ${status === 'in-progress' ? 'selected' : ''}>🟡 In Progress</option>
            <option value="completed" ${status === 'completed' ? 'selected' : ''}>🟢 Completed</option>
          </select>
        </div>

        <div class="card-actions">
          <button class="btn-watch" onclick="watchVideo('${video.id}')">
            ▶ Watch Now
          </button>
          <button class="btn-remove" onclick="removeFromWatchlist('${video.id}')" title="Remove from Watchlist">
            🗑 Remove
          </button>
        </div>
      </div>
    `;

    gridContainer.appendChild(cardEl);
  });
}

/**
 * Internal sorting helper
 */
function sortVideoList(videos, option) {
  const list = [...videos];
  switch (option) {
    case "title-az":
      return list.sort((a, b) => a.title.localeCompare(b.title));

    case "title-za":
      return list.sort((a, b) => b.title.localeCompare(a.title));

    case "duration-asc":
    case "duration":
      return list.sort((a, b) => {
        const durA = typeof a.duration === 'number' ? a.duration : parseInt(a.duration) || 0;
        const durB = typeof b.duration === 'number' ? b.duration : parseInt(b.duration) || 0;
        return durA - durB;
      });

    case "duration-desc":
      return list.sort((a, b) => {
        const durA = typeof a.duration === 'number' ? a.duration : parseInt(a.duration) || 0;
        const durB = typeof b.duration === 'number' ? b.duration : parseInt(b.duration) || 0;
        return durB - durA;
      });

    case "recently-added":
    default:
      return list.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
  }
}

/**
 * Update video completion status in localStorage
 * @param {string} videoId 
 * @param {string} newStatus - 'not-started' | 'in-progress' | 'completed'
 */
function updateVideoStatus(videoId, newStatus) {
  let watchlist = getWatchlist();
  const index = watchlist.findIndex((item) => item.id === videoId);

  if (index !== -1) {
    watchlist[index].status = newStatus;
    saveWatchlist(watchlist);

    const labels = {
      'completed': '🟢 Completed',
      'in-progress': '🟡 In Progress',
      'not-started': '⚪ Not Started'
    };

    showNotification(`Status updated to ${labels[newStatus]}`, "info");
    loadWatchlist();
  }
}

// --------------------------------------------------------------------------
// 5. Search, Filter & Sorting Functions
// --------------------------------------------------------------------------

function searchWatchlist() {
  const searchInput = document.getElementById("searchInput") || document.getElementById("search-input");
  if (searchInput) {
    currentSearchQuery = searchInput.value;
    loadWatchlist();
  }
}

function filterWatchlist(category) {
  currentCategoryFilter = category;

  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach((pill) => {
    if (pill.getAttribute("data-category").toLowerCase() === category.toLowerCase()) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  loadWatchlist();
}

function sortWatchlist(sortOption) {
  currentSortOption = sortOption;
  loadWatchlist();
}

function initWatchlistEventListeners() {
  const searchInput = document.getElementById("searchInput") || document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", searchWatchlist);
  }

  const sortSelect = document.getElementById("sortSelect") || document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => sortWatchlist(e.target.value));
  }
}

// --------------------------------------------------------------------------
// 6. Navigation Watchlist Counter
// --------------------------------------------------------------------------

function updateWatchlistCount() {
  const watchlist = getWatchlist();
  const count = watchlist.length;

  // Single ID counter element
  const countEl = document.getElementById("watchlistCount");
  if (countEl) {
    countEl.textContent = count;
  }

  // Text container element
  const countTextEl = document.getElementById("watchlistCountText");
  if (countTextEl) {
    countTextEl.textContent = `${count} Saved ${count === 1 ? 'Video' : 'Videos'}`;
  }

  // All badge elements across pages
  const badges = document.querySelectorAll(".watchlist-badge-count");
  badges.forEach((badge) => {
    badge.textContent = count;
  });
}

// Redirect Watch Button
function watchVideo(videoId) {
  window.location.href = `watch.html?id=${encodeURIComponent(videoId)}`;
}

// --------------------------------------------------------------------------
// 7. Toast Notification System
// --------------------------------------------------------------------------

function showNotification(message, type = "success") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const icons = {
    success: "❤️",
    remove: "🗑",
    info: "ℹ️"
  };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || 'ℹ️'}</span>
    <span>${escapeHTML(message)}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "fadeOut 0.3s forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --------------------------------------------------------------------------
// 8. Dark / Light Mode System
// --------------------------------------------------------------------------

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  updateThemeIcon(newTheme);

  showNotification(`Switched to ${newTheme === "dark" ? "Dark Mode 🌙" : "Light Mode ☀️"}`, "info");
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    themeBtn.setAttribute("title", `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`);
  }
}

// --------------------------------------------------------------------------
// 9. Path & Helper Utilities
// --------------------------------------------------------------------------

function isSubfolder() {
  return window.location.pathname.includes("/pages/");
}

function fixImagePath(path) {
  if (!path) return "../assets/images/html.svg";
  const inPages = isSubfolder();
  if (inPages) {
    if (path.startsWith("../")) return path;
    if (path.startsWith("assets/")) return "../" + path;
  } else {
    if (path.startsWith("../")) return path.replace("../", "");
  }
  return path;
}

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Export functions to global scope
window.addToWatchlist = addToWatchlist;
window.removeFromWatchlist = removeFromWatchlist;
window.getWatchlist = getWatchlist;
window.saveWatchlist = saveWatchlist;
window.loadWatchlist = loadWatchlist;
window.renderWatchlist = renderWatchlist;
window.updateWatchlistCount = updateWatchlistCount;
window.searchWatchlist = searchWatchlist;
window.filterWatchlist = filterWatchlist;
window.sortWatchlist = sortWatchlist;
window.showNotification = showNotification;
window.toggleTheme = toggleTheme;
window.updateVideoStatus = updateVideoStatus;
window.watchVideo = watchVideo;
window.EDUTUBE_CATALOG = EDUTUBE_CATALOG;
