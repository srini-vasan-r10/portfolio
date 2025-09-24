document.addEventListener("DOMContentLoaded", function() {

    // --- Typing Animation ---
    const typingTextElement = document.getElementById('typing-text');
    if (typingTextElement) {
        const textArray = ["Management Trainee", "Finance Enthusiast", "Aspiring Analyst"];
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typingTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, 500);
            }
        }
        
        type();
    }


    // --- Mobile Navigation ---
    const hamburger = document.querySelector(".hamburger");
    const mobileNav = document.querySelector(".mobile-nav");

    if (hamburger && mobileNav) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            mobileNav.classList.toggle("active");
        });

        document.querySelectorAll(".mobile-nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            mobileNav.classList.remove("active");
        }));
    }

    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((el) => observer.observe(el));

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            if (themeIcon) themeIcon.textContent = 'dark_mode';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            if (themeIcon) themeIcon.textContent = 'light_mode';
            localStorage.setItem('theme', 'light');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-theme');
            setTheme(isDark ? 'light' : 'dark');
        });
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

});