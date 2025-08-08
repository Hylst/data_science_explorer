
import React from "react";
import { BookOpen, Clock, User, ChevronRight, Search, Tag, Heart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { blogPosts } from "@/components/blog/BlogList";

const BlogSection = () => {
  // Affichage des 4 premiers articles uniquement
  const displayedPosts = blogPosts.slice(0, 4);

  return (
    <div id="blog" className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Blog Data</h2>
      <div className="prose prose-lg max-w-none mb-6">
        <p>
          Des articles sur la data science abordés avec une touche d'humour et de vécu personnel.
          Découvrez des histoires, des témoignages et des expériences professionnelles qui donnent
          un visage humain aux chiffres et aux algorithmes.
        </p>
      </div>
      
      {/* Barre de recherche et filtres */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Rechercher un article..." 
            className="pl-9 w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="cursor-pointer hover:bg-ds-purple-50 flex items-center gap-1">
            <Tag className="h-3 w-3" />
            Humour
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-ds-purple-50 flex items-center gap-1">
            <Tag className="h-3 w-3" />
            Témoignages
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-ds-purple-50 flex items-center gap-1">
            <Tag className="h-3 w-3" />
            Tutoriels
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-ds-purple-50 flex items-center gap-1">
            <Tag className="h-3 w-3" />
            Carrières
          </Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {displayedPosts.map((post, index) => (
          <Card 
            key={index} 
            className={`hover:shadow-lg transition-all h-full ${
              post.featured ? "border-2 border-ds-purple-500" : ""
            }`}
          >
            {post.featured && (
              <div className="bg-ds-purple-500 text-white text-xs py-1 px-3 text-center">
                Article à la une
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl font-bold hover:text-ds-purple-600 transition-colors">
                <Link to={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.categories.map((category, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="bg-ds-purple-100 text-ds-purple-800 hover:bg-ds-purple-200"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime} de lecture</span>
                </div>
                <div className="flex items-center text-ds-purple-500">
                  <Heart className="h-3 w-3 mr-1 fill-ds-purple-500" />
                  <span>{post.likes}</span>
                </div>
                <span className="text-gray-400">{post.date}</span>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-end mt-auto">
              <Button 
                variant="ghost" 
                className="text-ds-purple-600 hover:text-ds-purple-700 hover:bg-ds-purple-50" 
                asChild
              >
                <Link to={`/blog/${post.id}`} className="flex items-center gap-1">
                  Lire l'article
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mb-6">
        <Button asChild>
          <Link to="/blog">
            <BookOpen className="h-4 w-4 mr-2" />
            Voir tous les articles
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogSection;
