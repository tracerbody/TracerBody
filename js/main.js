// TracerBody Breach Archive JavaScript
class BreachArchive {
    constructor() {
        this.breaches = [];
        this.filteredBreaches = [];
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.init();
    }

    async init() {
        this.setupEventListeners();
        await this.loadBreaches();
        this.setupAnimations();
        this.updateStats();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenuButton.querySelector('svg');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.style.transform = 'rotate(90deg)';
                }
            });
        }

        // Search functionality
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTerm = e.target.value.toLowerCase();
                this.filterBreaches();
            });
        }

        // Tab filtering
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                // Remove active class from all buttons
                document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                e.target.classList.add('active');
                
                this.currentFilter = e.target.dataset.filter;
                this.filterBreaches();
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                if (mobileMenuButton) {
                    const icon = mobileMenuButton.querySelector('svg');
                    icon.style.transform = 'rotate(0deg)';
                }
            }
            
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                searchInput?.focus();
            }
        });
    }

    async loadBreaches() {
        try {
            // Try to load from breaches.json first
            const response = await fetch('./data/breaches.json');
            if (response.ok) {
                this.breaches = await response.json();
            } else {
                // Fallback to sample data
                this.breaches = this.getSampleBreaches();
            }
            
            this.filteredBreaches = [...this.breaches];
            this.renderBreaches();
            document.getElementById('loading').style.display = 'none';
        } catch (error) {
            console.log('Loading sample data...');
            this.breaches = this.getSampleBreaches();
            this.filteredBreaches = [...this.breaches];
            this.renderBreaches();
            document.getElementById('loading').style.display = 'none';
        }
    }

    getSampleBreaches() {
        return [
            {
                id: 1,
                company: "Equifax",
                year: 2017,
                records: 147000000,
                severity: "high",
                type: "Credit Bureau",
                description: "Personal information of 147 million consumers exposed including SSNs, birth dates, addresses, and driver's license numbers.",
                downloadUrl: "https://mega.nz/file/example1",
                password: "equifax2017!",
                size: "2.3 GB",
                date: "2017-09-07",
                tags: ["SSN", "Personal Data", "Credit"]
            },
            {
                id: 2,
                company: "Yahoo",
                year: 2013,
                records: 3000000000,
                severity: "high",
                type: "Web Services",
                description: "All 3 billion Yahoo accounts compromised. Names, email addresses, telephone numbers, dates of birth, hashed passwords, and security questions exposed.",
                downloadUrl: "https://drive.google.com/file/d/example2",
                password: "yahoo_breach_2013",
                size: "5.7 GB",
                date: "2013-08-01",
                tags: ["Email", "Passwords", "Personal Data"]
            },
            {
                id: 3,
                company: "Marriott",
                year: 2018,
                records: 500000000,
                severity: "high",
                type: "Hospitality",
                description: "Guest information from Starwood hotels database including names, addresses, phone numbers, email addresses, passport numbers, and payment card information.",
                downloadUrl: "https://dropbox.com/s/example3",
                password: "marriott_starwood18",
                size: "1.8 GB",
                date: "2018-11-30",
                tags: ["Travel", "Payment Cards", "Passports"]
            },
            {
                id: 4,
                company: "Capital One",
                year: 2019,
                records: 100000000,
                severity: "medium",
                type: "Financial",
                description: "Personal information of credit card customers and applicants including names, addresses, credit scores, payment history, and fragments of transaction data.",
                downloadUrl: "https://mega.nz/file/example4",
                password: "capital1_2019",
                size: "890 MB",
                date: "2019-07-19",
                tags: ["Credit Cards", "Financial", "Credit Scores"]
            },
            {
                id: 5,
                company: "Facebook",
                year: 2019,
                records: 533000000,
                severity: "medium",
                type: "Social Media",
                description: "Phone numbers, Facebook IDs, full names, locations, birthdates, bios, and email addresses of Facebook users from 106 countries.",
                downloadUrl: "https://drive.google.com/file/d/example5",
                password: "fb_leak2019",
                size: "1.2 GB",
                date: "2019-04-03",
                tags: ["Social Media", "Phone Numbers", "Personal Data"]
            },
            {
                id: 6,
                company: "LinkedIn",
                year: 2021,
                records: 700000000,
                severity: "medium",
                type: "Professional Network",
                description: "Scraped data including email addresses, phone numbers, workplace information, full names, account IDs, and links to social media accounts.",
                downloadUrl: "https://dropbox.com/s/example6",
                password: "linkedin_scrape21",
                size: "2.1 GB",
                date: "2021-06-22",
                tags: ["Professional", "Email", "Phone Numbers"]
            },
            {
                id: 7,
                company: "T-Mobile",
                year: 2021,
                records: 54000000,
                severity: "high",
                type: "Telecommunications",
                description: "Names, dates of birth, SSNs, and driver's license information of current, former and prospective T-Mobile customers.",
                downloadUrl: "https://mega.nz/file/example7",
                password: "tmobile_breach21",
                size: "650 MB",
                date: "2021-08-17",
                tags: ["Telecom", "SSN", "Driver's License"]
            },
            {
                id: 8,
                company: "Clubhouse",
                year: 2021,
                records: 1300000,
                severity: "low",
                type: "Social Audio",
                description: "User profile information including names, usernames, photo URLs, follower counts, and account creation dates.",
                downloadUrl: "https://drive.google.com/file/d/example8",
                password: "clubhouse_2021",
                size: "45 MB",
                date: "2021-04-11",
                tags: ["Social Media", "Audio", "Profiles"]
            }
        ];
    }

    filterBreaches() {
        this.filteredBreaches = this.breaches.filter(breach => {
            // Apply search filter
            const matchesSearch = !this.searchTerm || 
                breach.company.toLowerCase().includes(this.searchTerm) ||
                breach.type.toLowerCase().includes(this.searchTerm) ||
                breach.year.toString().includes(this.searchTerm) ||
                breach.tags.some(tag => tag.toLowerCase().includes(this.searchTerm));

            // Apply severity filter
            const matchesFilter = this.currentFilter === 'all' || 
                (this.currentFilter === 'recent' && new Date(breach.date) > new Date('2020-01-01')) ||
                breach.severity === this.currentFilter;

            return matchesSearch && matchesFilter;
        });

        this.renderBreaches();
    }

    renderBreaches() {
        const container = document.getElementById('breach-container');
        if (!container) return;

        if (this.filteredBreaches.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <div class="text-6xl mb-4">🔍</div>
                    <h3 class="text-2xl font-bold text-white mb-2">No breaches found</h3>
                    <p class="text-gray-400">Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.filteredBreaches.map(breach => `
            <div class="breach-card glass rounded-xl p-6 ${breach.severity}-severity fade-in-up" data-breach-id="${breach.id}">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1">${breach.company}</h3>
                        <p class="text-gray-400 text-sm">${breach.type} • ${breach.year}</p>
                    </div>
                    <div class="text-right">
                        <span class="severity-${breach.severity} text-sm font-semibold uppercase tracking-wide">
                            ${breach.severity}
                        </span>
                    </div>
                </div>
                
                <div class="mb-4">
                    <div class="flex items-center mb-2">
                        <svg class="w-4 h-4 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                        <span class="text-white font-semibold">${this.formatNumber(breach.records)} records</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <svg class="w-4 h-4 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>
                        <span class="text-gray-300">${breach.size}</span>
                    </div>
                    <div class="flex items-center mb-2">
                        <svg class="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>
                        <span class="text-gray-400 text-sm">${this.formatDate(breach.date)}</span>
                    </div>
                    <div class="flex items-center">
                        <svg class="w-4 h-4 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-green-400 font-mono text-sm">Password: ${breach.password}</span>
                    </div>
                </div>
                
                <p class="text-gray-300 text-sm mb-4 line-clamp-3">${breach.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                    ${breach.tags.map(tag => `
                        <span class="px-2 py-1 bg-red-900/30 text-red-300 text-xs rounded-full border border-red-700/30">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                
                <div class="flex gap-3">
                    <button onclick="breachArchive.viewBreach(${breach.id})" 
                            class="flex-1 btn-primary text-white px-4 py-2 rounded-lg font-semibold text-sm">
                        <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View Details
                    </button>
                    <button onclick="breachArchive.downloadBreach('${breach.downloadUrl}')" 
                            class="btn-secondary text-white px-4 py-2 rounded-lg font-semibold text-sm">
                        <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        Download
                    </button>
                </div>
            </div>
        `).join('');

        // Trigger animations
        setTimeout(() => {
            document.querySelectorAll('.fade-in-up').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 100);
            });
        }, 100);
    }

    viewBreach(id) {
        const breach = this.breaches.find(b => b.id === id);
        if (!breach) return;

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="glass rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="text-3xl font-bold text-white mb-2">${breach.company}</h2>
                            <p class="text-gray-400">${breach.type} • ${breach.year}</p>
                        </div>
                        <button onclick="this.parentElement.parentElement.parentElement.parentElement.remove()" 
                                class="text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6 mb-6">
                        <div class="space-y-4">
                            <div>
                                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Records Affected</h4>
                                <p class="text-2xl font-bold text-red-400">${this.formatNumber(breach.records)}</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Severity</h4>
                                <span class="severity-${breach.severity} text-lg font-semibold uppercase">${breach.severity}</span>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">File Size</h4>
                                <p class="text-lg text-white">${breach.size}</p>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <div>
                                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">Date Discovered</h4>
                                <p class="text-lg text-white">${this.formatDate(breach.date)}</p>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">ZIP Password</h4>
                                <p class="text-lg text-green-400 font-mono bg-gray-800 px-3 py-2 rounded border border-green-700/30">${breach.password}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Description</h4>
                        <p class="text-gray-300 leading-relaxed">${breach.description}</p>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Data Types</h4>
                        <div class="flex flex-wrap gap-2">
                            ${breach.tags.map(tag => `
                                <span class="px-3 py-1 bg-red-900/30 text-red-300 text-sm rounded-full border border-red-700/30">
                                    ${tag}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <button onclick="breachArchive.downloadBreach('${breach.downloadUrl}')" 
                                class="btn-primary flex-1 px-6 py-3 rounded-lg font-semibold">
                            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            Download Archive
                        </button>
                        <button onclick="breachArchive.copyPassword('${breach.password}')" 
                                class="btn-secondary px-6 py-3 rounded-lg font-semibold">
                            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            Copy Password
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Close modal on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    downloadBreach(url) {
        // Open download link in new tab
        window.open(url, '_blank');
        this.showNotification('Opening download link in new tab...', 'info');
    }

    copyPassword(password) {
        navigator.clipboard.writeText(password).then(() => {
            this.showNotification('Password copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = password;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('Password copied to clipboard!', 'success');
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-600 text-white' : 
            type === 'error' ? 'bg-red-600 text-white' : 
            'bg-blue-600 text-white'
        }`;
        notification.innerHTML = `
            <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${type === 'success' ? 
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>' :
                        type === 'error' ? 
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>' :
                        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
                    }
                </svg>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Slide in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
            notification.classList.add('translate-x-0');
        }, 100);

        // Slide out and remove
        setTimeout(() => {
            notification.classList.remove('translate-x-0');
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        // Parallax effect for hero section
        let ticking = false;
        
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-bg');
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
            
            ticking = false;
        };
        
        const requestParallaxUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestParallaxUpdate);

        // Navbar opacity on scroll
        const navbar = document.querySelector('nav');
        if (navbar) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const opacity = Math.min(scrolled / 100, 1);
                navbar.style.backgroundColor = `rgba(26, 26, 26, ${0.8 + (opacity * 0.2)})`;
            });
        }
    }

    updateStats() {
        const totalBreaches = this.breaches.length;
        const totalRecords = this.breaches.reduce((sum, breach) => sum + breach.records, 0);
        const totalCompanies = new Set(this.breaches.map(breach => breach.company)).size;
        
        // Animate counters
        this.animateCounter('total-breaches', totalBreaches);
        this.animateCounter('total-records', totalRecords, true);
        this.animateCounter('total-companies', totalCompanies);
    }

    animateCounter(elementId, target, isLarge = false) {
        const element = document.getElementById(elementId);
        if (!element) return;

        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (isLarge) {
                element.textContent = this.formatNumber(Math.floor(current));
            } else {
                element.textContent = Math.floor(current).toString();
            }
        }, 20);
    }

    formatNumber(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Initialize the breach archive
let breachArchive;

document.addEventListener('DOMContentLoaded', () => {
    breachArchive = new BreachArchive();
    
    // Initial animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in-up').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }, 300);
});

// Global utility functions
window.TracerBody = {
    showNotification: function(message, type = 'info') {
        if (breachArchive) {
            breachArchive.showNotification(message, type);
        }
    }
};
