// src/components/layout/AppLayout.tsx
import { Outlet } from 'react-router-dom'
import { TopBar } from './TopBar'
import { BottomNav } from './BottomNav'

interface AppLayoutProps {
  username?: string
  level?: number
  score?: number
  hearts?: number
}

export function AppLayout({ 
  username, 
  level, 
  score, 
  hearts 
}: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <TopBar 
        username={username}
        level={level}
        score={score}
        hearts={hearts}
      />

      {/* Main Content - grows to fill space */}
      <main className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}