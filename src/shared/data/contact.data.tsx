import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '../types';
import { HeroProps } from '../types';

// Hero data on Contact page *******************
// export const heroContact: HeroProps = {
//   title: 'Get in touch with us',
//   subtitle: (
//     <>
//       <span className="hidden md:inline">{`Thank you for considering us for your project! We're excited to hear from you.`}</span>{' '}
//       {`Our team can assist you in building your dream website.`}
//     </>
//   ),
//   tagline: 'Demo Contact Page',
// };
export const heroContact: HeroProps = {
  title: 'Transform Your Business with Automation',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Ready to streamline your processes and boost efficiency? `}</span>
      {`Let's discuss how our automation solutions can revolutionize your business operations.`}
    </>
  ),
  tagline: 'Business Automation Consultation',
};


// Contact data on Contact page *******************
// export const contact2Contact: ContactProps = {
//   id: 'contactTwo-on-contact',
//   hasBackground: true,
//   header: {
//     title: 'Contact us',
//     subtitle: (
//       <>
//         Please take a moment to fill out this form.{' '}
//         <span className="hidden md:inline">{`So we can better understand your needs and get the process started smoothly.`}</span>
//       </>
//     ),
//   },
//   items: [
//     {
//       title: 'Our Address',
//       description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
//       icon: IconMapPin,
//     },
//     {
//       title: 'Contact',
//       description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
//       icon: IconPhoneCall,
//     },
//     {
//       title: 'Working hours',
//       description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
//       icon: IconClock,
//     },
//   ],
//   form: {
//     title: 'Ready to Get Started?',
//     inputs: [
//       {
//         type: 'text',
//         label: 'First name',
//         name: 'name',
//         autocomplete: 'off',
//         placeholder: 'First name',
//       },
//       {
//         type: 'text',
//         label: 'Last name',
//         name: 'lastName',
//         autocomplete: 'off',
//         placeholder: 'Last name',
//       },
//       {
//         type: 'email',
//         label: 'Email address',
//         name: 'email',
//         autocomplete: 'on',
//         placeholder: 'Email address',
//       },
//     ],
//     radioBtns: {
//       label: 'What is the reason for your contact?',
//       radios: [
//         {
//           label: 'General inquiries',
//         },
//         {
//           label: 'Technical help',
//         },
//         {
//           label: 'Claims',
//         },
//         {
//           label: 'Others',
//         },
//       ],
//     },
//     textarea: {
//       cols: 30,
//       rows: 5,
//       label: 'How can we help you?',
//       name: 'textarea',
//       placeholder: 'Write your message...',
//     },
//     checkboxes: [
//       {
//         label: 'Have you read our privacy policy?',
//         value: '',
//       },
//       {
//         label: 'Do you want to receive monthly updates by email?',
//         value: '',
//       },
//     ],
//     btn: {
//       title: 'Send Message',
//       type: 'submit',
//     },
//   },
// };

export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Schedule Your Free Consultation',
    subtitle: (
      <>
        Tell us about your automation needs and we'll create a customized solution for your business.{' '}
        <span className="hidden md:inline">{`Our experts will guide you through the entire implementation process.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['1230 Business District', 'New York, NY 10001'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Phone: +1 (555) 123-4567', 'Email: automation@company.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 09:00 - 18:00', 'Saturday: 10:00 - 14:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'firstName',
        autocomplete: 'given-name',
        placeholder: 'Enter your first name',
        required: true,
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        autocomplete: 'family-name',
        placeholder: 'Enter your last name',
      },
      {
        type: 'text',
        label: 'Company name',
        name: 'companyName',
        autocomplete: 'organization',
        placeholder: 'Enter your company name',
      },
      {
        type: 'select',
        label: 'Country',
        name: 'country',
        placeholder: 'Select your country',
        options: [
          { value: 'US', label: 'United States' },
          { value: 'CA', label: 'Canada' },
          { value: 'GB', label: 'United Kingdom' },
          { value: 'IN', label: 'India' },
          { value: 'AU', label: 'Australia' },
          { value: 'DE', label: 'Germany' },
          { value: 'FR', label: 'France' },
          { value: 'JP', label: 'Japan' },
          { value: 'SG', label: 'Singapore' },
          { value: 'OTHER', label: 'Other' },
        ],
        defaultValue: 'IN',
      },
      {
        type: 'tel',
        label: 'Phone number',
        name: 'phoneNumber',
        autocomplete: 'tel',
        placeholder: '+91',
        required: true,
      },
      {
        type: 'email',
        label: 'Business email',
        name: 'businessEmail',
        autocomplete: 'email',
        placeholder: 'Enter your business email',
        required: true,
      },
    ],
    checkboxGroups: [
      {
        label: 'Process Automation',
        name: 'processAutomation',
        options: [
          { value: 'invoice', label: 'Invoice Processing Automation' },
          { value: 'hr', label: 'HR Onboarding/Offboarding Bots' },
          { value: 'dataEntry', label: 'Customer Data Entry Automation' },
          { value: 'erp', label: 'ERP/CRM Integration Bots' },
        ],
      },
      {
        label: 'Advanced Capabilities',
        name: 'advancedCapabilities',
        options: [
          { value: 'ai', label: 'AI + RPA (Chatbots/NLP/OCR)' },
          { value: 'legacy', label: 'Legacy System Automation' },
          { value: 'workflow', label: 'Cross-Platform Workflow Bots' },
        ],
      },
      {
        label: 'Implementation Services',
        name: 'implementationServices',
        options: [
          { value: 'endToEnd', label: 'End-to-End Implementation' },
          { value: 'managed', label: 'Managed Automation Services' },
          { value: 'training', label: 'Training for In-House Teams' },
          { value: 'custom', label: 'Other/Custom Bot' },
        ],
      },
    ],
    radioBtns: {
      label: 'Project Timeline',
      name: 'projectTimeline',
      radios: [
        { label: 'Immediate (Within 1 month)', value: 'immediate' },
        { label: 'Planned (1-3 months)', value: 'planned' },
        { label: 'Researching Options (3-6 months)', value: 'researching' },
      ],
    },
    checkboxes: [
      {
        label: 'By submitting your personal data you agree to receive marketing communications.',
        value: 'marketing',
        name: 'marketingConsent',
      },
    ],
    btn: {
      title: 'Schedule a Consultation',
      type: 'submit',
    },
  },
};


// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Why Choose Our Automation Solutions?',
    subtitle: 'Discover what makes us the preferred choice for business automation',
  },
  items: [
    {
      title: 'Expert Consultation',
      description: 'Get personalized advice from our automation specialists',
      icon: IconHelp,
      callToAction: {
        text: 'Learn More',
        href: '/services',
      },
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
      icon: IconMessages,
      callToAction: {
        text: 'Contact Support',
        href: '/support',
      },
    },
    {
      title: 'Proven Results',
      description: 'Join 500+ companies that have transformed their operations',
      icon: IconHeadset,
      callToAction: {
        text: 'View Case Studies',
        href: '/case-studies',
      },
    },
  ],
};
