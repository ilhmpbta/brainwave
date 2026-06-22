import { useState } from 'react';
import { ConfirmationDialog } from '../components/shared/ConfirmationDialog';
import { Slider } from '../components/shared/Slider';
import LogoutIcon from '../assets/logout.svg';

export default function Settings() {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [masterVolume, setMasterVolume] = useState(75);
  const [bgmVolume, setBgmVolume] = useState(50);
  const [sfxVolume, setSfxVolume] = useState(65);

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-space-grotesk text-foreground font-semibold">
        Settings
      </h1>

      {/* Account Settings */}
      <div className="bg-surface rounded-xl border border-secondary p-6 space-y-4">
        <h2 className="text-primary text-lg font-medium">Account Settings</h2>
        <div className="divide-y divide-secondary">
          <div className="py-3">
            <button className="text-foreground text-sm font-medium hover:text-primary transition-colors">
              Edit Profile
            </button>
          </div>
          <div className="py-3">
            <button className="text-foreground text-sm font-medium hover:text-primary transition-colors">
              Change Password
            </button>
          </div>
        </div>
      </div>

      {/* Audio Settings */}
      <div className="bg-surface rounded-xl border border-secondary p-6 space-y-4">
        <h2 className="text-primary text-lg font-medium">Volume / Audio</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Master Volume
            </label>
            <Slider value={masterVolume} onChange={setMasterVolume} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              BGM
            </label>
            <Slider value={bgmVolume} onChange={setBgmVolume} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              SFX
            </label>
            <Slider value={sfxVolume} onChange={setSfxVolume} />
          </div>
        </div>
      </div>

      {/* Terminate Session */}
      <div className="bg-surface rounded-xl border border-secondary p-6 space-y-4 flex justify-between items-center">
        <h2 className="text-error text-lg font-medium">Terminate Session</h2>
        <button
          onClick={() => setIsLogoutModalOpen(true)}
          className=" hover:bg-error/80 text-white font-semibold p-2 rounded-lg transition-colors"
          aria-label="Log Out"
        >
          <LogoutIcon className="w-6 h-6" />
        </button>
      </div>

      <ConfirmationDialog
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={() => { handleLogout(); window.location.href = '/login'; }}
        title="Log Out"
        description="Are you sure you want to log out of BrainWave?"
        confirmText="Log Out"
        cancelText="Cancel"
        confirmVariant="danger"
      />
    </div>
  );
}