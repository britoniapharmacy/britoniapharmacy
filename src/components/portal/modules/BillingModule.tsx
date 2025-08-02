import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CreditCard, 
  Download, 
  FileText, 
  DollarSign, 
  Calculator,
  Plus,
  Eye,
  Calendar,
  TrendingUp
} from 'lucide-react';

const BillingModule = () => {
  const [calculatorType, setCalculatorType] = useState('trademark');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const invoices = [
    {
      id: 1,
      number: "INV-2024-001",
      client: "Pharmatech Solutions",
      description: "Anti-Malaria Drug Registration - Ghana, Nigeria, Kenya",
      amount: 15750.00,
      currency: "USD",
      status: "Paid",
      issueDate: "2024-07-15",
      dueDate: "2024-08-15",
      paidDate: "2024-07-28",
      services: ["Regulatory Filing", "Dossier Review", "Agency Liaison"]
    },
    {
      id: 2,
      number: "INV-2024-002", 
      client: "BioPharma Corp",
      description: "PHARMAVITA Trademark - ARIPO Filing",
      amount: 8500.00,
      currency: "USD",
      status: "Pending",
      issueDate: "2024-08-01",
      dueDate: "2024-08-31",
      paidDate: null,
      services: ["Trademark Search", "ARIPO Filing", "Prosecution"]
    },
    {
      id: 3,
      number: "INV-2024-003",
      client: "MedDevice Innovations",
      description: "Medical Device Registration - South Africa",
      amount: 12300.00,
      currency: "USD", 
      status: "Overdue",
      issueDate: "2024-06-15",
      dueDate: "2024-07-15",
      paidDate: null,
      services: ["Device Classification", "Technical File Review", "MCC Submission"]
    }
  ];

  const payments = [
    {
      id: 1,
      invoiceNumber: "INV-2024-001",
      amount: 15750.00,
      currency: "USD",
      method: "Bank Transfer",
      date: "2024-07-28",
      reference: "TXN-789456123"
    },
    {
      id: 2,
      invoiceNumber: "INV-2024-004",
      amount: 9200.00,
      currency: "USD",
      method: "Credit Card",
      date: "2024-07-20",
      reference: "CC-456789012"
    }
  ];

  const trademarkPricing = {
    aripo: { base: 1500, perClass: 300 },
    madrid: { base: 2000, perClass: 400 },
    national: { base: 800, perClass: 200 }
  };

  const regulatoryPricing = {
    ecowas: 3500,
    ama: 4000,
    national: 2500,
    variation: 1500,
    renewal: 1000
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const calculateTrademarkCost = () => {
    if (!calculatorType.startsWith('trademark-')) return 0;
    const type = calculatorType.replace('trademark-', '') as keyof typeof trademarkPricing;
    const pricing = trademarkPricing[type];
    if (!pricing) return 0;
    
    const countryCost = selectedCountries.length * pricing.base;
    const classCost = selectedClasses.length * pricing.perClass * selectedCountries.length;
    return countryCost + classCost;
  };

  const calculateRegulatoryCost = () => {
    if (!calculatorType.startsWith('regulatory-')) return 0;
    const type = calculatorType.replace('regulatory-', '') as keyof typeof regulatoryPricing;
    const pricing = regulatoryPricing[type];
    if (!pricing) return 0;
    
    return selectedCountries.length * pricing;
  };

  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const paidRevenue = invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingRevenue = invoices.filter(inv => inv.status === 'Pending').reduce((sum, inv) => sum + inv.amount, 0);
  const overdueRevenue = invoices.filter(inv => inv.status === 'Overdue').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <CreditCard className="h-6 w-6 mr-2 text-primary" />
            Billing & Invoice Center
          </h2>
          <p className="text-muted-foreground">Manage invoicing and payment tracking</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Generate Invoice
        </Button>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">${paidRevenue.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Paid</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">${pendingRevenue.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-2xl font-bold">${overdueRevenue.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Overdue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="invoices" className="space-y-6">
        <TabsList>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payments">Payment Tracking</TabsTrigger>
          <TabsTrigger value="calculator">Cost Calculator</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-4">
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <Card key={invoice.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-lg">{invoice.number}</h3>
                        <Badge className={getStatusColor(invoice.status)}>
                          {invoice.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{invoice.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Client:</span>
                          <p className="text-muted-foreground">{invoice.client}</p>
                        </div>
                        <div>
                          <span className="font-medium">Amount:</span>
                          <p className="text-muted-foreground">${invoice.amount.toLocaleString()} {invoice.currency}</p>
                        </div>
                        <div>
                          <span className="font-medium">Issue Date:</span>
                          <p className="text-muted-foreground">{invoice.issueDate}</p>
                        </div>
                        <div>
                          <span className="font-medium">Due Date:</span>
                          <p className="text-muted-foreground">{invoice.dueDate}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="font-medium text-sm">Services:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {invoice.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {payments.map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <h4 className="font-semibold">{payment.invoiceNumber}</h4>
                        <Badge variant="outline">{payment.method}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Reference: {payment.reference} • Date: {payment.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${payment.amount.toLocaleString()} {payment.currency}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calculator" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2" />
                Service Cost Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Service Type</Label>
                <Select value={calculatorType} onValueChange={setCalculatorType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trademark-aripo">Trademark - ARIPO</SelectItem>
                    <SelectItem value="trademark-madrid">Trademark - Madrid Protocol</SelectItem>
                    <SelectItem value="trademark-national">Trademark - National</SelectItem>
                    <SelectItem value="regulatory-ecowas">Regulatory - ECOWAS</SelectItem>
                    <SelectItem value="regulatory-ama">Regulatory - AMA</SelectItem>
                    <SelectItem value="regulatory-national">Regulatory - National</SelectItem>
                    <SelectItem value="regulatory-variation">Regulatory - Variation</SelectItem>
                    <SelectItem value="regulatory-renewal">Regulatory - Renewal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Number of Countries</Label>
                <Input 
                  type="number" 
                  placeholder="Enter number of countries"
                  onChange={(e) => {
                    const count = parseInt(e.target.value) || 0;
                    setSelectedCountries(Array(count).fill('country'));
                  }}
                />
              </div>

              {calculatorType.startsWith('trademark') && (
                <div>
                  <Label>Number of Classes</Label>
                  <Input 
                    type="number" 
                    placeholder="Enter number of classes"
                    onChange={(e) => {
                      const count = parseInt(e.target.value) || 0;
                      setSelectedClasses(Array(count).fill('class'));
                    }}
                  />
                </div>
              )}

              <Card className="bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Estimated Cost:</span>
                    <span className="text-2xl font-bold text-primary">
                      ${(calculatorType.startsWith('trademark') ? calculateTrademarkCost() : calculateRegulatoryCost()).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    * Estimate includes base fees and additional country/class charges
                  </p>
                </CardContent>
              </Card>

              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Create Quote
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BillingModule;