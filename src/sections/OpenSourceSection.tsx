import { GitFork, TerminalSquare, GitBranch } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

export const OpenSourceSection = () => {
  return (
    <section className="py-24 relative" id="opensource">
      <div className="max-w-5xl mx-auto px-6">
        <GlassCard glow className="p-10 md:p-16 border-violet-500/20 text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <GitBranch className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Proudly Open Source</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
            Security requires transparency. CN Vault's entire source code is available on GitHub for anyone to audit, fork, and contribute.
          </p>
          
          <div className="max-w-2xl mx-auto mb-10 text-left space-y-6">
            <div className="bg-black/50 border border-white/10 rounded-xl p-6 shadow-inner shadow-black">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <GitFork className="w-5 h-5 text-violet-400" />
                  1. Fork the Repository
                </h3>
                <p className="text-white/60 text-sm pl-7">
                  Visit our GitHub page and click the "Fork" button in the top right corner to create your own copy of the project.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <TerminalSquare className="w-5 h-5 text-violet-400" />
                  2. Clone & Install
                </h3>
                <p className="text-white/60 text-sm pl-7 mb-3">
                  Clone your new fork to your local machine and install the dependencies:
                </p>
                <div className="ml-7 bg-[#0A0A0A] border border-white/10 rounded-lg p-4 font-mono text-sm text-violet-300 overflow-x-auto whitespace-nowrap">
                  git clone https://github.com/YOUR-USERNAME/CN-Vault.git<br/>
                  cd CN-Vault<br/>
                  npm install<br/>
                  npm run dev
                </div>
              </div>
            </div>
          </div>
          
          <a
            href="https://github.com/Marjuk06/CN-Vault"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-500 hover:bg-violet-600 text-white font-semibold transition-colors"
          >
            <GitBranch className="w-5 h-5" />
            <span>Contribute on GitHub</span>
          </a>
        </GlassCard>
      </div>
    </section>
  );
};
