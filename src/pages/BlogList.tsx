import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Universities in Canada for International Students",
      excerpt: "Discover the best Canadian universities offering world-class education and excellent career opportunities for international students.",
      date: "2024-01-15",
      category: "Study Abroad",
      readTime: "5 min read",
      author: "Dr. Sarah Ahmed",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "IELTS Preparation Guide: Score 7+ Band",
      excerpt: "Complete guide to ace your IELTS exam with proven strategies and practice tips from our expert trainers.",
      date: "2024-01-12",
      category: "Test Prep",
      readTime: "8 min read",
      author: "Prof. Michael Roberts",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Student Visa Requirements for Australia 2024",
      excerpt: "Everything you need to know about Australian student visa application process and requirements for Pakistani students.",
      date: "2024-01-10",
      category: "Visa Guide",
      readTime: "6 min read",
      author: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Scholarship Opportunities for Pakistani Students",
      excerpt: "Explore fully-funded scholarships available for Pakistani students in top universities worldwide including eligibility criteria.",
      date: "2024-01-08",
      category: "Scholarships",
      readTime: "7 min read",
      author: "Dr. Fatima Khan",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Career Prospects After Studying in UK",
      excerpt: "Learn about post-study work opportunities and career growth in the United Kingdom for international graduates.",
      date: "2024-01-05",
      category: "Career Guide",
      readTime: "9 min read",
      author: "James Thompson",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const categories = ["All", "Study Abroad", "Test Prep", "Visa Guide", "Scholarships", "Career Guide"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate__animated animate__fadeInUp">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 mr-3" />
              <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-white/20 text-white border-white/30">
                Education Blog
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Study Abroad Insights
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert advice, tips, and guides to help you navigate your international education journey
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate__animated animate__fadeInUp">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Card 
                key={blog.id} 
                className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 overflow-hidden animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {blog.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="w-3 h-3 mr-1" />
                      {blog.author}
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <Button asChild className="w-full group/btn">
                    <Link to={`/blog/${blog.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
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

export default BlogList;