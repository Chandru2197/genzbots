"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, User, Mail, Phone, Building, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import './ScheduleCallModal.css';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogOverlay } from '@/components/ui/dialog';
import '@/styles/dialog.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface TimeSlot {
  day: string;
  date: string;
  isToday: boolean;
  dayOfWeek: number;
  times: { time: string; available: boolean }[];
}

interface SelectedSlot {
  day: string;
  date: string;
  time: string;
}

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  country: string;
  projectTimeline: string;
  consent: boolean;
}

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<'schedule' | 'details' | 'confirmation'>('schedule');
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    country: 'IN',
    projectTimeline: '',
    consent: false,
  });
  const [phoneCountry, setPhoneCountry] = useState('in');
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isFormValidState, setIsFormValidState] = useState(false);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // Comprehensive country list
  const countries = [
    { value: 'AF', label: 'Afghanistan' },
    { value: 'AL', label: 'Albania' },
    { value: 'DZ', label: 'Algeria' },
    { value: 'AD', label: 'Andorra' },
    { value: 'AO', label: 'Angola' },
    { value: 'AG', label: 'Antigua and Barbuda' },
    { value: 'AR', label: 'Argentina' },
    { value: 'AM', label: 'Armenia' },
    { value: 'AU', label: 'Australia' },
    { value: 'AT', label: 'Austria' },
    { value: 'AZ', label: 'Azerbaijan' },
    { value: 'BS', label: 'Bahamas' },
    { value: 'BH', label: 'Bahrain' },
    { value: 'BD', label: 'Bangladesh' },
    { value: 'BB', label: 'Barbados' },
    { value: 'BY', label: 'Belarus' },
    { value: 'BE', label: 'Belgium' },
    { value: 'BZ', label: 'Belize' },
    { value: 'BJ', label: 'Benin' },
    { value: 'BT', label: 'Bhutan' },
    { value: 'BO', label: 'Bolivia' },
    { value: 'BA', label: 'Bosnia and Herzegovina' },
    { value: 'BW', label: 'Botswana' },
    { value: 'BR', label: 'Brazil' },
    { value: 'BN', label: 'Brunei' },
    { value: 'BG', label: 'Bulgaria' },
    { value: 'BF', label: 'Burkina Faso' },
    { value: 'BI', label: 'Burundi' },
    { value: 'CV', label: 'Cabo Verde' },
    { value: 'KH', label: 'Cambodia' },
    { value: 'CM', label: 'Cameroon' },
    { value: 'CA', label: 'Canada' },
    { value: 'CF', label: 'Central African Republic' },
    { value: 'TD', label: 'Chad' },
    { value: 'CL', label: 'Chile' },
    { value: 'CN', label: 'China' },
    { value: 'CO', label: 'Colombia' },
    { value: 'KM', label: 'Comoros' },
    { value: 'CG', label: 'Congo' },
    { value: 'CR', label: 'Costa Rica' },
    { value: 'HR', label: 'Croatia' },
    { value: 'CU', label: 'Cuba' },
    { value: 'CY', label: 'Cyprus' },
    { value: 'CZ', label: 'Czech Republic' },
    { value: 'CD', label: 'Democratic Republic of the Congo' },
    { value: 'DK', label: 'Denmark' },
    { value: 'DJ', label: 'Djibouti' },
    { value: 'DM', label: 'Dominica' },
    { value: 'DO', label: 'Dominican Republic' },
    { value: 'EC', label: 'Ecuador' },
    { value: 'EG', label: 'Egypt' },
    { value: 'SV', label: 'El Salvador' },
    { value: 'GQ', label: 'Equatorial Guinea' },
    { value: 'ER', label: 'Eritrea' },
    { value: 'EE', label: 'Estonia' },
    { value: 'ET', label: 'Ethiopia' },
    { value: 'FJ', label: 'Fiji' },
    { value: 'FI', label: 'Finland' },
    { value: 'FR', label: 'France' },
    { value: 'GA', label: 'Gabon' },
    { value: 'GM', label: 'Gambia' },
    { value: 'GE', label: 'Georgia' },
    { value: 'DE', label: 'Germany' },
    { value: 'GH', label: 'Ghana' },
    { value: 'GR', label: 'Greece' },
    { value: 'GD', label: 'Grenada' },
    { value: 'GT', label: 'Guatemala' },
    { value: 'GN', label: 'Guinea' },
    { value: 'GW', label: 'Guinea-Bissau' },
    { value: 'GY', label: 'Guyana' },
    { value: 'HT', label: 'Haiti' },
    { value: 'HN', label: 'Honduras' },
    { value: 'HU', label: 'Hungary' },
    { value: 'IS', label: 'Iceland' },
    { value: 'IN', label: 'India' },
    { value: 'ID', label: 'Indonesia' },
    { value: 'IR', label: 'Iran' },
    { value: 'IQ', label: 'Iraq' },
    { value: 'IE', label: 'Ireland' },
    { value: 'IL', label: 'Israel' },
    { value: 'IT', label: 'Italy' },
    { value: 'JM', label: 'Jamaica' },
    { value: 'JP', label: 'Japan' },
    { value: 'JO', label: 'Jordan' },
    { value: 'KZ', label: 'Kazakhstan' },
    { value: 'KE', label: 'Kenya' },
    { value: 'KI', label: 'Kiribati' },
    { value: 'KP', label: 'North Korea' },
    { value: 'KR', label: 'South Korea' },
    { value: 'KW', label: 'Kuwait' },
    { value: 'KG', label: 'Kyrgyzstan' },
    { value: 'LA', label: 'Laos' },
    { value: 'LV', label: 'Latvia' },
    { value: 'LB', label: 'Lebanon' },
    { value: 'LS', label: 'Lesotho' },
    { value: 'LR', label: 'Liberia' },
    { value: 'LY', label: 'Libya' },
    { value: 'LI', label: 'Liechtenstein' },
    { value: 'LT', label: 'Lithuania' },
    { value: 'LU', label: 'Luxembourg' },
    { value: 'MG', label: 'Madagascar' },
    { value: 'MW', label: 'Malawi' },
    { value: 'MY', label: 'Malaysia' },
    { value: 'MV', label: 'Maldives' },
    { value: 'ML', label: 'Mali' },
    { value: 'MT', label: 'Malta' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MR', label: 'Mauritania' },
    { value: 'MU', label: 'Mauritius' },
    { value: 'MX', label: 'Mexico' },
    { value: 'FM', label: 'Micronesia' },
    { value: 'MD', label: 'Moldova' },
    { value: 'MC', label: 'Monaco' },
    { value: 'MN', label: 'Mongolia' },
    { value: 'ME', label: 'Montenegro' },
    { value: 'MA', label: 'Morocco' },
    { value: 'MZ', label: 'Mozambique' },
    { value: 'MM', label: 'Myanmar' },
    { value: 'NA', label: 'Namibia' },
    { value: 'NR', label: 'Nauru' },
    { value: 'NP', label: 'Nepal' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'NZ', label: 'New Zealand' },
    { value: 'NI', label: 'Nicaragua' },
    { value: 'NE', label: 'Niger' },
    { value: 'NG', label: 'Nigeria' },
    { value: 'MK', label: 'North Macedonia' },
    { value: 'NO', label: 'Norway' },
    { value: 'OM', label: 'Oman' },
    { value: 'PK', label: 'Pakistan' },
    { value: 'PW', label: 'Palau' },
    { value: 'PS', label: 'Palestine' },
    { value: 'PA', label: 'Panama' },
    { value: 'PG', label: 'Papua New Guinea' },
    { value: 'PY', label: 'Paraguay' },
    { value: 'PE', label: 'Peru' },
    { value: 'PH', label: 'Philippines' },
    { value: 'PL', label: 'Poland' },
    { value: 'PT', label: 'Portugal' },
    { value: 'QA', label: 'Qatar' },
    { value: 'RO', label: 'Romania' },
    { value: 'RU', label: 'Russia' },
    { value: 'RW', label: 'Rwanda' },
    { value: 'KN', label: 'Saint Kitts and Nevis' },
    { value: 'LC', label: 'Saint Lucia' },
    { value: 'VC', label: 'Saint Vincent and the Grenadines' },
    { value: 'WS', label: 'Samoa' },
    { value: 'SM', label: 'San Marino' },
    { value: 'ST', label: 'Sao Tome and Principe' },
    { value: 'SA', label: 'Saudi Arabia' },
    { value: 'SN', label: 'Senegal' },
    { value: 'RS', label: 'Serbia' },
    { value: 'SC', label: 'Seychelles' },
    { value: 'SL', label: 'Sierra Leone' },
    { value: 'SG', label: 'Singapore' },
    { value: 'SK', label: 'Slovakia' },
    { value: 'SI', label: 'Slovenia' },
    { value: 'SB', label: 'Solomon Islands' },
    { value: 'SO', label: 'Somalia' },
    { value: 'ZA', label: 'South Africa' },
    { value: 'SS', label: 'South Sudan' },
    { value: 'ES', label: 'Spain' },
    { value: 'LK', label: 'Sri Lanka' },
    { value: 'SD', label: 'Sudan' },
    { value: 'SR', label: 'Suriname' },
    { value: 'SZ', label: 'Eswatini' },
    { value: 'SE', label: 'Sweden' },
    { value: 'CH', label: 'Switzerland' },
    { value: 'SY', label: 'Syria' },
    { value: 'TW', label: 'Taiwan' },
    { value: 'TJ', label: 'Tajikistan' },
    { value: 'TZ', label: 'Tanzania' },
    { value: 'TH', label: 'Thailand' },
    { value: 'TL', label: 'Timor-Leste' },
    { value: 'TG', label: 'Togo' },
    { value: 'TO', label: 'Tonga' },
    { value: 'TT', label: 'Trinidad and Tobago' },
    { value: 'TN', label: 'Tunisia' },
    { value: 'TR', label: 'Turkey' },
    { value: 'TM', label: 'Turkmenistan' },
    { value: 'TV', label: 'Tuvalu' },
    { value: 'UG', label: 'Uganda' },
    { value: 'UA', label: 'Ukraine' },
    { value: 'AE', label: 'United Arab Emirates' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'US', label: 'United States' },
    { value: 'UY', label: 'Uruguay' },
    { value: 'UZ', label: 'Uzbekistan' },
    { value: 'VU', label: 'Vanuatu' },
    { value: 'VA', label: 'Vatican City' },
    { value: 'VE', label: 'Venezuela' },
    { value: 'VN', label: 'Vietnam' },
    { value: 'YE', label: 'Yemen' },
    { value: 'ZM', label: 'Zambia' },
    { value: 'ZW', label: 'Zimbabwe' }
  ];

  // Filtered countries based on search query
  const filteredCountries = countries.filter(country =>
    country.label.toLowerCase().includes(countrySearchQuery.toLowerCase())
  );

  // Handle clicking outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setCountryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Form validation effect
  useEffect(() => {
    const errors: Record<string, string> = {};
    
    // Check first name
    if (bookingForm.firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }
    
    // Check email
    if (bookingForm.email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(bookingForm.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Check company
    if (bookingForm.company.trim() === '') {
      errors.company = 'Company name is required';
    }
    
    // Check phone
    if (bookingForm.phone.trim() === '') {
      errors.phone = 'Phone number is required';
    }
    
    // Check country
    if (bookingForm.country.trim() === '') {
      errors.country = 'Please select your country';
    }
    
    // Check project timeline
    if (bookingForm.projectTimeline.trim() === '') {
      errors.projectTimeline = 'Please select a project timeline';
    }
    
    // Check consent
    if (!bookingForm.consent) {
      errors.consent = 'You must agree to receive marketing communications';
    }
    
    setFormErrors(errors);
    setIsFormValidState(Object.keys(errors).length === 0);
  }, [bookingForm]);

  // Detect user's current location and set default country
  useEffect(() => {
    const detectUserLocation = async () => {
      try {
        if (!navigator.geolocation) return;
        
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          
          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            
            if (response.ok) {
              const data = await response.json();
              const countryCode = data.countryCode;
              
              const foundCountry = countries.find(c => c.value === countryCode);
              if (foundCountry) {
                setBookingForm(prev => ({ ...prev, country: countryCode }));
                setPhoneCountry(countryCode.toLowerCase());
              }
            }
          } catch (error) {
            // Fallback: detect from timezone
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const timezoneToCountry: { [key: string]: string } = {
              'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US',
              'America/Los_Angeles': 'US', 'Europe/London': 'GB', 'Europe/Paris': 'FR',
              'Europe/Berlin': 'DE', 'Asia/Tokyo': 'JP', 'Asia/Shanghai': 'CN',
              'Asia/Singapore': 'SG', 'Asia/Kolkata': 'IN', 'Australia/Sydney': 'AU'
            };
            
            const countryCode = timezoneToCountry[timezone];
            if (countryCode) {
              setBookingForm(prev => ({ ...prev, country: countryCode }));
              setPhoneCountry(countryCode.toLowerCase());
            }
          }
        });
      } catch (error) {
        console.log('Location detection error:', error);
      }
    };

    if (!bookingForm.country || bookingForm.country === 'IN') {
      detectUserLocation();
    }
  }, []);

  // Generate realistic time slots for the next few weeks
  const generateTimeSlots = () => {
    const weeks: TimeSlot[][] = [];
    const today = new Date();
    const currentHour = today.getHours();
    
    for (let week = 0; week < 3; week++) {
        const weekSlots: TimeSlot[] = [];
      
        for (let day = 0; day < 7; day++) { // Full week including weekends
          const currentDate = new Date(today);
          currentDate.setDate(today.getDate() + (week * 7) + day);
          
          const isToday = currentDate.toDateString() === today.toDateString();
          const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday
          const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
          
          const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
          const dateStr = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
          
          // Business hours: 9 AM to 5 PM
          const timeSlots = [];
          for (let hour = 9; hour <= 17; hour++) {
            // Skip lunch hour
            if (hour !== 12) {
              const time = `${hour === 12 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
              const isPastTime = isToday && hour <= currentHour;
              const randomAvailability = Math.random() > 0.3; // 70% chance of availability

              timeSlots.push({
                time,
                // Slot is unavailable if:
                // 1. It's a weekend
                // 2. It's today and the time has passed
                // 3. Random availability (simulating pre-booked slots)
                available: !isWeekend && !isPastTime && randomAvailability
              });
            }
          }
          
          weekSlots.push({
            day: dayName,
            date: dateStr,
            isToday,
            dayOfWeek,
            times: timeSlots
          });
        }
        weeks.push(weekSlots);
      }    return weeks;
  };

  const [timeSlots] = useState<TimeSlot[][]>(generateTimeSlots());

  const handleSlotSelection = (day: string, date: string, time: string): void => {
    setSelectedSlot({ day, date, time });
  };

  const handleFormChange = (field: keyof BookingForm, value: any): void => {
    setBookingForm(prev => ({ ...prev, [field]: value }));
    setFormErrors(prev => ({ ...prev, [field]: '' })); // Clear previous errors
  };

  const handlePhoneChange = (value: string, countryData: any) => {
    handleFormChange('phone', value);
    if (countryData?.countryCode) {
      setPhoneCountry(countryData.countryCode);
    }
  };

  const handleCountryChange = (value: string) => {
    handleFormChange('country', value);
    setPhoneCountry(value.toLowerCase());
    // remove any leading country code from phone when changing
    if (bookingForm.phone) {
      const phoneWithoutCode = bookingForm.phone.replace(/^\+\d+/, '');
      handleFormChange('phone', phoneWithoutCode);
    }
  };

  const handleNextStep = (): void => {
    if (currentStep === 'schedule' && selectedSlot) {
      setCurrentStep('details');
    } else if (currentStep === 'details') {
      setCurrentStep('confirmation');
    }
  };

  const handlePrevStep = (): void => {
    if (currentStep === 'details') {
      setCurrentStep('schedule');
    } else if (currentStep === 'confirmation') {
      setCurrentStep('details');
    }
  };

  const handleBookingSubmit = (): void => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { selectedSlot, bookingForm });
    setShowSuccessModal(true);
  };

  const resetModal = (): void => {
    setCurrentStep('schedule');
    setSelectedSlot(null);
    setSelectedWeek(0);
    setShowSuccessModal(false);
    setCountrySearchQuery('');
    setCountryDropdownOpen(false);
    setFormErrors({});
    setIsFormValidState(false);
    setBookingForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      country: 'IN',
      projectTimeline: '',
      consent: false,
    });
    setPhoneCountry('in');
  };

  const handleSuccessClose = (): void => {
    resetModal();
    onClose();
  };

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Dialog modal open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogOverlay className="bg-black/50 fixed inset-0 z-[999]" />
        <DialogContent className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl shadow-xl border-none w-[99vw] max-w-[1800px] min-w-[1200px] h-[98vh] p-0 overflow-hidden flex flex-col z-[1000]">
        {/* Fixed Header */}
        <DialogHeader className="sticky top-0 z-[1001] bg-white px-6 py-4 border-b shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mr-4">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <DialogTitle className="text-2xl text-gray-800">Schedule Your Discovery Call</DialogTitle>
                <p className="text-gray-600 mt-1">
                  {currentStep === 'schedule' && 'Choose your preferred time slot'}
                  {currentStep === 'details' && 'Enter your contact information'}
                  {currentStep === 'confirmation' && 'Confirm your booking'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                <Clock className="w-4 h-4 mr-1" />
                Free, 30 minutes
              </Badge>
            </div>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center mt-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === 'schedule' ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'
            }`}>
              1
            </div>
            <div className={`flex-1 h-2 mx-2 rounded ${
              currentStep === 'schedule' ? 'bg-gray-200' : 'bg-orange-500'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === 'schedule' ? 'bg-gray-200 text-gray-600' : 
              currentStep === 'details' ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'
            }`}>
              2
            </div>
            <div className={`flex-1 h-2 mx-2 rounded ${
              currentStep === 'confirmation' ? 'bg-orange-500' : 'bg-gray-200'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === 'confirmation' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
          <div className="p-8">
            {/* Step 1: Schedule Selection */}
            {currentStep === 'schedule' && (
              <div className="space-y-8">
                {/* Week Navigation */}
                <div className="flex justify-between items-center bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedWeek(Math.max(0, selectedWeek - 1))}
                    disabled={selectedWeek === 0}
                    className="min-w-[120px]"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <div className="text-center px-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {timeSlots[selectedWeek]?.[0]?.date.split(' ')[0]} - {timeSlots[selectedWeek]?.[6]?.date}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">All times shown in your local timezone</p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedWeek(Math.min(2, selectedWeek + 1))}
                    disabled={selectedWeek === 2}
                    className="min-w-[120px]"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-4">
                  {timeSlots[selectedWeek]?.map((day, dayIndex) => (
                    <div key={dayIndex} className={`p-4 rounded-xl border transition-all duration-200 ${
                      selectedSlot?.day === day.day && selectedSlot?.date === day.date
                        ? 'bg-blue-50 border-blue-300 shadow-md transform scale-[1.02]'
                        : day.isToday 
                        ? 'bg-blue-50/50 border-blue-200 hover:shadow-md hover:border-blue-300' 
                        : day.dayOfWeek === 0 || day.dayOfWeek === 6
                        ? 'bg-gray-50/50 border-gray-200'
                        : 'bg-white border-gray-100 hover:shadow-md hover:border-blue-200'
                    }`}>
                      <div className="text-center mb-3">
                        <p className={`text-sm font-medium ${
                          day.isToday ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          {day.day}
                        </p>
                        <p className={`text-2xl font-bold ${
                          day.isToday ? 'text-blue-700' : 'text-gray-900'
                        }`}>
                          {day.date.split(' ')[1]}
                        </p>
                      </div>
                      <div className="space-y-2">
                        {day.times.map((slot, timeIndex) => (
                          <Button
                            key={timeIndex}
                            variant={
                              selectedSlot?.day === day.day && 
                              selectedSlot?.date === day.date && 
                              selectedSlot?.time === slot.time 
                                ? "default" 
                                : "outline"
                            }
                            className={`w-full text-sm font-medium transition-all duration-200 relative group ${
                              !slot.available 
                                ? 'opacity-50 cursor-not-allowed bg-gray-50 text-gray-400 border-gray-200' 
                                : selectedSlot?.day === day.day && 
                                  selectedSlot?.date === day.date && 
                                  selectedSlot?.time === slot.time
                                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-md scale-105'
                                  : 'hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:scale-[1.02]'
                            }`}
                            disabled={!slot.available}
                            onClick={() => slot.available && handleSlotSelection(day.day, day.date, slot.time)}
                          >
                            {slot.time}
                            {!slot.available && (
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-50/90 backdrop-blur-[1px] rounded border border-gray-200">
                                <span className="text-xs text-gray-500 flex items-center">
                                  {day.isToday ? (
                                    <>
                                      <Clock className="w-3 h-3 mr-1" />
                                      Past
                                    </>
                                  ) : (
                                    <>
                                      <User className="w-3 h-3 mr-1" />
                                      Booked
                                    </>
                                  )}
                                </span>
                              </div>
                            )}
                          </Button>
                        ))}
                        {(day.dayOfWeek === 0 || day.dayOfWeek === 6) && (
                          <div className="mt-2 p-2 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="text-xs text-gray-500 text-center flex items-center justify-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              Weekend - Closed
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              {/* Selected Slot Display */}
              {selectedSlot && (
                <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Selected Time Slot:</h4>
                        <p className="text-gray-700 text-lg">
                          {selectedSlot.day}, {selectedSlot.date} at {selectedSlot.time}
                        </p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Step 2: Contact Details */}
          {currentStep === 'details' && (
            <div className="space-y-6">
              {/* Row: First/Last Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={bookingForm.firstName}
                    onChange={(e) => handleFormChange('firstName', e.target.value)}
                    className={`mt-2 ${formErrors.firstName ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                    placeholder="Enter your first name"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={bookingForm.lastName}
                    onChange={(e) => handleFormChange('lastName', e.target.value)}
                    className={`mt-2 ${formErrors.lastName ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                    placeholder="Enter your last name"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Row: Country / Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-700">Country *</Label>
                  <div className="mt-2">
                    <div className="relative" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:outline-none transition text-left bg-white flex items-center justify-between ${
                          formErrors.country 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                            : 'border-gray-300 focus:border-indigo-400 focus:ring-indigo-100'
                        }`}
                      >
                        <span className={bookingForm.country ? 'text-gray-900' : 'text-gray-500'}>
                          {(() => {
                            const country = countries.find(c => c.value === bookingForm.country);
                            return country ? country.label : 'Select your country';
                          })()}
                        </span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {countryDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-[9999999] max-h-60 overflow-y-auto">
                          <div className="p-2">
                            <input
                              type="text"
                              placeholder="Search countries..."
                              className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
                              value={countrySearchQuery}
                              onChange={(e) => setCountrySearchQuery(e.target.value)}
                            />
                          </div>
                          {filteredCountries.map((country) => (
                            <button
                              key={country.value}
                              type="button"
                              onClick={() => {
                                handleCountryChange(country.value);
                                setCountryDropdownOpen(false);
                                setCountrySearchQuery(''); // Clear search query after selection
                              }}
                              className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors"
                            >
                              {country.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {formErrors.country && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.country}</p>
                  )}
                </div>
                <div>
                  <Label className="text-sm font-semibold text-gray-700">Phone Number *</Label>
                  <div className="mt-2">
                    <PhoneInput
                      country={phoneCountry}
                      value={bookingForm.phone}
                      onChange={handlePhoneChange}
                      inputClass={`!w-full !py-2 !pl-14 !pr-4 !rounded-lg !border !outline-none !transition ${
                        formErrors.phone 
                          ? '!border-red-500 focus:!border-red-500 focus:!ring-red-200' 
                          : '!border-gray-300 focus:!border-indigo-400 focus:!ring-indigo-100'
                      }`}
                      buttonClass="!border-none !bg-transparent"
                      dropdownClass="!rounded-lg !shadow-lg !bg-white"
                      containerClass="!w-full"
                      enableSearch
                      countryCodeEditable={true}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: false,
                        autoComplete: 'tel',
                      }}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row: Company / Business Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={bookingForm.company}
                    onChange={(e) => handleFormChange('company', e.target.value)}
                    className={`mt-2 ${formErrors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                    placeholder="Your company name"
                  />
                  {formErrors.company && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.company}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Business Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    className={`mt-2 ${formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                    placeholder="your.email@company.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Project Timeline (Radio) */}
              <div>
                <Label className="text-sm font-semibold text-gray-700">Project Timeline *</Label>
                <RadioGroup
                  className="mt-2 space-y-3"
                  value={bookingForm.projectTimeline}
                  onValueChange={(val) => handleFormChange('projectTimeline', val)}
                >
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="immediate" id="timeline-immediate" />
                    <Label htmlFor="timeline-immediate" className="text-sm">Immediate (Within 1 month)</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="planned" id="timeline-planned" />
                    <Label htmlFor="timeline-planned" className="text-sm">Planned (1-3 months)</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="researching" id="timeline-researching" />
                    <Label htmlFor="timeline-researching" className="text-sm">Researching Options (3-6 months)</Label>
                  </div>
                </RadioGroup>
                {formErrors.projectTimeline && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.projectTimeline}</p>
                )}
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={bookingForm.consent}
                    onCheckedChange={(checked) => handleFormChange('consent', Boolean(checked))}
                  />
                  <span className="text-gray-700 text-sm">
                    By submitting your personal data you agree to receive marketing communications. *
                  </span>
                </label>
                {formErrors.consent && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.consent}</p>
                )}
              </div>

              {/* Additional Information (optional) */}
              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                  Additional Information
                </Label>
                <Textarea
                  id="message"
                  value={bookingForm.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  className="mt-2"
                  rows={4}
                  placeholder="Tell us about your automation needs, current challenges, or any specific questions you have..."
                />
              </div>

              {/* Selected Slot Reminder */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-blue-800">Scheduled for:</p>
                      <p className="text-blue-700">
                        {selectedSlot?.day}, {selectedSlot?.date} at {selectedSlot?.time}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 'confirmation' && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Almost There!</h3>
                <p className="text-gray-600">Please review your booking details before confirming</p>
              </div>

              <Card className="text-left bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardContent className="p-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Call Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                          <span>{selectedSlot?.day}, {selectedSlot?.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-blue-600 mr-2" />
                          <span>{selectedSlot?.time} (30 minutes)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <User className="w-4 h-4 text-blue-600 mr-2" />
                          <span>{bookingForm.firstName} {bookingForm.lastName}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-blue-600 mr-2" />
                          <span>{bookingForm.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-blue-600 mr-2" />
                          <span>{bookingForm.phone}</span>
                        </div>
                        {bookingForm.company && (
                          <div className="flex items-center">
                            <Building className="w-4 h-4 text-blue-600 mr-2" />
                            <span>{bookingForm.company}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <span className="w-4 h-4 mr-2" />
                          <span>Country: {bookingForm.country}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-4 h-4 mr-2" />
                          <span>Timeline: {bookingForm.projectTimeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {bookingForm.message && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Additional Information</h4>
                      <p className="text-sm text-gray-700 bg-white p-3 rounded border">
                        {bookingForm.message}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="border-t p-6 bg-gradient-to-b from-white to-gray-50 sticky bottom-0 flex-shrink-0 shadow-[0_-1px_3px_rgba(0,0,0,0.1)]">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <Button 
              variant="outline" 
              onClick={currentStep === 'schedule' ? onClose : handlePrevStep}
              className="min-w-[100px] border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentStep === 'schedule' ? 'Cancel' : 'Back'}
            </Button>
            
            <Button 
              onClick={currentStep === 'confirmation' ? handleBookingSubmit : handleNextStep}
              disabled={
                (currentStep === 'schedule' && !selectedSlot) ||
                (currentStep === 'details' && !isFormValidState)
              }
              className="min-w-[140px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg"
            >
              {currentStep === 'confirmation' ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confirm Booking
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
        </div>
      </DialogContent>
    </Dialog>
    {/* Success Modal */}
    {showSuccessModal && (
      <Dialog modal open={showSuccessModal} onOpenChange={(open) => !open && handleSuccessClose()}>
        <DialogOverlay className="bg-black/50 fixed inset-0 z-[1002]" />
        <DialogContent className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl shadow-xl border-none w-[600px] p-8 z-[1003]">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600">Your discovery call has been scheduled successfully.</p>
            </div>

            <Card className="text-left bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mt-6">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Call Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                        <span>{selectedSlot?.day}, {selectedSlot?.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-blue-600 mr-2" />
                        <span>{selectedSlot?.time} (30 minutes)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Your Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-blue-600 mr-2" />
                        <span>{bookingForm.firstName} {bookingForm.lastName}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-blue-600 mr-2" />
                        <span>{bookingForm.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 space-y-4">
              <p className="text-sm text-gray-600">
                A calendar invitation has been sent to your email address. You'll receive a reminder 24 hours before the call.
              </p>
              <Button 
                onClick={handleSuccessClose}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg py-6"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )}
    </>
  );
};

export default ScheduleCallModal;
