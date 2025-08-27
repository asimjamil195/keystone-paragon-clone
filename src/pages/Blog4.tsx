import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, DollarSign, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog4 = () => {
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
            <Badge variant="secondary" className="mb-4">Scholarships</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Scholarship Opportunities for Pakistani Students
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Dr. Fatima Khan
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                January 8, 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                7 min read
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200" 
              alt="Scholarship Opportunities"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate__animated animate__fadeInUp">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Pursuing higher education abroad can be financially challenging, but numerous scholarship opportunities exist for Pakistani students. From fully-funded programs to partial grants, this comprehensive guide covers the best scholarships available in 2024.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Types of Scholarships</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Merit-Based</h3>
                <p className="text-sm text-muted-foreground">Based on academic excellence and achievements</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Need-Based</h3>
                <p className="text-sm text-muted-foreground">For students with financial constraints</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Country-Specific</h3>
                <p className="text-sm text-muted-foreground">Exclusively for Pakistani nationals</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Top Fully-Funded Scholarships</h2>
            
            <h3 className="text-2xl font-semibold mb-4">1. Chevening Scholarships (UK)</h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="mb-4"><strong>Coverage:</strong> Full tuition, living allowance, travel costs, visa fees</p>
              <p className="mb-4"><strong>Eligibility:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pakistani citizenship</li>
                <li>Minimum 2 years work experience</li>
                <li>Bachelor's degree</li>
                <li>English proficiency (IELTS 6.5 overall)</li>
                <li>Leadership potential</li>
              </ul>
              <p className="mt-4"><strong>Application Deadline:</strong> November (annually)</p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">2. Australia Awards Scholarships</h3>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
              <p className="mb-4"><strong>Coverage:</strong> Full tuition, living allowance, health insurance, travel costs</p>
              <p className="mb-4"><strong>Programs:</strong> Master's and PhD programs</p>
              <p className="mb-4"><strong>Eligibility:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pakistani citizenship with 2+ years work experience</li>
                <li>Strong academic background</li>
                <li>English proficiency requirements</li>
                <li>Commitment to return to Pakistan</li>
              </ul>
              <p className="mt-4"><strong>Application Deadline:</strong> April-May (annually)</p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">3. DAAD Scholarships (Germany)</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="mb-4"><strong>Coverage:</strong> €934-1,200/month, health insurance, travel allowance</p>
              <p className="mb-4"><strong>Programs:</strong> Master's, PhD, Research programs</p>
              <p className="mb-4"><strong>Popular Programs:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Engineering</li>
                <li>Natural Sciences</li>
                <li>Medicine</li>
                <li>Economics</li>
              </ul>
              <p className="mt-4"><strong>Application Deadline:</strong> Varies by program (September-November)</p>
            </div>

            <h3 className="text-2xl font-semibold mb-4">4. Chinese Government Scholarships (CSC)</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <p className="mb-4"><strong>Coverage:</strong> Full tuition, accommodation, living stipend, medical insurance</p>
              <p className="mb-4"><strong>Programs:</strong> Bachelor's, Master's, PhD</p>
              <p className="mb-4"><strong>Benefits:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>No tuition fees</li>
                <li>Monthly living allowance: 3,000-3,500 RMB</li>
                <li>Free accommodation</li>
                <li>Chinese language training</li>
              </ul>
              <p className="mt-4"><strong>Application Deadline:</strong> March-April (annually)</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">University-Specific Scholarships</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Canada</h3>
            <div className="space-y-4 mb-6">
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold">University of Toronto - Lester B. Pearson Scholarships</h4>
                <p className="text-sm text-muted-foreground">Full coverage for undergraduate international students</p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold">UBC - International Leader of Tomorrow Award</h4>
                <p className="text-sm text-muted-foreground">Based on financial need and academic merit</p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold">McGill - Major Entrance Scholarships</h4>
                <p className="text-sm text-muted-foreground">Up to $12,000 renewable for 4 years</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">United States</h3>
            <div className="space-y-4 mb-8">
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold">Fulbright Program</h4>
                <p className="text-sm text-muted-foreground">Master's and PhD programs with full funding</p>
              </div>
              
              <div className="border p-4 rounded-lg">
                <h4 className="font-semibold">Stanford University - Knight-Hennessy Scholars</h4>
                <p className="text-sm text-muted-foreground">Full funding for graduate studies</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Application Tips for Success</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Strong Application</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Maintain high GPA (3.5+)</li>
                  <li>• Gain relevant work experience</li>
                  <li>• Develop leadership skills</li>
                  <li>• Excel in standardized tests</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Application Strategy</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Apply to multiple scholarships</li>
                  <li>• Start preparations early</li>
                  <li>• Tailor each application</li>
                  <li>• Seek professional guidance</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Required Documents</h2>
            <p className="mb-4">Most scholarship applications require:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Academic transcripts:</strong> Certified copies with translations</li>
              <li><strong>Statement of Purpose:</strong> Compelling narrative of goals and achievements</li>
              <li><strong>Letters of Recommendation:</strong> From professors or employers</li>
              <li><strong>English proficiency test:</strong> IELTS/TOEFL scores</li>
              <li><strong>CV/Resume:</strong> Highlighting achievements and experience</li>
              <li><strong>Research proposal:</strong> For research-based programs</li>
              <li><strong>Portfolio:</strong> For creative or technical fields</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Important Deadlines Calendar</h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Scholarship</th>
                    <th className="border border-gray-300 p-3 text-left">Deadline</th>
                    <th className="border border-gray-300 p-3 text-left">Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">Chevening</td>
                    <td className="border border-gray-300 p-3">November</td>
                    <td className="border border-gray-300 p-3">UK</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">Australia Awards</td>
                    <td className="border border-gray-300 p-3">April-May</td>
                    <td className="border border-gray-300 p-3">Australia</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">DAAD</td>
                    <td className="border border-gray-300 p-3">September-November</td>
                    <td className="border border-gray-300 p-3">Germany</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">CSC</td>
                    <td className="border border-gray-300 p-3">March-April</td>
                    <td className="border border-gray-300 p-3">China</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Common Mistakes to Avoid</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <ul className="space-y-3">
                <li><strong>Missing deadlines:</strong> Create a calendar and submit early</li>
                <li><strong>Generic applications:</strong> Customize each application</li>
                <li><strong>Weak statement of purpose:</strong> Tell your unique story</li>
                <li><strong>Insufficient research:</strong> Understand program requirements</li>
                <li><strong>No backup plan:</strong> Apply to multiple scholarships</li>
              </ul>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Scholarship Application Assistance</h3>
              <p className="mb-6">
                Our scholarship experts have helped hundreds of Pakistani students secure fully-funded scholarships. Get personalized guidance to maximize your chances of success.
              </p>
              <Button asChild>
                <Link to="/book-consultation">Book Scholarship Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Blog4;