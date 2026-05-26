# Portfolio

Personal portfolio website built with React and Vite, showcasing my projects and skills as an Engineering (EIE) student.

Project data is fetched live from the **GitHub REST API** with localStorage caching, so adding or updating a repo on GitHub automatically reflects on the site.

## Live Site

**https://wanggoldx.github.io/portfolio**

## About

Hi, I'm **LAU Wang Chun**, an Engineering (EIE) student passionate about AI and Embedded Systems. I build innovative solutions that bridge the gap between hardware and software.

## Features

- **GitHub API Integration** — project cards sourced from `api.github.com/users/wanggoldx/repos`
- **Smart Caching** — localStorage cache with 1-hour TTL; cache-first render with background refresh
- **Graceful Degradation** — falls back to bundled data on network error or rate-limit
- **Skeleton Loading** — shimmer animation while data loads
- **Dynamic Card UI** — language badges, live demo links, repo social preview images
- **Dark Mode** — light/dark theme via React Context + CSS custom properties

## Skills

- **Languages**: Python, C/C++, Java, Embedded C, JavaScript
- **Frameworks**: React, PyTorch, TensorFlow
- **Hardware**: STM32, AVR (ATmega328P/Arduino Uno)
- **Tools**: Git, Visual Studio, STM32CubeIDE

## Contact

- **Email**: wanggoldx@gmail.com
- **GitHub**: https://github.com/wanggoldx
- **LinkedIn**: https://www.linkedin.com/in/劉峻-劉-8119452ab/

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — bundler and dev server
- **GitHub REST API** — live project data
- **localStorage** — API response caching
- **CSS Custom Properties** — theming (light/dark)
- **ESLint** — code linting

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## License

MIT