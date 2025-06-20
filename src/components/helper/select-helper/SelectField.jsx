import { IoIosArrowDown } from "react-icons/io";

const SelectField = ({
  label,
  name,
  options = [],
  register,
  required = false,
  error,
  defaultOption = "Select an option",
}) => {
  return (
    <div className="space-y-1 relative">
      {label && (
          <label htmlFor={name} className="block text-xs text-gray-600">
          {label}
        </label>
      )}
      <select
        id={name}
        {...register(name, { required })}
        className="w-full border border-gray-300 px-2 py-1.5 rounded-sm text-xs text-gray-500 font-normal outline-none appearance-none"
      >
        <option value="">{defaultOption}</option>
        {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
        <div className="absolute top-1/2 right-2 transform text-gray-400"><IoIosArrowDown /></div>
      {error && <p className="text-xs text-red-500 mt-0.5">{error.message}</p>}
    </div>
  );
};

export default SelectField;
