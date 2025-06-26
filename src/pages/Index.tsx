
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Camera, Users, Clock, CheckCircle, Star } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Installation",
      description: "Professional installation of high-quality surveillance cameras for complete security coverage."
    },
    {
      icon: Shield,
      title: "Smart Surveillance",
      description: "Advanced AI-powered monitoring systems with real-time alerts and intelligent detection."
    },
    {
      icon: Users,
      title: "Remote Monitoring",
      description: "24/7 professional monitoring services to keep your property secure around the clock."
    },
    {
      icon: Clock,
      title: "Maintenance & Support",
      description: "Regular maintenance and technical support to ensure your systems operate flawlessly."
    }
  ];

  const features = [
    "Licensed & Certified Technicians",
    "24/7 Emergency Response",
    "Free Security Assessment",
    "5 Year System Warranty",
    "Mobile App Integration",
    "Cloud Storage Solutions"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson Retail Group",
      text: "Sparklex transformed our security infrastructure. Their team was professional, and the system works flawlessly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "TechStart Industries",
      text: "Outstanding service and cutting-edge technology. We feel much more secure with their surveillance systems.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "Downtown Restaurant",
      text: "The remote monitoring service gives us peace of mind. Highly recommend Sparklex for any business.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary via-primary to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Secure What <span className="text-secondary">Matters Most</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Professional CCTV installation, surveillance solutions, and security 
                system services. Protect your property with cutting-edge technology 
                and expert installation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/quote">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3">
                    Get Free Quote
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary px-8 py-3">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Security Technology" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Systems Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Security Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security services designed to protect your business, 
              home, and assets with the latest technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Sparklex?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We combine years of experience with cutting-edge technology to deliver 
                security solutions that exceed expectations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-primary hover:bg-primary/90">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Security Monitoring" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Trusted by businesses and homeowners across the region
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free security assessment and customized quote for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-secondary hover:bg-gray-100 px-8 py-3">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-secondary px-8 py-3">
                Call Now: (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
