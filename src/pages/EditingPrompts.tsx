import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, FileText, Edit3, Code } from "lucide-react";
import { toast } from "sonner";

export default function EditingPrompts() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Prompt copied to clipboard!");
  };

  const homePagePrompts = [
    {
      title: "Hero Section Title",
      prompt: "Replace 'Empowering Innovation Through Collaboration' with '[NEW_TITLE]' in line 23 of src/components/home/HeroSection.tsx",
      file: "src/components/home/HeroSection.tsx",
      line: "23"
    },
    {
      title: "Hero Section Subtitle",
      prompt: "Replace 'Where brilliant minds converge to create tomorrow's solutions' with '[NEW_SUBTITLE]' in line 24 of src/components/home/HeroSection.tsx",
      file: "src/components/home/HeroSection.tsx",
      line: "24"
    },
    {
      title: "Featured Project Title",
      prompt: "Replace the featured project title in line 15 of src/components/home/FeaturedPitch.tsx with '[NEW_PROJECT_TITLE]'",
      file: "src/components/home/FeaturedPitch.tsx",
      line: "15"
    },
    {
      title: "Stats Numbers",
      prompt: "Update the stats numbers in lines 12-15 of src/components/home/StatsSection.tsx with new values: Projects: [NUMBER], Students: [NUMBER], Awards: [NUMBER], Partners: [NUMBER]",
      file: "src/components/home/StatsSection.tsx",
      line: "12-15"
    },
    {
      title: "Upcoming Event",
      prompt: "Replace the event title in line 8 of src/components/home/EventsCalendar.tsx with '[NEW_EVENT_TITLE]' and date in line 9 with '[NEW_DATE]'",
      file: "src/components/home/EventsCalendar.tsx",
      line: "8-9"
    }
  ];

  const storePagePrompts = [
    {
      title: "Store Hero Title",
      prompt: "Replace 'Student Innovation Store' with '[NEW_STORE_TITLE]' in line 12 of src/components/store/StoreHero.tsx",
      file: "src/components/store/StoreHero.tsx",
      line: "12"
    },
    {
      title: "Store Description",
      prompt: "Replace the store description in line 13 of src/components/store/StoreHero.tsx with '[NEW_DESCRIPTION]'",
      file: "src/components/store/StoreHero.tsx",
      line: "13"
    },
    {
      title: "Featured Product",
      prompt: "Update the featured product in line 5 of src/services/adminDataService.ts: name: '[PRODUCT_NAME]', creator: '[CREATOR]', price: '[PRICE]'",
      file: "src/services/adminDataService.ts",
      line: "5"
    },
    {
      title: "Product Categories",
      prompt: "Add new product category '[CATEGORY_NAME]' to the filter options in line 22 of src/components/store/StoreFilters.tsx",
      file: "src/components/store/StoreFilters.tsx",
      line: "22"
    },
    {
      title: "Skill Exchange Rate",
      prompt: "Update the hourly rate for skills in line 6 of src/services/adminDataService.ts from '$45/hr' to '[NEW_RATE]/hr'",
      file: "src/services/adminDataService.ts",
      line: "6"
    }
  ];

  const weizmannPrompts = [
    {
      title: "Portal Welcome Message",
      prompt: "Replace 'Discover Global Opportunities' with '[NEW_WELCOME_MESSAGE]' in line 15 of src/components/weizmann/PortalHero.tsx",
      file: "src/components/weizmann/PortalHero.tsx",
      line: "15"
    },
    {
      title: "Featured Opportunity",
      prompt: "Update the featured opportunity in line 16 of src/services/adminDataService.ts: name: '[OPPORTUNITY_NAME]', deadline: '[DEADLINE]', prize: '[PRIZE_AMOUNT]'",
      file: "src/services/adminDataService.ts",
      line: "16"
    },
    {
      title: "Filter Categories",
      prompt: "Add new opportunity category '[CATEGORY]' to the filter options in line 18 of src/components/weizmann/PortalFilters.tsx",
      file: "src/components/weizmann/PortalFilters.tsx",
      line: "18"
    },
    {
      title: "Application Deadline",
      prompt: "Update the deadline for opportunity ID 1 in line 16 of src/services/adminDataService.ts from '2025-07-15' to '[NEW_DEADLINE]'",
      file: "src/services/adminDataService.ts",
      line: "16"
    },
    {
      title: "Organization Partner",
      prompt: "Replace 'MIT' with '[NEW_ORGANIZATION]' in line 16 of src/services/adminDataService.ts for the innovation challenge",
      file: "src/services/adminDataService.ts",
      line: "16"
    }
  ];

  const galleryPrompts = [
    {
      title: "Gallery Header",
      prompt: "Replace 'Innovation Gallery' with '[NEW_GALLERY_TITLE]' in line 18 of src/pages/Gallery.tsx",
      file: "src/pages/Gallery.tsx",
      line: "18"
    },
    {
      title: "Featured Project Status",
      prompt: "Change project status from 'Featured' to '[NEW_STATUS]' for project ID 1 in line 26 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "26"
    },
    {
      title: "Project Department",
      prompt: "Update the department for student project in line 27 of src/services/adminDataService.ts from 'Computer Science' to '[NEW_DEPARTMENT]'",
      file: "src/services/adminDataService.ts",
      line: "27"
    },
    {
      title: "Project Tags",
      prompt: "Update project tags in line 26 of src/services/adminDataService.ts from 'AI, Navigation, Mobile' to '[NEW_TAGS]'",
      file: "src/services/adminDataService.ts",
      line: "26"
    },
    {
      title: "Gallery Filter",
      prompt: "Add new department filter '[DEPARTMENT_NAME]' to the gallery filters in the Gallery component",
      file: "src/pages/Gallery.tsx",
      line: "Filter section"
    }
  ];

  const achieversPrompts = [
    {
      title: "Achiever Spotlight",
      prompt: "Replace the featured achiever name 'Alice Brown' with '[NEW_ACHIEVER_NAME]' in line 36 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "36"
    },
    {
      title: "Achievement Title",
      prompt: "Update the achievement title from 'Best Innovation Award 2025' to '[NEW_ACHIEVEMENT]' in line 36 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "36"
    },
    {
      title: "Achievement Year",
      prompt: "Change the achievement year from '2025' to '[NEW_YEAR]' in line 36 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "36"
    },
    {
      title: "Achiever Field",
      prompt: "Update the field from 'Technology' to '[NEW_FIELD]' for achiever ID 1 in line 36 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "36"
    },
    {
      title: "Achievement Description",
      prompt: "Replace 'Revolutionary AI research in healthcare' with '[NEW_DESCRIPTION]' in line 36 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "36"
    }
  ];

  const categoriesPrompts = [
    {
      title: "Innovation Category Title",
      prompt: "Replace 'AI Campus Assistant' with '[NEW_INNOVATION_TITLE]' in line 45 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "45"
    },
    {
      title: "Category Department",
      prompt: "Update the department from 'Computer Science' to '[NEW_DEPARTMENT]' for category ID 1 in line 45 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "45"
    },
    {
      title: "Project Author",
      prompt: "Replace 'Tech Innovation Team' with '[NEW_AUTHOR]' in line 45 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "45"
    },
    {
      title: "Category Status",
      prompt: "Change the status from 'Featured' to '[NEW_STATUS]' for category ID 1 in line 45 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "45"
    },
    {
      title: "New Category Type",
      prompt: "Add new category type '[CATEGORY_TYPE]' to the categories data structure in src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "Categories section"
    }
  ];

  const updatesPrompts = [
    {
      title: "Update Priority",
      prompt: "Change the priority from 'High' to '[NEW_PRIORITY]' for update ID 1 in line 55 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "55"
    },
    {
      title: "Update Title",
      prompt: "Replace 'Summer Research Competition Opens' with '[NEW_UPDATE_TITLE]' in line 55 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "55"
    },
    {
      title: "Update Type",
      prompt: "Change the type from 'Opportunity' to '[NEW_TYPE]' for update ID 1 in line 55 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "55"
    },
    {
      title: "Target Audience",
      prompt: "Update the target audience from 'All undergraduate students' to '[NEW_AUDIENCE]' in line 55 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "55"
    },
    {
      title: "Update Date",
      prompt: "Change the update date from '2025-06-15' to '[NEW_DATE]' for update ID 1 in line 55 of src/services/adminDataService.ts",
      file: "src/services/adminDataService.ts",
      line: "55"
    }
  ];

  const mentorMePrompts = [
    {
      title: "Program Title",
      prompt: "Replace 'Academic Excellence Program' with '[NEW_PROGRAM_TITLE]' in line 12 of src/pages/MentorMe.tsx",
      file: "src/pages/MentorMe.tsx",
      line: "12"
    },
    {
      title: "Mentor Name",
      prompt: "Update the mentor name from 'Dr. Sarah Johnson' to '[NEW_MENTOR_NAME]' in line 13 of src/pages/MentorMe.tsx",
      file: "src/pages/MentorMe.tsx",
      line: "13"
    },
    {
      title: "Program Capacity",
      prompt: "Change the capacity from '5/10 students' to '[NEW_CAPACITY]' in line 15 of src/pages/MentorMe.tsx",
      file: "src/pages/MentorMe.tsx",
      line: "15"
    },
    {
      title: "Program Duration",
      prompt: "Update the duration from '6 months' to '[NEW_DURATION]' in line 16 of src/pages/MentorMe.tsx",
      file: "src/pages/MentorMe.tsx",
      line: "16"
    },
    {
      title: "Success Stats",
      prompt: "Update the success rate from '95%' to '[NEW_PERCENTAGE]%' in line 95 of src/pages/MentorMe.tsx",
      file: "src/pages/MentorMe.tsx",
      line: "95"
    },
    {
      title: "Event Date",
      prompt: "Replace 'Mar 15' with '[NEW_DATE]' for the first upcoming event in line 58 of src/pages/MentorMe.tsx",
      file: "src/pages/MentorMe.tsx",
      line: "58"
    },
    {
      title: "Event Title",
      prompt: "Update 'Mentor-Mentee Speed Networking' to '[NEW_EVENT_TITLE]' in line 59 of src/pages/MentorMe.tsx",
      file: "src/pages/MentorMe.tsx",
      line: "59"
    }
  ];

  const navbarFooterPrompts = [
    {
      title: "Site Logo Text",
      prompt: "Replace 'PITCHBURG' with '[NEW_SITE_NAME]' in line 15 of src/components/layout/Navbar.tsx",
      file: "src/components/layout/Navbar.tsx",
      line: "15"
    },
    {
      title: "Navigation Menu Item",
      prompt: "Replace 'About' with '[NEW_MENU_ITEM]' in the navigation menu of src/components/layout/Navbar.tsx",
      file: "src/components/layout/Navbar.tsx",
      line: "Navigation section"
    },
    {
      title: "Footer Description",
      prompt: "Update the footer description in line 18 of src/components/layout/Footer.tsx with '[NEW_DESCRIPTION]'",
      file: "src/components/layout/Footer.tsx",
      line: "18"
    },
    {
      title: "Contact Information",
      prompt: "Replace the contact email in src/components/layout/Footer.tsx with '[NEW_EMAIL]'",
      file: "src/components/layout/Footer.tsx",
      line: "Contact section"
    },
    {
      title: "Social Media Links",
      prompt: "Update the social media links in the footer of src/components/layout/Footer.tsx",
      file: "src/components/layout/Footer.tsx",
      line: "Social links section"
    }
  ];

  const colorThemePrompts = [
    {
      title: "Primary Brand Color",
      prompt: "Change the primary color from current HSL value to '[NEW_HSL_VALUES]' in line 8 of src/index.css under :root --primary",
      file: "src/index.css",
      line: "8"
    },
    {
      title: "Secondary Color",
      prompt: "Update the secondary color HSL values in line 9 of src/index.css under :root --secondary",
      file: "src/index.css",
      line: "9"
    },
    {
      title: "Background Color",
      prompt: "Change the background color in line 10 of src/index.css under :root --background",
      file: "src/index.css",
      line: "10"
    },
    {
      title: "Dark Mode Primary",
      prompt: "Update the dark mode primary color in line 25 of src/index.css under .dark --primary",
      file: "src/index.css",
      line: "25"
    },
    {
      title: "Border Color",
      prompt: "Change the border color HSL values in src/index.css under --border",
      file: "src/index.css",
      line: "Border section"
    }
  ];

  const promptSections = [
    { id: "home", title: "Home Page", prompts: homePagePrompts, icon: "🏠" },
    { id: "store", title: "Store Page", prompts: storePagePrompts, icon: "🛍️" },
    { id: "weizmann", title: "Weizmann Portal", prompts: weizmannPrompts, icon: "🌐" },
    { id: "gallery", title: "Gallery Page", prompts: galleryPrompts, icon: "🖼️" },
    { id: "achievers", title: "Achievers Page", prompts: achieversPrompts, icon: "🏆" },
    { id: "categories", title: "Pitch Categories", prompts: categoriesPrompts, icon: "📊" },
    { id: "updates", title: "Updates Page", prompts: updatesPrompts, icon: "📢" },
    { id: "mentor", title: "Mentor Me Page", prompts: mentorMePrompts, icon: "👨‍🏫" },
    { id: "layout", title: "Navigation & Footer", prompts: navbarFooterPrompts, icon: "🧭" },
    { id: "theme", title: "Colors & Theme", prompts: colorThemePrompts, icon: "🎨" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Website Editing Prompts</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete guide for school staff to edit website content. Each prompt provides specific file paths, line numbers, and exact instructions for modifications.
            </p>
          </div>

          <Tabs defaultValue="home" className="space-y-8">
            <TabsList className="grid grid-cols-5 lg:grid-cols-10 gap-2 h-auto p-2">
              {promptSections.map((section) => (
                <TabsTrigger
                  key={section.id}
                  value={section.id}
                  className="flex flex-col items-center p-2 text-xs"
                >
                  <span className="text-lg mb-1">{section.icon}</span>
                  <span className="text-center leading-tight">{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {promptSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">{section.icon} {section.title}</h2>
                  <p className="text-muted-foreground">
                    Ready-to-use prompts for editing {section.title.toLowerCase()} content
                  </p>
                </div>

                <div className="grid gap-6">
                  {section.prompts.map((prompt, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Edit3 className="h-5 w-5 text-primary" />
                            {prompt.title}
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              <FileText className="h-3 w-3 mr-1" />
                              Line {prompt.line}
                            </Badge>
                    <button
                      className="h-8 px-2 text-xs border border-border rounded-md hover:bg-muted flex items-center"
                      onClick={() => copyToClipboard(prompt.prompt)}
                    >
                      <Copy className="h-3 w-3" />
                    </button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="bg-muted/50 p-4 rounded-lg mb-3">
                          <p className="text-sm font-mono text-foreground leading-relaxed">
                            {prompt.prompt}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Code className="h-3 w-3" />
                          <span className="font-mono">{prompt.file}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Usage Instructions */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl text-primary">How to Use These Prompts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📋 For AI Assistant</h4>
                  <p className="text-sm text-muted-foreground">
                    Copy any prompt and paste it to an AI assistant like ChatGPT or Claude. 
                    Replace [NEW_VALUE] placeholders with your desired content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">✏️ For Manual Editing</h4>
                  <p className="text-sm text-muted-foreground">
                    Use the file path and line number to locate the exact content to modify. 
                    Open the file in a text editor and navigate to the specified line.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🔄 For Regular Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Bookmark this page for monthly content updates. Each prompt is designed 
                    for common changes that school staff make regularly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🎯 For Batch Changes</h4>
                  <p className="text-sm text-muted-foreground">
                    Use multiple prompts from the same section to update entire pages at once. 
                    Always test changes on a staging environment first.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}