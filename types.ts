export type Category = 
  | 'Lead Generation' 
  | 'CRM' 
  | 'Marketing Automation' 
  | 'Lead Enrichment' 
  | 'Sales Enablement';

export interface Product {
  id: string;
  name: string;
  website: string;
  employees: string;
  revenue: string;
  coreOffering: string;
  marketShare: number; // Percentage
  category: Category;
  description: string;
  logoInitial: string;
}

export interface ComparisonContextType {
  selectedProducts: Product[];
  toggleProduct: (product: Product) => void;
  clearSelection: () => void;
}