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
