import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserFeedback } from "@/components/user-feedback";
import { Insights } from "@/components/insights";
import { AppPerformance } from "@/components/app-performance";
import { UserStats } from "@/components/user-stats";
import { TableReportsKecelakaan } from "@/components/tablereportkecelakaan";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Safety Dashboard</h1>
      <Tabs defaultValue="user-stats" className="space-y-4">
        <TabsList>
          <TabsTrigger value="user-stats">Alert Summary</TabsTrigger>
          <TabsTrigger value="app-performance">CCTV</TabsTrigger>
          <TabsTrigger value="insights">Pelanggaran</TabsTrigger>
          <TabsTrigger value="kecelakaan">Kecelakaan</TabsTrigger>
        </TabsList>
        <TabsContent value="user-stats">
          <UserStats />
        </TabsContent>
        <TabsContent value="app-performance">
          <AppPerformance />
        </TabsContent>
        <TabsContent value="insights">
          <Insights />
        </TabsContent>
        <TabsContent value="user-feedback">
          <UserFeedback />
        </TabsContent>
        <TabsContent value="kecelakaan">
          <Card>
            <CardHeader>
              <CardTitle>Kecelakaan</CardTitle>
              <CardDescription>Total kecelakaan yang telah terjadi berdasarkan CCTV</CardDescription>
            </CardHeader>
            <CardContent>
              <TableReportsKecelakaan />/
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

