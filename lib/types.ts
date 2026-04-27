export interface LeadData {
  zipCode: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  dateOfBirth: string;
  licenseStatus: string;
  violations: string;
  currentlyInsured: "yes" | "no";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  trustedFormCertUrl?: string;
  leadId?: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface Lead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  zip_code: string;
  vehicle_year: string;
  vehicle_make: string;
  vehicle_model: string;
  currently_insured: string;
  trusted_form_cert_url: string;
  lead_id: string;
  created_at: string;
}
