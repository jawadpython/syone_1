export interface NavItem {
  href:
    | "/"
    | "/expertises"
    | "/notre-approche"
    | "/equipe"
    | "/cas-d-usage"
    | "/contact";
  labelKey: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Expertise {
  title: string;
  description: string;
  icon: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  challenge: string;
  value: string;
  metrics?: { label: string; value: string }[];
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
}

export interface ContactFormLabels {
  name: string;
  email: string;
  company: string;
  phone: string;
  need: string;
  message: string;
  consent: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
}
