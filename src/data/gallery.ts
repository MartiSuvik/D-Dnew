import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    description: "A contemporary approach to luxury living with clean lines and natural materials.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    category: "Residential"
  },
  {
    id: 2,
    title: "Classic Penthouse",
    description: "Traditional elegance meets modern comfort in this stunning penthouse design.",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
    category: "Residential"
  },
  {
    id: 3,
    title: "Boutique Hotel Lobby",
    description: "A sophisticated welcome area that sets the tone for luxury hospitality.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?q=80&w=3028&auto=format&fit=crop",
    category: "Commercial"
  },
  {
    id: 4,
    title: "Executive Office Suite",
    description: "Premium workspace designed for productivity and prestige.",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
    category: "Commercial"
  }
];

export const categories = ["All", "Residential", "Commercial"];