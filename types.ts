
export type Category = 
  | 'Artificial Intelligence' 
  | 'Design' 
  | 'Productivity' 
  | 'Finance' 
  | 'Sales & Marketing'
  | 'Automation';

export interface Product {
  id: string;
  name: string;
  website: string;
  category: Category;
  description: string;
  logoInitial: string;
  screenshot?: string;
  featured?: boolean;
}

export interface ComparisonContextType {
  selectedProducts: Product[];
  toggleProduct: (product: Product) => void;
  clearSelection: () => void;
}
