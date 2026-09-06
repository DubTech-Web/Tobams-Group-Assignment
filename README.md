# Tobams Group — Frontend Intern Assessment

A responsive static page implementation for the **Tobams Group Frontend Intern Assessment**, built from the provided Figma design using Next.js, TypeScript, and Tailwind CSS.

The project focuses on accurately translating the provided design into a maintainable, responsive, and accessible frontend implementation.

## 🔗 Project Links

| Resource              | Link                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------ |
| **Live Website**      | https://tobams-group-assignment.vercel.app/ |URL                                                            
| **GitHub Repository** | https://github.com/DubTech-Web/Tobams-Group-Assignment                               |
| **Figma Design**      | https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Tobams-Group-Frontend-Assessment |


---

## 📌 Project Overview


The objective was to translate the provided Figma design into a production-ready Next.js application while maintaining:

* High visual fidelity to the original design
* Responsive behavior across different screen sizes
* Reusable and maintainable components
* Semantic HTML structure
* Basic accessibility considerations
* Optimized image and font loading
* Clean and organized project structure

The implementation is intentionally focused on the provided static UI requirements. No backend services or unnecessary application functionality were introduced because they were not part of the assessment scope.

---

## 🛠️ Technology Stack

### Core Technologies

* **Next.js 16.3.4** — React framework using the App Router
* **React 19.2.8** — UI library
* **TypeScript** — Static type checking
* **Tailwind CSS 4** — Utility-first styling
* **Lucide React** — Interface icons
* **Favico.io** - Used to generate the browser icon/logo

### Next.js Features Used

* App Router
* `next/image` for image optimization
* `next/font` for font loading
* Next.js metadata
* Component-based page architecture

The project dependencies and scripts are defined in `package.json`.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js 20 or newer
* npm

You can verify your Node.js and npm installations with:

```bash
node --version
npm --version
```

### 1. Clone the repository

```bash
git clone https://github.com/DubTech-Web/Tobams-Group-Assignment.git
```

### 2. Navigate into the project

```bash
cd Tobams-Group-Assignment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

### 5. Run the linter

```bash
npm run lint
```

### 6. Create a production build

```bash
npm run build
```

### 7. Start the production server

```bash
npm start
```

---

## 📁 Project Structure

The project uses the Next.js App Router and separates page-level composition from reusable UI components.

```text
Tobams-Group-Assignment/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Header
│   ├── Hero
│   ├── Training sections
│   ├── CTA sections
│   ├── Testimonials
│   └── Footer
│
├── public/
│   └── images/
│       └── project assets
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

The page entry point composes the interface from focused components rather than placing the entire implementation inside one large page component.

---

## 🎨 Design Implementation

The implementation follows the supplied Figma design as closely as possible.

The following areas were considered during implementation:

* Layout structure
* Content hierarchy
* Typography
* Font sizing
* Font weights
* Colors
* Spacing
* Image dimensions
* Component positioning
* Section relationships
* Navigation
* Cards and content blocks
* Calls-to-action
* Footer layout


### Design Deviations

No intentional visual deviations were introduced beyond changes necessary to make the design responsive across smaller viewports.

Where the original desktop design uses fixed dimensions, responsive Tailwind utilities are used to allow those elements to adapt appropriately on smaller screens.

---

## 📱 Responsive Design

The assessment requires the page to work correctly at:

* **425px — Mobile**
* **768px — Tablet**
* **1280px+ — Desktop**

Responsive behavior is implemented using Tailwind CSS responsive utilities rather than custom media queries.

Examples include:

* Desktop two-column layouts becoming single-column layouts on smaller screens
* Desktop image dimensions becoming fluid on mobile
* Responsive typography
* Responsive spacing and padding
* Responsive grids
* Responsive footer columns
* Mobile navigation behavior
* Responsive CTA layouts

No custom media-query workaround was introduced.

---

## 🧩 Component Architecture

The page is divided into logical reusable components rather than being implemented as one monolithic page.

The general structure is:

```text
App Layout
    │
    └── Page
         │
         ├── Header / Navigation
         │
         ├── Main
         │    ├── Hero
         │    ├── Training Sections
         │    ├── Consultation CTA
         │    └── Testimonials
         │
         └── Footer
```

Repeated content is represented using local data structures where appropriate and rendered through component mapping. This keeps repeated markup consistent and makes future content changes easier.

---

## ♿ Accessibility

Accessibility was considered during implementation.

### Semantic HTML

Semantic elements are used where appropriate, including:

* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>`
* `<footer>`

### Images

Images include meaningful alternative text where they communicate information.

Decorative icons are marked appropriately so that they do not create unnecessary noise for assistive technologies.

### Keyboard Navigation

Interactive links and buttons use native HTML elements so that they remain keyboard accessible and focusable.

---

## 🖼️ Image Optimization

Images are served using Next.js's `next/image` functionality where appropriate.

This provides Next.js image optimization while keeping the implementation aligned with the assessment requirements.

Project image assets are stored under:

```text
/public/images
```

---

## 🔤 Font Optimization

The project uses `next/font` to load the selected **Nunito** font rather than relying on externally injected font stylesheets.

This keeps font loading integrated with the Next.js application.

---

## 🧠 Technical Decisions & Assumptions

### Next.js App Router

The application uses the Next.js App Router because the assessment specifically requires Next.js with the App Router.

### Tailwind CSS

Tailwind CSS is used as the sole styling framework. No additional CSS UI framework such as Bootstrap, Material UI, Chakra UI, or another component library was introduced.

### Reusable Components

The interface is divided into focused components to keep the code maintainable and prevent a single monolithic page file.

### Static Implementation

The assessment is scoped around implementing the provided Figma design as a static frontend page. Therefore, backend functionality, authentication, databases, and other application services were not introduced.

### Placeholder Navigation

Where the Figma design contains navigation or CTA elements without a specified destination, placeholder links are used rather than inventing additional application routes.

### Account Interaction

The account element is treated as a presentational UI element because no account/authentication flow was specified in the assessment.

---

## ⚠️ Known Issues

The following are intentional limitations based on the assessment scope:

1. **Navigation destinations**

   Some navigation and CTA links use placeholder destinations because the assessment does not specify additional destination pages.

2. **Account functionality**

   The account control is presentational because authentication functionality is outside the scope of the static page assessment.

3. **Static content**

   Content is currently static because no backend or content-management functionality was requested.


---

## 🤖 AI Disclosure

AI-assisted development tools were used during the development process.

**VS Code Agent** was used for:

* Brainstorming difficult implementation problems
* Reviewing parts of the implementation
* Identifying potential dead code
* Assisting with code cleanup and refinement

The final implementation was reviewed and adjusted as part of the development process.

---

## 🧪 Quality Checks

The following checks were performed to ensure code executed without error:

```bash
npm run lint
```

```bash
npm run build
```

```bash
npm start
```

The application was also visually checked at:

* 425px
* 768px
* 1280px+

to ensure the responsive implementation remains consistent with the assessment requirements.

---

## 🚀 Deployment

The assessment specifies **Vercel as the preferred deployment platform**, with Netlify as an alternative, hence the application is deployed using Vercel.


```text
Live Website:
https://tobams-group-assignment.vercel.app/ 
```

---

## 📋 Assessment Checklist

| Requirement                              | Status          |
| ---------------------------------------- | --------------- |
| Next.js App Router                       | ✅               |
| Tailwind CSS                             | ✅               |
| Figma-based implementation               | ✅               |
| Responsive at mobile, tablet and desktop | ✅               |
| Reusable components                      | ✅               |
| Semantic HTML                            | ✅               |
| Meaningful image alt text                | ✅               |
| Keyboard-accessible controls             | ✅               |
| `next/image`                             | ✅               |
| `next/font`                              | ✅               |
| No additional CSS framework              | ✅               |
| Public GitHub repository                 | ✅               |
| Live deployment                          | https://tobams-group-assignment.vercel.app/  |
| README documentation                     | ✅               |
| AI disclosure                            | ✅               |

---

## 👨‍💻 Author

**Enemuor Chidubem**

GitHub: https://github.com/DubTech-Web

Repository: https://github.com/DubTech-Web/Tobams-Group-Assignment

---

## 📄 Assessment Reference

This project was implemented against the **Tobams Group Frontend Intern Assessment** Figma specification.

**Figma Design:**
https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Tobams-Group-Frontend-Assessment
