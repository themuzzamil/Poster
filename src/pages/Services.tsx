
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Shield, Users, Clock, Home, Phone, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Installation",
      description: "Professional installation of high-definition security cameras with complete coverage planning.",
      features: [
        "HD & 4K Camera Options",
        "Indoor & Outdoor Installation",
        "Night Vision Capability",
        "Motion Detection",
        "Mobile App Access"
      ],
      price: "Starting from $299"
    },
    {
      icon: Shield,
      title: "Smart Surveillance Systems",
      description: "AI-powered surveillance with intelligent analytics and real-time threat detection.",
      features: [
        "Facial Recognition",
        "License Plate Reading",
        "Perimeter Protection",
        "Smart Alerts",
        "Cloud Integration"
      ],
      price: "Starting from $799"
    },
    {
      icon: Users,
      title: "Remote Monitoring",
      description: "24/7 professional monitoring services with immediate response protocols.",
      features: [
        "24/7 Live Monitoring",
        "Emergency Response",
        "Monthly Reports",
        "Multiple Location Support",
        "Professional Alerts"
      ],
      price: "Starting from $49/month"
    },
    {
      icon: Clock,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance packages to ensure optimal system performance.",
      features: [
        "Regular System Checks",
        "Software Updates",
        "Hardware Replacement",
        "Technical Support",
        "Emergency Repairs"
      ],
      price: "Starting from $99/month"
    },
    {
      icon: Home,
      title: "Residential Security",
      description: "Complete home security solutions tailored for residential properties.",
      features: [
        "Doorbell Cameras",
        "Home Automation",
        "Burglar Alarms",
        "Access Control",
        "Family Safety Features"
      ],
      price: "Starting from $199"
    },
    {
      icon: Phone,
      title: "Commercial Security",
      description: "Enterprise-grade security systems for businesses and commercial properties.",
      features: [
        "Multi-Site Management",
        "Employee Monitoring",
        "Inventory Protection",
        "Fire & Safety Integration",
        "Compliance Reporting"
      ],
      price: "Custom Pricing"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Security Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive security solutions designed to protect what matters most. 
            From installation to maintenance, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <service.icon className="h-16 w-16 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <div className="text-lg font-bold text-secondary mb-3">{service.price}</div>
                    <Link to="/quote">
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Installation Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From consultation to completion, we ensure a smooth and professional experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Consultation", description: "We assess your security needs and provide recommendations." },
              { step: "2", title: "Custom Design", description: "Our experts design a system tailored to your property." },
              { step: "3", title: "Professional Installation", description: "Certified technicians install your system with minimal disruption." },
              { step: "4", title: "Training & Support", description: "We train you on system operation and provide ongoing support." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free security assessment and personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 px-8 py-3">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
