import { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { DarkModeContext } from "../../providers/DarkMode";

export default function DarkModeToggle() {
  const { setDarkMode, darkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    setDarkMode((currentValue) => !currentValue);
    localStorage.setItem("@simple-form:darkmode", `${!darkMode}`);
  };

  return (
    <div className="absolute right-0 top-0 my-8 mx-5 z-10">
      <input type="checkbox" id="darkmode-toggle" className="absolute top-0 right-0 w-full h-full hidden" onChange={handleDarkMode} />
      <label
        htmlFor="darkmode-toggle"
        className="flex gap-1 bg-stone-700 dark:bg-slate-100 p-1 rounded-full cursor-pointer transition-all duration-150"
      >
        <div className="w-5 h-5 p-[2px] rounded-full dark:bg-stone-700">
          <MdDarkMode id="dark-icon" className="w-full h-full text-slate-200 dark:text-stone-700" />
        </div>
        <div className="w-5 h-5 p-[2px] rounded-full bg-slate-100">
          <MdLightMode id="light-icon" className={`w-full h-full text-slate-200 dark:text-stone-700`} />
        </div>
      </label>
    </div>
  );
}
