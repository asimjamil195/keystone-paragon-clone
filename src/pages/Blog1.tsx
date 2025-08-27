import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog1 = () => {
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
            <Badge variant="secondary" className="mb-4">Study Abroad</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Top 10 Universities in Canada for International Students
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Dr. Sarah Ahmed
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                January 15, 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                5 min read
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
              alt="Canadian Universities"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate__animated animate__fadeInUp">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Canada has emerged as one of the world's top destinations for international students, offering excellent education, multicultural environment, and post-graduation work opportunities. Here are the top 10 universities that welcome international students with open arms.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">1. University of Toronto</h2>
            <p className="mb-6">
              Ranked among the top 20 universities globally, the University of Toronto is Canada's leading institution. With over 700 undergraduate programs and exceptional research opportunities, it attracts students from around the world. The university offers generous scholarships for international students and has campuses in Toronto, Mississauga, and Scarborough.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">2. University of British Columbia (UBC)</h2>
            <p className="mb-6">
              Located in beautiful Vancouver, UBC is renowned for its research excellence and stunning campus. The university offers over 300 undergraduate programs and is particularly strong in engineering, business, and medicine. UBC provides numerous scholarship opportunities, including the International Leader of Tomorrow Award.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">3. McGill University</h2>
            <p className="mb-6">
              Often called the "Harvard of Canada," McGill University in Montreal is famous for its rigorous academic standards and vibrant campus life. The university offers programs in both English and French, making it unique among Canadian institutions. McGill has produced 12 Nobel Prize winners and numerous world leaders.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">4. University of Alberta</h2>
            <p className="mb-6">
              The University of Alberta is a top-tier research university offering excellent programs in engineering, business, and health sciences. Located in Edmonton, it provides a more affordable option compared to universities in Toronto or Vancouver while maintaining high academic standards.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">5. McMaster University</h2>
            <p className="mb-6">
              Known for its innovative teaching methods and strong research programs, McMaster University in Hamilton, Ontario, is particularly renowned for its medical school and engineering programs. The university offers a close-knit community feel with excellent support services for international students.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why Choose Canada for Higher Education?</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Quality Education:</strong> Canadian universities are globally recognized for their high academic standards</li>
              <li><strong>Affordable Tuition:</strong> Generally lower than US and UK universities</li>
              <li><strong>Post-Graduation Work Permit:</strong> Opportunity to work in Canada after graduation</li>
              <li><strong>Pathway to Permanent Residency:</strong> Express Entry system favors Canadian graduates</li>
              <li><strong>Multicultural Environment:</strong> Welcoming society with diverse communities</li>
              <li><strong>Safe and Peaceful:</strong> One of the safest countries in the world</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Application Requirements</h2>
            <p className="mb-4">Most Canadian universities require:</p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Academic transcripts with minimum 70-85% marks</li>
              <li>English proficiency test (IELTS 6.5+ or TOEFL 90+)</li>
              <li>Statement of Purpose</li>
              <li>Letters of Recommendation</li>
              <li>Proof of financial support</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Scholarship Opportunities</h2>
            <p className="mb-4">
              Many Canadian universities offer scholarships specifically for international students:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Vanier Canada Graduate Scholarships:</strong> $50,000 per year for PhD students</li>
              <li><strong>Ontario Graduate Scholarship:</strong> $15,000 for graduate students</li>
              <li><strong>University-specific scholarships:</strong> Merit-based awards ranging from $2,000-$40,000</li>
            </ul>

            <div className="bg-primary/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="mb-6">
                Our expert counselors at Keystone Consultancy can help you navigate the application process and increase your chances of acceptance at top Canadian universities.
              </p>
              <Button asChild>
                <Link to="/apply">Start Your Application</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Blog1;