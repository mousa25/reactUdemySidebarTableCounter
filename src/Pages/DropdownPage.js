import Dropdown from "../Components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}
export default DropdownPage;
