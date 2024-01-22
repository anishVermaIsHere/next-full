
const Step = ({ number, text }:{number:number; text:string;}) => (
  <div className='flexCenter flex-row'>
    <div
      className='flexCenter bg-[#323F5D] w-[70px] h-[70px] rounded-[24px]'
    >
      <p className="text-[20px] text-white font-bold"> {number}</p>
    </div>
    <p className="flex-1 ml-[30px] text-[18px] text-[#B0B0B0] font-normal leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default Step
