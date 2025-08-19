import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    visitType: 'campus',
    name: '',
    mobile: '',
    date: '',
    hour: 'HH',
    minute: 'MM',
    period: 'AM',
    agreed: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md bg-white rounded-lg shadow-sm p-4">
        <h1 className="text-2xl font-medium text-gray-600 mb-8">Schedule your visit</h1>
        
        <div className='w-[300px] md:w-[400px]'>
          {/* Visit Type Radio Buttons */}
          <div className="flex gap-8 mb-8">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="visitType"
                value="campus"
                checked={formData.visitType === 'campus'}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 mr-3"
              />
              <span className="text-gray-700">Schedule visit</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="visitType"
                value="video"
                checked={formData.visitType === 'video'}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 mr-3"
              />
              <span className="text-gray-700">Video tour</span>
            </label>
          </div>

          {/* Name Input */}
          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Mobile Number Input */}
          <div className="mb-5">
            <div className="flex w-full">
              <div className="bg-gray-200 border-2 border-r-0 border-gray-200 rounded-l-lg px-4 py-4 text-gray-600 font-medium">
                +91
              </div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="flex-1 p-4 border-2 border-l-0 border-gray-200 rounded-r-lg bg-gray-50 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Date Input */}
          <div className="mb-5 relative">
            <input
              type="date"
              name="date"
              placeholder="Select Date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full p-4 pr-12 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
            />
          </div>

          {/* Time Selection */}
          <div className="flex flex-wrap gap-3 mb-8">
            <select
              name="hour"
              value={formData.hour}
              onChange={handleInputChange}
              className="flex-1 p-4 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="HH">HH</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                  {String(i + 1).padStart(2, '0')}
                </option>
              ))}
            </select>
            
            <select
              name="minute"
              value={formData.minute}
              onChange={handleInputChange}
              className="flex-1 p-4 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="MM">MM</option>
              {['00', '15', '30', '45'].map(minute => (
                <option key={minute} value={minute}>{minute}</option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, period: 'AM' }))}
              className={`px-6 py-4 rounded-lg font-medium transition-colors ${
                formData.period === 'AM' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              AM
            </button>
            
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, period: 'PM' }))}
              className={`px-6 py-4 rounded-lg font-medium transition-colors ${
                formData.period === 'PM' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              PM
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-8">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleInputChange}
                className="w-5 h-5 text-blue-600 mt-1 mr-3 rounded"
              />
              <span className="text-gray-600 text-sm leading-relaxed">
                I have read and agreed to the{' '}
                <a href="#" className="text-orange-400 underline hover:text-orange-500">
                  terms & conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-orange-400 underline hover:text-orange-500">
                  privacy policy
                </a>
                . I hereby confirm to proceed.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.agreed}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;