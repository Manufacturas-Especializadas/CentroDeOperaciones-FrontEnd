import { BarChart3, Wrench, ShieldCheck, Rocket } from "lucide-react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

export const HomeIndex = () => {
  const proyectos = [
    {
      title: "DAMESAidea",
      description: "Portal para el registro y seguimiento de ideas de mejora.",
      icon: <BarChart3 className="text-blue-600" size={28} />,
      href: "https://lively-forest-01f0c7010.1.azurestaticapps.net",
      color: "bg-blue-50",
    },
    {
      title: "Reporte de Fallas de Mantenimiento",
      description:
        "Gestión de incidencias de mantenimiento preventivo y correctivo de la planta.",
      icon: <Wrench className="text-orange-600" size={28} />,
      href: "https://nice-pebble-08635cc10.2.azurestaticapps.net",
      color: "bg-orange-50",
    },
    {
      title: "Registro de EPP",
      description:
        "Inventario y asignación de Equipo de Protección Personal para el cumplimiento de seguridad.",
      icon: <ShieldCheck className="text-emerald-600" size={28} />,
      href: "https://icy-coast-0ce63dc10.6.azurestaticapps.net",
      color: "bg-emerald-50",
    },
  ];

  return (
    <div className="space-y-12 py-10 px-5">
      <header className="max-w-3xl">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
          bg-indigo-50 text-indigo-700 text-xs font-bold uppercase 
            tracking-wider mb-6 border border-indigo-100"
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full 
              rounded-full bg-indigo-400 opacity-75"
            ></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          Centro de Operaciones
        </div>

        <h1
          className="text-4xl md:text-5xl font-extrabold 
          text-gray-900 tracking-tight"
        >
          Herramientas de <span className="text-indigo-600">Producción</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Bienvenido a **MesaCore**. Aquí encontrarás las herramientas
          principales para optimizar la producción, gestionar mantenimiento y
          garantizar la seguridad en piso.
        </p>

        <div
          className="mt-6 flex items-center gap-2 text-sm font-medium 
          text-amber-600 bg-amber-50 w-fit px-4 py-2 rounded-lg border 
          border-amber-100"
        >
          <Rocket size={16} />
          <span>¡Próximamente más proyectos en desarrollo!</span>
        </div>
      </header>

      {/* Grid de Proyectos */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proy, index) => (
            <ProjectCard key={index} {...proy} />
          ))}
        </div>
      </section>

      {/* Footer Sutil o Placeholder para futuros proyectos */}
      <div className="pt-10 border-t border-gray-100">
        <p className="text-center text-gray-400 text-sm italic">
          MesaCore v1.0 • Impulsando la eficiencia operativa
        </p>
      </div>
    </div>
  );
};
