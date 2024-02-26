## 📌 Overview

Admin-Dashboard project utilizes essential dependencies like React, Emotion, FullCalendar, Material-UI, Nivo, Formik, Yup, React Router, Vite, and ESLint for efficient development of a feature-rich admin dashboard interface.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Deploy](#deploy)

## 📁 Project Structure

```bash
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── dist
│   ├── assets
│   │   ├── catian.jpg
│   │   ├── index-0635e99a.css
│   │   ├── index-d7a1b74d.js
│   │   └── react.svg
│   └── index.html
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── assets
│       ├── catian.jpg
│       └── react.svg
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── BarChart.jsx
│   │   ├── GeographyChart.jsx
│   │   ├── Header.jsx
│   │   ├── LineChart.jsx
│   │   ├── PieChart.jsx
│   │   ├── ProgressCircle.jsx
│   │   └── StatBox.jsx
│   ├── data
│   │   ├── mockData.js
│   │   └── mockGeoFeatures.js
│   ├── index.css
│   ├── main.jsx
│   ├── scenes
│   │   ├── bar
│   │   │   └── index.jsx
│   │   ├── calendar
│   │   │   └── index.jsx
│   │   ├── contacts
│   │   │   └── index.jsx
│   │   ├── dashboard
│   │   │   └── index.jsx
│   │   ├── faq
│   │   │   └── index.jsx
│   │   ├── form
│   │   │   └── index.jsx
│   │   ├── geography
│   │   │   └── index.jsx
│   │   ├── global
│   │   │   ├── Sidebar.jsx
│   │   │   └── Topbar.jsx
│   │   ├── invoices
│   │   │   └── index.jsx
│   │   ├── line
│   │   │   └── index.jsx
│   │   ├── pie
│   │   │   └── index.jsx
│   │   └── team
│   │       └── index.jsx
│   └── theme.js
└── vite.config.js
```

## 📝 Project Summary

- [**src**](src): Main source code directory containing components, scenes, and data.
- [**src/components**](src/components): Reusable UI components for the project.
- [**src/scenes/dashboard**](src/scenes/dashboard): Dashboard scene for displaying key project metrics.
- [**src/scenes/form**](src/scenes/form): Form scene for capturing user input.
- [**src/scenes/global**](src/scenes/global): Global scene for displaying project-wide information.
- [**src/scenes/invoices**](src/scenes/invoices): Invoices scene for managing billing information.
- [**src/scenes/team**](src/scenes/team): Team scene for managing team members and roles.
- [**dist**](dist): Distribution directory for built project files.
- [**public**](public): Public directory for static assets used in the project.
- [**public/assets**](public/assets): Assets directory for storing static files like images and fonts.

## 💻 Stack

- [react](https://reactjs.org/): Fundamental library for building UI components.
- [formik](https://formik.org/): Form library for handling form state and validation.
- [mui/material](https://mui.com/): Component library for styling UI elements.
- [nivo/core](https://nivo.rocks/): Data visualization library for creating charts.
- [fullcalendar/react](https://fullcalendar.io/): Calendar component for managing events.
- [vite](https://vitejs.dev/): Build tool for fast development and server-client communication.
- [yup](https://github.com/jquense/yup): Library for schema validation and error messages.

## 🚀 Run Locally
1.Clone the Admin-Dashborad repository:
```sh
git clone https://github.com/islamkamalx1/Admin-Dashborad
```
2.Install the dependencies with one of the package managers listed below:
```bash
pnpm install
bun install
npm install
yarn install
```
3.Start the development mode:
```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

## 🙌 Contributors
<a href="https://github.com/islamkamalx1/Admin-Dashborad/graphs/contributors">
<img src="https://contrib.rocks/image?repo=islamkamalx1/Admin-Dashborad" />
</a>

## ☁️ Deploy

[Preview](admin-dashborad.vercel.app)
