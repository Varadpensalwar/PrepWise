# PrepWise

The AI-powered platform for preparing for mock interviews with intelligent feedback and real-time voice interaction.
*Demo Video* - https://drive.google.com/file/d/1VvCHYJUhNTsKuO1s-JBwECPlOwFDo_FZ/view?usp=drive_link

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [Scripts](#-scripts)
- [Environment Setup](#-environment-setup)
- [License](#-license)
- [Support](#️-support)

## 🚀 Features

- **AI-Powered Voice Interviews**: Conduct realistic mock interviews with AI using advanced voice technology
- **Intelligent Feedback**: Get detailed feedback on communication skills, technical knowledge, problem-solving, cultural fit, and confidence
- **Multi-Technology Support**: Practice interviews for various tech stacks including React, Node.js, TypeScript, and more
- **Interview Types**: Support for technical, behavioral, and mixed interview formats
- **User Authentication**: Secure sign-up and sign-in functionality
- **Interview History**: Track your progress and review past interview sessions
- **Responsive Design**: Beautiful, modern UI that works on all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **AI Integration**: Vapi AI for voice interactions, Google AI SDK
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager
- Firebase account for authentication and database

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Varadpensalwar/PrepWise.git
   cd PrepWise
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your configuration:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

   # Vapi AI Configuration
   VAPI_API_KEY=your_vapi_api_key
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key

   # Google AI Configuration
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

For more details about the codebase organization, see the [Project Structure](#-project-structure) section below.

## 📁 Project Structure

```
PrepWise/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   │   ├── sign-in/       # Sign-in page
│   │   └── sign-up/       # Sign-up page
│   ├── (root)/            # Main application pages
│   │   ├── interview/     # Interview-related pages
│   │   └── page.tsx       # Home page
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── ui/               # UI components (buttons, forms, etc.)
│   ├── Agent.tsx         # AI agent component
│   ├── AuthForm.tsx      # Authentication form
│   ├── InterviewCard.tsx # Interview card component
│   └── ...
├── constants/            # Application constants
├── firebase/             # Firebase configuration
├── lib/                  # Utility functions and actions
├── public/               # Static assets
├── types/                # TypeScript type definitions
└── README.md            # Project documentation
```

## 🎯 Usage

### Getting Started

1. **Sign Up/Sign In**: Create an account or sign in to access the platform
2. **Create Interview**: Set up a new mock interview by selecting:
   - Job role
   - Interview type (Technical, Behavioral, or Mixed)
   - Technology stack
   - Experience level
3. **Start Interview**: Begin your AI-powered voice interview
4. **Receive Feedback**: Get detailed feedback on your performance across multiple categories

### Interview Types

- **Technical**: Focus on technical skills and knowledge
- **Behavioral**: Assess soft skills and cultural fit
- **Mixed**: Combination of technical and behavioral questions

### Supported Technologies

The platform supports interviews for various technologies including:
- Frontend: React, Vue.js, Angular, Next.js
- Backend: Node.js, Express.js, NestJS
- Databases: MongoDB, MySQL, PostgreSQL, Firebase
- Cloud: AWS, Azure, GCP
- And many more...

For a complete list of supported technologies, see the [`constants/index.ts`](./constants/index.ts) file.

## 🤝 Contributing

We welcome contributions to PrepWise! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

## 📝 Scripts

Available scripts defined in [`package.json`](./package.json):

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🔒 Environment Setup

Make sure to configure the following services:

1. **Firebase**: Set up authentication and Firestore database
2. **Vapi AI**: Configure for voice interaction capabilities
3. **Google AI**: Set up for AI-powered feedback generation

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙋‍♂️ Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the development team

---

**PrepWise** - Empowering your interview preparation with AI technology 🚀
