// Tab Navigation System
class TabNavigator {
    constructor() {
        this.activeTab = 'about'; // Default active tab
        this.tabLinks = document.querySelectorAll('.tab-link');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.init();
    }

    init() {
        // Add click event listeners to tab links
        this.tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tabId = link.getAttribute('data-tab');
                this.switchTab(tabId);
            });
        });

        // Initialize with default tab
        this.switchTab(this.activeTab);
    }

    switchTab(tabId) {
        this.tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        this.tabLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to selected tab and link
        const selectedTab = document.getElementById(tabId);
        const selectedLink = document.querySelector(`[data-tab="${tabId}"]`);
        
        if (selectedTab && selectedLink) {
            selectedTab.classList.add('active');
            selectedLink.classList.add('active');
            this.activeTab = tabId;
            
            // Trigger animations for the new tab
            this.triggerTabAnimations(tabId);
            
            // Update URL hash without scrolling
            if (history.pushState) {
                history.pushState(null, null, `#${tabId}`);
            }

            // Reset scroll position to top of the content container
            const container = document.querySelector('.tab-content-container');
            if (container) {
                container.scrollTo({ top: 0, behavior: 'instant' });
            }
            // Also reset the window scroll to top to be safe
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }

    triggerTabAnimations(tabId) {
        const activeTabContent = document.getElementById(tabId);
        
        // Fade in animations for tab content
        this.fadeInElements(activeTabContent);
        
        // Special animations for about tab
        if (tabId === 'about') {
            this.animateGlowTags(activeTabContent);
        }
    }

    animateGlowTags(container) {
        const glowTags = container.querySelectorAll('.glow-tag');
        
        glowTags.forEach((tag, index) => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(10px) scale(0.9)';
            
            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0) scale(1)';
                tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            }, index * 30 + 200);
        });
    }

    fadeInElements(container) {
        const elements = container.querySelectorAll('.technical-skills-unified, .languages-section, .project-card, .timeline-item, .education-item, .publication-item, .hobby-card');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }, index * 100);
        });
    }
}

// Mobile Navigation Toggle
class MobileNavigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.init();
    }

    init() {
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => {
                this.toggle();
            });

            // Close mobile menu when clicking on a tab link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    this.close();
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.hamburger.contains(e.target) && !this.navMenu.contains(e.target)) {
                    this.close();
                }
            });
        }
    }

    toggle() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    close() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// Navbar scroll effect (minimal since we're not scrolling much)
class NavbarEffects {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.init();
    }

    init() {
        const tabContainer = document.querySelector('.tab-content-container');
        if (tabContainer) {
            tabContainer.addEventListener('scroll', () => {
                this.updateNavbar(tabContainer.scrollTop);
            });
        }
    }

    updateNavbar(scrollTop) {
        if (scrollTop > 50) {
            this.navbar.style.background = 'rgba(10, 10, 11, 0.98)';
            this.navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
        } else {
            this.navbar.style.background = 'rgba(10, 10, 11, 0.98)';
            this.navbar.style.boxShadow = 'none';
        }
    }
}

// Interactive card effects
class CardEffects {
    constructor() {
        this.init();
    }

    init() {
        this.addHoverEffects();
    }

    addHoverEffects() {
        // Project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Hobby cards
        const hobbyCards = document.querySelectorAll('.hobby-card');
        hobbyCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Education items
        const educationItems = document.querySelectorAll('.education-item');
        educationItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-2px) scale(1.01)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Publication items
        const publicationItems = document.querySelectorAll('.publication-item');
        publicationItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-2px) scale(1.01)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Technical skills unified container
        const technicalSkills = document.querySelector('.technical-skills-unified');
        if (technicalSkills) {
            technicalSkills.addEventListener('mouseenter', () => {
                technicalSkills.style.transform = 'translateY(-2px) scale(1.01)';
            });
            
            technicalSkills.addEventListener('mouseleave', () => {
                technicalSkills.style.transform = 'translateY(0) scale(1)';
            });
        }

        // Languages section
        const languagesSection = document.querySelector('.languages-section');
        if (languagesSection) {
            languagesSection.addEventListener('mouseenter', () => {
                languagesSection.style.transform = 'translateY(-2px) scale(1.01)';
            });
            
            languagesSection.addEventListener('mouseleave', () => {
                languagesSection.style.transform = 'translateY(0) scale(1)';
            });
        }
    }
}

// Dynamic Title and Typing Animation removed to keep title static


// URL hash handling
class URLHandler {
    constructor(tabNavigator) {
        this.tabNavigator = tabNavigator;
        this.init();
    }

    init() {
        // Handle initial hash
        window.addEventListener('load', () => {
            this.handleHash();
        });

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            this.handleHash();
        });
    }

    handleHash() {
        const hash = window.location.hash.replace('#', '');
        const validTabs = ['about', 'experience', 'projects', 'education', 'publications', 'hobbies'];
        
        if (hash && validTabs.includes(hash)) {
            this.tabNavigator.switchTab(hash);
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const tabNavigator = new TabNavigator();
    const mobileNav = new MobileNavigation();
    const navbarEffects = new NavbarEffects();
    const cardEffects = new CardEffects();
    const urlHandler = new URLHandler(tabNavigator);
    
    // Add some nice entrance animations
    setTimeout(() => {
        const personalHeader = document.querySelector('.personal-header');
        if (personalHeader) {
            personalHeader.style.opacity = '1';
            personalHeader.style.transform = 'translateY(0)';
            
            // Ensure name stays completely static
            const nameElement = personalHeader.querySelector('.name');
            if (nameElement) {
                nameElement.style.opacity = '1';
                nameElement.style.transform = 'none';
                nameElement.style.transition = 'none';
                nameElement.style.animation = 'none';
            }
        }
    }, 100);
});

// Prevent default anchor behavior for tab links
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-link')) {
        e.preventDefault();
    }
});

// Add loading state management
window.addEventListener('load', () => {
    // Remove any loading overlays
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
    
    // Ensure proper initial state
    document.body.classList.add('loaded');
});