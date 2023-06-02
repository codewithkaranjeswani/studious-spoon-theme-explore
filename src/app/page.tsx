import "@/src/app/globals.css";
import ThemeButton from "@/src/components/ThemeButton";

export default async function Home() {
  return (
    <div className="grid grid-cols-1">
      <h1 className="p-4 flex justify-center">Toggle Theme App</h1>
      <ThemeButton />
    </div>
  );
}
