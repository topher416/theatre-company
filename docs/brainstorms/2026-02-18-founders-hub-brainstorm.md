---
date: 2026-02-18
topic: founders-hub
---

# Founders' Hub — How We Work Together on This

## What We're Building

Three tools that help Topher and Cassie move toward a staged reading (October 2026) and full production (October 2027) of *The Thin Place* — at a pace that protects the joy, respects Cassie's bandwidth, and keeps both founders aligned.

This is not a project management system. It's a shared space for two people to dream, remember, and take one step at a time.

## The Governing Principle

**Nothing gets built until the conversation catches up to it.**

Topher has done significant research. Cassie has the script and the enthusiasm. The gap between those two things closes through real conversations, not documents. The tools exist to support those conversations — not to replace them or rush them.

## The Three Tools

### 1. The Dream Doc (Google Doc)

A living, shared document where both founders write freely. Not a plan — a conversation in slow motion.

**Sections:**
- What excites us about this
- People we'd love to work with
- Shows we've seen in Chicago and what we noticed
- Questions we don't know the answer to yet
- Ideas that came up over dinner
- Things we've read or listened to

**How it works:** Topher seeds it with a few things. Cassie adds when something strikes her. It grows at the pace of actual conversation. No deadlines, no assignments — just a place to think together.

### 2. The People Map (Google Sheet)

A network audit. Everyone they know in theatre, ranked on human terms.

**Columns:**
- Name
- How We Know Them
- City (SLC, Chicago, other)
- Vibe (love / respect / complicated / avoid)
- What They Do (actor, director, designer, admin, etc.)
- Could Help With (casting, advice, introductions, crew, audience)
- Have We Reached Out? (not yet / yes / not appropriate yet)
- Notes

**How it works:** Each founder fills in their own people. Could be a fun evening activity — wine, a shared screen, "OK who do we know?" The vibe column is the most important one. This isn't about utility. It's about who they actually want to be in a room with.

### 3. The Milestone Tracker (React site)

A beautiful, date-aware private site that makes opening night feel real and the path toward it feel manageable.

**Features:**
- Current date display — "Today is Tuesday, February 18, 2026"
- Two primary countdowns — days until the reading, days until opening night
- Current phase indicator with a short description of where they are
- Active milestones — a short list (5-8 max) of what's alive right now, with status
- "On the horizon" section — upcoming milestones, visually dimmed, with "not before" dates
- Design language matches the existing hype site aesthetic (dark, cinematic, ember/gold)

**Data:** Stored in a JSON file. Topher edits milestones and status. Cassie enjoys viewing. Simple, no backend.

**Hosting:** Deploy to Vercel (free tier). Private URL — not indexed, not public-facing.

## Key Blind Spots to Watch

| Blind Spot | Mitigation |
|-----------|------------|
| Topher running ahead of Cassie | The Dream Doc is the pace-setter. If it's not in the Dream Doc, it's not shared yet. Topher's research stays in the repo until conversations make it relevant. |
| Treating this like a startup instead of a passion project | The vibe column in the People Map. The "not before" dates on milestones. The absence of deadlines in the Dream Doc. Joy is a design requirement. |
| Cassie's bandwidth — job hunting, life stress | No tool requires her to do homework. The Dream Doc is opt-in. The milestone tracker is something to enjoy, not a to-do list to dread. |
| Overplanning before alignment | The first real milestone isn't an organizational task — it's "read the play together and talk about it." Everything else follows from that conversation. |
| Burning out on infrastructure before making art | The production is the point. The tools serve the production. If a tool isn't making the work more enjoyable, kill it. |

## What Comes First

1. **This week:** Cassie reads the play in New Mexico. Topher waits.
2. **When she's back:** Read it together. Talk about it. No business yet — just the art.
3. **After that conversation:** Start the Dream Doc. Seed it with what came up.
4. **A fun evening together:** Start the People Map. Wine. "Who do we know?"
5. **Topher builds in parallel:** The milestone tracker site. Ready when the conversations reach that point.

## What the Milestone Tracker Does NOT Include Yet

- Financial details (too early, and belongs in a separate conversation)
- The full critical path from the project overview (too much — surface only what's active)
- Anything about Equity, licensing, or legal structure (until the AEA call happens)
- Anything public-facing (no company name, no brand, no website — that's months away)

## Open Questions

- Should the milestone tracker have any notion of "completed" milestones, or just current and upcoming? (A sense of progress could be motivating.)
- Would a "show journal" section on the tracker site be valuable — a place to log Chicago shows with quick reactions? Or does that belong in the Dream Doc?
- How much of Topher's existing research (the memorandum, the syllabus) gets surfaced on the tracker, and when?

## Next Steps

→ Build the milestone tracker site (React, Vite, deploy to Vercel)
→ Create templates for the Dream Doc and People Map (Google Docs/Sheets)
→ Revisit after Cassie reads the play and the first real conversation happens
