<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://vitejs.dev/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" alt="Logo" width="80" height="80">
  </a>
  <a href="https://reactjs.org/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Logo" width="80" height="80">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Logo" width="80" height="80">
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Logo" width="80" height="80">
  </a>
  <br />
  <br />
  <h1 align="center">Vite React Boilerplate</h1>
</div>

[![Vite][Vite]][Vite-url] [![React][React]][React-url] [![TypeScript][TypeScript]][TypeScript-url] [![Tailwind][Tailwind]][Tailwind-url] [![ESLint][ESLint]][ESLint-url]

This is a boilerplate template intended to get you started on a React project built under Vite. Includes TypeScript, Tailwind CSS, ESLint, Vitest, and React Testing Library support.

## Getting Started

### Prerequisites

- Make sure [node.js](https://nodejs.org/en) is installed.

### Installation

1. [Fork](https://github.com/itsdanielg/vite-react-boilerplate/fork) or clone this repository to get started.

   ```sh
   git clone https://github.com/itsdanielg/vite-boilerplate.git
   ```

2. Navigate to the project's directory and install all dependencies.

   ```sh
   cd vite-boilerplate
   npm install
   ```

### Optional

If you would like to re-initialize git:

1. Navigate to the project's directory and delete `.git`.

   ```sh
   rm -rf .git
   ```

2. Re-initialize `.git`.

   ```sh
   git init
   ```

3. Commit all changes.

   ```sh
   git add .
   git commit -m "Init"
   ```

If you would like to have all project dependencies updated, make sure [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) is globally installed.

1. Install [npm-check-updates](https://www.npmjs.com/package/npm-check-updates). (Skip to step 2 if it has already been installed)

   ```sh
   npm i -g npm-check-updates
   ```

2. Go the the project's directory and update all the dependencies.

   ```sh
   ncu -u
   ```

3. Re-install all packages.

   ```sh
   npm install
   ```

## Configuration

This project also comes with [ESLint][ESLint-url] and [Prettier](https://prettier.io/) installed and preconfigured.

- ESLint configurations can be found and edited within the `.eslintrc.cjs` file. The following rules below have also been added.

  ```cjs
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn"
  }
  ```

- Prettier configurations can be found and edited within the `.prettierrc` file.

  ```json
  {
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "endOfLine": "lf",
    "htmlWhitespaceSensitivity": "css",
    "insertPragma": false,
    "jsxSingleQuote": false,
    "printWidth": 120,
    "proseWrap": "preserve",
    "quoteProps": "as-needed",
    "requirePragma": false,
    "semi": true,
    "singleAttributePerLine": true,
    "singleQuote": false,
    "tabWidth": 2,
    "trailingComma": "none",
    "useTabs": false
  }
  ```

[ESLint]: https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org/
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
