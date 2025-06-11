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
      color: "text-white" 
    },
    { 
      name: "WhatsApp", 
      username: "Chat Now", 
      url: SOCIAL_LINKS.whatsapp, 
      icon: MessageCircle, 
      color: "text-green-400" 
    },
    { 
      name: "Facebook", 
      username: "PhantomsByte", 
      url: SOCIAL_LINKS.facebook, 
      icon: Facebook, 
      color: "text-blue-500" 
    },
    { 
      name: "Upwork", 
      username: "Freelancer", 
      url: SOCIAL_LINKS.upwork, 
      icon: Briefcase, 
      color: "text-blue-400" 
    },
  ];

  return (
    <>
      <SEO 
        title="Contact - Saad Bin Tofayel Tahsin"
        description="Ready to work together? Contact me for freelance projects, collaborations, or full-time opportunities. Available for Python development and fullstack engineering."
        url="/contact"
      />
      <div className="pt-32 pb-20 relative bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Let's Work Together
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 text-center mb-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to bring your project to life? I'm available for freelance work and excited to discuss your ideas.
            </motion.p>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div 
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h3 className="text-2xl font-poppins font-semibold mb-6 text-white">Send Me a Message</h3>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Your Name</label>
                    <Input
                      {...form.register("name")}
                      placeholder="Enter your name"
                      className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-500"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Email Address</label>
                    <Input
                      {...form.register("email")}
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-500"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2">Project Details</label>
                    <Textarea
                      {...form.register("message")}
                      rows={5}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-purple-500 resize-none"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          ⟳
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
              
              {/* Contact Info & Social Links */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                {/* Contact Details */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-poppins font-semibold mb-6 text-white">Get In Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Email</p>
                        <p className="text-white font-medium">{DEVELOPER_INFO.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Location</p>
                        <p className="text-white font-medium">{DEVELOPER_INFO.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">Response Time</p>
                        <p className="text-white font-medium">{DEVELOPER_INFO.responseTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-poppins font-semibold mb-6 text-white">Connect With Me</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                      >
                        <social.icon className={`text-2xl ${social.color}`} size={24} />
                        <div>
                          <p className="text-white font-medium">{social.name}</p>
                          <p className="text-white/60 text-sm">{social.username}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Download Resume */}
                <div className="text-center">
                  <Button
                    onClick={handleDownloadResume}
                    variant="outline"
                    className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    <Download className="mr-2" size={20} />
                    Download Resume
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
