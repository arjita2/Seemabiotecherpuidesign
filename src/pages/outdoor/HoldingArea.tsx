import { useState } from "react";
import { Plus, Filter, Download, Package } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { StatusBadge, StatusType } from "../../components/common/StatusBadge";
import { StatsCard } from "../../components/common/StatsCard";
import { MapPin, CheckCircle, Clock, TruckIcon } from "lucide-react";

export function HoldingArea() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const stats = [
    { title: "Plants in Holding", value: "12,540", icon: MapPin },
    { title: "Ready for Dispatch", value: "8,200", icon: CheckCircle },
    { title: "Pending QC", value: "3,340", icon: Clock },
    { title: "Dispatched Today", value: "1,000", icon: TruckIcon, trend: { value: "+200 vs yesterday", isPositive: true } },
  ];

  const holdingData = [
    {
      id: "HA-2024-001",
      date: "2024-11-18",
      batchID: "SH-2024-001",
      crop: "Banana",
      variety: "Grand Naine",
      quantity: 1950,
      location: "Zone A-1",
      daysinHolding: 3,
      condition: "Excellent",
      dispatchDate: "2024-11-25",
      status: "active" as StatusType,
    },
    {
      id: "HA-2024-002",
      date: "2024-11-16",
      batchID: "SH-2024-002",
      crop: "Bamboo",
      variety: "Dendrocalamus",
      quantity: 1450,
      location: "Zone A-2",
      daysinHolding: 5,
      condition: "Good",
      dispatchDate: "2024-11-23",
      status: "completed" as StatusType,
    },
    {
      id: "HA-2024-003",
      date: "2024-11-20",
      batchID: "SH-2024-003",
      crop: "Teak",
      variety: "Tectona grandis",
      quantity: 2040,
      location: "Zone B-1",
      daysinHolding: 1,
      condition: "Excellent",
      dispatchDate: "2024-11-28",
      status: "pending" as StatusType,
    },
    {
      id: "HA-2024-004",
      date: "2024-11-19",
      batchID: "SH-2024-004",
      crop: "Ornamental",
      variety: "Anthurium",
      quantity: 1600,
      location: "Zone B-2",
      daysinHolding: 2,
      condition: "Good",
      dispatchDate: "2024-11-26",
      status: "active" as StatusType,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Holding Area</h1>
          <p className="text-[#717182] mt-1">Pre-dispatch storage and quality control</p>
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
                Add to Holding Area
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add Holding Area Record</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Batch ID</Label>
                  <Input placeholder="SH-2024-XXX" />
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
                  <Label>Quantity</Label>
                  <Input type="number" placeholder="1950" />
                </div>
                <div className="space-y-2">
                  <Label>Location Zone</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a1">Zone A-1</SelectItem>
                      <SelectItem value="a2">Zone A-2</SelectItem>
                      <SelectItem value="b1">Zone B-1</SelectItem>
                      <SelectItem value="b2">Zone B-2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Plant Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Expected Dispatch Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending QC</SelectItem>
                      <SelectItem value="active">Ready for Dispatch</SelectItem>
                      <SelectItem value="completed">Dispatched</SelectItem>
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

      {/* Zone Layout */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
        <h3 className="mb-4">Storage Zones Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 border-[#4CAF50]/20">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-[#4CAF50]" />
              <h4>Zone A-1</h4>
            </div>
            <p className="text-[#555555]">3,200 plants</p>
            <p className="text-sm text-[#717182] mt-1">65% capacity</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 border-[#4CAF50]/20">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-[#4CAF50]" />
              <h4>Zone A-2</h4>
            </div>
            <p className="text-[#555555]">2,840 plants</p>
            <p className="text-sm text-[#717182] mt-1">58% capacity</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 border-[#4CAF50]/20">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-[#4CAF50]" />
              <h4>Zone B-1</h4>
            </div>
            <p className="text-[#555555]">3,900 plants</p>
            <p className="text-sm text-[#717182] mt-1">78% capacity</p>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 border-[#4CAF50]/20">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-5 h-5 text-[#4CAF50]" />
              <h4>Zone B-2</h4>
            </div>
            <p className="text-[#555555]">2,600 plants</p>
            <p className="text-sm text-[#717182] mt-1">52% capacity</p>
          </Card>
        </div>
      </Card>

      {/* Main Table */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h3>Holding Area Register</h3>
          <Input placeholder="Search holding records..." className="max-w-xs" />
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F5F5F5]">
                <TableHead>ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Batch ID</TableHead>
                <TableHead>Crop</TableHead>
                <TableHead>Variety</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Days</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>Dispatch Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holdingData.map((row) => (
                <TableRow key={row.id} className="hover:bg-[#F3FFF4] transition-colors">
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.batchID}</TableCell>
                  <TableCell>{row.crop}</TableCell>
                  <TableCell>{row.variety}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>{row.daysinHolding}</TableCell>
                  <TableCell>
                    <span className={row.condition === "Excellent" ? "text-[#4CAF50]" : "text-[#555555]"}>
                      {row.condition}
                    </span>
                  </TableCell>
                  <TableCell>{row.dispatchDate}</TableCell>
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

      {/* Dispatch Schedule */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-border/50">
        <h3 className="mb-4">Upcoming Dispatches</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-[#F3FFF4] rounded-lg">
            <div>
              <p>Bamboo - Zone A-2</p>
              <p className="text-sm text-[#717182]">1,450 plants</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Nov 23, 2024</p>
              <StatusBadge status="completed" />
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F3FFF4] rounded-lg">
            <div>
              <p>Banana - Zone A-1</p>
              <p className="text-sm text-[#717182]">1,950 plants</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Nov 25, 2024</p>
              <StatusBadge status="active" />
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F3FFF4] rounded-lg">
            <div>
              <p>Ornamental - Zone B-2</p>
              <p className="text-sm text-[#717182]">1,600 plants</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Nov 26, 2024</p>
              <StatusBadge status="active" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
