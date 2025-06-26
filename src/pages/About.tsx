
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, value: "500+", label: "Systems Installed" },
    { icon: Users, value: "15", label: "Expert Technicians" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Support Available" }
  ];

  const certifications = [
    "Licensed Security Systems Contractor",
    "NICET Certified Technicians",
    "UL Listed Systems Provider",
    "Axis Communications Partner",
    "Hikvision Authorized Dealer",
    "Fully Insured & Bonded"
  ];

  const team = [
    {
      name: "David Martinez",
      role: "Founder & CEO",
      description: "15+ years in security systems with expertise in enterprise solutions."
    },
    {
      name: "Sarah Kim",
      role: "Lead Technician",
      description: "NICET Level III certified with specialization in surveillance systems."
    },
    {
      name: "Robert Johnson",
      role: "Project Manager",
      description: "Ensures seamless installations and customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Sparklex Technologies
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in security solutions. We protect what matters most 
            with cutting-edge technology and unmatched expertise.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2014, Sparklex Technologies began with a simple mission: 
                to provide reliable, cutting-edge security solutions that give our 
                clients complete peace of mind.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                What started as a small team of passionate security professionals has 
                grown into a leading provider of CCTV installation, surveillance systems, 
                and security solutions across the region.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we're proud to have protected hundreds of businesses and homes 
                with our innovative technology and exceptional service. Our commitment 
                to excellence drives everything we do.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Security Technology" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Mission & Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Shield className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-primary mb-4">Security First</h3>
                <p className="text-gray-600">
                  We prioritize the safety and security of our clients above all else, 
                  ensuring every system we install meets the highest standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-primary mb-4">Customer Focus</h3>
                <p className="text-gray-600">
                  Our clients are at the heart of everything we do. We listen, 
                  understand, and deliver solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Award className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every project, from initial consultation 
                  to ongoing support and maintenance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-gray-600 text-lg">
              Licensed, certified, and trusted by leading security manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-secondary flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg">
              Experienced professionals dedicated to your security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-secondary to-blue-400 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <div className="text-secondary font-medium mb-4">{member.role}</div>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
