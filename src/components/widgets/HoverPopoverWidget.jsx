import {useEffect, useRef, useState} from "react";

const HoverPopoverWidget = ({trigger, content, className = ''}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target) && triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseMove = (e) => {
    // 마우스 위치에서 약간 아래로 오프셋을 줍니다.
    setPosition({
      x: e.clientX,
      y: e.clientY + 10
    })
  }

  return (
    <div className="hover-popover-widget">
      <div ref={triggerRef}
           onMouseEnter={(e) => {setIsOpen(true); handleMouseMove(e)}}
           onMouseMove={handleMouseMove}
           onMouseLeave={() => setTimeout(() => {
             if (!popoverRef.current?.matches(':hover')) setIsOpen(false)
           }, 10)}
      >{trigger}</div>
      {isOpen && (
        <div
          ref={popoverRef}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          className={`popover-container ${className}`}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default HoverPopoverWidget;