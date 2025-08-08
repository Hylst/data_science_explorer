/**
 * Contact page component - Provides contact information and form for the Data Science Explorer project
 */
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, User, Send, Github, Linkedin, Globe } from "lucide-react";

/**
 * Contact component - Displays contact information and contact form
 * @returns JSX element containing the contact page
 */
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles form input changes
   * @param e - Input change event
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handles form submission
   * @param e - Form submit event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual implementation)
    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact - Data Science Explorer</title>
        <meta
          name="description"
          content="Contactez Geoffroy Streit, créateur de Data Science Explorer. Posez vos questions, partagez vos suggestions ou collaborez sur des projets de data science."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <Mail className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600">
            Une question, une suggestion ou envie de collaborer ?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  À propos de Geoffroy Streit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Passionné de data science et créateur de Data Science Explorer, 
                  je partage mes apprentissages et découvertes dans ce domaine fascinant. 
                  N'hésitez pas à me contacter pour échanger sur vos projets ou poser vos questions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-gray-600" />
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-gray-600" />
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-700">Data Science Explorer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Types de messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Questions techniques</h3>
                      <p className="text-sm text-gray-600">Aide sur les concepts de data science, outils, méthodes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Suggestions d'amélioration</h3>
                      <p className="text-sm text-gray-600">Idées pour enrichir le contenu du site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Collaborations</h3>
                      <p className="text-sm text-gray-600">Projets communs, partage d'expériences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Signalement d'erreurs</h3>
                      <p className="text-sm text-gray-600">Bugs, liens cassés, problèmes techniques</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre message..."
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Temps de réponse :</strong> Je m'efforce de répondre à tous les messages 
                    dans un délai de 48 heures. Merci pour votre patience !
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;