import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog2 = () => {
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
            <Badge variant="secondary" className="mb-4">Test Prep</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              IELTS Preparation Guide: Score 7+ Band
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Prof. Michael Roberts
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                January 12, 2024
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                8 min read
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200" 
              alt="IELTS Preparation"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none animate__animated animate__fadeInUp">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Achieving a 7+ band score in IELTS is crucial for admission to top universities and immigration purposes. This comprehensive guide will help you master all four sections: Listening, Reading, Writing, and Speaking.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Understanding IELTS Band Scores</h2>
            <p className="mb-6">
              IELTS scores range from 0-9, with most universities requiring a minimum of 6.5-7.0. Here's what each band represents:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Band 9:</strong> Expert user - Native-like proficiency</li>
              <li><strong>Band 8:</strong> Very good user - Occasional inaccuracies</li>
              <li><strong>Band 7:</strong> Good user - Operational command with some inaccuracies</li>
              <li><strong>Band 6:</strong> Competent user - Effective communication despite errors</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Listening Section (30 minutes)</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Key Strategies:</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Practice Active Listening:</strong> Listen to English podcasts, news, and conversations daily
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Use Keywords:</strong> Identify keywords in questions before listening begins
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Predict Answers:</strong> Try to predict what type of information you need to listen for
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Reading Section (60 minutes)</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Proven Techniques:</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Skim and Scan:</strong> Quickly identify main ideas and locate specific information
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Time Management:</strong> Allocate 20 minutes per passage, including transfer time
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <strong>Question Types:</strong> Master different question formats like True/False/Not Given
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Writing Section (60 minutes)</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Task 1 (20 minutes):</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Describe data, charts, or processes in 150+ words</li>
              <li>Use appropriate vocabulary for data description</li>
              <li>Follow a clear structure: Overview → Key features → Details</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Task 2 (40 minutes):</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Write a 250+ word essay on a given topic</li>
              <li>Present a clear argument with supporting examples</li>
              <li>Use cohesive devices and varied sentence structures</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Speaking Section (11-14 minutes)</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Three Parts:</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Part 1: Introduction (4-5 minutes)</h4>
                <p>Answer questions about yourself, family, work, studies, and interests. Keep answers natural and elaborate when appropriate.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Part 2: Long Turn (3-4 minutes)</h4>
                <p>Speak about a topic for 1-2 minutes after 1 minute of preparation. Use the given prompts to structure your response.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Part 3: Discussion (4-5 minutes)</h4>
                <p>Engage in a deeper discussion about abstract ideas related to Part 2 topic. Express and justify opinions clearly.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">30-Day Study Plan</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Week 1-2: Foundation</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Take diagnostic test</li>
                  <li>• Learn question types</li>
                  <li>• Build vocabulary (100 words/day)</li>
                  <li>• Grammar review</li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Week 3-4: Practice</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Daily practice tests</li>
                  <li>• Speaking with partners</li>
                  <li>• Writing task practice</li>
                  <li>• Mock tests weekly</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Common Mistakes to Avoid</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <ul className="space-y-3">
                <li><strong>Listening:</strong> Writing during the audio - wait for pauses</li>
                <li><strong>Reading:</strong> Spending too much time on difficult questions</li>
                <li><strong>Writing:</strong> Not checking word count and grammar</li>
                <li><strong>Speaking:</strong> Memorizing answers - sound natural instead</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Recommended Resources</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Cambridge IELTS Books:</strong> Official practice materials (Books 14-18)</li>
              <li><strong>IELTS.org:</strong> Free sample tests and preparation materials</li>
              <li><strong>BBC Learning English:</strong> Vocabulary and pronunciation practice</li>
              <li><strong>IELTS Liz:</strong> Free lessons and tips</li>
            </ul>

            <div className="bg-primary/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Need Expert Guidance?</h3>
              <p className="mb-6">
                Join our IELTS preparation course with experienced instructors who have helped thousands of students achieve 7+ band scores. Get personalized feedback and proven strategies.
              </p>
              <Button asChild>
                <Link to="/book-consultation">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Blog2;