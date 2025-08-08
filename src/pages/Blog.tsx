
import { useParams, Link } from "react-router-dom";
import ContentLayout from "@/components/layout/ContentLayout";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronLeft } from "lucide-react";
import BlogList, { blogPosts } from "@/components/blog/BlogList";
import BlogPost from "@/components/blog/BlogPost";
import UnifiedHeroSection from "@/components/ui/unified-hero-section";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const Blog = () => {
  const { id } = useParams();
  const blogPost = id ? blogPosts.find(post => post.id === id) : null;
  
  // Utilise le hook de smooth scrolling
  useSmoothScroll();

  // Sidebar navigation items
  const sidebarItems = [
    { 
      title: "Tous les articles", 
      href: "/blog", 
      isActive: !id,
      icon: <BookOpen className="h-4 w-4" /> 
    },
    // Ajout d'articles spécifiques dans la sidebar
    ...(blogPosts.slice(0, 5).map(post => ({
      title: post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title,
      href: `/blog/${post.id}`,
      isActive: id === post.id,
      icon: null
    })))
  ];

  return (
    <ContentLayout 
      title="Blog Data" 
      backLink={{ href: "/community", label: "Retour à la communauté" }}
      sidebar={{ 
        items: sidebarItems
      }}
    >
      <section className="py-4">
        <UnifiedHeroSection
          variant="page"
          title="Blog Data Science"
          description="Des articles pour explorer la data science à travers des expériences humaines, avec une touche d'humour et de vécu professionnel."
        />
        
        {id ? <BlogPost id={id} content={blogPost?.content} title={blogPost?.title} /> : <BlogList />}
        
        <div className="mt-12 flex justify-between items-center pt-8 border-t">
          <Button variant="outline">
            <Link to="/community" className="flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              Retour à la communauté
            </Link>
          </Button>
          <Button size="lg">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </section>
    </ContentLayout>
  );
};

export default Blog;
