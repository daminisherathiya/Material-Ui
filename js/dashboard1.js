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


  // 

  var visitors_options = {
    series: [50, 40, 30, 10],
    labels: ["Other", "Desktop", "Tablet", "Mobile"],
    chart: {
    height: 250,
    type: 'donut',
    fontFamily: "Poppins, sans-serif",
    foreColor: "#98aab4",
  },
  colors: ['#0d6ffa', '#6ac3fd', '#eceff1', '#745af1'],
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'bottom',
    offsetY: 0,
  },
  grid: {
    show: false,
    borderColor: 'transparent',
    padding: {
        top: 0,
        right: 0,
    },
  },
  stroke: {
    colors: ['transparent'],
  },
  plotOptions: {
    pie: {
        donut: {
            size: '85%',
            labels: {
                show: false,
                name: {
                    show: true,
                    fontSize: '18px',
                    color: undefined,
                    offsetY: -10,
                },
                value: {
                    show: true,
                    color: "#98aab4",
                },
                total: {
                    show: false,
                    label: 'Our Visitors',
                    color: '#98aab4',
                }
            }
        }
    }
}
};


  var visitors_chart = new ApexCharts(document.querySelector("#visitors"), visitors_options);
  visitors_chart.render();