
// Store Products Data
const defaultStoreData = [
  { id: 1, name: "Digital Art Collection", creator: "Sarah Johnson", price: "$25", category: "Art", status: "Active", description: "Beautiful digital artwork collection", imageUrl: "/api/placeholder/200/200" },
  { id: 2, name: "Smart IoT Device", creator: "Alex Chen", price: "$120", category: "Technology", status: "Active", description: "Advanced IoT device for smart homes", imageUrl: "/api/placeholder/200/200" },
  { id: 3, name: "Web Development Skills", creator: "Maya Patel", price: "$45/hr", category: "Skills", status: "Active", description: "Professional web development tutoring", imageUrl: "/api/placeholder/200/200" },
  { id: 4, name: "3D Printed Models", creator: "John Smith", price: "$35", category: "Crafts", status: "Active", description: "Custom 3D printed models and prototypes", imageUrl: "/api/placeholder/200/200" },
  { id: 5, name: "Mobile App UI Design", creator: "Lisa Wong", price: "$80", category: "Digital", status: "Active", description: "Professional mobile app interface design", imageUrl: "/api/placeholder/200/200" },
  { id: 6, name: "Photography Services", creator: "David Brown", price: "$60/hr", category: "Skills", status: "Active", description: "Event and portrait photography", imageUrl: "/api/placeholder/200/200" },
  { id: 7, name: "Handmade Jewelry", creator: "Emma Davis", price: "$45", category: "Crafts", status: "Active", description: "Unique handcrafted jewelry pieces", imageUrl: "/api/placeholder/200/200" },
  { id: 8, name: "Python Programming Tutor", creator: "Mike Johnson", price: "$40/hr", category: "Skills", status: "Active", description: "Learn Python programming from scratch", imageUrl: "/api/placeholder/200/200" },
];

// Weizmann Portal Data
const defaultWeizmannData = [
  { id: 1, name: "MIT Innovation Challenge", organization: "MIT", deadline: "2025-07-15", category: "Competition", status: "Open", description: "Global innovation competition for students", eligibility: "Undergraduate students", prize: "$50,000" },
  { id: 2, name: "Stanford AI Scholarship", organization: "Stanford University", deadline: "2025-08-20", category: "Scholarship", status: "Open", description: "Full scholarship for AI research", eligibility: "Graduate students", prize: "Full tuition + stipend" },
  { id: 3, name: "Global Tech Summit", organization: "TechCorp", deadline: "2025-09-10", category: "Conference", status: "Open", description: "Premier technology conference", eligibility: "All students", prize: "Networking opportunity" },
  { id: 4, name: "Google Summer of Code", organization: "Google", deadline: "2025-06-30", category: "Internship", status: "Open", description: "Open source development program", eligibility: "University students", prize: "$3000 stipend" },
  { id: 5, name: "Microsoft Research Internship", organization: "Microsoft", deadline: "2025-08-01", category: "Internship", status: "Open", description: "Research internship program", eligibility: "PhD students", prize: "Paid internship" },
  { id: 6, name: "ACM Programming Contest", organization: "ACM", deadline: "2025-07-20", category: "Competition", status: "Open", description: "International programming competition", eligibility: "All students", prize: "$10,000" },
];

// Gallery Data
const defaultGalleryData = [
  { id: 1, name: "Smart Campus Navigation", student: "John Doe", department: "Computer Science", status: "Featured", description: "AI-powered campus navigation system", imageUrl: "/api/placeholder/300/200", tags: "AI, Navigation, Mobile" },
  { id: 2, name: "Eco-Friendly Packaging", student: "Jane Smith", department: "Environmental Science", status: "Approved", description: "Biodegradable packaging solutions", imageUrl: "/api/placeholder/300/200", tags: "Environment, Sustainability" },
  { id: 3, name: "Mental Health App", student: "Mike Johnson", department: "Psychology", status: "Pending", description: "Mobile app for mental health support", imageUrl: "/api/placeholder/300/200", tags: "Health, Mobile, AI" },
  { id: 4, name: "Renewable Energy Monitor", student: "Sarah Wilson", department: "Engineering", status: "Featured", description: "IoT-based energy monitoring system", imageUrl: "/api/placeholder/300/200", tags: "IoT, Energy, Sustainability" },
  { id: 5, name: "Social Learning Platform", student: "Alex Chen", department: "Education", status: "Approved", description: "Collaborative learning platform", imageUrl: "/api/placeholder/300/200", tags: "Education, Social, Web" },
  { id: 6, name: "AR Museum Guide", student: "Emma Davis", department: "Arts Technology", status: "Featured", description: "Augmented reality museum experience", imageUrl: "/api/placeholder/300/200", tags: "AR, Culture, Mobile" },
];

// Achievers Data
const defaultAchieversData = [
  { id: 1, name: "Alice Brown", achievement: "Best Innovation Award 2025", field: "Technology", year: "2025", status: "Featured", description: "Revolutionary AI research in healthcare", profileImage: "/api/placeholder/150/150", socialLinks: "linkedin.com/in/alicebrown" },
  { id: 2, name: "Bob Wilson", achievement: "Social Impact Prize", field: "Community Development", year: "2024", status: "Active", description: "Community empowerment through technology", profileImage: "/api/placeholder/150/150", socialLinks: "github.com/bobwilson" },
  { id: 3, name: "Carol Davis", achievement: "Research Excellence Award", field: "Environmental Science", year: "2025", status: "Active", description: "Breakthrough in sustainable energy", profileImage: "/api/placeholder/150/150", socialLinks: "researchgate.net/profile/carol-davis" },
  { id: 4, name: "David Kumar", achievement: "Outstanding Leadership", field: "Business", year: "2024", status: "Featured", description: "Successful social enterprise founding", profileImage: "/api/placeholder/150/150", socialLinks: "linkedin.com/in/davidkumar" },
  { id: 5, name: "Eva Martinez", achievement: "Best Thesis Award", field: "Artificial Intelligence", year: "2025", status: "Active", description: "Groundbreaking work in machine learning", profileImage: "/api/placeholder/150/150", socialLinks: "scholar.google.com/eva-martinez" },
];

// Categories Data
const defaultCategoriesData = [
  { id: 1, name: "AI Campus Assistant", author: "Tech Innovation Team", department: "Computer Science", category: "Innovations", status: "Featured", description: "Intelligent campus assistant chatbot", imageUrl: "/api/placeholder/250/200" },
  { id: 2, name: "Community Garden Project", author: "Green Living Club", department: "Environmental Studies", category: "Environmental", status: "Active", description: "Sustainable campus gardening initiative", imageUrl: "/api/placeholder/250/200" },
  { id: 3, name: "Startup Accelerator Program", author: "Business Students Union", department: "Business Administration", category: "Internship Outcomes", status: "Active", description: "Student startup incubation program", imageUrl: "/api/placeholder/250/200" },
  { id: 4, name: "Smart Library System", author: "Information Systems Team", department: "Information Technology", category: "Tech Projects", status: "Featured", description: "Automated library management system", imageUrl: "/api/placeholder/250/200" },
  { id: 5, name: "Waste Reduction Initiative", author: "Sustainability Committee", department: "Environmental Science", category: "Environmental", status: "Active", description: "Campus-wide waste reduction program", imageUrl: "/api/placeholder/250/200" },
  { id: 6, name: "Digital Healthcare Platform", author: "Health Tech Students", department: "Medical Technology", category: "Social Projects", status: "Featured", description: "Telemedicine platform for rural areas", imageUrl: "/api/placeholder/250/200" },
];

// Updates Data
const defaultUpdatesData = [
  { id: 1, name: "Summer Research Competition Opens", type: "Opportunity", date: "2025-06-15", priority: "High", status: "Published", description: "Applications now open for summer research programs", targetAudience: "All undergraduate students" },
  { id: 2, name: "Innovation Workshop Series", type: "Event", date: "2025-07-01", priority: "Normal", status: "Draft", description: "Weekly workshops on innovation and entrepreneurship", targetAudience: "All students interested in innovation" },
  { id: 3, name: "New Academic Guidelines", type: "Announcement", date: "2025-06-10", priority: "Normal", status: "Published", description: "Updated academic policies for the new semester", targetAudience: "All students and faculty" },
  { id: 4, name: "Career Fair 2025", type: "Event", date: "2025-08-15", priority: "High", status: "Published", description: "Annual career fair with top companies", targetAudience: "Final year students" },
  { id: 5, name: "Scholarship Applications Open", type: "Opportunity", date: "2025-07-30", priority: "High", status: "Published", description: "Merit-based scholarships for next academic year", targetAudience: "All students with GPA > 3.5" },
  { id: 6, name: "Campus Safety Update", type: "Announcement", date: "2025-06-20", priority: "Urgent", status: "Published", description: "Important safety protocols and updates", targetAudience: "All campus community" },
];

// Initialize localStorage with default data if not exists
const initializeData = () => {
  const sections = {
    store: defaultStoreData,
    weizmann: defaultWeizmannData,
    gallery: defaultGalleryData,
    achievers: defaultAchieversData,
    categories: defaultCategoriesData,
    updates: defaultUpdatesData
  };

  Object.entries(sections).forEach(([key, defaultData]) => {
    if (!localStorage.getItem(`pitchburg_${key}_data`)) {
      localStorage.setItem(`pitchburg_${key}_data`, JSON.stringify(defaultData));
    }
  });
};

// Initialize data on service load
initializeData();

// Event emitter for data changes
class DataEventEmitter extends EventTarget {
  emit(sectionId: string) {
    this.dispatchEvent(new CustomEvent('dataChange', { detail: { sectionId } }));
  }
}

export const dataEventEmitter = new DataEventEmitter();

// Data management functions
export const getDataBySection = (sectionId: string) => {
  const data = localStorage.getItem(`pitchburg_${sectionId}_data`);
  return data ? JSON.parse(data) : [];
};

export const updateItem = (sectionId: string, itemId: number, updatedData: any) => {
  const data = getDataBySection(sectionId);
  const index = data.findIndex((item: any) => item.id === itemId);
  if (index !== -1) {
    Object.assign(data[index], updatedData);
    localStorage.setItem(`pitchburg_${sectionId}_data`, JSON.stringify(data));
    dataEventEmitter.emit(sectionId);
    return true;
  }
  return false;
};

export const deleteItem = (sectionId: string, itemId: number) => {
  const data = getDataBySection(sectionId);
  const index = data.findIndex((item: any) => item.id === itemId);
  if (index !== -1) {
    data.splice(index, 1);
    localStorage.setItem(`pitchburg_${sectionId}_data`, JSON.stringify(data));
    dataEventEmitter.emit(sectionId);
    return true;
  }
  return false;
};

export const addItem = (sectionId: string, newItem: any) => {
  const data = getDataBySection(sectionId);
  const newId = data.length > 0 ? Math.max(...data.map((item: any) => item.id)) + 1 : 1;
  const itemWithId = { ...newItem, id: newId };
  data.push(itemWithId);
  localStorage.setItem(`pitchburg_${sectionId}_data`, JSON.stringify(data));
  dataEventEmitter.emit(sectionId);
  return itemWithId;
};

// Hook is exported from hooks/useDataSync.ts
