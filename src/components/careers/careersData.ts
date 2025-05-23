
export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  shortDescription: string;
  fullDescription: string;
  responsibilities: string[];
  milestones: {
    title: string;
    description: string;
  }[];
  grants: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  training: {
    description: string;
    noticePeriod: string;
  };
}

export const careers: Career[] = [
  {
    id: "representatives-leaders",
    title: "Representatives/Leaders",
    department: "Uni-Pitch",
    location: "Remote/Hybrid",
    type: "Full-time",
    shortDescription: "Lead the Uni-Pitch initiative connecting students with worldwide free opportunities and tackling business vendors & high fees.",
    fullDescription: "As a Representative/Leader for Uni-Pitch, you'll be at the forefront of our world-first help-desk that connects students with worldwide free opportunities. Your mission will be to tackle business vendors & high fees that students face, organize impactful campaigns, collect and process student queries, and establish connections with departments to ensure every student query gets resolved. Your success will be measured by the number of 'letters of appreciation' you receive, directly reflecting your impact on students' lives and academic journeys.",
    responsibilities: [
      "Organize and lead campaigns to promote Uni-Pitch services among student communities",
      "Collect and process student queries via forms and other communication channels",
      "Establish strong connections with various departments to ensure effective query resolution",
      "Maintain detailed records of resolved queries and follow up when necessary",
      "Generate impact reports highlighting key metrics and success stories",
      "Collaborate with other team members to improve service delivery and expand reach",
      "Represent Uni-Pitch at relevant events and networking opportunities",
      "Identify and address systemic issues affecting students' access to opportunities"
    ],
    milestones: [
      {
        title: "Initial Onboarding (First Month)",
        description: "Complete training, understand Uni-Pitch mission, handle first 50 student queries"
      },
      {
        title: "Establishing Connections (1-3 Months)",
        description: "Build relationships with 10+ departments, create streamlined query resolution system"
      },
      {
        title: "Community Building (3-6 Months)",
        description: "Organize 3+ awareness campaigns, achieve 70% query resolution rate"
      },
      {
        title: "Impact Scaling (6-12 Months)",
        description: "Impact 1,000+ students, collect 100+ letters of appreciation, identify improvement areas"
      }
    ],
    grants: [
      {
        title: "Impact-Based Grants",
        description: "₹1 Lakh grant for every 1,000 impacted students (verified through feedback and tracking system)"
      },
      {
        title: "Success-Based Grants",
        description: "₹2-4 Lakh grant range for demonstrating 100+ student success stories through Uni-Pitch support"
      },
      {
        title: "Initiative Grants",
        description: "Additional funding for innovative approaches that expand Uni-Pitch's reach and effectiveness"
      }
    ],
    benefits: [
      "Official certification recognizing your contributions",
      "Letter of Recommendation (LOR) for future career opportunities",
      "Travel allowance for work-related trips and events",
      "Invitation to participate in summits and conferences as a guest speaker",
      "Opportunity for promotion to core leadership team",
      "Career advancement opportunities within the organization",
      "Professional profile published on our website",
      "Exclusive access to tenders and partnership opportunities",
      "Higher percentage on grants based on performance metrics"
    ],
    training: {
      description: "Comprehensive training program covering help-desk management, student query handling, department coordination, impact tracking, and communication skills. Mentorship from experienced team members throughout your journey.",
      noticePeriod: "18 days notice period during which you'll receive intensive training and be gradually introduced to your core responsibilities."
    }
  },
  {
    id: "relation-manager",
    title: "Relation Manager",
    department: "UIEC & Social Welfare",
    location: "Remote/Hybrid",
    type: "Full-time",
    shortDescription: "Build and maintain relationships with institutions to promote UIEC standards and support social welfare initiatives.",
    fullDescription: "As a Relation Manager for UIEC (Uniford Institutional Empowerment Council) & Social Welfare, you'll play a crucial role in transforming institutes to international standards using grants & funds. Your responsibility will be to connect with institutes, raise awareness about our initiatives, and bring more institutions into our council. Additionally, you'll support our Social Welfare projects targeting special needs institutes and gifted students. Your impact will be measured by the 'letters of clearance' you collect, symbolizing successful education and awareness of institutes about our programs.",
    responsibilities: [
      "Develop and maintain relationships with educational institutions at various levels",
      "Create awareness about UIEC standards and benefits among institutional leadership",
      "Facilitate the process for institutions to join the UIEC council",
      "Document and track institution engagement and progress toward international standards",
      "Identify special needs institutes and gifted students for Social Welfare support",
      "Apply UIEC policy & terms to ensure proper implementation of standards",
      "Coordinate with grant committees to align institution needs with available funding",
      "Organize workshops and seminars to educate institutions about UIEC standards"
    ],
    milestones: [
      {
        title: "Relationship Building (First Month)",
        description: "Establish contacts with 20+ educational institutions, complete orientation to UIEC standards"
      },
      {
        title: "Awareness Creation (1-3 Months)",
        description: "Conduct 10+ awareness sessions, bring 5+ institutions into preliminary discussions"
      },
      {
        title: "Council Growth (3-6 Months)",
        description: "Successfully onboard 10+ institutions to UIEC council, collect first 20 letters of clearance"
      },
      {
        title: "Standard Implementation (6-12 Months)",
        description: "Help 5+ institutions implement international standards, identify 10+ special needs cases for support"
      }
    ],
    grants: [
      {
        title: "Institution Engagement Grants",
        description: "₹1 Lakh grant for every 20 institutions successfully educated about UIEC standards"
      },
      {
        title: "Council Growth Grants",
        description: "₹2-4 Lakh range for bringing 10+ quality institutions into the UIEC council"
      },
      {
        title: "Social Welfare Impact Grants",
        description: "Additional funding for successful implementation of support for special needs cases"
      }
    ],
    benefits: [
      "Professional certification in Institutional Relations Management",
      "Detailed Letter of Recommendation highlighting specific achievements",
      "Comprehensive travel allowance for institution visits and events",
      "Speaker opportunities at educational summits and conferences",
      "Fast-track path to senior positions within UIEC leadership",
      "Networking opportunities with educational leaders and policymakers",
      "Featured profile on UIEC website and publications",
      "Access to exclusive educational tenders and partnership opportunities",
      "Performance-based bonus structure on grants and project funding"
    ],
    training: {
      description: "Specialized training in institutional relationship management, UIEC standards and policies, grant proposal development, special needs assessment, and communication strategies for educational leadership engagement.",
      noticePeriod: "18 days notice period with focused training on UIEC policies, institutional assessment methods, and relationship building strategies."
    }
  }
];
