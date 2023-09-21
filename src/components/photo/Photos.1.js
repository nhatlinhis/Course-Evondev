// import React, { useEffect, useRef, useState } from "react";
// import { getRandomPhotos } from "./Photos";

// export const Photos = () => {
//   const [randomPhotos, setRandomPhotos] = useState([]);
//   const [nextPage, setNextPage] = useState(1);

//   const handleLoadMorePhotos = useRef({});
//   handleLoadMorePhotos.current = async () => {
//     console.log("getRandomPhotos ~ nextPage", nextPage);
//     const images = await getRandomPhotos(nextPage);
//     const newPhotos = [...randomPhotos, images];
//     console.log("getRandomPhotos ~ nextPhotos", newPhotos);
//     setRandomPhotos(newPhotos);
//     setNextPage(nextPage + 1);
//   };

//   useEffect(() => {
//     handleLoadMorePhotos.current();
//   }, []);

//   return (
//     <div>
//       <div className="grid grid-cols-4 gap-5 p-5 ">
//         {randomPhotos.length > 0 &&
//           randomPhotos.map((item, index) => (
//             <div
//               key={item.download_url}
//               className="p-3 bg-white shadow-md rounded-lg h-[200px]"
//             >
//               <img
//                 src={item.download_url}
//                 alt={item.author}
//                 className="w-full h-full object-cover rounded-lg"
//               />
//             </div>
//           ))}
//       </div>
//       <div className="text-center">
//         <button
//           onClick={handleLoadMorePhotos}
//           className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg"
//         >
//           Load more
//         </button>
//       </div>
//     </div>
//   );
// };
