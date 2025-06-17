
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Clock, Star, MessageCircle, Handshake } from "lucide-react";

// Mock data for skills
const skills = [
  {
    id: 1,
    title: "Advanced React Development",
    instructor: "Emma Rodriguez",
    price: "$30/hour",
    category: "programming",
    rating: 4.9,
    students: 45,
    duration: "2-4 weeks",
    level: "Advanced",
    description: "Master React hooks, context, and advanced patterns",
    barterOptions: ["Python tutoring", "UI/UX feedback", "Content writing"]
  },
  {
    id: 2,
    title: "Digital Illustration Mastery",
    instructor: "Jake Thompson",
    price: "$25/hour",
    category: "design",
    rating: 4.8,
    students: 32,
    duration: "3-6 weeks",
    level: "Intermediate",
    description: "Create stunning digital art using industry-standard tools",
    barterOptions: ["Web development", "Photography", "Social media management"]
  },
  {
    id: 3,
    title: "Music Production Basics",
    instructor: "Zoe Williams",
    price: "$20/hour",
    category: "music",
    rating: 4.7,
    students: 28,
    duration: "4-8 weeks",
    level: "Beginner",
    description: "Learn music production from scratch using modern DAWs",
    barterOptions: ["Graphic design", "Video editing", "Marketing strategy"]
  },
  {
    id: 4,
    title: "Creative Writing Workshop",
    instructor: "Marcus Johnson",
    price: "$18/hour",
    category: "writing",
    rating: 4.6,
    students: 51,
    duration: "6-10 weeks",
    level: "All Levels",
    description: "Develop your writing skills across various genres",
    barterOptions: ["Language exchange", "Research assistance", "Proofreading"]
  }
];

interface SkillExchangeProps {
  selectedCategory: string;
  searchQuery: string;
}

export function SkillExchange({ selectedCategory, searchQuery }: SkillExchangeProps) {
  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredSkills.map((skill) => (
        <Card key={skill.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start mb-2">
              <Badge variant="secondary" className="text-xs capitalize">
                {skill.category}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {skill.level}
              </Badge>
            </div>
            <CardTitle className="text-xl leading-tight">{skill.title}</CardTitle>
            <CardDescription className="text-sm">
              Taught by {skill.instructor}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{skill.rating} rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span>{skill.students} students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span>{skill.duration}</span>
              </div>
              <div className="text-lg font-bold text-purple-600">
                {skill.price}
              </div>
            </div>
            
            <p className="text-sm text-gray-600">{skill.description}</p>
            
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-800">Barter Options:</h4>
              <div className="flex flex-wrap gap-1">
                {skill.barterOptions.map((option, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {option}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Book Session
              </Button>
              <Button variant="outline" className="flex-1">
                <Handshake className="w-4 h-4 mr-2" />
                Propose Barter
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
