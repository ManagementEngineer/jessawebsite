# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Development Partnership

We're building production-quality code together. Your role is to create maintainable, efficient solutions while catching potential issues early.

When you seem stuck or overly complex, I'll redirect you - my guidance helps you stay on track.

## 🚨 AUTOMATED CHECKS ARE MANDATORY

**ALL hook issues are BLOCKING - EVERYTHING must be ✅ GREEN!**  
No errors. No formatting issues. No linting problems. Zero tolerance.  
These are not suggestions. Fix ALL issues before continuing.

## CRITICAL WORKFLOW - ALWAYS FOLLOW THIS!

### Research → Plan → Implement

**NEVER JUMP STRAIGHT TO CODING!** Always follow this sequence:

1. **Research**: Explore the codebase, understand existing patterns
2. **Plan**: Create a detailed implementation plan and verify it with me
3. **Implement**: Execute the plan with validation checkpoints

When asked to implement any feature, you'll first say: "Let me research the codebase and create a plan before implementing."

For complex architectural decisions or challenging problems, use **"ultrathink"** to engage maximum reasoning capacity. Say: "Let me ultrathink about this architecture before proposing a solution."

### USE MULTIPLE AGENTS!

_Leverage subagents aggressively_ for better results:

- Spawn agents to explore different parts of the codebase in parallel
- Use one agent to write tests while another implements features
- Delegate research tasks: "I'll have an agent investigate the database schema while I analyze the API structure"
- For complex refactors: One agent identifies changes, another implements them

Say: "I'll spawn agents to tackle different aspects of this problem" whenever a task has multiple independent parts.

### Reality Checkpoints

**Stop and validate** at these moments:

- After implementing a complete feature
- Before starting a new major component
- When something feels wrong
- Before declaring "done"
- **WHEN HOOKS FAIL WITH ERRORS** ❌

Run: `make fmt && make test && make lint`

> Why: You can lose track of what's actually working. These checkpoints prevent cascading failures.

### 🚨 CRITICAL: Hook Failures Are BLOCKING

**When hooks report ANY issues (exit code 2), you MUST:**

1. **STOP IMMEDIATELY** - Do not continue with other tasks
2. **FIX ALL ISSUES** - Address every ❌ issue until everything is ✅ GREEN
3. **VERIFY THE FIX** - Re-run the failed command to confirm it's fixed
4. **CONTINUE ORIGINAL TASK** - Return to what you were doing before the interrupt
5. **NEVER IGNORE** - There are NO warnings, only requirements

This includes:

- Formatting issues (gofmt, black, prettier, etc.)
- Linting violations (golangci-lint, eslint, etc.)
- Forbidden patterns (time.Sleep, panic(), interface{})
- ALL other checks

Your code must be 100% clean. No exceptions.

**Recovery Protocol:**

- When interrupted by a hook failure, maintain awareness of your original task
- After fixing all issues and verifying the fix, continue where you left off
- Use the todo list to track both the fix and your original task

## Working Memory Management

### When context gets long:

- Re-read this CLAUDE.md file
- Summarize progress in a PROGRESS.md file
- Document current state before major changes

### Maintain TODO.md:

```
## Current Task
- [ ] What we're doing RIGHT NOW

## Completed
- [x] What's actually done and tested

## Next Steps
- [ ] What comes next
```

## Go-Specific Rules

### FORBIDDEN - NEVER DO THESE:

- **NO interface{}** or **any{}** - use concrete types!
- **NO time.Sleep()** or busy waits - use channels for synchronization!
- **NO** keeping old and new code together
- **NO** migration functions or compatibility layers
- **NO** versioned function names (processV2, handleNew)
- **NO** custom error struct hierarchies
- **NO** TODOs in final code

> **AUTOMATED ENFORCEMENT**: The smart-lint hook will BLOCK commits that violate these rules.  
> When you see `❌ FORBIDDEN PATTERN`, you MUST fix it immediately!

### Required Standards:

- **Delete** old code when replacing it
- **Meaningful names**: `userID` not `id`
- **Early returns** to reduce nesting
- **Concrete types** from constructors: `func NewServer() *Server`
- **Simple errors**: `return fmt.Errorf("context: %w", err)`
- **Table-driven tests** for complex logic
- **Channels for synchronization**: Use channels to signal readiness, not sleep
- **Select for timeouts**: Use `select` with timeout channels, not sleep loops

## Implementation Standards

### Our code is complete when:

- ? All linters pass with zero issues
- ? All tests pass
- ? Feature works end-to-end
- ? Old code is deleted
- ? Godoc on all exported symbols

### Testing Strategy

- Complex business logic ? Write tests first
- Simple CRUD ? Write tests after
- Hot paths ? Add benchmarks
- Skip tests for main() and simple CLI parsing

### Project Structure

```
cmd/        # Application entrypoints
internal/   # Private code (the majority goes here)
pkg/        # Public libraries (only if truly reusable)
```

## Problem-Solving Together

When you're stuck or confused:

1. **Stop** - Don't spiral into complex solutions
2. **Delegate** - Consider spawning agents for parallel investigation
3. **Ultrathink** - For complex problems, say "I need to ultrathink through this challenge" to engage deeper reasoning
4. **Step back** - Re-read the requirements
5. **Simplify** - The simple solution is usually correct
6. **Ask** - "I see two approaches: [A] vs [B]. Which do you prefer?"

My insights on better approaches are valued - please ask for them!

## Performance & Security

### **Measure First**:

- No premature optimization
- Benchmark before claiming something is faster
- Use pprof for real bottlenecks

### **Security Always**:

- Validate all inputs
- Use crypto/rand for randomness
- Prepared statements for SQL (never concatenate!)

## Communication Protocol

### Progress Updates:

```
✓ Implemented authentication (all tests passing)
✓ Added rate limiting
✗ Found issue with token expiration - investigating
```

### Suggesting Improvements:

"The current approach works, but I notice [observation].
Would you like me to [specific improvement]?"

## Working Together

- This is always a feature branch - no backwards compatibility needed
- When in doubt, we choose clarity over cleverness
- **REMINDER**: If this file hasn't been referenced in 30+ minutes, RE-READ IT!

Avoid complex abstractions or "clever" code. The simple, obvious solution is probably better, and my guidance helps you stay focused on what matters.

## Project Overview

This is Jessa Batuigas's personal portfolio website - a Gatsby v3 static site showcasing her work as a Registered Practical Nurse. The site is based on Brittany Chiang's v4 portfolio template.

## Essential Commands

```bash
# Development
npm start          # Start development server on localhost:8000
npm run develop    # Alternative to npm start

# Building
npm run build      # Create production build in /public
npm run serve      # Serve production build locally
npm run clean      # Clean cache and public directories

# Code Quality
npm run format     # Format code with Prettier
npm run lint-staged # Run ESLint and fix issues
```

## Architecture Overview

### Tech Stack

- **Gatsby v3.4.1**: React-based static site generator
- **Styled Components**: All styling uses styled-components v5.3.0
- **Node.js 14.16.0**: Required version (see .nvmrc)
- **Firebase Hosting**: Deployment target

### Content Structure

- **Markdown Files**: Dynamic content lives in `/content/`
  - `/content/featured/`: Portfolio highlights and certifications
  - `/content/jobs/`: Work experience entries
  - `/content/projects/`: Additional projects
- **Frontmatter**: Each markdown file includes metadata (title, date, company, etc.)

### Component Architecture

- **Page Components**: Located in `/src/pages/` - Gatsby automatically creates routes
- **Section Components**: Major page sections in `/src/components/sections/`
  - `hero.js`: Landing section with introduction
  - `about.js`: Nursing philosophy section
  - `jobs.js`: Professional development plan (not work experience)
  - `featured.js`: Highlighted certifications/projects
- **Shared Components**: Reusable components in `/src/components/`
- **Icon Components**: SVG icons as React components in `/src/components/icons/`

### Styling Patterns

- **Theme Variables**: CSS variables defined in global styles
  - Primary color (green): `#64ffda`
  - Background colors: `--navy: #0a192f`, `--dark-navy: #020c1b`
- **Mixins**: Common styles in `src/styles/mixins.js`
- **Responsive Design**: Mobile-first with breakpoints at 480px, 600px, 768px, 1080px

### Key Configuration

- **Site Config**: `/src/config.js` contains email, social links, navigation
- **Gatsby Config**: `/gatsby-config.js` for plugins and site metadata
- **Build Output**: Static files generated to `/public/` directory

### Development Workflow

1. Content changes: Edit markdown files in `/content/`
2. Component changes: Work in `/src/components/`
3. Styling: Use styled-components within component files
4. Images: Place in `/src/images/` for optimization
5. Pre-commit hooks will auto-format and lint your code

### Important Notes

- Always use Node 14.16.0 (run `nvm use`)
- Don't commit directly - husky pre-commit hooks must pass
- The `/public/` directory is auto-generated - don't edit
- Firebase hosting serves from `/public/` directory
- Custom fonts (Calibre, SFMono) are loaded from `/src/fonts/`
