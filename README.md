# Rahul Assignment

This project is a modern web application that demonstrates role-based login and user management. It leverages multiple technologies to provide a scalable, performant, and user-friendly experience. The project is built with React and Vite, utilizing a variety of popular libraries and tools for efficient state management and UI design.

## Features

- **Role-based login**: Authentication system that grants access based on user roles.
- **User management**: Ability to manage user details including roles, contact info, and other personal information.
- **Responsive UI**: Built with Ant Design for consistent UI and Tailwind CSS for custom styling.
- **Data Fetching and Caching**: Using React Query for efficient data fetching and caching.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast, next-generation build tool for modern web development.
- **TailwindCSS**: Utility-first CSS framework for building custom designs.
- **Ant Design**: UI component library for building rich user interfaces.
- **React Redux**: State management for the app using Redux Toolkit.
- **React Query**: Data fetching and synchronization library for React.
- **ApexCharts**: Data visualization library for interactive charts and graphs.
- **React Router DOM**: Declarative routing for React applications.

## Definitions

### User

A **user** is an individual who can log in to the application. Each user has a set of attributes including `username`, `email`, `phone`, `full name`, `role`, and `avatar`. The users are authenticated based on their credentials and assigned specific roles that define their level of access in the application.

### User Details

The **user details** section contains the personal information of the user including:

- **Full Name**: The complete name of the user.
- **Phone**: The user's contact number.
- **Username**: The unique username of the user.
- **Role**: The role assigned to the user, which determines access levels (e.g., Admin, User).
- **Email**: The email address associated with the user.

### Role-based Login

The application uses **role-based login** to control access to various parts of the system. Depending on the user's role (Admin, User, etc.), certain actions or pages are restricted. This ensures that only authorized users have access to sensitive features like user management or settings.

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 18.x or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/pcrahul702/fronted-assignment.git

   cd fronted-assignment
   ```

### run-application-command

1.npm install
2.VITE_API_URL=https://api.example.com( backend api url)
3.npm run dev(To start the development server, run)

To build the application for production, use the following command:
4.npm run build

Dependencies
Here are the key dependencies used in the project:

@headlessui/react: Unstyled, fully accessible UI components for React.
@reduxjs/toolkit: A set of Redux utilities that make state management easier.
@tanstack/react-query: A library for data fetching and caching in React.
antd: A React UI framework offering a set of high-quality components.
apexcharts: Charting library to visualize data using interactive charts.
axios: Promise-based HTTP client for making API requests.
dotenv: Loads environment variables from a .env file.
immutability-helper: Utility for immutable state updates.
moment: A JavaScript library for parsing, validating, and manipulating dates.
react-redux: Official bindings for Redux and React.
react-router-dom: Declarative routing for React applications.
tailwindcss: A utility-first CSS framework for building custom designs.

Dev Dependencies
eslint: A static code analysis tool for identifying problematic patterns in JavaScript code.
vite: A fast build tool for modern web development.
@vitejs/plugin-react-swc: A Vite plugin to enable SWC-powered React fast refresh.
@types/react and @types/react-dom: TypeScript definitions for React.
eslint-plugin-react: ESLint plugin for React code style enforcement.
eslint-plugin-react-hooks: ESLint plugin to enforce best practices for React hooks.
