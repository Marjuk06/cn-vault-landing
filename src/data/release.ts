export type Architecture = 'x64' | 'arm64';
export type PlatformOS = 'linux' | 'windows' | 'macos';

export interface DownloadLink {
  url: string;
  size: string;
  checksum: string; // SHA256
  format: string; // e.g. AppImage, exe, dmg
  arch: Architecture;
}

export interface PlatformRelease {
  os: PlatformOS;
  name: string; // e.g. "Linux", "Windows", "macOS"
  downloads: DownloadLink[];
  notSupportedMessage?: string;
}

export interface ReleaseInfo {
  version: string;
  releaseDate: string;
  platforms: Record<PlatformOS, PlatformRelease>;
  changelog: string[];
  stats: {
    downloads: string;
    lastUpdated: string;
  };
}

export const currentRelease: ReleaseInfo = {
  version: "1.0.0",
  releaseDate: "June 9, 2026",
  stats: {
    downloads: "12,450+",
    lastUpdated: "June 9, 2026",
  },
  changelog: [
    "Secure Local Backups",
    "Advanced Password Generator",
    "Custom Categories & Tags",
    "AES-256-GCM Encryption",
    "Argon2id Key Derivation",
    "Auto-lock & Timeout Settings"
  ],
  platforms: {
    linux: {
      os: 'linux',
      name: 'Linux',
      downloads: [
        {
          url: "https://snapcraft.io/cn-vault",
          size: "Snap",
          checksum: "Managed by Snap",
          format: "Snap Store",
          arch: "x64"
        }
      ]
    },
    windows: {
      os: 'windows',
      name: 'Windows',
      downloads: [
        {
          url: "https://github.com/Marjuk06/CN-Vault/releases/download/v1.0.0/CN-Vault-Setup.exe",
          size: "Installer",
          checksum: "Verify on GitHub",
          format: ".exe Installer",
          arch: "x64"
        },
        {
          url: "https://github.com/Marjuk06/CN-Vault/releases/download/v1.0.0/CN-Vault.msix",
          size: "Appx",
          checksum: "Verify on GitHub",
          format: ".msix Installer",
          arch: "x64"
        }
      ]
    },
    macos: {
      os: 'macos',
      name: 'macOS',
      notSupportedMessage: "macOS is currently not supported. We will release the Mac version in an upcoming update.",
      downloads: []
    }
  }
};
