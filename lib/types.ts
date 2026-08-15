export type ServiceDivision =
  | "business_technology"
  | "digital_presence"
  | "technology_partnership";

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry?: string;
  service_type: ServiceDivision;
  problem: string;
  approach: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  client_quote?: string;
  client_name?: string;
  image_urls: string[];
  pdf_url?: string;
  published_at: string | null;
}

export interface Service {
  id: string;
  slug: string;
  division: ServiceDivision;
  title: string;
  summary: string;
  body: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  headshot_url?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
