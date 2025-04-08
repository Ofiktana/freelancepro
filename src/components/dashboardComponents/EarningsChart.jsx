"use client";

import { Chart, useChart } from "@chakra-ui/charts";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const EarningsChart = ({ data }) => {
  const chart = useChart({
    data: [...data],
    series: [{ name: "income", color: "purple.solid" }],
  });

  return (
    <Chart.Root maxH="sm" chart={chart} ml="-8" bg='transparent'>
      <AreaChart
        accessibilityLayer
        data={chart.data}
        margin={{ top: 0, right: 0 }}
      >
        <XAxis
          dataKey={chart.key("month")}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
          stroke={chart.color("border")}
        />
        <YAxis
          stroke={chart.color("border")}
          tickFormatter={(value) => "$" + value / 1000 + "K"}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        {chart.series.map((item) => (
          <Area
            type="natural"
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  );
};

export default EarningsChart;
