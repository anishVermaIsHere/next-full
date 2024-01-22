import Image from "next/image";

const NewFeature = ({ title, content,imgUrl }:{title:string,content:string,imgUrl:string}) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className='flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'>
      <Image src={imgUrl} alt="icon" className="object-contain" width={50} height={50} />
    </div>
    <h1 className="mt-[26px] text-[24px] leading-[30.24px] text-white font-bold">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {content}
    </p>
  </div>
);

export default NewFeature;
