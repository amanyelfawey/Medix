import { Button } from "@/components/ui/button";
import Link from "next/link";

export const MobileSideBar = ({ Menu }) => {
  return (
    <>
      <aside className="flex flex-col justify-evenly h-full py-5 w-full">
        {Menu.map((item, i) => (
          <div key={i} className="w-full">
            <Link href={item.path}>
              <Button variant="ghost" className="w-full flex justify-start text-xl">
                {item.name}
              </Button>
            </Link>
          </div>
        ))}
      </aside>
    </>
  );
};
