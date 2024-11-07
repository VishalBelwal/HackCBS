"use client";
import { CardsList } from "@/components/CardsList";
import { useSession } from "@clerk/nextjs";

export default function Home() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "full" }).format(
    now
  );

  const { session } = useSession();
  const user = session?.user;

  return (
    <div className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full bg-cover">
        <div className="flex h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl text-orange-300">{time}</h1>
            <p className="text-lg font-semibold text-sky-1 lg:text-2xl">
              {date}
            </p>
          </div>

          <h2 className="glassmorphism max-h-[120px] p-4 rounded max-sm:max-h-[120px] text-wrap font-semibold text-center text-lg flex flex-col">
            Hello,<span className="text-yellow-300">{user?.username?.toLocaleUpperCase()}</span>😊
          </h2>
        </div>
      </div>

      <CardsList />
    </div>
  );
}
