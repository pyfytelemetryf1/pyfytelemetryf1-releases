/**
 * Demo walkthrough viewer — drawer navigation, keyboard, touch, preloading.
 */
(function () {
    'use strict';

    // --- State ---
    let currentScenarioId = 'highlights';
    let currentSlideIndex = 0;
    let touchStartX = 0;
    let touchStartY = 0;

    // --- DOM refs ---
    const drawerItems = document.querySelectorAll('.drawer-item');
    const drawer = document.getElementById('drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawerClose = document.querySelector('.drawer-close');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const slideImage = document.querySelector('.slide-image');
    const slideArea = document.querySelector('.slide-area');
    const slideContent = document.querySelector('.slide-content');
    const captionGroup = document.querySelector('.caption-group');
    const captionTitle = document.querySelector('.caption-title');
    const captionDescription = document.querySelector('.caption-description');
    const captionDisclaimer = document.querySelector('.caption-disclaimer');
    const slideCounter = document.querySelector('.slide-counter');
    const progressFill = document.querySelector('.progress-fill');
    const navPrev = document.querySelector('.nav-prev');
    const navNext = document.querySelector('.nav-next');

    // --- Drawer ---
    let drawerOpen = true;

    function openDrawer() {
        drawerOpen = true;
        drawer.classList.remove('closed');
        document.body.classList.add('drawer-open');
    }

    function closeDrawer() {
        drawerOpen = false;
        drawer.classList.add('closed');
        document.body.classList.remove('drawer-open');
    }

    function toggleDrawer() {
        if (drawerOpen) closeDrawer();
        else openDrawer();
    }

    // Position drawer between header and footer
    function positionDrawer() {
        const headerRect = document.querySelector('.site-header').getBoundingClientRect();
        const footerRect = document.querySelector('.site-footer').getBoundingClientRect();
        drawer.style.top = headerRect.bottom + 'px';
        drawer.style.bottom = (window.innerHeight - footerRect.top + 1) + 'px';
    }
    // Size image to fit available space
    function sizeSlideImage() {
        const headerH = document.querySelector('.site-header').getBoundingClientRect().height;
        const captionH = document.querySelector('.caption-bar').getBoundingClientRect().height;
        const footerH = document.querySelector('.site-footer').getBoundingClientRect().height;
        const available = window.innerHeight - headerH - captionH - footerH - 40;
        slideImage.style.maxHeight = available + 'px';
        // Also size placeholders
        document.querySelectorAll('.slide-placeholder, .slide-markdown').forEach(el => {
            el.style.maxHeight = available + 'px';
        });
    }

    positionDrawer();
    sizeSlideImage();
    window.addEventListener('resize', () => { positionDrawer(); sizeSlideImage(); });

    // Start open
    openDrawer();

    hamburgerBtn.addEventListener('click', toggleDrawer);
    drawerClose.addEventListener('click', closeDrawer);

    // --- Helpers ---
    function getScenario(id) {
        return SCENARIOS.find(s => s.id === id);
    }

    function getCurrentScenario() {
        return getScenario(currentScenarioId);
    }

    function getCurrentSlide() {
        const scenario = getCurrentScenario();
        return scenario ? scenario.slides[currentSlideIndex] : null;
    }

    // --- Preloading ---
    const preloadCache = new Set();

    function preloadImage(src) {
        if (!src || preloadCache.has(src)) return;
        preloadCache.add(src);
        const img = new Image();
        img.src = src;
    }

    function preloadAround(scenarioId, index) {
        const scenario = getScenario(scenarioId);
        if (!scenario) return;
        for (let offset = -1; offset <= 2; offset++) {
            const i = (index + offset + scenario.slides.length) % scenario.slides.length;
            const slide = scenario.slides[i];
            if (slide && slide.image) preloadImage(slide.image);
        }
    }

    // --- Rendering ---
    function renderSlide() {
        const scenario = getCurrentScenario();
        const slide = getCurrentSlide();
        if (!scenario || !slide) return;

        const total = scenario.slides.length;

        // Clear existing placeholder/markdown
        const existing = slideContent.querySelectorAll('.slide-placeholder, .slide-markdown');
        existing.forEach(el => el.remove());

        if (slide.placeholder) {
            slideImage.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'slide-placeholder';
            placeholder.innerHTML = '<div class="slide-placeholder-icon">&#128247;</div>' +
                '<div>Screenshot coming soon</div>';
            slideContent.appendChild(placeholder);
        } else if (slide.markdown) {
            slideImage.style.display = 'none';
            const mdDiv = document.createElement('div');
            mdDiv.className = 'slide-markdown';
            mdDiv.innerHTML = slide.markdown;
            slideContent.appendChild(mdDiv);
        } else {
            slideImage.style.display = '';
            slideImage.classList.remove('loaded');
            slideImage.classList.add('loading');
            slideImage.alt = slide.title;

            const img = new Image();
            img.onload = function () {
                slideImage.src = img.src;
                slideImage.classList.remove('loading');
                slideImage.classList.add('loaded');
            };
            img.onerror = function () {
                slideImage.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'slide-placeholder';
                placeholder.innerHTML = '<div class="slide-placeholder-icon">&#128247;</div>' +
                    '<div>Image not available</div>';
                slideContent.appendChild(placeholder);
            };
            img.src = slide.image;
        }

        // Caption
        captionGroup.textContent = slide.group || '';
        captionTitle.textContent = slide.title || '';
        captionDescription.textContent = slide.description || '';
        captionDisclaimer.textContent = slide.disclaimer || '';

        // Counter
        slideCounter.textContent = (currentSlideIndex + 1) + ' / ' + total;

        // Progress
        const pct = total > 1 ? (currentSlideIndex / (total - 1)) * 100 : 100;
        progressFill.style.width = pct + '%';

        // Arrows — always enabled (wrap around)
        navPrev.classList.remove('disabled');
        navNext.classList.remove('disabled');

        // Preload neighbors
        preloadAround(currentScenarioId, currentSlideIndex);

        // Update hash and sizing
        updateHash();
        sizeSlideImage();
    }

    function switchScenario(scenarioId) {
        currentScenarioId = scenarioId;
        currentSlideIndex = 0;

        // Update drawer active state
        drawerItems.forEach(item => {
            item.classList.toggle('active', item.dataset.scenario === scenarioId);
        });

        renderSlide();
    }

    function goToSlide(index) {
        const scenario = getCurrentScenario();
        if (!scenario) return;
        // Wrap around
        const total = scenario.slides.length;
        currentSlideIndex = ((index % total) + total) % total;
        renderSlide();
    }

    function nextSlide() {
        goToSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentSlideIndex - 1);
    }

    // --- Event Handlers ---

    // Drawer item clicks
    drawerItems.forEach(item => {
        item.addEventListener('click', () => {
            switchScenario(item.dataset.scenario);
        });
    });

    // Arrow clicks
    navPrev.addEventListener('click', prevSlide);
    navNext.addEventListener('click', nextSlide);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        // Don't handle keys when help or drawer is open
        const helpOverlay = document.getElementById('help-overlay');

        switch (e.key) {
            case 'ArrowLeft':
                if (helpOverlay.hidden) {
                    e.preventDefault();
                    prevSlide();
                }
                break;
            case 'ArrowRight':
                if (helpOverlay.hidden) {
                    e.preventDefault();
                    nextSlide();
                }
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(getCurrentScenario().slides.length - 1);
                break;
            case 'Escape':
                e.preventDefault();
                if (!helpOverlay.hidden) {
                    closeHelp();
                } else if (drawerOpen) {
                    closeDrawer();
                } else {
                    goToSlide(0);
                }
                break;
            case '?':
                if (!e.ctrlKey && !e.metaKey && !e.altKey) {
                    e.preventDefault();
                    if (helpOverlay.hidden) openHelp();
                    else closeHelp();
                }
                break;
            case 'm':
            case 'M':
                if (!e.ctrlKey && !e.metaKey && !e.altKey) {
                    toggleDrawer();
                }
                break;
        }

        // Number keys 1-5 switch scenarios
        if (e.key >= '1' && e.key <= '5' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            if (helpOverlay.hidden) {
                const idx = parseInt(e.key) - 1;
                if (idx < SCENARIOS.length) {
                    switchScenario(SCENARIOS[idx].id);
                }
            }
        }
    });

    // Touch/swipe
    const viewer = document.querySelector('.viewer-container');

    viewer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    viewer.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
            if (dx < 0) nextSlide();
            else prevSlide();
        }
    }, { passive: true });

    // Prevent image dragging
    slideImage.addEventListener('dragstart', (e) => e.preventDefault());

    // --- Help Panel ---
    const drawerHelpBtn = document.getElementById('drawer-help-btn');
    const helpOverlay = document.getElementById('help-overlay');
    const helpClose = document.querySelector('.help-close');
    const helpBody = document.getElementById('help-body');
    let helpLoaded = false;

    function openHelp() {
        if (!helpLoaded) loadHelp();
        helpOverlay.hidden = false;
    }

    function closeHelp() {
        helpOverlay.hidden = true;
    }

    function loadHelp() {
        fetch('usage-guide.html')
            .then(r => {
                if (!r.ok) throw new Error('Not found');
                return r.text();
            })
            .then(html => {
                helpBody.innerHTML = html;
                helpLoaded = true;
            })
            .catch(() => {
                helpBody.innerHTML = '<p>Usage guide not available yet. ' +
                    'Visit the <a href="https://github.com/pyfytelemetryf1/pyfytelemetryf1-releases" ' +
                    'target="_blank" rel="noopener">GitHub repository</a> for documentation.</p>';
                helpLoaded = true;
            });
    }

    drawerHelpBtn.addEventListener('click', openHelp);
    helpClose.addEventListener('click', closeHelp);
    helpOverlay.addEventListener('click', (e) => {
        if (e.target === helpOverlay) closeHelp();
    });

    // Back-to-top button in usage guide
    helpBody.addEventListener('scroll', () => {
        const btn = document.getElementById('guide-back-to-top');
        if (btn) {
            btn.classList.toggle('visible', helpBody.scrollTop > 200);
        }
    });
    helpBody.addEventListener('click', (e) => {
        if (e.target.id === 'guide-back-to-top') {
            helpBody.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Handle TOC anchor clicks — scroll within the panel
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const targetId = decodeURIComponent(link.getAttribute('href').slice(1));
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });

    // --- URL hash routing ---
    function parseHash() {
        const hash = window.location.hash.slice(1);
        if (!hash) return;
        const parts = hash.split('/');
        const scenarioId = parts[0];
        const slideIndex = parts[1] ? parseInt(parts[1]) - 1 : 0;

        const scenario = getScenario(scenarioId);
        if (scenario) {
            currentScenarioId = scenarioId;
            currentSlideIndex = Math.max(0, Math.min(slideIndex, scenario.slides.length - 1));

            drawerItems.forEach(item => {
                item.classList.toggle('active', item.dataset.scenario === scenarioId);
            });

            renderSlide();
        }
    }

    function updateHash() {
        const newHash = currentScenarioId + '/' + (currentSlideIndex + 1);
        if (window.location.hash.slice(1) !== newHash) {
            history.replaceState(null, '', '#' + newHash);
        }
    }

    window.addEventListener('hashchange', parseHash);

    // --- Init ---
    parseHash();
    renderSlide();

})();
