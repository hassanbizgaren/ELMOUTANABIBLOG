# ELMOUTANABIBLOG

A modern blog built with Next.js, TypeScript, Tailwind CSS and Sanity. This project demonstrates best practices for creating a performant and accessible blog with a focus on clean code and a user-friendly experience.

## Key Features & Benefits

*   **Modern Tech Stack:** Built with Next.js, sanit, TypeScript, and Tailwind CSS for performance and maintainability.
*   **Dynamic Routing:** Utilizes Next.js dynamic routes to create unique pages for each blog post.
*   **Component-Based Architecture:** Leverages React's component model for modularity and reusability.
*   **Dark Mode Support:** Includes a theme toggle for users to switch between light and dark modes.
*   **Optimized Images:** Configured for optimized image loading using `next/image`.
*   **UI Components:** Uses Radix UI primitives and `shadcn/ui` for a polished and accessible user interface.
*   **Sanity Integration (Potential):** The `next.config.ts` file suggests potential integration with Sanity CMS for content management.

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:**  Version 18 or higher.  (Required by Next.js)
*   **npm** or **yarn** or **pnpm** or **bun:**  Package manager.

## Installation & Setup Instructions

Follow these steps to get the project up and running:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/hassanbizgaren/ELMOUTANABIBLOG.git
    cd ELMOUTANABIBLOG
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Configure Environment Variables (If Necessary):**

    - This project might require environment variables, especially if it's integrated with a CMS or external API.  Refer to the project's documentation or source code for details on required environment variables and how to set them up.  Typically, this involves creating a `.env.local` file in the project root.

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5.  **Open your browser:**

    Visit `http://localhost:3000` to view the application.

## Usage Examples

### Displaying a Blog Post:

The project uses dynamic routes to generate pages for individual blog posts located in the `app/blog/[slug]/page.tsx` file.  The `[slug]` parameter is used to fetch the corresponding blog post data and render it on the page.

```typescript
// app/blog/[slug]/page.tsx

// Example (Assuming data fetching from an API or CMS)
import { Metadata } from 'next';

async function getPost(slug: string) {
  // Replace with your actual data fetching logic (e.g., from Sanity CMS)
  const data = {
        title : "Example Post",
        content : "This is the content of the example post",
    }; // fetch(`your-api-endpoint/${slug}`);
  return data;
}


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPost(params.slug);
    return {
      title: post.title,
    }
  }

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
```

## Configuration Options

The project's configuration is primarily managed through the following files:

*   **`next.config.ts`:**  Defines Next.js-specific configurations, such as image optimization settings.
*   **`tailwind.config.ts`:**  Configures Tailwind CSS, including custom themes, colors, and breakpoints.
*   **`tsconfig.json`:** Defines Typescript compiler options.
*   **`.env.local` (Optional):**  Stores environment variables (if any) such as API keys or database connection strings.

## Contributing Guidelines

We welcome contributions to this project!  To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear and descriptive commit messages.
4.  Submit a pull request.

Please ensure your code follows the project's coding style and includes appropriate tests.


## Acknowledgments

*   This project uses [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).
*   The UI components are inspired by [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/).
