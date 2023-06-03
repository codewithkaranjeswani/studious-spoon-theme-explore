import "@/src/app/globals.css";
import ThemeButton from "@/src/components/ThemeButton";

export default async function Home() {
  return (
    <div className="grid grid-cols-1">
      <h1 className="flex justify-center p-4 font-semibold text-lg">Toggle Theme App</h1>
      <ThemeButton />
    </div>
  );
}
