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
