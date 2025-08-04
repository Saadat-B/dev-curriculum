# The Ultimate Full-Stack Developer Roadmap 🚀

Welcome to your personal full-stack development curriculum! This roadmap is designed to take you from React fundamentals to deploying scalable, production-ready applications and infrastructure.

### How to use this:
* Fork this repository or use this README as a template.
* As you complete each exercise, check the box (`- [x]`).
* Click the links to dive deeper into the official documentation for each technology.

Let's start building! 💻

---

## ⚛️ Module 1: React Fundamentals

### Project: Basic To-Do List
**Objective:** Master the core concepts of React to build dynamic, component-based user interfaces.

#### Core Exercises
- [x] **Setup**: Create a new React project using **Vite**.
> **Goal**: Understand the modern frontend tooling ecosystem. Vite provides a faster development experience than older tools like Create React App.

- [x] **Static UI**: Create an `App` component that renders a title and a hard-coded list of tasks.
> **Goal**: Learn the basics of **JSX** syntax and how React renders elements to the DOM.

- [ ] **Components**: Create a separate `TaskItem` component and render a list by mapping over a hard-coded array.
> **Goal**: Understand the power of component reusability and how to pass data from a parent to a child using **props**.

- [ ] **State**: Use the `useState` hook to manage the array of tasks.
> **Goal**: Make your application dynamic. Learn how **state** allows a component to remember information and re-render when that information changes.

- [ ] **Adding Tasks**: Create a form with a controlled input to add new tasks.
> **Goal**: Handle user input. Learn how to manage form state and update your application's state based on user events (`onSubmit`).

- [ ] **Deleting Tasks**: Pass a function as a prop from `App` down to `TaskItem` to handle deletion.
> **Goal**: Learn how child components can communicate with parent components and the principle of **immutable state updates** (creating a new array instead of modifying the old one).

- [ ] **Updating Tasks**: Pass a function to toggle a task's completion status.
> **Goal**: Practice more complex immutable state updates by finding and updating a specific item within an array.

- [ ] **Conditional Styling**: Apply different styles (e.g., `text-decoration: line-through`) to completed tasks.
> **Goal**: Learn to render your UI differently based on the component's state, a fundamental concept for dynamic interfaces.

#### Extensions (Optional)
- [ ] **Edit in Place**: Add an "Edit" button that, when clicked, turns the task text into an input field to allow modification.
> **Why**: This teaches you how to manage component-level state (e.g., an `isEditing` boolean) and handle more complex UI flows.

- [ ] **Filtering**: Add buttons ("All," "Active," "Completed") to filter the visible tasks.
> **Why**: Learn about "derived state"—calculating what to display based on your source-of-truth state and some UI state (the current filter).

- [ ] **Animations**: Use a library like **Framer Motion** to add simple animations when tasks are added or removed.
> **Why**: Learn to enhance user experience with polished UI animations, a common requirement in modern web apps.

- [ ] **Accessibility**: Improve accessibility by adding ARIA attributes and ensuring the app is fully navigable and usable with only a keyboard.
> **Why**: Professional developers build for everyone. This is a critical and often-tested skill.

- [ ] **Error Boundaries**: Wrap your component tree in an **Error Boundary** to catch rendering errors in a component and display a fallback UI.
> **Why**: Learn how to make your application more resilient and prevent a single component error from crashing the entire app.

- [ ] **Portals for Modals**: Create a reusable `Modal` component using **React Portals** to handle confirmation dialogs (e.g., "Are you sure you want to delete?").
> **Why**: Understand how to properly handle UI elements like modals, tooltips, or popups that need to break out of their parent's CSS stacking context.

---

## 🛠️ Module 2: Advanced Frontend

### Project: "Pro-Tasker" & "Weather Widget"
**Objective**: Learn to manage complex application state, handle professional-grade forms, and interact with external APIs.

#### Core Exercises
- [ ] **Consume a Public REST API**: Build a simple weather app or movie finder that fetches data from a free public API (e.g., OpenWeatherMap, The Movie DB).
> **Goal**: Learn how to fetch data using `async/await`, handle asynchronous states (loading, success, error), and manage API keys securely using environment variables. This is a fundamental skill for any frontend developer.

- [ ] **Persistence**: Use `useEffect` to save tasks to `localStorage` on change and retrieve them on initial load.
> **Goal**: Understand the component lifecycle and how to perform side effects (like interacting with browser APIs) in a controlled way.

- [ ] **Refactor with `useReducer`**: Replace complex `useState` logic with a `useReducer` hook.
> **Goal**: Learn a more powerful and scalable way to manage state when you have multiple, related state transitions. This is a stepping stone to understanding Redux.

- [ ] **Global State**: Use `useContext` to provide your state and dispatch function globally, avoiding "prop drilling."
> **Goal**: Learn React's built-in solution for state management, allowing you to share state between components without passing props through every level of the tree.

- [ ] **Professional Forms**: Integrate **React Hook Form** to manage the "add task" input, including validation.
> **Goal**: Move beyond simple forms. Learn how to handle complex validation, submission states (loading, error), and performance optimization with a dedicated library.

- [ ] **Modern Styling**: Integrate **Tailwind CSS** and style the application.
> **Goal**: Learn the utility-first CSS paradigm, a highly popular and efficient way to build modern, responsive user interfaces without writing custom CSS.

#### Extensions (Optional)
- [ ] **Theming**: Use `Context` to add a dark mode/light mode toggle that persists across page loads.
> **Why**: A practical and common feature that solidifies your understanding of global state management with Context.

- [ ] **Drag and Drop**: Implement drag-and-drop reordering of tasks using a library like **dnd kit**.
> **Why**: Learn to build rich, interactive user experiences that go beyond simple clicks and forms.

- [ ] **Custom Hooks**: Extract reusable logic (e.g., your API fetching logic into a `useFetch` hook) to create clean, reusable, and testable code.
> **Why**: This is a fundamental pattern in modern React for creating clean, reusable, and testable code.

- [ ] **Testing**: Write unit tests for your reducer functions and custom hooks using **Jest** and **React Testing Library**.
> **Why**: Learn how to write tests that ensure your application logic is correct and prevent regressions. This is a critical skill for professional development.

- [ ] **Code Splitting**: Use `React.lazy` and `Suspense` to code-split a less critical part of your application (like a "Profile" page).
> **Why**: Learn a key performance optimization technique that reduces the initial bundle size of your app, leading to faster load times.

---

## ⚙️ Module 3: Backend with Express & PostgreSQL

### Project: "Blogify" Backend API
**Objective**: Build a robust, secure, and well-documented REST API, the backbone of any full-stack application.

#### Core Exercises
- [ ] **Express Server**: Set up an **Express** server with a basic `GET` endpoint and `express.json()` middleware.
> **Goal**: Understand the fundamentals of creating a web server with Node.js and handling HTTP requests.

- [ ] **CRUD Operations**: Create full `GET`, `POST`, `PUT`, `DELETE` endpoints for an in-memory array of posts.
> **Goal**: Master the core principles of RESTful API design before introducing the complexity of a database.

- [ ] **Database Setup**: Integrate **Prisma** with **PostgreSQL**. Define your `Post` model in the Prisma schema and run your first migration.
> **Goal**: Learn how to model your application's data and interact with a relational database using a modern ORM (Object-Relational Mapper).

- [ ] **Database Connection**: Refactor all endpoints to use the **Prisma client** to perform real database operations.
> **Goal**: Connect your API logic to a persistent data store, completing the core functionality of a backend service.

- [ ] **User Authentication**: Add a `User` model. Create `/register` and `/login` endpoints using **bcrypt** for password hashing and **JWT** for session management.
> **Goal**: Learn the complete, standard flow for securing a web application: hashing passwords at rest and creating stateless sessions with tokens.

- [ ] **Protected Routes**: Create an Express middleware to verify the JWT from the `Authorization` header and protect your CRUD routes.
> **Goal**: Understand the middleware pattern and how to secure specific parts of your API so they are only accessible to authenticated users.

#### Extensions (Optional)
- [ ] **Security Hardening**: Use **Helmet** to set important security headers, **express-rate-limit** to prevent brute-force attacks, and configure **CORS** properly.
> **Why**: These are non-negotiable, standard practices for any production backend to protect against common web vulnerabilities.

- [ ] **Environment Management**: Use `dotenv` to manage environment variables for database URLs and JWT secrets.
> **Why**: Learn the professional way to handle configuration and secrets without hard-coding them into your application.

- [ ] **API Testing**: Write unit and integration tests for your API endpoints using **Jest** and **Supertest**.
> **Why**: Ensure your API is reliable and works as expected. This is crucial for maintaining a stable backend.

- [ ] **API Documentation**: Generate interactive API documentation with **Swagger UI Express** and create a shareable **Postman Collection**.
> **Why**: Professional APIs are well-documented. This makes them easier for frontend developers (including you!) and other consumers to use.

- [ ] **File Uploads**: Add functionality for users to upload a blog post cover image using **Multer**.
> **Why**: A common real-world requirement that teaches you how to handle `multipart/form-data` requests.

---

## 🔗 Module 4: Full-Stack Integration

### Project: "Blogify" (Frontend + Backend)
**Objective**: Connect your frontend and backend, managing server state and handling advanced authentication flows.

#### Core Exercises
- [ ] **Setup**: Create a new React application for the blog frontend.
> **Goal**: Begin the process of building a client for your custom API.

- [ ] **Redux Toolkit**: Set up **Redux Toolkit** with a `postsSlice` for blog data and an `authSlice` for user/token state.
> **Goal**: Learn the industry-standard library for predictable, centralized state management in large React applications.

- [ ] **Fetch Data**: Use `createAsyncThunk` to fetch posts from your backend and handle loading/error states.
> **Goal**: Understand the pattern for handling asynchronous operations like API calls within Redux.

- [ ] **Login/Register**: Create forms that dispatch thunks to your auth endpoints. On successful login, store the JWT and update the auth state.
> **Goal**: Implement the full user authentication flow from the client-side.

- [ ] **Authenticated Requests**: Create an API utility (e.g., an **Axios** instance) that automatically attaches the JWT from the Redux store to the headers of outgoing requests.
> **Goal**: Learn a clean, scalable pattern for making authenticated API calls from your frontend.

#### Extensions (Optional)
- [ ] **React Query Path**: Refactor the project to use **TanStack Query (React Query)** for all server state (fetching, creating posts). Keep Redux only for purely global client state (auth status, UI toggles).
> **Why**: Experience the modern, hook-based approach to server state management, which greatly simplifies caching, refetching, and loading/error handling compared to Redux.

- [ ] **Refresh Tokens**: Implement a full JWT refresh token flow to keep users logged in securely for longer periods without compromising security.
> **Why**: This is the professional standard for authentication, providing a much better user experience than short-lived sessions.

- [ ] **Role-Based Authorization (RBAC)**: Add roles to your User model (e.g., 'user', 'admin'). On the frontend, conditionally render UI elements (like a "Delete Post" button) based on the user's role.
> **Why**: Learn to build applications that have different permission levels for different types of users.

- [ ] **Central API Error Handling**: Create a single, centralized error handling middleware in your Express app to format all error responses consistently. On the frontend, display user-friendly toast notifications for these errors.
> **Why**: A robust error handling strategy is crucial for debugging and providing a good user experience.

- [ ] **Infinite Scrolling**: Implement an "infinite scroll" feature on the blog feed using the `IntersectionObserver` API.
> **Why**: A modern alternative to pagination that provides a smoother user experience for Browse large amounts of data.

---

## 🚀 Module 5: Production with Next.js

### Project: "Blogify" V2
**Objective**: Rebuild the frontend with **Next.js** to leverage server-side rendering, static generation, and other production-grade features for performance, SEO, and security.

#### Core Exercises
- [ ] **Migration to Next.js**: Rebuild the blog UI using **Next.js** and its file-based routing system.
> **Goal**: Learn the foundational framework for building production-ready React applications.

- [ ] **Static Site Generation (SSG)**: Use `getStaticProps` to pre-render the list of blog posts at build time.
> **Goal**: Understand how to build incredibly fast websites by generating HTML in advance. Perfect for SEO and performance.

- [ ] **Server-Side Rendering (SSR)**: Use `getServerSideProps` for user-specific pages like a dashboard, where data must be fresh on every request.
> **Goal**: Learn the alternative rendering method for dynamic content that still provides SEO benefits.

- [ ] **Real-time with WebSockets**: Integrate **Socket.IO** for a real-time feature, like live comments appearing without a page refresh.
> **Goal**: Learn to build engaging, real-time applications that go beyond the request-response cycle.

- [ ] **Deployment**: Deploy the Next.js frontend to **Vercel** and the Express backend to **Render**, configuring all environment variables.
> **Goal**: Complete the full development lifecycle by learning how to take your application live.

#### Extensions (Optional)
- [ ] **App Router Paradigm**: Rebuild the project using the new **App Router** to leverage **React Server Components**.
> **Why**: This is the future of Next.js. Understanding this new architecture is critical for modern Next.js development.

- [ ] **Middleware for Auth**: Protect pages/routes using **Next.js Middleware** to run code and verify authentication before a request is completed.
> **Why**: A powerful, server-side way to handle redirects, authentication, and more at the edge, improving performance and security.

- [ ] **SEO Fundamentals**: Add dynamic meta tags, OpenGraph tags for social sharing, and a `sitemap.xml`.
> **Why**: Learn the technical SEO basics that make your application discoverable and shareable, a key advantage of using Next.js.

- [ ] **Advanced Authentication**: Replace the manual JWT implementation with **NextAuth.js** to easily add social login providers (e.g., Google, GitHub).
> **Why**: Learn how to leverage a dedicated library to simplify complex authentication flows and add features that are difficult to build manually.

- [ ] **Image Optimization**: Use Next.js's built-in `<Image>` component to automatically serve optimized, responsive images.
> **Why**: A critical performance optimization that is simple to implement in Next.js and has a huge impact on user experience.

---

## ☁️ Module 6: Application DevOps & Scalability

### Project: "Blogify" - Production Hardening
**Objective**: Learn the DevOps practices required to ensure your application is scalable, maintainable, and ready for high-traffic production environments.

#### Core Exercises
- [ ] **Containerization with Docker**: Create a `Dockerfile` for your backend, and a `docker-compose.yml` file to orchestrate your entire local development stack (app, database, Redis) with a single `docker-compose up` command using **Docker**.
> **Goal**: Ensure your application runs consistently across any environment and simplify local development setup.

- [ ] **CI/CD Pipeline**: Set up a **GitHub Actions** workflow that automatically runs your tests and linter on every code push.
> **Goal**: Learn the fundamentals of Continuous Integration/Continuous Deployment, automating your testing and quality checks.

- [ ] **Advanced Caching**: Integrate **Redis** into your backend to cache the results of frequent database queries.
> **Goal**: Understand a key scalability pattern for reducing database load and dramatically speeding up API response times.

- [ ] **End-to-End (E2E) Testing**: Use **Cypress** or **Playwright** to write tests that simulate real user flows from start to finish.
> **Goal**: Learn how to test your application from the user's perspective, ensuring that critical workflows (like login and creating a post) are never broken.

- [ ] **Monitoring & Logging**: Use **Winston** for structured, file-based logging and integrate **Sentry** for real-time error monitoring.
> **Goal**: Learn how to effectively debug issues in a production environment. You can't fix what you can't see.

#### Extensions (Optional)
- [ ] **Load Testing**: Use **k6** or **Artillery** to simulate heavy traffic and benchmark your API endpoints to find performance bottlenecks.
> **Why**: Understand how your application behaves under pressure and how to prepare it for a successful launch.

- [ ] **Scalable Rate Limiting**: Implement a more robust rate-limiting strategy using **Redis** to share a request counter across multiple server instances.
> **Why**: The professional way to implement rate limiting in a distributed, scalable system.

- [ ] **Secrets Management**: Integrate a secure secrets management strategy using **GitHub Secrets** for your CI/CD pipeline.
> **Why**: Learn the secure, standard practice for handling API keys and database credentials in an automated environment.

- [ ] **Automated Database Backups**: Set up a cron job or use a platform integration (like on Render) to automatically take and store backups of your PostgreSQL database.
> **Why**: A critical disaster recovery practice that every production application must have.

- [ ] **Message Queues**: Use **RabbitMQ** to offload long-running tasks (like sending a welcome email or processing a video) to a separate, asynchronous worker service.
> **Why**: Learn an advanced architectural pattern for building more resilient, responsive, and scalable applications.

---

## 🏗️ Module 7: Infrastructure & Cloud-Native DevOps

### Project: "Blogify" - Infrastructure as Code
**Objective**: Learn to define, provision, and manage cloud infrastructure using modern, code-driven DevOps practices.

#### Core Exercises
- [ ] **Define Infrastructure with Code (IaC)**: Go beyond manual setups. Use **Terraform** to write configuration files that define and provision your application's cloud infrastructure (e.g., a virtual server on DigitalOcean or an EC2 instance on AWS, a managed PostgreSQL database, and networking rules).
> **Goal**: Master the standard for creating repeatable, version-controlled, and automated cloud environments, eliminating manual configuration errors.

- [ ] **Explore Container Orchestration**: Learn the 'why' behind **Kubernetes**. Understand how it solves the problem of deploying, scaling, and managing your containerized applications in production.
> **Goal**: Understand the industry-standard for container orchestration. As a practical step, deploy your application's Docker containers to a managed Kubernetes service like **Amazon EKS**, **Google GKE**, or **DigitalOcean Kubernetes**.

#### Extensions (Optional)
- [ ] **Build with Serverless Functions**: Refactor a piece of your API (e.g., a webhook receiver) to run on a serverless platform like **Cloudflare Workers** or **AWS Lambda**.
> **Why**: Learn to build highly scalable, cost-effective backend logic that runs without managing a traditional server.

- [ ] **Manage Code with a Monorepo**: Structure your full-stack application as a monorepo using a tool like **Turborepo**.
> **Why**: This is the standard practice for managing large codebases with multiple applications (e.g., web, mobile, docs) that share common code, improving dependency management and build times.

---

## 💡 Module 8: Project Archetypes & Capstones

**Objective**: Apply your full-stack skills to build complete, real-world applications that represent common industry archetypes. This module focuses on architecture, feature integration, and creating a portfolio-worthy project.

### Projects
- [ ] **The E-commerce Platform (e.g., "GadgetGrove")**: Build a functional online store.
> **Core Problem**: Selling physical or digital goods online.
> **Key Features**: Product catalog with search & filtering, shopping cart, user accounts with order history, and payment gateway integration using **Stripe**.
> **Skills Tested**: Data modeling (products, users, orders), complex client-side state management (cart), third-party API integration, and security for handling payments.

- [ ] **The SaaS Application (e.g., "ProjectFlow")**: Build a project management tool like a simplified Trello or Asana.
> **Core Problem**: Providing a software service to users, often with subscriptions.
> **Key Features**: User authentication, organizations/teams, creating projects & tasks, drag-and-drop boards for status updates, and user dashboards.
> **Skills Tested**: Advanced Role-Based Access Control (owner, admin, member), complex real-time state synchronization with WebSockets, and secure API design for multi-tenant data.

- [ ] **The Social Media Platform (e.g., "ConnectSphere")**: Build a simplified version of a platform like Twitter or a photo-sharing app.
> **Core Problem**: Connecting users and facilitating user-generated content.
> **Key Features**: User profiles with followers/following, creating posts (text and/or images), a chronological or algorithmic "feed" of content, and user interactions like likes and comments.
> **Skills Tested**: Complex database relationships (many-to-many joins for follows/likes), performance optimization for feed generation (pagination/infinite scroll), and real-time notifications.

- [ ] **The Two-Sided Marketplace (e.g., "SkillSwap")**: Build a platform that connects two distinct groups of users, such as students and tutors, or homeowners and service providers.
> **Core Problem**: Facilitating transactions or interactions between two different user types.
> **Key Features**: Separate registration and profile flows for each user type, powerful search and discovery to match the two sides, a messaging or booking system, and a reviews/ratings system.
> **Skills Tested**: Advanced data modeling and authorization logic, building messaging systems with WebSockets, and designing reputation systems.
