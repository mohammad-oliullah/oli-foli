export interface EmploymentHistory {
  employmentType: string;
  startDate: string;
  endDate: string;
}

export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  focus: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate: string;
  previousEmployment?: EmploymentHistory;
  technologies: readonly string[];
  responsibilities: readonly string[];
  description: string;
}
