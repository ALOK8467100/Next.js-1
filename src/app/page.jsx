import LearnLink from "../components/LearnLink";
import LearnUseRouter from "../components/LearnUseRouter";
import LearnCSSModules from "@/components/learnCSSMOdules";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1 className="bg-slate-600">ALok </h1>

      <LearnLink />
      <LearnUseRouter />
      <LearnCSSModules />
      
    </main>
  );
}
