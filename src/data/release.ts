export type Architecture = 'x64' | 'arm64';
export type PlatformOS = 'linux' | 'windows' | 'macos';

export interface DownloadLink {
  url: string;
  size: string;
  checksum: string; // SHA256 or verification source
  format: string; // e.g. MSI, MSIX, Snap, exe
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
    status: string;
    lastUpdated: string;
  };
}

export const currentRelease: ReleaseInfo = {
  version: "1.0.1",
  releaseDate: "July 24, 2026",
  stats: {
    status: "Active Production",
    lastUpdated: "July 2026",
  },
  changelog: [
    "Security dependency hardening and vulnerability patches",
    "Local-first encrypted SQLite database (AES-256-GCM + Argon2id)",
    "Secure local backups with PRAGMA integrity verification",
    "Entropy-scoring password generator",
    "Custom categories (Logins, Email, API Keys, Recovery Codes, Notes)",
    "Memory zeroization & auto-lock inactivity timers"
  ],
  platforms: {
    linux: {
      os: 'linux',
      name: 'Linux',
      downloads: [
        {
          url: "https://snapcraft.io/cn-vault",
          size: "Snap package",
          checksum: "Verified by Canonical Snapcraft",
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
          url: "https://apps.microsoft.com/detail/9p888nv4qrls?referrer=appbadge&mode=full",
          size: "Store App",
          checksum: "Verified by Microsoft Store",
          format: "Microsoft Store",
          arch: "x64"
        },
        {
          url: "https://github.com/Marjuk06/CN-Vault/releases/download/v1.0.1/CN.Vault_0.1.0_x64_en-US.msi",
          size: "7.7 MB",
          checksum: "f31f5ca34bd7d2d5d5ff3c524f1147a2a27c5c460e59e2022fb3e795bbc854f9",
          format: ".msi Installer",
          arch: "x64"
        },
        {
          url: "https://github.com/Marjuk06/CN-Vault/releases/download/v1.0.0/CN-Vault.msix",
          size: "7.7 MB",
          checksum: "509a3748b8ea4dcf490735685d0bdeb0e908479a148698534b38974c9342e4d3",
          format: ".msix Package",
          arch: "x64"
        }
      ]
    },
    macos: {
      os: 'macos',
      name: 'macOS',
      notSupportedMessage: "macOS is currently not supported. Support is planned in an upcoming release.",
      downloads: []
    }
  }
};
