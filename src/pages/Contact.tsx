
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Security Lane", "Tech City, TC 12345"],
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "24/7 Emergency: (555) 911-HELP"],
      link: "tel:+15551234567"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sparklex.com", "support@sparklex.com"],
      link: "mailto:info@sparklex.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Emergency Only"],
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to secure your property? Get in touch with our security experts 
            for a free consultation and personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <info.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-gray-600 text-sm">
                        {info.link && idx === 0 ? (
                          <a href={info.link} className="hover:text-secondary transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input type="tel" placeholder="(555) 123-4567" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent">
                        <option>Select Property Type</option>
                        <option>Residential Home</option>
                        <option>Commercial Business</option>
                        <option>Industrial Facility</option>
                        <option>Retail Store</option>
                        <option>Office Building</option>
                        <option>Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your security needs and any specific requirements..." 
                        rows={5}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Find Our Location
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 h-64 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Security Lane, Tech City, TC 12345</p>
                </div>
              </div>
              
              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We proudly serve the following areas with professional security installation and support:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <ul className="space-y-1 text-gray-600">
                      <li>• Tech City</li>
                      <li>• Downtown Metro</li>
                      <li>• Westside District</li>
                      <li>• North Valley</li>
                    </ul>
                    <ul className="space-y-1 text-gray-600">
                      <li>• East Ridge</li>
                      <li>• South Hills</li>
                      <li>• Central Business</li>
                      <li>• Suburban Areas</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Don't see your area? Contact us - we may still be able to help!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              🚨 Emergency Support Available 24/7
            </h2>
            <p className="text-red-600 mb-6">
              If you're experiencing a security system emergency or urgent issue, 
              call our emergency hotline immediately.
            </p>
            <a href="tel:+15559111111">
              <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3">
                Emergency: (555) 911-1111
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
