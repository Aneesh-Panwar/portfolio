import React, { useState } from "react";
import { Expand, ExternalLinkIcon, Github,} from "lucide-react";
import ZoomableImage from "./ZoomableImage";
import { projects } from "../data.js/projects";

export default function ProjectCard() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedData = projects.find((item) => item.id === selectedId);

  function closeDialog() {
    setSelectedId(null);
  }

  function handleOverlayClick(e) {
    if (e.target.className === "dialog-overlay") {
      closeDialog();
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 font-orbitron px-4">
        <div className="text-cyan-700 text-xl font-wallpoet">Ideas. Built. Shipped</div>

        {projects.map((item) => (
          <div className="flex flex-col gap-4 w-full" key={item.id}>
            <div className="flex gap-4 bg-[#0b0b0b] px-2 py-2 rounded-md relative font-jura">
              <img
                src={item.thumbnail !== "#" ? item.thumbnail : "./images/banner.jpg"}
                alt="img"
                className="h-14 w-14 object-cover"
              />
              <div className="flex flex-col w-full">
                <h2 className="capitalize text-md flex justify-between">
                  <strong>{item.name}</strong>
                  <Expand onClick={() => setSelectedId(item.id)} className="cursor-pointer" />
                </h2>
                <hr className="border-gray-600 border-1 my-1" />
                <p className="text-[12px] h-5 overflow-clip font-jura">{item.description}</p>
              </div>
            </div>
          </div>
        ))}

        <button className="bg-cyan-950 w-fit px-4 py-2 rounded-md hover:opacity-50 active:opacity-100">
          Expand
        </button>
      </div>

      {selectedId !== null && selectedData && (
        <div
          className="fixed inset-0 px-4 bg-black bg-opacity-50 flex justify-center items-center z-50 dialog-overlay"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-slaty rounded-lg w-11/12 max-w-xl overflow-y-auto p-4">
            <span
              className="absolute top-3 right-3 text-xl text-gray-100 hover:text-gray-800 cursor-pointer z-100"
              onClick={closeDialog}
            >
              ✖
            </span>

            <div className="h-60 relative">
              <ZoomableImage src={selectedData.thumbnail} className="h-50" />
            </div>
            <div>
              <h1 className="text-2xl font-jura font-bold mb-2">{selectedData.name}</h1>
              <p className="mb-3 font-jura">{selectedData.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedData.techstack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-800 text-white text-sm px-2 py-1 rounded cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  href={selectedData.githubRepo}
                  target="_blank"
                  className="text-cyan-500 cursor-pointer"
                  rel="noreferrer"
                >
                  <img src="" alt="" /><Github/>
                </a>
                <a
                  href={selectedData.hosting}
                  target="_blank"
                  className="text-cyan-500 cursor-pointer"
                  rel="noreferrer"
                >
                  <ExternalLinkIcon/>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
