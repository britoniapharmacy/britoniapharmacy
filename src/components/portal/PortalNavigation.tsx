import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Globe, 
  Copyright, 
  Archive, 
  Users, 
  CreditCard,
  Settings
} from 'lucide-react';

interface PortalNavigationProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

const PortalNavigation = ({ activeModule, setActiveModule }: PortalNavigationProps) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'regulatory', label: 'Regulatory Affairs', icon: Globe },
    { id: 'trademark', label: 'Trademark Management', icon: Copyright },
    { id: 'documents', label: 'Document Vault', icon: Archive },
    { id: 'users', label: 'User Access', icon: Users },
    { id: 'billing', label: 'Billing Center', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-card border-r">
      <nav className="p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeModule === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveModule(item.id)}
            >
              <item.icon className="h-4 w-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default PortalNavigation;