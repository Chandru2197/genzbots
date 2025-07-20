export const ROUTES = {
  PRODUCT: {
    INDEX: '/product',
    BFSI: {
      INDEX: '/product',
      LOAN: '/product/bsfi/loan'
    },
    RETAIL: {
      INDEX: '/product',
      ORDER: '/product/retail&ecommerce/order',
      PRICING: '/product/retail&ecommerce/pricing',
      RETURNS: '/product/retail&ecommerce/returns'
    },
    MANUFACTURING: {
      INDEX: '/product',
      SHIPMENT: '/product/manufacturing&logistics/shipment',
      MAINTENANCE: '/product/manufacturing&logistics/maintenance',
      BOM: '/product/manufacturing&logistics/bom'
    },
    HR: {
      INDEX: '/product',
      RESUME: '/product/hr/resume',
      PAYROLL: '/product/hr/payroll',
      OFFBOARDING: '/product/hr/offboarding'
    },
    HEALTHCARE: {
      INDEX: '/product',
      PATIENT: '/product/healthcare&pharma/patient-onboarding',
      INVENTORY: '/product/healthcare&pharma/inventory',
      CLINICAL: '/product/healthcare&pharma/clinical',
      CLAIMS: '/product/healthcare&pharma/claims'
    },
    GOV: {
      INDEX: '/product',
      GRIEVANCE: '/product/gov&public/grievance-redressal'
    }
  }
} as const;
