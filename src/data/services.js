// ============================================================
// SERVICES DATA FILE
// Add, remove, or edit services here. All changes reflect
// automatically across the website.
// ============================================================

export const categories = [
  { id: "government-certificates", label: "Government Certificates" },
  { id: "identity-documents", label: "Identity & Personal Documents" },
  { id: "travel-international", label: "Travel & International Services" },
  { id: "education-student", label: "Education & Student Services" },
  { id: "digital-cafe", label: "Digital & Cyber Cafe Services" },
];

export const services = [
  // ─────────────────────────────────────────────
  // A. Government Certificates
  // ─────────────────────────────────────────────
  {
    id: "caste-certificate",
    slug: "caste-certificate",
    title: "Caste Certificate",
    category: "government-certificates",
    shortDescription:
      "Assistance with applying for a caste certificate from the competent authority.",
    keywords: ["caste", "sc", "st", "obc", "certificate", "jati"],
    icon: "FileText",
    purpose: [
      "Used as proof of caste for applicable official purposes.",
      "May be required for education, scholarships, or certain government benefits.",
      "Required during admissions or employment processes where caste-based reservations apply.",
    ],
    requiredDocuments: [
      "Aadhaar card or another accepted identity document.",
      "Address proof (utility bill, ration card, etc.).",
      "Relevant family or caste records, as applicable.",
      "Applicant photograph, if required by the authority.",
      "Additional documents as requested by the issuing authority.",
    ],
    eligibility:
      "Applicants belonging to Scheduled Caste, Scheduled Tribe, or Other Backward Class categories, as defined by the relevant government authority.",
    process: [
      "Contact Matoshri Cyber Cafe for guidance.",
      "Confirm current eligibility criteria and document checklist.",
      "Bring all required original documents.",
      "Get assistance with form filling and application submission.",
      "Track the application status as advised.",
    ],
    importantNotes: [
      "Requirements vary by applicant and issuing authority.",
      "Final approval rests with the competent government authority.",
      "The checklist above is indicative. Verify against current official requirements.",
      "Processing times depend on the government department.",
    ],
  },
  {
    id: "domicile-certificate",
    slug: "domicile-certificate",
    title: "Domicile Certificate",
    category: "government-certificates",
    shortDescription:
      "Assistance with applying for a domicile or residence certificate.",
    keywords: ["domicile", "residence", "state residence", "vasticha dakhla"],
    icon: "MapPin",
    purpose: [
      "Proof of residence within a state for official and educational purposes.",
      "Required for state-level scholarships, job reservations, and admissions.",
    ],
    requiredDocuments: [
      "Aadhaar card or accepted identity proof.",
      "Address proof showing long-term residence.",
      "Ration card or electricity bill.",
      "Applicant photograph, if required.",
    ],
    eligibility:
      "Persons who have resided in the state for the period specified by the relevant government authority.",
    process: [
      "Visit Matoshri Cyber Cafe for assistance.",
      "Verify the current required document list.",
      "Submit the application with all supporting documents.",
      "Follow up on the application status as guided.",
    ],
    importantNotes: [
      "Requirements and residence duration criteria differ by state.",
      "Verify all requirements with the issuing authority before applying.",
      "Government authority takes the final decision on approval.",
    ],
  },
  {
    id: "income-certificate",
    slug: "income-certificate",
    title: "Income Certificate",
    category: "government-certificates",
    shortDescription:
      "Assistance with applying for an income certificate for official purposes.",
    keywords: ["income", "utp", "income certificate", "utpanna dakhla"],
    icon: "IndianRupee",
    purpose: [
      "Certifies annual family income for government and educational purposes.",
      "Required for income-based scholarships, fee waivers, and benefits.",
    ],
    requiredDocuments: [
      "Aadhaar card or accepted identity proof.",
      "Address proof.",
      "Income-related documents such as salary slips, Form 16, or self-declaration as applicable.",
      "Ration card, if required.",
      "Applicant photograph, if required.",
    ],
    eligibility:
      "Any resident who needs to certify their income to avail of government schemes or educational benefits.",
    process: [
      "Consult Matoshri Cyber Cafe to understand requirements.",
      "Gather all necessary income-related documents.",
      "Get assistance with form filling and submission.",
      "Collect or track your certificate as guided.",
    ],
    importantNotes: [
      "Income thresholds for different schemes vary and are set by the government.",
      "Self-declared income documents may require verification.",
      "Final certification is at the discretion of the competent authority.",
    ],
  },
  {
    id: "non-creamy-layer-certificate",
    slug: "non-creamy-layer-certificate",
    title: "Non-Creamy Layer Certificate",
    category: "government-certificates",
    shortDescription:
      "Assistance with NCL certificate application for OBC category applicants.",
    keywords: ["ncl", "non creamy layer", "obc ncl", "non-creamy"],
    icon: "FileCheck",
    purpose: [
      "Required by OBC category applicants to avail reservations in education and employment.",
      "Certifies that the family income does not exceed the prescribed limit.",
    ],
    requiredDocuments: [
      "Aadhaar card or accepted identity proof.",
      "Caste certificate.",
      "Income proof of family (salary slips, tax returns, or self-declaration).",
      "Address proof.",
    ],
    eligibility:
      "OBC category applicants whose family income falls below the non-creamy layer income limit as defined by the government.",
    process: [
      "Visit Matoshri Cyber Cafe for guidance.",
      "Confirm the current income ceiling for NCL status.",
      "Bring all required documents.",
      "Get assistance with the application process.",
    ],
    importantNotes: [
      "Income limits are revised periodically by the government.",
      "NCL certificates have a validity period and must be renewed.",
      "Approval is subject to verification by the competent authority.",
    ],
  },
  {
    id: "ews-certificate",
    slug: "ews-certificate",
    title: "EWS Certificate",
    category: "government-certificates",
    shortDescription:
      "Assistance with Economically Weaker Section (EWS) certificate application.",
    keywords: ["ews", "economically weaker section", "general category"],
    icon: "FileCheck",
    purpose: [
      "For general category applicants who qualify under the EWS quota.",
      "Required for EWS reservations in government education and employment.",
    ],
    requiredDocuments: [
      "Aadhaar card or accepted identity proof.",
      "Income proof showing family income below the prescribed limit.",
      "Address proof.",
      "Proof of property or asset details, as required.",
    ],
    eligibility:
      "General category persons whose gross annual family income is below the EWS threshold set by the central or state government.",
    process: [
      "Consult Matoshri Cyber Cafe for current requirements.",
      "Gather income and property-related documents.",
      "Submit the application with assistance.",
      "Collect the certificate from the issuing authority.",
    ],
    importantNotes: [
      "EWS criteria and income limits are set by government notifications.",
      "The certificate is valid for the financial year of issue.",
      "Final approval is at the discretion of the competent authority.",
    ],
  },
  {
    id: "residence-certificate",
    slug: "residence-certificate",
    title: "Residence Certificate",
    category: "government-certificates",
    shortDescription:
      "Assistance with obtaining a residence certificate for official use.",
    keywords: ["residence", "rahivasi dakhla", "local residence"],
    icon: "Home",
    purpose: [
      "Proof of current residential address for official or local government purposes.",
      "May be required for local body services, utilities, or area-specific schemes.",
    ],
    requiredDocuments: [
      "Aadhaar card or accepted identity proof.",
      "Utility bill or ration card showing current address.",
      "Applicant photograph, if required.",
    ],
    eligibility: "Residents of the area requiring official address proof.",
    process: [
      "Contact Matoshri Cyber Cafe for guidance on the current process.",
      "Gather address proof documents.",
      "Get assistance with form filling and submission.",
    ],
    importantNotes: [
      "Residence certificate requirements differ from domicile certificate requirements.",
      "Verify the specific purpose for which you need this certificate.",
    ],
  },
  {
    id: "birth-certificate",
    slug: "birth-certificate",
    title: "Birth Certificate Assistance",
    category: "government-certificates",
    shortDescription:
      "Assistance with birth certificate application or correction processes.",
    keywords: ["birth certificate", "janam dakhla", "birth proof"],
    icon: "FileText",
    purpose: [
      "Official record of birth for identity, education, and legal purposes.",
      "Required for school admissions, passport applications, and other government records.",
    ],
    requiredDocuments: [
      "Hospital birth record or birth registration document.",
      "Parents' Aadhaar cards or accepted identity proof.",
      "Any existing birth record or hospital discharge summary.",
    ],
    eligibility:
      "Any person who requires an official birth certificate or a correction in an existing one.",
    process: [
      "Consult Matoshri Cyber Cafe regarding the applicable procedure.",
      "Collect and verify required documents.",
      "Get assistance with the application and submission.",
    ],
    importantNotes: [
      "Procedures for delayed registration or correction may differ.",
      "Issuance is done by the municipal or gram panchayat authority.",
      "Processing time depends on the issuing authority.",
    ],
  },
  {
    id: "death-certificate",
    slug: "death-certificate",
    title: "Death Certificate Assistance",
    category: "government-certificates",
    shortDescription:
      "Assistance with death certificate application for legal and administrative purposes.",
    keywords: ["death certificate", "mrutyu dakhla"],
    icon: "FileText",
    purpose: [
      "Official legal record of death for estate, insurance, and government procedures.",
      "Required for property transfer, pension processing, and legal matters.",
    ],
    requiredDocuments: [
      "Hospital death record or cause-of-death document.",
      "Aadhaar card or identity proof of the deceased.",
      "Identity proof of the applicant.",
      "Relationship proof, if required.",
    ],
    eligibility:
      "Family members or legal representatives of the deceased requiring an official death certificate.",
    process: [
      "Visit Matoshri Cyber Cafe for guidance.",
      "Collect required documents from the hospital or local authority.",
      "Get assistance with form filling and submission.",
    ],
    importantNotes: [
      "Timely registration is advisable to avoid late registration complications.",
      "Issuance is by the municipal or gram panchayat authority.",
    ],
  },

  // ─────────────────────────────────────────────
  // B. Identity and Personal Documents
  // ─────────────────────────────────────────────
  {
    id: "pan-card",
    slug: "pan-card",
    title: "PAN Card Assistance",
    category: "identity-documents",
    shortDescription:
      "Assistance with PAN card applications, corrections, or reprint requests.",
    keywords: ["pan card", "pan", "income tax", "permanent account number"],
    icon: "CreditCard",
    purpose: [
      "Required for income tax filing, financial transactions, and opening bank accounts.",
      "Mandatory for transactions above prescribed limits.",
    ],
    requiredDocuments: [
      "Aadhaar card (used for e-KYC-based PAN application).",
      "Date of birth proof.",
      "Address proof.",
      "Applicant photograph.",
    ],
    eligibility:
      "Any Indian citizen, including minors with guardian consent, and entities requiring a PAN.",
    process: [
      "Visit Matoshri Cyber Cafe.",
      "Choose between new PAN, correction, or reprint.",
      "Get assistance with online form submission through the official portal.",
      "Track application status and collect PAN card when delivered.",
    ],
    importantNotes: [
      "PAN applications are processed by NSDL or UTI through the Income Tax Department.",
      "Online applications through Aadhaar OTP-based e-KYC are faster.",
      "Verify fees and current process at the official government portal.",
    ],
  },
  {
    id: "aadhaar-update",
    slug: "aadhaar-update",
    title: "Aadhaar Update Assistance",
    category: "identity-documents",
    shortDescription:
      "Assistance with Aadhaar update requests for name, address, date of birth, or mobile number.",
    keywords: ["aadhaar", "aadhar", "uid", "update aadhaar", "address change"],
    icon: "IdCard",
    purpose: [
      "Keeping Aadhaar details accurate and up to date for identity verification purposes.",
      "Correcting name, address, date of birth, or mobile number linked to Aadhaar.",
    ],
    requiredDocuments: [
      "Existing Aadhaar card.",
      "Proof of the field being updated (e.g., address proof for address update).",
      "Identity proof, if required.",
    ],
    eligibility: "Any Aadhaar cardholder who needs to update their details.",
    process: [
      "Visit Matoshri Cyber Cafe.",
      "Confirm which field needs to be updated.",
      "Prepare the required supporting document.",
      "Get assistance with the online or offline update process through the official UIDAI portal.",
    ],
    importantNotes: [
      "Aadhaar updates are managed by UIDAI.",
      "Certain updates may require visiting an official Aadhaar enrolment or update centre.",
      "Processing time depends on UIDAI.",
    ],
  },
  {
    id: "voter-id",
    slug: "voter-id",
    title: "Voter ID Assistance",
    category: "identity-documents",
    shortDescription:
      "Assistance with Voter ID (EPIC) application, correction, or address change.",
    keywords: ["voter id", "epic", "voter card", "election card", "matdar"],
    icon: "Vote",
    purpose: [
      "Required to exercise the right to vote in elections.",
      "Accepted as a valid identity and address proof for various purposes.",
    ],
    requiredDocuments: [
      "Age proof (Aadhaar card, school leaving certificate, birth certificate).",
      "Address proof.",
      "Applicant photograph.",
    ],
    eligibility: "Indian citizens aged 18 years or above.",
    process: [
      "Contact Matoshri Cyber Cafe for guidance.",
      "Check the current election roll and whether your name is already registered.",
      "Get assistance with new registration or correction through the Voter Helpline portal.",
    ],
    importantNotes: [
      "Voter ID issuance is managed by the Election Commission of India.",
      "Verify the current voter list before applying for a new card.",
      "Form numbers and procedures may change. Verify current requirements.",
    ],
  },
  {
    id: "passport-assistance",
    slug: "passport-assistance",
    title: "Passport Application Assistance",
    category: "identity-documents",
    shortDescription:
      "Guidance and assistance with passport application form filling and document preparation.",
    keywords: ["passport", "passport application", "travel document"],
    icon: "BookOpen",
    purpose: [
      "Required for international travel and accepted as a valid identity document.",
      "Necessary for visa applications and foreign employment.",
    ],
    requiredDocuments: [
      "Aadhaar card or accepted identity proof.",
      "Address proof.",
      "Date of birth proof.",
      "Recent passport-sized photographs.",
      "Old passport (for renewal applications).",
    ],
    eligibility: "Any Indian citizen applying for a new or renewed passport.",
    process: [
      "Visit Matoshri Cyber Cafe for assistance.",
      "Get help filling the application on the Passport Seva Portal.",
      "Book an appointment at the Passport Seva Kendra.",
      "Visit the PSK with original documents on the appointment date.",
    ],
    importantNotes: [
      "Passport applications are processed by the Ministry of External Affairs.",
      "Police verification is a standard part of the process.",
      "Verify current fees and appointment availability at the official Passport Seva Portal.",
    ],
  },

  // ─────────────────────────────────────────────
  // C. Travel and International Services
  // ─────────────────────────────────────────────
  {
    id: "visa-assistance",
    slug: "visa-assistance",
    title: "Visa Application Assistance",
    category: "travel-international",
    shortDescription:
      "Assistance with understanding visa requirements and filling visa application forms.",
    keywords: ["visa", "tourist visa", "work visa", "student visa"],
    icon: "Plane",
    purpose: [
      "To help applicants understand the visa process for the destination country.",
      "Assistance with the visa application form and document preparation.",
    ],
    requiredDocuments: [
      "Valid passport.",
      "Photographs meeting destination country specifications.",
      "Bank statements or financial proof (as required by the country).",
      "Travel itinerary or invitation letter, if applicable.",
      "Supporting documents specific to the visa type.",
    ],
    eligibility:
      "Any person applying for a visa to travel abroad. Requirements vary by destination country and visa type.",
    process: [
      "Contact Matoshri Cyber Cafe to discuss the destination and visa type.",
      "Understand the required documents and checklist.",
      "Get assistance with filling the official visa application form.",
      "Submit the application to the relevant embassy, consulate, or visa centre.",
    ],
    importantNotes: [
      "Visa approval is at the sole discretion of the concerned embassy or authority.",
      "Requirements and fees differ by destination country and visa category.",
      "Verify current requirements at the official embassy or consulate website.",
      "We provide assistance, not a guarantee of visa approval.",
    ],
  },
  {
    id: "travel-document-assistance",
    slug: "travel-document-assistance",
    title: "Travel Document Assistance",
    category: "travel-international",
    shortDescription:
      "General assistance with travel-related document preparation and guidance.",
    keywords: ["travel documents", "international travel", "document guidance"],
    icon: "Briefcase",
    purpose: [
      "Help with organizing and preparing travel documents for international trips.",
      "Guidance on what documents may be required for border crossings and travel.",
    ],
    requiredDocuments: [
      "Passport.",
      "Visa (if applicable).",
      "Other documents as required by the destination country.",
    ],
    eligibility: "Any person planning international travel.",
    process: [
      "Visit Matoshri Cyber Cafe for a consultation.",
      "Discuss your travel plans and destination.",
      "Receive a checklist of commonly required documents.",
      "Get assistance in organizing and preparing your documents.",
    ],
    importantNotes: [
      "Always verify requirements with the official authority of the destination country.",
      "Travel requirements can change. Confirm close to your travel date.",
    ],
  },

  // ─────────────────────────────────────────────
  // D. Education and Student Services
  // ─────────────────────────────────────────────
  {
    id: "scholarship-assistance",
    slug: "scholarship-assistance",
    title: "Scholarship Application Assistance",
    category: "education-student",
    shortDescription:
      "Assistance with filling and submitting scholarship application forms.",
    keywords: [
      "scholarship",
      "shishyavrutti",
      "student scholarship",
      "mahajyoti",
      "obc scholarship",
    ],
    icon: "GraduationCap",
    purpose: [
      "Helping eligible students apply for government or institution scholarships.",
      "Ensuring forms are filled correctly to avoid rejection.",
    ],
    requiredDocuments: [
      "Caste certificate (where applicable).",
      "Income certificate.",
      "Non-Creamy Layer certificate (for OBC applicants, if required).",
      "Previous marksheets and passing certificates.",
      "Aadhaar card.",
      "Bank passbook copy.",
      "Bonafide letter from school or college.",
      "Domicile certificate, if required.",
    ],
    eligibility:
      "Eligibility varies by scholarship scheme. Verify the specific eligibility criteria for your scholarship.",
    process: [
      "Visit Matoshri Cyber Cafe.",
      "Identify the correct scholarship scheme.",
      "Get assistance with filling the application on the official scholarship portal.",
      "Submit the required documents.",
      "Track the application status.",
    ],
    importantNotes: [
      "Scholarship schemes have different eligibility criteria and deadlines.",
      "Approval and disbursement are managed by the respective government department.",
      "Ensure all documents are attested as required by the scheme.",
    ],
  },
  {
    id: "online-admission-forms",
    slug: "online-admission-forms",
    title: "Online Admission Form Assistance",
    category: "education-student",
    shortDescription:
      "Help with filling online admission forms for schools, colleges, or courses.",
    keywords: ["admission form", "school admission", "college admission", "online form"],
    icon: "ClipboardList",
    purpose: [
      "Assisting students and parents with the online admission process.",
      "Ensuring all fields are filled correctly and supporting documents are uploaded.",
    ],
    requiredDocuments: [
      "Previous academic records.",
      "Identity proof.",
      "Photograph.",
      "Category certificate, if applicable.",
      "Other documents as required by the institution.",
    ],
    eligibility:
      "Students seeking admission to schools, colleges, or educational programs.",
    process: [
      "Visit Matoshri Cyber Cafe with all required documents.",
      "Get assistance with filling the online admission form.",
      "Upload required documents as per instructions.",
      "Submit and note down the application reference number.",
    ],
    importantNotes: [
      "Admission criteria are set by the respective institution.",
      "Document requirements differ by institution and program.",
      "Always verify submission deadlines.",
    ],
  },
  {
    id: "exam-application-forms",
    slug: "exam-application-forms",
    title: "Exam Application Forms",
    category: "education-student",
    shortDescription:
      "Assistance with filling and submitting exam application forms online.",
    keywords: ["exam form", "examination form", "competitive exam", "board exam form"],
    icon: "PenSquare",
    purpose: [
      "Helping students complete exam registration forms accurately.",
      "Avoiding form errors that may result in rejection.",
    ],
    requiredDocuments: [
      "Valid identity proof.",
      "Previous exam mark sheets (where required).",
      "Photograph as per specifications.",
      "Category certificate, if applicable.",
    ],
    eligibility:
      "Students or candidates who need to register for examinations.",
    process: [
      "Visit Matoshri Cyber Cafe.",
      "Confirm the exam, application portal, and deadline.",
      "Get assistance with filling and submitting the form.",
      "Note the application or registration number for future reference.",
    ],
    importantNotes: [
      "Exam eligibility criteria are set by the respective examination authority.",
      "Verify fee payment deadlines. Late submissions may be rejected.",
      "Always check the official notification before applying.",
    ],
  },
  {
    id: "document-upload-printing",
    slug: "document-upload-printing",
    title: "Document Upload and Printing",
    category: "education-student",
    shortDescription:
      "Assistance with scanning, uploading, and printing documents for applications.",
    keywords: ["document upload", "scan", "print", "photocopy"],
    icon: "Upload",
    purpose: [
      "Helping applicants scan and upload documents to online portals correctly.",
      "Providing printing services for forms, certificates, and application copies.",
    ],
    requiredDocuments: [
      "Original documents to be scanned or uploaded.",
      "Details of the portal or form requiring upload.",
    ],
    eligibility: "Anyone who needs document scanning, uploading, or printing assistance.",
    process: [
      "Bring your original documents to Matoshri Cyber Cafe.",
      "Specify the portal or application requiring upload.",
      "Documents will be scanned and uploaded as per portal specifications.",
      "Printed copies will be provided as needed.",
    ],
    importantNotes: [
      "File size and format requirements differ by portal.",
      "Bring originals for scanning. Copies may not be acceptable for some processes.",
    ],
  },

  // ─────────────────────────────────────────────
  // E. Digital and Cyber Cafe Services
  // ─────────────────────────────────────────────
  {
    id: "online-form-filling",
    slug: "online-form-filling",
    title: "Online Form Filling",
    category: "digital-cafe",
    shortDescription:
      "Assistance with filling any online application form correctly.",
    keywords: ["form filling", "online form", "application form help"],
    icon: "ClipboardList",
    purpose: [
      "Helping individuals complete online forms for government or private applications.",
      "Reducing errors that can lead to application rejection.",
    ],
    requiredDocuments: [
      "Relevant identity and supporting documents, as required by the specific form.",
    ],
    eligibility: "Anyone requiring assistance with an online form.",
    process: [
      "Visit Matoshri Cyber Cafe.",
      "Bring all required documents.",
      "Form will be filled accurately with your details.",
      "You will receive confirmation of successful submission.",
    ],
    importantNotes: [
      "Different forms have different requirements. Bring all relevant documents.",
      "Always verify the form submission deadline before visiting.",
    ],
  },
  {
    id: "document-scanning",
    slug: "document-scanning",
    title: "Document Scanning",
    category: "digital-cafe",
    shortDescription:
      "Scanning of documents for digital applications and records.",
    keywords: ["scanning", "scan document", "digitize"],
    icon: "ScanLine",
    purpose: [
      "Creating digital copies of physical documents for online submissions.",
      "Maintaining digital records of important documents.",
    ],
    requiredDocuments: ["Original documents to be scanned."],
    eligibility: "Anyone requiring document scanning services.",
    process: [
      "Bring original documents to the cafe.",
      "Documents will be scanned at the required resolution.",
      "Files will be saved in the required format (PDF, JPG, etc.).",
    ],
    importantNotes: [
      "Always keep your original documents. Do not leave originals unattended.",
      "Specify the required file format and size before scanning.",
    ],
  },
  {
    id: "printing-photocopying",
    slug: "printing-photocopying",
    title: "Printing and Photocopying",
    category: "digital-cafe",
    shortDescription:
      "Black-and-white and colour printing, and photocopying services.",
    keywords: ["print", "photocopy", "xerox", "colour print"],
    icon: "Printer",
    purpose: [
      "Printing forms, certificates, applications, and other documents.",
      "Photocopying identity documents and supporting papers for applications.",
    ],
    requiredDocuments: ["Documents to be printed or photocopied."],
    eligibility: "Anyone requiring printing or photocopying services.",
    process: [
      "Bring your documents or a soft copy (USB or email).",
      "Specify black-and-white or colour requirement.",
      "Collect printed copies.",
    ],
    importantNotes: [
      "Contact the cafe for current printing rates.",
    ],
  },
  {
    id: "lamination",
    slug: "lamination",
    title: "Lamination",
    category: "digital-cafe",
    shortDescription:
      "Lamination of certificates, cards, and important documents.",
    keywords: ["lamination", "laminate", "document protection"],
    icon: "Square",
    purpose: [
      "Protecting important certificates and documents from damage.",
      "Providing a professional finish to printed materials.",
    ],
    requiredDocuments: ["Documents to be laminated."],
    eligibility: "Anyone requiring lamination services.",
    process: [
      "Bring the document to Matoshri Cyber Cafe.",
      "Lamination will be done promptly.",
    ],
    importantNotes: [
      "Lamination is permanent. Ensure the document is correct before proceeding.",
      "Some documents may require keeping in original, un-laminated form for official use.",
    ],
  },
  {
    id: "resume-preparation",
    slug: "resume-preparation",
    title: "Resume Preparation",
    category: "digital-cafe",
    shortDescription:
      "Assistance with creating or updating a professional resume.",
    keywords: ["resume", "cv", "biodata", "job application"],
    icon: "FileUser",
    purpose: [
      "Creating a professional resume for job applications.",
      "Updating an existing resume with new details.",
    ],
    requiredDocuments: [
      "Personal details (name, address, contact information).",
      "Educational qualifications.",
      "Work experience details, if any.",
      "Skill details.",
    ],
    eligibility: "Anyone requiring a resume or CV.",
    process: [
      "Visit Matoshri Cyber Cafe with all required details.",
      "A professional resume will be prepared.",
      "Printed copies will be provided on request.",
    ],
    importantNotes: [
      "Provide all relevant personal information. Your information will be kept confidential.",
    ],
  },
  {
    id: "email-online-assistance",
    slug: "email-online-assistance",
    title: "Email and Online Application Assistance",
    category: "digital-cafe",
    shortDescription:
      "Help with sending emails, creating accounts, and general online tasks.",
    keywords: ["email", "gmail", "online help", "internet", "email account"],
    icon: "Mail",
    purpose: [
      "Assisting individuals with sending emails and general internet tasks.",
      "Helping create or manage email and online accounts for official use.",
    ],
    requiredDocuments: [
      "Any relevant information required to complete the online task.",
    ],
    eligibility: "Anyone requiring general online assistance.",
    process: [
      "Visit Matoshri Cyber Cafe.",
      "Explain the task or requirement.",
      "Receive step-by-step assistance.",
    ],
    importantNotes: [
      "Never share passwords with anyone, including cafe staff.",
      "Log out of all accounts after use.",
    ],
  },
];

export default services;
