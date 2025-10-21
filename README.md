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

## 🌐 Dynamic Content Management

This portfolio implements a dynamic content management system using **GitHub Gists** for real-time content updates without requiring code redeployment.

### 📋 Content Configuration

The portfolio content is managed through a centralized JSON configuration stored in a GitHub Gist:

- **Gist URL**: [https://gist.github.com/hemanthrasabhathula](https://gist.github.com/hemanthrasabhathula)
- **Configuration File**: `portfolio-config.json`

### 🔄 How It Works

1. **Centralized Configuration**: All portfolio sections (About, Experience, Education, Projects, Skills, Contact) are defined in a single JSON file.
2. **Real-time Updates**: Content changes in the gist are automatically reflected in the portfolio within 1-3 minutes.
3. **Section Control**: Each section can be individually enabled/disabled through the configuration.
4. **Type Safety**: Full TypeScript support for all content structures.

### 📁 Content Structure

```json
{
  "sections": {
    "home": {
      "enabled": true,
      "data": {
        "name": "Hemanth Rasabhathula",
        "role": "Full-Stack Developer",
        "tagline": "Building amazing web experiences"
      }
    },
    "about": {
      "enabled": true,
      "data": {
        "description": "...",
        "personalInfo": [...]
      }
    },
    "experience": {
      "enabled": true,
      "data": [
        {
          "title": "Software Developer",
          "companyName": "Company",
          "duration": "",
          "responsibilities": [...]
        }
      ]
    },
    "education": {
      "enabled": true,
      "data": {
        "degree": "",
        "university":"",
        "duration": ""
      }
    },
    "projects": {
      "enabled": true,
      "data": [...]
    },
    "skills": {
      "enabled": true,
      "data": {
        "frontend": [...],
        "backend": [...],
        "tools": [...]
      }
    },
    "contact": {
      "enabled": true,
      "data": {
        "email": "...",
        "social": {...}
      }
    }
  },
  "metadata": {
    "lastUpdated": "2025-01-01",
    "version": "1.0.0"
  }
}
```

### 🛠️ Technical Implementation

- **State Management**: Redux Toolkit with async thunks for API calls
- **API Integration**: GitHub API for fetching gist content
- **Error Handling**: Comprehensive error handling with fallback content
- **Loading States**: Smooth loading indicators during content fetch
- **Caching**: Smart caching to minimize API calls while ensuring fresh content

### 📈 Benefits

- ✅ **No Code Deployment**: Update portfolio content without touching code
- ✅ **Version Control**: Track content changes through gist history
- ✅ **Real-time Updates**: Changes reflect quickly without site rebuild
- ✅ **Section Management**: Enable/disable sections dynamically
- ✅ **Type Safety**: Full TypeScript support for content validation
- ✅ **Offline Support**: Fallback content when API is unavailable

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
