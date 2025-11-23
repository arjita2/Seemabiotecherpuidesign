import { useState } from "react";
import { Plus, Filter, Download } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { StatusBadge, StatusType } from "../../components/common/StatusBadge";
import { StatsCard } from "../../components/common/StatsCard";
import { FlaskConical, CheckCircle, Clock, AlertTriangle } from "lucide-react";

export function MediaPreparation() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const stats = [
    { title: "Total Batches", value: "48", icon: FlaskConical, trend: { value: "+12% this month", isPositive: true } },
    { title: "Active Batches", value: "15", icon: CheckCircle },
    { title: "Pending Autoclave", value: "8", icon: Clock },
    { title: "Contaminated", value: "2", icon: AlertTriangle, trend: { value: "-5% vs last month", isPositive: true } },
  ];

  const autoclaveData = [
    { id: "AC-001", date: "2024-11-20", batch: "MB-2024-001", temperature: "121°C", pressure: "15 PSI", duration: "20 min", status: "completed" as StatusType },
    { id: "AC-002", date: "2024-11-21", batch: "MB-2024-002", temperature: "121°C", pressure: "15 PSI", duration: "20 min", status: "active" as StatusType },
    { id: "AC-003", date: "2024-11-22", batch: "MB-2024-003", temperature: "121°C", pressure: "15 PSI", duration: "20 min", status: "pending" as StatusType },
    { id: "AC-004", date: "2024-11-22", batch: "MB-2024-004", temperature: "121°C", pressure: "15 PSI", duration: "20 min", status: "contaminated" as StatusType },
  ];

  const mediaBatchData = [
    { id: "MB-2024-001", prepDate: "2024-11-18", mediaType: "MS Medium", quantity: "5L", pH: "5.8", preparedBy: "John Doe", status: "completed" as StatusType },
    { id: "MB-2024-002", prepDate: "2024-11-19", mediaType: "WPM Medium", quantity: "3L", pH: "5.7", preparedBy: "Jane Smith", status: "active" as StatusType },
    { id: "MB-2024-003", prepDate: "2024-11-20", mediaType: "MS Medium", quantity: "4L", pH: "5.8", preparedBy: "Mike Johnson", status: "pending" as StatusType },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Media Preparation</h1>
          <p className="text-[#717182] mt-1">Manage media batches and autoclave processes</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-[#4CAF50] hover:bg-[#45a049]">
                <Plus className="w-4 h-4" />
                Add Media Batch
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Media Batch</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label>Batch ID</Label>
                  <Input placeholder="MB-2024-XXX" />
                </div>
                <div className="space-y-2">
                  <Label>Preparation Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Media Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select media type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ms">MS Medium</SelectItem>
                      <SelectItem value="wpm">WPM Medium</SelectItem>
                      <SelectItem value="b5">B5 Medium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Quantity (L)</Label>
                  <Input type="number" placeholder="5.0" />
                </div>
                <div className="space-y-2">
                  <Label>pH Level</Label>
                  <Input type="number" placeholder="5.8" step="0.1" />
                </div>
                <div className="space-y-2">
                  <Label>Prepared By</Label>
                  <Input placeholder="Employee name" />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-[#4CAF50] hover:bg-[#45a049]" onClick={() => setIsAddModalOpen(false)}>
                  Save Batch
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Tabs for Different Registers */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
        <Tabs defaultValue="autoclave" className="space-y-4">
          <TabsList className="bg-[#F5F5F5]">
            <TabsTrigger value="autoclave">Autoclave Register</TabsTrigger>
            <TabsTrigger value="media">Media Batch Register</TabsTrigger>
          </TabsList>

          <TabsContent value="autoclave" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3>Autoclave Register</h3>
              <Input placeholder="Search autoclave records..." className="max-w-xs" />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#F5F5F5]">
                    <TableHead>Autoclave ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Batch No.</TableHead>
                    <TableHead>Temperature</TableHead>
                    <TableHead>Pressure</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {autoclaveData.map((row) => (
                    <TableRow key={row.id} className="hover:bg-[#F3FFF4] transition-colors">
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.batch}</TableCell>
                      <TableCell>{row.temperature}</TableCell>
                      <TableCell>{row.pressure}</TableCell>
                      <TableCell>{row.duration}</TableCell>
                      <TableCell>
                        <StatusBadge status={row.status} />
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="media" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3>Media Batch Register</h3>
              <Input placeholder="Search media batches..." className="max-w-xs" />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#F5F5F5]">
                    <TableHead>Batch ID</TableHead>
                    <TableHead>Prep Date</TableHead>
                    <TableHead>Media Type</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>pH</TableHead>
                    <TableHead>Prepared By</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mediaBatchData.map((row) => (
                    <TableRow key={row.id} className="hover:bg-[#F3FFF4] transition-colors">
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.prepDate}</TableCell>
                      <TableCell>{row.mediaType}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{row.pH}</TableCell>
                      <TableCell>{row.preparedBy}</TableCell>
                      <TableCell>
                        <StatusBadge status={row.status} />
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Summary Panel */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
        <h3 className="mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-[#F3FFF4] rounded-lg">
            <div>
              <p>Media batch MB-2024-002 autoclaved</p>
              <p className="text-sm text-[#717182]">2 hours ago</p>
            </div>
            <StatusBadge status="completed" />
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F3FFF4] rounded-lg">
            <div>
              <p>New batch MB-2024-003 prepared</p>
              <p className="text-sm text-[#717182]">4 hours ago</p>
            </div>
            <StatusBadge status="active" />
          </div>
        </div>
      </Card>
    </div>
  );
}
