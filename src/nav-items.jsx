import { Home, PlusCircle, Library, Compass } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Create",
    to: "/create",
    icon: <PlusCircle className="h-4 w-4" />,
    page: <div>Create Page</div>, // Placeholder for Create page
  },
  {
    title: "Library",
    to: "/library",
    icon: <Library className="h-4 w-4" />,
    page: <div>Library Page</div>, // Placeholder for Library page
  },
  {
    title: "Explore",
    to: "/explore",
    icon: <Compass className="h-4 w-4" />,
    page: <div>Explore Page</div>, // Placeholder for Explore page
  },
];