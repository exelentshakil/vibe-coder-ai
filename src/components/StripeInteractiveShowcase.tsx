'use client';

import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  RefreshCw,
  Globe,
  Zap,
  Play,
  Terminal,
  FileCode,
  GitCommit,
  Check,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export function StripeInteractiveShowcase() {
  // Card 1: Concept Decomposition State
  const [selectedConcept, setSelectedConcept] = useState<'webhook' | 'auth' | 'chat'>('webhook');

  // Card 2: Code Synthesis Language State
  const [selectedLang, setSelectedLang] = useState<'ts' | 'php' | 'js'>('ts');

  // Card 3: Test Runner Interactive State
  const [testsRunning, setTestsRunning] = useState(false);
  const [testsFinished, setTestsFinished] = useState(true);

  // Card 4: Code Guardrail Mode
  const [guardrailActive, setGuardrailActive] = useState(true);

  // Card 5: Retest Loop Simulator State
  const [retestIter, setRetestIter] = useState(2);
  const [retestStatus, setRetestStatus] = useState<'idle' | 'running' | 'verified'>('verified');

  // Card 6: Git Staging Status
  const [stagedPushed, setStagedPushed] = useState(false);

  const handleRunTests = () => {
    setTestsRunning(true);
    setTestsFinished(false);
    setTimeout(() => {
      setTestsRunning(false);
      setTestsFinished(true);
    }, 700);
  };

  const handleRetestUpdate = () => {
    setRetestStatus('running');
    setTimeout(() => {
      setRetestIter((prev) => prev + 1);
      setRetestStatus('verified');
    }, 600);
  };

  const handlePushStaging = () => {
    setStagedPushed(true);
    setTimeout(() => setStagedPushed(false), 2500);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Autonomous Software Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            From concept to verified software.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              Autonomous Claude Code and Codex pipelines with automated testing and continuous retesting.
            </span>
          </h2>
        </div>

        {/* 6-Card Interactive Moving Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Architectural Decomposition */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Step 1 • Spec Decomposition
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Layers className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Deconstruct ideas into file trees
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Transforms unstructured concepts into concrete architectural plans, data schemas, and module trees.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {(['webhook', 'auth', 'chat'] as const).map((concept) => (
                  <button
                    key={concept}
                    type="button"
                    onClick={() => setSelectedConcept(concept)}
                    className={`text-[10px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      selectedConcept === concept
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {concept === 'webhook' ? 'Webhook' : concept === 'auth' ? 'Auth' : 'Chat'}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[11px] space-y-1.5 text-[var(--color-text-secondary)]">
                <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-text-primary)] pb-1 border-b border-[var(--color-border)]">
                  <span>Generated File Tree</span>
                  <span className="text-[#057A55]">3 modules planned</span>
                </div>
                <div className="truncate">
                  📁 {selectedConcept === 'webhook' ? 'src/webhook/handler.ts' : selectedConcept === 'auth' ? 'src/auth/session.ts' : 'src/chat/broker.ts'}
                </div>
                <div className="truncate">
                  📁 {selectedConcept === 'webhook' ? 'src/webhook/verifyHmac.ts' : selectedConcept === 'auth' ? 'src/auth/jwtSign.ts' : 'src/chat/socket.ts'}
                </div>
                <div className="truncate text-[#533AFD] dark:text-[#7A68FF] font-semibold">
                  🧪 {selectedConcept === 'webhook' ? 'tests/webhook.test.ts' : selectedConcept === 'auth' ? 'tests/auth.test.ts' : 'tests/chat.test.ts'}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Multi-Turn Code Synthesis */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Step 2 • Code Synthesis
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Cpu className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Multi-file Claude Code &amp; Codex
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Generates robust, typed code across TypeScript, Node, PHP 8, and modern web frameworks with clean syntax.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex gap-2">
                {[
                  { id: 'ts', label: 'TypeScript' },
                  { id: 'php', label: 'PHP 8.2' },
                  { id: 'js', label: 'JavaScript' },
                ].map((lang) => (
                  <button
                    key={lang.id}
                    type="button"
                    onClick={() => setSelectedLang(lang.id as any)}
                    className={`flex-1 text-[10px] font-mono py-1 rounded-[4px] border transition-all cursor-pointer ${
                      selectedLang === lang.id
                        ? 'border-[#533AFD] bg-[#533AFD]/10 text-[#533AFD] font-bold'
                        : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] bg-[#0A0D14] text-slate-200 p-2.5 font-mono text-[10px] space-y-1 border border-slate-800">
                <div className="text-slate-400 flex justify-between">
                  <span>{selectedLang === 'ts' ? 'crypto.ts' : selectedLang === 'php' ? 'VerifyHmac.php' : 'verify.js'}</span>
                  <span className="text-emerald-400">Strict Types</span>
                </div>
                <div className="text-purple-300">
                  {selectedLang === 'ts' && 'export function verifyHmac(raw: Buffer, sig: string): boolean {'}
                  {selectedLang === 'php' && 'public function verifyHmac(string $payload, string $sig): bool {'}
                  {selectedLang === 'js' && 'export function verifyHmac(payload, signature) {'}
                </div>
                <div className="text-sky-300 pl-2">
                  {selectedLang === 'ts' && '  const hmac = crypto.createHmac("sha256", key);'}
                  {selectedLang === 'php' && '  $expected = hash_hmac("sha256", $payload, $key);'}
                  {selectedLang === 'js' && '  const hash = crypto.timingSafeEqual(expected, sig);'}
                </div>
                <div className="text-slate-500 pl-2">  // Timing-safe verification</div>
              </div>
            </div>
          </div>

          {/* Card 3: Automated Test Runner */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Step 3 • Automated Test Suites
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Zero-boilerplate test suites
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Builds and runs unit, integration, and mock suites covering happy paths, edge cases, and timeouts.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2.5">
              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[10.5px] space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-bold text-[var(--color-text-primary)]">
                  <span>Jest / PHPUnit Runner</span>
                  <span className="text-[#057A55] font-semibold">{testsRunning ? 'Running...' : 'All Passed'}</span>
                </div>
                <div className="space-y-1 text-[10px]">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span className="truncate">validates HMAC timing-safe signature</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span className="truncate">rejects replayed timestamp requests</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 shrink-0" />
                    <span className="truncate">retries on network timeout with backoff</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                disabled={testsRunning}
                onClick={handleRunTests}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded-[4px] bg-[#533AFD] hover:bg-[#432DE0] text-white transition-all cursor-pointer disabled:opacity-50"
              >
                {testsRunning ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Executing Tests...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3" />
                    <span>Re-Run Automated Suite</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 4: Code Quality & Guardrails */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Step 4 • Guardrails &amp; Linter
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Strict AST linting &amp; security
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                AST syntax validation, memory leak checks, and OWASP security safeguards ensure clean code.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex items-center justify-between p-2 rounded-[6px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)]">
                <span className="text-xs font-medium text-[var(--color-text-primary)]">Strict Schema Enforcer</span>
                <button
                  type="button"
                  onClick={() => setGuardrailActive(!guardrailActive)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer ${
                    guardrailActive ? 'bg-[#533AFD]' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      guardrailActive ? 'translate-x-4' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[10px] space-y-1">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">AST Linter</span>
                  <span className="font-bold text-[#057A55]">0 Warnings</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Type Check</span>
                  <span className="font-bold text-[#057A55]">Strict Verified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-muted)]">Security Audit</span>
                  <span className="font-bold text-[#057A55]">OWASP Clean</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Regression Retest Loop */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Step 5 • Regression Retest
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <RefreshCw className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Iterate without breaking changes
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                When requirements or parameters update, the suite retests automatically to prevent regressions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 font-mono text-[10.5px] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-text-muted)]">Sprint Iteration:</span>
                  <span className="font-bold text-[var(--color-text-primary)]">v1.{retestIter} Build</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-text-muted)]">Retest Status:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {retestStatus === 'running' ? 'Verifying...' : '0 Regressions'}
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full rounded-full" />
                </div>
              </div>

              <button
                type="button"
                disabled={retestStatus === 'running'}
                onClick={handleRetestUpdate}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded-[4px] border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] transition-all cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 ${retestStatus === 'running' ? 'animate-spin' : ''}`} />
                <span>Simulate Code Update &amp; Retest</span>
              </button>
            </div>
          </div>

          {/* Card 6: Staging Deploy & Continuous Git */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Step 6 • Staging &amp; Git Sync
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Globe className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Autonomous Git commits &amp; deploy
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Commits clean, verified code to GitHub and triggers automated staging preview builds for live testing.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded-[6px] bg-[#0A0D14] text-slate-200 p-2.5 font-mono text-[10px] space-y-1.5 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-1">
                    <GitCommit className="w-3 h-3 text-[#00D4FF]" />
                    <span>commit e84b2c1</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">main</span>
                </div>
                <div className="text-slate-300 truncate">feat: add verified webhook retry queue</div>
                <div className="text-slate-500 text-[9px]">Build: passing (12s deploy)</div>
              </div>

              <button
                type="button"
                onClick={handlePushStaging}
                className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-1.5 rounded-[4px] bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer"
              >
                {stagedPushed ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Pushed to Staging!</span>
                  </>
                ) : (
                  <>
                    <Globe className="w-3 h-3" />
                    <span>Verify Staging Build</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
