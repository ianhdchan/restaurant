import type { MenuCardProp } from "@/types/menu";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export function MenuCard({ menu }: MenuCardProp) {
  return (
    <div className="w-full">
      <Card className="rounded-xl shadow-none border-none overflow-hidden transition-transform hover:-translate-y-1">
        <CardContent>
          <div className="w-full md:h-56">
            <img
              className="object-cover w-full h-full rounded-2xl"
              src={menu.img}
              alt={menu.name}
            ></img>
          </div>
          <CardTitle className="text-base md:text-lg mt-3 text-primary">
            {menu.name}
          </CardTitle>
          <CardDescription>{menu.dsc}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
