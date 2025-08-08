
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import LatestArticles from "@/components/home/LatestArticles";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <FeaturedCourses />
      <FeatureHighlights />
      
      <LatestArticles />
      <NewsletterSignup />
    </Layout>
  );
};

export default Index;
