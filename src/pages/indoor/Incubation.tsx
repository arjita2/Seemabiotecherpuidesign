import { useState } from "react";
import { Plus, Filter, Download, Thermometer } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { StatusBadge, StatusType } from "../../components/common/StatusBadge";
import { StatsCard } from "../../components/common/StatsCard";
import { Flame, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export function Incubation() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const stats = [
    { title: "Total Incubating", value: "89", icon: Flame, trend: { value: "+15 new entries", isPositive: true } },
    { title: "Optimal Conditions", value: "76", icon: CheckCircle },
    { title: "Monitoring Required", value: "11", icon: Clock },
    { title: "Issues Detected", value: "2", icon: AlertTriangle },
  ];

  const incubationData = [
    {
      id: "INC-2024-001",
      batchID: "SC-2024-001",
      startDate: "2024-11-15",
      duration: "14 days",
      temperature: "25°C",
      light: "16h/day",
      humidity: "60%",
      chamber: "IC-01",
      observations: "Normal growth",
      status: "active" as StatusType,
    },
    {
      id: "INC-2024-002",
      batchID: "SC-2024-002",
      startDate: "2024-11-16",
      duration: "14 days",
      temperature: "25°C",
      light: "16h/day",
      humidity: "60%",
      chamber: "IC-02",
      observations: "Excellent response",
      status: "completed" as StatusType,
    },
    {
      id: "INC-2024-003",
      batchID: "SC-2024-003",
      startDate: "2024-11-18",
      duration: "14 days",
      temperature: "25°C",
      light: "16h/day",
      humidity: "58%",
      chamber: "IC-01",
      observations: "Monitoring required",
      status: "pending" as StatusType,
    },
    {
      id: "INC-2024-004",
      batchID: "SC-2024-004",
      startDate: "2024-11-19",
      duration: "7 days",
      temperature: "26°C",
      light: "16h/day",
      humidity: "65%",
      chamber: "IC-03",
      observations: "Temperature fluctuation",
      status: "contaminated" as StatusType,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Incubation</h1>
          <p className="text-[#717182] mt-1">Monitor environmental conditions and growth progress</p>
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
                Add Incubation Record
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add Incubation Record</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label>Incubation ID</Label>
                  <Input placeholder="INC-2024-XXX" />
                </div>
                <div className="space-y-2">
                  <Label>Batch ID</Label>
                  <Input placeholder="SC-2024-XXX" />
                </div>
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Input placeholder="14 days" />
                </div>
                <div className="space-y-2">
                  <Label>Temperature</Label>
                  <Input placeholder="25°C" />
                </div>
                <div className="space-y-2">
                  <Label>Light Cycle</Label>
                  <Input placeholder="16h/day" />
                </div>
                <div className="space-y-2">
                  <Label>Humidity</Label>
                  <Input placeholder="60%" />
                </div>
                <div className="space-y-2">
                  <Label>Incubation Chamber</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select chamber" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ic01">IC-01</SelectItem>
                      <SelectItem value="ic02">IC-02</SelectItem>
                      <SelectItem value="ic03">IC-03</SelectItem>
                      <SelectItem value="ic04">IC-04</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label>Observations</Label>
                  <Input placeholder="Enter observations" />
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

      {/* Environmental Monitoring */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-white to-[#F3FFF4] border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <Thermometer className="w-5 h-5 text-[#4CAF50]" />
            <h4>Temperature</h4>
          </div>
          <p className="text-[#555555]">25.2°C</p>
          <p className="text-sm text-[#717182] mt-1">Optimal range: 24-26°C</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-white to-[#F3FFF4] border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <Flame className="w-5 h-5 text-[#4CAF50]" />
            <h4>Light Intensity</h4>
          </div>
          <p className="text-[#555555]">3000 lux</p>
          <p className="text-sm text-[#717182] mt-1">16h photoperiod</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-white to-[#F3FFF4] border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <Flame className="w-5 h-5 text-[#4CAF50]" />
            <h4>Humidity</h4>
          </div>
          <p className="text-[#555555]">62%</p>
          <p className="text-sm text-[#717182] mt-1">Target: 60-65%</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-white to-[#F3FFF4] border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-[#4CAF50]" />
            <h4>Chamber Status</h4>
          </div>
          <p className="text-[#555555]">All Active</p>
          <p className="text-sm text-[#717182] mt-1">4/4 chambers operational</p>
        </Card>
      </div>

      {/* Main Table */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h3>Incubation Register</h3>
          <Input placeholder="Search incubation records..." className="max-w-xs" />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F5F5F5]">
                <TableHead>Inc. ID</TableHead>
                <TableHead>Batch ID</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Temp.</TableHead>
                <TableHead>Light</TableHead>
                <TableHead>Humidity</TableHead>
                <TableHead>Chamber</TableHead>
                <TableHead>Observations</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {incubationData.map((row) => (
                <TableRow key={row.id} className="hover:bg-[#F3FFF4] transition-colors">
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.batchID}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.temperature}</TableCell>
                  <TableCell>{row.light}</TableCell>
                  <TableCell>{row.humidity}</TableCell>
                  <TableCell>{row.chamber}</TableCell>
                  <TableCell>{row.observations}</TableCell>
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
