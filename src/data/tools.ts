export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  path: string;
}

// Add your tools here - each tool will automatically appear on the home page
export const tools: Tool[] = [
  {
    id: "example-tool",
    name: "Example Tool",
    description: "This is an example tool to show how the system works. Replace this with your actual tools.",
    icon: "Wrench",
    category: "Example",
    path: "/tools/example-tool"
  },
  // Add more tools here following the same structure
  // {
  //   id: "your-tool-id",
  //   name: "Your Tool Name",
  //   description: "Description of what your tool does",
  //   icon: "IconName", // From lucide-react
  //   category: "Category",
  //   path: "/tools/your-tool-id"
  // },
];

export const categories = Array.from(new Set(tools.map(tool => tool.category)));
