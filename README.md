# Hemanth Rasabhathula's Portfolio

This is a personal portfolio website built using modern web technologies. It showcases my skills, projects, and professional experience as a software engineer.

## 🚀 Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast build tool and development server for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **AOS (Animate On Scroll)**: A library for adding scroll-based animations.
- **Lottie**: For rendering animations using JSON files.
- **Lucide Icons**: A collection of customizable icons for React.
- **React Icons**: For additional icon support.
- **Typed.js**: A library for creating typing animations.

### Backend

- **GitHub Pages**: Used for hosting the static site.

### Build Tools

- **Vite**: For bundling and serving the application.
- **ESLint**: For linting and maintaining code quality.
- **TypeScript Compiler**: For type-checking and transpiling TypeScript code.

### CI/CD

- **GitHub Actions**: Automates the deployment process to GitHub Pages.

### Fonts

- **Poppins** and **Raleway**: Custom fonts imported via `@fontsource`.

---

## 📂 Project Structure

```
.gitignore
eslint.config.js
index.html
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
.github/
  workflows/
    deploy.yml
public/
  apple-touch-icon.png
  favicon-96x96.png
  favicon.ico
  favicon.svg
  opengraph-image.png
  site.webmanifest
  web-app-manifest-192x192.png
  web-app-manifest-512x512.png
src/
  App.css
  App.tsx
  declaration.d.ts
  index.css
  main.tsx
  vite-env.d.ts
  assets/
    background-img.jpg
  components/
    Name.tsx
    ProgressBar.tsx
    TypedComponent.tsx
    NavBar.tsx
  lib/
    utils.ts
    ClassNameProps.ts
  pages/
    About.tsx
    Contact.tsx
    HomeContainer.tsx
    Resume.tsx
    Skills.tsx
```

---

## 🛠️ Features

- **Responsive Design**: Fully responsive layout for all devices.
- **Dynamic Animations**: Smooth animations using AOS and Lottie.
- **Typed Text**: Dynamic typing animations using Typed.js.
- **Dark Overlay**: Background overlay for better readability.
- **Scroll-Based Navigation**: Highlights the active section in the navigation bar.
- **Progress Bars**: Animated skill progress bars.
- **Custom Icons**: Icons for navigation and social links using Lucide and React Icons.
- **Google Maps Integration**: Embedded map for the contact section.

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hemanthrasabhathula/hemanthrasabhathula.github.io.git
   cd hemanthrasabhathula.github.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   ```
   http://localhost:5173
   ```

---

## 🛠️ Build and Deployment

### Build

To build the project for production:

```bash
npm run build
```

The output will be in the `dist` folder.

### Deployment

The project is automatically deployed to **GitHub Pages** using **GitHub Actions**. The deployment workflow is defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

---

## 🌟 Highlights

- **Custom Components**: Reusable components like `NavBar`, `ProgressBar`, and `TypedComponent`.
- **Tailwind CSS Utilities**: Simplified styling with utility classes.
- **TypeScript Support**: Ensures type safety and better developer experience.
- **Animations**: Smooth animations for better user experience.
- **SEO Optimized**: Includes Open Graph meta tags for better sharing.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Hemanth Rasabhathula**

- [GitHub](https://github.com/hemanthrasabhathula)
- [LinkedIn](https://www.linkedin.com/in/hemanth-rasabhathula)
- [Twitter](https://twitter.com/_HemanthR)
- [Portfolio](https://www.hemanthrasabhathula.co.in)

Feel free to reach out if you have any questions or feedback!
