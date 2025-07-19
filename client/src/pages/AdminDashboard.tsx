import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { useAdmin } from '@/hooks/useAdmin';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { LogOut, Save, Globe, FileText, MessageSquare, HelpCircle, Users, Mail, Phone, Calendar } from 'lucide-react';

const contentUpdateSchema = z.object({
  value: z.string().min(1, 'Content cannot be empty'),
});

type ContentUpdateData = z.infer<typeof contentUpdateSchema>;

interface SiteContent {
  id: number;
  key: string;
  value: string;
  contentType: string;
  page: string;
  section: string;
  label: string;
  description: string | null;
  updatedAt: string;
}

interface DemoRequest {
  id: number;
  name: string;
  course: string;
  role: string;
  email: string;
  phone: string;
  comments: string | null;
  createdAt: string;
}

function AdminDashboardContent() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { user, logout, getAuthHeaders, isAuthenticated } = useAdmin();
  const [selectedContent, setSelectedContent] = useState<SiteContent | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [activeMainTab, setActiveMainTab] = useState('content');

  const form = useForm<ContentUpdateData>({
    resolver: zodResolver(contentUpdateSchema),
    defaultValues: {
      value: '',
    },
  });

  // Fetch all content - only when authenticated
  const { data: allContent, isLoading } = useQuery({
    queryKey: ['/api/admin/content'],
    queryFn: async () => {
      console.log('Fetching content with auth headers:', getAuthHeaders());
      const response = await apiRequest('GET', '/api/admin/content', undefined, {
        headers: getAuthHeaders(),
      });
      return response as SiteContent[];
    },
    enabled: isAuthenticated, // Only run when authenticated
  });

  // Fetch all demo requests - only when authenticated and on demo requests tab
  const { data: demoRequests, isLoading: demoRequestsLoading } = useQuery({
    queryKey: ['/api/admin/demo-requests'],
    queryFn: async () => {
      const response = await apiRequest('GET', '/api/admin/demo-requests', undefined, {
        headers: getAuthHeaders(),
      });
      return response as DemoRequest[];
    },
    enabled: isAuthenticated && activeMainTab === 'demo-requests',
  });

  // Update content mutation
  const updateContentMutation = useMutation({
    mutationFn: async ({ key, data }: { key: string; data: ContentUpdateData }) => {
      return apiRequest('PUT', `/api/admin/content/${key}`, data, {
        headers: getAuthHeaders(),
      });
    },
    onSuccess: () => {
      toast({
        title: 'Content Updated!',
        description: 'Your changes are now live on the website.',
      });
      queryClient.invalidateQueries({ queryKey: ['/api/admin/content'] });
      setSelectedContent(null);
    },
    onError: (error: any) => {
      toast({
        title: 'Update Failed',
        description: error.message || 'Failed to update content. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleLogout = async () => {
    await logout();
    setLocation('/admin/login');
  };

  const handleEditContent = (content: SiteContent) => {
    setSelectedContent(content);
    form.setValue('value', content.value);
  };

  const onSubmit = (data: ContentUpdateData) => {
    if (!selectedContent) return;
    updateContentMutation.mutate({ key: selectedContent.key, data });
  };

  const groupContentByPage = (content: SiteContent[]) => {
    return content.reduce((acc, item) => {
      if (!acc[item.page]) {
        acc[item.page] = [];
      }
      acc[item.page].push(item);
      return acc;
    }, {} as Record<string, SiteContent[]>);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading content...</p>
        </div>
      </div>
    );
  }

  const groupedContent = allContent ? groupContentByPage(allContent) : {};

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">4Under Admin Panel</h1>
              <p className="text-sm text-slate-600">Manage your website content</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-600">
                Welcome, {user?.email}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Navigation Tabs */}
        <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="content" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Website Content</span>
            </TabsTrigger>
            <TabsTrigger value="demo-requests" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Demo Requests</span>
            </TabsTrigger>
          </TabsList>

          {/* Content Management Tab */}
          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Content List */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="h-5 w-5" />
                      <span>Website Content</span>
                    </CardTitle>
                  </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="home" className="flex items-center space-x-1">
                      <span>Home</span>
                    </TabsTrigger>
                    <TabsTrigger value="contact" className="flex items-center space-x-1">
                      <span>Contact</span>
                    </TabsTrigger>
                    <TabsTrigger value="demo" className="flex items-center space-x-1">
                      <span>Demo</span>
                    </TabsTrigger>
                    <TabsTrigger value="features" className="flex items-center space-x-1">
                      <span>Features</span>
                    </TabsTrigger>
                    <TabsTrigger value="usecases" className="flex items-center space-x-1">
                      <span>Use Cases</span>
                    </TabsTrigger>
                  </TabsList>

                  {Object.entries(groupedContent).map(([page, contents]) => (
                    <TabsContent key={page} value={page} className="mt-6">
                      <div className="space-y-4">
                        {contents.map((content) => (
                          <div 
                            key={content.key} 
                            className="border border-slate-200 rounded-lg p-4 hover:border-golf-green transition-colors cursor-pointer"
                            onClick={() => handleEditContent(content)}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h3 className="font-medium text-slate-900 mb-1">
                                  {content.label}
                                </h3>
                                {content.description && (
                                  <p className="text-sm text-slate-600 mb-2">
                                    {content.description}
                                  </p>
                                )}
                                <p className="text-sm text-slate-800 line-clamp-2">
                                  {content.value}
                                </p>
                                <p className="text-xs text-slate-500 mt-2">
                                  Last updated: {new Date(content.updatedAt).toLocaleDateString()}
                                </p>
                              </div>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Edit Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedContent ? (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div>
                        <h3 className="font-medium text-slate-900 mb-2">
                          {selectedContent.label}
                        </h3>
                        {selectedContent.description && (
                          <p className="text-sm text-slate-600 mb-4">
                            {selectedContent.description}
                          </p>
                        )}
                      </div>

                      <FormField
                        control={form.control}
                        name="value"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                              {selectedContent.contentType === 'text' && selectedContent.value.length > 100 ? (
                                <Textarea 
                                  {...field} 
                                  placeholder="Enter your content here..."
                                  rows={6}
                                  className="resize-none"
                                />
                              ) : (
                                <Input 
                                  {...field} 
                                  placeholder="Enter your content here..."
                                />
                              )}
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex space-x-2">
                        <Button 
                          type="submit" 
                          disabled={updateContentMutation.isPending}
                          className="flex-1 flex items-center space-x-2"
                        >
                          <Save className="h-4 w-4" />
                          <span>
                            {updateContentMutation.isPending ? 'Saving...' : 'Save Changes'}
                          </span>
                        </Button>
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={() => setSelectedContent(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </Form>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">No content selected</p>
                    <p className="text-sm text-slate-500">
                      Click on any content item to edit it
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>

      {/* Demo Requests Tab */}
      <TabsContent value="demo-requests">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Free Trial Requests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {demoRequestsLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
                <p className="text-slate-600">Loading demo requests...</p>
              </div>
            ) : demoRequests && demoRequests.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Course/Facility</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Comments</TableHead>
                      <TableHead>Submitted</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {demoRequests.map((request) => (
                      <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.name}</TableCell>
                        <TableCell>{request.course}</TableCell>
                        <TableCell>{request.role}</TableCell>
                        <TableCell>
                          <a 
                            href={`mailto:${request.email}`} 
                            className="text-emerald-600 hover:text-emerald-700 flex items-center space-x-1"
                          >
                            <Mail className="h-4 w-4" />
                            <span>{request.email}</span>
                          </a>
                        </TableCell>
                        <TableCell>
                          <a 
                            href={`tel:${request.phone}`} 
                            className="text-emerald-600 hover:text-emerald-700 flex items-center space-x-1"
                          >
                            <Phone className="h-4 w-4" />
                            <span>{request.phone}</span>
                          </a>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          {request.comments ? (
                            <span className="block overflow-hidden text-ellipsis" title={request.comments}>
                              {request.comments.length > 50 ? `${request.comments.substring(0, 50)}...` : request.comments}
                            </span>
                          ) : (
                            <span className="text-slate-400 italic">No comments</span>
                          )}
                        </TableCell>
                        <TableCell className="text-slate-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">
                              {new Date(request.createdAt).toLocaleDateString()}<br/>
                              {new Date(request.createdAt).toLocaleTimeString()}
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-2">No demo requests yet</h3>
                <p className="text-slate-600">
                  Free trial requests will appear here when customers submit the form.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { isAuthenticated, isLoading: authLoading } = useAdmin();
  const [, setLocation] = useLocation();

  // Show loading while authentication is being checked
  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-600">Loading admin panel...</div>
      </div>
    );
  }

  // Show login prompt if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Access Denied</h2>
          <p className="text-slate-600 mb-6">You need to be logged in to access the admin panel.</p>
          <button 
            onClick={() => setLocation('/admin/login')}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return <AdminDashboardContent />;
}