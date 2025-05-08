
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export function PartnersSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>("academic");
  
  // Mock data for partners
  const partners = {
    academic: [
      { id: 1, name: "Stanford University", logo: "https://randomuser.me/api/portraits/men/1.jpg" },
      { id: 2, name: "MIT Innovation Lab", logo: "https://randomuser.me/api/portraits/women/2.jpg" },
      { id: 3, name: "Cambridge Tech Institute", logo: "https://randomuser.me/api/portraits/men/3.jpg" },
      { id: 4, name: "Global Education Alliance", logo: "https://randomuser.me/api/portraits/women/4.jpg" },
    ],
    industry: [
      { id: 1, name: "Google Startup Program", logo: "https://randomuser.me/api/portraits/men/5.jpg" },
      { id: 2, name: "Tesla Innovation Hub", logo: "https://randomuser.me/api/portraits/women/6.jpg" },
      { id: 3, name: "Microsoft Future Tech", logo: "https://randomuser.me/api/portraits/men/7.jpg" },
      { id: 4, name: "Amazon Launchpad", logo: "https://randomuser.me/api/portraits/women/8.jpg" },
    ],
    nonprofit: [
      { id: 1, name: "Global Innovation Fund", logo: "https://randomuser.me/api/portraits/men/9.jpg" },
      { id: 2, name: "Youth Entrepreneurship Council", logo: "https://randomuser.me/api/portraits/women/10.jpg" },
      { id: 3, name: "Social Impact Collective", logo: "https://randomuser.me/api/portraits/men/11.jpg" },
      { id: 4, name: "Future Leaders Foundation", logo: "https://randomuser.me/api/portraits/women/12.jpg" },
    ]
  };

  // Partner FAQs
  const partnerFAQs = [
    {
      question: "How can organizations partner with Pitchburg?",
      answer: "Organizations can partner with Pitchburg through sponsorships, mentorship programs, providing resources, or co-hosting events. Contact our partnerships team to discuss collaboration opportunities."
    },
    {
      question: "What benefits do partners receive?",
      answer: "Partners gain access to our talented student pool, visibility through our platform, early access to innovative projects, opportunities for pilot programs, and the ability to influence the next generation of innovators."
    },
    {
      question: "What is the typical partnership duration?",
      answer: "Partnerships typically run for one academic year with options to renew. We also offer event-specific partnerships for shorter engagements and long-term strategic partnerships for deeper collaboration."
    },
    {
      question: "Can partners propose their own challenge statements?",
      answer: "Yes! We encourage partners to propose challenge statements and problem areas that students can address through their projects, creating real-world impact and valuable solutions."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Category button click handler
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section className="py-16 bg-pitchburg-light-purple/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Our Partners & Collaborators</h2>
          <div className="w-20 h-1 bg-pitchburg-purple mb-6"></div>
          <p className="text-gray-600 max-w-2xl">
            Meet the organizations that support and collaborate with Institute Pitchburg to foster innovation
          </p>
        </div>
        
        {/* Partner categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["academic", "industry", "nonprofit"].map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category 
                  ? "bg-pitchburg-purple hover:bg-purple-600" 
                  : "border-pitchburg-purple text-pitchburg-purple hover:bg-pitchburg-light-purple"
              }
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} Partners
            </Button>
          ))}
        </div>
        
        {/* Partner logos */}
        <div className="mb-16">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {activeCategory && partners[activeCategory as keyof typeof partners].map((partner) => (
              <motion.div 
                key={partner.id}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center p-2 mb-4 hover:shadow-lg transition-shadow">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <p className="font-medium text-center">{partner.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Partnership FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Partnership FAQs</h3>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            {partnerFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-4 hover:no-underline hover:text-pitchburg-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Interested in becoming a partner or collaborator?</p>
          <Button size="lg" className="bg-pitchburg-purple hover:bg-purple-600">
            Explore Partnership Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
