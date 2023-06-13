'use client';
import React, { useRef, useState } from 'react';

const InputSpotlightBorder = (props: any) => {
  const divRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <>
      <div className='relative w-4/5'>
        <input
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          autoComplete='off'
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          required
          className='h-12 w-full cursor-default rounded-md border border-slate-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors duration-500 placeholder:select-none placeholder:text-neutral-500 placeholder:font-bold placeholder:text-center focus:border-[#ff5757] focus:outline-none'
        />
        <input
          ref={divRef}
          disabled
          style={{
            border: '1px solid #8678F9',
            opacity,
            WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          }}
          aria-hidden='true'
          className='pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border border-[#ff5757] bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none'
        />
      </div>
    </>
  );
};

export default InputSpotlightBorder;
