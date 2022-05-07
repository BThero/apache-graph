import React, { useState, useEffect } from 'react';
import theme from 'misc/theme.json';
import { device } from 'misc/device';
import { IPrediction, getPredictionData, months, capitalize } from 'misc/api';
import ChartWrapper from 'components/ChartWrapper';
import HomeLink from 'components/HomeLink';

import * as S from './PredictedInvestments.styled';

const data = getPredictionData();

const renderTooltipText = (item: IPrediction): string => {
  return [`[${item.low}% - ${item.high}%]`].join('<br />');
};

const renderMonths = (): string[] => {
  const res: string[] = [];

  for (let i = 0; i < data.length; i += 1) {
    res.push(capitalize(months[i % 12].slice(0, 3)));
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
  min: 0,
  axisLabel: {
    formatter: `{value}%`
  },
  offset: 50
};

const axisOptions = (isDesktop: boolean): { xAxis: unknown; yAxis: unknown } => {
  if (isDesktop) {
    return {
      xAxis: mainAxisOption,
      yAxis: crossAxisOption
    };
  }

  return {
    yAxis: { ...mainAxisOption, inverse: true },
    xAxis: crossAxisOption
  };
};

const InvestmentsTargets = (): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia(device.desktop).matches);

  useEffect(() => {
    window.matchMedia(device.desktop).addEventListener('change', (e) => setIsDesktop(e.matches));
  }, []);

  const option = {
    ...axisOptions(isDesktop),
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'bar',
        stack: 'total',
        silent: true,
        data: data.map((item) => ({
          value: item.low
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
        animation: false,
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
    <S.Wrapper>
      <HomeLink />
      <ChartWrapper option={option} data={data} />
    </S.Wrapper>
  );
};

export default InvestmentsTargets;
