# Dev Stack

**Pick your perfect tech stack, one technology at a time.**

Dev Stack is an interactive playground for exploring modern technologies and building a personalized tech stack. Browse technologies, compare their details, and add your favorites to a live **Your Stack** panel.

---

## ✨ About the Project

Dev Stack provides a curated collection of frontend, backend, database, language, styling, DevOps, and development tools.

Each technology card includes its icon, category, description, difficulty level, rating, and badge, making it easy to explore and compare technologies.

Users can build their own stack by adding technologies, removing individual items, or clearing the entire stack.

---

## ⚙️ Technology Used

| Category | Technology |
|---|---|
| Framework | React.js |
| Language | TypeScript |
| Styling | Tailwind CSS, DaisyUI |
| Notifications | React-Toastify |
| Loading UI | React Spinner |
| Icons | Lucide React |
| Data | Local JSON |
| Build Tool | Vite |

---

## 🌟 Key Features

### 1. Build Your Own Tech Stack

- Browse a collection of technologies with useful details.
- Add technologies to the **Your Stack** panel instantly.
- Prevents duplicate technologies from being added.
- Shows the selected technology count in real time.

### 2. Manage Your Stack Easily

- Remove individual technologies with one click.
- Clear the entire stack using **Remove All**.
- Added technologies become disabled to prevent accidental duplicates.
- Get instant toast notifications for add, duplicate, remove, and clear actions.

### 3. Responsive & Interactive Experience

- Fully responsive layout for mobile, tablet, and desktop.
- Responsive technology grid: 1 column on mobile, 2 on tablet, and 3 on desktop.
- Mobile-friendly navbar with hamburger menu.
- Loading spinner while technology data is being fetched.
- Consistent orange → pink → violet gradient throughout the interface.

---

## ❓ Question & Answers

> **What is JSX, and why is it used in React?**

JSX lets us write HTML-like UI inside JavaScript. It makes React components easier to read and write.

> **What is the difference between props and state?**

Props are data passed from a parent to a child. State is data managed and updated inside a component.

> **What does the useState hook do, and where did you use it in this project?**

`useState` manages changing data in a component. I used it to manage the selected technologies in the stack.

> **What does the useEffect hook do, and why is it useful when loading JSON data?**

`useEffect` is used for side effects such as fetching data. It can be used to load JSON data when a component renders.

> **Why does every item in a .map() list need a unique key prop?**

A unique `key` helps React identify each item and update the list efficiently.

> **What is conditional rendering? Show one place you used it.**

Conditional rendering shows different UI based on a condition. I used it to show an empty message when no technology is selected.

> **How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data through props. A child can communicate back by calling a function passed through props.