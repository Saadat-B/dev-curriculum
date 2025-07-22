# The Ultimate Full-Stack Developer Roadmap 🚀

Welcome to your personal full-stack development curriculum! This roadmap is designed to take you from React fundamentals to deploying scalable, production-ready applications.

**How to use this:**
1.  Fork this repository or use this README as a template.
2.  As you complete each exercise, check the box (`- [x]`).
3.  Click the links to dive deeper into the official documentation for each technology.

Let's start building! 💻

---

## ⚛️ Module 1: React Fundamentals
**Project:** Basic To-Do List
**Objective:** Master the core concepts of React.

### Core Exercises
- [ ] **Setup:** Create a new React project using [Vite](https://vitejs.dev/guide/).
- [ ] **Static UI:** Create an `App` component that renders a title and a hard-coded list of tasks.
- [ ] **Components:** Create a separate `TaskItem` component and render a list by mapping over an array.
- [ ] **State:** Use the [`useState` hook](https://react.dev/reference/react/useState) to manage the array of tasks.
- [ ] **Adding Tasks:** Create a form to add new tasks.
- [ ] **Deleting Tasks:** Pass a function as a prop to delete tasks.
- [ ] **Updating Tasks:** Pass a function to toggle a task's completion status.
- [ ] **Conditional Styling:** Apply different styles to completed tasks.

### Extensions (Optional)
- [ ] **Edit in Place:** Add an "Edit" button that allows the user to modify the text of an existing task.
- [ ] **Filtering:** Add buttons to filter the list by "All," "Active," and "Completed" tasks.
- [ ] **Animations:** Use a library like [Framer Motion](https://www.framer.com/motion/) to add simple animations when tasks are added or removed.
- [ ] **Accessibility:** Improve accessibility by adding [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) and ensuring the app is fully navigable using only the keyboard.
- [ ] **Error Boundaries:** Wrap your component tree in an [Error Boundary](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) to catch rendering errors and display a fallback UI.
- [ ] **Portals for Modals:** Create a reusable `Modal` component using [React Portals](https://react.dev/reference/react-dom/createPortal) to handle confirmation dialogs.

---

## 🛠️ Module 2: Advanced Frontend
**Project:** "Pro-Tasker" (Evolving the To-Do List)
**Objective:** Learn to manage complex state, handle forms, and persist data on the client.

### Core Exercises
- [ ] **Persistence:** Use `useEffect` to save and retrieve tasks from [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
- [ ] **Refactor with `useReducer`:** Replace `useState` logic with a [`useReducer` hook](https://react.dev/reference/react/useReducer).
- [ ] **Global State:** Use [`useContext`](https://react.dev/reference/react/useContext) to provide state and avoid prop drilling.
- [ ] **Professional Forms:** Integrate [React Hook Form](https://react-hook-form.com/) for the "add task" input, including validation.
- [ ] **Modern Styling:** Integrate [Tailwind CSS](https://tailwindcss.com/) and style the application.

### Extensions (Optional)
- [ ] **Theming:** Use Context to add a dark mode/light mode toggle.
- [ ] **Drag and Drop:** Implement drag-and-drop reordering of tasks using a library like [dnd kit](https://dndkit.com/).
- [ ] **Custom Hooks:** Extract logic into reusable custom hooks.
- [ ] **Testing:** Write unit tests for your reducer functions and custom hooks using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- [ ] **Code Splitting:** Use [`React.lazy` and `Suspense`](https://react.dev/reference/react/lazy) to code-split a less critical part of your application.

---

## ⚙️ Module 3: Backend with Express & PostgreSQL
**Project:** "Blogify" Backend API
**Objective:** Build a robust, secure, and well-documented REST API.

### Core Exercises
- [ ] **Express Server:** Set up an [Express](https://expressjs.com/) server with a basic `GET` endpoint.
- [ ] **CRUD Operations:** Create full CRUD endpoints for an in-memory array.
- [ ] **Database Setup:** Integrate [Prisma](https://www.prisma.io/) with [PostgreSQL](https://www.postgresql.org/) and define a `Post` model.
- [ ] **Database Connection:** Refactor all endpoints to use the Prisma client.
- [ ] **User Authentication:** Add a `User` model and `/register`, `/login` endpoints using [bcrypt](https://www.npmjs.com/package/bcrypt) and [JWT](https://jwt.io/).
- [ ] **Protected Routes:** Create middleware to verify JWTs and protect routes.

### Extensions (Optional)
- [ ] **Security Hardening:** Use [Helmet](https://helmetjs.github.io/), [express-rate-limit](https://www.npmjs.com/package/express-rate-limit), and configure [CORS](https://expressjs.com/en/resources/middleware/cors.html) properly.
- [ ] **Environment Management:** Use [dotenv](https://www.npmjs.com/package/dotenv) to manage environment variables.
- [ ] **API Testing:** Write tests for your API endpoints using Jest and [Supertest](https://www.npmjs.com/package/supertest).
- [ ] **API Documentation:** Generate documentation with [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) and create a shareable [Postman Collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/).
- [ ] **File Uploads:** Add functionality for file uploads using [Multer](https://www.npmjs.com/package/multer).

---

## 🔗 Module 4: Full-Stack Integration
**Project:** "Blogify" (Frontend + Backend)
**Objective:** Connect a React frontend to your backend API, handling advanced authentication and authorization.

### Core Exercises
- [ ] **Setup:** Create a new React application for the blog frontend.
- [ ] **Redux Toolkit:** Set up [Redux Toolkit](https://redux-toolkit.js.org/) with a `postsSlice` and an `authSlice`.
- [ ] **Fetch Data:** Use [`createAsyncThunk`](https://redux-toolkit.js.org/api/createAsyncThunk) to fetch posts from your backend.
- [ ] **Login/Register:** Create forms that dispatch thunks to your auth endpoints.
- [ ] **Authenticated Requests:** Read the token from the Redux store to make authenticated API calls.

### Extensions (Optional)
- [ ] **React Query Path:** Refactor to use [TanStack Query (React Query)](https://tanstack.com/query/latest) for server state.
- [ ] **Refresh Tokens:** Implement a JWT refresh token flow.
- [ ] **Role-Based Authorization (RBAC):** Add roles to your `User` model (e.g., 'user', 'admin') and protect API endpoints.
- [ ] **Central API Error Handling:** Create a single, centralized error handling middleware in your Express app.
- [ ] **Infinite Scrolling:** Implement an "infinite scroll" feature on the blog feed.

---

## 🚀 Module 5: Production with Next.js
**Project:** "Blogify" V2
**Objective:** Rebuild the frontend with the latest Next.js features for performance, SEO, and security.

### Core Exercises
- [ ] **Migration to Next.js:** Rebuild the blog UI using [Next.js](https://nextjs.org/).
- [ ] **Static Site Generation (SSG):** Use [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) to pre-render the list of blog posts.
- [ ] **Server-Side Rendering (SSR):** Use [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) for user-specific pages.
- [ ] **Real-time with WebSockets:** Integrate [Socket.IO](https://socket.io/) for a real-time feature.
- [ ] **Deployment:** Deploy the Next.js frontend to [Vercel](https://vercel.com/) and the backend to [Render](https://render.com/).

### Extensions (Optional)
- [ ] **App Router Paradigm:** Rebuild the project using the new [App Router](https://nextjs.org/docs/app) to leverage Server Components.
- [ ] **Middleware for Auth:** Protect pages/routes using Next.js [Middleware](https://nextjs.org/docs/advanced-features/middleware).
- [ ] **SEO Fundamentals:** Add dynamic [meta tags](https://nextjs.org/docs/app/api-reference/functions/generate-metadata), OpenGraph tags, and a `sitemap.xml`.
- [ ] **Advanced Authentication:** Replace the manual JWT implementation with [NextAuth.js](https://next-auth.js.org/).
- [ ] **Image Optimization:** Use Next.js's built-in [`<Image>`](https://nextjs.org/docs/basic-features/image-optimization) component.

---

## ☁️ Module 6: Advanced DevOps & Scalability
**Project:** "Blogify" - Production Hardening
**Objective:** Ensure your application is scalable, maintainable, and ready for high-traffic environments.

### Core Exercises
- [ ] **Containerization:** Create `Dockerfile`s and a `docker-compose.yml` file using [Docker](https://www.docker.com/).
- [ ] **CI/CD Pipeline:** Set up a [GitHub Actions](https://github.com/features/actions) workflow for automated testing.
- [ ] **Advanced Caching:** Integrate [Redis](https://redis.io/) into your backend to cache frequent database queries.
- [ ] **End-to-End (E2E) Testing:** Use [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/) for user flow testing.
- [ ] **Monitoring & Logging:** Use [Winston](https://www.npmjs.com/package/winston) for logging and integrate [Sentry](https://sentry.io/) for error monitoring.

### Extensions (Optional)
- [ ] **Load Testing:** Use [k6](https://k6.io/) or [Artillery](https://www.artillery.io/) to benchmark your API endpoints.
- [ ] **Scalable Rate Limiting:** Implement a robust rate-limiting strategy using Redis.
- [ ] **Secrets Management:** Integrate a secure secrets management strategy using [GitHub Secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions).
- [ ] **Automated Database Backups:** Set up a cron job or use a platform integration to automatically back up your database.
- [ ] **Message Queues:** Use [RabbitMQ](https://www.rabbitmq.com/) to offload long-running tasks to a separate worker service.
