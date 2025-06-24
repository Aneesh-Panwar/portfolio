import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ZoomableImage({
  src,
  alt = "img N/A",
  maxZoomRatio = 0.9,   // Zoom covers 90% of smaller viewport dimension
  transitionDuration = 300,
  className = "",       // For custom styling
}) {
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
      const maxSize = Math.min(window.innerWidth, window.innerHeight) * maxZoomRatio;
      setFinalStyle({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: maxSize,
        height: 'auto',
        maxWidth: '80vw',
        maxHeight: '80vh',
      });
    });
  };

  const handleClose = () => {
    const updatedRect = initialRect ?? calculateCloneStyle();
    setFinalStyle(updatedRect);
    setTimeout(() => {
      setIsZoomed(false);
      setFinalStyle(null);
      setCloneStyle(null);
    }, transitionDuration);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isZoomed) {
        const updated = calculateCloneStyle();
        setCloneStyle(updated);
        setInitialRect(updated);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape" && isZoomed) {
        handleClose();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isZoomed]);

  return (
    <>
      <div className={`relative overflow-hidden rounded-md ${className}`}>
        <img
          src={src}
          alt={alt}
          ref={imgRef}
          onClick={handleOpen}
          className="object-cover object-top w-full h-full cursor-zoom-in transition duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {isZoomed && cloneStyle &&
        createPortal(
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
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
                transition: `all ${transitionDuration}ms ease-in-out`,
                borderRadius: '12px',
                objectFit: 'contain',
                maxWidth: '90vw',
                maxHeight: '90vh',
                zIndex: 100,
              }}
            />
          </div>,
          document.body
        )}
    </>
  );
}
