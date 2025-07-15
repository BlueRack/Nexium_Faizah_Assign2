import BlogForm from "./components/BlogForm";
import FeatureSection from "./components/FeatureSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-12">
      <BlogForm />
      <FeatureSection />
    </main>
  );
}
