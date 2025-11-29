import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler
);

export default function StatsChart() {
  const years = Array.from({ length: 26 }, (_, i) => 2000 + i);
  const requests = [
    17000, 17500, 18000, 18500, 20000, 22000, 26000, 30000, 32000, 34000,
    34000, 36000, 38000, 41000, 52000, 80000, 85000, 90000, 98000, 108000,
    115000, 122000, 130000, 140000, 68159, 156612
  ];

  const data = {
    labels: years,
    datasets: [{
      label: 'Solicitações de refúgio (estimado)',
      data: requests,
      fill: true,
      backgroundColor: 'rgba(11,125,255,0.12)',
      borderColor: '#0b7dff',
      pointRadius: 3,
      tension: 0.25,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#e6eefc' } } },
    scales: {
      x: { ticks: { color: '#cfd8e6' }, grid: { display: false } },
      y: { ticks: { color: '#cfd8e6' }, grid: { color: 'rgba(255,255,255,0.04)' } }
    }
  };

  return (
    <div className="chart-card">
      <Line data={data} options={options} />
    </div>
  );
}