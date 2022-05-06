import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import theme from 'misc/theme.json';
import { device } from 'misc/device';

interface IInvestment {
  profit: number;
  company: string;
  id: number;
}

const renderTooltipText = (item: IInvestment): string => {
  return [`Investment ID: ${item.id}`, `Company: ${item.company}`, `Profit: ${item.profit}`].join(
    '<br />'
  );
};

const renderLabelPosition = (isDesktop: boolean, value: number): string => {
  if (isDesktop) {
    return value > 0 ? 'top' : 'bottom';
  }

  return value > 0 ? 'right' : 'left';
};

const data: IInvestment[] = [
  {
    profit: 3000,
    company: 'Company A',
    id: 1
  },
  {
    profit: -2000,
    company: 'Company B',
    id: 2
  },
  {
    profit: 1500,
    company: 'Company C',
    id: 3
  },
  {
    profit: 4000,
    company: 'Company D',
    id: 4
  },
  {
    profit: -6000,
    company: 'Company E',
    id: 5
  },
  {
    profit: 2000,
    company: 'Company F',
    id: 6
  },
  {
    profit: -1300,
    company: 'Company G',
    id: 6
  }
];

const InvestmentsTargets = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia(device.desktop).matches);

  useEffect(() => {
    window.matchMedia(device.desktop).addEventListener('change', (e) => setIsDesktop(e.matches));
  }, []);

  const option = {
    xAxis: isDesktop
      ? {
          type: 'category',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }
      : { type: 'value' },
    yAxis: !isDesktop
      ? {
          type: 'category',
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }
      : { type: 'value' },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'bar',
        data: data.map((item) => ({
          value: item.profit,
          label: {
            formatter: ({ data: profit }: { data: { value: number } }) => {
              return Math.abs(profit.value);
            },
            show: true,
            position: renderLabelPosition(isDesktop, item.profit)
          },
          tooltip: {
            formatter: renderTooltipText(item)
          }
        })),
        itemStyle: {
          color: ({ data: profit }: { data: { value: number } }) => {
            return profit.value < 0 ? theme.color.red : theme.color.blue;
          },
          shadowColor: `rgba(0, 0, 0, 0.4)`,
          shadowBlur: 5
        },
        barCategoryGap: '16px'
      }
    ]
  };

  return (
    <div>
      <p>Investments Targets</p>
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
