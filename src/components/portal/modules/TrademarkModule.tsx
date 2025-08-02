import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { 
  Copyright, 
  Plus, 
  FileText, 
  Search,
  Eye,
  Download,
  AlertTriangle
} from 'lucide-react';

const TrademarkModule = () => {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const trademarkClasses = [
    { number: '1', description: 'Chemicals' },
    { number: '3', description: 'Cosmetics and cleaning preparations' },
    { number: '5', description: 'Pharmaceuticals' },
    { number: '9', description: 'Scientific instruments' },
    { number: '10', description: 'Medical apparatus' },
    { number: '44', description: 'Medical services' },
    { number: '42', description: 'Scientific and technological services' }
  ];

  const trademarks = [
    {
      id: 1,
      name: "PHARMAVITA",
      type: "ARIPO",
      classes: ["5", "44"],
      countries: ["Ghana", "Kenya", "Nigeria"],
      status: "Registered",
      filingDate: "2023-05-15",
      registrationDate: "2024-02-20",
      expiryDate: "2034-02-20",
      applicationNumber: "AP/P/2023/015789"
    },
    {
      id: 2,
      name: "MEDISAFE",
      type: "Madrid Protocol",
      classes: ["5", "10"],
      countries: ["South Africa", "Morocco", "Egypt"],
      status: "Under Examination",
      filingDate: "2024-03-10",
      registrationDate: null,
      expiryDate: null,
      applicationNumber: "1745832"
    },
    {
      id: 3,
      name: "BIOHEALTH",
      type: "National",
      classes: ["5"],
      countries: ["Ghana"],
      status: "Published",
      filingDate: "2024-01-20",
      registrationDate: null,
      expiryDate: null,
      applicationNumber: "GH/T/2024/00156"
    }
  ];

  const watchlistItems = [
    {
      id: 1,
      name: "PHARMAVIT",
      similarity: "High",
      status: "Opposition Period",
      filingDate: "2024-07-15",
      applicant: "Generic Pharma Ltd",
      classes: ["5"],
      risk: "High"
    },
    {
      id: 2,
      name: "MEDISECURE",
      similarity: "Medium",
      status: "Published",
      filingDate: "2024-06-20",
      applicant: "SafeMed Corp",
      classes: ["10"],
      risk: "Medium"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'registered': return 'bg-green-100 text-green-800';
      case 'under examination': return 'bg-yellow-100 text-yellow-800';
      case 'published': return 'bg-blue-100 text-blue-800';
      case 'opposed': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <Copyright className="h-6 w-6 mr-2 text-primary" />
            Trademark Management
          </h2>
          <p className="text-muted-foreground">ARIPO, Madrid Protocol & National filings</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Application
        </Button>
      </div>

      <Tabs defaultValue="portfolio" className="space-y-6">
        <TabsList>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="new-application">New Application</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-4">
          <div className="space-y-4">
            {trademarks.map((trademark) => (
              <Card key={trademark.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{trademark.name}</h3>
                        <Badge className={getStatusColor(trademark.status)}>
                          {trademark.status}
                        </Badge>
                        <Badge variant="outline">{trademark.type}</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mt-4">
                        <div>
                          <span className="font-medium">Application #:</span>
                          <p className="text-muted-foreground">{trademark.applicationNumber}</p>
                        </div>
                        <div>
                          <span className="font-medium">Classes:</span>
                          <p className="text-muted-foreground">{trademark.classes.join(', ')}</p>
                        </div>
                        <div>
                          <span className="font-medium">Countries:</span>
                          <p className="text-muted-foreground">{trademark.countries.join(', ')}</p>
                        </div>
                        <div>
                          <span className="font-medium">Filing Date:</span>
                          <p className="text-muted-foreground">{trademark.filingDate}</p>
                        </div>
                      </div>
                      {trademark.registrationDate && (
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Registered:</span>
                          <span className="text-muted-foreground ml-1">{trademark.registrationDate}</span>
                          <span className="font-medium ml-4">Expires:</span>
                          <span className="text-muted-foreground ml-1">{trademark.expiryDate}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      {trademark.status === 'Registered' && (
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="new-application" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trademark Application Wizard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Trademark Name/Mark</Label>
                  <Input placeholder="Enter trademark name" />
                </div>
                <div>
                  <Label>Filing Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select filing type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aripo">ARIPO (Regional)</SelectItem>
                      <SelectItem value="madrid">Madrid Protocol (International)</SelectItem>
                      <SelectItem value="national">National Filing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Trademark Description</Label>
                <Textarea 
                  placeholder="Describe the goods/services for which the trademark will be used"
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <Label>Select Classes</Label>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {trademarkClasses.map((cls) => (
                    <Button
                      key={cls.number}
                      variant={selectedClasses.includes(cls.number) ? "default" : "outline"}
                      size="sm"
                      className="justify-start text-left h-auto p-3"
                      onClick={() => {
                        setSelectedClasses(prev => 
                          prev.includes(cls.number) 
                            ? prev.filter(c => c !== cls.number)
                            : [...prev, cls.number]
                        );
                      }}
                    >
                      <div>
                        <div className="font-medium">Class {cls.number}</div>
                        <div className="text-xs text-muted-foreground">{cls.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label>Priority Claim (Optional)</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <Input placeholder="Priority country" />
                  <Input placeholder="Priority number" />
                  <Input type="date" placeholder="Priority date" />
                </div>
              </div>

              <Button className="w-full">Submit Application</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="watchlist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Opposition Monitor & Watchlist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {watchlistItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold">{item.name}</h4>
                          <Badge className={getRiskColor(item.risk)}>
                            {item.risk} Risk
                          </Badge>
                          <Badge variant="outline">{item.status}</Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Similarity:</span>
                            <p className="text-muted-foreground">{item.similarity}</p>
                          </div>
                          <div>
                            <span className="font-medium">Applicant:</span>
                            <p className="text-muted-foreground">{item.applicant}</p>
                          </div>
                          <div>
                            <span className="font-medium">Classes:</span>
                            <p className="text-muted-foreground">{item.classes.join(', ')}</p>
                          </div>
                          <div>
                            <span className="font-medium">Filing Date:</span>
                            <p className="text-muted-foreground">{item.filingDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Review
                        </Button>
                        <Button variant="outline" size="sm">
                          File Opposition
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-5 w-5 mr-2" />
                Certificate Vault
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trademarks.filter(tm => tm.status === 'Registered').map((trademark) => (
                  <div key={trademark.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{trademark.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Registration #{trademark.applicationNumber} • {trademark.registrationDate}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Certificate
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TrademarkModule;