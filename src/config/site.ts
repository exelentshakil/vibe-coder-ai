/**
 * VibeCoder Engine - Autonomous Claude Code & Codex Development Cockpit
 * Schema & Data Provider for turning concepts into tested production software.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'vibe-coder-ai',
  name: 'VibeCoder Engine',
  badge: 'Claude Code & Codex Studio',
  tagline: 'Turn Product Concepts Into Tested, Working Software',
  description: 'Autonomous AI development engine powered by Claude Code and Codex. Transforms ideas into full implementations with automated test generation, iterative re-testing loops, and regression safeguards.',
  archetype: 'linear',
  primaryNav: [
    { id: 'cockpit', label: 'Development Cockpit' },
    { id: 'pipeline', label: 'Concept to Code Engine' },
    { id: 'records', label: 'Build & Test Log' },
  ],
  metrics: [
    {
      id: 'build_speed',
      title: 'Concept to Prototype',
      value: '< 3.5 Mins',
      change: 'Zero Setup Lag',
      trend: 'up',
      subtext: 'P99 Compile & Scaffold: 2.1s',
      badge: 'Rapid Iteration',
    },
    {
      id: 'test_coverage',
      title: 'Automated Test Pass Rate',
      value: '100% Green',
      change: 'Zero Regressions on Update',
      trend: 'up',
      subtext: 'Unit, E2E & Chaos Suites',
      badge: 'Continuous Verification',
    },
    {
      id: 'engines',
      title: 'Dual AI Coding Harness',
      value: 'Claude Code + Codex',
      change: 'Multi-Turn Context Loop',
      trend: 'neutral',
      subtext: 'TypeScript, PHP, Python, Node',
      badge: 'Autonomous Flow',
    },
  ],
  workflow: {
    badge: 'Step 1 • Live Interactive Test',
    title: 'Concept to Code & Test Verification Engine',
    description: 'Enter any software concept or feature requirement. The engine decomposes requirements, writes modular source files, runs automated test suites, and verifies execution.',
    inputLabel: 'Product Concept, Feature Specification, or User Story',
    inputPlaceholder: 'e.g. Build an automated invoice webhook handler with HMAC signature verification, exponential retry queue, and unit tests...',
    defaultInput: 'Build an automated webhook processor that ingests payment events, verifies SHA-256 HMAC signatures, updates account balances, handles retries with exponential backoff, and provides comprehensive unit tests.',
    buttonLabel: 'Compile Concept & Verify Tests',
    sampleResponse: {
      status: 'IMPLEMENTATION_AND_TESTS_VERIFIED',
      concept_title: 'Secure Payment Webhook Ingestion Engine',
      architectural_plan: {
        runtime: 'TypeScript / Node.js & PHP API Bridge',
        components: [
          'HMAC-SHA256 Signature Verification Layer (Timing-Safe)',
          'Idempotency Store (Atomic Key Locking)',
          'Exponential Backoff Retry Worker (Dead-Letter Guard)',
          'Automated Jest & Integration Test Harness'
        ],
        code_quality_benchmarks: 'Zero linter warnings, strict typing, 100% branch test coverage'
      },
      generated_modules: [
        'src/security/verifyHmac.ts',
        'src/handlers/webhookProcessor.ts',
        'src/queues/retryWorker.ts',
        'tests/webhookProcessor.test.ts'
      ],
      automated_testing_results: {
        total_tests_executed: 18,
        passed: 18,
        failed: 0,
        coverage_percent: 98.6,
        retest_on_update_status: 'PASSED (Zero regressions after parameter refactoring)',
        execution_duration_ms: 142
      },
      iteration_status: 'Ready for production merge or next sprint iteration'
    },
  },
  table: {
    badge: 'Real-Time Build & Verification Log',
    title: 'Recent Software Implementations & Retest Audit Grid',
    description: 'Inspect generated modules, automated test outcomes, compile benchmarks, and re-test status after code updates.',
    columns: [
      { key: 'id', label: 'Build ID' },
      { key: 'entityName', label: 'Module / Concept' },
      { key: 'category', label: 'Stack / Runtime' },
      { key: 'status', label: 'Test Status' },
      { key: 'latency', label: 'Build Time' },
      { key: 'action', label: 'Inspection' },
    ],
    rows: [
      {
        id: 'BLD-7824',
        entityName: 'Payment Webhook & Retry Worker',
        category: 'TypeScript / Node.js',
        status: 'verified',
        latency: '1.4s',
        provider: 'Claude Code CLI',
        updatedAt: '2 mins ago',
        payload: {
          concept: 'Idempotent webhook ingestion with HMAC-SHA256 verification and retry backoff',
          test_suite: 'Jest + Supertest',
          tests_run: 22,
          tests_passed: 22,
          retest_status: 'Green after retry timeout tweak',
          code_files: 5,
          branch_coverage: '98.5%',
        },
      },
      {
        id: 'BLD-7823',
        entityName: 'Customer Session & RBAC Auth',
        category: 'PHP 8.2 / Modern API',
        status: 'verified',
        latency: '1.8s',
        provider: 'Codex Engine',
        updatedAt: '5 mins ago',
        payload: {
          concept: 'Secure session handling, bcrypt password hashing, and role permission guards',
          test_suite: 'PHPUnit 10',
          tests_run: 34,
          tests_passed: 34,
          retest_status: 'Green across all role permissions',
          code_files: 7,
          branch_coverage: '100%',
        },
      },
      {
        id: 'BLD-7822',
        entityName: 'Dynamic Table & URL State Filter',
        category: 'Next.js 15 / React',
        status: 'active',
        latency: '0.9s',
        provider: 'Claude Code CLI',
        updatedAt: '9 mins ago',
        payload: {
          concept: 'Debounced multi-column data table with deep URL search param syncing',
          test_suite: 'React Testing Library',
          tests_run: 16,
          tests_passed: 16,
          retest_status: 'All edge cases verified on pagination reset',
          code_files: 4,
          branch_coverage: '96.2%',
        },
      },
      {
        id: 'BLD-7821',
        entityName: 'Real-Time Event WebSocket Broker',
        category: 'Node.js / WebSockets',
        status: 'queued',
        latency: '2.1s',
        provider: 'Dual AI Harness',
        updatedAt: '15 mins ago',
        payload: {
          concept: 'Sub-50ms message broadcast with heartbeat reconnects and connection pooling',
          test_suite: 'Vitest + Mock Sockets',
          tests_run: 19,
          tests_passed: 19,
          retest_status: 'Stress-tested with 5,000 simulated client connections',
          code_files: 6,
          branch_coverage: '95.0%',
        },
      },
      {
        id: 'BLD-7820',
        entityName: 'Legacy MySQL Query Modernizer',
        category: 'PHP / PDO Prepared Stmts',
        status: 'verified',
        latency: '1.2s',
        provider: 'Claude Code CLI',
        updatedAt: '24 mins ago',
        payload: {
          concept: 'Refactored legacy queries into prepared PDO statements with SQL injection immunity',
          test_suite: 'PHPUnit + Docker MySQL',
          tests_run: 28,
          tests_passed: 28,
          retest_status: 'Full regression pass confirmed zero schema breaks',
          code_files: 6,
          branch_coverage: '100%',
        },
      },
    ],
  },
};
