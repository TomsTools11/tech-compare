import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Product } from '../types';

interface MarketShareChartProps {
  data: Product[];
}

const COLORS = ['#0D91FD', '#5DB5FE', '#014379', '#021A2E', '#C2E3FE', '#64748b'];

const MarketShareChart: React.FC<MarketShareChartProps> = ({ data }) => {
  // Sort data by market share descending
  const sortedData = [...data].sort((a, b) => b.marketShare - a.marketShare);

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-brand-dark p-3 rounded-lg shadow-xl border border-brand-primary">
          <p className="text-white font-semibold text-sm">{payload[0].name}</p>
          <p className="text-brand-sky text-xs">
            Share: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px] w-full bg-white rounded-xl p-4 shadow-sm border border-slate-100">
      <h3 className="text-brand-primary font-bold text-lg mb-4">Market Share Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={sortedData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="marketShare"
          >
            {sortedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="middle" 
            align="right"
            layout="vertical"
            iconType="circle"
            wrapperStyle={{ fontSize: '12px', color: '#021A2E' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketShareChart;