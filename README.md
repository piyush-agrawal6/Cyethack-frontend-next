# Cyethack Solutions - Frontend Documentation

This repository contains the frontend code for **Cyethack Solutions**, built using [Next.js 13+](https://nextjs.org/) with the App Router architecture.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
-   **Node.js**: v18.0.0 or higher recommended.
-   **npm**: (Node Package Manager) comes with Node.js.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd Cyethack-FE
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    *This will install all required packages listed in `package.json`.*

## 🛠 Scripts

Use the following commands to run the application:

| Command | Description |
| :--- | :--- |
| `npm run dev` | **Development Mode**: Starts the local dev server at `http://localhost:3000`. Supports hot reload. |
| `npm run build` | **Production Build**: Compiles the application for production deployment. Creates a `.next` folder. |
| `npm start` | **Production Server**: Starts the optimized production server (requires `npm run build` first). |
| `npm run lint` | **Linting**: Runs ESLint to identify and report code quality issues. |

## 🌍 Environment Variables

The application requires environment variables to function correctly. Create a `.env` file in the root directory (`/Cyethack-FE/.env`).

**Required Variables:**

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_ENDPOINT` | The base URL for the backend API. This is used by the frontend to make API requests. | `http://localhost:5000/api` |

> **Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## 🏗 Project Structure

The project follows the standard Next.js App Router structure:

```
Cyethack-FE/
├── app/                  # Application Routes (App Router)
│   ├── layout.jsx        # Root layout (Html, Body, Providers)
│   ├── page.jsx          # Homepage
│   ├── [route]/          # Route directories (e.g., about-us, services)
│   │   ├── page.jsx      # Page content
│   │   └── layout.jsx    # (Optional) Nested layouts
│   └── globals.css       # Global styles and Tailwind directives
├── components/           # React Components
│   ├── layout/           # Header, Footer, Navbar, Menus
│   ├── home/             # Components specific to the Homepage
│   ├── services/         # Components for Service pages, FAQs etc.
│   ├── ui/               # Reusable UI components (Buttons, Inputs, etc.)
│   └── ...               # Feature-specific folders (about, careers, etc.)
├── lib/                  # Utilities and Libraries
│   ├── store/            # Redux Store and Slices
│   └── utils.js          # Helper functions (e.g., cn for class merging)
├── public/               # Static Assets
│   ├── images/           # Website images
│   ├── logo/             # Brand logos
│   └── partner/          # Partner logos
└── ...config files       # tailwind.config.js, next.config.js, etc.
```

## 🧩 Key Pages & Features

1.  **Home Page (`app/page.jsx`)**
    -   **Route:** `/`
    -   **Features:**
        -   **Hero Banner:** Introduction to Cyethack's mission.
        -   **Security Solutions:** Overview of core offerings like VAPT, Cloud Security, etc.
        -   **Partners Carousel:** Displays research partners like IIT Kanpur, Microsoft, AWS.
        -   **Testimonials:** Customer success stories.
        -   **FAQs:** Common questions and answers.

2.  **Services Pages**
    -   **CERT-In Audit (`app/certin-cybersecurity-audit-for-msme/page.jsx`)**: Dedicated landing page for MSME audits mandated by Section 70B. Features a bento grid layout detailing regulatory requirements, penalties, and Cyethack's methodology.
    -   **VAPT & Others**: Pages like Network Security, Cloud Security, etc., showcase specific service details, benefits, and "Get Started" CTAs.

3.  **Product: CyeNet (`app/cyenet/page.jsx`)**
    -   **Route:** `/cyenet`
    -   **Features:** A comprehensive landing page for the CyeNet unified security platform. It highlights:
        -   **VMDR:** Risk-based vulnerability management.
        -   **Scanning Engines:** Web and Network scanner capabilities.
        -   **Collaboration:** Tools for team management and remediation tracking.
        -   **Reporting:** Automated, boardroom-ready PDF reports.

4.  **Pricing (`app/pricing/page.jsx`)**
    -   **Route:** `/pricing`
    -   **Features:** Displays transparent pricing tiers for VAPT and CyeNet product subscriptions.

5.  **Contact (`app/contact/page.jsx`)**
    -   **Route:** `/contact`
    -   **Features:** A contact form integrated with the backend API to capture leads and inquiries.

6.  **Company Pages**
    -   **About Us:** Company mission, vision, and team.
    -   **Careers:** Job openings and company culture.

## 💻 Tech Stack

-   **Framework**: Next.js 13 (App Router)
-   **Language**: JavaScript / React
-   **Styling**: Tailwind CSS
-   **State Management**: Redux Toolkit & React Redux
-   **Icons**: Lucide React
-   **UI Primitives**: Radix UI (via individual packages like `@radix-ui/react-dialog`)
-   **Carousel**: Embla Carousel
-   **Animation**: Custom CSS animations (fade-in, slide-up) and Tailwind utility classes.
-   **Forms**: React Hook Form + Zod (Validation)
-   **Notifications**: Sonner (Toaster)

## 📝 SOP: Development Workflow

### 1. Adding a New Page
To add a new page (e.g., `/new-service`):
1.  Create a folder: `app/new-service/`
2.  Create `app/new-service/page.jsx`.
3.  Add the component code:
    ```javascript
    export const metadata = {
      title: "New Service - Cyethack",
      description: "Description of the new service.",
    };

    export default function NewServicePage() {
      return <main>Page Content Here</main>;
    }
    ```
4.  The page is now accessible at `http://localhost:3000/new-service`.

### 2. Modifying the Menu/Navigation
-   **Desktop Menu**: Edit `components/layout/MainMenu.jsx`. Update the `vaptServices` object or the links array.
-   **Mobile Menu**: Edit `components/layout/MobileMenu.jsx` to match the desktop changes.
-   **Footer**: Edit `components/layout/Footer.jsx`. Update the `footerContent` object.

### 3. Adding Images
1.  Place images in the `public/` directory (e.g., `public/images/my-image.png`).
2.  Reference them in code starting with `/` (e.g., `src="/images/my-image.png"`).
3.  **Note**: Do not import images like `import img from '../public/...'` in Next.js; use the string path.

### 4. SEO & Metadata
-   **Global Metadata**: Defined in `app/layout.jsx` (Title template, OG tags).
-   **Page Metadata**: Export a `metadata` const in each `page.jsx` or `layout.jsx`.
    ```javascript
    export const metadata = {
      title: "Page Title",
      description: "Page description for SEO.",
    };
    ```

### 5. Deployment
1.  Run `npm run build` locally to check for errors.
2.  Commit your changes to the Git repository.
3.  Connect the repository to a hosting provider like **Vercel** (recommended for Next.js) or Netlify.
4.  Set the `NEXT_PUBLIC_API_ENDPOINT` in the hosting project's environment variables.
5.  Deploy.

---
**Cyethack Solutions** - *Securing the Digital Future*
