import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Product, Category } from '../types';

interface MarketShareChartProps {
  data: Product[];
}

const COLORS = ['#0D91FD', '#5DB5FE', '#014379', '#021A2E', '#C2E3FE', '#64748b'];

const CategoryDistributionChart: React.FC<MarketShareChartProps> = ({ data }) => {
  // Aggregate data by category count
  const distribution = React.useMemo(() => {
    const counts: Record<string, number> = {};
    data.forEach(p => {
        counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return Object.entries(counts)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value); // Sort highest first
  }, [data]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-brand-dark p-3 rounded-lg shadow-xl border border-brand-primary">
          <p className="text-white font-semibold text-sm">{label}</p>
          <p className="text-brand-sky text-xs">
            Tools: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px] w-full bg-white rounded-xl p-4 shadow-sm border border-slate-100">
      <h3 className="text-brand-primary font-bold text-lg mb-4">Software Directory Stats</h3>
      <p className="text-xs text-gray-500 mb-2">Number of tools available in this category</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
            data={distribution}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
            <XAxis type="number" hide />
            <YAxis 
                dataKey="name" 
                type="category" 
                width={100}
                tick={{fontSize: 11, fill: '#021A2E'}}
                interval={0}
            />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                {distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryDistributionChart;