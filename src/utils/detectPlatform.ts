import type { PlatformOS, Architecture } from '../data/release';

export interface DetectedPlatform {
  os: PlatformOS | null;
  arch: Architecture;
}

export const detectPlatform = (): DetectedPlatform => {
  // We have to be careful with SSR, so check if window is defined
  if (typeof window === 'undefined') {
    return { os: null, arch: 'x64' };
  }

  const userAgent = navigator.userAgent.toLowerCase();
  
  let os: PlatformOS | null = null;
  let arch: Architecture = 'x64';

  // Detect OS
  if (userAgent.indexOf('win') !== -1) {
    os = 'windows';
  } else if (userAgent.indexOf('mac') !== -1) {
    os = 'macos';
  } else if (userAgent.indexOf('linux') !== -1 || userAgent.indexOf('x11') !== -1) {
    // Android is technically linux, but we typically exclude it for desktop apps
    if (userAgent.indexOf('android') === -1) {
      os = 'linux';
    }
  }

  // Detect Architecture
  // This is a best-effort approach using User Agent string
  if (
    userAgent.indexOf('arm') !== -1 ||
    userAgent.indexOf('aarch64') !== -1 ||
    userAgent.indexOf('apple silicon') !== -1 ||
    userAgent.indexOf('mac') !== -1 // We assume modern Macs are ARM by default, fallback to Universal
  ) {
    arch = 'arm64';
  }

  // Check for User-Agent Client Hints if available (Chromium-based browsers)
  // @ts-ignore
  if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
    // @ts-ignore
    navigator.userAgentData.getHighEntropyValues(['architecture']).then(ua => {
      if (ua.architecture === 'arm') {
        arch = 'arm64';
      }
    });
  }

  return { os, arch };
};
