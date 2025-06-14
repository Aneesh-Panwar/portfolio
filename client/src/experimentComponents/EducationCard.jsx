import { BookOpen, MapPin, School } from 'lucide-react';

export default function EducationTimelineCard({ yearRange = '2022–2025' }) {
  return (
    <div className="relative flex">
      {/* Left Timeline (Dot + Vertical Line + Rotated Text) */}
      <div className="flex flex-col items-center mr-4 relative">
        {/* Dot */}
        <div className="w-4 h-4 bg-lime-500 rounded-full z-10"></div>

        {/* Vertical Line */}
        <div className="w-[2px] bg-lime-500 flex-1 mt-0.5"></div>

        {/* Rotated Year Label */}
        <div className="absolute -left-10 top-6 rotate-[-90deg] text-white text-xs tracking-wide">
          {yearRange}
        </div>
      </div>

      {/* Main Card */}
      <div className="relative bg-[#063442] text-white p-4 pl-5 rounded-r-lg rounded-bl-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.6)] border border-gray-600 w-full max-w-md overflow-hidden">
        {/* Trailing Top Rail */}
        <div className="absolute top-0 left-0 h-10 w-3 bg-lime-500 rounded-br-full"></div>

        {/* Top Label */}
        <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-bl">
          Education
        </span>

        {/* Title */}
        <div className="flex items-center space-x-2 font-semibold text-sm border-b border-gray-300 pb-1 mt-1">
          <BookOpen size={16} className="text-blue-300" />
          <span>Diploma In Computer-Science & Engineering</span>
        </div>

        {/* Location */}
        <div className="flex items-center mt-2 text-sm space-x-2">
          <MapPin size={16} className="text-lime-400" />
          <span>Location: Dehradun</span>
        </div>

        {/* Institute */}
        <div className="flex items-center mt-1 text-sm space-x-2">
          <School size={16} className="text-lime-400" />
          <span>Govt. Inter College Dwara</span>
        </div>
      </div>
    </div>
  );
}
