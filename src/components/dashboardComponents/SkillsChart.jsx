"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts"

function SkillsChart({ data }) {
  const chart = useChart({
    data: [
        ...data
    ],
    series: [{ name: "score", color: "red.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data}>
      <PolarGrid
          stroke="none"
          style={{ fill: chart.color("red.solid"), fillOpacity: 0.1 }}
        />
        <PolarAngleAxis dataKey={chart.key("skill")} />
        {/* <PolarRadiusAxis /> */}
        {chart.series.map((item) => (
          <Radar
            dot={{ fillOpacity: 1 }}
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}

export default SkillsChart