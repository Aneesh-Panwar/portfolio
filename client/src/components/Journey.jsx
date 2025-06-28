import { useState } from "react";
import { BookOpen, CalendarFoldIcon } from "lucide-react";
import { journey } from "../data.js/journey";

export default function Journey() {
  const [selectedJourney, setSelectedJourney] = useState(null);

  return (
    <>
      <div className="text-cyan-700 text-xl font-wallpoet pl-4 mb-10">
        From curiosity to code
      </div>

      <div className="max-h-95 overflow-y-auto pt-2">
           {journey.map((item, i) => (
        <div
          className="relative ml-6 mt-4 mr-4"
          key={i}
          onClick={() => setSelectedJourney(item)}
        >
          {/* Time and Icon */}
          <div className="absolute flex gap-2 -top-6 left-6 text-[12px] font-jura">
            <CalendarFoldIcon size={16} />
            {item.start}-{item.end}
          </div>
          <img
            src={item.timelineIcon}
            alt=">"
            className="absolute -top-4 -left-[9px] h-5 p-0.5 w-5 shadow-full bg-black rounded-full"
          />
          <div className="w-0.5 h-45 bg-[linear-gradient(cyan,pink,black)]"></div>

          {/* Box */}
          <div className="absolute left-3 -top-1.5 w-full h-fit rounded-r-lg overflow-hidden">
            <div className="absolute w-4 h-full bg-black shadow-full rounded-tr-full"></div>
            <span className="absolute top-0 right-0.5 bg-[linear-gradient(60deg,#0608ff,#a520fb)] text-[12px] px-1 rounded-bl-md">
              {item.catagory}
            </span>

            <div className="py-4 pl-8 pr-4 bg-[linear-gradient(45deg,#0b0809,#020809)] shadow-inner cursor-pointer hover:bg-gray-950 transition">
              <h2 className="flex items-center gap-1.5 text-md capitalize pt-3 font-wallpoet text-gray-500">
                <BookOpen size={18} />
                {item.name}
              </h2>
              <hr className="my-1 border-gray-600" />
              <h3 className="py-1 flex items-center gap-1.5 text-[12px] capitalize font-orbitron tracking-[2px]">
                <img
                  src="./logos/identifiers/location.svg"
                  alt=""
                  className="h-4"
                />
                {item.location}
              </h3>
              <h3 className="py-1 flex items-center gap-1.5 text-[12px] capitalize font-orbitron tracking-[2px]">
                <img
                  src="./logos/identifiers/college.svg"
                  alt=""
                  className="h-4"
                />
                {item.organization}
              </h3>
            </div>
          </div>
        </div>
      ))}
      </div>


      {/* Dialog / Modal */}
      {selectedJourney && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedJourney(null)}
        >
          <div
            className="bg-zinc-900 p-6 rounded-md w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2">{selectedJourney.name}</h2>
            <p className="text-sm mb-2 text-gray-700">
              <strong>Time:</strong> {selectedJourney.start} - {selectedJourney.end}
            </p>
            <p className="text-sm mb-2 text-gray-700">
              <strong>Location:</strong> {selectedJourney.location}
            </p>
            <p className="text-sm mb-2 text-gray-700">
              <strong>Organization:</strong> {selectedJourney.organization}
            </p>
            <p className="text-sm text-gray-600">{selectedJourney.description}</p>

            <button
              onClick={() => setSelectedJourney(null)}
              className="mt-4 px-4 py-1 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
