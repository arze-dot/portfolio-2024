const Sidebar = () => {
  return (
    <div className="w-[100px] h-full cursor-pointer">
      <div className="relative group h-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-gray-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-2 bg-dark-hard ring-1 ring-gray-900/5 leading-none flex flex-col items-center justify-center gap-2 h-full">
          <div>H</div>
          <div>E</div>
          <div>W</div>
          <div>E</div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
