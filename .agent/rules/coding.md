# Coding Rules

## 1. General Principles

Follow these principles for all code changes:

- Write clean, readable, and maintainable code.
- Prefer simple solutions over unnecessarily complex abstractions.
- Reuse existing components, utilities, hooks, and functions whenever possible.
- Do not duplicate logic.
- Do not introduce unnecessary dependencies.
- Follow the existing project architecture and conventions.
- Do not modify unrelated files.
- Do not rewrite working code without a clear reason.
- Prioritize maintainability over cleverness.
- Code should be easy for another developer to understand and modify.

---

# 2. TypeScript

Use TypeScript throughout the project.

## Rules

- Prefer explicit and meaningful types.
- Avoid `any`.
- Do not use `any` to silence TypeScript errors.
- Use `unknown` when the actual type is unknown.
- Define reusable types in appropriate locations.
- Prefer type inference when the inferred type is obvious.
- Do not unnecessarily annotate every variable.

### Bad

```ts
const user: any = response.data;
```

### Good

```ts
const user: User = response.data;
```

If the data is genuinely unknown:

```ts
const data: unknown = response.data;
```

---

# 3. React Components

Use functional components.

Components should have a single clear responsibility.

Prefer:

```text
Page
├── Header
├── Hero
├── FeatureList
└── CTA
```

over a single extremely large component.

## Rules

- Keep components reasonably small.
- Extract repeated UI into reusable components.
- Do not create abstractions prematurely.
- Do not create a component only to wrap a single trivial element unless there is a clear reason.
- Keep business logic outside presentational components when possible.
- Keep API calls outside UI components.

---

# 4. Component Reusability

Before creating a new component:

1. Search for an existing component.
2. Check whether the existing component can be reused.
3. Check whether the existing component can be extended safely.
4. Only create a new component when necessary.

Do not create duplicates such as:

```text
Button.tsx
PrimaryButton.tsx
MainButton.tsx
CustomButton.tsx
```

when one reusable Button component is sufficient.

---

# 5. Tailwind CSS

Tailwind CSS is the primary styling system.

Use Tailwind utility classes whenever possible.

Do not introduce another styling solution without explicit approval.

Avoid:

- Inline styles
- CSS-in-JS
- Unnecessary CSS modules
- Arbitrary Tailwind values when an existing design token can be used

---

# 6. IMPORTANT — Do Not Use Arbitrary Color Values

Colors **MUST NOT** be defined directly using arbitrary Tailwind values.

### Forbidden

```tsx
<div className="bg-[#635BFF]" />
```

```tsx
<p className="text-[#111111]" />
```

```tsx
<div className="border-[#E5E5E5]" />
```

```tsx
<button className="bg-[rgb(99,91,255)]" />
```

```tsx
<div className="bg-[rgba(0,0,0,0.5)]" />
```

Do not use arbitrary color values even when they visually match the design.

---

## Correct Approach

Define project colors as design tokens in the Tailwind configuration or the project's established Tailwind/theme system.

Example:

```ts
primary;
background;
foreground;
muted;
surface;
border;
error;
success;
```

Then use:

```tsx
<div className="bg-primary" />
```

```tsx
<p className="text-foreground" />
```

```tsx
<div className="border-border" />
```

---

# 7. Colors Must Come From the Design System

The design system is the source of truth for colors.

If the design system defines:

```text
primary
background
surface
foreground
muted
border
error
success
```

Use those tokens.

Do not invent a new color inside a component.

### Bad

```tsx
<div className="bg-[#F5F5F5]" />
```

### Good

```tsx
<div className="bg-background" />
```

If a required color does not exist:

1. Check whether an existing token can be reused.
2. If not, update the design system/token configuration.
3. Then use the new semantic token.

Do not bypass the design system with an arbitrary color.

---

# 8. IMPORTANT — Do Not Use Arbitrary Spacing Values

Spacing must use the project's existing Tailwind spacing scale.

### Forbidden

```tsx
<div className="p-[17px]" />
```

```tsx
<div className="mt-[13px]" />
```

```tsx
<div className="gap-[22px]" />
```

```tsx
<div className="px-[19px]" />
```

```tsx
<div className="space-y-[15px]" />
```

Prefer the existing Tailwind spacing scale:

```tsx
<div className="p-4" />
```

```tsx
<div className="mt-6" />
```

```tsx
<div className="gap-4" />
```

```tsx
<div className="px-5" />
```

Use the closest semantic spacing token defined by the project's design system.

---

# 9. Do Not Hardcode Design Tokens Inside Components

Do not define design values directly inside JSX.

### Bad

```tsx
<div
  className="
    bg-[#FAFAFA]
    text-[#111111]
    p-[17px]
    rounded-[13px]
  "
/>
```

### Good

```tsx
<div
  className="
    bg-background
    text-foreground
    p-4
    rounded-lg
  "
/>
```

The component should consume the design system rather than redefine it.

---

# 10. Border Radius

Use the existing Tailwind radius scale.

Prefer:

```text
rounded-sm
rounded
rounded-md
rounded-lg
rounded-xl
rounded-full
```

Avoid arbitrary values:

```tsx
rounded-[13px]
```

```tsx
rounded-[18px]
```

If a new radius is genuinely required by the design system, define it as a project token first.

---

# 11. Typography

Typography must follow the project's design system.

Prefer existing Tailwind typography utilities.

Example:

```tsx
<h1 className="text-4xl font-bold">
```

Do not use arbitrary font sizes unless explicitly required by the design system.

### Avoid

```tsx
<h1 className="text-[57px]">
```

### Prefer

```tsx
<h1 className="text-6xl">
```

If a specific custom typography token is required, define it in the project's theme/design system rather than using arbitrary values repeatedly.

---

# 12. Layout

Use Tailwind layout utilities.

Prefer:

```text
flex
grid
block
inline-flex
items-center
justify-between
gap-4
max-w-7xl
mx-auto
```

Avoid unnecessary custom CSS for standard layouts.

---

# 13. Responsive Design

Use Tailwind responsive utilities.

Example:

```tsx
<div className="px-4 md:px-8 lg:px-12">
```

Prefer mobile-first styling.

Structure:

```text
base
↓
sm
↓
md
↓
lg
↓
xl
```

Do not create separate duplicated components for desktop and mobile unless the interaction or information architecture is fundamentally different.

---

# 14. Conditional Classes

For conditional class names, use the project's established utility.

If the project already uses `cn`, continue using it.

Example:

```tsx
<div
  className={cn(
    "rounded-lg p-4",
    isActive && "bg-primary text-primary-foreground",
  )}
/>
```

Do not manually construct long class strings unnecessarily.

---

# 15. Class Name Organization

When a component contains many Tailwind classes, organize them logically.

Recommended order:

```text
Layout
→ Position
→ Size
→ Spacing
→ Typography
→ Color
→ Border
→ Effects
→ Interaction
→ Responsive
```

Example:

```tsx
<button
  className="
    inline-flex
    h-10
    items-center
    justify-center
    gap-2
    rounded-md
    px-4
    text-sm
    font-semibold
    bg-primary
    text-primary-foreground
    transition-colors
    hover:bg-primary/90
    disabled:pointer-events-none
    disabled:opacity-50
  "
>
```

Do not prioritize perfect ordering over readability, but maintain consistency.

---

# 16. Images

Use the framework's recommended image solution.

For Next.js:

```tsx
import Image from "next/image";
```

Prefer optimized images.

Do not use unnecessarily large images.

Use appropriate:

- width
- height
- aspect ratio
- object-fit
- loading behavior

Avoid using background images when a semantic image is more appropriate.

---

# 17. Icons

Use the project's existing icon library.

Do not install another icon library if one already exists.

Icons should:

- Have consistent sizing.
- Follow the design system.
- Use semantic colors.
- Have appropriate accessibility treatment.

Avoid:

```tsx
<Icon size={37} />
```

if the design system uses standard icon sizes.

Prefer established sizes such as:

```tsx
size={16}
size={20}
size={24}
```

or the project's existing icon utilities.

---

# 18. Accessibility

All interactive elements must be accessible.

Use semantic HTML.

Prefer:

```tsx
<button>
```

over:

```tsx
<div onClick={...}>
```

Use:

```tsx
<a>
```

for navigation.

Interactive elements should have:

- Accessible names
- Visible focus states
- Sufficient contrast
- Appropriate disabled states
- Keyboard accessibility

Do not remove focus indicators without providing an accessible alternative.

---

# 19. Forms

Forms should:

- Have clear labels.
- Provide validation feedback.
- Show loading states.
- Prevent duplicate submissions.
- Display meaningful error messages.
- Preserve user input when appropriate.

Do not put API logic directly inside a presentational input component.

---

# 20. API Calls

UI components must not directly implement API communication.

Avoid:

```tsx
const response = await axios.post(...);
```

inside a page or UI component.

Prefer:

```text
UI
↓
Hook
↓
API function
↓
API client
↓
Backend
```

Example:

```text
LoginForm
↓
useLogin()
↓
auth.api.ts
↓
api/client.ts
↓
Backend
```

Reuse the existing API client.

Do not create a second API client.

---

# 21. State Management

Use the project's established state management solution.

Do not introduce another state management library without a clear reason.

Separate:

- UI state
- Server state
- Form state
- Global application state

Avoid putting everything into global state.

---

# 22. Loading, Error, and Empty States

Every data-driven feature should consider:

```text
Loading
Success
Empty
Error
```

Do not implement only the successful state.

Example:

```text
ProductList
├── ProductListSkeleton
├── ProductListContent
├── ProductListEmpty
└── ProductListError
```

---

# 23. Error Handling

Errors should be handled at the appropriate layer.

Do not expose raw technical errors directly to users.

### Bad

```text
AxiosError: Request failed with status code 500
```

### Good

```text
Terjadi kesalahan saat memuat data.
Silakan coba lagi.
```

Technical error details may be logged appropriately for debugging, but must not expose sensitive information.

---

# 24. Logging

Do not log sensitive information.

Never log:

- Password
- Access token
- Refresh token
- API secret
- Authentication credentials
- Personal information unnecessarily

Avoid leaving temporary debugging logs in production code.

Remove:

```ts
console.log("test");
console.log(response);
console.log(token);
```

when they are no longer needed.

---

# 25. Environment Variables

Never hardcode secrets.

Do not write:

```ts
const API_KEY = "secret-key";
```

Use environment variables according to the project's configuration.

Do not commit secrets into Git.

---

# 26. File Structure

Follow the existing project structure.

Before creating a new file:

1. Inspect related directories.
2. Identify the correct location.
3. Follow existing naming conventions.
4. Reuse existing abstractions.

Do not reorganize the entire project for a small feature.

---

# 27. Naming

Use descriptive names.

### Good

```text
ProductCard
PricingCard
CheckoutForm
useProducts
getUserProfile
```

### Bad

```text
Card2
ComponentA
data2
handleThing
temp
```

Use consistent naming conventions throughout the project.

---

# 28. Functions

Functions should have a single clear responsibility.

Avoid extremely large functions.

### Bad

```ts
function processEverything() {
  // fetch data
  // validate form
  // transform data
  // update state
  // navigate
  // show notification
}
```

Prefer separating responsibilities when appropriate.

---

# 29. Comments

Write comments only when they provide useful context.

Do not comment obvious code.

### Bad

```ts
// Set loading to true
setLoading(true);
```

Prefer comments explaining:

- Why something is implemented a certain way.
- Non-obvious business rules.
- Important constraints.
- Temporary workarounds.

---

# 30. Dependencies

Before installing a new dependency:

1. Check whether the project already has an equivalent solution.
2. Check whether native/framework functionality can solve the problem.
3. Consider bundle size and maintenance cost.
4. Only install when justified.

Do not add dependencies for trivial functionality.

---

# 31. Performance

Avoid unnecessary rendering and computation.

Prefer:

- Efficient component boundaries
- Optimized images
- Lazy loading when appropriate
- Proper data fetching
- Stable keys
- Minimal client-side JavaScript where possible

Do not prematurely optimize without evidence.

---

# 32. SEO

For web projects:

- Use semantic HTML.
- Maintain heading hierarchy.
- Provide meaningful page titles.
- Provide metadata where appropriate.
- Use descriptive links.
- Avoid rendering important content only through client-side interactions when unnecessary.

---

# 33. Git

Keep changes focused.

A feature should not modify unrelated files.

Before committing:

```bash
git status
git diff
```

Review all changes.

Use meaningful commit messages.

Examples:

```text
feat: add services section
feat: implement pricing page
fix: handle login network error
refactor: extract portfolio card
style: refine hero spacing
```

---

# 34. Before Creating Code

The Agent MUST:

1. Inspect the existing implementation.
2. Search for reusable components.
3. Check the project's design system.
4. Check the relevant requirements.
5. Understand the existing architecture.
6. Determine the smallest appropriate change.

Do not immediately create new files without inspecting the codebase.

---

# 35. Before Finishing a Task

The Agent MUST:

1. Review changed files.
2. Check for duplicated code.
3. Check for unnecessary dependencies.
4. Check for arbitrary Tailwind values.
5. Check for hardcoded design values.
6. Run TypeScript checks.
7. Run lint.
8. Run relevant tests.
9. Verify responsive behavior.
10. Verify loading/error/empty states where applicable.

---

# 36. Tailwind Final Validation

Before considering a UI task complete, search the changed files for arbitrary design values.

Pay special attention to:

```text
bg-[...]
text-[...]
border-[...]
from-[...]
to-[...]
via-[...]

p-[...]
px-[...]
py-[...]
m-[...]
mx-[...]
my-[...]
mt-[...]
mb-[...]
ml-[...]
mr-[...]
gap-[...]
space-[...]

w-[...]
h-[...]

rounded-[...]

text-[...]
leading-[...]
tracking-[...]
```

These should generally NOT be used.

If an arbitrary value appears necessary, first determine whether:

1. An existing Tailwind token can be used.
2. The design system should be updated.
3. A reusable semantic token should be introduced.

Do not silently add arbitrary values.

---

# 37. Exception Handling for Arbitrary Values

Arbitrary Tailwind values are allowed only when there is a legitimate technical or design requirement that cannot reasonably be represented using the existing design tokens.

Examples that may require an exception:

```tsx
aspect - [16 / 9];
```

or a very specific CSS property required by a third-party integration.

However, arbitrary **colors and spacing values should be treated as strongly discouraged**.

Especially avoid:

```tsx
bg-[#...]
text-[#...]
border-[#...]

p-[...]
m-[...]
gap-[...]
px-[...]
py-[...]
```

If an exception is necessary, keep it isolated and explain the reason when reviewing the implementation.

---

# 38. Design System Is the Source of Truth

The design system takes precedence over individual component preferences.

The implementation should follow:

```text
Design Requirement
        ↓
Design System
        ↓
Tailwind Tokens
        ↓
Components
        ↓
Pages
```

Do not work in the opposite direction:

```text
Component
↓
random color
↓
random spacing
↓
design system
```

The design system should drive implementation.

---

# 39. AI Agent Behavior

When implementing a task:

- Inspect before modifying.
- Plan before large changes.
- Reuse before creating.
- Follow existing patterns.
- Follow the design system.
- Keep changes focused.
- Verify before reporting completion.
- Do not claim a task is complete if verification has not been performed.

If requirements are ambiguous and the ambiguity could significantly affect architecture or user experience, ask for clarification instead of making a major assumption.

For minor implementation details, choose the simplest solution consistent with the existing project conventions.

---

# 40. Definition of Done

A task is considered complete only when:

```text
Requirements satisfied
        ↓
Design system followed
        ↓
Existing architecture followed
        ↓
Reusable components considered
        ↓
No unnecessary dependencies
        ↓
No unnecessary arbitrary Tailwind values
        ↓
TypeScript passes
        ↓
Lint passes
        ↓
Relevant tests pass
        ↓
Responsive behavior verified
        ↓
UI visually reviewed
        ↓
Changed files reviewed
```

The goal is not merely to produce working code.

The goal is to produce code that is:

**Correct**

**Consistent**

**Maintainable**

**Accessible**

**Performant**

**Visually consistent**

**Easy to extend**

## 41. Use Text Theme for Reusability

When implementing style for text

- Use existing text style that is defined in constants/text-theme.ts
- Dont specify specific variable for a text-theme style. Example, hero-title, title, nav-text -> don't, heading1, subheading1, body1, button -> do
- Eliminate unused text-theme
- If there is a new style that is not defined, feel free to add the style in text-theme
