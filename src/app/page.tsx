import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { darker_grotesque } from "@/font";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex w-[100%] py-[1rem]">
        <div className="flex flex-col gap-1 m-auto mt-[12rem]">
          <h1
            className={cn(darker_grotesque.className, "font-bold text-[4rem]")}
          >
            Manage your Payment
          </h1>
          <p>Manage your micro-transactions in one place</p>
          <div className="flex gap-2 mt-8 w-full">
            <Button className="rounded-full px-8">Get Started</Button>
            <Button className="rounded-full px-8" variant="outline">
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
