"use client";
import * as React from 'react';

import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { MapPin, Phone, Mail, Clock, Star, Heart, Shield, Users, ChevronDown, Brain, Users2, Sparkles, Award, BookOpen, Calendar, CheckCircle } from 'lucide-react';
import ContactFormWithRecaptcha from "../components/form-validation";
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what brings you here';
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = 'Preferred contact time is required';
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };


  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-medium text-gray-900">
              Dr. Serena Blake, PsyD
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6953848/pexels-photo-6953848.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-32">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Dr. Serena Blake, PsyD
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-100 font-light">
              Clinical Psychologist
            </p>
            
            <div className="max-w-3xl mx-auto pt-6">
              <p className="text-xl md:text-2xl text-blue-50 leading-relaxed">
                Compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from trauma
              </p>
            </div>
            
            <div className="pt-12">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-blue-900 px-12 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-purple-100 to-pink-100 rounded-full opacity-15 blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
                  About Dr. Blake
                </h2>
                
                <div className="flex items-center mb-8">
                  <div className="h-1 w-12 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></div>
                  <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mx-2"></div>
                  <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl text-gray-800 font-medium">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, dedicated to creating transformative healing experiences through compassionate, evidence-based care.
                </p>
                <p>
                  With eight years of specialized experience and over 500 successful client sessions, Dr. Blake expertly blends cognitive-behavioral therapy, mindfulness practices, and trauma-informed approaches to meet each client's unique needs.
                </p>
                <p>
                  Whether you connect in her welcoming Maplewood Drive office or through secure virtual sessions, Dr. Blake is committed to providing a safe, supportive sanctuary where you can overcome anxiety, strengthen relationships, and embark on your journey toward healing and personal growth.
                </p>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-1">8+</div>
                    <div className="text-gray-600 font-medium">Years Experience</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-1">500+</div>
                    <div className="text-gray-600 font-medium">Client Sessions</div>
                  </CardContent>
                </Card>
              </div>

              {/* Credentials & Approach */}
              <div className="space-y-6 pt-8">
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-2 text-lg">Therapeutic Approach</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Integrating evidence-based modalities including CBT, mindfulness-based interventions, and trauma-informed care to create personalized treatment plans that honor your unique journey.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-2 text-lg">Flexible Scheduling</h3>
                        <div className="text-gray-700 space-y-1">
                          <p><span className="font-medium">In-person:</span> Tue & Thu, 10 AM–6 PM</p>
                          <p><span className="font-medium">Virtual:</span> Mon, Wed & Fri, 1 PM–5 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Quick Info */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-4 text-lg">Ready to Connect?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-200" />
                    <span>(323) 555-0192</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-200" />
                    <span>serena@blakepsychology.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-200" />
                    <span>1287 Maplewood Drive, Los Angeles, CA</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image & Visual Elements */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image */}
                <div className="relative z-10">
                  <img 
                    src="https://quilted-libra-91f.notion.site/image/attachment%3Afcdeffc3-7fce-4ca7-a4ea-a0888f182399%3Aimage.png?table=block&id=21f4db5d-d615-8076-8a1c-fd184ea4e5df&spaceId=e434db5d-d615-814a-b090-0003034cd63a&width=2000&userId=&cache=v2" 
                    alt="Dr. Serena Blake" 
                    className="w-96 h-[500px] object-cover rounded-2xl shadow-2xl"
                  />
                  
                  {/* Floating credential badges */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-blue-900">Licensed PsyD</div>
                        <div className="text-xs text-gray-600">California</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-emerald-900">Specialized Care</div>
                        <div className="text-xs text-gray-600">Evidence-Based</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute -inset-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl opacity-20 -z-10"></div>
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100 to-orange-100 rounded-2xl opacity-30 -z-10 rotate-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
      <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-100 rounded-full opacity-10 blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">
              Areas of Focus
            </h2>
            
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></div>
              <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mx-2"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-transparent rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Compassionate, evidence-based therapy approaches designed to support your journey toward healing, growth, and emotional well-being
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Anxiety & Stress Management */}
            <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Peaceful meditation and mindfulness practice" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-blue-900 group-hover:text-blue-800 transition-colors duration-300">
                  Therapy for Anxiety and Stress
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                  Discover inner peace through proven mindfulness techniques and personalized coping strategies. We'll work together to identify your unique triggers and build a toolkit for lasting calm and confidence in daily life.
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    $200
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Individual Session
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Relationship Counseling */}
            <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Couple holding hands in supportive therapy session" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Users2 className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-blue-900 group-hover:text-emerald-800 transition-colors duration-300">
                  Therapy for Couples and Grief
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                  Transform your connections through enhanced communication and deeper understanding. Whether navigating partnership challenges, family dynamics, or processing loss, we'll build bridges to stronger, more fulfilling relationships and healing.
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                    $240
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Couples Session
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trauma Recovery */}
            <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Serene therapy space promoting healing and recovery" 
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-blue-900 group-hover:text-purple-800 transition-colors duration-300">
                  Therapy for Social Connection Individuals & Interracial Families
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-6 text-base">
                  Build meaningful connections and navigate unique cultural dynamics with specialized support. Whether strengthening social bonds or addressing the complexities of interracial family experiences, we'll create pathways to belonging and understanding.
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    $200
                  </div>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Individual Session
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">Ready to begin your journey?</span>
              <button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              FAQs
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Common questions about therapy and working together
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="insurance" className="border border-gray-200 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 text-blue-900">
                Do you accept insurance?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                I do not accept insurance directly, but I provide a superbill that you can submit to your insurance company for potential reimbursement. Many clients find this gives them more flexibility in their care while still accessing some insurance benefits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="online-sessions" className="border border-gray-200 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 text-blue-900">
                Are online sessions available?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                Yes! I offer secure virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers greater convenience and accessibility for many clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cancellation" className="border border-gray-200 rounded-lg px-6 shadow-sm">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6 text-blue-900">
                What is your cancellation policy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                I require 24-hour notice for cancellations or rescheduling. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Contact
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">
              Ready to begin your journey? I'm here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Office Location</h4>
                      <p className="text-gray-700">1287 Maplewood Drive<br />Los Angeles, CA 90026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Phone</h4>
                      <p className="text-gray-700">(323) 555-0192</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                      <p className="text-gray-700">serena@blakepsychology.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Office Hours</h4>
                      <div className="text-gray-700">
                        <p>In-person: Tue & Thu, 10 AM–6 PM</p>
                        <p>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div>
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
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-medium text-blue-900">Name *</Label>
                          <Input
                            id="name"
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
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-medium text-blue-900">What brings you here? *</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.message ? 'border-red-500' : ''}`}
                          placeholder="Tell me a bit about what you're looking for support with..."
                        />
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime" className="font-medium text-blue-900">Preferred time to reach you *</Label>
                        <Input
                          id="preferredTime"
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          className={`border-gray-300 focus:border-blue-900 focus:ring-blue-900 ${errors.preferredTime ? 'border-red-500' : ''}`}
                          placeholder="e.g., Weekday mornings, evenings after 6pm"
                        />
                        {errors.preferredTime && <p className="text-sm text-red-500">{errors.preferredTime}</p>}
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agree"
                          checked={formData.agreeToContact}
                          onCheckedChange={(checked) => handleInputChange('agreeToContact', checked as boolean)}
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

                      <Button 
                        type="submit" 
                        className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div> */}
            <ContactFormWithRecaptcha/>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Dr. Serena Blake, PsyD</h3>
          <p className="text-blue-200 mb-6">Licensed Clinical Psychologist</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-blue-200">
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
            <p>(323) 555-0192</p>
            <p>serena@blakepsychology.com</p>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700 text-blue-300">
            <p>&copy; 2024 Dr. Serena Blake. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}