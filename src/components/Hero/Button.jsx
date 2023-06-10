const ButtonRotatingBackgroundGradient1 = (props) => {
    return (
      <button className='relative inline-flex h-14 overflow-hidden rounded-xl p-[1px]'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff5757_0%,#40128B_50%,#ff5757_100%)]' />
        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-8 py-2 text-xl font-medium backdrop-blur-3xl'>
          {props.text}
        </span>
      </button>
    );
  };
  
  export default ButtonRotatingBackgroundGradient1;
  