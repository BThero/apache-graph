import React, { useState, useEffect } from 'react';
import { device } from 'misc/device';

interface IChartWrapperProps {
  Chart: React.FC<{ isDesktop: boolean; height: number }>;
  getData: () => unknown[];
}

const ChartWrapper = ({ Chart, getData }: IChartWrapperProps): JSX.Element => {
  const [isDesktop, setIsDesktop] = useState(window.matchMedia(device.desktop).matches);

  const calcHeight = (d: unknown[]): number => {
    return isDesktop ? 600 : Math.max(600, d.length * 100);
  };

  const data = getData();
  const height = calcHeight(data);

  useEffect(() => {
    window.matchMedia(device.desktop).addEventListener('change', (e) => setIsDesktop(e.matches));
  }, []);

  return (
    <div style={{ height: `${height}px`, width: '100%' }}>
      <Chart isDesktop={isDesktop} height={height} />;
    </div>
  );
};

export default ChartWrapper;
