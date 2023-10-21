import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { MonthlyUserView } from 'types/api/monthly-user-view';

ChartJS.register(Filler);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PendingChart = ({ charts }: { charts: MonthlyUserView[] }) => {
  const data: any = {
    labels: charts.map((chart: any) => chart.date),
    // labels: ['Janurary', 'Feburary', 'March', 'June', 'May', 'July'],
    datasets: [
      {
        label: '',
        data: charts.map((chart: any) => chart.count),
        borderWidth: [2, 1],
        fill: true,
        tension: 0.3,
        borderColor: 'rgb(75, 192, 192)',
        background: 'rgba(0, 127, 130, 0.2)',
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        grid: {
          borderDash: [5, 5],
          drawBorder: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={data} height={300} options={options} />;
};

export default PendingChart;
