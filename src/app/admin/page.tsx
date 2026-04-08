"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Upload,
  BookOpen,
  FolderOpen,
  FileText,
  Trash2,
  Edit3,
  Save,
  X,
  LayoutDashboard,
  BarChart3,
  Settings,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { references as initialReferences, type Reference } from "@/data/references";

type Tab = "dashboard" | "references" | "upload";

const statCards = [
  { label: "Total Standards", value: "20", icon: BookOpen, color: "text-blue-400" },
  { label: "Categories", value: "4", icon: FolderOpen, color: "text-emerald-400" },
  { label: "Articles", value: "6", icon: FileText, color: "text-amber-400" },
  { label: "Projects", value: "6", icon: BarChart3, color: "text-purple-400" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [refs, setRefs] = useState<Reference[]>(initialReferences);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    code: "",
    category: "API" as Reference["category"],
    description: "",
    year: new Date().getFullYear(),
    scope: "",
  });

  const resetForm = () => {
    setFormData({ title: "", code: "", category: "API", description: "", year: new Date().getFullYear(), scope: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setRefs(refs.map((r) => (r.id === editingId ? { ...r, ...formData } : r)));
    } else {
      const newRef: Reference = {
        ...formData,
        id: formData.code.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
      };
      setRefs([newRef, ...refs]);
    }
    resetForm();
  };

  const handleEdit = (ref: Reference) => {
    setFormData({
      title: ref.title,
      code: ref.code,
      category: ref.category,
      description: ref.description,
      year: ref.year,
      scope: ref.scope,
    });
    setEditingId(ref.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setRefs(refs.filter((r) => r.id !== id));
  };

  const tabs: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "references", label: "References", icon: BookOpen },
    { id: "upload", label: "Upload", icon: Upload },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-xs text-steel">Manage references, articles, and content</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full border border-amber-500/20">
              Demo Mode
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <nav className="flex lg:flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors w-full text-left ${
                    activeTab === tab.id
                      ? "bg-accent/10 text-accent border border-accent/20"
                      : "text-steel hover:text-foreground hover:bg-surface"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {statCards.map((stat) => (
                    <Card key={stat.label} hover={false} className="p-5">
                      <stat.icon className={`w-6 h-6 ${stat.color} mb-3`} />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-steel mt-1">{stat.label}</div>
                    </Card>
                  ))}
                </div>

                <Card hover={false} className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { action: "Reference added", detail: "ISO 45001 - Occupational Health and Safety", time: "2 hours ago" },
                      { action: "Article published", detail: "ASME Pressure Vessel Design Guide", time: "1 day ago" },
                      { action: "Project updated", detail: "Offshore Platform Drilling Package", time: "3 days ago" },
                      { action: "Reference updated", detail: "API 650 - Welded Tanks for Oil Storage", time: "1 week ago" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.action}</p>
                          <p className="text-xs text-steel">{item.detail}</p>
                        </div>
                        <span className="text-xs text-steel-light shrink-0 ml-4">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {/* References Tab */}
            {activeTab === "references" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    Manage References ({refs.length})
                  </h2>
                  <button
                    onClick={() => { resetForm(); setShowForm(true); }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-dark transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Reference
                  </button>
                </div>

                {/* Add/Edit Form */}
                <AnimatePresence>
                  {showForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mb-6"
                    >
                      <Card hover={false} className="p-6 border-accent/30">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-foreground">
                            {editingId ? "Edit Reference" : "Add New Reference"}
                          </h3>
                          <button onClick={resetForm} className="p-1 text-steel hover:text-foreground transition-colors">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid sm:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-1">Code *</label>
                              <input
                                type="text"
                                required
                                value={formData.code}
                                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                                placeholder="e.g., API 5CT"
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-1">Category *</label>
                              <select
                                required
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value as Reference["category"] })}
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                              >
                                <option value="API">API</option>
                                <option value="ASME">ASME</option>
                                <option value="ASTM">ASTM</option>
                                <option value="ISO">ISO</option>
                              </select>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-1">Year *</label>
                              <input
                                type="number"
                                required
                                min={1900}
                                max={2100}
                                value={formData.year}
                                onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1">Title *</label>
                            <input
                              type="text"
                              required
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                              placeholder="Full standard title"
                              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1">Description *</label>
                            <textarea
                              required
                              rows={3}
                              value={formData.description}
                              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                              placeholder="Brief description of the standard"
                              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-1">Scope *</label>
                            <input
                              type="text"
                              required
                              value={formData.scope}
                              onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                              placeholder="e.g., Oil & Gas Drilling"
                              className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                          </div>
                          <div className="flex gap-3">
                            <button
                              type="submit"
                              className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-dark transition-colors"
                            >
                              <Save className="w-4 h-4" />
                              {editingId ? "Update" : "Add"} Reference
                            </button>
                            <button
                              type="button"
                              onClick={resetForm}
                              className="px-5 py-2 text-sm text-steel border border-border rounded-lg hover:bg-surface transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* References List */}
                <div className="space-y-3">
                  {refs.map((ref) => (
                    <Card key={ref.id} hover={false} className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-sm text-accent font-medium">{ref.code}</span>
                            <span className="px-2 py-0.5 text-xs bg-surface-dark text-steel rounded-md border border-border">
                              {ref.category}
                            </span>
                            <span className="text-xs text-steel-light">({ref.year})</span>
                          </div>
                          <h4 className="mt-1 font-medium text-foreground text-sm">{ref.title}</h4>
                          <p className="mt-1 text-xs text-steel line-clamp-1">{ref.description}</p>
                        </div>
                        <div className="flex gap-1 shrink-0">
                          <button
                            onClick={() => handleEdit(ref)}
                            className="p-2 text-steel hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(ref.id)}
                            className="p-2 text-steel hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Upload Tab */}
            {activeTab === "upload" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 className="text-2xl font-bold text-foreground mb-6">Upload Documents</h2>
                <Card hover={false} className="p-8">
                  <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-accent/50 transition-colors">
                    <Upload className="w-12 h-12 text-steel-light mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground">
                      Drag & drop files here
                    </h3>
                    <p className="mt-2 text-sm text-steel">
                      or click to browse your computer
                    </p>
                    <p className="mt-1 text-xs text-steel-light">
                      Supports PDF, DOC, DOCX, XLS, XLSX up to 50MB
                    </p>
                    <button className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-dark transition-colors">
                      <Upload className="w-4 h-4" />
                      Choose Files
                    </button>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Recent Uploads</h4>
                    <div className="space-y-2">
                      {[
                        { name: "API_5CT_2018.pdf", size: "2.4 MB", date: "Dec 15, 2024" },
                        { name: "ASME_BPVC_VIII_2021.pdf", size: "8.1 MB", date: "Dec 10, 2024" },
                        { name: "ISO_9001_2015.pdf", size: "1.2 MB", date: "Dec 5, 2024" },
                      ].map((file) => (
                        <div key={file.name} className="flex items-center justify-between py-2 px-3 bg-surface rounded-lg">
                          <div className="flex items-center gap-3">
                            <FileText className="w-4 h-4 text-accent" />
                            <div>
                              <p className="text-sm font-medium text-foreground">{file.name}</p>
                              <p className="text-xs text-steel">{file.size}</p>
                            </div>
                          </div>
                          <span className="text-xs text-steel-light">{file.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
