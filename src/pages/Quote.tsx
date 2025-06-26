
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Camera, Users, Clock, CheckCircle } from "lucide-react";

const Quote = () => {
  const services = [
    { id: "cctv", label: "CCTV Installation", icon: Camera },
    { id: "surveillance", label: "Smart Surveillance Systems", icon: Shield },
    { id: "monitoring", label: "Remote Monitoring", icon: Users },
    { id: "maintenance", label: "Maintenance & Support", icon: Clock }
  ];

  const benefits = [
    "Free on-site security assessment",
    "Custom system design and layout",
    "Professional installation included",
    "24/7 technical support",
    "5-year system warranty",
    "Mobile app setup and training"
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Security Quote
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Receive a personalized security assessment and custom quote within 24 hours. 
            No obligation, no pressure - just expert advice tailored to your needs.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              What's Included in Your Free Quote
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">
                Request Your Free Quote
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <Input type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Property Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Address *
                      </label>
                      <Input placeholder="123 Main Street, City, State 12345" required />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Property Type *
                        </label>
                        <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent" required>
                          <option value="">Select Property Type</option>
                          <option value="residential">Residential Home</option>
                          <option value="commercial">Commercial Business</option>
                          <option value="industrial">Industrial Facility</option>
                          <option value="retail">Retail Store</option>
                          <option value="office">Office Building</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Property Size
                        </label>
                        <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent">
                          <option value="">Select Size</option>
                          <option value="small">Small (Under 2,000 sq ft)</option>
                          <option value="medium">Medium (2,000 - 5,000 sq ft)</option>
                          <option value="large">Large (5,000 - 10,000 sq ft)</option>
                          <option value="xlarge">Extra Large (Over 10,000 sq ft)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Needed */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Services Needed</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                        <Checkbox id={service.id} />
                        <service.icon className="h-5 w-5 text-secondary" />
                        <label htmlFor={service.id} className="text-gray-700 font-medium cursor-pointer">
                          {service.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Additional Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Budget Range
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent">
                        <option value="">Select Budget Range (Optional)</option>
                        <option value="under-1000">Under $1,000</option>
                        <option value="1000-3000">$1,000 - $3,000</option>
                        <option value="3000-5000">$3,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="over-10000">Over $10,000</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent">
                        <option value="">When do you need this installed?</option>
                        <option value="asap">As soon as possible</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="flexible">Flexible timeline</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <Textarea 
                        placeholder="Tell us about any specific security concerns, existing systems, or special requirements..." 
                        rows={4}
                      />
                    </div>
                  </div>
                </div>

                {/* Preferred Contact */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Preferred Contact Method</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="contact-phone" />
                      <label htmlFor="contact-phone" className="text-gray-700">Phone Call</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="contact-email" />
                      <label htmlFor="contact-email" className="text-gray-700">Email</label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox id="contact-text" />
                      <label htmlFor="contact-text" className="text-gray-700">Text Message</label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-4">
                    Get My Free Quote
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to be contacted by Sparklex Technologies 
                    regarding your security needs. We respect your privacy and never share your information.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Trusted by 500+ Customers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-gray-600">Systems Installed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">5 Year</div>
              <div className="text-gray-600">Warranty Included</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;
