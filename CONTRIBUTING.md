# Contributing to Stage 1

Thanks for your interest in contributing! Stage 1 is community owned and we welcome all contributions.

## How to Contribute

### Adding a New Offer

All offers live in `lib/data.ts`. To add one:

1. Fork the repo and create a branch: `git checkout -b add/offer-name`
2. Add your offer to the `offers` array in `lib/data.ts`:

```typescript
{
  id: "your-offer-id",           // Lowercase, kebab-case
  name: "Offer Name",
  provider: "Company Name",
  logo: "/placeholder-logo.svg", // Or a real logo path
  tagline: "Short one-liner",
  description: "Detailed description of the offer.",
  value: "$X,XXX",               // Dollar value of the perk
  category: "Cloud & Infrastructure", // See Category type
  stages: ["Idea", "MVP"],      // See Stage type
  eligibility: [
    "Must be a startup less than 2 years old",
    "Must not have previously used this program",
  ],
  howToApply: "Step-by-step instructions to apply.",
  applyUrl: "https://example.com/apply",
  expiresAt: null,               // Or "December 2026"
  verified: true,
  featured: false,
  upvotes: 0,
  tags: ["cloud", "credits"],
}
```

3. Open a Pull Request with:
   - The offer name in the PR title
   - A link to the official program page for verification

### Adding a Launch Directory

Add to the `launchDirectories` array in `lib/data.ts`:

```typescript
{ name: "Directory Name", url: "https://example.com", category: "general" }
```

### Adding a Reddit Community

Add to the `redditCommunities` array in `lib/data.ts`:

```typescript
{ name: "r/subreddit", url: "https://reddit.com/r/subreddit", members: "100K+", description: "Brief description" }
```

### Bug Fixes & UI Improvements

1. Fork the repo and create a branch: `git checkout -b fix/description`
2. Make your changes
3. Test locally with `pnpm dev`
4. Open a Pull Request

## Guidelines

- **No affiliate links.** Every offer must link to the official program page.
- **Verify before submitting.** Check that the offer is currently active and available.
- **Keep descriptions factual.** No marketing language or exaggerated claims.
- **One offer per PR.** Makes it easier to review and verify.

## Categories

Valid categories: `Cloud & Infrastructure`, `AI & ML`, `Developer Tools`, `Fintech & Payments`, `Design & No-Code`, `Marketing & Analytics`, `Communication`, `Security & Compliance`, `Productivity`

## Stages

Valid stages: `Idea`, `MVP`, `Early Traction`, `Growth`

## Development

```bash
pnpm install
pnpm dev
```

## Questions?

Open an [issue](https://github.com/nikhilsbuilds/stage1/issues) and we'll help you out.
