import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from "@/components/helper/input-helper/InputField";
import SelectField from "@/components/helper/select-helper/SelectField";
import { IoIosArrowDown } from "react-icons/io";
import { X } from "lucide-react";

const AddClientModal = ({ addModal, setAddModal, }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        if (!addModal) reset();
    }, [addModal, reset]);

    if (!addModal) return null;

    const onSubmit = (data) => {
        console.log(data);
        setAddModal(false);
        reset();
    };

    return (
        <div className="fixed inset-0 backdrop-blur-xs bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg w-full max-w-md shadow-md space-y-4 relative text-sm">
                <button
                    onClick={() => setAddModal(false)}
                    className="absolute top-2 right-2 text-black/50 hover:text-white hover:bg-black/20 p-1 rounded-full transition-all duration-200 cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>

                <h2 className="text-base font-semibold text-gray-800 text-center">Add Client</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    <InputField
                        label="Company Name"
                        name="companyName"
                        placeholder="Company Name"
                        register={register}
                        required
                        error={errors.companyName}
                    />

                    <InputField
                        label="Email"
                        name="companyEmail"
                        type="email"
                        placeholder="you@example.com"
                        register={register}
                        required
                        error={errors.companyEmail}
                    />

                    <InputField
                        label="Address"
                        name="companyAddress"
                        placeholder="Street, City"
                        register={register}
                        error={errors.companyAddress}
                    />

                    <div className="flex gap-2">
                        <InputField
                            label="Plants"
                            name="plants"
                            type="number"
                            register={register}
                            error={errors.plants}
                        />
                        <InputField
                            label="Employees"
                            name="activeEmployees"
                            type="number"
                            register={register}
                            error={errors.activeEmployees}
                        />
                    </div>

                    <div className="relative">
                        <SelectField
                            label="Status"
                            name="status"
                            register={register}
                            required={true}
                            error={errors.status}
                            options={[
                                { label: "Active", value: "Active" },
                                { label: "Inactive", value: "Inactive" },
                            ]}
                        />
                        <div className="absolute top-4/7 right-2 transform text-gray-400"><IoIosArrowDown /></div>
                    </div>
                    <InputField
                        label="Logo Image"
                        name="companyPhoto"
                        type="file"
                        register={register}
                        required={false}
                        error={errors.companyPhoto}
                    />


                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-1.5 rounded-sm hover:bg-primary/90 transition text-xs cursor-pointer"
                    >
                        Add Client
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClientModal;
