import React, { useState, useEffect } from 'react';
import { device } from 'misc/device';
import ReactECharts from 'echarts-for-react';
import * as S from './ChartWrapper.styled';

interface IChartWrapperProps {
  option: any;
  data: unknown[];
}

const ChartWrapper = ({ option, data }: IChartWrapperProps): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia(device.desktop).matches);

  const calcHeight = (d: unknown[]): number => {
    return isDesktop ? 600 : Math.max(600, d.length * 100);
  };

  const height = calcHeight(data);

  useEffect(() => {
    window.matchMedia(device.desktop).addEventListener('change', (e) => setIsDesktop(e.matches));
  }, []);

  return (
    <S.Wrapper height={height}>
      <ReactECharts
        option={option}
        style={{
          height
        }}
      />
    </S.Wrapper>
  );
};

export default ChartWrapper;
