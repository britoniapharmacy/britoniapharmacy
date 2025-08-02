import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Archive, 
  Upload, 
  Search, 
  FileText, 
  Download, 
  Eye,
  Filter,
  FolderOpen,
  File
} from 'lucide-react';

const DocumentVault = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterCountry, setFilterCountry] = useState('all');

  const documents = [
    {
      id: 1,
      name: "Artemether-Lumefantrine Dossier",
      type: "Regulatory",
      country: "Ghana",
      project: "Anti-Malaria Drug Registration",
      uploadDate: "2024-07-15",
      size: "15.2 MB",
      format: "PDF",
      status: "Active",
      tags: ["Dossier", "ECOWAS", "Malaria"]
    },
    {
      id: 2,
      name: "PHARMAVITA Trademark Certificate",
      type: "Trademark",
      country: "ARIPO",
      project: "PHARMAVITA Brand Protection",
      uploadDate: "2024-02-20",
      size: "2.1 MB",
      format: "PDF",
      status: "Certified",
      tags: ["Certificate", "ARIPO", "Pharmaceuticals"]
    },
    {
      id: 3,
      name: "Manufacturing License",
      type: "Regulatory",
      country: "Nigeria",
      project: "Manufacturing Facility Setup",
      uploadDate: "2024-06-10",
      size: "5.8 MB",
      format: "PDF",
      status: "Valid",
      tags: ["License", "Manufacturing", "NAFDAC"]
    },
    {
      id: 4,
      name: "Clinical Trial Protocol",
      type: "Regulatory",
      country: "Kenya",
      project: "New Drug Development",
      uploadDate: "2024-05-22",
      size: "8.7 MB",
      format: "PDF",
      status: "Approved",
      tags: ["Clinical", "Protocol", "PPB"]
    },
    {
      id: 5,
      name: "Quality Certificates",
      type: "Quality",
      country: "South Africa",
      project: "Product Registration",
      uploadDate: "2024-04-18",
      size: "3.4 MB",
      format: "PDF",
      status: "Valid",
      tags: ["Quality", "Certificates", "MCC"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'certified': return 'bg-blue-100 text-blue-800';
      case 'valid': return 'bg-green-100 text-green-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      case 'expired': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'regulatory': return FileText;
      case 'trademark': return Archive;
      case 'quality': return File;
      default: return FileText;
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = filterType === 'all' || doc.type.toLowerCase() === filterType;
    const matchesCountry = filterCountry === 'all' || doc.country === filterCountry;
    
    return matchesSearch && matchesType && matchesCountry;
  });

  const documentStats = {
    total: documents.length,
    regulatory: documents.filter(d => d.type === 'Regulatory').length,
    trademark: documents.filter(d => d.type === 'Trademark').length,
    quality: documents.filter(d => d.type === 'Quality').length,
    totalSize: documents.reduce((sum, doc) => sum + parseFloat(doc.size), 0).toFixed(1)
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <Archive className="h-6 w-6 mr-2 text-primary" />
            Document Vault
          </h2>
          <p className="text-muted-foreground">Secure document storage and management</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FolderOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{documentStats.total}</p>
                <p className="text-sm text-muted-foreground">Total Documents</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">{documentStats.regulatory}</p>
                <p className="text-sm text-muted-foreground">Regulatory</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Archive className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{documentStats.trademark}</p>
                <p className="text-sm text-muted-foreground">Trademark</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <File className="h-5 w-5 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">{documentStats.quality}</p>
                <p className="text-sm text-muted-foreground">Quality</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div>
              <p className="text-2xl font-bold">{documentStats.totalSize} MB</p>
              <p className="text-sm text-muted-foreground">Storage Used</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search & Filter Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label>Search Documents</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by name or tags..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label>Document Type</Label>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="regulatory">Regulatory</SelectItem>
                  <SelectItem value="trademark">Trademark</SelectItem>
                  <SelectItem value="quality">Quality</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Country/Region</Label>
              <Select value={filterCountry} onValueChange={setFilterCountry}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="Ghana">Ghana</SelectItem>
                  <SelectItem value="Nigeria">Nigeria</SelectItem>
                  <SelectItem value="Kenya">Kenya</SelectItem>
                  <SelectItem value="South Africa">South Africa</SelectItem>
                  <SelectItem value="ARIPO">ARIPO</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Upload Area */}
      <Card>
        <CardContent className="p-6">
          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Upload New Document</h3>
            <p className="text-muted-foreground mb-4">
              Drag and drop files here or click to browse
            </p>
            <Button>
              Choose Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <div className="space-y-4">
        {filteredDocuments.map((document) => {
          const TypeIcon = getTypeIcon(document.type);
          return (
            <Card key={document.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TypeIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold">{document.name}</h3>
                        <Badge className={getStatusColor(document.status)}>
                          {document.status}
                        </Badge>
                        <Badge variant="outline">{document.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">{document.project}</p>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Country:</span>
                          <p className="text-muted-foreground">{document.country}</p>
                        </div>
                        <div>
                          <span className="font-medium">Upload Date:</span>
                          <p className="text-muted-foreground">{document.uploadDate}</p>
                        </div>
                        <div>
                          <span className="font-medium">Size:</span>
                          <p className="text-muted-foreground">{document.size}</p>
                        </div>
                        <div>
                          <span className="font-medium">Format:</span>
                          <p className="text-muted-foreground">{document.format}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {document.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredDocuments.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Archive className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No Documents Found</h3>
            <p className="text-muted-foreground">
              No documents match your current search and filter criteria.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DocumentVault;