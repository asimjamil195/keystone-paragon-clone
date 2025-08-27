import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, Briefcase, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog5 = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <article className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8 animate__animated animate__fadeInUp">
            <Button variant="outline" asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12 animate__animated animate__fadeInUp">
            <Badge variant="secondary" className="mb-4">Career Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Career Prospects After Studying in UK
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                James Thompson
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                January 5, 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                9 min read
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200" 
              alt="UK Career Prospects"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate__animated animate__fadeInUp">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The United Kingdom offers excellent career opportunities for international graduates. With its strong economy, diverse job market, and favorable immigration policies for skilled workers, the UK remains an attractive destination for building a successful career after graduation.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Graduate Route Visa (Post-Study Work)</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Benefits:</h3>
              <ul className="space-y-2">
                <li><strong>Duration:</strong> 2 years for Bachelor's/Master's graduates, 3 years for PhD graduates</li>
                <li><strong>Work Rights:</strong> No restrictions on type of work or employer</li>
                <li><strong>Switching:</strong> Can switch to skilled worker visa while in the UK</li>
                <li><strong>Dependents:</strong> Can include spouse/partner and children</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">High-Demand Career Sectors</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/10 p-6 rounded-lg">
                <Briefcase className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Technology & IT</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Software Development</li>
                  <li>• Data Science & Analytics</li>
                  <li>• Cybersecurity</li>
                  <li>• AI & Machine Learning</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Finance & Banking</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Investment Banking</li>
                  <li>• Financial Analysis</li>
                  <li>• Risk Management</li>
                  <li>• Fintech</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <Briefcase className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Healthcare</h3>
                <ul className="space-y-2 text-sm">
                  <li>• NHS Positions</li>
                  <li>• Medical Research</li>
                  <li>• Pharmaceuticals</li>
                  <li>• Public Health</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">Engineering</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Civil Engineering</li>
                  <li>• Mechanical Engineering</li>
                  <li>• Renewable Energy</li>
                  <li>• Aerospace</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Salary Expectations by Sector</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Sector</th>
                    <th className="border border-gray-300 p-3 text-left">Entry Level</th>
                    <th className="border border-gray-300 p-3 text-left">Mid-Level</th>
                    <th className="border border-gray-300 p-3 text-left">Senior Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Software Development</td>
                    <td className="border border-gray-300 p-3">£25,000-35,000</td>
                    <td className="border border-gray-300 p-3">£40,000-60,000</td>
                    <td className="border border-gray-300 p-3">£70,000-100,000+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Investment Banking</td>
                    <td className="border border-gray-300 p-3">£35,000-50,000</td>
                    <td className="border border-gray-300 p-3">£60,000-100,000</td>
                    <td className="border border-gray-300 p-3">£120,000-200,000+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Engineering</td>
                    <td className="border border-gray-300 p-3">£22,000-30,000</td>
                    <td className="border border-gray-300 p-3">£35,000-50,000</td>
                    <td className="border border-gray-300 p-3">£55,000-80,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Healthcare (NHS)</td>
                    <td className="border border-gray-300 p-3">£24,000-28,000</td>
                    <td className="border border-gray-300 p-3">£31,000-50,000</td>
                    <td className="border border-gray-300 p-3">£60,000-90,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Management Consulting</td>
                    <td className="border border-gray-300 p-3">£30,000-45,000</td>
                    <td className="border border-gray-300 p-3">£50,000-80,000</td>
                    <td className="border border-gray-300 p-3">£100,000-150,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Major UK Cities for Careers</h2>
            
            <h3 className="text-2xl font-semibold mb-4">London</h3>
            <p className="mb-4">
              <strong>Strengths:</strong> Financial capital of Europe, diverse job market, highest salaries
            </p>
            <p className="mb-6">
              <strong>Key Sectors:</strong> Finance, Technology, Media, Law, Consulting
            </p>

            <h3 className="text-2xl font-semibold mb-4">Manchester</h3>
            <p className="mb-4">
              <strong>Strengths:</strong> Growing tech hub, lower living costs, strong startup ecosystem
            </p>
            <p className="mb-6">
              <strong>Key Sectors:</strong> Technology, Digital Media, Manufacturing, Healthcare
            </p>

            <h3 className="text-2xl font-semibold mb-4">Edinburgh</h3>
            <p className="mb-4">
              <strong>Strengths:</strong> Financial services hub, government jobs, quality of life
            </p>
            <p className="mb-6">
              <strong>Key Sectors:</strong> Finance, Insurance, Government, Tourism, Technology
            </p>

            <h3 className="text-2xl font-semibold mb-4">Birmingham</h3>
            <p className="mb-4">
              <strong>Strengths:</strong> Central location, diverse economy, affordable housing
            </p>
            <p className="mb-8">
              <strong>Key Sectors:</strong> Manufacturing, Professional Services, Technology, Healthcare
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Skilled Worker Visa Pathway</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Find a Job with Sponsorship License</h4>
                  <p className="text-muted-foreground">Employer must have a valid sponsor license and offer you a job</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Meet Salary Requirements</h4>
                  <p className="text-muted-foreground">Minimum £26,200 or the "going rate" for your occupation (whichever is higher)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold mb-2">English Language Requirement</h4>
                  <p className="text-muted-foreground">B1 level English (usually satisfied if you studied in English)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold mb-2">Apply for Visa</h4>
                  <p className="text-muted-foreground">5-year visa with option to apply for settlement after 5 years</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Networking and Professional Development</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Essential Strategies:</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Join Professional Bodies</h4>
                <p className="text-sm">Become a member of relevant professional associations in your field</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Attend Industry Events</h4>
                <p className="text-sm">Participate in conferences, seminars, and networking events</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">LinkedIn Presence</h4>
                <p className="text-sm">Build a strong professional profile and connect with industry professionals</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Alumni Networks</h4>
                <p className="text-sm">Leverage your university's alumni network for job opportunities and mentorship</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Long-term Career Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-green-800">Settlement & Citizenship</h4>
                <ul className="space-y-2 text-sm">
                  <li>• ILR after 5 years on skilled worker visa</li>
                  <li>• British citizenship after 6 years total</li>
                  <li>• EU passport benefits (limited post-Brexit)</li>
                  <li>• Access to public services</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-blue-800">Global Career Mobility</h4>
                <ul className="space-y-2 text-sm">
                  <li>• UK experience valued globally</li>
                  <li>• Strong professional references</li>
                  <li>• International business connections</li>
                  <li>• Cultural adaptability skills</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Success Stories</h2>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-primary bg-primary/5 p-6">
                <h4 className="font-semibold mb-2">Ahmed Khan - Software Engineer</h4>
                <p className="text-sm text-muted-foreground mb-2"><em>University of Manchester Computer Science Graduate</em></p>
                <p>"Started at £28,000 as a graduate developer, now earning £65,000 after 4 years. The UK tech scene is incredibly dynamic and rewarding for skilled professionals."</p>
              </div>
              
              <div className="border-l-4 border-primary bg-primary/5 p-6">
                <h4 className="font-semibold mb-2">Sara Malik - Investment Analyst</h4>
                <p className="text-sm text-muted-foreground mb-2"><em>London School of Economics Graduate</em></p>
                <p>"The financial sector in London offers unparalleled opportunities. Networking through university connections helped me secure a role at a top-tier investment bank."</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Tips for Career Success</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <ul className="space-y-3">
                <li><strong>Start Early:</strong> Begin job hunting in your final semester</li>
                <li><strong>Gain Experience:</strong> Utilize internship and placement opportunities</li>
                <li><strong>Develop Soft Skills:</strong> Communication and cultural awareness are crucial</li>
                <li><strong>Stay Flexible:</strong> Consider opportunities outside London for better work-life balance</li>
                <li><strong>Continuous Learning:</strong> Pursue professional certifications and upskilling</li>
                <li><strong>Build Relationships:</strong> Maintain connections with classmates and professors</li>
              </ul>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Career Guidance & Job Search Support</h3>
              <p className="mb-6">
                Our career counseling team provides ongoing support to help you navigate the UK job market successfully. From CV writing to interview preparation, we're here to help you achieve your career goals.
              </p>
              <Button asChild>
                <Link to="/book-consultation">Schedule Career Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Blog5;