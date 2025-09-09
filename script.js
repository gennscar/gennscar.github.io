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
        // Remove active class from all tabs and links
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

// Contact form handling
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                this.handleSubmit(e);
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            this.showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual backend integration)
        this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        this.form.reset();
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#00d4ff' : type === 'error' ? '#ff4757' : '#333'};
            color: ${type === 'success' ? '#0a0a0b' : 'white'};
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Add close functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: ${type === 'success' ? '#0a0a0b' : 'white'};
            font-size: 18px;
            margin-left: 10px;
            cursor: pointer;
            float: right;
        `;
        
        closeBtn.addEventListener('click', () => {
            this.removeNotification(notification);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                this.removeNotification(notification);
            }
        }, 5000);
    }

    removeNotification(notification) {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
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

// Dynamic Title and Typing Animation
class DynamicTitleAnimation {
    constructor() {
        this.titles = [
            'Robotics Software Engineer',
            'Robotics & AI Engineer', 
            'Control System Engineer',
            'Embodied AI Engineer'
        ];
        this.currentTitleIndex = 0;
        this.titleElement = null;
        this.nameElement = null;
        this.isTyping = false;
        this.init();
    }

    init() {
        // Only run on initial page load
        window.addEventListener('load', () => {
            this.startAnimation();
        });
    }

    startAnimation() {
        this.nameElement = document.querySelector('.personal-header .name');
        this.titleElement = document.querySelector('.personal-header .title');
        
        if (this.nameElement && this.titleElement) {
            // Keep name as is, no typing animation
            // Clear only the title content
            this.titleElement.textContent = '';
            
            // Start dynamic title rotation after a short delay
            setTimeout(() => {
                this.startTitleRotation();
            }, 1000);
        }
    }

    startTitleRotation() {
        // Type the first title
        this.typeTitle(this.titles[this.currentTitleIndex]);
        
        // Set up rotation interval
        setInterval(() => {
            if (!this.isTyping) {
                this.rotateTitle();
            }
        }, 3000); // Change title every 3 seconds
    }

    rotateTitle() {
        // Move to next title
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        
        // Fade out current title but keep content to prevent layout shift
        this.titleElement.style.opacity = '0';
        
        setTimeout(() => {
            // Clear and type new title
            this.titleElement.textContent = '';
            this.typeTitle(this.titles[this.currentTitleIndex]);
        }, 300);
    }

    typeTitle(text) {
        this.isTyping = true;
        
        // Reset opacity and fade in
        this.titleElement.style.opacity = '1';
        
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                this.titleElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                this.isTyping = false;
            }
        }, 80);
    }
}


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

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    const tabNavigator = new TabNavigator();
    const mobileNav = new MobileNavigation();
    const navbarEffects = new NavbarEffects();
    const contactForm = new ContactForm();
    const cardEffects = new CardEffects();
    const dynamicTitle = new DynamicTitleAnimation();
    const urlHandler = new URLHandler(tabNavigator);
    
    console.log('Tab-based portfolio website loaded successfully!');
    
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

// Add some CSS for the loaded state
const style = document.createElement('style');
style.textContent = `
    .personal-header {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    body.loaded .personal-header {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Ensure name is never affected by any animations */
    .personal-header .name {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
        animation: none !important;
    }
    
    .tab-content {
        min-height: 400px;
    }
    
    .notification {
        font-family: 'Inter', sans-serif;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    /* Smooth transitions for tab switching */
    .tab-content-container {
        position: relative;
    }
    
    /* Custom scrollbar for tab content */
    .tab-content-container::-webkit-scrollbar {
        width: 8px;
    }
    
    .tab-content-container::-webkit-scrollbar-track {
        background: #1a1a1a;
    }
    
    .tab-content-container::-webkit-scrollbar-thumb {
        background: #00d4ff;
        border-radius: 4px;
    }
    
    .tab-content-container::-webkit-scrollbar-thumb:hover {
        background: #0099cc;
    }
`;
document.head.appendChild(style);