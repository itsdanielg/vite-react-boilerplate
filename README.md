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

<h3 align="center">Vite Boilerplate</h3>
  <p align="center">
    Boilerplate for creating a React, TypeScript, and Tailwind CSS project using Vite.
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#optional">Optional</a></li>
      </ul>
    </li>
    <li><a href="#configuration">Configuration</a></li>
  </ol>
</details>

## About

This a boilerplate template to get you started on a Vite project using React, TypeScript, and Tailwind CSS.

### Built With

- [![Vite][Vite]][Vite-url]
- [![React][React]][React-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Tailwind][Tailwind]][Tailwind-url]
- [![ESLint][ESLint]][ESLint-url]

## Getting Started

Follow the steps below to get started on using this boilerplate to kickstart your project!

### Prerequisites

- Make sure [node.js](https://nodejs.org/en) is installed.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/itsdanielg/vite-boilerplate.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

### Optional

If you would like to have all the project dependencies updated, make sure [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) is globally installed.

1. Install [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).

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

This project also comes with [ESLint][ESLint-url] and [Prettier](https://prettier.io/) already installed and preconfigured.

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
    "printWidth": 80,
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

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

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
