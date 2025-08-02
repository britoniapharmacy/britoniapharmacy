import React, { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Bell, 
  Calendar, 
  FileText, 
  LogOut, 
  Plus, 
  Upload,
  Globe,
  Copyright,
  Shield,
  Archive,
  Users,
  CreditCard
} from 'lucide-react';
import PortalNavigation from './PortalNavigation';
import RegulatoryModule from './modules/RegulatoryModule';
import TrademarkModule from './modules/TrademarkModule';
import DocumentVault from './modules/DocumentVault';
import UserAccessModule from './modules/UserAccessModule';
import BillingModule from './modules/BillingModule';

interface ClientDashboardProps {
  user: User;
}

const ClientDashboard = ({ user }: ClientDashboardProps) => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to log out.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged out",
        description: "Successfully logged out.",
      });
    }
  };

  const quickStats = [
    { label: "Active Projects", value: "12", icon: FileText, color: "bg-blue-500" },
    { label: "Pending Actions", value: "3", icon: Bell, color: "bg-orange-500" },
    { label: "Upcoming Deadlines", value: "5", icon: Calendar, color: "bg-red-500" },
    { label: "Completed This Month", value: "8", icon: Shield, color: "bg-green-500" },
  ];

  const recentProjects = [
    { 
      id: 1, 
      name: "Anti-Malaria Drug Registration", 
      countries: ["Ghana", "Nigeria", "Kenya"], 
      status: "Under Review",
      type: "Regulatory",
      deadline: "2024-09-15"
    },
    { 
      id: 2, 
      name: "Pharma Brand Trademark", 
      countries: ["ARIPO"], 
      status: "Filed",
      type: "Trademark",
      deadline: "2024-10-01"
    },
    { 
      id: 3, 
      name: "Medical Device Approval", 
      countries: ["ECOWAS"], 
      status: "Approved",
      type: "Regulatory",
      deadline: "2024-08-30"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'under review': return 'bg-yellow-100 text-yellow-800';
      case 'filed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Regulatory & Trademark Portal</h1>
              <p className="text-sm text-muted-foreground">Pan-African Management System</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">{user.email}</Badge>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <PortalNavigation activeModule={activeModule} setActiveModule={setActiveModule} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeModule === 'dashboard' && (
            <>
              {/* Welcome Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
                <p className="text-muted-foreground">Here's what's happening with your projects across Africa.</p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Button className="h-16 text-left justify-start">
                  <Plus className="h-5 w-5 mr-3" />
                  Start New Filing
                </Button>
                <Button variant="outline" className="h-16 text-left justify-start">
                  <Upload className="h-5 w-5 mr-3" />
                  Upload Dossier
                </Button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {quickStats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full ${stat.color}`}>
                          <stat.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Projects */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Recent Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold">{project.name}</h3>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <span>📍 {project.countries.join(', ')}</span>
                            <span>📅 Due: {project.deadline}</span>
                            <Badge variant="outline">{project.type}</Badge>
                          </div>
                        </div>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {activeModule === 'regulatory' && <RegulatoryModule />}
          {activeModule === 'trademark' && <TrademarkModule />}
          {activeModule === 'documents' && <DocumentVault />}
          {activeModule === 'users' && <UserAccessModule />}
          {activeModule === 'billing' && <BillingModule />}
          
          {activeModule === 'settings' && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Settings Module</h2>
              <p className="text-muted-foreground">This module is under development and will be available soon.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;