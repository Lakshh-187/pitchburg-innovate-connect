export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  views: number;
}

export const featuredNews: NewsItem = {
  id: 1,
  title: "Revolutionary AI Integration Transforms Modern Classroom Learning Experience",
  excerpt: "Discover how artificial intelligence is reshaping educational methodologies and creating personalized learning environments for students worldwide.",
  image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop&crop=center",
  category: "Technology",
  author: "Dr. Sarah Johnson",
  publishDate: "Dec 15, 2024",
  readTime: "8 min read",
  views: 12543
};

export const breakingNews: NewsItem[] = [
  {
    id: 2,
    title: "Global Education Summit 2024 Announces Groundbreaking Policy Changes",
    excerpt: "Education leaders from 50 countries gather to discuss innovative approaches to modern learning challenges and sustainable education systems.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center",
    category: "Policy",
    author: "Michael Chen",
    publishDate: "Dec 14, 2024",
    readTime: "6 min read",
    views: 8976
  },
  {
    id: 3,
    title: "Student Mental Health: New Programs Show 40% Improvement in Well-being",
    excerpt: "Comprehensive mental health initiatives in schools demonstrate significant positive impact on student academic performance and social development.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop&crop=center",
    category: "Health",
    author: "Dr. Emily Rodriguez",
    publishDate: "Dec 14, 2024",
    readTime: "5 min read",
    views: 6432
  },
  {
    id: 4,
    title: "STEM Education Funding Increases by 35% Across Public Schools",
    excerpt: "Major investment in science, technology, engineering, and mathematics programs aims to prepare students for future career demands.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
    category: "Funding",
    author: "Robert Kim",
    publishDate: "Dec 13, 2024",
    readTime: "4 min read",
    views: 5621
  },
  {
    id: 5,
    title: "Virtual Reality Classrooms: The Future of Immersive Learning",
    excerpt: "Schools worldwide adopt VR technology to create engaging, interactive educational experiences that boost student engagement and retention.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop&crop=center",
    category: "Technology",
    author: "Lisa Park",
    publishDate: "Dec 13, 2024",
    readTime: "7 min read",
    views: 9187
  }
];

export const latestNews: NewsItem[] = [
  {
    id: 6,
    title: "Teachers Embrace Hybrid Learning Models for Enhanced Student Engagement",
    excerpt: "Educational professionals share success stories and best practices from implementing flexible teaching approaches.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&crop=center",
    category: "Teaching",
    author: "Jennifer Walsh",
    publishDate: "Dec 12, 2024",
    readTime: "6 min read",
    views: 4532
  },
  {
    id: 7,
    title: "International Student Exchange Programs Resume Full Operations",
    excerpt: "Cultural exchange initiatives return to pre-pandemic levels, fostering global connections and cross-cultural understanding.",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop&crop=center",
    category: "International",
    author: "Carlos Martinez",
    publishDate: "Dec 12, 2024",
    readTime: "5 min read",
    views: 3894
  },
  {
    id: 8,
    title: "Green Campus Initiatives Reduce School Carbon Footprint by 50%",
    excerpt: "Sustainable practices and renewable energy adoption create environmentally conscious learning environments.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop&crop=center",
    category: "Environment",
    author: "Dr. Amanda Green",
    publishDate: "Dec 11, 2024",
    readTime: "4 min read",
    views: 2765
  },
  {
    id: 9,
    title: "Innovative Assessment Methods Replace Traditional Testing",
    excerpt: "Project-based evaluations and continuous assessment models gain popularity among educators and students alike.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop&crop=center",
    category: "Assessment",
    author: "Dr. Thomas Liu",
    publishDate: "Dec 11, 2024",
    readTime: "6 min read",
    views: 5123
  },
  {
    id: 10,
    title: "Community Partnership Programs Bridge School-to-Career Gap",
    excerpt: "Local businesses collaborate with educational institutions to provide real-world learning opportunities and career pathways.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
    category: "Career",
    author: "Maria Gonzalez",
    publishDate: "Dec 10, 2024",
    readTime: "7 min read",
    views: 6789
  },
  {
    id: 11,
    title: "Digital Literacy Programs Prepare Students for Technology-Driven Future",
    excerpt: "Comprehensive computer science and digital skills curricula ensure graduates are ready for modern workplace demands.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center",
    category: "Technology",
    author: "Kevin Zhang",
    publishDate: "Dec 10, 2024",
    readTime: "5 min read",
    views: 4187
  }
];

export const researchNews: NewsItem[] = [
  {
    id: 12,
    title: "Breakthrough Study Links Music Education to Enhanced Mathematical Skills",
    excerpt: "Longitudinal research demonstrates strong correlation between musical training and improved mathematical reasoning abilities in students.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
    category: "Research",
    author: "Dr. Rachel Adams",
    publishDate: "Dec 9, 2024",
    readTime: "8 min read",
    views: 7234
  },
  {
    id: 13,
    title: "Multilingual Education Boosts Cognitive Development in Young Learners",
    excerpt: "New findings reveal significant cognitive advantages for students participating in multilingual education programs.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=center",
    category: "Research",
    author: "Prof. Elena Volkov",
    publishDate: "Dec 8, 2024",
    readTime: "6 min read",
    views: 5896
  },
  {
    id: 14,
    title: "Physical Activity Integration Improves Academic Performance by 25%",
    excerpt: "Research confirms that incorporating movement and exercise into daily learning routines significantly enhances student achievement.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    category: "Research",
    author: "Dr. Mark Thompson",
    publishDate: "Dec 7, 2024",
    readTime: "5 min read",
    views: 4521
  }
];

export const trendingNews = [
  {
    id: 1,
    title: "AI Integration in Classrooms Reaches New Heights",
    views: 15420,
    category: "Technology",
    publishDate: "Dec 15, 2024"
  },
  {
    id: 2,
    title: "Student Mental Health Programs Show Success",
    views: 12890,
    category: "Health",
    publishDate: "Dec 14, 2024"
  },
  {
    id: 3,
    title: "Global Education Summit Policy Changes",
    views: 11560,
    category: "Policy",
    publishDate: "Dec 14, 2024"
  },
  {
    id: 4,
    title: "STEM Funding Increases Across Public Schools",
    views: 9870,
    category: "Funding",
    publishDate: "Dec 13, 2024"
  },
  {
    id: 5,
    title: "Virtual Reality Learning Takes Center Stage",
    views: 8945,
    category: "Technology",
    publishDate: "Dec 13, 2024"
  }
];

export const popularCategories = [
  { name: "Technology", count: 45, color: "#8B5CF6" },
  { name: "Policy", count: 32, color: "#06B6D4" },
  { name: "Research", count: 28, color: "#10B981" },
  { name: "Health", count: 24, color: "#F59E0B" },
  { name: "Teaching", count: 21, color: "#EF4444" },
  { name: "International", count: 18, color: "#8B5CF6" },
  { name: "Environment", count: 15, color: "#10B981" },
  { name: "Career", count: 12, color: "#06B6D4" }
];