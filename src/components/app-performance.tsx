'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import ReactPlayer from "react-player";

const data = [
  { name: "Jan", server: 400, client: 240 },
  { name: "Feb", server: 300, client: 139 },
  { name: "Mar", server: 200, client: 980 },
  { name: "Apr", server: 278, client: 390 },
  { name: "May", server: 189, client: 480 },
  { name: "Jun", server: 239, client: 380 },
]

export function AppPerformance() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>CCTV 1</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactPlayer url='https://www.youtube.com/watch?v=rnXIjl_Rzy4' playing={true} width={280}  />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>CCTV 2</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactPlayer url='https://www.youtube.com/watch?v=rnXIjl_Rzy4' playing={true} width={280}  />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>CCTV 3</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactPlayer url='https://www.youtube.com/watch?v=rnXIjl_Rzy4' playing={true} width={280}  />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>CCTV 4</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactPlayer url='https://www.youtube.com/watch?v=rnXIjl_Rzy4' playing={true} width={280}  />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>CCTV 5</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactPlayer url='https://www.youtube.com/watch?v=rnXIjl_Rzy4' playing={true} width={280}  />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>CCTV 6</CardTitle>
        </CardHeader>
        <CardContent>
          <ReactPlayer url='https://www.youtube.com/watch?v=rnXIjl_Rzy4' playing={true} width={280}  />
        </CardContent>
      </Card>
    </div>
  )
}

