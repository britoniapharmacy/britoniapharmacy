import React from 'react';
import { 
  Users, 
  Globe, 
  FileText, 
  Shield, 
  Calendar, 
  Search, 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  DollarSign,
  Settings,
  Eye,
  Download,
  Award,
  Building,
  Clock,
  Target,
  Zap
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MVPOverview = () => {
  return (
    <PageLayout showContact={true}>
      <SEO 
        title="MVP Overview - Pan-African Regulatory & Trademark Client Management Portal | Britonia Pharmacy"
        description="Comprehensive MVP overview of our Pan-African Regulatory & Trademark Client Management Portal designed for regulatory consultants, pharmaceutical companies, and IP law firms."
        keywords={['MVP overview', 'regulatory portal', 'trademark management', 'Africa', 'ARIPO', 'WAHO', 'pharmaceutical consulting']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-4xl">🛠️</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                MVP Overview
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-4">
              Pan-African Regulatory & Trademark Client Management Portal
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive digital platform designed to streamline regulatory and trademark processes across all 54 African states
            </p>
          </div>

          {/* Target Users */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Globe className="h-6 w-6 text-primary" />
                🌍 Target Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Regulatory consultants & legal advisors",
                  "Pharmaceutical & biotech companies", 
                  "Trademark owners and IP law firms",
                  "Government and agency liaisons",
                  "Local distributors handling country filings"
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Users className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{user}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Core Modules */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
              <span>🧱</span>
              MVP Core Modules (Foundational Blocks)
            </h2>

            <div className="grid gap-8">
              {/* Module 1: Client Dashboard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-lg px-3 py-1">1️⃣</Badge>
                    <Settings className="h-6 w-6 text-primary" />
                    Client Dashboard (User Control Center)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">Summary view of:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Target, text: "Active projects" },
                      { icon: Clock, text: "Pending actions" },
                      { icon: Calendar, text: "Upcoming deadlines (renewals, filings, responses)" },
                      { icon: AlertCircle, text: "Notifications (email/SMS or in-platform)" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-md">
                        <item.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Quick navigation to "Start New Filing" or "Upload Dossier"
                  </p>
                </CardContent>
              </Card>

              {/* Module 2: Regulatory Affairs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-lg px-3 py-1">2️⃣</Badge>
                    <Shield className="h-6 w-6 text-primary" />
                    Regulatory Affairs Module (Africa-Wide Coverage)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-primary" />
                        🌐 Country Selector
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">Choose one or more countries from all 54 African states, grouped by:</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <Badge variant="outline">ECOWAS (incl. WAHO)</Badge>
                        <Badge variant="outline">AMA member countries</Badge>
                        <Badge variant="outline">National authorities</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Upload className="h-4 w-4 text-primary" />
                        📁 Document Upload Interface
                      </h4>
                      <p className="text-sm text-muted-foreground">For product dossiers, variations, or renewals</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-primary" />
                        📊 Project Tracker
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">Submitted</Badge>
                        <span>→</span>
                        <Badge variant="secondary">Under Review</Badge>
                        <span>→</span>
                        <Badge variant="secondary">Approved</Badge>
                        <span>→</span>
                        <Badge variant="secondary">Renewal</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Custom filters by product, country, or region</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        📅 Regulatory Calendar
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Expiry alerts</li>
                        <li>• National vs. regional renewal timelines</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Module 3: Trademark Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-lg px-3 py-1">3️⃣</Badge>
                    <Award className="h-6 w-6 text-primary" />
                    Trademark Management Module
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">™️ Trademark Application Wizard</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Choose filing type: ARIPO, Madrid, or National</li>
                        <li>• Country and class selection</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">📜 Status Tracking</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Filed</Badge>
                        <span>→</span>
                        <Badge variant="outline">Examined</Badge>
                        <span>→</span>
                        <Badge variant="outline">Published</Badge>
                        <span>→</span>
                        <Badge variant="outline">Registered</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">📄 Watchlist / Opposition Monitor</h4>
                      <p className="text-sm text-muted-foreground">Alerts for potential conflicts (basic functionality)</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Download className="h-4 w-4 text-primary" />
                        📥 Certificate Vault
                      </h4>
                      <p className="text-sm text-muted-foreground">Download granted trademark certificates</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Remaining modules */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Module 4: Document Vault */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Badge variant="secondary" className="px-2 py-1">4️⃣</Badge>
                      <FileText className="h-5 w-5 text-primary" />
                      Document Vault
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">Upload and tag by:</p>
                    <ul className="text-sm space-y-1 mb-4">
                      <li>• Country</li>
                      <li>• Service Type (Regulatory or IP)</li>
                      <li>• Product or Trademark</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">Basic search & filter, secure download & document previews</p>
                  </CardContent>
                </Card>

                {/* Module 5: User Access */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Badge variant="secondary" className="px-2 py-1">5️⃣</Badge>
                      <Users className="h-5 w-5 text-primary" />
                      User Access & Permissions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">Role-based access control:</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="outline" className="text-xs">Admin</Badge>
                          <Badge variant="outline" className="text-xs">Legal</Badge>
                          <Badge variant="outline" className="text-xs">Regulatory</Badge>
                          <Badge variant="outline" className="text-xs">Finance</Badge>
                        </div>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Multi-user teams per client account</li>
                        <li>• Basic audit logs</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Module 6: Billing */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Badge variant="secondary" className="px-2 py-1">6️⃣</Badge>
                      <DollarSign className="h-5 w-5 text-primary" />
                      Billing & Invoice Center
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        Generate invoices after service milestones
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        Download invoices (PDF)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        Manual payment tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        Estimate calculator for filings
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Module 7: Integrations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <Badge variant="secondary" className="px-2 py-1">7️⃣</Badge>
                      <Building className="h-5 w-5 text-primary" />
                      Regional Integrations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-green-600">✅ AMA:</p>
                        <ul className="text-xs text-muted-foreground ml-4 space-y-1">
                          <li>• Joint dossier submission form</li>
                          <li>• Track status from AMA → Member NMRAs</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-600">✅ ECOWAS & WAHO:</p>
                        <ul className="text-xs text-muted-foreground ml-4 space-y-1">
                          <li>• Regional application form</li>
                          <li>• WAHO coordination tracking</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Client Journey Example */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <span>🧭</span>
                MVP Client Journey Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/30 p-6 rounded-lg mb-4">
                <p className="font-medium mb-4">
                  <strong>Scenario:</strong> A pharmaceutical company wants to register an anti-malaria drug in 5 ECOWAS countries under WAHO and file a trademark through ARIPO.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Login → Dashboard",
                  "Start New Regulatory Project → Select ECOWAS countries → Choose WAHO option",
                  "Upload dossier → Submit",
                  "Switch to Trademark Module → File under ARIPO",
                  "Track project statuses → Receive notifications for each step",
                  "Download certificates & regulatory approvals when ready"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-md">
                    <Badge variant="outline" className="text-xs">{index + 1}</Badge>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Value Proposition */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="h-6 w-6 text-primary" />
                🧩 MVP Value Proposition
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "One centralized portal for all of Africa",
                  "Simplified regulatory & trademark submissions",
                  "Save time and reduce duplication for multi-country filings",
                  "Track real-time statuses across AMA, ECOWAS, and ARIPO",
                  "Launch-ready platform with modular growth"
                ].map((value, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default MVPOverview;