<div align="center">

<img src="./src/assets/logo-text.png" width="90" alt="Dev Stack logo" />

# Dev Stack

**Pick your perfect tech stack, one technology at a time.**

Dev Stack is an interactive playground where developers explore modern frontend, backend, database, and tooling technologies — then build their own personalized stack by adding favorites to a live "Your Stack" panel.

<br/>

</div>

---

## ✨ About the Project

Dev Stack lets you browse a curated library of technologies — React, PostgreSQL, Tailwind, Docker, and more — displayed as clean, informative cards. Each card shows a difficulty level, rating, category, and short description, so you can quickly judge whether a tool fits your project.

Found something you like? Hit **Add to Stack** and it lands in your personal "Your Stack" sidebar, ready to review, trim, or clear out entirely. It's a small, focused tool built to make exploring a tech landscape feel a little more fun.

---

## ⚙️ Technology Used

| Category | Stack |
|---|---|
| **Framework** | React.js |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, DaisyUI |
| **Notifications** | React-Toastify |
| **Loading UI** | React Spinner |
| **Icons** | Lucide React |
| **Data** | Local JSON |
| **Build Tool** | Vite |

---

## 🌟 Key Features

**One Gradient, One Source of Truth**
- Signature orange → pink → violet gradient
- Powers the brand name, hero highlight, and every primary button
- Defined in a single value — re-theme the whole app with one change

**Live Stack Building**
- Add technologies to your stack in real time
- Duplicate protection with warning alerts
- Instant toast feedback on add / remove / clear
- One-click removal — single item or entire stack

**Responsive From the Ground Up**
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop
- Mobile hamburger nav to match

---

## Q&A

**What is JSX, and why is it used in React?**
JSX is that neat trick where you write what looks like HTML right inside your JavaScript. Under the hood it's just syntactic sugar for `React.createElement()` calls. It's used because describing UI structure this way is way more readable than nesting a pile of function calls.

**What is the difference between props and state?**
Props are handed to a component from the outside — think of them as arguments a component doesn't control. State is a component's own private memory that it manages and updates itself. Props flow in, state lives inside.

**What does the useState hook do, and where did you use it in this project?**
`useState` gives a component a piece of memory that persists across re-renders and triggers a re-render when it changes. I used it for the `selectedTech` array (the stack itself), plus small UI bits like hover state on the "Added to Stack" button.

**What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` lets you run side effects — things outside the normal render flow, like fetching data — after a component renders. I needed it to kick off loading the technology JSON once when the component mounts, rather than re-fetching on every render.

**Why does every item in a .map() list need a unique key prop?**
React uses the key to track which item is which across re-renders, so it can update, reorder, or remove the right DOM node instead of guessing. Skip it, and React either warns you or messes up the list when items change.

**What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering just means showing different UI depending on some condition — an if/else, but in JSX. I used it in the "Your Stack" panel: when `selectedTech.length === 0`, it shows a friendly "Your stack is empty" message; otherwise, it renders the list of selected cards instead.

**How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Parent to child is just props — you pass values down like `<TechCard techData={tech} />`. Child to parent works the other way around: the parent passes a *function* down as a prop (like `setSelectedTech`), and the child calls that function to update the parent's state, effectively "sending data back up."

---

<div align="center">


</div>