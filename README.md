# Mouvement - Ultra Culture Platform

A modern web platform dedicated to documenting and celebrating Ultra culture as an artistic, social, and historical phenomenon. Built with Next.js 16, Tailwind CSS v4, and Mongoose.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) & [TanStack Query](https://tanstack.com/query/latest)
- **Auth**: [NextAuth.js](https://next-auth.js.org/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)
- **I18n**: [next-intl](https://next-intl-docs.vercel.app/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mouvement.git
    cd mouvement
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Duplicate `.env.example` to `.env.local` and fill in the required variables:
    ```bash
    cp .env.example .env.local
    ```
    Required variables:
    - `MONGODB_URI`: Your MongoDB connection string.
    - `NEXTAUTH_SECRET`: A random string for auth encryption.
    - `NEXTAUTH_URL`: `http://localhost:3000` (for local dev).

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 🏗️ Architecture

- **`src/app/[locale]`**: Root of the application with Internationalization.
- **`src/components`**: Reusable UI components.
- **`src/lib`**: Utility functions, database connection (`db.ts`), and shared logic.
- **`src/models`**: Mongoose schemas and models.
- **`src/messages`**: Translation files (en.json, fr.json, etc.).

## 🤝 Contributing

1.  Fork the repo
2.  Create your feature branch (`git checkout -b feature/amazing-feature`)
3.  Commit your changes (`git commit -m 'Add some amazing feature'`)
4.  Push to the branch (`git push origin feature/amazing-feature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
