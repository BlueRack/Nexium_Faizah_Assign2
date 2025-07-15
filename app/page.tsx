
import BlogForm from "./components/BlogForm";
import FeatureSection from "./components/FeatureSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-fuchsia-500 mb-8">
        AI Blog Summariser
      </h1>
      <BlogForm />
      <FeatureSection />
    </main>
  );
}
