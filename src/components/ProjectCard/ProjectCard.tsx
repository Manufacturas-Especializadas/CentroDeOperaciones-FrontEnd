import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  color: string;
}

export const ProjectCard = ({
  title,
  description,
  icon,
  href,
  color,
}: Props) => {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className="group relative bg-white p-8 rounded-3xl border border-gray-100 
      shadow-sm hover:shadow-xl 
      hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div
          className={`w-14 h-14 rounded-2xl ${color} flex items-center 
          justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>

      <div
        className="mt-8 flex items-center text-sm font-semibold text-indigo-600 
        group-hover:gap-2 transition-all"
      >
        Ir al proyecto
        <ArrowUpRight
          size={18}
          className="opacity-0 group-hover:opacity-100 transition-all"
        />
      </div>
    </a>
  );
};
