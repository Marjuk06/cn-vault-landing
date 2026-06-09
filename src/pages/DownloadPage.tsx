import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  TerminalSquare, 
  ShieldCheck, 
  CheckCircle2,
  Cpu,
  HardDrive
} from 'lucide-react';
import { currentRelease, type PlatformOS } from '../data/release';
import { detectPlatform, type DetectedPlatform } from '../utils/detectPlatform';
import { GlassCard } from '../components/ui/GlassCard';

export const DownloadPage = () => {
  const [platform, setPlatform] = useState<DetectedPlatform>({ os: null, arch: 'x64' });

  useEffect(() => {
    // Detect on mount
    setPlatform(detectPlatform());
  }, []);

  // Default to windows if detection fails
  const primaryOS: PlatformOS = platform.os || 'windows';
  const primaryArch = platform.arch;
  
  const primaryRelease = currentRelease.platforms[primaryOS];
  
  // Find the exact download matching the architecture, fallback to first available
  const recommendedDownload = primaryRelease.downloads.length > 0 
    ? (primaryRelease.downloads.find(d => d.arch === primaryArch) || primaryRelease.downloads[0])
    : null;

  // Other platforms
  const otherOSs: PlatformOS[] = ['windows', 'macos', 'linux'].filter(os => os !== primaryOS) as PlatformOS[];

  const getOSIcon = (os: PlatformOS) => {
    switch(os) {
      case 'windows': return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>;
      case 'macos': return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>;
      case 'linux': return <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"/></svg>;
      default: return <Download className="w-8 h-8" />;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Download CN Vault
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/50 mb-4 max-w-2xl mx-auto"
        >
          A local-first password manager built for privacy, speed, and complete ownership.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-300 border border-violet-500/30 px-3 py-1 rounded-full text-sm font-medium">
            Version {currentRelease.version}
          </span>
        </motion.div>
      </section>

      {/* Recommended Download */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-4 text-center">
            Recommended for you
          </div>
          
          <GlassCard glow className="p-8 md:p-12 border-violet-500/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
                  {getOSIcon(primaryOS)}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    {primaryRelease.name}
                    {recommendedDownload && (
                      <span className="text-sm font-normal bg-white/10 px-2 py-1 rounded text-white/70">
                        {recommendedDownload.arch}
                      </span>
                    )}
                  </h2>
                  {primaryRelease.notSupportedMessage ? (
                    <div className="text-white/70 text-sm mt-2 max-w-sm">
                      {primaryRelease.notSupportedMessage}
                    </div>
                  ) : recommendedDownload && (
                    <div className="text-white/50 flex items-center gap-4 text-sm">
                      <span>{recommendedDownload.format}</span>
                      <span>•</span>
                      <span>{recommendedDownload.size}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-3 shrink-0">
                {primaryOS === 'linux' ? (
                  <div className="flex flex-col w-full md:w-[340px] gap-4">
                    <a
                      href="snap://cn-vault"
                      className="w-full px-8 py-4 bg-[#E95420] text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(233,84,32,0.2)]"
                    >
                      <Download className="w-5 h-5" />
                      View in Desktop Store
                    </a>
                    
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl mt-2">
                      <div className="text-xs text-white/70 mb-3 font-semibold uppercase tracking-wider">Or Install via Terminal</div>
                      <div className="bg-black/60 border border-white/5 rounded-lg p-3 font-mono text-sm flex items-center gap-3">
                        <TerminalSquare className="w-4 h-4 text-white/30 shrink-0" />
                        <span className="text-cyan-300 select-all leading-tight">sudo snap install cn-vault</span>
                      </div>
                    </div>

                    <div className="text-xs text-white/30 text-center font-mono mt-1">
                      <a href={recommendedDownload?.url || "https://snapcraft.io/cn-vault"} target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline">
                        View on snapcraft.io
                      </a>
                    </div>
                  </div>
                ) : recommendedDownload ? (
                  <>
                    <a
                      href={recommendedDownload.url}
                      className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                      <Download className="w-5 h-5" />
                      Download for {primaryRelease.name}
                    </a>
                    <div className="text-xs text-white/30 font-mono">
                      Released {currentRelease.releaseDate}
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      disabled
                      className="w-full md:w-auto px-8 py-4 bg-white/10 text-white/40 font-bold rounded-full cursor-not-allowed flex items-center justify-center gap-2 border border-white/10"
                    >
                      <Download className="w-5 h-5 opacity-50" />
                      Coming Soon
                    </button>
                    <div className="text-xs text-white/30 font-mono">
                      Released {currentRelease.releaseDate}
                    </div>
                  </>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Grid: Other Platforms & Changelog/Stats */}
      <section className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Other Platforms */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xl font-semibold mb-6">Other Platforms</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherOSs.map((os) => {
              const release = currentRelease.platforms[os];
              // default to x64 for listing
              const dl = release.downloads.find(d => d.arch === 'x64') || release.downloads[0];
              
              return (
                <GlassCard key={os} className="p-6 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/50 group-hover:text-white transition-colors">
                      {getOSIcon(os)}
                    </div>
                    {dl ? (
                      <a 
                        href={dl.url}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-violet-500 hover:text-white transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                        <Download className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  <h4 className="text-lg font-bold mb-1">{release.name}</h4>
                  {os === 'linux' ? (
                    <div className="text-sm text-cyan-400/80 font-mono select-all">sudo snap install cn-vault</div>
                  ) : release.notSupportedMessage ? (
                    <div className="text-sm text-white/40">Coming Soon</div>
                  ) : dl && (
                    <div className="text-sm text-white/50">{dl.format} • {dl.size}</div>
                  )}
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Right Column: Changelog & Stats */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="p-8 bg-[#050505]">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-violet-400" />
              What's New in {currentRelease.version}
            </h3>
            <ul className="space-y-3 mb-8">
              {currentRelease.changelog.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="text-violet-400 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-white/40 mb-1 uppercase tracking-wider">Downloads</div>
                <div className="text-lg font-semibold">{currentRelease.stats.downloads}</div>
              </div>
              <div>
                <div className="text-xs text-white/40 mb-1 uppercase tracking-wider">Last Updated</div>
                <div className="text-lg font-semibold">{currentRelease.stats.lastUpdated}</div>
              </div>
            </div>
          </GlassCard>
        </div>

      </section>

      {/* Verification */}
      {recommendedDownload && recommendedDownload.checksum && recommendedDownload.checksum !== "Verify on GitHub" && recommendedDownload.checksum !== "Managed by Snap" && (
        <section className="max-w-4xl mx-auto px-6 mb-24">
          <GlassCard className="p-8 md:p-10 border-cyan-500/20">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Verify Your Download</h3>
                <p className="text-white/60 text-sm mb-6 max-w-2xl">
                  Security is our top priority. We sign all builds and provide SHA256 checksums so you can independently verify that your downloaded file is authentic and hasn't been tampered with.
                </p>
                
                <div className="bg-black/60 border border-white/10 rounded-lg p-4 font-mono text-sm overflow-hidden relative">
                  <div className="text-white/30 text-xs mb-2 select-none flex items-center gap-2">
                    <TerminalSquare className="w-3 h-3" />
                    Terminal
                  </div>
                  <div className="text-white/80 whitespace-pre overflow-x-auto">
                    $ sha256sum CNVault-{currentRelease.version}-{primaryOS}-{recommendedDownload.arch}.{recommendedDownload.format.split(' ')[0]}<br />
                    <span className="text-cyan-300">{recommendedDownload.checksum}</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>
      )}

      {/* System Requirements */}
      <section className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8 text-center">System Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-white/50" />
              Windows
            </h4>
            <ul className="text-sm text-white/50 space-y-2">
              <li>Windows 10 or later</li>
              <li>x64 or ARM64 architecture</li>
              <li>4GB RAM minimum</li>
              <li>WebView2 Runtime</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-white/50" />
              macOS
            </h4>
            <ul className="text-sm text-white/50 space-y-2">
              <li>macOS 11 (Big Sur) or later</li>
              <li>Apple Silicon (M1+) or Intel</li>
              <li>4GB RAM minimum</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-white/50" />
              Linux
            </h4>
            <ul className="text-sm text-white/50 space-y-2">
              <li>Ubuntu 20.04+, Debian 11+</li>
              <li>x64 or ARM64 architecture</li>
              <li>webkit2gtk-4.0</li>
              <li>FUSE (for AppImage)</li>
            </ul>
          </div>

        </div>
      </section>
      
    </div>
  );
};
