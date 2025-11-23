import { useState } from "react";
import { Plus, Filter, Download } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { StatusBadge, StatusType } from "../../components/common/StatusBadge";
import { StatsCard } from "../../components/common/StatsCard";
import { TreePine, CheckCircle, Clock, AlertCircle } from "lucide-react";

export function SecondaryHardening() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const stats = [
    { title: "Active Batches", value: "24", icon: TreePine, trend: { value: "+4 this week", isPositive: true } },
    { title: "Ready for Dispatch", value: "6,120", icon: CheckCircle },
    { title: "In Progress", value: "12", icon: Clock },
    { title: "Monitoring Required", value: "3", icon: AlertCircle },
  ];

  const secondaryData = [
    {
      id: "SH-2024-001",
      date: "2024-11-10",
      batchName: "Banana-GN-Oct",
      crop: "Banana",
      tunnel: "SH-T1",
      bed: "SB1",
      row: "SR1-SR4",
      cavity: "72",
      plants: 2000,
      workers: 3,
      waitingPeriod: "21 days",
      survivability: "96%",
      status: "completed" as StatusType,
    },
    {
      id: "SH-2024-002",
      date: "2024-11-12",
      batchName: "Bamboo-DC-Oct",
      crop: "Bamboo",
      tunnel: "SH-T2",
      bed: "SB2",
      row: "SR1-SR3",
      cavity: "72",
      plants: 1500,
      workers: 2,
      waitingPeriod: "28 days",
      survivability: "94%",
      status: "active" as StatusType,
    },
    {
      id: "SH-2024-003",
      date: "2024-11-15",
      batchName: "Teak-TG-Oct",
      crop: "Teak",
      tunnel: "SH-T1",
      bed: "SB3",
      row: "SR1-SR5",
      cavity: "50",
      plants: 2200,
      workers: 3,
      waitingPeriod: "35 days",
      survivability: "92%",
      status: "active" as StatusType,
    },
    {
      id: "SH-2024-004",
      date: "2024-11-18",
      batchName: "Ornamental-A-Oct",
      crop: "Ornamental",
      tunnel: "SH-T3",
      bed: "SB1",
      row: "SR1-SR4",
      cavity: "40",
      plants: 1800,
      workers: 3,
      waitingPeriod: "21 days",
      survivability: "89%",
      status: "pending" as StatusType,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Secondary Hardening</h1>
          <p className="text-[#717182] mt-1">Final acclimatization before dispatch to field</p>
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
                Add Secondary Hardening
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add Secondary Hardening Record</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Batch Name</Label>
                  <Input placeholder="e.g., Banana-GN-Oct" />
                </div>
                <div className="space-y-2">
                  <Label>Crop Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="bamboo">Bamboo</SelectItem>
                      <SelectItem value="teak">Teak</SelectItem>
                      <SelectItem value="ornamental">Ornamental</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Tunnel</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tunnel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sht1">SH-T1</SelectItem>
                      <SelectItem value="sht2">SH-T2</SelectItem>
                      <SelectItem value="sht3">SH-T3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Bed</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select bed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sb1">SB1</SelectItem>
                      <SelectItem value="sb2">SB2</SelectItem>
                      <SelectItem value="sb3">SB3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Row</Label>
                  <Input placeholder="e.g., SR1-SR4" />
                </div>
                <div className="space-y-2">
                  <Label>Cavity Size</Label>
                  <Input type="number" placeholder="72" />
                </div>
                <div className="space-y-2">
                  <Label>Number of Plants</Label>
                  <Input type="number" placeholder="2000" />
                </div>
                <div className="space-y-2">
                  <Label>Number of Workers</Label>
                  <Input type="number" placeholder="3" />
                </div>
                <div className="space-y-2">
                  <Label>Waiting Period</Label>
                  <Input placeholder="e.g., 21 days" />
                </div>
                <div className="space-y-2">
                  <Label>Survivability (%)</Label>
                  <Input type="number" placeholder="96" />
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
                  Save Record
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

      {/* Survivability Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-white to-[#F3FFF4] border-border/50">
          <h4 className="mb-2">Avg Survivability</h4>
          <p className="text-[#555555]">93.8%</p>
          <p className="text-sm text-[#4CAF50] mt-1">Above target (90%)</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-white to-[#F3FFF4] border-border/50">
          <h4 className="mb-2">Best Performer</h4>
          <p className="text-[#555555]">Banana</p>
          <p className="text-sm text-[#4CAF50] mt-1">96% avg survival</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-white to-[#F3FFF4] border-border/50">
          <h4 className="mb-2">Completion Rate</h4>
          <p className="text-[#555555]">87%</p>
          <p className="text-sm text-[#717182] mt-1">On schedule</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-white to-[#F3FFF4] border-border/50">
          <h4 className="mb-2">Avg Duration</h4>
          <p className="text-[#555555]">26 days</p>
          <p className="text-sm text-[#717182] mt-1">Per batch</p>
        </Card>
      </div>

      {/* Main Table */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h3>Secondary Hardening Register</h3>
          <Input placeholder="Search batches..." className="max-w-xs" />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F5F5F5]">
                <TableHead>ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Batch Name</TableHead>
                <TableHead>Crop</TableHead>
                <TableHead>Tunnel</TableHead>
                <TableHead>Bed</TableHead>
                <TableHead>Row</TableHead>
                <TableHead>Cavity</TableHead>
                <TableHead>Plants</TableHead>
                <TableHead>Workers</TableHead>
                <TableHead>Waiting</TableHead>
                <TableHead>Survival %</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {secondaryData.map((row) => (
                <TableRow key={row.id} className="hover:bg-[#F3FFF4] transition-colors">
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.batchName}</TableCell>
                  <TableCell>{row.crop}</TableCell>
                  <TableCell>{row.tunnel}</TableCell>
                  <TableCell>{row.bed}</TableCell>
                  <TableCell>{row.row}</TableCell>
                  <TableCell>{row.cavity}</TableCell>
                  <TableCell>{row.plants}</TableCell>
                  <TableCell>{row.workers}</TableCell>
                  <TableCell>{row.waitingPeriod}</TableCell>
                  <TableCell>
                    <span className={parseInt(row.survivability) >= 90 ? "text-[#4CAF50]" : "text-[#FFC107]"}>
                      {row.survivability}
                    </span>
                  </TableCell>
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
      </Card>
    </div>
  );
}
