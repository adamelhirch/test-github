# Orca setup — test-github — 2026-08-16

## Primary worktree
`main` — selector `id:ae4ee406-f585-4a36-b6d4-e23471d4b483::/Users/adamelhirch/orca/projects/test-github`
(isMainWorktree: true; the cockpit. Tasks never run here.)

## Repo
`github.com/adamelhirch/test-github` — remote `origin` = `https://github.com/adamelhirch/test-github.git`
(confirmed fetch + push)

## Conventions
- CI-green merge gate: merge only PRs with green CI, then delete branch + worktree
- One task = one branch = one PR = one responsibility
- Default branch (`main`) always green
- TDD by default

## Issue tracker
github (via `gh`) — each task mirrors as a `gh issue`, linked to its task worktree
(`orca worktree set --worktree <sel> --issue <num>`)

## Agents installed
- opencode: `~/.config/opencode/agents/worker.md` + `~/.config/opencode/agents/orchestrator.md` — present, identical to skill versions
- Claude Code: `~/.claude/agents/worker.md` + `~/.claude/agents/orchestrator.md` — present, identical to skill versions
- No agent restart needed (directories pre-existed before this session)

## Guides
- `orca orchestration` — present in binary (skill loads)
- `orca-cli` — present in binary (skill loads)

## Status
setup complete
