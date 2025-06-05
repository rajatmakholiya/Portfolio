import { Link } from 'react-router-dom';

const SmartButton = ({content, Icon, source}) => {
    return (
        <Link to={source}>
             <button
      className="group flex items-center gap-2 px-5 py-3 bg-[#212121] text-white text-lg font-extrabold rounded-xl active:scale-95 transition-transform"
    >
      {/* Icon with hover animation */}
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:-translate-y-1">
        <Icon className="w-[30px] h-[30px] text-gray-400 group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Text with hover animation */}
      <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        {content}
      </span>
    </button>
        </Link>
   
  );
//    return (
//     <button className="group flex items-center  px-4 py-3 pl-5 bg-[#212121] text-white text-lg font-extrabold rounded-xl active:scale-95 transition-transform">
//       <div className="transition-transform duration-500 ease-linear group-hover:scale-125">
//         <Icon className="w-[30px] h-[30px] text-gray-400 group-hover:text-white transition-transform duration-300 ease-in-out group-hover:translate-x-5 group-hover:scale-110" />
//       </div>
//       <span className="ml-2 transition-opacity duration-500 ease-linear group-hover:opacity-0">
//         {content}
//       </span>
//     </button>
//   );
};



export default SmartButton;
