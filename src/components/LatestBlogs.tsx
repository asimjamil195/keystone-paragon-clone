import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Universities in Canada for International Students",
      excerpt: "Discover the best Canadian universities offering world-class education and excellent career opportunities.",
      date: "2024-01-15",
      category: "Study Abroad",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "IELTS Preparation Guide: Score 7+ Band",
      excerpt: "Complete guide to ace your IELTS exam with proven strategies and practice tips.",
      date: "2024-01-12",
      category: "Test Prep",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Student Visa Requirements for Australia 2024",
      excerpt: "Everything you need to know about Australian student visa application process and requirements.",
      date: "2024-01-10",
      category: "Visa Guide",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Scholarship Opportunities for Pakistani Students",
      excerpt: "Explore fully-funded scholarships available for Pakistani students in top universities worldwide.",
      date: "2024-01-08",
      category: "Scholarships",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Career Prospects After Studying in UK",
      excerpt: "Learn about post-study work opportunities and career growth in the United Kingdom.",
      date: "2024-01-05",
      category: "Career Guide",
      readTime: "9 min read"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-8 h-8 text-primary mr-3" />
            <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
              Latest Updates
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and opportunities in international education
          </p>
        </div>

        {/* Moving Blog Cards */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll-left">
            {blogs.concat(blogs).map((blog, index) => (
              <Link key={`${blog.id}-${index}`} to={`/blog/${blog.id}`}>
                <Card className="min-w-[350px] group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 cursor-pointer">
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
                    <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground font-medium">
                        {blog.readTime}
                      </span>
                      <Button variant="ghost" size="sm" className="group/btn p-2 h-auto">
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" variant="outline" className="group transition-all duration-300 hover:bg-primary hover:text-primary-foreground" asChild>
            <Link to="/blog">
              View All Blog Posts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;