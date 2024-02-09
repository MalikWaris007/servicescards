// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaChevronRight } from "react-icons/fa6";

// const ServiceCard = ({ imageUrl, title, desc, linkurl, altText }: any) => {
//   return (
//     <div
//       id="card1"
//       className="flex flex-col hover:shadow-md hover:shadow-gray-300 h-auto pt-10 items-center w-[300px]"
//     >
//       <Image src={imageUrl} className="pb-6" alt={altText} width={150} height={150} />
//       <h1 className="text-2xl pb-3 font-bold">{title}</h1>
//       <p className="text-center pb-3 text-[#82847e]">{desc}</p>
//       <Link
//         href={`${linkurl}`}
//         className="flex gap-1 text-red-500 items-center font-bold"
//       >
//         Read More <FaChevronRight />
//       </Link>
//     </div>
//   );
// };

// export default ServiceCard;

import { useState } from "react";
import Image from "next/image";

const Card = ({imageUrl, title, altText, para, startinglist, startinglist2, startinglist3, endinglist, endinglist2, endinglist3, endinglist4}: any) => {
  const [expanded, setExpanded] = useState(false);
  const [cardHeight, setCardHeight] = useState("350px");

  const toggleExpanded = () => {
    setExpanded(!expanded);
    setCardHeight(expanded ? "250px" : "auto"); 
  };

  return (
    <div className="h-fit mb-8" style={{ height: cardHeight }}>
    <div
      id="card1"
      className="flex p-4 border-[#f4f4f4] border-[2px] rounded flex-col hover:shadow-md hover:shadow-gray-300 h-fit  w-[300px]"
    >
      <Image src={imageUrl} className="pb-6" alt={altText} width={80} height={80} />
      <h1 className="text-[18px] pb-3 font-bold">{title}</h1>  
      <p className="text-[12px] font-semibold pb-2 ">{para}</p>
       <div className="text-left">
       <p className="text-[14px] text-left">{startinglist}</p>
        <p className="text-[14px] text-left">{startinglist2}</p>
        <p className="text-[14px] text-left">{startinglist3}</p>
       </div>
        {!expanded && (
          <><button className="read-more-button" onClick={toggleExpanded}>
            read more
          </button></>
        )}
        {expanded && (
          <>
          <div className="text-left">
          <p className="text-[14px]">{endinglist}</p>
          <p className="text-[14px]">{endinglist2}</p>
          <p className="text-[14px]">{endinglist3}</p>
          <p className="text-[14px]">{endinglist4}</p>
          </div>
          <button className="read-more-button" onClick={toggleExpanded}>
            read less
          </button></>
        )}
      </div>
    </div>

  );
};
export default Card;

