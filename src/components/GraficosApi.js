import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importa o Chart.js

const Graficos = ({ jsonData }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const defaultData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [
        {
          label: 'Tendência',
          data: [30, 50, 40, 60, 55, 70],
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.4,
        },
      ],
    };

    const chartData = jsonData || defaultData;

    const chartConfig = {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
            intersect: false,
            mode: 'index',
          },
          zoom: {
            pan: {
              enabled: true,
              mode: 'xy',
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: 'xy',
              speed: 0.1, 
            },
          },
        },
      },
    };

    const myChart = new Chart(chartContainer.current, chartConfig);

    return () => myChart.destroy();
  }, [jsonData]);

  return (
    <div className="chart-container">
      <canvas ref={chartContainer} width="400" height="200"></canvas>
    </div>
  );
};

export default Graficos;
