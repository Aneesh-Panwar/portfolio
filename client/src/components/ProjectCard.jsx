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

  return (
    <>
      <div className="flex flex-col gap-4 font-orbitron px-4">
        <div className="text-cyan-700 text-xl font-wallpoet">Ideas. Built. Shipped</div>

        {projects.map((item) => (
          <div className="flex flex-col gap-4 w-full" key={item.id}>
            <div className="flex gap-4 bg-zinc-950 px-2 py-2 rounded-md relative font-jura">
              <img
                src={item.thumbnail !== "#" ? item.thumbnail : "./logos/f3.svg"}
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
          className="fixed inset-0 px-4 bg-black/90 flex justify-center items-center z-50"
          onClick={()=>closeDialog()}
        >
          <div className="bg-[linear-gradient(135deg,#041921,#211f20)] rounded-lg w-11/12 max-w-xl overflow-y-auto "
          onClick={(e) => e.stopPropagation()}
          >

            <div className="h-50 relative">
              <span className="font-jura bg-cyan-600 px-2  rounded-md absolute z-1 left-1 top-1">{selectedData.techCategory}</span>
              <span className="font-jura bg-green-500 px-2  rounded-md absolute z-1 right-1 top-1">{selectedData.status}</span>
              {/* <span className="font-kode bg-green-700 px-2  rounded-sm absolute z-1 left-1 bottom-1">{}</span>
              <span className="font-kode bg-green-700 px-2  rounded-sm absolute z-1 right-1 bottom-1"></span> */}
              <ZoomableImage src={selectedData.thumbnail} className="h-50 rounded-b-none" />
            </div>
            <div className="p-4">
              <h1 className="text-3xl text-gray-600 font-wallpoet mb-2">{selectedData.name}</h1>
              <p className="mb-3 font-jura">{selectedData.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {selectedData.techstack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-950 text-white text-[12px] font-jura px-2 py-1 rounded cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 justify-end ">
                <a
                  href={selectedData.githubRepo}
                  target="_blank"
                  className="text-gray-700 cursor-pointer"
                  rel="noreferrer"
                >
                  <img src="" alt="" /><Github/>
                </a>
                <a
                  href={selectedData.hosting}
                  target="_blank"
                  className="text-gray-700 cursor-pointer"
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
