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
    this.cacheElements();
    this.applyTheme();
  }

  // Cache DOM elements for better performance
  cacheElements() {
    // Cache all needed elements for performance
    this.cachedElements = {
      root: document.documentElement,
      body: document.body,
      header: document.querySelector("header"),
      sections: document.querySelectorAll("section, header, footer, main"),
      containers: document.querySelectorAll(
        ".container, .card-base, .testimonial-card"
      ),
      bgWhiteElements: document.querySelectorAll(".bg-white"),
      textGrayElements: document.querySelectorAll(
        ".text-gray-700, .text-gray-600, .text-gray-800"
      ),
      bgLightCyanElements: document.querySelectorAll(".bg-light-cyan"),
      buttonIcon: this.darkModeButton?.querySelector("i"),
      buttonText: this.darkModeButton?.querySelector(".dark-mode-text"),
    };
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

  // Create back to top button with improved rendering
  createBackToTopButton() {
    this.backToTopButton = document.createElement("button");
    this.backToTopButton.id = "back-to-top";
    this.backToTopButton.className = "back-to-top-btn";
    this.backToTopButton.setAttribute("aria-label", "العودة للأعلى");

    // Use innerHTML once instead of multiple DOM operations
    this.backToTopButton.innerHTML = `
            <i class="fas fa-arrow-up"></i>
            <span class="back-to-top-text">أعلى</span>
        `;

    document.body.appendChild(this.backToTopButton);
  }

  // Setup event listeners with improved performance
  setupEventListeners() {
    // Dark mode toggle
    if (this.darkModeButton) {
      this.darkModeButton.addEventListener(
        "click",
        this.toggleDarkMode.bind(this)
      );
    }

    // Back to top button
    if (this.backToTopButton) {
      this.backToTopButton.addEventListener(
        "click",
        this.scrollToTop.bind(this)
      );
    }

    // Use throttled scroll handler for better performance
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Update theme when content changes
    const observer = new MutationObserver(() => {
      requestAnimationFrame(() => {
        this.cacheElements();
        if (this.isDarkMode) {
          this.applyTheme();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  // Toggle dark mode with improved performance
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    requestAnimationFrame(() => {
      this.applyTheme();
      this.saveThemeToStorage();
    });
  }

  // Apply theme to document with optimized DOM operations
  applyTheme() {
    // Cache elements if not already cached
    if (!this.cachedElements.sections) {
      this.cacheElements();
    }

    const {
      root,
      body,
      sections,
      containers,
      bgWhiteElements,
      textGrayElements,
      bgLightCyanElements,
      buttonIcon,
      buttonText,
    } = this.cachedElements;

    // Apply theme to root and body
    if (this.isDarkMode) {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
      body.classList.remove("dark-mode");
    }

    // Apply theme to cached elements efficiently
    if (this.isDarkMode) {
      // Add dark mode class to all main elements
      sections.forEach((element) => element.classList.add("dark-mode"));
      containers.forEach((element) => element.classList.add("dark-mode"));

      // Update specific elements with CSS variables
      requestAnimationFrame(() => {
        bgWhiteElements.forEach((element) => {
          element.style.setProperty("background-color", "var(--bg-secondary)");
          element.style.setProperty("color", "var(--text-primary)");
        });

        textGrayElements.forEach((element) => {
          element.style.setProperty("color", "var(--text-secondary)");
        });

        bgLightCyanElements.forEach((element) => {
          element.style.setProperty("background-color", "var(--bg-primary)");
        });
      });
    } else {
      // Remove dark mode class from all elements
      sections.forEach((element) => element.classList.remove("dark-mode"));
      containers.forEach((element) => element.classList.remove("dark-mode"));

      // Reset styles
      requestAnimationFrame(() => {
        bgWhiteElements.forEach((element) => {
          element.style.removeProperty("background-color");
          element.style.removeProperty("color");
        });

        textGrayElements.forEach((element) => {
          element.style.removeProperty("color");
        });

        bgLightCyanElements.forEach((element) => {
          element.style.removeProperty("background-color");
        });
      });
    }

    // Update button icon and text
    if (buttonIcon && buttonText) {
      requestAnimationFrame(() => {
        if (this.isDarkMode) {
          buttonIcon.className = "fas fa-sun";
          buttonText.textContent = "الوضع المضيء";
        } else {
          buttonIcon.className = "fas fa-moon";
          buttonText.textContent = "الوضع المظلم";
        }
      });
    }
  }

  // Handle scroll with throttling
  handleScroll() {
    if (this.backToTopButton) {
      const shouldShow = window.pageYOffset > 300;
      const isCurrentlyVisible =
        this.backToTopButton.classList.contains("visible");

      if (shouldShow !== isCurrentlyVisible) {
        requestAnimationFrame(() => {
          if (shouldShow) {
            this.backToTopButton.classList.add("visible");
          } else {
            this.backToTopButton.classList.remove("visible");
          }
        });
      }
    }
  }

  // Smooth scroll to top
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

// Global CSS variables and styles
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
        /* Dark Mode Colors */
        --bg-primary: #0f1419;
        --bg-secondary: #1a2332;
        --bg-tertiary: #243447;
        --text-primary: #e8eaed;
        --text-secondary: #bdc1c6;
        --text-muted: #9aa0a6;
        --border-color: #3c4043;
        --border-light: #5f6368;
        --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
        --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);

        /* Brand Colors - Dark */
        --coral: #ff6b6b;
        --coral-light: #ff8585;
        --coral-dark: #e55555;
        --teal: #20d4a3;
        --teal-light: #4ce0b3;
        --teal-dark: #1bb894;
        --navy: #1e3a8a;
        --navy-light: #3b82f6;
        
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

    /* Theme Transition Styles */
    *, *::before, *::after {
        transition: background-color var(--theme-transition),
                    color var(--theme-transition),
                    border-color var(--theme-transition),
                    box-shadow var(--theme-transition);
    }

    /* Dark Mode Toggle Button */
    .dark-mode-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 18px;
        background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
        border: 2px solid var(--border-color);
        border-radius: 30px;
        color: var(--text-primary);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-family: 'Tajawal', sans-serif;
        font-size: 14px;
        font-weight: 600;
        box-shadow: var(--shadow);
        backdrop-filter: blur(10px);
    }

    .dark-mode-toggle:hover {
        background: linear-gradient(135deg, var(--border-color), var(--border-light));
        transform: translateY(-3px) scale(1.05);
        box-shadow: var(--shadow-lg);
        border-color: var(--coral);
    }

    .dark-mode-toggle i {
        font-size: 16px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    .dark-mode-toggle:hover i {
        transform: rotate(20deg) scale(1.1);
        color: var(--coral);
    }

    .dark-mode .dark-mode-toggle {
        background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
        border-color: var(--border-light);
        color: var(--text-primary);
    }

    .dark-mode .dark-mode-toggle:hover {
        background: linear-gradient(135deg, var(--coral), var(--coral-dark));
        color: white;
        border-color: var(--coral);
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

    /* Dark Mode Specific Styles */
    .dark-mode {
        background-color: var(--bg-primary);
        color: var(--text-primary);
    }

    .dark-mode body,
    .dark-mode section,
    .dark-mode header,
    .dark-mode footer,
    .dark-mode main {
        background-color: var(--bg-primary);
        color: var(--text-primary);
    }

    /* Apply transitions to specific elements */
    .bg-white,
    .text-gray-700,
    .text-gray-600,
    .text-gray-800,
    .bg-light-cyan {
        transition: all var(--theme-transition);
    }

    /* Enhanced accessibility styles */
    .dark-mode-toggle:focus-visible,
    .back-to-top-btn:focus-visible {
        outline: 3px solid var(--coral);
        outline-offset: 2px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .dark-mode-toggle {
            padding: 8px 12px;
        }

        .dark-mode-toggle .dark-mode-text {
            display: none;
        }

        .back-to-top-btn {
            width: 50px;
            height: 50px;
            bottom: 20px;
            left: 20px;
        }

        .back-to-top-text {
            display: none;
        }
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
  window.darkModeSystem = new DarkModeSystem();
});

// Re-apply theme when new content is loaded
window.addEventListener("load", () => {
  if (window.darkModeSystem?.isDarkMode) {
    window.darkModeSystem.applyTheme();
  }
});

// Export for potential external use
window.DarkModeSystem = DarkModeSystem;
