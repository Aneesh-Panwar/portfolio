import React from "react";
import { Download, Eye, FileText } from "lucide-react";

export default function ResumeActions() {
  const resumePath = "/cv.pdf"; // Path in public folder

  return (
    <div className=" w-fit flex gap-4 bg-zinc-950 py-2 px-4 rounded-md">
        <p className="font-jura text-2xl inline-flex items-center gap-2 text-gray-300"><FileText/> CV </p><span className="w-0.5 bg-gray-800"></span>
      {/* Download Button */}
      <a
        href={resumePath}
        download="Aneesh_Resume.pdf"
        className="px-2 py-2  text-gray-500 hover:bg-zinc-800 rounded-md  transition"
      >
        <Download size={20} />
      </a>

      {/* View Button */}
      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="px-2 py-2 text-gray-500 rounded-md hover:bg-zinc-800 transition"
      >
        <Eye size={20}/>
      </a>
    </div>
  );
}
