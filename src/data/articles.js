export const articles = [
    { 
      id: '1', 
      title: 'Getting Started with React', 
      summary: 'Intro to components, props, and state.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'Beginner', 'Components'],
      body: `React is a powerful JavaScript library for building user interfaces, developed by Facebook. It revolutionizes how we think about building web applications by introducing a component-based architecture that makes code more reusable and maintainable.

## What Makes React Special?

React's core philosophy revolves around breaking down complex UIs into smaller, manageable pieces called components. Each component encapsulates its own logic and styling, making it easy to reason about and test in isolation.

## Components: The Building Blocks

Components in React are like JavaScript functions that return JSX (JavaScript XML), a syntax extension that allows you to write HTML-like code within JavaScript:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
\`\`\`

## Props: Passing Data Down

Props (short for properties) are how data flows down from parent components to child components. They're read-only and help keep components pure and predictable:

\`\`\`jsx
function App() {
  return <Welcome name="Sarah" />;
}
\`\`\`

## State: Managing Component Data

State allows components to manage their own data and re-render when that data changes. With React hooks, managing state has become simpler:

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

React's declarative nature means you describe what your UI should look like for any given state, and React handles the how. This makes your code more predictable and easier to debug.

Start with these fundamentals, and you'll be building amazing React applications in no time!`
    },
    { 
      id: '2', 
      title: 'Routing 101', 
      summary: 'Understand client-side routing with React Router.',
      author: 'Mike Chen',
      date: '2024-01-22',
      readTime: '6 min read',
      tags: ['React Router', 'Navigation', 'SPA'],
      body: `Single-page applications (SPAs) need a way to navigate between different views without full page reloads. React Router is the de facto standard library for handling routing in React applications.

## Why Client-Side Routing?

Traditional multi-page applications require a full page reload every time you navigate to a new page. Client-side routing allows us to:
- Navigate instantly between pages
- Maintain application state
- Provide a smoother user experience
- Load only the necessary components

## Getting Started with React Router

First, install React Router:

\`\`\`bash
npm install react-router-dom
\`\`\`

Then wrap your app with BrowserRouter:

\`\`\`jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
\`\`\`

## Navigation with Link

Use the Link component instead of anchor tags for navigation:

\`\`\`jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
\`\`\`

## Dynamic Routes and Parameters

Capture dynamic segments in your URLs:

\`\`\`jsx
<Route path="/users/:id" element={<UserProfile />} />
\`\`\`

Access parameters in your component:

\`\`\`jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}
\`\`\`

React Router makes navigation intuitive and keeps your URLs in sync with your UI state.`
    },
    { 
      id: '3', 
      title: 'Faster Dev with Vite', 
      summary: 'Why Vite builds and serves quickly.',
      author: 'Alex Rodriguez',
      date: '2024-02-01',
      readTime: '5 min read',
      tags: ['Vite', 'Build Tools', 'Performance'],
      body: `Vite (French for "fast") is a build tool that aims to provide a faster and leaner development experience for modern web projects. Created by Evan You, the creator of Vue.js, Vite has become the go-to choice for many developers.

## The Problem with Traditional Bundlers

Traditional bundlers like Webpack need to process and bundle your entire application before serving it, which can lead to:
- Slow cold starts
- Long rebuild times
- Poor development experience as projects grow

## How Vite Solves This

Vite leverages native ES modules in the browser and uses esbuild for pre-bundling dependencies:

### Lightning-Fast Cold Starts
Vite serves your source code over native ESM, which means no bundling is required during development:

\`\`\`javascript
// Your browser loads modules directly
import { createApp } from 'vue'
import App from './App.vue'
\`\`\`

### Instant Hot Module Replacement (HMR)
Changes are reflected instantly because Vite only needs to transform and serve the changed module:

\`\`\`javascript
// Only this module gets updated
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    // Handle hot update
  })
}
\`\`\`

## Getting Started

Create a new Vite project:

\`\`\`bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
\`\`\`

## Key Features

- **TypeScript Support**: Zero-config TypeScript support
- **CSS Pre-processors**: Built-in support for Sass, Less, and Stylus
- **Framework Agnostic**: Works with React, Vue, Svelte, and more
- **Optimized Builds**: Uses Rollup for production builds
- **Plugin Ecosystem**: Rich plugin ecosystem for extended functionality

## Performance Benefits

- Development server starts in milliseconds
- HMR updates are instant regardless of app size
- Build times are significantly faster than traditional bundlers

Vite transforms the development experience from frustratingly slow to blazingly fast, letting you focus on building great applications instead of waiting for builds.`
    },
    { 
      id: '4', 
      title: 'JavaScript ES6+ Features', 
      summary: 'Modern JavaScript features every developer should know.',
      author: 'Emily Davis',
      date: '2024-02-08',
      readTime: '12 min read',
      tags: ['JavaScript', 'ES6', 'Modern JS'],
      body: `JavaScript has evolved significantly since ES6 (ES2015). Understanding modern JavaScript features is essential for writing cleaner, more efficient code and staying current with industry standards.

## Arrow Functions

Arrow functions provide a concise syntax and lexical \`this\` binding:

\`\`\`javascript
// Traditional function
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => a + b;

// No more .bind(this) needed!
class Timer {
  constructor() {
    this.seconds = 0;
    setInterval(() => {
      this.seconds++; // 'this' refers to Timer instance
    }, 1000);
  }
}
\`\`\`

## Destructuring

Extract values from arrays and objects with ease:

\`\`\`javascript
// Object destructuring
const user = { name: 'John', age: 30, email: 'john@example.com' };
const { name, age } = user;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;

// Function parameters
function greet({ name, age }) {
  return \`Hello \${name}, you are \${age} years old\`;
}
\`\`\`

## Template Literals

String interpolation and multiline strings:

\`\`\`javascript
const name = 'World';
const greeting = \`Hello, \${name}!
  This is a multiline
  template literal.\`;
\`\`\`

## Spread and Rest Operators

\`\`\`javascript
// Spread operator (...)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
\`\`\`

## Async/Await

Write asynchronous code that looks synchronous:

\`\`\`javascript
// Promise-based
fetch('/api/users')
  .then(response => response.json())
  .then(users => console.log(users))
  .catch(error => console.error(error));

// Async/await
async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Optional Chaining and Nullish Coalescing

\`\`\`javascript
// Optional chaining (?.)
const user = { profile: { avatar: { url: 'image.jpg' } } };
const avatarUrl = user?.profile?.avatar?.url;

// Nullish coalescing (??)
const defaultName = username ?? 'Anonymous';
\`\`\`

These features make JavaScript more expressive and help prevent common bugs while improving code readability.`
    },
    { 
      id: '5', 
      title: 'CSS Grid vs Flexbox', 
      summary: 'When to use Grid and when to use Flexbox for layouts.',
      author: 'Tom Wilson',
      date: '2024-02-15',
      readTime: '10 min read',
      tags: ['CSS', 'Layout', 'Grid', 'Flexbox'],
      body: `CSS Grid and Flexbox are two powerful layout systems that revolutionized how we create layouts on the web. While they can sometimes achieve similar results, they're designed for different purposes and excel in different scenarios.

## Understanding the Fundamental Difference

**Flexbox is one-dimensional** - it deals with layout in one direction at a time (either row or column).
**CSS Grid is two-dimensional** - it handles both rows and columns simultaneously.

## When to Use Flexbox

Flexbox shines for:

### 1. Component-level layouts
\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

### 2. Centering content
\`\`\`css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

### 3. Distributing space
\`\`\`css
.button-group {
  display: flex;
  gap: 1rem;
}

.button {
  flex: 1; /* Equal width buttons */
}
\`\`\`

### 4. Media object patterns
\`\`\`css
.media {
  display: flex;
  gap: 1rem;
}

.media-content {
  flex: 1;
}
\`\`\`

## When to Use CSS Grid

CSS Grid excels at:

### 1. Page-level layouts
\`\`\`css
.page-layout {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
}
\`\`\`

### 2. Complex card layouts
\`\`\`css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

### 3. Overlapping elements
\`\`\`css
.hero {
  display: grid;
  grid-template-areas: "content";
}

.hero > * {
  grid-area: content;
}
\`\`\`

## Combining Both

The real power comes from using them together:

\`\`\`css
/* Grid for page layout */
.page {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

/* Flexbox for component layout */
.card {
  display: flex;
  flex-direction: column;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: auto;
}
\`\`\`

## Quick Decision Guide

**Use Flexbox when:**
- Working with a single row or column
- Need to center content
- Working on component-level layouts
- Content size determines layout

**Use CSS Grid when:**
- Creating page-level layouts
- Need precise control over rows AND columns
- Layout should determine content size
- Creating complex, overlapping designs

Remember: these aren't mutually exclusive! Modern layouts often combine both Grid and Flexbox to create robust, responsive designs.`
    },
    { 
      id: '6', 
      title: 'State Management with Redux', 
      summary: 'Managing complex application state with Redux.',
      author: 'Lisa Park',
      date: '2024-02-22',
      readTime: '15 min read',
      tags: ['Redux', 'State Management', 'React'],
      body: `As React applications grow in complexity, managing state across multiple components becomes challenging. Redux provides a predictable state container that helps organize and manage application state in a scalable way.

## The Problem Redux Solves

Without a centralized state management solution, you might face:
- Prop drilling (passing props through many component levels)
- Inconsistent state across components
- Difficulty debugging state changes
- Complex component interactions

## Core Redux Concepts

### 1. Store
The single source of truth for your application state:

\`\`\`javascript
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
\`\`\`

### 2. Actions
Plain objects that describe what happened:

\`\`\`javascript
// Action creators
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    id: Date.now(),
    text,
    completed: false
  }
});

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id
});
\`\`\`

### 3. Reducers
Pure functions that specify how state changes:

\`\`\`javascript
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
\`\`\`

## Modern Redux with Redux Toolkit

Redux Toolkit (RTK) simplifies Redux usage:

\`\`\`javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      // RTK uses Immer internally, so we can "mutate" state
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});
\`\`\`

## Using Redux with React

\`\`\`javascript
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './todosSlice';

function TodoApp() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## When to Use Redux

Consider Redux when you have:
- Complex state logic
- State shared across many components
- Need for time-travel debugging
- Large team working on the same codebase

For simpler applications, React's built-in \`useState\` and \`useContext\` might be sufficient.

Redux's predictable state management makes complex applications more maintainable and easier to debug.`
    },
    { 
      id: '7', 
      title: 'Node.js Fundamentals', 
      summary: 'Building server-side applications with Node.js.',
      author: 'David Kim',
      date: '2024-03-01',
      readTime: '11 min read',
      tags: ['Node.js', 'Backend', 'JavaScript'],
      body: `Node.js revolutionized server-side development by bringing JavaScript to the backend. Built on Chrome's V8 engine, Node.js enables developers to use the same language for both frontend and backend development.

## What Makes Node.js Special?

### Event-Driven, Non-Blocking I/O
Unlike traditional servers that create a thread for each request, Node.js uses an event loop:

\`\`\`javascript
// This won't block other operations
const fs = require('fs');

fs.readFile('large-file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File read complete!');
});

console.log('This runs immediately, not waiting for file read');
\`\`\`

### Single-Threaded Event Loop
Node.js handles thousands of concurrent connections with a single thread, making it highly scalable for I/O-intensive applications.

## Core Modules

### HTTP Module
Create web servers with the built-in HTTP module:

\`\`\`javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  if (pathname === '/api/users') {
    res.end(JSON.stringify({ users: ['Alice', 'Bob'] }));
  } else {
    res.end(JSON.stringify({ message: 'Hello World!' }));
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

### File System Module
\`\`\`javascript
const fs = require('fs').promises;
const path = require('path');

async function readConfig() {
  try {
    const configPath = path.join(__dirname, 'config.json');
    const data = await fs.readFile(configPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading config:', error.message);
    return {};
  }
}
\`\`\`

### Path Module
\`\`\`javascript
const path = require('path');

// Cross-platform path handling
const filePath = path.join(__dirname, 'uploads', 'image.jpg');
const extension = path.extname('document.pdf'); // '.pdf'
const basename = path.basename('/path/to/file.txt'); // 'file.txt'
\`\`\`

## NPM and Package Management

Node.js comes with NPM (Node Package Manager):

\`\`\`bash
# Initialize a new project
npm init -y

# Install dependencies
npm install express mongoose

# Install dev dependencies
npm install --save-dev nodemon jest

# Run scripts
npm run start
npm run test
\`\`\`

## Express.js Framework

Express.js simplifies Node.js web development:

\`\`\`javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob', 'Charlie'] });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Save user logic here
  res.status(201).json({ message: 'User created', user: { name, email } });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## Environment Variables

\`\`\`javascript
// .env file
// PORT=3000
// DB_URL=mongodb://localhost:27017/myapp
// JWT_SECRET=your-secret-key

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
\`\`\`

## Best Practices

1. **Use async/await** for cleaner asynchronous code
2. **Handle errors properly** with try-catch blocks
3. **Use environment variables** for configuration
4. **Implement proper logging** with libraries like Winston
5. **Use middleware** for cross-cutting concerns
6. **Validate input** to prevent security vulnerabilities

Node.js excels at building APIs, real-time applications, microservices, and I/O-intensive applications. Its vast ecosystem and JavaScript familiarity make it an excellent choice for modern web development.`
    },
    { 
      id: '8', 
      title: 'API Design Best Practices', 
      summary: 'Creating RESTful APIs that developers love to use.',
      author: 'Rachel Green',
      date: '2024-03-08',
      readTime: '9 min read',
      tags: ['API', 'REST', 'Backend', 'Design'],
      body: `Well-designed APIs are the backbone of modern applications. They enable seamless integration between services and provide a great developer experience. Here are the essential principles for creating RESTful APIs that developers will love.

## RESTful Resource Design

### Use Nouns, Not Verbs
\`\`\`
✅ Good:
GET /api/users
POST /api/users
GET /api/users/123
PUT /api/users/123
DELETE /api/users/123

❌ Bad:
GET /api/getUsers
POST /api/createUser
GET /api/getUserById/123
\`\`\`

### Use HTTP Methods Correctly
- **GET**: Retrieve data (safe and idempotent)
- **POST**: Create new resources
- **PUT**: Update entire resource (idempotent)
- **PATCH**: Partial updates
- **DELETE**: Remove resources (idempotent)

## URL Structure and Naming

### Consistent Naming Conventions
\`\`\`
✅ Use plural nouns:
/api/users
/api/products
/api/orders

✅ Hierarchical relationships:
/api/users/123/orders
/api/orders/456/items

✅ Use kebab-case for multi-word resources:
/api/user-profiles
/api/shipping-addresses
\`\`\`

### Query Parameters for Filtering
\`\`\`
GET /api/users?status=active&page=2&limit=20
GET /api/products?category=electronics&sort=price&order=desc
GET /api/orders?date_from=2024-01-01&date_to=2024-01-31
\`\`\`

## HTTP Status Codes

Use appropriate status codes to communicate the result:

\`\`\`javascript
// Success responses
200 OK          // Successful GET, PUT, PATCH
201 Created     // Successful POST
204 No Content  // Successful DELETE

// Client error responses
400 Bad Request      // Invalid request data
401 Unauthorized     // Authentication required
403 Forbidden        // Access denied
404 Not Found        // Resource doesn't exist
409 Conflict         // Resource conflict
422 Unprocessable    // Validation errors

// Server error responses
500 Internal Server Error  // Server-side error
503 Service Unavailable    // Temporary unavailability
\`\`\`

## Request and Response Format

### Consistent JSON Structure
\`\`\`javascript
// Success response
{
  "success": true,
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com"
  },
  "meta": {
    "timestamp": "2024-03-08T10:30:00Z",
    "version": "1.0"
  }
}

// Error response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Must be a valid email address"
      }
    ]
  }
}
\`\`\`

### Pagination
\`\`\`javascript
{
  "success": true,
  "data": [
    // ... array of items
  ],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "pages": 8,
    "has_next": true,
    "has_prev": true
  }
}
\`\`\`

## Versioning

Plan for API evolution:

\`\`\`
✅ URL versioning:
/api/v1/users
/api/v2/users

✅ Header versioning:
Accept: application/vnd.api+json;version=1
\`\`\`

## Security Best Practices

### Authentication and Authorization
\`\`\`javascript
// JWT token in header
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// API key
X-API-Key: your-api-key
\`\`\`

### Input Validation
\`\`\`javascript
const { body, validationResult } = require('express-validator');

app.post('/api/users',
  [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 8 }),
    body('name').trim().isLength({ min: 2, max: 50 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          details: errors.array()
        }
      });
    }
    // Process valid request
  }
);
\`\`\`

## Documentation

Provide comprehensive API documentation:
- Use tools like Swagger/OpenAPI
- Include example requests and responses
- Document authentication requirements
- Provide SDKs or code examples

## Rate Limiting

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
\`\`\`

Great API design is about creating intuitive, consistent, and reliable interfaces that make developers' lives easier while maintaining security and performance.`
    },
    { 
      id: '9', 
      title: 'Testing React Components', 
      summary: 'Unit and integration testing strategies for React apps.',
      author: 'James Brown',
      date: '2024-03-15',
      readTime: '13 min read',
      tags: ['Testing', 'React', 'Jest', 'RTL'],
      body: `Testing React components is crucial for building reliable applications. A good testing strategy catches bugs early, improves code quality, and gives you confidence when refactoring. Let's explore effective testing approaches for React applications.

## Testing Philosophy

> "The more your tests resemble the way your software is used, the more confidence they can give you." - Kent C. Dodds

Focus on testing behavior, not implementation details. Test what users actually do with your components.

## Setting Up the Testing Environment

Most React apps come with Jest and React Testing Library pre-configured:

\`\`\`bash
# Create React App includes these by default
npm test

# For custom setups
npm install --save-dev @testing-library/react @testing-library/jest-dom
\`\`\`

## Basic Component Testing

### Simple Rendering Test
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByRole('button', { name: /click me/i });
  expect(buttonElement).toBeInTheDocument();
});
\`\`\`

### Testing Props
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

test('displays user information', () => {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'developer'
  };
  
  render(<UserCard user={user} />);
  
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
  expect(screen.getByText('developer')).toBeInTheDocument();
});
\`\`\`

## Testing User Interactions

### Click Events
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

test('increments counter when button is clicked', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  const button = screen.getByRole('button', { name: /increment/i });
  const counter = screen.getByText('Count: 0');
  
  await user.click(button);
  
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
\`\`\`

### Form Testing
\`\`\`javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

test('submits form with user credentials', async () => {
  const user = userEvent.setup();
  const mockOnSubmit = jest.fn();
  
  render(<LoginForm onSubmit={mockOnSubmit} />);
  
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /sign in/i });
  
  await user.type(emailInput, 'test@example.com');
  await user.type(passwordInput, 'password123');
  await user.click(submitButton);
  
  expect(mockOnSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});
\`\`\`

## Testing Asynchronous Behavior

### API Calls and Loading States
\`\`\`javascript
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import UserList from './UserList';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays users', async () => {
  render(<UserList />);
  
  // Check loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  // Wait for users to load
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
  
  expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
});
\`\`\`

## Testing Custom Hooks

\`\`\`javascript
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

test('useCounter hook increments value', () => {
  const { result } = renderHook(() => useCounter(0));
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
\`\`\`

## Testing Context and Providers

\`\`\`javascript
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import ThemedButton from './ThemedButton';

test('applies theme correctly', () => {
  render(
    <ThemeProvider theme="dark">)
      <ThemedButton>Themed Button</ThemedButton>
    </ThemeProvider>
  );
  
  const button = screen.getByRole('button');
  expect(button).toHaveClass('dark-theme');
});
\`\`\`

## Best Practices

### 1. Use Semantic Queries
\`\`\`javascript
// ✅ Good - accessible and semantic
screen.getByRole('button', { name: /submit/i });
screen.getByLabelText(/email address/i);
screen.getByText(/welcome back/i);

// ❌ Avoid - implementation details
screen.getByClassName('btn-primary');
screen.getByTestId('submit-button');
\`\`\`

### 2. Test Behavior, Not Implementation
\`\`\`javascript
// ✅ Good - tests behavior
test('shows error message when form is invalid', () => {
  // Test that error appears when validation fails
});

// ❌ Bad - tests implementation
test('calls setState when button is clicked', () => {
  // Testing internal component state
});
\`\`\`

### 3. Use MSW for API Mocking
Mock Service Worker provides realistic API mocking without changing your application code.

### 4. Group Related Tests
\`\`\`javascript
describe('LoginForm', () => {
  describe('when valid credentials are provided', () => {
    test('submits successfully', () => { /* ... */ });
    test('redirects to dashboard', () => { /* ... */ });
  });
  
  describe('when invalid credentials are provided', () => {
    test('shows error message', () => { /* ... */ });
    test('does not redirect', () => { /* ... */ });
  });
});
\`\`\`

Effective testing requires finding the right balance between confidence and maintainability. Focus on testing the critical user flows and edge cases that matter most to your application.`
    },
    { 
      id: '10', 
      title: 'Web Performance Optimization', 
      summary: 'Techniques to make your web apps blazingly fast.',
      author: 'Nina Patel',
      date: '2024-03-22',
      readTime: '14 min read',
      tags: ['Performance', 'Optimization', 'Web Vitals'],
      body: `Web performance directly impacts user experience, SEO rankings, and conversion rates. Even a 100ms delay can result in significant user abandonment. Let's explore proven techniques to make your web applications blazingly fast.

## Core Web Vitals

Google's Core Web Vitals are essential metrics for measuring user experience:

### Largest Contentful Paint (LCP)
Measures loading performance. Should occur within 2.5 seconds.

\`\`\`javascript
// Optimize LCP
// 1. Optimize images
<img 
  src="hero.jpg" 
  alt="Hero image"
  loading="eager"  // For above-fold images
  fetchpriority="high"
/>

// 2. Preload critical resources
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero.jpg" as="image">
\`\`\`

### First Input Delay (FID)
Measures interactivity. Should be less than 100ms.

\`\`\`javascript
// Reduce JavaScript execution time
// Use code splitting
const LazyComponent = lazy(() => import('./LazyComponent'));

// Break up long tasks
function processData(data) {
  const chunkSize = 100;
  let index = 0;
  
  function processChunk() {
    const endIndex = Math.min(index + chunkSize, data.length);
    
    for (let i = index; i < endIndex; i++) {
      // Process item
    }
    
    index = endIndex;
    
    if (index < data.length) {
      // Yield control back to browser
      setTimeout(processChunk, 0);
    }
  }
  
  processChunk();
}
\`\`\`

### Cumulative Layout Shift (CLS)
Measures visual stability. Should be less than 0.1.

\`\`\`css
/* Reserve space for images */
.image-container {
  width: 100%;
  height: 200px; /* Set explicit height */
  overflow: hidden;
}

/* Use aspect-ratio for responsive images */
.responsive-image {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
}
\`\`\`

## Image Optimization

### Modern Image Formats
\`\`\`html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
\`\`\`

### Responsive Images
\`\`\`html
<img 
  src="image-800w.jpg"
  srcset="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Responsive image"
  loading="lazy"
>
\`\`\`

## JavaScript Optimization

### Code Splitting
\`\`\`javascript
// Route-based code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
\`\`\`

### Tree Shaking
\`\`\`javascript
// ✅ Import only what you need
import { debounce } from 'lodash-es';

// ❌ Imports entire library
import _ from 'lodash';
\`\`\`

### Bundle Analysis
\`\`\`bash
# Analyze your bundle
npm install --save-dev webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
\`\`\`

## CSS Optimization

### Critical CSS
\`\`\`html
<!-- Inline critical CSS -->
<style>
  /* Above-the-fold styles here */
  .header { /* ... */ }
  .hero { /* ... */ }
</style>

<!-- Load non-critical CSS asynchronously -->
<link rel="preload" href="non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
\`\`\`

### CSS-in-JS Optimization
\`\`\`javascript
// Use styled-components with babel plugin for better performance
// babel-plugin-styled-components enables:
// - Dead code elimination
// - Minification
// - Better debugging
\`\`\`

## Caching Strategies

### Service Worker
\`\`\`javascript
// Cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/static/css/main.css',
        '/static/js/main.js'
      ]);
    })
  );
});

// Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
\`\`\`

### HTTP Caching Headers
\`\`\`javascript
// Express.js example
app.use('/static', express.static('public', {
  maxAge: '1y', // Cache static assets for 1 year
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));
\`\`\`

## Performance Monitoring

### Web Vitals Library
\`\`\`javascript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
\`\`\`

### Performance Observer
\`\`\`javascript
// Monitor long tasks
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.duration > 50) {
      console.warn('Long task detected:', entry);
    }
  });
});

observer.observe({ entryTypes: ['longtask'] });
\`\`\`

## Quick Wins Checklist

- ✅ Enable gzip/brotli compression
- ✅ Optimize images (format, size, lazy loading)
- ✅ Minify CSS, JavaScript, and HTML
- ✅ Use a CDN for static assets
- ✅ Implement proper caching headers
- ✅ Remove unused code and dependencies
- ✅ Use modern image formats (WebP, AVIF)
- ✅ Preload critical resources
- ✅ Implement code splitting
- ✅ Monitor Core Web Vitals

Performance optimization is an ongoing process. Start with the biggest impact items and continuously monitor your metrics to ensure your optimizations are effective.`
    },
    { 
      id: '11', 
      title: 'TypeScript for Beginners', 
      summary: 'Adding type safety to your JavaScript projects.',
      author: 'Chris Lee',
      date: '2024-03-29',
      readTime: '10 min read',
      tags: ['TypeScript', 'JavaScript', 'Types'],
      body: `TypeScript is a superset of JavaScript that adds static type checking to help catch errors early and improve code quality. It compiles to plain JavaScript and runs anywhere JavaScript runs.

## Why TypeScript?

### Catch Errors Early
\`\`\`typescript
// JavaScript - runtime error
function greet(name) {
  return \`Hello, \${name.toUpperCase()}!\`;
}

greet(123); // Runtime error: name.toUpperCase is not a function

// TypeScript - compile-time error
function greet(name: string): string {
  return \`Hello, \${name.toUpperCase()}!\`;
}

greet(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
\`\`\`

### Better Developer Experience
- Intelligent autocomplete
- Refactoring support
- Better navigation
- Inline documentation

## Basic Types

### Primitive Types
\`\`\`typescript
// Basic types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Tuples
let person: [string, number] = ["John", 30];
\`\`\`

### Object Types
\`\`\`typescript
// Object type annotation
let user: {
  name: string;
  age: number;
  email?: string; // Optional property
} = {
  name: "John",
  age: 30
};

// Interface (preferred for objects)
interface User {
  name: string;
  age: number;
  email?: string;
  readonly id: number; // Cannot be changed after initialization
}

const user: User = {
  id: 1,
  name: "John",
  age: 30
};
\`\`\`

## Functions

\`\`\`typescript
// Function type annotations
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}!\`;
}

// Default parameters
function createUser(name: string, role: string = "user"): User {
  return { id: Date.now(), name, age: 0, role };
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
\`\`\`

## Union and Intersection Types

\`\`\`typescript
// Union types (OR)
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

function updateStatus(id: ID, status: Status): void {
  console.log(\`Updating \${id} to \${status}\`);
}

// Intersection types (AND)
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

type Worker = Person & Employee;

const worker: Worker = {
  name: "John",
  age: 30,
  employeeId: "EMP001",
  department: "Engineering"
};
\`\`\`

## Generics

Generics allow you to create reusable components that work with multiple types:

\`\`\`typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

const stringResult = identity<string>("hello");
const numberResult = identity<number>(42);

// Generic interface
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John", age: 30 },
  message: "User fetched successfully",
  success: true
};

// Generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
\`\`\`

## Type Assertions and Guards

\`\`\`typescript
// Type assertion
const someValue: unknown = "this is a string";
const strLength: number = (someValue as string).length;

// Type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  }
}
\`\`\`

## Working with React

\`\`\`typescript
import React from 'react';

// Props interface
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

// Component with typed props
const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Using the component
const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button onClick={handleClick} variant="primary">
      Click me
    </Button>
  );
};
\`\`\`

## Configuration (tsconfig.json)

\`\`\`json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["dom", "dom.iterable", "es2020"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
\`\`\`

## Migration Tips

1. **Start gradually**: Rename \`.js\` files to \`.ts\` one at a time
2. **Use \`any\` temporarily**: It's okay to use \`any\` during migration
3. **Add types incrementally**: Focus on function signatures first
4. **Use strict mode**: Enable it once you're comfortable
5. **Leverage type inference**: Let TypeScript infer types when obvious

## Common Gotchas

\`\`\`typescript
// ❌ Don't use \`any\` unless absolutely necessary
let data: any = fetchData();

// ✅ Use proper types or \`unknown\`
let data: User[] = fetchData();
// or
let data: unknown = fetchData();

// ❌ Don't ignore errors with \`@ts-ignore\`
// @ts-ignore
const result = someFunction();

// ✅ Fix the underlying issue or use proper types
const result = someFunction() as ExpectedType;
\`\`\`

TypeScript's learning curve is gentle if you're already familiar with JavaScript. Start with basic type annotations and gradually adopt more advanced features as your confidence grows.`
    },
    { 
      id: '12', 
      title: 'Database Design Principles', 
      summary: 'Designing efficient and scalable database schemas.',
      author: 'Amanda Foster',
      date: '2024-04-05',
      readTime: '16 min read',
      tags: ['Database', 'SQL', 'Design', 'Schema'],
      body: `Good database design is the foundation of any successful application. A well-designed database ensures data integrity, optimal performance, and easy maintenance. Let's explore the fundamental principles of effective database schema design.

## Database Design Process

### 1. Requirements Analysis
Before designing, understand:
- What data needs to be stored?
- How will the data be accessed?
- What are the performance requirements?
- What are the scalability needs?

### 2. Conceptual Design
Create an Entity-Relationship (ER) diagram to visualize:
- Entities (things you want to store)
- Attributes (properties of entities)
- Relationships (how entities connect)

## Normalization

Normalization eliminates data redundancy and ensures data integrity.

### First Normal Form (1NF)
- Each column contains atomic (indivisible) values
- Each row is unique
- No repeating groups

\`\`\`sql
-- ❌ Violates 1NF (multiple values in one column)
CREATE TABLE users_bad (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  phones VARCHAR(255) -- "555-1234, 555-5678, 555-9999"
);

-- ✅ Follows 1NF
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE user_phones (
  id INT PRIMARY KEY,
  user_id INT,
  phone VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

### Second Normal Form (2NF)
- Must be in 1NF
- No partial dependencies (non-key attributes depend on entire primary key)

\`\`\`sql
-- ❌ Violates 2NF (course_name depends only on course_id, not both course_id and student_id)
CREATE TABLE enrollments_bad (
  student_id INT,
  course_id INT,
  course_name VARCHAR(100),
  grade CHAR(1),
  PRIMARY KEY (student_id, course_id)
);

-- ✅ Follows 2NF
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE courses (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  grade CHAR(1),
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
\`\`\`

### Third Normal Form (3NF)
- Must be in 2NF
- No transitive dependencies (non-key attributes don't depend on other non-key attributes)

\`\`\`sql
-- ❌ Violates 3NF (department_name depends on department_id, not employee_id)
CREATE TABLE employees_bad (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  department_name VARCHAR(100)
);

-- ✅ Follows 3NF
CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);
\`\`\`

## Relationships and Foreign Keys

### One-to-Many Relationship
\`\`\`sql
CREATE TABLE authors (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE books (
  id INT PRIMARY KEY,
  title VARCHAR(200),
  author_id INT,
  published_date DATE,
  FOREIGN KEY (author_id) REFERENCES authors(id)
);
\`\`\`

### Many-to-Many Relationship
\`\`\`sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE courses (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

-- Junction table
CREATE TABLE student_courses (
  student_id INT,
  course_id INT,
  enrollment_date DATE,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
\`\`\`

## Indexing Strategy

### Primary Indexes
\`\`\`sql
-- Automatically created for primary keys
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2)
);
\`\`\`

### Secondary Indexes
\`\`\`sql
-- Single column index
CREATE INDEX idx_products_name ON products(name);

-- Composite index
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);

-- Unique index
CREATE UNIQUE INDEX idx_users_email ON users(email);
\`\`\`

### When to Index
- Columns used in WHERE clauses
- Columns used in JOIN conditions
- Columns used in ORDER BY
- Foreign key columns

### When NOT to Index
- Tables with heavy INSERT/UPDATE operations
- Columns that change frequently
- Small tables (< 1000 rows)

## Data Types and Constraints

### Choose Appropriate Data Types
\`\`\`sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  age TINYINT UNSIGNED, -- 0-255, saves space
  salary DECIMAL(10,2), -- Exact precision for money
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);
\`\`\`

### Essential Constraints
\`\`\`sql
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  order_date DATE NOT NULL,
  total_amount DECIMAL(10,2) CHECK (total_amount >= 0),
  status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  UNIQUE KEY unique_customer_date (customer_id, order_date)
);
\`\`\`

## Performance Considerations

### Denormalization When Appropriate
Sometimes breaking normalization rules improves performance:

\`\`\`sql
-- Add frequently accessed calculated field
CREATE TABLE order_summaries (
  order_id INT PRIMARY KEY,
  customer_name VARCHAR(100), -- Denormalized from customers table
  total_items INT,
  total_amount DECIMAL(10,2),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);
\`\`\`

### Partitioning Large Tables
\`\`\`sql
-- Partition by date range
CREATE TABLE sales (
  id INT AUTO_INCREMENT,
  sale_date DATE,
  amount DECIMAL(10,2),
  customer_id INT,
  PRIMARY KEY (id, sale_date)
)
PARTITION BY RANGE (YEAR(sale_date)) (
  PARTITION p2022 VALUES LESS THAN (2023),
  PARTITION p2023 VALUES LESS THAN (2024),
  PARTITION p2024 VALUES LESS THAN (2025)
);
\`\`\`

## Schema Evolution

### Versioning Strategy
\`\`\`sql
-- Add new columns as nullable first
ALTER TABLE users ADD COLUMN phone VARCHAR(20);

-- Populate data
UPDATE users SET phone = 'unknown' WHERE phone IS NULL;

-- Then add constraints if needed
ALTER TABLE users MODIFY phone VARCHAR(20) NOT NULL;
\`\`\`

### Migration Best Practices
1. Always backup before migrations
2. Test migrations on copy of production data
3. Use transactions where possible
4. Plan for rollback scenarios
5. Monitor performance after changes

## Design Patterns

### Audit Trail Pattern
\`\`\`sql
CREATE TABLE user_audit (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  action ENUM('INSERT', 'UPDATE', 'DELETE'),
  old_values JSON,
  new_values JSON,
  changed_by INT,
  changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### Soft Delete Pattern
\`\`\`sql
CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10,2),
  deleted_at TIMESTAMP NULL,
  INDEX idx_active_products (deleted_at) -- For filtering active products
);
\`\`\`

## Common Anti-Patterns to Avoid

1. **God Tables**: Tables with too many columns
2. **EAV (Entity-Attribute-Value)**: Storing structured data as key-value pairs
3. **Premature Optimization**: Over-indexing or complex schemas without need
4. **No Foreign Keys**: Missing referential integrity
5. **Generic Tables**: One table for multiple entity types

Good database design is about finding the right balance between normalization, performance, and maintainability. Start with a normalized design and denormalize only when performance requirements demand it.`
    },
    { 
      id: '13', 
      title: 'Docker for Developers', 
      summary: 'Containerizing applications for consistent deployments.',
      author: 'Kevin Zhang',
      date: '2024-04-12',
      readTime: '12 min read',
      tags: ['Docker', 'DevOps', 'Containers'],
      body: `Docker revolutionizes how we develop, ship, and run applications by packaging them into lightweight, portable containers. It solves the "it works on my machine" problem and ensures consistent environments across development, testing, and production.

## What is Docker?

Docker is a containerization platform that allows you to package applications with all their dependencies into containers. Unlike virtual machines, containers share the host OS kernel, making them much more efficient.

### Containers vs Virtual Machines
\`\`\`
Virtual Machine:     Container:
[App] [App]          [App] [App] [App]
[Libs] [Libs]        [Libs] [Libs] [Libs]
[Guest OS][Guest OS] [Docker Engine]
[Hypervisor]         [Host OS]
[Host OS]            [Infrastructure]
[Infrastructure]
\`\`\`

## Core Docker Concepts

### Images
Read-only templates used to create containers:

\`\`\`bash
# Pull an image from Docker Hub
docker pull node:18-alpine

# List local images
docker images

# Remove an image
docker rmi node:18-alpine
\`\`\`

### Containers
Running instances of images:

\`\`\`bash
# Run a container
docker run -it node:18-alpine

# Run container in background
docker run -d --name my-app node:18-alpine

# List running containers
docker ps

# Stop a container
docker stop my-app

# Remove a container
docker rm my-app
\`\`\`

## Creating Your First Dockerfile

A Dockerfile is a text file that contains instructions to build a Docker image:

\`\`\`dockerfile
# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Expose port
EXPOSE 3000

# Define environment variable
ENV NODE_ENV=production

# Command to run application
CMD ["npm", "start"]
\`\`\`

### Building and Running Your Image
\`\`\`bash
# Build image
docker build -t my-web-app .

# Run container from your image
docker run -p 3000:3000 my-web-app

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=development my-web-app
\`\`\`

## Multi-Stage Builds

Optimize image size by using multiple stages:

\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY --from=builder /app/dist ./dist
USER node
EXPOSE 3000
CMD ["node", "dist/index.js"]
\`\`\`

## Docker Compose

Manage multi-container applications with docker-compose.yml:

\`\`\`yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgres://user:password@db:5432/myapp
    depends_on:
      - db
      - redis
    volumes:
      - .:/app
      - /app/node_modules

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

### Using Docker Compose
\`\`\`bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs web

# Rebuild and start
docker-compose up --build
\`\`\`

## Development Workflow

### Hot Reloading Setup
\`\`\`yaml
# docker-compose.dev.yml
version: '3.8'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules # Anonymous volume for node_modules
    environment:
      - NODE_ENV=development
\`\`\`

\`\`\`dockerfile
# Dockerfile.dev
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
\`\`\`

## Volume Management

### Bind Mounts
\`\`\`bash
# Mount host directory to container
docker run -v /host/path:/container/path my-app

# Current directory
docker run -v $(pwd):/app my-app
\`\`\`

### Named Volumes
\`\`\`bash
# Create named volume
docker volume create my-data

# Use named volume
docker run -v my-data:/app/data my-app

# List volumes
docker volume ls
\`\`\`

## Networking

### Container Communication
\`\`\`bash
# Create custom network
docker network create my-network

# Run containers on same network
docker run --network my-network --name web my-web-app
docker run --network my-network --name db postgres:15

# Containers can communicate using container names as hostnames
# web can connect to db using hostname "db"
\`\`\`

## Best Practices

### Dockerfile Optimization
\`\`\`dockerfile
# ✅ Use specific tags, not 'latest'
FROM node:18.16.0-alpine

# ✅ Use .dockerignore to exclude files
# .dockerignore content:
# node_modules
# .git
# *.md

# ✅ Layer caching - copy package.json first
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# ✅ Run as non-root user
USER node

# ✅ Use COPY instead of ADD
COPY src/ ./src/

# ✅ Minimize layers
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
\`\`\`

### Security Best Practices
\`\`\`dockerfile
# Use official base images
FROM node:18-alpine

# Don't run as root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Don't expose unnecessary ports
EXPOSE 3000

# Use secrets for sensitive data
# Don't put secrets in Dockerfile or environment variables
\`\`\`

## Common Commands

\`\`\`bash
# Development
docker-compose up --build    # Rebuild and start
docker-compose logs -f web   # Follow logs
docker exec -it web sh       # Access container shell

# Cleanup
docker system prune         # Remove unused containers, networks, images
docker container prune      # Remove stopped containers
docker image prune          # Remove unused images
docker volume prune         # Remove unused volumes

# Debugging
docker inspect container_name  # Inspect container details
docker stats                   # View resource usage
docker top container_name      # View running processes
\`\`\`

## Production Deployment

### Health Checks
\`\`\`dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1
\`\`\`

### Resource Limits
\`\`\`yaml
services:
  web:
    image: my-web-app
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '0.5'
        reservations:
          memory: 256M
          cpus: '0.25'
\`\`\`

Docker simplifies the development workflow and ensures your application runs consistently across all environments. Start with simple containers and gradually adopt more advanced features as your needs grow.`
    },
    { 
      id: '14', 
      title: 'Authentication & Authorization', 
      summary: 'Securing your web applications with proper auth.',
      author: 'Sophia Martinez',
      date: '2024-04-19',
      readTime: '11 min read',
      tags: ['Security', 'Auth', 'JWT', 'OAuth'],
      body: `Authentication and authorization are fundamental security concepts for web applications. Authentication verifies who you are, while authorization determines what you can access. Let's explore how to implement secure authentication systems.

## Authentication vs Authorization

- **Authentication**: "Who are you?" - Verifying user identity
- **Authorization**: "What can you do?" - Determining user permissions

\`\`\`javascript
// Authentication: User logs in with credentials
const user = await authenticateUser(email, password);

// Authorization: Check if user can access resource
if (user.role === 'admin' || user.id === resourceOwnerId) {
  // Allow access
}
\`\`\`

## Session-Based Authentication

Traditional approach using server-side sessions:

\`\`\`javascript
// Express.js with express-session
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.passwordHash)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    req.session.userId = user.id;
    res.json({ message: 'Logged in successfully', user: { id: user.id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Authentication middleware
const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
};
\`\`\`

## JWT (JSON Web Tokens)

Stateless authentication using signed tokens:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email,
      role: user.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Login with JWT
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.passwordHash)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = generateToken(user);
    
    // Set httpOnly cookie (recommended)
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000
    });
    
    res.json({ 
      message: 'Login successful',
      user: { id: user.id, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// JWT middleware
const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
\`\`\`

## Password Security

### Hashing Passwords
\`\`\`javascript
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;

// Registration
app.post('/auth/register', async (req, res) => {
  const { email, password } = req.body;
  
  // Validate password strength
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }
  
  try {
    // Hash password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    
    const user = new User({
      email,
      passwordHash
    });
    
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Registration failed' });
    }
  }
});
\`\`\`

### Password Reset Flow
\`\`\`javascript
const crypto = require('crypto');

// Request password reset
app.post('/auth/forgot-password', async (req, res) => {
  const { email } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      // Don't reveal if email exists
      return res.json({ message: 'If email exists, reset link will be sent' });
    }
    
    // Generate secure reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');
    
    user.passwordResetToken = resetTokenHash;
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();
    
    // Send email (implementation depends on email service)
    await sendResetEmail(user.email, resetToken);
    
    res.json({ message: 'If email exists, reset link will be sent' });
  } catch (error) {
    res.status(500).json({ error: 'Reset request failed' });
  }
});

// Reset password
app.post('/auth/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  
  try {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
    
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }
    });
    
    if (!user) {
      return res.status(400).json({ error: 'Token is invalid or has expired' });
    }
    
    // Update password
    user.passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    
    res.json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ error: 'Password reset failed' });
  }
});
\`\`\`

## Role-Based Access Control (RBAC)

\`\`\`javascript
// Define roles and permissions
const ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  MODERATOR: 'moderator'
};

const PERMISSIONS = {
  READ_POSTS: 'read_posts',
  WRITE_POSTS: 'write_posts',
  DELETE_POSTS: 'delete_posts',
  MANAGE_USERS: 'manage_users'
};

const ROLE_PERMISSIONS = {
  [ROLES.USER]: [PERMISSIONS.READ_POSTS, PERMISSIONS.WRITE_POSTS],
  [ROLES.MODERATOR]: [PERMISSIONS.READ_POSTS, PERMISSIONS.WRITE_POSTS, PERMISSIONS.DELETE_POSTS],
  [ROLES.ADMIN]: Object.values(PERMISSIONS)
};

// Authorization middleware
const requirePermission = (permission) => {
  return (req, res, next) => {
    const userPermissions = ROLE_PERMISSIONS[req.user.role] || [];
    
    if (!userPermissions.includes(permission)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    
    next();
  };
};

// Usage
app.delete('/posts/:id', 
  verifyToken, 
  requirePermission(PERMISSIONS.DELETE_POSTS),
  async (req, res) => {
    // Delete post logic
  }
);
\`\`\`

## OAuth 2.0 Integration

\`\`\`javascript
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user exists
    let user = await User.findOne({ googleId: profile.id });
    
    if (!user) {
      // Create new user
      user = new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        avatar: profile.photos[0].value
      });
      await user.save();
    }
    
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    // Generate JWT for OAuth user
    const token = generateToken(req.user);
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000
    });
    
    res.redirect('/dashboard');
  }
);
\`\`\`

## Frontend Implementation (React)

\`\`\`javascript
// Auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    checkAuthStatus();
  }, []);
  
  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/me', {
        credentials: 'include'
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });
    
    if (response.ok) {
      const userData = await response.json();
      setUser(userData.user);
      return { success: true };
    } else {
      const error = await response.json();
      return { success: false, error: error.message };
    }
  };
  
  const logout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
    setUser(null);
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Protected route component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) return <div>Loading...</div>;
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user.role !== requiredRole) {
    return <div>Access denied</div>;
  }
  
  return children;
};
\`\`\`

## Security Best Practices

1. **Use HTTPS everywhere** - Encrypt data in transit
2. **Implement rate limiting** - Prevent brute force attacks
3. **Validate all inputs** - Prevent injection attacks
4. **Use secure headers** - Implement CORS, CSRF protection
5. **Store tokens securely** - HttpOnly cookies or secure storage
6. **Implement proper logout** - Clear all tokens and sessions
7. **Monitor authentication attempts** - Log and alert on suspicious activity
8. **Use strong password policies** - Enforce complexity requirements
9. **Implement account lockout** - Temporarily disable after failed attempts
10. **Regular security audits** - Review and update security measures

Security is an ongoing process, not a one-time implementation. Stay updated with the latest security practices and regularly audit your authentication systems.`
    },
    { 
      id: '15', 
      title: 'GraphQL vs REST', 
      summary: 'Comparing API architectures for modern applications.',
      author: 'Ryan O\'Connor',
      date: '2024-04-26',
      readTime: '8 min read',
      tags: ['GraphQL', 'REST', 'API', 'Comparison'],
      body: `Choosing between GraphQL and REST is one of the most important architectural decisions for modern applications. Both have their strengths and are suited for different use cases. Let's explore when to use each approach.

## REST: The Established Standard

REST (Representational State Transfer) has been the dominant API architecture for over a decade. It's based on HTTP methods and follows a resource-oriented approach.

### REST Characteristics
\`\`\`javascript
// Multiple endpoints for different resources
GET /api/users          // Get all users
GET /api/users/123      // Get specific user
POST /api/users         // Create user
PUT /api/users/123      // Update user
DELETE /api/users/123   // Delete user

// Related data requires additional requests
GET /api/users/123/posts     // Get user's posts
GET /api/posts/456/comments  // Get post's comments
\`\`\`

### REST Strengths
- **Simple and intuitive** - Easy to understand and implement
- **HTTP caching** - Built-in caching mechanisms
- **Wide tooling support** - Extensive ecosystem
- **Stateless** - Each request is independent
- **Language agnostic** - Works with any programming language

### REST Challenges
- **Over-fetching** - Getting more data than needed
- **Under-fetching** - Need multiple requests for related data
- **API versioning** - Breaking changes require new versions
- **Multiple round trips** - N+1 query problems

## GraphQL: The Modern Alternative

GraphQL provides a query language for APIs and a runtime for executing those queries, giving clients the power to request exactly what they need.

### GraphQL Characteristics
\`\`\`javascript
// Single endpoint with flexible queries
POST /graphql

// Query example - get exactly what you need
query {
  user(id: "123") {
    name
    email
    posts {
      title
      publishedAt
      comments {
        content
        author {
          name
        }
      }
    }
  }
}
\`\`\`

### Setting Up GraphQL Server
\`\`\`javascript
const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

// Schema definition
const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }
  
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
  }
  
  type Comment {
    id: ID!
    content: String!
    author: User!
    post: Post!
  }
  
  type Query {
    user(id: ID!): User
    users: [User!]!
    post(id: ID!): Post
    posts: [Post!]!
  }
  
  type Mutation {
    createUser(name: String!, email: String!): User!
    createPost(title: String!, content: String!, authorId: ID!): Post!
    updatePost(id: ID!, title: String, content: String): Post!
    deletePost(id: ID!): Boolean!
  }
\`;

// Resolvers
const resolvers = {
  Query: {
    user: async (parent, { id }) => {
      return await User.findById(id);
    },
    users: async () => {
      return await User.find();
    },
    post: async (parent, { id }) => {
      return await Post.findById(id);
    },
    posts: async () => {
      return await Post.find();
    }
  },
  
  Mutation: {
    createUser: async (parent, { name, email }) => {
      const user = new User({ name, email });
      return await user.save();
    },
    createPost: async (parent, { title, content, authorId }) => {
      const post = new Post({ title, content, author: authorId });
      return await post.save();
    },
    updatePost: async (parent, { id, title, content }) => {
      return await Post.findByIdAndUpdate(
        id, 
        { ...(title && { title }), ...(content && { content }) },
        { new: true }
      );
    },
    deletePost: async (parent, { id }) => {
      await Post.findByIdAndDelete(id);
      return true;
    }
  },
  
  // Nested resolvers
  User: {
    posts: async (user) => {
      return await Post.find({ author: user.id });
    }
  },
  
  Post: {
    author: async (post) => {
      return await User.findById(post.author);
    },
    comments: async (post) => {
      return await Comment.find({ post: post.id });
    }
  },
  
  Comment: {
    author: async (comment) => {
      return await User.findById(comment.author);
    },
    post: async (comment) => {
      return await Post.findById(comment.post);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
\`\`\`

### Frontend GraphQL Usage
\`\`\`javascript
// Apollo Client setup
import { ApolloClient, InMemoryCache, gql, useQuery, useMutation } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// Query component
const GET_USER_WITH_POSTS = gql\`
  query GetUserWithPosts($userId: ID!) {
    user(id: $userId) {
      name
      email
      posts {
        id
        title
        publishedAt
      }
    }
  }
\`;

function UserProfile({ userId }) {
  const { loading, error, data } = useQuery(GET_USER_WITH_POSTS, {
    variables: { userId }
  });
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h2>{data.user.name}</h2>
      <p>{data.user.email}</p>
      <h3>Posts:</h3>
      {data.user.posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.publishedAt}</p>
        </div>
      ))}
    </div>
  );
}

// Mutation example
const CREATE_POST = gql\`
  mutation CreatePost($title: String!, $content: String!, $authorId: ID!) {
    createPost(title: $title, content: $content, authorId: $authorId) {
      id
      title
      content
    }
  }
\`;

function CreatePostForm({ userId }) {
  const [createPost, { loading, error }] = useMutation(CREATE_POST);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      await createPost({
        variables: {
          title: formData.get('title'),
          content: formData.get('content'),
          authorId: userId
        }
      });
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Post title" required />
      <textarea name="content" placeholder="Post content" required />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Post'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
}
\`\`\`

## Key Differences

### Data Fetching
\`\`\`javascript
// REST: Multiple requests needed
const user = await fetch('/api/users/123');
const posts = await fetch('/api/users/123/posts');
const comments = await fetch('/api/posts/456/comments');

// GraphQL: Single request with nested data
const result = await graphqlClient.query({
  query: gql\`
    query {
      user(id: "123") {
        name
        posts {
          title
          comments {
            content
          }
        }
      }
    }
  \`
});
\`\`\`

### Caching
\`\`\`javascript
// REST: HTTP caching (simple)
fetch('/api/users/123', {
  headers: {
    'Cache-Control': 'max-age=3600'
  }
});

// GraphQL: Normalized caching (complex but powerful)
const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        posts: {
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          }
        }
      }
    }
  }
});
\`\`\`

## When to Choose REST

✅ **Choose REST when:**
- Building simple CRUD applications
- Team is new to APIs
- Need extensive HTTP caching
- Building public APIs for third parties
- Working with file uploads/downloads
- Performance is critical (less overhead)
- Need simple monitoring and debugging

## When to Choose GraphQL

✅ **Choose GraphQL when:**
- Building complex applications with related data
- Multiple clients with different data needs (web, mobile, IoT)
- Need to aggregate data from multiple sources
- Want to minimize over-fetching
- Team is comfortable with the learning curve
- Need real-time subscriptions
- Want strong typing and introspection

## Hybrid Approach

Many organizations use both:
\`\`\`javascript
// REST for simple operations
POST /api/auth/login
GET /api/health
POST /api/files/upload

// GraphQL for complex data operations
POST /graphql
// Complex queries, mutations, subscriptions
\`\`\`

## Performance Considerations

### REST Performance
- Simpler server implementation
- Better HTTP caching
- Less parsing overhead
- Easier to optimize individual endpoints

### GraphQL Performance
- Potential N+1 query problems (solved with DataLoader)
- Query complexity analysis needed
- More sophisticated caching required
- Better network efficiency (fewer round trips)

\`\`\`javascript
// DataLoader for N+1 problem
const DataLoader = require('dataloader');

const userLoader = new DataLoader(async (userIds) => {
  const users = await User.find({ _id: { $in: userIds } });
  return userIds.map(id => users.find(user => user.id === id));
});

const resolvers = {
  Post: {
    author: async (post) => {
      return userLoader.load(post.authorId);
    }
  }
};
\`\`\`

## Conclusion

Both REST and GraphQL are excellent choices depending on your specific needs:

- **REST** is battle-tested, simple, and perfect for straightforward APIs
- **GraphQL** shines in complex applications with sophisticated data requirements

Consider your team's expertise, application complexity, and performance requirements when making the decision. Many successful applications use both approaches where each fits best.`
    }
  ];