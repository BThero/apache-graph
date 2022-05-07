import React, { useState, useEffect } from 'react';
import theme from 'misc/theme.json';
import { device } from 'misc/device';
import { IInvestment, getInvestmentData } from 'misc/api';
import ChartWrapper from 'components/ChartWrapper';
import HomeLink from 'components/HomeLink';
import * as S from './InvestmentsTargets.styled';

const data = getInvestmentData();

const renderTooltipText = (item: IInvestment): string => {
  return [`Investment ID: ${item.id}`, `Company: ${item.company}`, `Profit: ${item.profit}€`].join(
    '<br />'
  );
};

const renderLabelPosition = (isDesktop: boolean, value: number): string => {
  if (isDesktop) {
    return value > 0 ? 'top' : 'bottom';
  }

  return value > 0 ? 'right' : 'left';
};

const mainAxisOption = {
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
};

const crossAxisOption = {
  type: 'value',
  axisLabel: {
    formatter: `{value}€`
  }
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
    <S.Wrapper>
      <HomeLink />
      <ChartWrapper option={option} data={data} />
    </S.Wrapper>
  );
};

export default InvestmentsTargets;
