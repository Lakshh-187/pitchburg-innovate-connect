
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Calendar, Download, MessageCircle, Globe } from "lucide-react";

const actionOptions = [
  {
    title: "Free Consultation",
    description: "Get expert advice tailored to your institution's needs",
    icon: Phone,
    action: "Schedule Now",
    color: "from-blue-500 to-cyan-600",
    popular: true
  },
  {
    title: "Download Resources",
    description: "Access our comprehensive curriculum guide and materials",
    icon: Download,
    action: "Download Now",
    color: "from-green-500 to-emerald-600",
    popular: false
  },
  {
    title: "Live Demo",
    description: "See our platform and curriculum in action",
    icon: Globe,
    action: "Book Demo",
    color: "from-purple-500 to-indigo-600",
    popular: false
  },
  {
    title: "Connect with Us",
    description: "Direct communication with our transformation experts",
    icon: MessageCircle,
    action: "Contact Us",
    color: "from-orange-500 to-red-600",
    popular: false
  }
];

const contactMethods = [
  {
    method: "Email",
    value: "transform@uncif.org",
    icon: Mail,
    description: "For detailed inquiries and documentation"
  },
  {
    method: "Phone",
    value: "+1 (555) 123-4567",
    icon: Phone,
    description: "For immediate assistance and consultations"
  },
  {
    method: "Schedule",
    value: "Book Online Meeting",
    icon: Calendar,
    description: "Reserve your personalized consultation slot"
  }
];

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Join hundreds of institutions worldwide that have already revolutionized their 
            educational approach. Take the first step towards creating tomorrow's leaders today.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-blue-200">Institutions Transformed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">100K+</div>
                <div className="text-sm text-blue-200">Students Impacted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {actionOptions.map((option, index) => (
            <Card key={index} className={`border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 ${option.popular ? 'ring-2 ring-yellow-300' : ''}`}>
              <CardContent className="p-6 text-center relative">
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-300 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{option.title}</h3>
                <p className="text-sm text-blue-100 mb-6">{option.description}</p>
                <Button className="w-full bg-white text-gray-900 hover:bg-blue-50">
                  {option.action}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get Started Today</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span>Schedule your free consultation call</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span>Receive your customized transformation plan</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span>Begin your journey to educational excellence</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-3 rounded-full">
                  View Detailed Plan & Curriculum
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-3 rounded-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-6">Contact Our Experts</h4>
              {contactMethods.map((contact, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <contact.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="font-semibold">{contact.method}</div>
                    <div className="text-blue-200 text-sm">{contact.value}</div>
                    <div className="text-xs text-blue-300">{contact.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-white/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            "The best time to plant a tree was 20 years ago. The second best time is now."
          </h3>
          <p className="text-blue-100 mb-6">
            Don't wait for tomorrow to start building a better future for your students. 
            The transformation journey begins with a single decision - let's make it today.
          </p>
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400 px-12 py-4 rounded-full text-lg font-semibold">
            Start Your Transformation Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <div className="mt-6 text-sm text-blue-200">
            <span>✓ No commitment required</span>
            <span className="mx-4">•</span>
            <span>✓ Free initial consultation</span>
            <span className="mx-4">•</span>
            <span>✓ Customized solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
