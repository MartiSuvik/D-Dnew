export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}