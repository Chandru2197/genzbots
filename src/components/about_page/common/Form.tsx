import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface FormInput {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  autocomplete?: string;
  options?: { value: string; label: string }[];
  defaultValue?: string;
}

interface CheckboxGroup {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

interface RadioBtnGroup {
  label: string;
  name: string;
  radios: { label: string; value: string }[];
}

interface CheckboxItem {
  label: string;
  value: string;
  name: string;
}

interface FormButton {
  title: string;
  type: 'submit' | 'button';
}

interface FormProps {
  title?: string;
  inputs?: FormInput[];
  checkboxGroups?: CheckboxGroup[];
  radioBtns?: RadioBtnGroup;
  checkboxes?: CheckboxItem[];
  btn?: FormButton;
  containerClass?: string;
  btnPosition?: 'left' | 'center' | 'right';
}

const Form: React.FC<FormProps> = ({
  title,
  inputs = [],
  checkboxGroups = [],
  radioBtns,
  checkboxes = [],
  btn,
  containerClass = '',
  btnPosition = 'left',
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [phoneCountry, setPhoneCountry] = useState("in");
  const [searchQuery, setSearchQuery] = useState("");
  const [consent, setConsent] = useState(false);

  const countries = [
    { text: "Afghanistan", value: "AF" },
    { text: "Albania", value: "AL" },
    { text: "Algeria", value: "DZ" },
    { text: "Andorra", value: "AD" },
    { text: "Angola", value: "AO" },
    { text: "Argentina", value: "AR" },
    { text: "Armenia", value: "AM" },
    { text: "Australia", value: "AU" },
    { text: "Austria", value: "AT" },
    { text: "Azerbaijan", value: "AZ" },
    { text: "Bahamas", value: "BS" },
    { text: "Bahrain", value: "BH" },
    { text: "Bangladesh", value: "BD" },
    { text: "Belarus", value: "BY" },
    { text: "Belgium", value: "BE" },
    { text: "Belize", value: "BZ" },
    { text: "Brazil", value: "BR" },
    { text: "Canada", value: "CA" },
    { text: "China", value: "CN" },
    { text: "France", value: "FR" },
    { text: "Germany", value: "DE" },
    { text: "India", value: "IN" },
    { text: "Indonesia", value: "ID" },
    { text: "Italy", value: "IT" },
    { text: "Japan", value: "JP" },
    { text: "Malaysia", value: "MY" },
    { text: "Mexico", value: "MX" },
    { text: "Netherlands", value: "NL" },
    { text: "New Zealand", value: "NZ" },
    { text: "Norway", value: "NO" },
    { text: "Philippines", value: "PH" },
    { text: "Poland", value: "PL" },
    { text: "Portugal", value: "PT" },
    { text: "Russia", value: "RU" },
    { text: "Saudi Arabia", value: "SA" },
    { text: "Singapore", value: "SG" },
    { text: "South Korea", value: "KR" },
    { text: "Spain", value: "ES" },
    { text: "Sweden", value: "SE" },
    { text: "Switzerland", value: "CH" },
    { text: "Thailand", value: "TH" },
    { text: "Turkey", value: "TR" },
    { text: "Ukraine", value: "UA" },
    { text: "United Arab Emirates", value: "AE" },
    { text: "United Kingdom", value: "GB" },
    { text: "United States", value: "US" },
    { text: "Vietnam", value: "VN" },
  ];

  const filteredCountries = countries.filter(country => 
    country.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData(prev => {
      const currentValues = prev[name] || [];
      if (checked) {
        return { ...prev, [name]: [...currentValues, value] };
      } else {
        return { ...prev, [name]: currentValues.filter((v: string) => v !== value) };
      }
    });
  };

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    setPhoneCountry(value.toLowerCase());
    const phoneWithoutCode = phone.replace(/^\+\d+/, '');
    setPhone(phoneWithoutCode);
    // Clear country selection error if exists
    if (errors['country']) {
      setErrors(prev => ({ ...prev, ['country']: '' }));
    }
  };

  const handlePhoneChange = (value: string, country: any) => {
    setPhone(value);
    setPhoneCountry(country.countryCode);
    // Clear phone error if exists
    if (errors['phone']) {
      setErrors(prev => ({ ...prev, ['phone']: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    // Validate all inputs
    inputs.forEach(input => {
      if (!formData[input.name]) {
        newErrors[input.name] = `${input.label} is required`;
      }
    });

    // Validate phone number
    const phoneInput = inputs.find(input => input.type === 'tel');
    if (phoneInput && !phone) {
      newErrors['phone'] = `${phoneInput.label} is required`;
    }

    // Validate country selection
    const countryInput = inputs.find(input => input.type === 'select');
    if (countryInput && !selectedCountry) {
      newErrors['country'] = `${countryInput.label} is required`;
    }

    // Validate checkbox groups (at least one selection required)
    checkboxGroups.forEach(group => {
      const groupSelections = formData[group.name] || [];
      if (groupSelections.length === 0) {
        newErrors[group.name] = `Please select at least one option for ${group.label}`;
      }
    });

    // Validate radio button group
    if (radioBtns && !formData[radioBtns.name]) {
      newErrors[radioBtns.name] = `${radioBtns.label} selection is required`;
    }

    // Validate consent checkbox
    if (checkboxes.length > 0 && !consent) {
      newErrors['consent'] = 'You must agree to the terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Include phone in form data
    const submissionData = {
      ...formData,
      phone,
      selectedCountry,
      consent
    };

    console.log('Form submitted:', submissionData);
    alert('Thank you! We will contact you soon.');
  };

  const getBtnAlignClass = () => {
    switch (btnPosition) {
      case 'center':
        return 'justify-center';
      case 'right':
        return 'justify-end';
      default:
        return 'justify-start';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={containerClass}
    >
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          {title}
        </motion.h3>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inputs.map((input, index) => (
            <motion.div
              key={input.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={input.type === 'email' || input.name === 'companyName' ? 'md:col-span-2' : ''}
            >
              <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">
                {input.label}
                {input.name !== 'lastName' && <span className="text-orange-500 ml-1">*</span>}
              </label>
              
              {input.type === 'select' ? (
                <>
                  <Select value={selectedCountry} onValueChange={handleCountryChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue>
                        {countries.find(c => c.value === selectedCountry)?.text || "Select a country"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <div className="sticky top-0 bg-white p-2">
                        <div className="flex items-center border rounded-md px-3 py-1">
                          <Search className="h-4 w-4 text-gray-500 mr-2" />
                          <Input
                            className="h-8 border-0 p-0 focus-visible:ring-0 placeholder:text-gray-400 text-sm"
                            placeholder="Search countries..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                        </div>
                      </div>
                      <SelectGroup className="max-h-[300px] overflow-y-auto">
                        {filteredCountries.length > 0 ? (
                          filteredCountries.map((country) => (
                            <SelectItem key={country.value} value={country.value}>
                              {country.text}
                            </SelectItem>
                          ))
                        ) : (
                          <div className="py-6 text-center text-sm text-gray-500">
                            No countries found
                          </div>
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors['country'] && (
                    <p className="text-red-500 text-sm mt-1">{errors['country']}</p>
                  )}
                </>
              ) : input.type === 'tel' ? (
                <>
                  <PhoneInput
                    country={phoneCountry}
                    value={phone}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      width: "100%",
                      padding: "20px 0px",
                      borderRadius: "8px", 
                      border: "1px solid #d1d5db",
                      outline: "none",
                      transition: "border-color 0.2s ease-in-out",
                    }}
                    inputClass="!w-full !pl-14 !pr-4 !rounded-lg !border !border-gray-300 focus:!border-orange-400 focus:!ring-2 focus:!ring-orange-100 !outline-none !transition"
                    buttonClass="!border-none !bg-transparent"
                    dropdownClass="!rounded-lg !shadow-lg !bg-white"
                    containerClass="!w-full"
                    enableSearch
                    countryCodeEditable={true}
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: false,
                      autoComplete: "tel",
                    }}
                  />
                  {errors['phone'] && (
                    <p className="text-red-500 text-sm mt-1">{errors['phone']}</p>
                  )}
                </>
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  value={formData[input.name] || ''}
                  onChange={(e) => handleInputChange(input.name, e.target.value)}
                  autoComplete={input.autocomplete}
                  required={input.name !== 'lastName'}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition"
                />
              )}
              
              {errors[input.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[input.name]}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Checkbox Groups */}
        {checkboxGroups.map((group, groupIndex) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + groupIndex * 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="block font-medium text-gray-700 dark:text-white mb-2 text-lg">
              {group.label}
              <span className="text-orange-500 ml-1">*</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.options.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
                >
                  <div className="relative inline-flex">
                    <input
                      type="checkbox"
                      id={option.value}
                      className="peer appearance-none w-5 h-5 border-2 border-orange-500 bg-white rounded-sm checked:bg-white checked:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors cursor-pointer"
                      onChange={(e) => handleCheckboxChange(group.name, option.value, e.target.checked)}
                    />
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none invisible peer-checked:visible text-orange-500 p-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
            {errors[group.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[group.name]}</p>
            )}
          </motion.div>
        ))}

        {/* Radio Button Group */}
        {radioBtns && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <p className="block font-medium text-gray-700 dark:text-white mb-2 text-lg">
              {radioBtns.label}
              <span className="text-orange-500 ml-1">*</span>
            </p>
            <div className="space-y-3">
              {radioBtns.radios.map((radio) => (
                <label
                  key={radio.value}
                  className="flex items-center gap-3 cursor-pointer p-3 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200"
                >
                  <div className="relative inline-flex">
                    <input
                      type="radio"
                      name={radioBtns.name}
                      value={radio.value}
                      id={radio.value}
                      onChange={(e) => handleInputChange(radioBtns.name, e.target.value)}
                      className="peer appearance-none w-5 h-5 border-2 border-orange-500 bg-white rounded-full checked:bg-white checked:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors cursor-pointer"
                    />
                    <div className="absolute inset-0 w-full h-full pointer-events-none invisible peer-checked:visible flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                    {radio.label}
                  </span>
                </label>
              ))}
            </div>
            {errors[radioBtns.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[radioBtns.name]}</p>
            )}
          </motion.div>
        )}

        {/* Additional Checkboxes */}
        {checkboxes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-3"
          >
            {checkboxes.map((checkbox) => (
              <div key={checkbox.name}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative inline-flex">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={() => setConsent((c) => !c)}
                      className="peer appearance-none w-5 h-5 border-2 border-orange-500 bg-white rounded-sm checked:bg-white checked:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors cursor-pointer"
                    />
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none invisible peer-checked:visible text-orange-500 p-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {checkbox.label}
                    <span className="text-orange-500 ml-1">*</span>
                  </span>
                </label>
                {errors['consent'] && (
                  <p className="text-red-500 text-sm mt-1">{errors['consent']}</p>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Submit Button */}
        {btn && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`flex ${getBtnAlignClass()}`}
          >
            <button
              type={btn.type}
              className="bg-orange-500 border-2 border-orange-500 text-white hover:text-orange-500 px-6 py-3 rounded-none font-medium hover:bg-white transition-colors"
            >
              {btn.title}
            </button>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default Form;