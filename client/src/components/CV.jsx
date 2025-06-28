import React, { useState } from "react";
import { Download, Eye, FileText } from "lucide-react";
import { X } from "lucide-react";

function ResumeModal({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-[90vw] h-[90vh] bg-white rounded-lg overflow-hidden shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 p-1 rounded-full z-10"
        >
          <X size={20} />
        </button>
        <iframe
          src={`https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
          title="Resume Viewer"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
}



export default function ResumeActions() {
  const [modalOpen, setModalOpen] = useState(false);

  const resumePath = `${window.location.origin}/cv.pdf`; // full public URL

  return (
    <>
      <div className="w-fit flex gap-4 bg-zinc-950 py-2 px-4 rounded-md shadow-3d">
        <p className="font-jura text-2xl inline-flex items-center gap-2 text-gray-300">
          <FileText /> CV
        </p>
        <span className="w-0.5 bg-gray-800"></span>

        {/* Download Button */}
        <a
          href={resumePath}
          download="Aneesh_Resume.pdf"
          className="px-2 py-2 text-gray-500 hover:bg-zinc-800 rounded-md transition"
        >
          <Download size={20} />
        </a>

        {/* View Button (opens modal) */}
        <button
          onClick={() => setModalOpen(true)}
          className="px-2 py-2 text-gray-500 rounded-md hover:bg-zinc-800 transition"
        >
          <Eye size={20} />
        </button>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        pdfUrl={resumePath}
      />
    </>
  );
}

