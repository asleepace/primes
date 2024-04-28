import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip, ResponsiveContainer } from "recharts"
import React from "react"

export type GraphProps = {
  data: any[]
  width?: number | string
  height?: number | string
  interval?: number
  dataKey?: string
}

export function Graph({ data, width, height, interval, dataKey }: GraphProps) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data}>
        <CartesianGrid stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="10 10" />
        <XAxis interval={interval} dataKey="name" />
        <YAxis interval={interval} />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  )
}