
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, Heart } from "lucide-react";
import { blogPosts } from "./BlogList";
import { Badge } from "@/components/ui/badge";

interface BlogPostProps {
  id: string;
  title?: string;
  content?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ id }) => {
  // Si title et content ne sont pas fournis, trouvez l'article par id
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="my-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Article non trouvé</h2>
        <p className="mb-8">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
        <Button asChild>
          <Link to="/blog">Retour à la liste des articles</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="outline" className="mb-6" asChild>
        <Link to="/blog" className="flex items-center">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Retour aux articles
        </Link>
      </Button>

      {/* En-tête de l'article */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-6">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </div>
          <div className="flex items-center text-ds-purple-600">
            <Heart className="h-4 w-4 mr-1 fill-ds-purple-600" />
            {post.likes} réactions
          </div>
          <span>{post.readTime} de lecture</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {post.categories.map((category, index) => (
            <Badge 
              key={index} 
              variant="secondary"
              className="bg-ds-purple-100 text-ds-purple-800"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Contenu de l'article */}
      <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
      
      {/* Pied de page de l'article */}
      <div className="border-t pt-8 mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="font-semibold">Écrit par {post.author}</h3>
            <p className="text-gray-600 text-sm">Publié le {post.date}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Cet article vous a-t-il été utile?</span>
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              J'aime
            </Button>
          </div>
        </div>
      </div>
      
      {/* Articles suggérés */}
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6">Articles similaires</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts
            .filter(otherPost => otherPost.id !== post.id)
            .slice(0, 2)
            .map((relatedPost, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <Link to={`/blog/${relatedPost.id}`} className="font-medium hover:text-ds-purple-600 transition-colors">
                  {relatedPost.title}
                </Link>
                <p className="text-sm text-gray-600 mt-2">{relatedPost.excerpt.substring(0, 100)}...</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
