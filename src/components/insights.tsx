'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TableReports } from "@/components/tablereport";
import { TableReportsKecelakaan } from "@/components/tablereportkecelakaan";

export function Insights() {
  return (
    <div className="grid ">
      <Card>
        <CardHeader>
          <CardTitle>Pelanggaran</CardTitle>
          <CardDescription>Total pelanggaran yang telah dilakukan berdasarkan CCTV</CardDescription>
        </CardHeader>
        <CardContent>
          <TableReports/>
        </CardContent>
      </Card>
      <div className="mt-6">

      </div>
      <Card>
        <CardHeader>
          <CardTitle>Kecelakaan</CardTitle>
          <CardDescription>Total kecelakaan yang telah dilakukan berdasarkan CCTV</CardDescription>
        </CardHeader>
        <CardContent>
          <TableReportsKecelakaan/>
        </CardContent>
      </Card>
    </div>
  )
}

