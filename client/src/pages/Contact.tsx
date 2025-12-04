import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Send, Mail, MapPin, Clock, Github, MessageCircle, Briefcase, Download, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import { apiRequest } from "@/lib/queryClient";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Saad_Tahsin_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { 
      name: "GitHub", 
      username: "@Saad200724", 
      url: SOCIAL_LINKS.github, 
      icon: Github, 
      gradient: "from-gray-600 to-gray-800",
      shadowColor: "shadow-gray-500/50"
    },
    { 
      name: "WhatsApp", 
      username: "Chat Now", 
      url: SOCIAL_LINKS.whatsapp, 
      icon: MessageCircle, 
      gradient: "from-green-500 to-emerald-600",
      shadowColor: "shadow-green-500/50"
    },
    { 
      name: "Facebook", 
      username: "PhantomsByte", 
      url: SOCIAL_LINKS.facebook, 
      icon: Facebook, 
      gradient: "from-blue-600 to-indigo-600",
      shadowColor: "shadow-blue-500/50"
    },
    { 
      name: "Upwork", 
      username: "Freelancer", 
      url: SOCIAL_LINKS.upwork, 
      icon: Briefcase, 
      gradient: "from-blue-500 to-cyan-600",
      shadowColor: "shadow-blue-500/50"
    },
  ];

  return (
    <>
      <SEO 
        title="Contact - Saad Bin Tofayel Tahsin"
        description="Ready to work together? Contact me for freelance projects, collaborations, or full-time opportunities. Available for Python development and fullstack engineering."
        url="/contact"
      />
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
                  <Mail size={16} />
                  Get In Touch
                </span>
              </motion.div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-poppins font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Ready to bring your project to life? I'm available for freelance work and excited to discuss your ideas.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Premium Contact Form */}
              <motion.div 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="text-3xl font-poppins font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Send Me a Message
                </h3>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-white/90 font-semibold mb-3 text-sm">Your Name</label>
                    <Input
                      {...form.register("name")}
                      placeholder="John Doe"
                      className="w-full bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-purple-500 rounded-xl h-12 px-4 backdrop-blur-sm"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-sm mt-2">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-white/90 font-semibold mb-3 text-sm">Email Address</label>
                    <Input
                      {...form.register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-purple-500 rounded-xl h-12 px-4 backdrop-blur-sm"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-400 text-sm mt-2">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-white/90 font-semibold mb-3 text-sm">Project Details</label>
                    <Textarea
                      {...form.register("message")}
                      rows={6}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="w-full bg-white/10 border-white/20 text-white placeholder-white/40 focus:border-purple-500 rounded-xl p-4 backdrop-blur-sm resize-none"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-sm mt-2">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full px-8 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            ⟳
                          </motion.div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send size={20} />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
              
              {/* Contact Info & Social Links */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {/* Contact Details Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-poppins font-bold mb-6 text-white">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", value: DEVELOPER_INFO.email, gradient: "from-cyan-500 to-blue-600" },
                      { icon: MapPin, label: "Location", value: DEVELOPER_INFO.location, gradient: "from-purple-500 to-pink-600" },
                      { icon: Clock, label: "Response Time", value: DEVELOPER_INFO.responseTime, gradient: "from-emerald-500 to-teal-600" }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <item.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm font-medium">{item.label}</p>
                          <p className="text-white font-semibold">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Social Links Grid */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <h3 className="text-2xl font-poppins font-bold mb-6 text-white">Connect With Me</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex flex-col items-center justify-center p-6 bg-gradient-to-br ${social.gradient} rounded-2xl shadow-lg ${social.shadowColor} hover:scale-105 transition-all duration-300`}
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <social.icon className="text-white mb-2" size={32} />
                        <p className="text-white font-bold text-sm">{social.name}</p>
                        <p className="text-white/80 text-xs">{social.username}</p>
                      </motion.a>
                    ))}
                  </div>
                </div>
                
                {/* Download Resume Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <Button
                    onClick={handleDownloadResume}
                    className="w-full px-8 py-6 border-2 border-white/20 rounded-2xl text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 bg-transparent"
                  >
                    <Download className="mr-2" size={20} />
                    Download Resume
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
