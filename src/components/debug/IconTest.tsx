import React from 'react';
import { FileText, Eye, CreditCard, BarChart3 } from 'lucide-react';

const IconTest = () => {
  const testIcons = [
    { name: 'FileText', Icon: FileText },
    { name: 'Eye', Icon: Eye },
    { name: 'CreditCard', Icon: CreditCard },
    { name: 'BarChart3', Icon: BarChart3 }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Icon Test</h3>
      <div className="grid grid-cols-2 gap-4">
        {testIcons.map(({ name, Icon }) => (
          <div key={name} className="flex items-center gap-2 p-2 border rounded">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <Icon size={20} className="text-white" />
            </div>
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconTest;