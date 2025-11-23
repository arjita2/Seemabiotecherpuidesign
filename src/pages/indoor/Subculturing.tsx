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
import { Microscope, Layers, Timer, AlertTriangle } from "lucide-react";

export function Subculturing() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const stats = [
    { title: "Total Cultures", value: "156", icon: Microscope, trend: { value: "+8% this week", isPositive: true } },
    { title: "Active Subcultures", value: "42", icon: Layers },
    { title: "Awaiting Transfer", value: "12", icon: Timer },
    { title: "Contaminated", value: "3", icon: AlertTriangle },
  ];

  const subcultureData = [
    {
      id: "SC-2024-001",
      date: "2024-11-20",
      sourceID: "MB-2024-001",
      crop: "Banana",
      variety: "Grand Naine",
      stage: "Stage 1",
      explants: 25,
      mediaUsed: "MS Medium",
      technician: "Sarah Lee",
      status: "active" as StatusType,
    },
    {
      id: "SC-2024-002",
      date: "2024-11-21",
      sourceID: "MB-2024-002",
      crop: "Bamboo",
      variety: "Dendrocalamus",
      stage: "Stage 2",
      explants: 30,
      mediaUsed: "WPM Medium",
      technician: "Mike Chen",
      status: "completed" as StatusType,
    },
    {
      id: "SC-2024-003",
      date: "2024-11-22",
      sourceID: "MB-2024-003",
      crop: "Teak",
      variety: "Tectona grandis",
      stage: "Stage 1",
      explants: 20,
      mediaUsed: "MS Medium",
      technician: "Sarah Lee",
      status: "pending" as StatusType,
    },
    {
      id: "SC-2024-004",
      date: "2024-11-22",
      sourceID: "MB-2024-004",
      crop: "Ornamental",
      variety: "Anthurium",
      stage: "Stage 3",
      explants: 15,
      mediaUsed: "B5 Medium",
      technician: "John Doe",
      status: "contaminated" as StatusType,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Subculturing</h1>
          <p className="text-[#717182] mt-1">Track and manage plant tissue culture subculturing</p>
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
                Add Subculture
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Subculture Record</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label>Subculture ID</Label>
                  <Input placeholder="SC-2024-XXX" />
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Source ID</Label>
                  <Input placeholder="MB-2024-XXX" />
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
                  <Label>Variety</Label>
                  <Input placeholder="Enter variety" />
                </div>
                <div className="space-y-2">
                  <Label>Stage</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stage1">Stage 1</SelectItem>
                      <SelectItem value="stage2">Stage 2</SelectItem>
                      <SelectItem value="stage3">Stage 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Number of Explants</Label>
                  <Input type="number" placeholder="25" />
                </div>
                <div className="space-y-2">
                  <Label>Media Used</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select media" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ms">MS Medium</SelectItem>
                      <SelectItem value="wpm">WPM Medium</SelectItem>
                      <SelectItem value="b5">B5 Medium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Technician</Label>
                  <Input placeholder="Technician name" />
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

      {/* Main Table */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h3>Subculture Register</h3>
          <Input placeholder="Search subcultures..." className="max-w-xs" />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F5F5F5]">
                <TableHead>Subculture ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Source ID</TableHead>
                <TableHead>Crop</TableHead>
                <TableHead>Variety</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Explants</TableHead>
                <TableHead>Media</TableHead>
                <TableHead>Technician</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subcultureData.map((row) => (
                <TableRow key={row.id} className="hover:bg-[#F3FFF4] transition-colors">
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.sourceID}</TableCell>
                  <TableCell>{row.crop}</TableCell>
                  <TableCell>{row.variety}</TableCell>
                  <TableCell>{row.stage}</TableCell>
                  <TableCell>{row.explants}</TableCell>
                  <TableCell>{row.mediaUsed}</TableCell>
                  <TableCell>{row.technician}</TableCell>
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

      {/* Stage Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
          <h4 className="mb-2">Stage 1</h4>
          <p className="text-[#555555]">45 cultures</p>
          <p className="text-sm text-[#717182] mt-1">Initial establishment</p>
        </Card>
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
          <h4 className="mb-2">Stage 2</h4>
          <p className="text-[#555555]">68 cultures</p>
          <p className="text-sm text-[#717182] mt-1">Multiplication phase</p>
        </Card>
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
          <h4 className="mb-2">Stage 3</h4>
          <p className="text-[#555555]">43 cultures</p>
          <p className="text-sm text-[#717182] mt-1">Pre-hardening</p>
        </Card>
      </div>
    </div>
  );
}
