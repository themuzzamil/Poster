
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Downtown Office Complex",
      category: "Commercial",
      description: "Complete surveillance system with 24 HD cameras, access control, and remote monitoring for a 5-story office building.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["24 HD Cameras", "Access Control", "Remote Monitoring", "Mobile Integration"],
      client: "Metro Business Center"
    },
    {
      title: "Retail Chain Security",
      category: "Retail",
      description: "Multi-location CCTV installation for retail chain with centralized monitoring and POS integration.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["16 Locations", "POS Integration", "Facial Recognition", "Cloud Storage"],
      client: "QuickMart Stores"
    },
    {
      title: "Manufacturing Warehouse",
      category: "Industrial",
      description: "High-security surveillance system for manufacturing facility with perimeter protection and inventory monitoring.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Perimeter Security", "Inventory Monitoring", "Night Vision", "Motion Analytics"],
      client: "TechCorp Industries"
    },
    {
      title: "Luxury Residential Estate",
      category: "Residential",
      description: "Premium home security system with smart home integration, doorbell cameras, and family safety features.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Smart Home Integration", "Doorbell Cameras", "Mobile Alerts", "Family Safety"],
      client: "Private Residence"
    },
    {
      title: "Educational Campus",
      category: "Education",
      description: "Comprehensive security solution for school campus with visitor management and emergency response systems.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Visitor Management", "Emergency Systems", "Playground Monitoring", "Staff Safety"],
      client: "Riverside Elementary"
    },
    {
      title: "Healthcare Facility",
      category: "Healthcare",
      description: "HIPAA-compliant security system for medical facility with patient privacy protection and access control.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["HIPAA Compliance", "Access Control", "Patient Privacy", "Emergency Response"],
      client: "City Medical Center"
    }
  ];

  const categories = ["All", "Commercial", "Retail", "Industrial", "Residential", "Education", "Healthcare"];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore our successful security installations across various industries. 
            From small businesses to large enterprises, we deliver results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Business Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Home Installations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg">
              Discover how we've helped businesses and homeowners enhance their security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t">
                      <div className="text-sm text-gray-500">Client: {project.client}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg">
              Specialized security solutions for diverse industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Retail & Commerce",
              "Manufacturing",
              "Healthcare",
              "Education",
              "Hospitality",
              "Government",
              "Residential",
              "Transportation"
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-lg font-semibold text-primary">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us design and install a custom security solution for your property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/quote" className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
              Get Your Free Quote
            </a>
            <a href="/contact" className="border border-white text-white hover:bg-white hover:text-secondary px-8 py-3 rounded-md font-medium transition-colors">
              Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
