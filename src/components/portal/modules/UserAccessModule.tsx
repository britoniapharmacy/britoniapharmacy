import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  Users, 
  Plus, 
  Edit, 
  Shield, 
  Mail, 
  Calendar,
  Search,
  Settings,
  UserCheck,
  UserX
} from 'lucide-react';

const UserAccessModule = () => {
  const [selectedRole, setSelectedRole] = useState('all');

  const users = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@pharmatech.com",
      role: "Admin",
      department: "Regulatory Affairs",
      status: "Active",
      lastLogin: "2024-08-01 14:30",
      permissions: ["All Access"],
      joinDate: "2023-01-15"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@pharmatech.com",
      role: "Regulatory",
      department: "Regulatory Affairs",
      status: "Active",
      lastLogin: "2024-08-01 09:15",
      permissions: ["Regulatory Read/Write", "Document Upload"],
      joinDate: "2023-03-20"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@pharmatech.com",
      role: "Legal",
      department: "Legal",
      status: "Active",
      lastLogin: "2024-07-31 16:45",
      permissions: ["Trademark Management", "Document Access"],
      joinDate: "2023-05-10"
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.wilson@pharmatech.com",
      role: "Finance",
      department: "Finance",
      status: "Active",
      lastLogin: "2024-08-01 11:20",
      permissions: ["Billing Access", "Invoice Generation"],
      joinDate: "2023-02-28"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "lisa.thompson@pharmatech.com",
      role: "Regulatory",
      department: "Regulatory Affairs",
      status: "Inactive",
      lastLogin: "2024-07-20 10:30",
      permissions: ["Regulatory Read Only"],
      joinDate: "2022-11-15"
    }
  ];

  const roles = [
    {
      name: "Admin",
      description: "Full system access and user management",
      permissions: [
        "All regulatory functions",
        "All trademark functions", 
        "User management",
        "Billing management",
        "System settings"
      ],
      color: "bg-red-100 text-red-800"
    },
    {
      name: "Regulatory",
      description: "Regulatory affairs management",
      permissions: [
        "Create/edit regulatory projects",
        "Upload/download documents",
        "View project status",
        "Access regulatory calendar"
      ],
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Legal",
      description: "Trademark and IP management",
      permissions: [
        "Create/edit trademark applications",
        "Manage trademark portfolio",
        "Access opposition monitoring",
        "Download certificates"
      ],
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Finance",
      description: "Billing and financial oversight",
      permissions: [
        "View all projects (read-only)",
        "Generate invoices",
        "Manage billing",
        "Access financial reports"
      ],
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const auditLogs = [
    {
      id: 1,
      user: "Dr. Sarah Johnson",
      action: "Created new regulatory project",
      project: "Anti-Malaria Drug Registration",
      timestamp: "2024-08-01 14:35",
      ip: "192.168.1.100"
    },
    {
      id: 2,
      user: "Michael Chen",
      action: "Uploaded document",
      project: "Medical Device Approval",
      timestamp: "2024-08-01 09:20",
      ip: "192.168.1.101"
    },
    {
      id: 3,
      user: "Emily Rodriguez",
      action: "Filed trademark application",
      project: "PHARMAVITA Brand Protection",
      timestamp: "2024-07-31 16:50",
      ip: "192.168.1.102"
    },
    {
      id: 4,
      user: "James Wilson",
      action: "Generated invoice",
      project: "Q2 2024 Services",
      timestamp: "2024-08-01 11:25",
      ip: "192.168.1.103"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: string) => {
    const roleConfig = roles.find(r => r.name === role);
    return roleConfig?.color || 'bg-gray-100 text-gray-800';
  };

  const filteredUsers = selectedRole === 'all' ? users : users.filter(user => user.role === selectedRole);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <Users className="h-6 w-6 mr-2 text-primary" />
            User Access & Permissions
          </h2>
          <p className="text-muted-foreground">Manage team access and role-based permissions</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserCheck className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{users.filter(u => u.status === 'Active').length}</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserX className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-2xl font-bold">{users.filter(u => u.status === 'Inactive').length}</p>
                <p className="text-sm text-muted-foreground">Inactive Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{roles.length}</p>
                <p className="text-sm text-muted-foreground">Role Types</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">{users.filter(u => u.role === 'Admin').length}</p>
                <p className="text-sm text-muted-foreground">Administrators</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Role Definitions */}
      <Card>
        <CardHeader>
          <CardTitle>Role Definitions & Permissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((role) => (
              <Card key={role.name} className="border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge className={role.color}>{role.name}</Badge>
                    <span className="text-sm text-muted-foreground">{role.description}</span>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Permissions:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {role.permissions.map((permission, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {permission}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Management */}
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
            </div>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Regulatory">Regulatory</SelectItem>
                <SelectItem value="Legal">Legal</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div key={user.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold">{user.name}</h3>
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Email:</span>
                        <p className="text-muted-foreground">{user.email}</p>
                      </div>
                      <div>
                        <span className="font-medium">Department:</span>
                        <p className="text-muted-foreground">{user.department}</p>
                      </div>
                      <div>
                        <span className="font-medium">Last Login:</span>
                        <p className="text-muted-foreground">{user.lastLogin}</p>
                      </div>
                      <div>
                        <span className="font-medium">Member Since:</span>
                        <p className="text-muted-foreground">{user.joinDate}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="font-medium text-sm">Permissions:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {user.permissions.map((permission, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch checked={user.status === 'Active'} />
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Audit Logs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Recent Activity Log
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditLogs.map((log) => (
              <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <p className="font-medium">{log.user}</p>
                  <p className="text-sm text-muted-foreground">
                    {log.action} • {log.project}
                  </p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>{log.timestamp}</p>
                  <p>IP: {log.ip}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserAccessModule;