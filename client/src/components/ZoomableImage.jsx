import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ZoomableImage({ src, alt = "Zoomable image", className = "w-20 h-20  object-cover" }) {
  const imgRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cloneStyle, setCloneStyle] = useState(null);
  const [finalStyle, setFinalStyle] = useState(null);
  const [initialRect, setInitialRect] = useState(null);

  const calculateCloneStyle = () => {
    const rect = imgRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    return {
      top: rect.top + scrollY,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };
  };

  const handleOpen = () => {
    const rectStyle = calculateCloneStyle();
    setCloneStyle(rectStyle);
    setInitialRect(rectStyle);
    setIsZoomed(true);

    requestAnimationFrame(() => {
      const targetSize = Math.min(window.innerWidth, window.innerHeight) * 0.6;
      setFinalStyle({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: targetSize,
        height: targetSize,
      });
    });
  };

  const handleClose = () => {
    // recalculate the initial rect in case the window has been resized
    const updatedRect = initialRect ?? calculateCloneStyle();
    setFinalStyle(updatedRect);
    setTimeout(() => {
      setIsZoomed(false);
      setFinalStyle(null);
      setCloneStyle(null);
    }, 300);
  };


  useEffect(() => {
    const handleResize = () => {
        // recalculate the cloneStyle on window resize if zoom is not active
      if (isZoomed) {
        const updated = calculateCloneStyle();
        setCloneStyle(updated);
        setInitialRect(updated); // Keep reference consistent
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isZoomed]);
  

  return (
    <>
   <div className="relative overflow-hidden octagon-profile hover:shadow-glow shadow-2xl">
      <img
        src={src}
        alt={alt}
        ref={imgRef}
        onClick={handleOpen}
        className={className + " cursor-pointer transform transition duration-400 ease-in-out hover:scale-150 hover:first:visible "}
      />
      <p className="absolute h-full w-full bg-black/50 backdrop-blur-md top-0 left-0 flex justify-center items-center hidden z-10">open</p>
    </div>


      {isZoomed && cloneStyle &&
        createPortal(
          <div
            className="fixed inset-0 z-50  bg-black/50 bg-opacity-70 backdrop-blur-sm  "
            onClick={handleClose}
          >
            <img
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                top: finalStyle?.top ?? cloneStyle.top,
                left: finalStyle?.left ?? cloneStyle.left,
                width: finalStyle?.width ?? cloneStyle.width,
                height: finalStyle?.height ?? cloneStyle.height,
                transform: finalStyle?.transform ?? 'none',
                transition: 'all 300ms ease-in-out',
                borderRadius: '15px',
                objectFit: 'cover',
                zIndex: 100,
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
}