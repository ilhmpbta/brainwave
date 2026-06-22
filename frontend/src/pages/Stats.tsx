import { useState } from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

import StatsIcon from "../assets/statsIcon.svg";

// Register Chart.js components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

// Mock data for the radar chart
const radarData = {
  labels: ['Memory', 'Logic', 'Reaction', 'Focus', 'Creativity', 'Speed'],
  datasets: [
    {
      label: 'Your Performance',
      data: [85, 72, 90, 68, 78, 82],
      backgroundColor: 'rgba(76, 215, 246, 0.2)',
      borderColor: '#4CD7F6',
      borderWidth: 2,
      pointBackgroundColor: '#4CD7F6',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#4CD7F6',
    },
    {
      label: 'Average',
      data: [65, 60, 70, 55, 62, 58],
      backgroundColor: 'rgba(148, 163, 184, 0.1)',
      borderColor: '#94A3B8',
      borderWidth: 1.5,
      pointBackgroundColor: '#94A3B8',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#94A3B8',
      borderDash: [5, 5],
    },
  ],
}

const chartOptions = {
  scales: {
    r: {
      angleLines: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      pointLabels: {
        color: '#D4E4FA',
        font: {
          size: 12,
          family: 'Space Grotesk',
        },
      },
      ticks: {
        backdropColor: 'transparent',
        color: '#64748B',
        stepSize: 20,
      },
      max: 100,
      min: 0,
    },
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#D4E4FA',
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle',
        font: {
          size: 12,
          family: 'Space Grotesk',
        },
      },
    },
    tooltip: {
      backgroundColor: '#122131',
      borderColor: '#273647',
      borderWidth: 1,
      titleColor: '#D4E4FA',
      bodyColor: '#94A3B8',
      cornerRadius: 8,
      padding: 12,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
}

// Tab data
const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'games', label: 'Games' },
  { id: 'history', label: 'History' },
]

// Stat cards data
const stats = [
  { label: 'Games Played', value: '247', change: '+12%', icon: '' },
  { label: 'Win Rate', value: '68%', change: '+5%', icon: '' },
  { label: 'Current Streak', value: '8', change: '+2', icon: '' },
  { label: 'Total Score', value: '18,450', change: '+1,230', icon: '' },
]

// Recent games data
const recentGames = [
  { game: 'Memory Match', score: 2450, date: '2 hours ago', result: 'Win' },
  { game: 'Brain Teaser', score: 1800, date: '5 hours ago', result: 'Loss' },
  { game: 'Quick Math', score: 3200, date: '1 day ago', result: 'Win' },
  { game: 'Word Scramble', score: 2100, date: '2 days ago', result: 'Win' },
  { game: 'Trivia Quiz', score: 1500, date: '3 days ago', result: 'Loss' },
]

export default function Stats() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-secondary border border-[#3D494C] flex items-center justify-center">
          <StatsIcon className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-space-grotesk text-foreground font-semibold">
            Your Statistics
          </h1>
          <p className="text-dimmed text-sm">Track your brain training progress</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-secondary">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                pb-3 text-sm font-medium transition-colors relative
                ${activeTab === tab.id
                  ? 'text-primary'
                  : 'text-dimmed hover:text-foreground'
                }
              `}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Radar Chart */}
        <div className="bg-surface rounded-xl border border-secondary p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-foreground font-space-grotesk font-semibold">
              Skill Breakdown
            </h2>
            <span className="text-dimmed text-sm">Last 30 days</span>
          </div>
          <div className="h-80">
            <Radar data={radarData} options={chartOptions} />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface rounded-xl border border-secondary p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{stat.icon}</span>
                <span className="text-dimmed text-sm">{stat.label}</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-foreground text-2xl font-semibold">
                  {stat.value}
                </span>
                <span className="text-primary text-sm font-medium">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Games */}
        <div className="bg-surface rounded-xl border border-secondary overflow-hidden">
          <div className="px-6 py-4 border-b border-secondary">
            <h2 className="text-foreground font-space-grotesk font-semibold">
              Recent Games
            </h2>
          </div>
          <div className="divide-y divide-secondary">
            {recentGames.map((game, index) => (
              <div key={index} className="px-6 py-3 flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">{game.game}</p>
                  <p className="text-dimmed text-sm">{game.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-foreground font-semibold">
                    {game.score.toLocaleString()}
                  </span>
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded ${
                      game.result === 'Win'
                        ? 'text-primary bg-primary/10'
                        : 'text-error bg-error/10'
                    }`}
                  >
                    {game.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}