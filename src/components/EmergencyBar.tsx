import { wa } from "@/lib/site";
import { IconCalendar, IconPhone } from "./icons";

export default function EmergencyBar() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-md items-center justify-between gap-2 rounded-full bg-forest p-1.5 shadow-2xl shadow-forest/30 ring-1 ring-forest-700 sm:left-1/2 sm:right-auto sm:mx-0 sm:w-auto sm:max-w-none sm:-translate-x-1/2">
      <a
        href={wa("Hola Franki! Es una EMERGENCIA, necesito atención urgente para mi mascota.")}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-terracotta-600 sm:px-5"
      >
        <IconPhone className="h-4 w-4" />
        Emergencia 24/7
      </a>
      <a
        href={wa("Hola Franki! Quiero reservar una cita para mi mascota.")}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-forest-700 sm:px-5"
      >
        <IconCalendar className="h-4 w-4" />
        Reservar ahora
      </a>
    </div>
  );
}
