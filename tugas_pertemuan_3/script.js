// Plugin to add background color to the chart
Chart.register({
    id: 'background-color-plugin',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.fillStyle = '#F6F7FB'; // Set your desired background color here
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
});

// Chart for Income vs Expense
var ctx = document.getElementById('incomeExpenseChart').getContext('2d');
var incomeExpenseChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Income',
            data: [2000, 4000, 3000, 5000, 7000, 6000, 8000, 3000, 4000, 5000, 6000, 7000],
            backgroundColor: '#6293f4'
        },
        {
            label: 'Expense',
            data: [1000, 2000, 1500, 3000, 2500, 2000, 4000, 3500, 3000, 5000, 2500, 3000],
            backgroundColor: '#d94b4b'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount ($)'
                }
            }
        }
    },
    plugins: ['background-color-plugin'] // Register the plugin
});
