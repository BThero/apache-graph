import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import theme from 'misc/theme.json';
import { device } from 'misc/device';
import { IPrediction, getPredictionData, months } from 'misc/api';

const data = getPredictionData();

const renderTooltipText = (item: IPrediction): string => {
  return [`[${item.low}% - ${item.high}%]`].join('<br />');
};

const renderMonths = (): string[] => {
  const res: string[] = [];

  for (let i = 0; i < data.length; i += 1) {
    res.push(months[i % 12]);
  }

  return res;
};

const mainAxisOption = {
  type: 'category',
  splitLine: {
    show: false
  },
  axisTick: {
    show: false
  },
  data: renderMonths()
};

const crossAxisOption = {
  type: 'value',
  max: 100,
  min: 0
};

const InvestmentsTargets = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia(device.desktop).matches);

  useEffect(() => {
    window.matchMedia(device.desktop).addEventListener('change', (e) => setIsDesktop(e.matches));
  }, []);

  const option = {
    xAxis: isDesktop ? mainAxisOption : crossAxisOption,
    yAxis: !isDesktop ? mainAxisOption : crossAxisOption,
    tooltip: {
      trigger: 'item'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    series: [
      {
        type: 'bar',
        stack: 'total',
        silent: true,
        data: data.map((item) => ({
          value: item.low,
          tooltip: {
            formatter: () => {
              /* empty function */
            }
          }
        })),
        itemStyle: {
          color: 'transparent',
          borderColor: 'transparent'
        },
        barCategoryGap: '16px'
      },
      {
        type: 'bar',
        stack: 'total',
        data: data.map((item) => ({
          value: Math.max(0, Math.min(item.high, 50) - item.low),
          tooltip: {
            formatter: renderTooltipText(item)
          }
        })),
        itemStyle: {
          color: theme.color.red,
          shadowColor: `rgba(0, 0, 0, 0.4)`,
          shadowBlur: 5
        },
        barCategoryGap: '16px'
      },
      {
        type: 'bar',
        stack: 'total',
        data: data.map((item) => ({
          value: Math.max(0, item.high - Math.max(50, item.low)),
          tooltip: {
            formatter: renderTooltipText(item)
          }
        })),
        itemStyle: {
          color: theme.color.blue,
          shadowColor: `rgba(0, 0, 0, 0.4)`,
          shadowBlur: 5
        },
        barCategoryGap: '16px'
      }
    ]
  };

  return (
    <div>
      <ReactECharts
        option={option}
        opts={{
          height: isDesktop ? 600 : Math.max(600, data.length * 100)
        }}
      />
    </div>
  );
};

export default InvestmentsTargets;
