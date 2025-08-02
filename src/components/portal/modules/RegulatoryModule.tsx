import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Globe, 
  Upload, 
  FileText, 
  Calendar, 
  Filter,
  Plus,
  Search
} from 'lucide-react';

const RegulatoryModule = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const countryGroups = {
    ecowas: ['Ghana', 'Nigeria', 'Senegal', 'Mali', 'Burkina Faso', 'Niger', 'Guinea', 'Sierra Leone', 'Liberia', 'Ivory Coast', 'Benin', 'Togo', 'Cape Verde', 'Gambia', 'Guinea-Bissau'],
    ama: ['Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Democratic Republic of Congo', 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'],
    national: ['Ghana FDA', 'Nigeria NAFDAC', 'Kenya Pharmacy and Poisons Board', 'South Africa MCC', 'Morocco Ministry of Health', 'Egypt EDA']
  };

  const projects = [
    {
      id: 1,
      name: "Anti-Malaria Drug Registration",
      product: "Artemether-Lumefantrine",
      countries: ["Ghana", "Nigeria", "Kenya"],
      status: "Under Review",
      submissionDate: "2024-07-15",
      expectedApproval: "2024-09-15",
      type: "New Application",
      region: "ECOWAS"
    },
    {
      id: 2,
      name: "Antibiotic Variation",
      product: "Amoxicillin 500mg",
      countries: ["South Africa", "Botswana"],
      status: "Approved",
      submissionDate: "2024-06-01",
      expectedApproval: "2024-08-30",
      type: "Variation",
      region: "AMA"
    },
    {
      id: 3,
      name: "Medical Device Registration",
      product: "Blood Glucose Monitor",
      countries: ["Ghana FDA"],
      status: "Submitted",
      submissionDate: "2024-08-01",
      expectedApproval: "2024-10-01",
      type: "Medical Device",
      region: "National"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'under review': return 'bg-yellow-100 text-yellow-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <Globe className="h-6 w-6 mr-2 text-primary" />
            Regulatory Affairs Module
          </h2>
          <p className="text-muted-foreground">Africa-wide regulatory submissions and tracking</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Submission
        </Button>
      </div>

      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList>
          <TabsTrigger value="projects">Active Projects</TabsTrigger>
          <TabsTrigger value="new-submission">New Submission</TabsTrigger>
          <TabsTrigger value="calendar">Regulatory Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filter Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label>Status</Label>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="submitted">Submitted</SelectItem>
                      <SelectItem value="under-review">Under Review</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Region</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecowas">ECOWAS</SelectItem>
                      <SelectItem value="ama">AMA</SelectItem>
                      <SelectItem value="national">National</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Product Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Product type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="drug">Pharmaceutical</SelectItem>
                      <SelectItem value="device">Medical Device</SelectItem>
                      <SelectItem value="supplement">Supplement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button variant="outline" className="w-full">
                    <Filter className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects List */}
          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{project.name}</h3>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge variant="outline">{project.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{project.product}</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Countries:</span>
                          <p className="text-muted-foreground">{project.countries.join(', ')}</p>
                        </div>
                        <div>
                          <span className="font-medium">Submitted:</span>
                          <p className="text-muted-foreground">{project.submissionDate}</p>
                        </div>
                        <div>
                          <span className="font-medium">Expected Approval:</span>
                          <p className="text-muted-foreground">{project.expectedApproval}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-1" />
                        Upload Response
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new-submission" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>New Regulatory Submission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Product Name</Label>
                  <Input placeholder="Enter product name" />
                </div>
                <div>
                  <Label>Submission Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New Application</SelectItem>
                      <SelectItem value="variation">Variation</SelectItem>
                      <SelectItem value="renewal">Renewal</SelectItem>
                      <SelectItem value="extension">Extension</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Select Countries/Regions</Label>
                <div className="mt-2 space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">ECOWAS Countries</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {countryGroups.ecowas.slice(0, 6).map((country) => (
                        <Button
                          key={country}
                          variant={selectedCountries.includes(country) ? "default" : "outline"}
                          size="sm"
                          onClick={() => {
                            setSelectedCountries(prev => 
                              prev.includes(country) 
                                ? prev.filter(c => c !== country)
                                : [...prev, country]
                            );
                          }}
                        >
                          {country}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label>Upload Dossier</Label>
                <div className="mt-2 border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Drop files here or click to browse
                  </p>
                </div>
              </div>

              <Button className="w-full">Submit Application</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Regulatory Calendar & Deadlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-orange-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-orange-800">Upcoming Deadlines</h4>
                      <p className="text-2xl font-bold text-orange-600">3</p>
                      <p className="text-sm text-muted-foreground">Next 30 days</p>
                    </CardContent>
                  </Card>
                  <Card className="border-red-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-red-800">Renewal Alerts</h4>
                      <p className="text-2xl font-bold text-red-600">2</p>
                      <p className="text-sm text-muted-foreground">Expiring soon</p>
                    </CardContent>
                  </Card>
                  <Card className="border-blue-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-blue-800">Response Due</h4>
                      <p className="text-2xl font-bold text-blue-600">1</p>
                      <p className="text-sm text-muted-foreground">Agency queries</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RegulatoryModule;