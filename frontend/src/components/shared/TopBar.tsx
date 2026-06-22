import BrainWaveLogo from '../../assets/brainwave.svg'
import ScoreIcon from '../../assets/scoreIcon.svg'

interface TopBarProps {
  username?: string
  level?: number
  score?: number
  hearts?: number
}

export function TopBar({ 
  username = "Player", 
  level = 5, 
  score = 1250, 
}: TopBarProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-surface border-b border-secondary">
      {/* Left: Logo + Username */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-secondary rounded-full border border-[#3D494C] flex items-center justify-center overflow-hidden">
          <BrainWaveLogo className="w-6 h-6" />
        </div>
        <div>
          <p className="text-foreground font-medium text-sm">{username}</p>
          <p className="text-dimmed text-xs">Level {level}</p>
        </div>
      </div>

      {/* Right: Score + Thunder */}
      <div className="flex items-center gap-4">
        {/* Score */}
        <div className="flex items-center gap-1.5">
          <span className="text-foreground text-sm font-semibold">{score.toLocaleString()}</span>
          <span className="text-dimmed text-xs">pts</span>
        </div>

        <ScoreIcon className="w-4 h-4 object-contain" />


      </div>
    </header>
  )
}