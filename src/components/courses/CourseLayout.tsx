
import { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import CourseBreadcrumb from "./CourseBreadcrumb";
import { Separator } from "@/components/ui/separator";

interface CourseLayoutProps {
  children: ReactNode;
  title: string;
  categoryName: string;
  courseName: string;
  categorySlug: string;
}

const CourseLayout = ({ 
  children, 
  title,
  categoryName,
  courseName,
  categorySlug
}: CourseLayoutProps) => {
  const breadcrumbItems = [
    {
      name: categoryName,
      href: `/courses/${categorySlug}`
    },
    {
      name: courseName,
      href: "#"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <CourseBreadcrumb items={breadcrumbItems} />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            {children}
          </div>
          <div className="md:w-1/4">
            <div className="sticky top-24 border rounded-lg p-4">
              <h3 className="font-semibold mb-2">À propos de ce cours</h3>
              <ul className="space-y-2 text-sm">
                <li>• Modules progressifs</li>
                <li>• Exemples pratiques</li>
                <li>• Exercices interactifs</li>
                <li>• Quizz de validation</li>
              </ul>
              
              <Separator className="my-4" />
              
              <h3 className="font-semibold mb-2">Ressources</h3>
              <ul className="space-y-2 text-sm">
                <li>• Matériel de cours</li>
                <li>• Exercices supplémentaires</li>
                <li>• Bibliographie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseLayout;
