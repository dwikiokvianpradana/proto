'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReactPlayer from "react-player";


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

