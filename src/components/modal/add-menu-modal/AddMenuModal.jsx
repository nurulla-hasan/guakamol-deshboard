"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { Plus, CalendarDays } from "lucide-react"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import InputField from "@/components/helper/input-helper/InputField"; 
import SelectField from "@/components/helper/select-helper/SelectField";

const AddMenuModal = ({ addMenuModal, setAddMenuModal }) => {
  if (!addMenuModal) return null;

  const [selectedWeekRange, setSelectedWeekRange] = useState(null);
  const [selectedMealType, setSelectedMealType] = useState("Lunch"); 

  const { register, handleSubmit, watch, formState: { errors } } = useForm(); 

  const assignToOptions = [
    { value: "user1", label: "Alice Johnson" },
    { value: "user2", label: "Bob Brown" },
    { value: "user3", label: "Charlie Davis" },
  ];

  const assignCompanyOptions = [
    { value: "company1", label: "Innovate Solutions Corp." },
    { value: "company2", label: "Dynamic Edge Systems" },
    { value: "company3", label: "Summit Tech Global" },
  ];

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    console.log("Selected Week Range:", selectedWeekRange);
    console.log("Selected Meal Type:", selectedMealType);
    setAddMenuModal(false); 
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 transition-all">
      <div className="bg-white p-8 rounded-md w-full max-w-lg space-y-6 relative shadow-lg"> 
        {/* Close Button */}
        <button
          onClick={() => setAddMenuModal(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Add Weekly Menu Item</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Select Week */}
          <div className="flex items-center gap-4">
            <label htmlFor="select-week" className="text-gray-700 font-medium whitespace-nowrap">Select Week :</label>
            <div className="relative w-full">
              <DatePicker
                selected={selectedWeekRange}
                onChange={(date) => setSelectedWeekRange(date)}
                dateFormat="dd MMM yyyy" // Date format
                selectsStart // Allows selecting a start date for a range
                startDate={selectedWeekRange}
                endDate={selectedWeekRange ? new Date(selectedWeekRange.getTime() + 6 * 24 * 60 * 60 * 1000) : null} // End of week (7 days)
                // highlightDates={{
                //   "react-datepicker__day--highlighted-custom": [selectedWeekRange],
                // }}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-sm text-sm font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-500"
                customInput={
                  <button className="flex items-center justify-between w-full px-3 py-1.5 border border-gray-300 rounded-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {selectedWeekRange ?
                        `${format(selectedWeekRange, 'dd')} - ${format(new Date(selectedWeekRange.getTime() + 6 * 24 * 60 * 60 * 1000), 'dd MMM yyyy')}`
                        : 'Select Week Range'}
                    </div>
                    <IoIosArrowDown />
                  </button>
                }
              />
            </div>
          </div>

          {/* Meal Type Selection */}
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Meal Type :</span>
            <button
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium ${selectedMealType === "Breakfast" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setSelectedMealType("Breakfast")}
            >
              Breakfast
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium ${selectedMealType === "Lunch" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setSelectedMealType("Lunch")}
            >
              Lunch
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium ${selectedMealType === "Dinner" ? "bg-primary text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => setSelectedMealType("Dinner")}
            >
              Dinner
            </button>
            <button
              type="button"
              className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={() => setSelectedMealType("Snacks")} 
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center cursor-pointer hover:bg-gray-50 transition-all">
            <input type="file" className="hidden" id="dish-image-upload" />
            <label htmlFor="dish-image-upload" className="flex flex-col items-center justify-center h-full">
              <Plus className="h-6 w-6 text-gray-500" />
              <span className="text-gray-500 text-sm mt-2">Upload</span>
            </label>
          </div>

          {/* Dish Name */}
          <InputField
            label="Dish Name"
            name="dishName"
            type="text"
            register={register}
            errors={errors}
            placeholder="Enter dish name"
            required 
          />

          {/* Description */}
          <InputField
            label="Description"
            name="description"
            type="textarea" 
            register={register}
            errors={errors}
            placeholder="Enter description"
          />

          {/* Assign To & Assign Company */}
          <div className="grid grid-cols-2 gap-4">
            <SelectField
              label="Assign to"
              name="assignTo"
              options={assignToOptions}
              register={register}
              defaultOption="Select User"
            />
            <SelectField
              label="Assign Company"
              name="assignCompany"
              options={assignCompanyOptions}
              register={register}
              defaultOption="Select Company"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Apply
            </button>
            <button
              type="reset"
              onClick={() => setAddMenuModal(false)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenuModal;