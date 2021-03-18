var sales_overview_options = {
    series: [{
    name: 'Ample',
    data: [9, 5, 3, 7, 5, 10, 3]
  }, {
    name: 'Pixle',
    data: [6, 3, 9, 5, 4, 6, 4]
  }],
    chart: {
    type: 'bar',
    height: 308,
    offsetY: -3,
    toolbar: {
        show: false,
    }
  },
  colors: ['#0d6ffa', '#6ac3fd'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '16%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 5,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yaxis: {
    min: 0,
    max: 12,
    tickAmount: 4,
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    theme: 'dark',
  },
  grid: {
    show: false,
    padding: {
        top: 0,
        right: 0,
        bottom: 7,
    },
  },
};
var sales_overview_chart = new ApexCharts(document.querySelector("#sales-overview"), sales_overview_options);
sales_overview_chart.render();