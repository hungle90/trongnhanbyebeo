// Initialize charts when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Calorie chart
    initializeCalorieChart();

    // Add event listeners for any interactive elements
    setupEventListeners();
});

/**
 * Initialize the calorie chart
 */
function initializeCalorieChart() {
    const ctx = document.getElementById('calorieChart').getContext('2d');

    // Get current language
    const isEnglish = document.body.classList.contains('en');

    const calorieChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: isEnglish ? 
                ['BMR', 'Maintenance', 'Weight Loss', 'Active Day'] : 
                ['BMR', 'Duy Trì', 'Giảm Cân', 'Ngày Hoạt Động'],
            datasets: [{
                label: isEnglish ? 'Calories' : 'Calo',
                data: [1650, 2150, 1800, 2400],
                backgroundColor: [
                    'rgba(78, 115, 223, 0.7)',
                    'rgba(54, 185, 204, 0.7)',
                    'rgba(246, 194, 62, 0.7)',
                    'rgba(231, 74, 59, 0.7)'
                ],
                borderColor: [
                    'rgb(78, 115, 223)',
                    'rgb(54, 185, 204)',
                    'rgb(246, 194, 62)',
                    'rgb(231, 74, 59)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: isEnglish ? 'Calories (kcal)' : 'Calo (kcal)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return (isEnglish ? context.dataset.label : 'Calo') + ': ' + context.raw + ' kcal';
                        }
                    }
                }
            }
        }
    });

    // Store chart instance for later updates
    window.calorieChart = calorieChart;
}

/**
 * Update chart labels based on language
 */
function updateChartLanguage(isEnglish) {
    if (window.calorieChart) {
        window.calorieChart.data.labels = isEnglish ? 
            ['BMR', 'Maintenance', 'Weight Loss', 'Active Day'] : 
            ['BMR', 'Duy Trì', 'Giảm Cân', 'Ngày Hoạt Động'];

        window.calorieChart.options.scales.y.title.text = isEnglish ? 'Calories (kcal)' : 'Calo (kcal)';
        window.calorieChart.update();
    }
}

/**
 * Set up event listeners for interactive elements
 */
function setupEventListeners() {
    // Example: Add click event to milestone elements to show more details
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach(milestone => {
        milestone.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    // Example: Add hover effects for recommendation cards
    const recommendations = document.querySelectorAll('.recommendation');
    recommendations.forEach(rec => {
        rec.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#d1e7f0';
        });
        rec.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#e8f4f8';
        });
    });
}

/**
 * Utility function to format dates
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Utility function to format numbers with commas
 * @param {number} number - The number to format
 * @returns {string} Formatted number string
 */
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
