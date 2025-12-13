import { Product } from '../types';

export const products: Product[] = [
  // CRM
  {
    id: 'crm-1',
    name: 'Salesforce Industries (Vlocity)',
    website: 'salesforce.com',
    employees: '79,000+',
    revenue: '$34.8B',
    coreOffering: 'Enterprise Cloud CRM & Policy Management',
    marketShare: 32,
    category: 'CRM',
    description: 'The market leader offering deep customization for insurance carriers and large brokerages.',
    logoInitial: 'S'
  },
  {
    id: 'crm-2',
    name: 'AgencyBloc',
    website: 'agencybloc.com',
    employees: '150+',
    revenue: '$25M',
    coreOffering: 'AMS & CRM for Life/Health Agencies',
    marketShare: 12,
    category: 'CRM',
    description: 'Industry-specific agency management system built specifically for life and health insurance agencies.',
    logoInitial: 'A'
  },
  {
    id: 'crm-3',
    name: 'Better Agency',
    website: 'betteragency.io',
    employees: '50+',
    revenue: '$8M',
    coreOffering: 'Automation-First Insurance CRM',
    marketShare: 5,
    category: 'CRM',
    description: 'A modern CRM focusing on automation and sales pipelines for independent agents.',
    logoInitial: 'B'
  },
  {
    id: 'crm-4',
    name: 'HubSpot',
    website: 'hubspot.com',
    employees: '7,000+',
    revenue: '$1.7B',
    coreOffering: 'Inbound Marketing & Sales CRM',
    marketShare: 18,
    category: 'CRM',
    description: 'A versatile platform widely used by insurtech startups for its ease of use and marketing integration.',
    logoInitial: 'H'
  },

  // Lead Generation
  {
    id: 'lead-1',
    name: 'SmartFinancial',
    website: 'smartfinancial.com',
    employees: '200+',
    revenue: '$50M+',
    coreOffering: 'Real-time Insurance Leads & Calls',
    marketShare: 15,
    category: 'Lead Generation',
    description: 'Provides high-intent insurance leads and live transfers for agents across the US.',
    logoInitial: 'S'
  },
  {
    id: 'lead-2',
    name: 'EverQuote',
    website: 'everquote.com',
    employees: '500+',
    revenue: '$400M',
    coreOffering: 'Data-Driven Lead Marketplace',
    marketShare: 22,
    category: 'Lead Generation',
    description: 'One of the largest online marketplaces for insurance shopping in the US.',
    logoInitial: 'E'
  },
  {
    id: 'lead-3',
    name: 'QuoteWizard',
    website: 'quotewizard.com',
    employees: '150+',
    revenue: '$150M',
    coreOffering: 'High-Volume Consumer Leads',
    marketShare: 18,
    category: 'Lead Generation',
    description: 'Owned by LendingTree, offering extensive reach in auto, home, and health insurance leads.',
    logoInitial: 'Q'
  },
  {
    id: 'lead-4',
    name: 'Datalot',
    website: 'datalot.com',
    employees: '100+',
    revenue: '$40M',
    coreOffering: 'Pay-Per-Call Mobile Leads',
    marketShare: 8,
    category: 'Lead Generation',
    description: 'Specializes in live calls and mobile traffic generation for carriers.',
    logoInitial: 'D'
  },

  // Marketing Automation
  {
    id: 'mar-1',
    name: 'ActiveCampaign',
    website: 'activecampaign.com',
    employees: '1,000+',
    revenue: '$165M',
    coreOffering: 'CX Automation & Email Marketing',
    marketShare: 14,
    category: 'Marketing Automation',
    description: 'Popular among agencies for its powerful visual automation builder and CRM capabilities.',
    logoInitial: 'A'
  },
  {
    id: 'mar-2',
    name: 'Marketo (Adobe)',
    website: 'marketo.com',
    employees: '1,500+',
    revenue: '$400M+',
    coreOffering: 'Enterprise B2B Marketing Automation',
    marketShare: 20,
    category: 'Marketing Automation',
    description: 'A robust solution for large carriers needing complex lead scoring and account-based marketing.',
    logoInitial: 'M'
  },
  {
    id: 'mar-3',
    name: 'Levitate',
    website: 'levitate.ai',
    employees: '200+',
    revenue: '$30M',
    coreOffering: 'Keep-in-touch Marketing',
    marketShare: 6,
    category: 'Marketing Automation',
    description: 'Built specifically for relationship-based businesses like insurance to maintain personal connections.',
    logoInitial: 'L'
  },

  // Lead Enrichment
  {
    id: 'enrich-1',
    name: 'ZoomInfo',
    website: 'zoominfo.com',
    employees: '3,000+',
    revenue: '$1.1B',
    coreOffering: 'B2B Database & Intelligence',
    marketShare: 28,
    category: 'Lead Enrichment',
    description: 'The gold standard for B2B contact data, often used by commercial lines producers.',
    logoInitial: 'Z'
  },
  {
    id: 'enrich-2',
    name: 'Clearbit',
    website: 'clearbit.com',
    employees: '100+',
    revenue: '$30M',
    coreOffering: 'Real-time Data Enrichment API',
    marketShare: 10,
    category: 'Lead Enrichment',
    description: 'Excellent for enriching inbound leads instantly to route commercial opportunities effectively.',
    logoInitial: 'C'
  },

  // Sales Enablement
  {
    id: 'sales-1',
    name: 'Gong',
    website: 'gong.io',
    employees: '1,200+',
    revenue: '$180M',
    coreOffering: 'Revenue Intelligence & Call Recording',
    marketShare: 25,
    category: 'Sales Enablement',
    description: 'Analyzes sales conversations to reveal what top insurance producers do differently.',
    logoInitial: 'G'
  },
  {
    id: 'sales-2',
    name: 'Seismic',
    website: 'seismic.com',
    employees: '1,500+',
    revenue: '$300M',
    coreOffering: 'Sales Content Management',
    marketShare: 22,
    category: 'Sales Enablement',
    description: 'Helps carriers ensure agents are using compliant, up-to-date collateral.',
    logoInitial: 'S'
  },
  {
    id: 'sales-3',
    name: 'Highspot',
    website: 'highspot.com',
    employees: '1,000+',
    revenue: '$150M',
    coreOffering: 'Sales Guidance & Training',
    marketShare: 15,
    category: 'Sales Enablement',
    description: 'Combines content management with training to ramp up new agents faster.',
    logoInitial: 'H'
  }
];