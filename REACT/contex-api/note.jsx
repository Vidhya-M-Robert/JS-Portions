// Your app has:

// A Navbar
// A Dashboard
// A Login Page
// A Theme Toggle Button

// Global Rules

// Any component should know:

// Is user logged in?

// Who is the user?

// What is the current theme?

// Functional Requirements

// When user clicks Login
// → user becomes { name: "Alex", role: "Admin" }

// Navbar should show:

// Hello, Alex | Logout


// Dashboard should show:

// Welcome Admin Alex


// Theme toggle:

// Light ↔ Dark


// Theme should affect whole app background.

// 1 Auth System → who is logged in
// 2 Theme System → light / dark mode

// Both systems follow the same 3-step Context pattern:

// 1) Create Context (empty box)
// 2) Create Provider (put data + logic into box)
// 3) Consume Context (read box anywhere)