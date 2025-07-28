import React, { useState, useEffect } from 'react';
import { Calendar, Clock, X, User, Mail, Phone, Building, MessageSquare, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface TimeSlot {
  day: string;
  date: string;
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
}

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleCallModal: React.FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<'schedule' | 'details' | 'confirmation'>('schedule');
  const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  // Generate dynamic time slots for the next few weeks
  const generateTimeSlots = (): TimeSlot[][] => {
    const weeks: TimeSlot[][] = [];
    const today = new Date();
    
    for (let week = 0; week < 3; week++) {
      const weekSlots: TimeSlot[] = [];
      
      for (let day = 0; day < 5; day++) { // Monday to Friday
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + (week * 7) + day + 1);
        
        const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
        const dateStr = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        const times = [
          { time: '9:00 AM', available: Math.random() > 0.3 },
          { time: '10:00 AM', available: Math.random() > 0.2 },
          { time: '11:00 AM', available: Math.random() > 0.4 },
          { time: '1:00 PM', available: Math.random() > 0.3 },
          { time: '2:00 PM', available: Math.random() > 0.2 },
          { time: '3:00 PM', available: Math.random() > 0.3 },
          { time: '4:00 PM', available: Math.random() > 0.4 },
          { time: '5:00 PM', available: Math.random() > 0.5 }
        ];
        
        weekSlots.push({
          day: dayName,
          date: dateStr,
          times
        });
      }
      weeks.push(weekSlots);
    }
    
    return weeks;
  };

  const [timeSlots] = useState<TimeSlot[][]>(generateTimeSlots());

  const handleSlotSelection = (day: string, date: string, time: string): void => {
    setSelectedSlot({ day, date, time });
  };

  const handleFormChange = (field: keyof BookingForm, value: string): void => {
    setBookingForm(prev => ({ ...prev, [field]: value }));
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
    // For demo purposes, we'll just close the modal
    setTimeout(() => {
      onClose();
      resetModal();
    }, 2000);
  };

  const resetModal = (): void => {
    setCurrentStep('schedule');
    setSelectedSlot(null);
    setSelectedWeek(0);
    setBookingForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  const isFormValid = (): boolean => {
    return bookingForm.firstName.trim() !== '' && 
           bookingForm.lastName.trim() !== '' && 
           bookingForm.email.trim() !== '' && 
           bookingForm.phone.trim() !== '';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white">
        {/* Header */}
        <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mr-4">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-2xl text-gray-800">Schedule Your Discovery Call</CardTitle>
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
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Progress Indicator */}
          <div className="flex items-center mt-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === 'schedule' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
            }`}>
              1
            </div>
            <div className={`flex-1 h-2 mx-2 rounded ${
              currentStep === 'schedule' ? 'bg-gray-200' : 'bg-green-500'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === 'schedule' ? 'bg-gray-200 text-gray-600' : 
              currentStep === 'details' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
            }`}>
              2
            </div>
            <div className={`flex-1 h-2 mx-2 rounded ${
              currentStep === 'confirmation' ? 'bg-green-500' : 'bg-gray-200'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep === 'confirmation' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Step 1: Schedule Selection */}
          {currentStep === 'schedule' && (
            <div>
              {/* Week Navigation */}
              <div className="flex justify-between items-center mb-6">
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedWeek(Math.max(0, selectedWeek - 1))}
                  disabled={selectedWeek === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Week
                </Button>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Week of {timeSlots[selectedWeek]?.[0]?.date || 'Loading...'}
                  </h3>
                  <p className="text-gray-600">All times shown in your local timezone</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedWeek(Math.min(2, selectedWeek + 1))}
                  disabled={selectedWeek === 2}
                >
                  Next Week
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Time Slots Grid */}
              <div className="grid md:grid-cols-5 gap-6">
                {timeSlots[selectedWeek]?.map((day: TimeSlot, dayIndex: number) => (
                  <div key={dayIndex} className="text-center">
                    <h4 className="font-bold text-gray-800 mb-2 pb-2 border-b border-gray-200">
                      {day.day}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">{day.date}</p>
                    <div className="space-y-2">
                      {day.times.map((slot, timeIndex: number) => (
                        <Button
                          key={timeIndex}
                          variant={
                            selectedSlot?.day === day.day && 
                            selectedSlot?.date === day.date && 
                            selectedSlot?.time === slot.time 
                              ? "default" 
                              : "outline"
                          }
                          className={`w-full text-sm ${
                            !slot.available 
                              ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' 
                              : selectedSlot?.day === day.day && 
                                selectedSlot?.date === day.date && 
                                selectedSlot?.time === slot.time
                                ? 'bg-blue-500 text-white hover:bg-blue-600'
                                : 'hover:bg-blue-50 hover:border-blue-300'
                          }`}
                          disabled={!slot.available}
                          onClick={() => slot.available && handleSlotSelection(day.day, day.date, slot.time)}
                        >
                          {slot.time}
                          {!slot.available && <span className="ml-1 text-xs">(Booked)</span>}
                        </Button>
                      ))}
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
                    className="mt-2"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={bookingForm.lastName}
                    onChange={(e) => handleFormChange('lastName', e.target.value)}
                    className="mt-2"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    className="mt-2"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => handleFormChange('phone', e.target.value)}
                    className="mt-2"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                  Company Name
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={bookingForm.company}
                  onChange={(e) => handleFormChange('company', e.target.value)}
                  className="mt-2"
                  placeholder="Your company name"
                />
              </div>

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
        </CardContent>

        {/* Footer Actions */}
        <div className="border-t p-6 bg-gray-50">
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={currentStep === 'schedule' ? onClose : handlePrevStep}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {currentStep === 'schedule' ? 'Cancel' : 'Back'}
            </Button>
            
            <Button 
              onClick={currentStep === 'confirmation' ? handleBookingSubmit : handleNextStep}
              disabled={
                (currentStep === 'schedule' && !selectedSlot) ||
                (currentStep === 'details' && !isFormValid())
              }
              className="bg-blue-600 hover:bg-blue-700"
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
      </Card>
    </div>
  );
};

export default ScheduleCallModal;