'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

interface BackboneStat {
  value: string;
  label: string;
  color: string;
  domain?: [number, number];
  sparkline: { t: string; v: number }[];
}

const STATS: BackboneStat[] = [
  {
    value: '142ms',
    label: 'average automated test execution duration across modular test suites',
    color: '#533AFD',
    sparkline: [
      { t: 'Iter 1', v: 340 },
      { t: 'Iter 2', v: 260 },
      { t: 'Iter 3', v: 195 },
      { t: 'Iter 4', v: 165 },
      { t: 'Iter 5', v: 148 },
      { t: 'Iter 6', v: 142 },
    ],
  },
  {
    value: '100%',
    label: 'regression test pass rate after iterative code modifications',
    color: '#057A55',
    domain: [95, 100],
    sparkline: [
      { t: 'W1', v: 98.2 },
      { t: 'W2', v: 99.1 },
      { t: 'W3', v: 99.5 },
      { t: 'W4', v: 99.8 },
      { t: 'W5', v: 100.0 },
      { t: 'W6', v: 100.0 },
    ],
  },
  {
    value: '4x Faster',
    label: 'concept to running prototype delivery cycle with Claude Code & Codex',
    color: '#D97706',
    sparkline: [
      { t: 'Sprint 1', v: 1.5 },
      { t: 'Sprint 2', v: 2.2 },
      { t: 'Sprint 3', v: 2.9 },
      { t: 'Sprint 4', v: 3.4 },
      { t: 'Sprint 5', v: 3.8 },
      { t: 'Sprint 6', v: 4.0 },
    ],
  },
  {
    value: '< 3.5 min',
    label: 'average turnaround from prompt/concept to verified running test suite',
    color: '#0d9488',
    domain: [0, 25],
    sparkline: [
      { t: 'Run 1', v: 24.0 },
      { t: 'Run 2', v: 16.5 },
      { t: 'Run 3', v: 11.2 },
      { t: 'Run 4', v: 7.4 },
      { t: 'Run 5', v: 4.6 },
      { t: 'Run 6', v: 3.4 },
    ],
  },
];

export function BackboneStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 border-t border-[var(--color-border)] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered H2 Title with Stripe Opacity Hierarchy */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)]">
            The backbone of autonomous AI software development
          </h2>
          <p className="mt-2 text-base text-[#2E3C4E] dark:text-slate-300 leading-relaxed">
            Connected Claude Code and Codex pipelines delivering verified software implementations and zero regression breaks.
          </p>
        </div>

        {/* 4-Column Stat Strip with Dope Wavy Sparklines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-6 border-t border-[var(--color-border)]">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col justify-between space-y-2">
              <div>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-[14.5px] text-[var(--color-text-secondary)] mt-1.5 leading-normal">
                  {stat.label}
                </p>
              </div>

              {/* Distinct Dope Wavy Sparkline */}
              <div className="h-10 w-full pt-2">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stat.sparkline} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id={`bbGrad_${idx}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={stat.color} stopOpacity={0.35} />
                          <stop offset="100%" stopColor={stat.color} stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      {stat.domain && <YAxis hide domain={stat.domain} />}
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-xs font-semibold shadow-xs text-[var(--color-text-primary)]">
                                {payload[0].value}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke={stat.color}
                        strokeWidth={2}
                        fill={`url(#bbGrad_${idx})`}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
