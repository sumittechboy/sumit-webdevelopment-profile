// Page behavior extracted from inline script in index.html

// Menu toggle and auto-hide topbar logic
(function () {
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('projectsMenu');
    const menuClose = document.getElementById('menuClose');
    const topbar = document.getElementById('topbar');

    function openMenu() {
        if (!menu) return;
        menu.classList.add('open');
        menu.setAttribute('aria-hidden', 'false');
        menuBtn.setAttribute('aria-expanded', 'true');
        menu.focus();
    }

    function closeMenu() {
        if (!menu) return;
        menu.classList.remove('open');
        menu.setAttribute('aria-hidden', 'true');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.focus();
    }

    if (menuBtn) menuBtn.addEventListener('click', function () {
        if (menu && menu.classList.contains('open')) closeMenu(); else openMenu();
    });
    if (menuClose) menuClose.addEventListener('click', closeMenu);

    // Show topbar only while the user is actively scrolling
    let scrollTimer = null;
    const SCROLL_HIDE_DELAY = 2000; // ms after scroll stops

    function onScrollShowTopbar() {
        if (!topbar) return;
        topbar.classList.remove('hidden');
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            topbar.classList.add('hidden');
        }, SCROLL_HIDE_DELAY);
    }

    // Listen only to scroll/touch events to show the bar while scrolling
    window.addEventListener('scroll', onScrollShowTopbar, { passive: true });
    window.addEventListener('touchmove', onScrollShowTopbar, { passive: true });

    // Prevent hiding while cursor is over the topbar (or when touched)
    let hoverLock = false;
    function lockTopbar() {
        hoverLock = true;
        if (scrollTimer) clearTimeout(scrollTimer);
        if (topbar) topbar.classList.remove('hidden');
    }
    function unlockTopbar() {
        hoverLock = false;
        // start hide timer again
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            if (!hoverLock && topbar) topbar.classList.add('hidden');
        }, SCROLL_HIDE_DELAY);
    }

    if (topbar) {
        topbar.addEventListener('mouseenter', lockTopbar);
        topbar.addEventListener('mouseleave', unlockTopbar);
        topbar.addEventListener('touchstart', lockTopbar, { passive: true });
        topbar.addEventListener('touchend', unlockTopbar, { passive: true });
    }

    // Initially hide the topbar
    document.addEventListener('DOMContentLoaded', function () {
        if (topbar) topbar.classList.add('hidden');
    });
})();

// Secret book access
(function () {
    const secretInput = document.getElementById('secretInput');
    const openBookBtn = document.getElementById('openBookBtn');
    if (!secretInput || !openBookBtn) return;

    // Listen for input and show button if keyword matches (case-insensitive)
    secretInput.addEventListener('input', function () {
        const value = secretInput.value.trim().toLowerCase();
        if (value === 'book' || value === 'sonali') {
            openBookBtn.style.display = 'inline-block';
        } else {
            openBookBtn.style.display = 'none';
        }
    });
    // On button click, open Notion page in new tab
    openBookBtn.addEventListener('click', function () {
        window.open('https://cumbersome-dodo-4d2.notion.site/Master-Frontend-in-100-Days-87a27932b3ba43eaad52c394b8664a10?pvs=149', '_blank');
    });
})();

// Clock
(function () {
    function pad(n) { return n < 10 ? '0' + n : n; }
    const dis = document.getElementById('Time');
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    function updateClock() {
        const dateTime = new Date();
        const hour = dateTime.getHours();
        const minute = dateTime.getMinutes();
        const second = dateTime.getSeconds();
        const AmPm = hour >= 12 ? 'pm' : 'am';
        let hour12 = hour % 12;
        hour12 = hour12 ? hour12 : 12;
        if (dis) dis.innerText = `${pad(hour12)}:${pad(minute)}:${pad(second)} ${AmPm}`;
        const hourDeg = (hour12 * 30) + (minute * 0.5);
        const minuteDeg = (minute * 6) + (second * 0.1);
        const secondDeg = second * 6;
        if (hourHand) hourHand.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
        if (minuteHand) minuteHand.style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
        if (secondHand) secondHand.style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
    }

    updateClock();
    setInterval(updateClock, 1000);
})();

// Day-specific download functionality
(function () {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        const downloadButtons = document.querySelectorAll('.day-download-btn');
        
        downloadButtons.forEach(button => {
            button.addEventListener('click', async function () {
                const dayFolder = this.getAttribute('data-day');
                const buttonText = this.innerHTML;
                
                // Disable button and show loading state
                this.disabled = true;
                this.innerHTML = '⏳ Preparing...';
                
                try {
                    await downloadDayFolder(dayFolder);
                    this.innerHTML = '✅ Downloaded!';
                    setTimeout(() => {
                        this.innerHTML = buttonText;
                        this.disabled = false;
                    }, 2000);
                } catch (error) {
                    console.error('Download failed:', error);
                    this.innerHTML = '❌ Failed';
                    setTimeout(() => {
                        this.innerHTML = buttonText;
                        this.disabled = false;
                    }, 2000);
                }
            });
        });
    });

    async function downloadDayFolder(dayFolder) {
        const zip = new JSZip();
        const basePath = `./practice_sessions/${dayFolder}`;
        
        // Define file extensions to include
        const fileExtensions = ['.html', '.css', '.js', '.json', '.txt', '.md', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.ico'];
        
        // Try to fetch common files that might exist
        const commonFiles = [
            'index.html',
            'style.css',
            'styles.css',
            'main.css',
            'script.js',
            'app.js',
            'main.js',
            'day10.html', // for Day 10
            'date.html', // for js_practice
            'README.md'
        ];
        
        let filesAdded = 0;
        
        // Try to fetch each common file
        for (const fileName of commonFiles) {
            try {
                const response = await fetch(`${basePath}/${fileName}`);
                if (response.ok) {
                    const blob = await response.blob();
                    zip.file(fileName, blob);
                    filesAdded++;
                    console.log(`Added: ${fileName}`);
                }
            } catch (error) {
                // File doesn't exist, skip it
                console.log(`Skipped: ${fileName}`);
            }
        }
        
        // If no files were found, show an error
        if (filesAdded === 0) {
            throw new Error('No files found in the folder');
        }
        
        // Generate the zip file
        const content = await zip.generateAsync({ type: 'blob' });
        
        // Download the zip file
        const zipFileName = `${dayFolder.replace(/\//g, '_')}_source.zip`;
        saveAs(content, zipFileName);
    }
})();

// PDF Dialog functionality
(function () {
    const showNotesBtn = document.getElementById('showNotesBtn');
    const pdfDialog = document.getElementById('pdfDialog');
    const closePdfDialog = document.getElementById('closePdfDialog');

    if (!showNotesBtn || !pdfDialog || !closePdfDialog) return;

    // Open dialog
    showNotesBtn.addEventListener('click', function () {
        pdfDialog.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close dialog
    function closeDialog() {
        pdfDialog.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling
    }

    closePdfDialog.addEventListener('click', closeDialog);

    // Close dialog when clicking outside the content
    pdfDialog.addEventListener('click', function (e) {
        if (e.target === pdfDialog) {
            closeDialog();
        }
    });

    // Close dialog with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && pdfDialog.classList.contains('open')) {
            closeDialog();
        }
    });
})();

