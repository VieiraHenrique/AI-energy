import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, Cell
} from 'recharts';
import { GraphKey } from '../types';

interface ExampleGraphProps {
  data: any[];
  keys?: GraphKey[];
  type?: 'area' | 'bar';
  title?: string;
}

export const ExampleGraph: React.FC<ExampleGraphProps> = ({ data, keys, type = 'area', title }) => {
  // Default configuration if no keys provided (backward compatibility)
  const graphKeys = keys || [
    { key: 'prediction', color: '#3b82f6', label: 'Prédiction' },
    { key: 'efficiency', color: '#10b981', label: 'Efficacité' }
  ];

  const renderAreaChart = () => (
    <AreaChart
      data={data}
      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
    >
      <defs>
        {graphKeys.map((k) => (
            <linearGradient key={`grad-${k.key}`} id={`color-${k.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={k.color} stopOpacity={0.6}/>
                <stop offset="95%" stopColor={k.color} stopOpacity={0}/>
            </linearGradient>
        ))}
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
      <XAxis 
        dataKey="name" 
        stroke="#94a3b8" 
        tick={{fontSize: 10}} 
        tickLine={false}
        axisLine={false}
      />
      <YAxis 
        stroke="#94a3b8" 
        tick={{fontSize: 10}} 
        tickLine={false}
        axisLine={false}
      />
      <Tooltip 
        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
        itemStyle={{ fontSize: '12px' }}
      />
      <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
      
      {graphKeys.map((k) => (
         <Area 
            key={k.key}
            type="monotone" 
            dataKey={k.key} 
            name={k.label}
            stroke={k.color} 
            strokeWidth={2}
            fillOpacity={1} 
            fill={`url(#color-${k.key})`} 
        />
      ))}
    </AreaChart>
  );

  const renderBarChart = () => (
    <BarChart
      data={data}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
      <XAxis 
        type="number"
        stroke="#94a3b8" 
        tick={{fontSize: 11}} 
        tickLine={false}
        axisLine={false}
      />
      <YAxis 
        dataKey="name" 
        type="category"
        stroke="#94a3b8" 
        tick={{fontSize: 11, width: 120}} 
        width={130}
        tickLine={false}
        axisLine={false}
      />
      <Tooltip 
        cursor={{fill: 'rgba(255,255,255,0.05)'}}
        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
      />
      <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color || '#3b82f6'} />
        ))}
      </Bar>
    </BarChart>
  );

  return (
    <div className="w-full h-[300px] md:h-[400px] bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm shadow-xl">
      <div className="flex justify-between items-center mb-4">
          <h3 className="text-slate-300 font-semibold text-lg uppercase tracking-wider">
            {title || (type === 'bar' ? 'Comparaison Carbone' : 'Données Analytiques')}
          </h3>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        {type === 'bar' ? renderBarChart() : renderAreaChart()}
      </ResponsiveContainer>
    </div>
  );
};