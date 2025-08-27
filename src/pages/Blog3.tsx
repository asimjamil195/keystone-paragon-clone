import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog3 = () => {
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
            <Badge variant="secondary" className="mb-4">Visa Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Student Visa Requirements for Australia 2024
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Emma Wilson
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                January 10, 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                6 min read
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200" 
              alt="Australia Student Visa"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate__animated animate__fadeInUp">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Australia continues to be a preferred destination for international students. Understanding the student visa requirements is crucial for a successful application. Here's your complete guide to the Australian Student Visa (Subclass 500) for 2024.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <strong>Important Update:</strong> New requirements came into effect from March 2024. Make sure you're following the latest guidelines.
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Student Visa Subclass 500 Overview</h2>
            <p className="mb-6">
              The Student Visa (Subclass 500) allows international students to stay in Australia for the duration of their studies. This visa covers all education sectors including primary school, high school, vocational training, university foundation, undergraduate, postgraduate, and doctoral programs.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Eligibility Requirements</h2>
            
            <h3 className="text-2xl font-semibold mb-4">1. Enrollment in a Registered Course</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  Must have a Confirmation of Enrolment (CoE) from a CRICOS-registered institution
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  Course must be full-time (minimum 20 hours per week for most courses)
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">2. English Language Proficiency</h3>
            <p className="mb-4">Accepted English tests and minimum scores:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">IELTS Academic</h4>
                <ul className="text-sm space-y-1">
                  <li>Overall: 6.0</li>
                  <li>No band below 5.5</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">TOEFL iBT</h4>
                <ul className="text-sm space-y-1">
                  <li>Overall: 60</li>
                  <li>Reading: 10, Listening: 9</li>
                  <li>Speaking: 16, Writing: 18</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">PTE Academic</h4>
                <ul className="text-sm space-y-1">
                  <li>Overall: 50</li>
                  <li>No section below 42</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Cambridge English</h4>
                <ul className="text-sm space-y-1">
                  <li>Overall: 169</li>
                  <li>No section below 154</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">3. Financial Requirements (Updated 2024)</h3>
            <p className="mb-4">You must demonstrate sufficient funds to cover:</p>
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li><strong>Living costs:</strong> AUD $24,505 per year (increased from $21,041)</li>
                <li><strong>Spouse/partner:</strong> Additional AUD $8,574 per year</li>
                <li><strong>Child:</strong> Additional AUD $3,720 per year per child</li>
                <li><strong>Tuition fees:</strong> Full course fees or first year if multi-year course</li>
                <li><strong>Overseas Student Health Cover (OSHC):</strong> Duration of visa</li>
                <li><strong>Return airfares:</strong> For you and accompanying family members</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Required Documents</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Academic Documents:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Confirmation of Enrolment (CoE)</li>
              <li>Academic transcripts and certificates</li>
              <li>English language test results</li>
              <li>Statement of Purpose</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Financial Documents:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Bank statements (last 3 months)</li>
              <li>Education loan sanction letter (if applicable)</li>
              <li>Scholarship letter (if applicable)</li>
              <li>Income tax returns of sponsor</li>
              <li>Fixed deposit certificates</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Personal Documents:</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Valid passport</li>
              <li>Passport-sized photographs</li>
              <li>Health insurance (OSHC)</li>
              <li>Medical examination (if required)</li>
              <li>Police clearance certificate</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Application Process</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Get Confirmation of Enrolment (CoE)</h4>
                  <p className="text-muted-foreground">Apply to Australian institutions and receive your CoE after paying initial fees.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Prepare Documents</h4>
                  <p className="text-muted-foreground">Gather all required documents and ensure they meet Australian standards.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Submit Online Application</h4>
                  <p className="text-muted-foreground">Apply through ImmiAccount on the Department of Home Affairs website.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h4 className="font-semibold mb-2">Pay Application Fee</h4>
                  <p className="text-muted-foreground">Current fee is AUD $710 for the main applicant.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h4 className="font-semibold mb-2">Await Decision</h4>
                  <p className="text-muted-foreground">Processing time is typically 1-4 months depending on your country.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Processing Times & Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-green-800">Processing Times</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Pakistan: 2-4 months</li>
                  <li>• India: 1-3 months</li>
                  <li>• Other countries: 1-2 months</li>
                  <li>• Higher education: Faster processing</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-blue-800">Success Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Apply early (3-4 months before)</li>
                  <li>• Ensure all documents are certified</li>
                  <li>• Write a compelling SOP</li>
                  <li>• Show strong ties to home country</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Work Rights</h2>
            <p className="mb-4">Student visa holders can:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Work up to 48 hours per fortnight during studies</li>
              <li>Work unlimited hours during scheduled breaks</li>
              <li>Apply for post-study work visa after graduation</li>
            </ul>

            <div className="bg-primary/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Expert Visa Assistance</h3>
              <p className="mb-6">
                Our experienced visa consultants have a 95% success rate for Australian student visas. Get personalized guidance and avoid common application mistakes.
              </p>
              <Button asChild>
                <Link to="/book-consultation">Schedule Visa Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Blog3;