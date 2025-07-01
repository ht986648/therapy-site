"use client"
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Heart, Shield } from 'lucide-react';

export default function ContactFormWithRecaptcha() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: '',
    agreeToContact: false,
    recaptchaVerified: false
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';
    if (!formData.recaptchaVerified) newErrors.recaptchaVerified = 'Please verify that you are not a robot';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would normally send the form data to your server
      console.log('Form submitted:', formData);
    }
  };

  const handleRecaptchaChange = () => {
    setFormData(prev => ({
      ...prev,
      recaptchaVerified: !prev.recaptchaVerified
    }));
    if (errors.recaptchaVerified) {
      setErrors(prev => ({
        ...prev,
        recaptchaVerified: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700">
            Simply fill out the brief fields below and Dr. Norman will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.
          </p>
        </div>

        <div>
          {isSubmitted ? (
            <Card className="p-8 text-center border-0 shadow-lg">
              <div className="text-amber-500 mb-4">
                <Heart className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Thank You!</h3>
              <p className="text-gray-700">
                Your message has been received. I'll get back to you within 24 hours to schedule your free consultation.
              </p>
            </Card>
          ) : (
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-semibold text-blue-900">Send a Message</CardTitle>
                <CardDescription className="text-gray-700">
                  Fill out the form below and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-medium text-blue-900">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-medium text-blue-900">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 234-5678"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium text-blue-900">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium text-blue-900">Message *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="font-medium text-blue-900">Preferred Contact Time *</Label>
                    <Input
                      id="preferredTime"
                      placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
                      value={formData.preferredTime}
                      onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                      className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.preferredTime ? 'border-red-500' : ''}`}
                    />
                    <p className="text-sm text-gray-600">Let us know when you're typically available for a call or consultation</p>
                    {errors.preferredTime && <p className="text-sm text-red-500">{errors.preferredTime}</p>}
                  </div>

                  {/* reCAPTCHA Section */}
                  <div className="space-y-4">
                    <div className={`p-4 border-2 rounded-lg bg-gray-50 ${errors.recaptchaVerified ? 'border-red-500' : 'border-gray-200'}`}>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="recaptcha"
                          checked={formData.recaptchaVerified}
                          onCheckedChange={handleRecaptchaChange}
                          className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <Label htmlFor="recaptcha" className="text-sm font-medium text-gray-900 cursor-pointer">
                          I'm not a robot
                        </Label>
                        <div className="ml-auto">
                          <Shield className="w-8 h-8 text-gray-400" />
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
                        <span>reCAPTCHA</span>
                        <div className="text-right">
                          <div>Privacy - Terms</div>
                        </div>
                      </div>
                    </div>
                    {errors.recaptchaVerified && (
                      <p className="text-sm text-red-500">{errors.recaptchaVerified}</p>
                    )}
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agree"
                      checked={formData.agreeToContact}
                      onCheckedChange={(checked) => handleInputChange('agreeToContact', checked)}
                      className={`mt-1 ${errors.agreeToContact ? 'border-red-500' : ''}`}
                    />
                    <div className="space-y-1">
                      <Label 
                        htmlFor="agree" 
                        className="text-sm leading-relaxed cursor-pointer text-blue-900"
                      >
                        I agree to be contacted via phone or email to schedule my consultation *
                      </Label>
                      {errors.agreeToContact && (
                        <p className="text-sm text-red-500">{errors.agreeToContact}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 flex items-start space-x-2">
                    <span className="text-blue-500 mt-0.5">ℹ</span>
                    <span>By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman</span>
                  </p>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}