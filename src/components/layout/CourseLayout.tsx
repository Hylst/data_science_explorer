import { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import CourseBreadcrumb from "@/components/courses/CourseBreadcrumb";
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
      <div className="w-full py-8 px-4">
        <div className="mb-6">
          <CourseBreadcrumb items={breadcrumbItems} />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <Separator className="mb-8" />
        
        <div className="w-full">
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default CourseLayout;
