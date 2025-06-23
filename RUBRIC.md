# Final Project Checklist

## General

- [x] Uses a public Github repo.
- [x] Scaffolded using Vite with the `react` (not `react-ts`, `react-swc`, or `react-swc-ts`) template.
- [x] Uses NPM
- [x] Installs and uses dependencies: "react-router".

## Coding Practices

- [x] Formatting should be neat and consistent across the codebase. Prettier can help with this!
- [x] Only 1 component per file unless using Styled-Components.
- [x] Component names should be in PascalCase and filenames should match the components they house.
- [x] Minimize the use of implicit type coercion.
- [x] Favor functional over non-functional approaches. (eg: use array.prototype.map instead of array.prototype.forEach)
- [x] Comments should be concise and only used for explaining tricky or complex code passages. Remove all commented-out code and personal notes.
- [x] Project files that contain only utility or helper functions and no components should be given the `.js` extension.

## Project Structure

### Repo Structure

- [x] Root directory contains:
  - [x] src/
  - [x] .env.local.example file with example values for all environmental variables needed to run project
  - [x] .gitignore which includes at least the following entries:
    - [x] `node_modules`
    - [x] `dist`
    - [x] `*.local` (this covers the `.env.local` file you use for secrets)
    - [x] `.DS_Store` (invisible file for folder attributes used by macOS)
  - [x] index.html - the only changes permitted are in the `<head></head>`
    - [x] 3rd-party stylesheets are permitted if used in conjunction with an installed library. All other styling should be in src/
  - [x] package.json
  - [x] package-lock.json
  - [x] vite.config.js
  - [x] README.md which includes:
    - [ ] Project title and description
    - [ ] Details on any added dependencies, especially those that may manipulate the DOM directly.
    - [ ] Instructions on how to install and run
    - [ ] Any details needed for an API connection
      - [x] If credentials needed, indicate services used
- [x] Root should NOT contain:
  - [x] node_modules/
  - [x] .env.local or any other file with sensitive information
  - [x] Any component files
  - [x] any Yarn artifacts
- [x] `public/` - the favicon can be changed but this directory should not be used
- [x] `src/` directory contains at minimum:
  - [x] `assets/` directory for all included imagery, fonts, etc, unless they are retrieved from an external source.
  - [x] `features/` directory containing at least 2 features
    - [x] If features use more than one component, all related components should reside in a sub-directory with the feature name.
  - [x] `pages/` directory containing at least 3 page components
  - [x] `shared/` directory containing at least 2 components that are used in more than one feature
  - [x] App.css
  - [x] App.jsx
  - [x] main.jsx
- [x] Other directories may be added so long as the assist in keeping the project's code well-organized.

### Project Data Schema Structure

- [x] use any approach accessible to you (look back to the discussion) to create 1 or more objects or arrays of objects to load into state or save to state
- [x] use the simplest structures needed to model data in your application

## Demonstrates Understanding of React Concepts

- [x] The browser's page should never refresh during user interaction.
- [x] All components should be functional (no class-based components).
- [x] Use only React-compatible props.
- [x] State should never be mutated.
- [x] Components should return valid JSX.
- [x] The DOM should never be directly accessed or manipulated unless required by a 3rd-party library.
  - [x] Make a note of any libraries that do this in the README.
- [x] All communication with external data sources should be done asynchronously.
- [x] Project uses at least:
  - [x] 1 component that takes `children` props
  - [x] 2 re-usable components each containing 2 or more html elements/sub-components + uses props
  - [x] 4 conditionally rendered components or elements.
  - [x] 1 controlled component form with at least 1 validated field.
  - [x] 2 `useEffect` calls.
  - [ ] 1 `useCallback`.
- [x] All dependency arrays for hooks are accurate for their use case.
- [ ] `useEffect` calls should return a cleanup function as appropriate.
- [x] Any array of rendered components must include a unique `key` props.
  - [x] Keys must not be derived from the item's index.

## Uses React-Router for Routing

- [x] react-router is installed in the project.
- [x] The `App` component instance in main.jsx is wrapped with a `BrowserRouter` instance.
- [x] Includes at least 2 routes.
- [x] All `Route` instances use components in the `pages/` directory for their element props.
- [x] Include a wildcard route with a "Not Found" page.
- [x] Uses `NavLink` instances for global navigation (can use `Link` instances elsewhere)

## Behavior

### Startup

- [x] Installs without error (other than minor package updates)
- [x] Application starts without errors.
- [x] On loading, application performs a network request or interacts a browser storage mechanism to retrieve data used in app.
  - [x] Loading status is displayed to user in UI.
  - [x] _Reviewers need to be able to access whatever resource is used with minimal setup!_
    - [x] Any publicly accessible APIs used must be open for anonymous use or free to sign up for.
    - [x] If a local server is used:
      - [x] **Warning: mentors will not be able to assist with troubleshooting any server issues** so this option is best for those with adequate experience!
      - [x] it must use Node.js as a runtime (no Deno, Bun, Python, Ruby, PHP etc.)
      - [x] it must run error-free
      - [x] A link to its repo and setup/running instructions are included in the project's README

### Functionality

- [x] All components and any user interactions should be error-free (excluding anything beyond student's control, such as API uptime). Warnings are acceptable.
- [x] The app should never crash.
- [x] StrictMode must remain in place in main.jsx
- [x] Form inputs and labels must be properly associated with each other.
- [x] Any foreseeable network or process errors must be caught and communicated to the user, as appropriate, through the UI.
- [x] App allows user to interact with data central to the purpose of the app.
  - [x] Create
  - [x] Read
  - [x] Update
  - [x] Delete (optional)
- [x] Persists data using an API and/or Local Storage or IndexedDB.

## Appearance/UX

- [x] Styling should only be written using CSS, CSS Modules, or Styled-Components. No component or theming libraries.
  - [x] Exceptions can be made for notification systems - seek CIL approval first.
- [x] Uses consistent theming and layouts across pages and elements.
- [x] Uses a different font for headings and non-heading text.
- [x] Interface text is legible for the typical user.
- [x] Images must include brief, descriptive alt text (this excludes images that serve only as decoration).
- [x] Any sounds used must be mutable from within the app's interface.
- [x] `NavLink` instances should visually differentiate between the currently active route's link and other, inactive route links.
- [x] Imagery and other assets should generally be optimized for the sizes that they are being used. (eg: don't use a 4k resolution, 2MB jpg for a 5cm tall user avatar!)
