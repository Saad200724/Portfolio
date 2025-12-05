import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Settings, Plus, Trash2, Edit, FolderKanban, Award, Zap, X, Save, Lock, Mail, MessageSquare, Clock, User, BookOpen, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string | null;
  liveUrl: string | null;
  docsUrl: string | null;
  imageUrl: string;
}

interface Eca {
  id: number;
  title: string;
  organization: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string | null;
  imageUrl: string | null;
}

interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  skills: Skill[];
}

interface Skill {
  id: number;
  categoryId: number;
  name: string;
  level: string;
  percentage: number;
}

interface AdditionalSkill {
  id: number;
  name: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  mediumUrl: string;
  imageUrl: string | null;
  publishedDate: string | null;
}

interface AboutInfo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string | null;
}

export default function PersonalSpace() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = sessionStorage.getItem("isAuthenticated");
    if (!authStatus) {
      setLocation("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [setLocation]);

  if (!isAuthenticated) {
    return null;
  }

  const { data: projects = [] } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const { data: ecas = [] } = useQuery<Eca[]>({
    queryKey: ["/api/ecas"],
  });

  const { data: skillCategories = [] } = useQuery<SkillCategory[]>({
    queryKey: ["/api/skill-categories"],
  });

  const { data: additionalSkills = [] } = useQuery<AdditionalSkill[]>({
    queryKey: ["/api/additional-skills"],
  });

  const { data: contactMessages = [], isLoading: messagesLoading } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact"],
  });

  const { data: blogs = [] } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
  });

  const { data: aboutInfo = [] } = useQuery<AboutInfo[]>({
    queryKey: ["/api/about"],
  });

  const { data: experiences = [] } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });


  return (
    <>
      <SEO 
        title="Personal Space - Admin Panel"
        description="Admin panel for managing portfolio content"
        url="/personal-space"
      />
      <div className="pt-24 pb-20 relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <Settings className="text-cyan-400" size={20} />
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Admin Panel
                </span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Personal Space
              </span>
            </h1>
            <p className="text-lg text-white/70">
              Manage your portfolio content from one place
            </p>
          </motion.div>

          <Tabs defaultValue="projects" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/5 border border-white/10 rounded-xl p-1">
              <TabsTrigger value="projects" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg">
                <FolderKanban className="mr-2" size={18} />
                Projects
              </TabsTrigger>
              <TabsTrigger value="blogs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg">
                <BookOpen className="mr-2" size={18} />
                Blogs
              </TabsTrigger>
              <TabsTrigger value="ecas" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg">
                <Award className="mr-2" size={18} />
                ECAs
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg">
                <Zap className="mr-2" size={18} />
                Skills
              </TabsTrigger>
              <TabsTrigger value="about" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg">
                <User className="mr-2" size={18} />
                About
              </TabsTrigger>
              <TabsTrigger value="messages" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 rounded-lg">
                <MessageSquare className="mr-2" size={18} />
                Messages
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projects">
              <ProjectsPanel projects={projects} queryClient={queryClient} toast={toast} />
            </TabsContent>

            <TabsContent value="blogs">
              <BlogsPanel blogs={blogs} queryClient={queryClient} toast={toast} />
            </TabsContent>

            <TabsContent value="ecas">
              <EcasPanel ecas={ecas} queryClient={queryClient} toast={toast} />
            </TabsContent>

            <TabsContent value="skills">
              <SkillsPanel 
                skillCategories={skillCategories} 
                additionalSkills={additionalSkills}
                queryClient={queryClient} 
                toast={toast} 
              />
            </TabsContent>

            <TabsContent value="about">
              <AboutPanel aboutInfo={aboutInfo} experiences={experiences} queryClient={queryClient} toast={toast} />
            </TabsContent>

            <TabsContent value="messages">
              <MessagesPanel 
                contactMessages={contactMessages} 
                isLoading={messagesLoading}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

function ProjectsPanel({ projects, queryClient, toast }: { projects: Project[], queryClient: any, toast: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    category: "fullstack",
    githubUrl: "",
    liveUrl: "",
    docsUrl: "",
    imageUrl: ""
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          technologies: data.technologies.split(",").map((t: string) => t.trim()).filter((t: string) => t)
        })
      });
      if (!res.ok) throw new Error("Failed to create project");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
      setIsOpen(false);
      resetForm();
      toast({ title: "Project created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create project", variant: "destructive" });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number, data: any }) => {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          technologies: data.technologies.split(",").map((t: string) => t.trim()).filter((t: string) => t)
        })
      });
      if (!res.ok) throw new Error("Failed to update project");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
      setIsOpen(false);
      setEditingProject(null);
      resetForm();
      toast({ title: "Project updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update project", variant: "destructive" });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete project");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
      toast({ title: "Project deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete project", variant: "destructive" });
    }
  });

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      technologies: "",
      category: "fullstack",
      githubUrl: "",
      liveUrl: "",
      docsUrl: "",
      imageUrl: ""
    });
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(", "),
      category: project.category,
      githubUrl: project.githubUrl || "",
      liveUrl: project.liveUrl || "",
      docsUrl: project.docsUrl || "",
      imageUrl: project.imageUrl
    });
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProject) {
      updateMutation.mutate({ id: editingProject.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Projects ({projects.length})</CardTitle>
        <Dialog open={isOpen} onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            setEditingProject(null);
            resetForm();
          }
        }}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Plus className="mr-2" size={16} />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="text-sm text-white/70 mb-1 block">Title</label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Description</label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/5 border-white/10 min-h-[100px]"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Technologies (comma separated)</label>
                <Input 
                  value={formData.technologies}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                  className="bg-white/5 border-white/10"
                  placeholder="React, Node.js, PostgreSQL"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Category</label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/10">
                    <SelectItem value="fullstack">Fullstack</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="frontend">Frontend</SelectItem>
                    <SelectItem value="data">Data Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Image URL</label>
                <Input 
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">GitHub URL (optional)</label>
                <Input 
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Live URL (optional)</label>
                <Input 
                  value={formData.liveUrl}
                  onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Docs URL (optional)</label>
                <Input 
                  value={formData.docsUrl}
                  onChange={(e) => setFormData({ ...formData, docsUrl: e.target.value })}
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600">
                  <Save className="mr-2" size={16} />
                  {editingProject ? "Update" : "Create"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="border-white/10">
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {projects.length === 0 ? (
          <p className="text-white/50 text-center py-8">No projects yet. Add your first project!</p>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{project.category} | {project.technologies.join(", ")}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(project)} className="border-white/10">
                    <Edit size={16} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteMutation.mutate(project.id)}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function EcasPanel({ ecas, queryClient, toast }: { ecas: Eca[], queryClient: any, toast: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingEca, setEditingEca] = useState<Eca | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    organization: "",
    role: "",
    description: "",
    startDate: "",
    endDate: "",
    imageUrl: ""
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/ecas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to create ECA");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecas"] });
      setIsOpen(false);
      resetForm();
      toast({ title: "ECA created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create ECA", variant: "destructive" });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number, data: any }) => {
      const res = await fetch(`/api/ecas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to update ECA");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecas"] });
      setIsOpen(false);
      setEditingEca(null);
      resetForm();
      toast({ title: "ECA updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update ECA", variant: "destructive" });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/ecas/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete ECA");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/ecas"] });
      toast({ title: "ECA deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete ECA", variant: "destructive" });
    }
  });

  const resetForm = () => {
    setFormData({
      title: "",
      organization: "",
      role: "",
      description: "",
      startDate: "",
      endDate: "",
      imageUrl: ""
    });
  };

  const handleEdit = (eca: Eca) => {
    setEditingEca(eca);
    setFormData({
      title: eca.title,
      organization: eca.organization,
      role: eca.role,
      description: eca.description,
      startDate: eca.startDate,
      endDate: eca.endDate || "",
      imageUrl: eca.imageUrl || ""
    });
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      endDate: formData.endDate || null,
      imageUrl: formData.imageUrl || null
    };
    if (editingEca) {
      updateMutation.mutate({ id: editingEca.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white">Extra-Curricular Activities ({ecas.length})</CardTitle>
        <Dialog open={isOpen} onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            setEditingEca(null);
            resetForm();
          }
        }}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
              <Plus className="mr-2" size={16} />
              Add ECA
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingEca ? "Edit ECA" : "Add New ECA"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="text-sm text-white/70 mb-1 block">Title</label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Organization</label>
                <Input 
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Role</label>
                <Input 
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="bg-white/5 border-white/10"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Description</label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/5 border-white/10 min-h-[100px]"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Start Date</label>
                  <Input 
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="bg-white/5 border-white/10"
                    placeholder="e.g., Jan 2023"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">End Date (optional)</label>
                  <Input 
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="bg-white/5 border-white/10"
                    placeholder="e.g., Present"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Image URL (optional)</label>
                <Input 
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="bg-white/5 border-white/10"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600">
                  <Save className="mr-2" size={16} />
                  {editingEca ? "Update" : "Create"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="border-white/10">
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        {ecas.length === 0 ? (
          <p className="text-white/50 text-center py-8">No ECAs yet. Add your first activity!</p>
        ) : (
          <div className="space-y-4">
            {ecas.map((eca) => (
              <div key={eca.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{eca.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{eca.role} at {eca.organization}</p>
                  <p className="text-xs text-white/40 mt-1">{eca.startDate} - {eca.endDate || "Present"}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(eca)} className="border-white/10">
                    <Edit size={16} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteMutation.mutate(eca.id)}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function MessagesPanel({ contactMessages, isLoading }: { 
  contactMessages: ContactMessage[], 
  isLoading: boolean 
}) {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white flex items-center gap-3">
          <MessageSquare className="text-cyan-400" />
          Contact Form Submissions ({contactMessages?.length || 0})
        </CardTitle>
        <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-4 py-1">
          {contactMessages?.length || 0} Messages
        </Badge>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="text-center text-white/60 py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <Mail className="text-cyan-400" size={32} />
            </motion.div>
            <p className="mt-4">Loading messages...</p>
          </div>
        ) : !contactMessages || contactMessages.length === 0 ? (
          <div className="text-center py-16">
            <MessageSquare className="mx-auto text-white/20 mb-4" size={64} />
            <p className="text-white/50 text-lg">No contact messages yet</p>
            <p className="text-white/30 text-sm mt-2">Messages from your contact form will appear here</p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="space-y-4">
            {contactMessages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`message-${msg.id}`}
                  className="bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                        <User className="text-white" size={20} />
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="text-white font-semibold text-lg">{msg.name}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="flex items-center gap-1 text-white/60 text-sm">
                            <Mail size={14} />
                            {msg.email}
                          </span>
                          <span className="flex items-center gap-1 text-white/40 text-sm">
                            <Clock size={14} />
                            {new Date(msg.createdAt).toLocaleDateString()} at {new Date(msg.createdAt).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 mt-2">
                      <p className="text-white/80 whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
}

function SkillsPanel({ skillCategories, additionalSkills, queryClient, toast }: { 
  skillCategories: SkillCategory[], 
  additionalSkills: AdditionalSkill[],
  queryClient: any, 
  toast: any 
}) {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [skillOpen, setSkillOpen] = useState(false);
  const [additionalOpen, setAdditionalOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "" });
  const [categoryForm, setCategoryForm] = useState({ name: "", icon: "fas fa-code" });
  const [skillForm, setSkillForm] = useState({ categoryId: 0, name: "", level: "Intermediate", percentage: 50 });
  const [additionalForm, setAdditionalForm] = useState({ name: "" });

  const updatePasswordMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/update-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to update password");
      return result;
    },
    onSuccess: () => {
      toast({ 
        title: "Password updated successfully",
        description: "Your new password has been saved."
      });
      setPasswordForm({ currentPassword: "", newPassword: "" });
    },
    onError: (error: any) => {
      toast({ 
        title: "Failed to update password", 
        description: error.message || "Please check your current password and try again.",
        variant: "destructive" 
      });
    }
  });

  const createCategoryMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/skill-categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to create category");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/skill-categories"] });
      setCategoryOpen(false);
      setCategoryForm({ name: "", icon: "fas fa-code" });
      toast({ title: "Category created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create category", variant: "destructive" });
    }
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/skill-categories/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete category");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/skill-categories"] });
      toast({ title: "Category deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete category", variant: "destructive" });
    }
  });

  const createSkillMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to create skill");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/skill-categories"] });
      setSkillOpen(false);
      setSkillForm({ categoryId: 0, name: "", level: "Intermediate", percentage: 50 });
      toast({ title: "Skill created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create skill", variant: "destructive" });
    }
  });

  const deleteSkillMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/skills/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete skill");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/skill-categories"] });
      toast({ title: "Skill deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete skill", variant: "destructive" });
    }
  });

  const createAdditionalMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/additional-skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to create skill");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/additional-skills"] });
      setAdditionalOpen(false);
      setAdditionalForm({ name: "" });
      toast({ title: "Additional skill created successfully" });
    },
    onError: () => {
      toast({ title: "Failed to create skill", variant: "destructive" });
    }
  });

  const deleteAdditionalMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/additional-skills/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete skill");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/additional-skills"] });
      toast({ title: "Skill deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete skill", variant: "destructive" });
    }
  });

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Password Management</CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Lock className="mr-2" size={16} />
                Change Password
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Update Password</DialogTitle>
              </DialogHeader>
              <form onSubmit={(e) => {
                e.preventDefault();
                updatePasswordMutation.mutate(passwordForm);
              }} className="space-y-4 mt-4">
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Current Password</label>
                  <Input 
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                    className="bg-white/5 border-white/10"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">New Password</label>
                  <Input 
                    type="password"
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                    className="bg-white/5 border-white/10"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Update Password
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
      </Card>

      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Skill Categories ({skillCategories.length})</CardTitle>
          <Dialog open={categoryOpen} onOpenChange={setCategoryOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Plus className="mr-2" size={16} />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Add Skill Category</DialogTitle>
              </DialogHeader>
              <form onSubmit={(e) => {
                e.preventDefault();
                createCategoryMutation.mutate(categoryForm);
              }} className="space-y-4 mt-4">
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Category Name</label>
                  <Input 
                    value={categoryForm.name}
                    onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                    className="bg-white/5 border-white/10"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Icon</label>
                  <Select value={categoryForm.icon} onValueChange={(value) => setCategoryForm({ ...categoryForm, icon: value })}>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10">
                      <SelectItem value="fas fa-code">Code</SelectItem>
                      <SelectItem value="fas fa-layer-group">Layers</SelectItem>
                      <SelectItem value="fas fa-brain">Brain</SelectItem>
                      <SelectItem value="fas fa-database">Database</SelectItem>
                      <SelectItem value="fas fa-cloud">Cloud</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Create Category
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {skillCategories.length === 0 ? (
            <p className="text-white/50 text-center py-8">No skill categories yet. Add your first category!</p>
          ) : (
            <div className="space-y-6">
              {skillCategories.map((category) => (
                <div key={category.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-white text-lg">{category.name}</h3>
                    <Button size="sm" variant="destructive" onClick={() => deleteCategoryMutation.mutate(category.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  {category.skills && category.skills.length > 0 ? (
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill.id} className="flex items-center justify-between p-2 bg-white/5 rounded">
                          <div>
                            <span className="text-white">{skill.name}</span>
                            <span className="text-white/50 text-sm ml-2">({skill.level} - {skill.percentage}%)</span>
                          </div>
                          <Button size="sm" variant="ghost" onClick={() => deleteSkillMutation.mutate(skill.id)}>
                            <X size={14} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-white/40 text-sm">No skills in this category</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Add Skills to Categories</CardTitle>
          <Dialog open={skillOpen} onOpenChange={setSkillOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600" disabled={skillCategories.length === 0}>
                <Plus className="mr-2" size={16} />
                Add Skill
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Add Skill</DialogTitle>
              </DialogHeader>
              <form onSubmit={(e) => {
                e.preventDefault();
                createSkillMutation.mutate(skillForm);
              }} className="space-y-4 mt-4">
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Category</label>
                  <Select value={skillForm.categoryId.toString()} onValueChange={(value) => setSkillForm({ ...skillForm, categoryId: parseInt(value) })}>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10">
                      {skillCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id.toString()}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Skill Name</label>
                  <Input 
                    value={skillForm.name}
                    onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                    className="bg-white/5 border-white/10"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Level</label>
                  <Select value={skillForm.level} onValueChange={(value) => setSkillForm({ ...skillForm, level: value })}>
                    <SelectTrigger className="bg-white/5 border-white/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-white/10">
                      <SelectItem value="Expert">Expert</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Learning">Learning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Percentage ({skillForm.percentage}%)</label>
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={skillForm.percentage}
                    onChange={(e) => setSkillForm({ ...skillForm, percentage: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Add Skill
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
      </Card>

      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Additional Skills ({additionalSkills.length})</CardTitle>
          <Dialog open={additionalOpen} onOpenChange={setAdditionalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Plus className="mr-2" size={16} />
                Add Skill
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-white/10 text-white">
              <DialogHeader>
                <DialogTitle>Add Additional Skill</DialogTitle>
              </DialogHeader>
              <form onSubmit={(e) => {
                e.preventDefault();
                createAdditionalMutation.mutate(additionalForm);
              }} className="space-y-4 mt-4">
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Skill Name</label>
                  <Input 
                    value={additionalForm.name}
                    onChange={(e) => setAdditionalForm({ name: e.target.value })}
                    className="bg-white/5 border-white/10"
                    placeholder="e.g., Docker, AWS, Git"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                  Add Skill
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {additionalSkills.length === 0 ? (
            <p className="text-white/50 text-center py-8">No additional skills yet.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                  <span className="text-white">{skill.name}</span>
                  <button onClick={() => deleteAdditionalMutation.mutate(skill.id)} className="text-white/50 hover:text-red-400">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


function AboutPanel({ aboutInfo, experiences, queryClient, toast }: { 
  aboutInfo: any, 
  experiences: Experience[],
  queryClient: any, 
  toast: any 
}) {
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  
  const [aboutForm, setAboutForm] = useState({
    id: 0,
    bio: "",
    passion: "",
    yearsExperience: "",
    projectsCompleted: "",
    aspirationLabel: ""
  });

  const [experienceForm, setExperienceForm] = useState({
    id: 0,
    role: "",
    duration: "",
    description: "",
    order: 0
  });

  useEffect(() => {
    if (aboutInfo && aboutInfo.id) {
      setAboutForm(aboutInfo);
    }
  }, [aboutInfo]);

  const updateAboutMutation = useMutation({
    mutationFn: async (data: any) => {
      const method = data.id ? "PUT" : "POST";
      const url = data.id ? `/api/about/${data.id}` : "/api/about";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to update about section");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/about"] });
      setIsEditingAbout(false);
      toast({ title: "About section updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update about section", variant: "destructive" });
    }
  });

  const createExperienceMutation = useMutation({
    mutationFn: async (data: Omit<Experience, 'id'>) => {
      const res = await fetch("/api/experiences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to create experience");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/experiences"] });
      setIsEditingExperience(false);
      setExperienceForm({ id: 0, title: "", company: "", role: "", description: "", startDate: "", endDate: "" });
      toast({ title: "Experience added successfully" });
    },
    onError: () => {
      toast({ title: "Failed to add experience", variant: "destructive" });
    }
  });

  const updateExperienceMutation = useMutation({
    mutationFn: async (data: Experience) => {
      const res = await fetch(`/api/experiences/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Failed to update experience");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/experiences"] });
      setIsEditingExperience(false);
      setExperienceForm({ id: 0, title: "", company: "", role: "", description: "", startDate: "", endDate: "" });
      toast({ title: "Experience updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update experience", variant: "destructive" });
    }
  });

  const deleteExperienceMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/experiences/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete experience");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/experiences"] });
      toast({ title: "Experience deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete experience", variant: "destructive" });
    }
  });

  const handleAboutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aboutInfo && aboutInfo.length > 0) {
      updateAboutMutation.mutate(aboutForm);
    } else {
      // Handle case where aboutInfo might be initially empty
      toast({ title: "About section not found, please add it first.", variant: "destructive" });
    }
  };

  const handleExperienceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (experienceForm.id) {
      updateExperienceMutation.mutate(experienceForm as Experience);
    } else {
      const { id, ...createData } = experienceForm;
      createExperienceMutation.mutate(createData);
    }
  };

  const handleEditExperience = (experience: Experience) => {
    setExperienceForm(experience);
    setIsEditingExperience(true);
  };

  const handleAddExperience = () => {
    setExperienceForm({ id: 0, role: "", duration: "", description: "", order: 0 });
    setIsEditingExperience(true);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">About Section</CardTitle>
          <Button onClick={() => setIsEditingAbout(!isEditingAbout)} className="bg-gradient-to-r from-purple-600 to-blue-600">
            {isEditingAbout ? "Cancel" : "Edit"}
          </Button>
        </CardHeader>
        <CardContent>
          {isEditingAbout ? (
            <form onSubmit={handleAboutSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-white/70 mb-1 block">Bio</label>
                <Textarea 
                  value={aboutForm.bio}
                  onChange={(e) => setAboutForm({ ...aboutForm, bio: e.target.value })}
                  className="bg-white/5 border-white/10 min-h-[100px]"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Passion</label>
                <Textarea 
                  value={aboutForm.passion}
                  onChange={(e) => setAboutForm({ ...aboutForm, passion: e.target.value })}
                  className="bg-white/5 border-white/10 min-h-[100px]"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Years Experience</label>
                  <Input 
                    value={aboutForm.yearsExperience}
                    onChange={(e) => setAboutForm({ ...aboutForm, yearsExperience: e.target.value })}
                    className="bg-white/5 border-white/10"
                    placeholder="2.5+"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Projects Completed</label>
                  <Input 
                    value={aboutForm.projectsCompleted}
                    onChange={(e) => setAboutForm({ ...aboutForm, projectsCompleted: e.target.value })}
                    className="bg-white/5 border-white/10"
                    placeholder="15+"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Aspiration Label</label>
                <Input 
                  value={aboutForm.aspirationLabel}
                  onChange={(e) => setAboutForm({ ...aboutForm, aspirationLabel: e.target.value })}
                  className="bg-white/5 border-white/10"
                  placeholder="MIT"
                  required
                />
              </div>
              <Button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-600">
                <Save className="mr-2" size={16} />
                Save Changes
              </Button>
            </form>
          ) : (
            aboutInfo && aboutInfo.id ? (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Bio</h3>
                  <p className="text-white/70 leading-relaxed">{aboutInfo.bio}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Passion</h3>
                  <p className="text-white/70 leading-relaxed">{aboutInfo.passion}</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-sm text-white/50 mb-1">Experience</h4>
                    <p className="text-white font-semibold">{aboutInfo.yearsExperience} Years</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/50 mb-1">Projects</h4>
                    <p className="text-white font-semibold">{aboutInfo.projectsCompleted} Completed</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-white/50 mb-1">Aspiration</h4>
                    <p className="text-white font-semibold">{aboutInfo.aspirationLabel}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-white/50 text-center py-8">No about information available. Click 'Edit' to add it.</p>
            )
          )}
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white">Work Experiences ({experiences.length})</CardTitle>
          <Dialog open={isEditingExperience} onOpenChange={(open) => {
            setIsEditingExperience(open);
            if (!open) {
              setExperienceForm({ id: 0, role: "", duration: "", description: "", order: 0 });
            }
          }}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600" onClick={handleAddExperience}>
                <Plus className="mr-2" size={16} />
                Add Experience
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{experienceForm.id ? "Edit Experience" : "Add New Experience"}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleExperienceSubmit} className="space-y-4 mt-4">
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Role</label>
                  <Input 
                    value={experienceForm.role}
                    onChange={(e) => setExperienceForm({ ...experienceForm, role: e.target.value })}
                    className="bg-white/5 border-white/10"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Duration</label>
                  <Input 
                    value={experienceForm.duration}
                    onChange={(e) => setExperienceForm({ ...experienceForm, duration: e.target.value })}
                    className="bg-white/5 border-white/10"
                    placeholder="e.g., 2.5+ Years"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Description</label>
                  <Textarea 
                    value={experienceForm.description}
                    onChange={(e) => setExperienceForm({ ...experienceForm, description: e.target.value })}
                    className="bg-white/5 border-white/10 min-h-[100px]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-white/70 mb-1 block">Order</label>
                  <Input 
                    type="number"
                    value={experienceForm.order}
                    onChange={(e) => setExperienceForm({ ...experienceForm, order: parseInt(e.target.value) || 0 })}
                    className="bg-white/5 border-white/10"
                    placeholder="0"
                    required
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600">
                    <Save className="mr-2" size={16} />
                    {experienceForm.id ? "Update" : "Add"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setIsEditingExperience(false)} className="border-white/10">
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {experiences.length === 0 ? (
            <p className="text-white/50 text-center py-8">No work experiences yet. Add your first experience!</p>
          ) : (
            <div className="space-y-4">
              {experiences.map((experience) => (
                <div key={experience.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{experience.role}</h3>
                    <p className="text-sm text-white/60 mt-1">{experience.duration}</p>
                    <p className="text-xs text-white/70 mt-1">{experience.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEditExperience(experience)} className="border-white/10">
                      <Edit size={16} />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => deleteExperienceMutation.mutate(experience.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}


function BlogsPanel({ blogs, queryClient, toast }: { blogs: Blog[], queryClient: any, toast: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mediumUrl: "",
    imageUrl: "",
    publishedDate: ""
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          imageUrl: data.imageUrl || null,
          publishedDate: data.publishedDate || null
        })
      });
      if (!res.ok) throw new Error("Failed to create blog");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      setIsOpen(false);
      resetForm();
      toast({ title: "Blog post added successfully" });
    },
    onError: () => {
      toast({ title: "Failed to add blog post", variant: "destructive" });
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number, data: any }) => {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          imageUrl: data.imageUrl || null,
          publishedDate: data.publishedDate || null
        })
      });
      if (!res.ok) throw new Error("Failed to update blog");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      setIsOpen(false);
      setEditingBlog(null);
      resetForm();
      toast({ title: "Blog post updated successfully" });
    },
    onError: () => {
      toast({ title: "Failed to update blog post", variant: "destructive" });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete blog");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/blogs"] });
      toast({ title: "Blog post deleted successfully" });
    },
    onError: () => {
      toast({ title: "Failed to delete blog post", variant: "destructive" });
    }
  });

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      mediumUrl: "",
      imageUrl: "",
      publishedDate: ""
    });
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      description: blog.description,
      mediumUrl: blog.mediumUrl,
      imageUrl: blog.imageUrl || "",
      publishedDate: blog.publishedDate || ""
    });
    setIsOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBlog) {
      updateMutation.mutate({ id: editingBlog.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div>
          <CardTitle className="text-white">Blog Posts ({blogs.length})</CardTitle>
          <p className="text-white/60 text-sm mt-1">
            Add your Medium blog posts to display on the home page
          </p>
        </div>
        <Dialog open={isOpen} onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) {
            setEditingBlog(null);
            resetForm();
          }
        }}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600" data-testid="button-add-blog">
              <Plus className="mr-2" size={16} />
              Add Blog Post
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-gray-900 border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingBlog ? "Edit Blog Post" : "Add Medium Blog Post"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4" data-testid="form-blog">
              <div>
                <label className="text-sm text-white/70 mb-1 block">Title</label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="bg-white/5 border-white/10"
                  placeholder="Your blog post title"
                  required
                  data-testid="input-blog-title"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Description</label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/5 border-white/10 min-h-[100px]"
                  placeholder="A short description of your blog post"
                  required
                  data-testid="input-blog-description"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Medium URL</label>
                <Input 
                  value={formData.mediumUrl}
                  onChange={(e) => setFormData({ ...formData, mediumUrl: e.target.value })}
                  className="bg-white/5 border-white/10"
                  placeholder="https://medium.com/@username/your-article"
                  required
                  data-testid="input-blog-medium-url"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Cover Image URL (optional)</label>
                <Input 
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="bg-white/5 border-white/10"
                  placeholder="https://example.com/image.jpg"
                  data-testid="input-blog-image-url"
                />
              </div>
              <div>
                <label className="text-sm text-white/70 mb-1 block">Published Date (optional)</label>
                <Input 
                  value={formData.publishedDate}
                  onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
                  className="bg-white/5 border-white/10"
                  placeholder="e.g., Dec 2024"
                  data-testid="input-blog-published-date"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600" data-testid="button-submit-blog">
                  <Save className="mr-2" size={16} />
                  {editingBlog ? "Update" : "Add Blog Post"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="border-white/10" data-testid="button-cancel-blog">
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
          <p className="text-cyan-400 text-sm">
            Your Medium profile: <a href="https://medium.com/@saadbintofayeltahsin" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-300" data-testid="link-medium-profile-admin">medium.com/@saadbintofayeltahsin</a>
          </p>
        </div>
        {blogs.length === 0 ? (
          <p className="text-white/50 text-center py-8" data-testid="text-no-blogs">No blog posts yet. Add your first Medium article!</p>
        ) : (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10" data-testid={`row-blog-${blog.id}`}>
                <div className="flex-1">
                  <h3 className="font-semibold text-white" data-testid={`text-blog-title-${blog.id}`}>{blog.title}</h3>
                  <p className="text-sm text-white/60 mt-1 line-clamp-2">{blog.description}</p>
                  <div className="flex items-center gap-4 mt-2">
                    {blog.publishedDate && (
                      <span className="text-xs text-white/40">{blog.publishedDate}</span>
                    )}
                    <a 
                      href={blog.mediumUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                      data-testid={`link-blog-medium-${blog.id}`}
                    >
                      <ExternalLink size={12} />
                      View on Medium
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(blog)} className="border-white/10" data-testid={`button-edit-blog-${blog.id}`}>
                    <Edit size={16} />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteMutation.mutate(blog.id)} data-testid={`button-delete-blog-${blog.id}`}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}