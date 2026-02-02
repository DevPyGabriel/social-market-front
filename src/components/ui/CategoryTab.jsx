import React from "react";
import { Icons } from "../Icons";

export const CategoryTab = ({
  children = "No se encontro la categoria",
  type = "Instagram",
  size = 18,
}) => {
  const normalized =
    typeof type === "string"
      ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
      : "Instagram";
  const Icon = Icons[normalized] || Icons.Instagram;

  return (
    <section className="mb-6 px-2 md:px-3">
      <div className="h-10.5 flex items-center gap-x-1 px-4 bg-black w-fit text-white rounded-full">
        <Icon size={size} />
        <span className="truncate">{children}</span>
      </div>
    </section>
  );
};

export default CategoryTab;
