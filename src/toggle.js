import "./assets/css/toggle.css";
import { MdLightMode, MdNightlightRound } from "react-icons/md";

export const Toggle = ({ handleChange, isChecked }) => {
  let Mode='';
  if (isChecked) {Mode=MdLightMode}
  else {Mode=MdNightlightRound}
  return (
    <div className="flex fcenter">
     <mode/>
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      
      <label htmlFor="check"><Mode/></label>
    </div>
  );
};

export default Toggle