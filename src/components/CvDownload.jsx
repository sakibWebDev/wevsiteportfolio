
import { Download } from "lucide-react";

export default function DownloadCV() {
  return (
    <div className="flex justify-center mt-6">
      <a
        href="/dataentry sakib e azom.pdf"
        download="Sakib_E_Azom_CV.pdf"
        className="flex items-center gap-2 px-2 py-2 rounded-2xl shadow-md  text-white  transition"
      >
        <Download className="w-5 h-5 pr-2" />
        Download CV
      </a>
    </div>
  );
}
