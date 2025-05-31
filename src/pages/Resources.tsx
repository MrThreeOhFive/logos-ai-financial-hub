
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, FileText, Video, Calendar, Search, Download, ArrowRight, Clock, User } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Resources = () => {
  const resourceTypes = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Blog",
      count: "45+ Articles",
      description: "Industry insights and product updates"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "White Papers",
      count: "12 Guides",
      description: "In-depth analysis and best practices"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Webinars",
      count: "20+ Sessions",
      description: "Live demos and expert discussions"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Events",
      count: "8 Upcoming",
      description: "Industry conferences and meetups"
    }
  ];

  const featuredResources = [
    {
      type: "White Paper",
      title: "The Future of AI in Fund Accounting",
      description: "Comprehensive guide on how artificial intelligence is transforming financial operations and what it means for your organization.",
      author: "Dr. Sarah Chen",
      readTime: "15 min read",
      downloadCount: "2.3k downloads",
      badge: "Featured",
      category: "AI & Technology"
    },
    {
      type: "Case Study",
      title: "How Alpine Partners Reduced Month-End by 60%",
      description: "Real-world implementation story showcasing measurable efficiency gains through Logos automation.",
      author: "Michael Rodriguez",
      readTime: "12 min read",
      downloadCount: "1.8k downloads",
      badge: "Popular",
      category: "Success Stories"
    },
    {
      type: "eBook",
      title: "A Guide to Choosing Your Next Fund Administration Platform",
      description: "Essential considerations for evaluating and selecting the right technology platform for your fund operations.",
      author: "Jennifer Walsh",
      readTime: "25 min read",
      downloadCount: "3.1k downloads",
      badge: "New",
      category: "Platform Selection"
    }
  ];

  const blogPosts = [
    {
      title: "Best Practices for Waterfall Automation",
      excerpt: "Learn how to set up and optimize automated waterfall calculations for complex fund structures.",
      author: "Alex Thompson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Fund Administration"
    },
    {
      title: "Navigating Data Challenges in Alternative Investments",
      excerpt: "Strategies for handling diverse data sources and ensuring accuracy in alternative investment reporting.",
      author: "Lisa Park",
      date: "March 12, 2024",
      readTime: "10 min read",
      category: "Data Management"
    },
    {
      title: "Leveraging AI for Enhanced Portfolio Analytics",
      excerpt: "Discover how artificial intelligence can provide deeper insights into portfolio performance and risk.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "12 min read",
      category: "AI & Analytics"
    }
  ];

  const upcomingWebinars = [
    {
      title: "AI-Powered Reconciliation: Live Demo",
      date: "April 15, 2024",
      time: "2:00 PM EST",
      presenter: "Sarah Chen, Head of Product",
      registered: 245
    },
    {
      title: "Mastering Complex Waterfall Structures",
      date: "April 22, 2024",
      time: "1:00 PM EST",
      presenter: "Michael Rodriguez, Solutions Engineer",
      registered: 189
    }
  ];

  const faqs = [
    {
      question: "How secure is Logos?",
      answer: "Logos employs bank-grade security with end-to-end encryption, multi-factor authentication, and SOC 2 Type II compliance."
    },
    {
      question: "What integrations are available?",
      answer: "We support 200+ integrations including all major custodians, prime brokers, and market data providers."
    },
    {
      question: "How long does implementation take?",
      answer: "Typical implementations range from 4-12 weeks depending on complexity and data migration requirements."
    },
    {
      question: "Do you provide training?",
      answer: "Yes, we provide comprehensive training including live sessions, documentation, and ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Knowledge <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Explore our comprehensive library of resources designed to help you succeed 
              with Logos and stay ahead in the evolving financial technology landscape.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Search resources, guides, and documentation..."
                className="pl-12 pr-4 py-3 text-lg border-slate-200 focus:border-blue-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
          </div>

          {/* Resource Type Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {resourceTypes.map((type, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                    {type.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{type.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{type.count}</p>
                <p className="text-sm text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-slate-600">
              Our most popular and impactful content for financial professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <Badge 
                      className={`text-xs ${
                        resource.badge === 'Featured' ? 'bg-blue-600' : 
                        resource.badge === 'Popular' ? 'bg-green-600' : 'bg-purple-600'
                      } text-white`}
                    >
                      {resource.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {resource.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {resource.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{resource.downloadCount}</span>
                    <Button size="sm" variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Latest from Our Blog</h2>
              <p className="text-slate-600">Stay updated with industry insights and product news</p>
            </div>
            <Button variant="outline">
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-500 mt-2">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-slate-600">
              Join our experts for live demonstrations and industry discussions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingWebinars.map((webinar, index) => (
              <Card key={index} className="border-0 bg-slate-50">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Video className="h-5 w-5 text-blue-600 mr-2" />
                    <Badge variant="outline">Live Webinar</Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {webinar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-slate-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {webinar.date} at {webinar.time}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <User className="h-4 w-4 mr-2" />
                      {webinar.presenter}
                    </div>
                    <div className="text-sm text-slate-500">
                      {webinar.registered} registered
                    </div>
                  </div>
                  <Button className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find what you're looking for? Our team is here to help with 
            any questions about Logos or your specific use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              Request Documentation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
