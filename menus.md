Site Structure Overview

The website is a Data Science education platform with several main sections accessed through a horizontal navigation bar. Each section page uses a consistent layout pattern with ContentLayout and internal sidebar navigation.
Main Horizontal Navigation Menu (Navbar)

Located in src/components/layout/Navbar.tsx, the main horizontal menu includes:

    Logo/Brand: "DataScienceExplorer" linking to homepage
    Navigation links: Introduction, Fondamentaux, Machine Learning, Outils, Projets, Ressources, Communauté
    Theme switcher: Light/Dark/System mode
    Search button
    "Commencer" (Get Started) button linking to Introduction

This horizontal menu is responsive, collapsing into a mobile menu on smaller screens.
Page Structure & Internal Navigation Pattern

Each main content page follows this pattern:

    Uses ContentLayout component which provides:
        A page title
        A back link to a parent section
        A sidebar navigation menu for internal page sections
        The main content area

    Uses PageHeader component for consistent header styling

Internal Navigation Pattern (Sidebar)

The sidebar navigation system in ContentLayout shows section links within the current page. The implementation uses:

    SidebarProvider for state management
    Sidebar components from shadcn/ui
    Scroll tracking to highlight the active section
    Smooth scrolling to anchors

Each page defines its own sidebar items with:

    Title
    Anchor link href (e.g., "#introduction")
    Icon
    Active state tracking

Specific Pages Analysis

1. Introduction Page

    URL: /introduction
    Component: src/pages/Introduction.tsx
    Sidebar sections: Definition, History, Pillars, Lifecycle, Applications, Careers
    Content: IntroductionContent component

2. Machine Learning Page

    URL: /machine-learning
    Component: src/pages/MachineLearning.tsx
    Sidebar sections: Introduction to ML, Supervised Learning, Unsupervised Learning, Model Evaluation, Deep Learning
    Content: MachineLearningContent component with MachineLearningContextProvider

3. Community Page

    URL: /community
    Component: src/pages/Community.tsx
    Sidebar sections: Forums, Events, Social, Contribute, Blog, News
    Content: Various section components (ForumsSection, EventsSection, etc.)

Key Components

1. Layout Components:

    Layout.tsx: Basic layout with Navbar, main content, and Footer
    ContentLayout.tsx: Specialized layout for content pages with sidebar navigation
    PageHeader.tsx: Consistent header styling for page titles and descriptions

2. Navigation Components:

    Sidebar from shadcn/ui: Powers the internal page navigation
    NavigationMenu for dropdown menus in the navbar

3. Context Providers:

    SidebarProvider: Manages sidebar state (expanded/collapsed)
    MachineLearningContextProvider: Specific context for the ML page

Anchor Navigation Implementation

The site implements smooth scrolling to anchors through:

    Event listeners for anchor clicks
    Preventing default behavior
    Smooth scrolling with offset to account for fixed headers
    Tracking active sections during scrolling to update sidebar highlighting

Each content page implements this pattern slightly differently but with the same core functionality.

This analysis shows a well-structured application with consistent patterns for navigation and layout across different content areas.
