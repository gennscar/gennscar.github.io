// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Force scroll to top on page load (mobile fix)
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    
    // Multiple methods to ensure we start at top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional mobile fix
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 100);
    
    initializeTheme();
    initializeThemeToggle();
    initializeNavigation();
    initializeAnimations();
    initializeSkillBars();
    initializeParticles();
});

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Animate theme transition
        gsap.to('body', {
            duration: 0.3,
            ease: "power2.inOut",
            onComplete: () => {
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeIcon(newTheme);
            }
        });
    });
}

function updateThemeIcon(theme) {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (theme === 'light') {
        gsap.to(sunIcon, { opacity: 1, rotation: 0, scale: 1, duration: 0.3 });
        gsap.to(moonIcon, { opacity: 0, rotation: -180, scale: 0.5, duration: 0.3 });
    } else {
        gsap.to(sunIcon, { opacity: 0, rotation: 180, scale: 0.5, duration: 0.3 });
        gsap.to(moonIcon, { opacity: 1, rotation: 0, scale: 1, duration: 0.3 });
    }
}

// ===== HERO ANIMATIONS =====
function initializeAnimations() {
    // Hero entrance animation
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .fromTo('.hero-title .title-line', 
            { 
                opacity: 0, 
                y: 50,
                rotationX: -90
            },
            { 
                opacity: 1, 
                y: 0,
                rotationX: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            }
        )
        .fromTo('.hero-subtitle', 
            { 
                opacity: 0, 
                y: 30 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                ease: "power2.out"
            }, 
            "-=0.5"
        )
        .fromTo('.hero-description', 
            { 
                opacity: 0, 
                y: 30 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                ease: "power2.out"
            }, 
            "-=0.3"
        )
        .fromTo('.hero-buttons .btn', 
            { 
                opacity: 0, 
                scale: 0.8,
                y: 20
            },
            { 
                opacity: 1, 
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, 
            "-=0.3"
        )
        .fromTo('.profile-image', 
            { 
                opacity: 0,
                scale: 0.5,
                rotation: -10
            },
            { 
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "power2.out"
            }, 
            "-=0.8"
        )
        .fromTo('.scroll-indicator', 
            { 
                opacity: 0,
                y: 20
            },
            { 
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, 
            "-=0.3"
        );
}

// ===== SCROLL-TRIGGERED ANIMATIONS =====
// About section animation
ScrollTrigger.create({
    trigger: '.about',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.about-text p', 
            { 
                opacity: 0, 
                y: 30 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }
        );
        
        gsap.fromTo('.stat-item', 
            { 
                opacity: 0, 
                scale: 0.8,
                y: 30
            },
            { 
                opacity: 1, 
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }
        );
    }
});

// Skills section animation
ScrollTrigger.create({
    trigger: '.skills',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.skill-category', 
            { 
                opacity: 0, 
                y: 50,
                scale: 0.9
            },
            { 
                opacity: 1, 
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }
        );
    }
});

// Projects section animation
ScrollTrigger.create({
    trigger: '.projects',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.project-card', 
            { 
                opacity: 0, 
                y: 80,
                rotationY: -15
            },
            { 
                opacity: 1, 
                y: 0,
                rotationY: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            }
        );
    }
});

// Experience section animation
ScrollTrigger.create({
    trigger: '.experience',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.timeline-item', 
            { 
                opacity: 0, 
                x: -50
            },
            { 
                opacity: 1, 
                x: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out"
            }
        );
    }
});

// Contact section animation
ScrollTrigger.create({
    trigger: '.contact',
    start: 'top 80%',
    onEnter: () => {
        gsap.fromTo('.contact-intro', 
            { 
                opacity: 0, 
                y: 30 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                ease: "power2.out"
            }
        );
        
        gsap.fromTo('.contact-link', 
            { 
                opacity: 0, 
                x: -30,
                scale: 0.9
            },
            { 
                opacity: 1, 
                x: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }
        );
    }
});

// ===== SKILL BARS ANIMATION =====
function initializeSkillBars() {
    ScrollTrigger.create({
        trigger: '.skills',
        start: 'top 60%',
        onEnter: () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
                const progress = bar.getAttribute('data-progress');
                gsap.to(bar, {
                    width: progress + '%',
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            });
        }
    });
}

// ===== NAVIGATION =====
function initializeNavigation() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('nav-menu-open')) {
                navMenu.classList.remove('nav-menu-open');
                if (navToggle) {
                    navToggle.classList.remove('nav-toggle-open');
                }
            }
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 0.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 70
                    },
                    ease: "power1.out"
                });

                // Reduced active state animation for performance
                gsap.fromTo(this, 
                    { scale: 1 },
                    { 
                        scale: 1.02, 
                        duration: 0.05, 
                        yoyo: true, 
                        repeat: 1,
                        ease: "power1.out"
                    }
                );
            }
        });
    });

    // Navigation background on scroll
    ScrollTrigger.create({
        start: 'top -70',
        end: 99999,
        toggleClass: {
            className: 'nav-scrolled',
            targets: '.nav'
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 100px',
            end: 'bottom 100px',
            onEnter: () => updateActiveNavLink(section.id),
            onEnterBack: () => updateActiveNavLink(section.id)
        });
    });

    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-menu-open');
            navToggle.classList.toggle('nav-toggle-open');
            
            // Animate mobile menu
            if (navMenu.classList.contains('nav-menu-open')) {
                gsap.fromTo(navMenu, 
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
                );
            }
        });
    }
}

function updateActiveNavLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// ===== FLOATING PARTICLES =====
function initializeParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;

    // Determine particle count based on device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const particleCount = isMobile ? 10 : 30;

    // Create floating particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: var(--accent);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        particlesContainer.appendChild(particle);
        
        // Animate particles
        gsap.to(particle, {
            y: -100,
            x: Math.random() * 100 - 50,
            duration: Math.random() * 15 + 10,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 5
        });
        
        gsap.to(particle, {
            opacity: Math.random() * 0.7 + 0.1,
            duration: Math.random() * 4 + 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }
}

// ===== INTERACTIVE EFFECTS =====
// Project card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(this.querySelector('.project-icon'), {
                rotation: 5,
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(this.querySelector('.project-icon'), {
                rotation: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});

// Button hover effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.btn-icon');
            if (icon) {
                gsap.to(icon, {
                    x: 3,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.btn-icon');
            if (icon) {
                gsap.to(icon, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });
});

// Skill category hover effects
document.addEventListener('DOMContentLoaded', function() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        category.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});

// Timeline item hover effects
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-content');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, {
                x: 10,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});

// ===== SCROLL PROGRESS INDICATOR =====
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
        const progress = self.progress;
        document.documentElement.style.setProperty('--scroll-progress', progress);
    }
});

// ===== PARALLAX EFFECTS =====
gsap.to('.circuit-pattern', {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: '.hero',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    }
});

// ===== SECTION REVEAL ANIMATION =====
gsap.utils.toArray('.section').forEach(section => {
    gsap.fromTo(section, 
        {
            opacity: 0.8,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            }
        }
    );
});

// ===== PERFORMANCE OPTIMIZATION =====
// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0.5);
    ScrollTrigger.config({ 
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" 
    });
}

// Mobile performance optimizations
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
    // Reduce particle count on mobile
    const particleCount = 10; // Further reduced from 15
    
    // Optimize scroll trigger refresh rate
    ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
        refreshPriority: -1 // Lower priority for better performance
    });
    
    // Add touch event optimizations
    document.addEventListener('touchstart', function() {}, { passive: true });
    document.addEventListener('touchmove', function() {}, { passive: true });
    
    // Disable complex animations on mobile
    gsap.set('.floating-particles', { display: 'none' });
    
    // Reduce animation complexity
    gsap.globalTimeline.timeScale(1.5); // Faster animations
}

// ===== RESIZE HANDLER =====
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// ===== LOADING ANIMATION =====
window.addEventListener('load', function() {
    // Ensure page starts at top (especially important for mobile)
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Additional delay for mobile browsers
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 50);
    
    gsap.to('.hero', {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    });
    
    // Add loading complete class
    document.body.classList.add('loaded');
});

// ===== EASTER EGG =====
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg: Make robot dance
        gsap.to('.profile-image', {
            rotation: 360,
            scale: 1.2,
            duration: 2,
            ease: "bounce.out",
            onComplete: () => {
                gsap.to('.profile-image', {
                    rotation: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power2.out"
                });
            }
        });
        
        // Show message
        const message = document.createElement('div');
        message.textContent = '🤖 Robot activated! 🤖';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--gradient-primary);
            color: white;
            padding: 1rem 2rem;
            border-radius: 12px;
            font-weight: 600;
            z-index: 10000;
            box-shadow: var(--shadow-card);
        `;
        document.body.appendChild(message);
        
        gsap.fromTo(message, 
            { opacity: 0, scale: 0.5 },
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.5,
                ease: "back.out(1.7)",
                onComplete: () => {
                    gsap.to(message, {
                        opacity: 0,
                        scale: 0.5,
                        duration: 0.5,
                        delay: 2,
                        ease: "power2.in",
                        onComplete: () => message.remove()
                    });
                }
            }
        );
        
        konamiCode = [];
    }
});

// ===== HOME BUTTON SCROLL TO TOP =====
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure all elements are loaded
    setTimeout(() => {
        const homeButton = document.getElementById('homeButton');
        
        if (homeButton) {
            console.log('Home button found and initializing...');
            
            // Main click handler
            homeButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Home button clicked - scrolling to top');
                
                // Use native smooth scroll as primary method
                window.scrollTo({ 
                    top: 0, 
                    left: 0,
                    behavior: 'smooth' 
                });
                
                // Add GSAP animation if available
                if (window.gsap && window.gsap.to) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: 0 },
                        ease: "power2.inOut"
                    });
                }
            });
            
            // Visual feedback
            homeButton.addEventListener('mousedown', function() {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s ease';
            });
            
            homeButton.addEventListener('mouseup', function() {
                this.style.transform = 'scale(1)';
            });
            
            homeButton.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            console.log('Home button initialized successfully');
        } else {
            console.error('Home button not found in DOM');
        }
    }, 100);
}); 