
import React, { useEffect } from 'react';
import { ReactNode } from "react";
import Layout from "./Layout";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarProvider, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger,
  SidebarRail
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingSidebarToggle from "./FloatingSidebarToggle";

interface ContentLayoutProps {
  children: ReactNode;
  title: string;
  backLink?: {
    href: string;
    label: string;
  };
  sidebar: {
    items: {
      title: string;
      href?: string;
      isActive?: boolean;
      icon?: React.ReactNode;
      onClick?: () => void;
    }[];
  };
}

const ContentLayout = ({ children, title, backLink, sidebar }: ContentLayoutProps) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full min-h-screen">
        <SidebarProvider defaultOpen={true}>
          {/* Sidebar avec hauteur corrigée et padding approprié */}
          <div className="md:fixed md:top-14 md:bottom-0 md:left-0 z-10 md:w-[var(--sidebar-width)]">
            <Sidebar className="h-full border-r bg-sidebar">
              <SidebarHeader className="border-b border-sidebar-border p-4 min-h-[4rem]">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-lg font-semibold text-sidebar-foreground leading-tight break-words">{title}</h2>
                  <SidebarTrigger className="ml-2 flex-shrink-0" />
                </div>
                {backLink && (
                  <Button variant="ghost" size="sm" asChild className="w-fit">
                    <Link to={backLink.href} className="flex items-center gap-1 text-sm">
                      <ChevronLeft className="h-4 w-4" />
                      {backLink.label}
                    </Link>
                  </Button>
                )}
              </SidebarHeader>
              <SidebarContent className="px-2 py-4">
                <SidebarMenu>
                  {sidebar.items.map((item, index) => (
                    <SidebarMenuItem key={index}>
                      {item.href ? (
                        <SidebarMenuButton 
                          asChild
                          isActive={item.isActive}
                          onClick={item.onClick}
                          className="w-full"
                        >
                          {item.href.startsWith("#") ? (
                            <a href={item.href} className="flex items-center gap-3 w-full">
                              {item.icon && <span className="w-4 h-4 flex-shrink-0">{item.icon}</span>}
                              <span className="truncate">{item.title}</span>
                            </a>
                          ) : (
                            <Link to={item.href} className="flex items-center gap-3 w-full">
                              {item.icon && <span className="w-4 h-4 flex-shrink-0">{item.icon}</span>}
                              <span className="truncate">{item.title}</span>
                            </Link>
                          )}
                        </SidebarMenuButton>
                      ) : (
                        <SidebarMenuButton disabled className="w-full">
                          {item.icon && <span className="w-4 h-4 flex-shrink-0">{item.icon}</span>}
                          <span className="truncate">{item.title}</span>
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
          </div>
          <SidebarRail />

          {/* Contenu principal avec marges ajustées pour utiliser toute la largeur */}
          <div className="w-full md:ml-[var(--sidebar-width)] flex-1">
            <div id="content-main" className="w-full py-6 px-4 md:px-6 pb-20">
              {children}
            </div>
          </div>
          <FloatingSidebarToggle />
        </SidebarProvider>
      </div>
    </Layout>
  );
};

export default ContentLayout;
