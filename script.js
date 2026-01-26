/* ============================================
   STORMSCRIBE INTERACTIVE ELEMENTS
   Handles lightning effects and dynamic behavior
   ============================================ */

// Wait for page to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // === LIGHTNING EFFECT ===
    // Creates random lightning flashes with variable timing
    const lightningFlash = document.querySelector('.lightning-flash');
    
    function triggerLightning() {
        // Random delay between 8-20 seconds
        const delay = Math.random() * 12000 + 8000;
        
        setTimeout(() => {
            // Quick flash sequence
            lightningFlash.style.animation = 'none';
            // Force reflow to restart animation
            void lightningFlash.offsetWidth;
            lightningFlash.style.animation = 'lightning 15s infinite';
            
            // Schedule next lightning
            triggerLightning();
        }, delay);
    }
    
    // Start the lightning cycle
    triggerLightning();
    
    
    // === NAV LINK ENHANCEMENT ===
    // Add subtle electric charge effect on hover
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            // Could add sound effects here later if desired
            this.style.boxShadow = '0 5px 30px rgba(77, 166, 255, 0.4)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    
    // === DYNAMIC TIMESTAMP ===
    // Update footer with site age
    const footer = document.querySelector('.site-footer p');
    const siteCreated = new Date('2026-01-25');
    const now = new Date();
    const daysSince = Math.floor((now - siteCreated) / (1000 * 60 * 60 * 24));
    
    if (daysSince > 0) {
        footer.textContent = `Est. January 25, 2026 • ${daysSince} day${daysSince !== 1 ? 's' : ''} of building`;
    }
    
    
    // === CONSOLE MESSAGE ===
    // Easter egg for anyone who opens dev tools
    console.log('%c⚡ StormScribe ⚡', 'font-size: 20px; font-weight: bold; color: #4da6ff;');
    console.log('%cWhere storms meet words and collaboration', 'font-size: 12px; color: #a0a0a0; font-style: italic;');
    console.log('%cBuilt with intention by Emily & Claude', 'font-size: 12px; color: #6b4ce6;');
    
});


/* ============================================
   FUTURE ENHANCEMENTS TO ADD:
   - Data visualization integration
   - Interactive story elements
   - Sound effects (optional)
   - Particle effects
   - Dynamic content loading
   ============================================ */
