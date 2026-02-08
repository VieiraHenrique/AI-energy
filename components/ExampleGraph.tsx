import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { GraphKey } from '../types';

interface ExampleGraphProps {
  data: any[];
  keys?: GraphKey[];
  type?: 'area' | 'bar' | 'pie' | 'bubble';
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

  const renderPieChart = () => (
    <PieChart margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={1}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(0,0,0,0)" />
        ))}
      </Pie>
      <Tooltip 
        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
        itemStyle={{ color: '#f8fafc' }}
        formatter={(value: number) => `${value}%`}
      />
      <Legend 
        verticalAlign="bottom" 
        height={36} 
        iconType="circle"
        formatter={(value) => <span style={{ color: '#cbd5e1', fontSize: '12px' }}>{value}</span>}
      />
    </PieChart>
  );

  const renderBubbleChart = () => {
    // Find max value to normalize bubble sizes
    const maxValue = Math.max(...data.map(d => d.value));
    
    return (
      <div className="w-full h-full flex items-end justify-around pb-8 px-4">
        {data.map((item, index) => {
            // Area proportional to value -> Radius proportional to sqrt(value)
            // Scale logic: Let max value have a diameter of ~140px (on larger screens)
            const maxDiameter = 140; 
            const radius = Math.sqrt(item.value / maxValue);
            const size = Math.max(radius * maxDiameter, 10); // Minimum 10px size

            return (
                <div key={index} className="flex flex-col items-center group">
                    <div 
                        className="rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-110 relative mb-4"
                        style={{ 
                            width: `${size}px`, 
                            height: `${size}px`, 
                            backgroundColor: item.color,
                            boxShadow: `0 0 20px ${item.color}40`
                        }}
                    >
                        {size > 50 && (
                             <span className="text-white font-bold text-shadow-sm">{item.value}%</span>
                        )}
                    </div>
                    <div className="text-center">
                        <p className="text-slate-200 font-bold text-sm leading-tight">{item.name}</p>
                        {size <= 50 && (
                            <p className="text-emerald-400 text-xs mt-1 font-bold">{item.value}%</p>
                        )}
                    </div>
                </div>
            )
        })}
      </div>
    );
  };

  return (
    <div className="w-full h-[300px] md:h-[400px] bg-slate-800/50 p-4 rounded-xl border border-slate-700 backdrop-blur-sm shadow-xl flex flex-col">
      <div className="flex justify-between items-center mb-4 shrink-0">
          <h3 className="text-slate-300 font-semibold text-lg uppercase tracking-wider">
            {title || (type === 'bar' ? 'Comparaison Carbone' : (type === 'pie' ? 'Répartition' : (type === 'bubble' ? 'Comparaison Visuelle' : 'Données Analytiques')))}
          </h3>
      </div>
      
      <div className="flex-1 min-h-0 relative">
        {type === 'bubble' ? (
             renderBubbleChart()
        ) : (
            <ResponsiveContainer width="100%" height="100%">
                {type === 'bar' ? renderBarChart() : (type === 'pie' ? renderPieChart() : renderAreaChart())}
            </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};