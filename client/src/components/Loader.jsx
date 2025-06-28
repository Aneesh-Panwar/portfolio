import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-900"
    >
      <div className="relative w-20 h-20">
        {/* Spinner ring only */}
        <div className="absolute inset-0 border-4 border-gray-300 border-t-cyan-700 rounded-full animate-spin"></div>

        {/* Static image centered inside */}
        <img
          src="./logos/f3.svg"
          alt="logo"
          className="absolute inset-0 m-auto w-10 h-10 object-contain"
        />
      </div>
    </motion.div>
  );
}
