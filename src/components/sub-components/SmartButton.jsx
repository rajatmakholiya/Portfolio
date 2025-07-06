import { Link } from 'react-router-dom';

const SmartButton = ({content, Icon, source, theme}) => {
    const buttonClasses = theme === 'dark'
        ? "bg-neutral-700 text-white"
        : "bg-gray-100 text-gray-800 border border-gray-300";

    const hoverButtonClasses = theme === 'dark'
        ? "hover:bg-neutral-700"
        : "hover:bg-gray-200";

    const iconColorClasses = theme === 'dark'
        ? "text-gray-400 group-hover:text-white"
        : "text-gray-600 group-hover:text-black";


    return (
        <Link to={source}>
             <button
      className={`group flex items-center gap-2 px-5 py-3 text-lg font-extrabold rounded-xl active:scale-95 transition-transform duration-300
                  ${buttonClasses} ${hoverButtonClasses}`}
    >
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:-translate-y-1">
        <Icon className={`w-[30px] h-[30px] ${iconColorClasses}`} />
      </div>

      <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        {content}
      </span>
    </button>
        </Link>
  );
};

export default SmartButton;