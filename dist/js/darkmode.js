/**
 * Dark Mode System with localStorage
 * Supports automatic light/dark mode toggle with back to top button
 */

class DarkModeSystem {
  constructor() {
    // State
    this.isDarkMode = false;

    // UI Elements
    this.backToTopButton = null;
    this.darkModeButton = null;

    // Cache commonly accessed elements
    this.cachedElements = {
      root: document.documentElement,
      body: document.body,
      header: null,
      sections: null,
      cards: null,
      textElements: null,
    };

    // Initialize
    this.init();
  }

  init() {
    this.loadThemeFromStorage();
    this.createDarkModeButton();
    this.createBackToTopButton();
    this.setupEventListeners();
    this.applyTheme();
  }

  // Load theme preference from localStorage
  loadThemeFromStorage() {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      this.isDarkMode = savedTheme === "true";
    } else {
      // Default to light mode
      this.isDarkMode = false;
    }
  }

  // Save theme preference to localStorage
  saveThemeToStorage() {
    localStorage.setItem("darkMode", this.isDarkMode.toString());
  }

  // Create dark mode toggle button
  createDarkModeButton() {
    this.darkModeButton = document.createElement("button");
    this.darkModeButton.id = "dark-mode-toggle";
    this.darkModeButton.className = "dark-mode-toggle";
    this.darkModeButton.setAttribute("aria-label", "تبديل الوضع المظلم");
    this.darkModeButton.innerHTML = `
            <i class="fas fa-moon"></i>
            <span class="dark-mode-text">الوضع المظلم</span>
        `;

    // More robust header/nav selection for all pages
    const insertIntoNav = () => {
      // Try various selectors used across different pages
      const selectors = [
        "header nav ul", // Common nav structure
        "header .flex.justify-between.items-center nav", // Index page
        "nav.flex.items-center", // Educational resources
        "header nav", // Generic nav
        "header .flex.items-center", // Header with flex
      ];

      for (const selector of selectors) {
        const container = document.querySelector(selector);
        if (container) {
          // Create li if inserting into ul
          if (container.tagName.toLowerCase() === "ul") {
            const li = document.createElement("li");
            li.className = "nav-item flex items-center";
            li.appendChild(this.darkModeButton);
            container.appendChild(li);
          } else {
            container.appendChild(this.darkModeButton);
          }
          return true;
        }
      }
      return false;
    };

    // Try to insert into navigation
    const inserted = insertIntoNav();

    // If not inserted in nav, try header or fallback to fixed position
    if (!inserted) {
      const header = document.querySelector("header");
      if (header) {
        header.appendChild(this.darkModeButton);
      } else {
        // Ultimate fallback: fixed position
        document.body.appendChild(this.darkModeButton);
        this.darkModeButton.style.position = "fixed";
        this.darkModeButton.style.top = "20px";
        this.darkModeButton.style.right = "20px";
        this.darkModeButton.style.zIndex = "9999";
      }
    }
  }

  // Create back to top button
  createBackToTopButton() {
    this.backToTopButton = document.createElement("button");
    this.backToTopButton.id = "back-to-top";
    this.backToTopButton.className = "back-to-top-btn";
    this.backToTopButton.setAttribute("aria-label", "العودة للأعلى");
    this.backToTopButton.innerHTML = `
            <i class="fas fa-arrow-up"></i>
            <span class="back-to-top-text">أعلى</span>
        `;

    document.body.appendChild(this.backToTopButton);
  }

  // Setup event listeners
  setupEventListeners() {
    // Dark mode toggle
    if (this.darkModeButton) {
      this.darkModeButton.addEventListener("click", () => {
        this.toggleDarkMode();
      });
    }

    // Back to top button
    if (this.backToTopButton) {
      this.backToTopButton.addEventListener("click", () => {
        this.scrollToTop();
      });
    }

    // Show/hide back to top button on scroll
    window.addEventListener("scroll", () => {
      this.handleScroll();
    });
  }

  // Toggle dark mode
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    this.saveThemeToStorage();
    this.updateButtonText();
  }

  // Apply theme to document
  applyTheme() {
    const root = document.documentElement;

    if (this.isDarkMode) {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
      document.body.classList.remove("dark-mode");
    }

    // Force apply dark mode to all elements
    if (this.isDarkMode) {
      // Add dark mode class to all sections and containers
      const sections = document.querySelectorAll(
        "section, header, footer, main, .container, .card-base, .testimonial-card"
      );
      sections.forEach((element) => {
        element.classList.add("dark-mode");
      });

      // Update specific elements
      const bgWhiteElements = document.querySelectorAll(".bg-white");
      bgWhiteElements.forEach((element) => {
        element.style.backgroundColor = "var(--bg-secondary)";
        element.style.color = "var(--text-primary)";
      });

      const textGrayElements = document.querySelectorAll(
        ".text-gray-700, .text-gray-600, .text-gray-800"
      );
      textGrayElements.forEach((element) => {
        element.style.color = "var(--text-secondary)";
      });

      const bgLightCyanElements = document.querySelectorAll(".bg-light-cyan");
      bgLightCyanElements.forEach((element) => {
        element.style.backgroundColor = "var(--bg-primary)";
      });
    }

    // Update button icon
    if (this.darkModeButton) {
      const icon = this.darkModeButton.querySelector("i");
      const text = this.darkModeButton.querySelector(".dark-mode-text");

      if (this.isDarkMode) {
        icon.className = "fas fa-sun";
        text.textContent = "الوضع المضيء";
      } else {
        icon.className = "fas fa-moon";
        text.textContent = "الوضع المظلم";
      }
    }
  }

  // Update button text
  updateButtonText() {
    if (this.darkModeButton) {
      const text = this.darkModeButton.querySelector(".dark-mode-text");
      if (text) {
        text.textContent = this.isDarkMode ? "الوضع المضيء" : "الوضع المظلم";
      }
    }
  }

  // Handle scroll for back to top button
  handleScroll() {
    if (this.backToTopButton) {
      if (window.pageYOffset > 300) {
        this.backToTopButton.classList.add("visible");
      } else {
        this.backToTopButton.classList.remove("visible");
      }
    }
  }

  // Scroll to top
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// CSS styles for dark mode and buttons
const darkModeStyles = `
    /* Global Variables */
    :root {
        /* Light Mode Colors */
        --bg-primary: #ffffff;
        --bg-secondary: #f8fafc;
        --bg-tertiary: #f1f5f9;
        --text-primary: #1a202c;
        --text-secondary: #4a5568;
        --text-muted: #718096;
        --border-color: #e2e8f0;
        --border-light: #edf2f7;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

        /* Brand Colors - Light */
        --coral: #f08c7e;
        --coral-light: #ffa197;
        --coral-dark: #e07b6d;
        --teal: #87baba;
        --teal-light: #e0f7f7;
        --teal-dark: #77a8a8;
        --navy: #0a0730;
        --navy-light: #1d1a4b;

        /* Transition Settings */
        --theme-transition: 0.3s ease-in-out;
    }

    /* Dark Mode Variables */
    :root.dark-mode {
        /* Dark Mode Colors - Modern Deep Blue Theme */
        --bg-primary: #0a1929;
        --bg-secondary: #132f4c;
        --bg-tertiary: #173a5e;
        --text-primary: #f0f7ff;
        --text-secondary: #b2bac2;
        --text-muted: #7a8691;
        --border-color: #265d97;
        --border-light: #1e4976;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 8px 20px -3px rgba(0, 0, 0, 0.4);
        --shadow-blue: 0 0 15px rgba(56, 189, 248, 0.1);

        /* Brand Colors - Dark Mode Enhanced */
        --coral: #ff6b8b;
        --coral-light: #ff8fa8;
        --coral-dark: #e55577;
        --teal: #38bdf8;
        --teal-light: #60ccff;
        --teal-dark: #0ea5e9;
        --navy: #0c4a6e;
        --navy-light: #0369a1;
        
        /* Accent Colors */
        --accent-purple: #8b5cf6;
        --accent-pink: #ec4899;
        --accent-yellow: #fbbf24;
        --accent-emerald: #10b981;
        
        /* UI Colors - Dark */
        --input-bg: var(--bg-secondary);
        --input-border: var(--border-color);
        --input-text: var(--text-primary);
        --input-placeholder: var(--text-muted);
        
        /* Card Colors */
        --card-bg: var(--bg-secondary);
        --card-border: var(--border-color);
        --card-shadow: var(--shadow);
        
        /* Button Colors */
        --btn-primary-bg: var(--coral);
        --btn-primary-text: #ffffff;
        --btn-secondary-bg: var(--teal);
        --btn-secondary-text: #ffffff;
        
        /* Status Colors */
        --success: #22c55e;
        --warning: #eab308;
        --error: #ef4444;
        --info: #3b82f6;
    }

    /* Dark Mode Toggle Button */
    .dark-mode-toggle {
        --toggle-size: 54px;
        --toggle-padding: 4px;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: var(--toggle-padding);
        background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
        border: 2px solid var(--border-color);
        border-radius: calc(var(--toggle-size) / 2);
        color: var(--text-primary);
        cursor: pointer;
        position: relative;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: 'Tajawal', sans-serif;
        font-size: 14px;
        font-weight: 600;
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
        overflow: hidden;
    }

    .dark-mode-toggle::before {
        content: '';
        position: absolute;
        top: var(--toggle-padding);
        left: var(--toggle-padding);
        width: calc(var(--toggle-size) - 2 * var(--toggle-padding));
        height: calc(var(--toggle-size) - 2 * var(--toggle-padding));
        background: linear-gradient(135deg, #ffd700, #ffa500);
        border-radius: 50%;
        transform: scale(0.9);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 0;
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    }

    .dark-mode-toggle i {
        font-size: 20px;
        color: var(--bg-tertiary);
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        z-index: 1;
        margin-left: 6px;
    }

    .dark-mode-toggle .dark-mode-text {
        font-size: 14px;
        font-weight: 600;
        position: relative;
        z-index: 1;
        margin-right: 12px;
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .dark-mode-toggle:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }

    .dark-mode-toggle:hover::before {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
    }

    /* Dark mode specific styles */
    .dark-mode .dark-mode-toggle {
        background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
        border-color: var(--border-light);
    }

    .dark-mode .dark-mode-toggle::before {
        background: linear-gradient(135deg, #2c3e50, #3498db);
        box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
        transform: translateX(calc(var(--toggle-size) - 8px)) scale(0.9);
    }

    .dark-mode .dark-mode-toggle:hover::before {
        transform: translateX(calc(var(--toggle-size) - 8px)) scale(1.1);
        box-shadow: 0 0 20px rgba(52, 152, 219, 0.7);
    }

    .dark-mode .dark-mode-toggle i {
        color: #fff;
        transform: translateX(calc(var(--toggle-size) - 8px)) rotate(360deg);
    }

    .dark-mode .dark-mode-toggle .dark-mode-text {
        color: var(--text-primary);
    }

    /* Animation keyframes */
    @keyframes toggleSlide {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(var(--toggle-size) - 8px)); }
    }

    @keyframes sunburst {
        0% { transform: scale(0.9) rotate(0); }
        50% { transform: scale(1.2) rotate(180deg); }
        100% { transform: scale(0.9) rotate(360deg); }
    }

    @keyframes moonPhase {
        0% { transform: scale(0.9) rotate(0); opacity: 0.5; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        100% { transform: scale(0.9) rotate(360deg); opacity: 0.5; }
    }

    /* Back to Top Button */
    .back-to-top-btn {
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, var(--coral), var(--coral-dark));
        border: 2px solid var(--border-color);
        border-radius: 50%;
        color: white;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(100px) scale(0.8);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        font-family: 'Tajawal', sans-serif;
        font-size: 12px;
        font-weight: 600;
        box-shadow: var(--shadow-lg);
        backdrop-filter: blur(10px);
    }

    .back-to-top-btn.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
    }

    .back-to-top-btn:hover {
        background: linear-gradient(135deg, var(--teal), var(--teal-dark));
        transform: translateY(-8px) scale(1.1);
        box-shadow: 0 8px 25px rgba(32, 212, 163, 0.4);
        border-color: var(--teal);
    }

    .back-to-top-btn i {
        font-size: 18px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    .back-to-top-btn:hover i {
        transform: translateY(-3px) rotate(-5deg);
    }

    .back-to-top-text {
        font-size: 10px;
        line-height: 1;
        transition: all 0.3s ease;
    }

    .dark-mode .back-to-top-btn {
        background: linear-gradient(135deg, var(--coral), var(--coral-dark));
        border-color: var(--border-light);
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
    }

    .dark-mode .back-to-top-btn:hover {
        background: linear-gradient(135deg, var(--teal), var(--teal-dark));
        box-shadow: 0 8px 25px rgba(32, 212, 163, 0.5);
    }

    /* Dark Mode Specific Styles */
    .dark-mode {
        background-color: var(--bg-primary) !important;
        color: var(--text-primary) !important;
    }

    .dark-mode body {
        background-color: var(--bg-primary) !important;
        color: var(--text-primary) !important;
    }

    .dark-mode header {
        background-color: var(--bg-secondary) !important;
        border-bottom: 1px solid var(--border-color) !important;
    }

    .dark-mode .sticky {
        background-color: var(--bg-secondary) !important;
    }

    .dark-mode .bg-white {
        background-color: var(--bg-secondary) !important;
        color: var(--text-primary) !important;
    }

    .dark-mode .bg-light-cyan {
        background-color: var(--bg-primary) !important;
    }

    .dark-mode .text-gray-700,
    .dark-mode .text-gray-600,
    .dark-mode .text-gray-800 {
        color: var(--text-secondary) !important;
    }

    .dark-mode .text-navy {
        color: var(--text-primary) !important;
    }

    .dark-mode .card-base,
    .dark-mode .testimonial-card,
    .dark-mode .founder-card,
    .dark-mode .timeline-content,
    .dark-mode .mission-vision-card {
        background: linear-gradient(165deg, var(--bg-secondary), var(--bg-tertiary)) !important;
        border: 1px solid var(--border-color) !important;
        color: var(--text-primary) !important;
        box-shadow: var(--shadow-lg), var(--shadow-blue) !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        position: relative;
        overflow: hidden;
        transition: all 0.4s var(--transition-timing) !important;
    }

    .dark-mode .card-base::before,
    .dark-mode .testimonial-card::before,
    .dark-mode .founder-card::before,
    .dark-mode .timeline-content::before,
    .dark-mode .mission-vision-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(56, 189, 248, 0.05),
            transparent
        );
        transition: all 0.5s var(--transition-timing);
    }

    .dark-mode .card-base::after,
    .dark-mode .testimonial-card::after,
    .dark-mode .founder-card::after,
    .dark-mode .timeline-content::after,
    .dark-mode .mission-vision-card::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            225deg,
            transparent 0%,
            rgba(56, 189, 248, 0.05) 30%,
            transparent 100%
        );
        opacity: 0;
        transition: opacity 0.4s var(--transition-timing);
    }

    .dark-mode .card-base:hover,
    .dark-mode .testimonial-card:hover,
    .dark-mode .founder-card:hover,
    .dark-mode .timeline-content:hover,
    .dark-mode .mission-vision-card:hover {
        transform: translateY(-5px) scale(1.02) !important;
        box-shadow: var(--shadow-lg), 0 0 25px rgba(56, 189, 248, 0.3) !important;
        border-color: var(--teal) !important;
    }

    .dark-mode .card-base:hover::before,
    .dark-mode .testimonial-card:hover::before,
    .dark-mode .founder-card:hover::before,
    .dark-mode .timeline-content:hover::before,
    .dark-mode .mission-vision-card:hover::before {
        left: 100%;
    }

    .dark-mode .card-base:hover::after,
    .dark-mode .testimonial-card:hover::after,
    .dark-mode .founder-card:hover::after,
    .dark-mode .timeline-content:hover::after,
    .dark-mode .mission-vision-card:hover::after {
        opacity: 1;
    }

    .dark-mode .nav-link {
        color: var(--text-primary) !important;
    }

    .dark-mode .nav-link:hover {
        color: var(--coral, #f08c7e) !important;
    }

    .dark-mode .mobile-nav-link {
        color: var(--text-primary) !important;
    }

    .dark-mode .mobile-nav-link:hover {
        color: var(--coral, #f08c7e) !important;
    }

    .dark-mode .form-input,
    .dark-mode input,
    .dark-mode textarea {
        background-color: var(--bg-secondary) !important;
        border: 1px solid var(--border-color) !important;
        color: var(--text-primary) !important;
    }

    .dark-mode .form-input:focus,
    .dark-mode input:focus,
    .dark-mode textarea:focus {
        border-color: var(--coral, #f08c7e) !important;
        box-shadow: 0 0 0 3px rgba(240, 140, 126, 0.1) !important;
        background-color: var(--bg-secondary) !important;
    }

    .dark-mode footer {
        background-color: var(--bg-secondary) !important;
        color: var(--text-secondary) !important;
    }

    .dark-mode footer h3 {
        color: var(--text-primary) !important;
    }

    .dark-mode footer a {
        color: var(--text-secondary) !important;
    }

    .dark-mode footer a:hover {
        color: var(--coral, #f08c7e) !important;
    }

    /* Sections */
    .dark-mode section {
        background-color: var(--bg-primary) !important;
        color: var(--text-primary) !important;
    }

    .dark-mode .bg-gradient-to-b {
        background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary)) !important;
    }

    /* Buttons */
    .dark-mode .btn {
        color: var(--text-primary) !important;
        border: 1px solid var(--border-color) !important;
        background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary)) !important;
        box-shadow: var(--shadow), var(--shadow-blue) !important;
        position: relative;
        overflow: hidden;
        transition: all 0.3s var(--transition-timing) !important;
    }

    .dark-mode .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(56, 189, 248, 0.2),
            transparent
        );
        transition: 0.5s;
    }

    .dark-mode .btn:hover {
        background: linear-gradient(135deg, var(--teal-dark), var(--accent-purple)) !important;
        border-color: var(--teal) !important;
        color: white !important;
        transform: translateY(-2px) scale(1.02) !important;
        box-shadow: var(--shadow-lg), 0 0 20px rgba(56, 189, 248, 0.4) !important;
    }

    .dark-mode .btn:hover::before {
        left: 100%;
    }

    .dark-mode .btn:active {
        transform: scale(0.98) !important;
    }

    .dark-mode .btn-primary {
        background: linear-gradient(135deg, var(--coral), var(--coral-dark)) !important;
        border-color: var(--coral) !important;
        color: white !important;
    }

    .dark-mode .btn-primary:hover {
        background: linear-gradient(135deg, var(--teal), var(--teal-dark)) !important;
        border-color: var(--teal) !important;
    }

    .dark-mode .btn-outline-navy {
        border-color: var(--border-color) !important;
        color: var(--text-primary) !important;
        background: transparent !important;
    }

    .dark-mode .btn-outline-navy:hover {
        background: linear-gradient(135deg, var(--coral), var(--coral-dark)) !important;
        border-color: var(--coral) !important;
        color: white !important;
    }

    /* Timeline */
    .dark-mode .timeline-icon {
        background-color: var(--bg-secondary) !important;
        border: 2px solid var(--border-color) !important;
    }

    /* Events Section */
    .dark-mode .events-section {
        background-color: var(--bg-primary) !important;
    }

    .dark-mode .events-section__search-input {
        background-color: var(--bg-secondary) !important;
        border: 1px solid var(--border-color) !important;
        color: var(--text-primary) !important;
    }

    /* Filter buttons */
    .dark-mode .filter-btn {
        background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary)) !important;
        color: var(--text-primary) !important;
        border: 2px solid var(--border-color) !important;
        box-shadow: var(--shadow) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .dark-mode .filter-btn:hover {
        background: linear-gradient(135deg, var(--border-color), var(--border-light)) !important;
        color: var(--text-primary) !important;
        transform: translateY(-2px) !important;
        box-shadow: var(--shadow-lg) !important;
    }

    .dark-mode .filter-btn.active {
        background: linear-gradient(135deg, var(--coral), var(--coral-dark)) !important;
        color: white !important;
        border-color: var(--coral) !important;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3) !important;
    }

    /* Search input */
    .dark-mode #search-input {
        background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary)) !important;
        border: 2px solid var(--border-color) !important;
        color: var(--text-primary) !important;
        box-shadow: var(--shadow) !important;
        transition: all 0.3s ease !important;
    }

    .dark-mode #search-input:focus {
        border-color: var(--coral) !important;
        box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2), var(--shadow-lg) !important;
        background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-secondary)) !important;
    }

    .dark-mode #search-input::placeholder {
        color: var(--text-muted) !important;
    }

    /* Mobile nav */
    .dark-mode #mobile-nav {
        background-color: var(--bg-secondary) !important;
    }

    /* Chatbot */
    .dark-mode #chatbot-container {
        background-color: var(--bg-secondary) !important;
        border: 1px solid var(--border-color) !important;
    }

    .dark-mode #chatbot-toggler {
        background-color: var(--bg-secondary) !important;
        border: 1px solid var(--border-color) !important;
    }

    /* Tables */
    .dark-mode table {
        background-color: var(--bg-secondary) !important;
        color: var(--text-primary) !important;
    }

    .dark-mode th,
    .dark-mode td {
        border-color: var(--border-color) !important;
        color: var(--text-primary) !important;
    }

    /* Cards and containers */
    .dark-mode .container {
        color: var(--text-primary) !important;
    }

    /* Links */
    .dark-mode a {
        color: var(--text-primary) !important;
    }

    .dark-mode a:hover {
        color: var(--coral, #f08c7e) !important;
    }

    /* Headings */
    .dark-mode h1,
    .dark-mode h2,
    .dark-mode h3,
    .dark-mode h4,
    .dark-mode h5,
    .dark-mode h6 {
        color: var(--text-primary) !important;
    }

    /* Paragraphs */
    .dark-mode p {
        color: var(--text-secondary) !important;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .dark-mode-toggle {
            padding: 6px 12px;
            font-size: 12px;
        }

        .dark-mode-toggle .dark-mode-text {
            display: none;
        }

        .back-to-top-btn {
            bottom: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
        }

        .back-to-top-text {
            display: none;
        }
    }

    /* Additional Dark Mode Styles */
    .dark-mode .bg-navy {
        background-color: var(--bg-secondary) !important;
    }

    .dark-mode .text-white {
        color: var(--text-primary) !important;
    }

    .dark-mode .border-gray-700 {
        border-color: var(--border-color) !important;
    }

    .dark-mode .border-gray-300 {
        border-color: var(--border-color) !important;
    }

    .dark-mode .bg-gray-50 {
        background-color: var(--bg-primary) !important;
    }

    .dark-mode .bg-gray-100 {
        background-color: var(--bg-secondary) !important;
    }

    .dark-mode .text-gray-500 {
        color: var(--text-secondary) !important;
    }

    .dark-mode .text-gray-400 {
        color: var(--text-secondary) !important;
    }

    /* Swiper styles */
    .dark-mode .swiper-pagination-bullet {
        background-color: var(--text-secondary) !important;
    }

    .dark-mode .swiper-pagination-bullet-active {
        background-color: var(--coral, #f08c7e) !important;
    }

    /* Custom scrollbar */
    .dark-mode ::-webkit-scrollbar {
        width: 8px;
    }

    .dark-mode ::-webkit-scrollbar-track {
        background: var(--bg-secondary);
    }

    .dark-mode ::-webkit-scrollbar-thumb {
        background: var(--border-color);
        border-radius: 4px;
    }

    .dark-mode ::-webkit-scrollbar-thumb:hover {
        background: var(--text-secondary);
    }

    /* Loading states */
    .dark-mode .loading {
        color: var(--text-secondary) !important;
    }

    /* Dropdown menus */
    .dark-mode .dropdown-menu {
        background-color: var(--bg-secondary) !important;
        border: 1px solid var(--border-color) !important;
        color: var(--text-primary) !important;
    }

    .dark-mode .dropdown-item {
        color: var(--text-primary) !important;
    }

    .dark-mode .dropdown-item:hover {
        background-color: var(--border-color) !important;
        color: var(--text-primary) !important;
    }

    /* Modal styles */
    .dark-mode .modal {
        background-color: var(--bg-secondary) !important;
        color: var(--text-primary) !important;
    }

    .dark-mode .modal-header {
        border-bottom: 1px solid var(--border-color) !important;
    }

    .dark-mode .modal-footer {
        border-top: 1px solid var(--border-color) !important;
    }

    /* Tooltip styles */
    .dark-mode .tooltip {
        background-color: var(--bg-secondary) !important;
        color: var(--text-primary) !important;
        border: 1px solid var(--border-color) !important;
    }

    /* Progress bars */
    .dark-mode .progress {
        background-color: var(--border-color) !important;
    }

    .dark-mode .progress-bar {
        background-color: var(--coral, #f08c7e) !important;
    }

    /* Badges */
    .dark-mode .badge {
        background-color: var(--bg-secondary) !important;
        color: var(--text-primary) !important;
        border: 1px solid var(--border-color) !important;
    }

    /* Alert styles */
    .dark-mode .alert {
        background-color: var(--bg-secondary) !important;
        border: 1px solid var(--border-color) !important;
        color: var(--text-primary) !important;
    }

    /* Enhanced transitions and animations */
    :root {
        --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
        --transition-duration: 0.5s;
    }

    * {
        transition: background-color var(--transition-duration) var(--transition-timing),
                   color var(--transition-duration) var(--transition-timing),
                   border-color var(--transition-duration) var(--transition-timing),
                   box-shadow var(--transition-duration) var(--transition-timing),
                   transform 0.3s var(--transition-timing),
                   opacity 0.3s var(--transition-timing);
    }

    /* Fade transition for mode switch */
    body {
        animation: fadeIn 0.5s var(--transition-timing);
    }

    .dark-mode body {
        animation: fadeIn 0.5s var(--transition-timing);
    }

    @keyframes fadeIn {
        from { opacity: 0.8; }
        to { opacity: 1; }
    }

    /* Slide up animation for elements on mode switch */
    .dark-mode .card-base,
    .dark-mode .testimonial-card,
    .dark-mode .founder-card {
        animation: slideUp 0.5s var(--transition-timing);
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Scale animation for buttons */
    .dark-mode .btn {
        animation: scaleIn 0.3s var(--transition-timing);
    }

    @keyframes scaleIn {
        from {
            transform: scale(0.95);
            opacity: 0.8;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    /* Smooth theme transitions */
    .dark-mode * {
        border-color: var(--border-color) !important;
    }

    /* Glow effects for interactive elements */
    .dark-mode .btn:hover,
    .dark-mode .dark-mode-toggle:hover,
    .dark-mode .filter-btn:hover {
        filter: brightness(1.1) saturate(1.1);
    }

    /* Subtle animations */
    @keyframes darkModeGlow {
        0% { box-shadow: var(--shadow); }
        50% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.3); }
        100% { box-shadow: var(--shadow); }
    }

    .dark-mode .btn-primary {
        animation: darkModeGlow 3s ease-in-out infinite;
    }

    /* Enhanced focus states */
    .dark-mode input:focus,
    .dark-mode textarea:focus,
    .dark-mode select:focus {
        outline: none;
        border-color: var(--coral) !important;
        box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2), var(--shadow-lg) !important;
    }

    /* Improved contrast for accessibility */
    .dark-mode a:focus,
    .dark-mode button:focus {
        outline: 2px solid var(--coral);
        outline-offset: 2px;
    }
`;

// Inject styles into document
function injectDarkModeStyles() {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = darkModeStyles;
  document.head.appendChild(styleSheet);
}

// Initialize dark mode system when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  injectDarkModeStyles();
  new DarkModeSystem();

  // Additional initialization for dynamic content
  setTimeout(() => {
    const darkModeSystem = window.darkModeSystem;
    if (darkModeSystem && darkModeSystem.isDarkMode) {
      darkModeSystem.applyTheme();
    }
  }, 1000);
});

// Re-apply theme when new content is loaded
window.addEventListener("load", () => {
  const darkModeSystem = window.darkModeSystem;
  if (darkModeSystem && darkModeSystem.isDarkMode) {
    darkModeSystem.applyTheme();
  }
});

// Export for potential external use
window.DarkModeSystem = DarkModeSystem;
