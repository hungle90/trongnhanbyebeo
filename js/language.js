// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get language buttons
    const viButton = document.getElementById('lang-vi');
    const enButton = document.getElementById('lang-en');

    // Set default language (Vietnamese)
    let currentLang = localStorage.getItem('preferredLanguage') || 'vi';
    setLanguage(currentLang);

    // Add click event listeners to language buttons
    viButton.addEventListener('click', function() {
        setLanguage('vi');
    });

    enButton.addEventListener('click', function() {
        setLanguage('en');
    });

    /**
     * Set the active language
     * @param {string} lang - Language code ('vi' or 'en')
     */
    function setLanguage(lang) {
        // Save preference to localStorage
        localStorage.setItem('preferredLanguage', lang);

        // Update body class
        if (lang === 'en') {
            document.body.classList.add('en');
            enButton.classList.add('active');
            viButton.classList.remove('active');
        } else {
            document.body.classList.remove('en');
            viButton.classList.add('active');
            enButton.classList.remove('active');
        }

        // Update chart labels if chart exists
        if (typeof updateChartLanguage === 'function') {
            updateChartLanguage(lang === 'en');
        }
    }
});
