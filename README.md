# Iconents - SVG to JSX Converter

- A versatile SVG to JSX converter with customizable templates, allowing seamless conversion with attribute modification support.
- Added SVG optimization for improved svg code, reducing file size and enhancing rendering speed in generated JSX components.
- Integrated automated fetching from Figma boards, simplifying SVG icon retrieval and JSX conversion, along with automatic index file generation.

## Getting Started

Some commands to help you:

1. Install the dependencies

   ```bash
   yarn install
   ```

2. Add your env vars in .env for example .env.example

   ```bash
   FIGMA_API_TOKEN
   FIGMA_FILE_ID
   FIGMA_CANVAS
   ```

3. There are two ways you can generate icons

   Method 1: Fetch icons directly from Figma and generate Icons NOTE: This method also includes manually added svgs in "svgs" folder so you get icon files for both Figma + Local Svgs

   Method 2: Only generate icons for Local Svgs. So just dump all your svgs in "svgs" folder and generate icons for the local svgs only.

4. For Method 1:

   Run:

   ```bash
   yarn run icons
   ```

5. For Method 2:

   Run:

   ```bash
   yarn run icons-local
   ```

## Important Step

Copy these files/folders to our next-app in `./public/icons/`

```bash
./src/icons/components/
./src/icons/index.tsx
./src/icons/types.ts
```

## Reference:

https://blog.certa.dev/generating-react-icon-components-from-figma
