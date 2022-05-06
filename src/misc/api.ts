export interface IInvestment {
  profit: number;
  company: string;
  id: number;
}

export const getInvestmentData = (): IInvestment[] => {
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

  return data;
};

export interface IPrediction {
  low: number;
  high: number;
}

export const getPredictionData = (): IPrediction[] => {
  const data: IPrediction[] = [];

  for (let i = 0; i < 8; i += 1) {
    let low = Math.round(Math.random() * 100);
    let high = Math.round(Math.random() * 100);

    if (low > high) {
      [low, high] = [high, low];
    }

    data.push({ low, high });
  }

  return data;
};

export const months: Array<string> = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];
