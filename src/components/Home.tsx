import React from 'react';
import { Users, Landmark, PiggyBank, Clock, BookOpen, ScrollText, TrendingUp, ShieldCheck, History, Package, CheckSquare, ArrowLeftRight, HelpCircle, List } from 'lucide-react';

interface HomeProps {
  onSelectModule: (moduleId: string) => void;
}

export function Home({ onSelectModule }: HomeProps) {
  const cards = [
    { id: 'cif', title: 'CIF', description: 'Customer Information File (CCRC, CMRC, CCIFINQ, CICD etc.)', icon: <Users size={24} />, color: 'blue' },
    { id: 'rd', title: 'RD', description: 'Recurring Deposit', icon: <Clock size={24} />, color: 'emerald' },
    { id: 'sb', title: 'SB', description: 'Savings Bank', icon: <PiggyBank size={24} />, color: 'amber' },
    { id: 'td', title: 'TD', description: 'Time Deposit', icon: <Landmark size={24} />, color: 'purple' },
    { id: 'mis', title: 'MIS', description: 'Monthly Income Scheme', icon: <Landmark size={24} />, color: 'fuchsia' },
    { id: 'ssa', title: 'SSA', description: 'Sukanya Samriddhi Account', icon: <ShieldCheck size={24} />, color: 'pink' },
    { id: 'ppf', title: 'PPF', description: 'Public Provident Fund', icon: <ShieldCheck size={24} />, color: 'rose' },
    { id: 'nsc_kvp', title: 'NSC/KVP', description: 'National Savings Certificate & Kisan Vikas Patra', icon: <ScrollText size={24} />, color: 'indigo' },
    { id: 'scss', title: 'SCSS', description: 'Senior Citizen Savings Scheme', icon: <TrendingUp size={24} />, color: 'cyan' },
    { id: 'inventory', title: 'Inventory', description: 'Inventory Management & Movements', icon: <Package size={24} />, color: 'teal' },
    { id: 'common_txn', title: 'Common Txn', description: 'Common Transactions (BO, Claims, POSB)', icon: <ArrowLeftRight size={24} />, color: 'orange' },
    { id: 'common_issues', title: 'Issues & Fixes', description: 'Common Issues & Solutions', icon: <HelpCircle size={24} />, color: 'red' },
    { id: 'menus', title: 'Menus', description: 'Finacle Menus for All Schemes', icon: <List size={24} />, color: 'slate' },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string, bg: string, iconBg: string }> = {
      blue: { border: 'hover:border-blue-500', bg: 'group-hover:bg-blue-600', iconBg: 'bg-blue-50 text-blue-600' },
      emerald: { border: 'hover:border-emerald-500', bg: 'group-hover:bg-emerald-600', iconBg: 'bg-emerald-50 text-emerald-600' },
      amber: { border: 'hover:border-amber-500', bg: 'group-hover:bg-amber-500', iconBg: 'bg-amber-50 text-amber-600' },
      purple: { border: 'hover:border-purple-500', bg: 'group-hover:bg-purple-600', iconBg: 'bg-purple-50 text-purple-600' },
      fuchsia: { border: 'hover:border-fuchsia-500', bg: 'group-hover:bg-fuchsia-600', iconBg: 'bg-fuchsia-50 text-fuchsia-600' },
      pink: { border: 'hover:border-pink-500', bg: 'group-hover:bg-pink-600', iconBg: 'bg-pink-50 text-pink-600' },
      rose: { border: 'hover:border-rose-500', bg: 'group-hover:bg-rose-600', iconBg: 'bg-rose-50 text-rose-600' },
      indigo: { border: 'hover:border-indigo-500', bg: 'group-hover:bg-indigo-600', iconBg: 'bg-indigo-50 text-indigo-600' },
      cyan: { border: 'hover:border-cyan-500', bg: 'group-hover:bg-cyan-600', iconBg: 'bg-cyan-50 text-cyan-600' },
      teal: { border: 'hover:border-teal-500', bg: 'group-hover:bg-teal-600', iconBg: 'bg-teal-50 text-teal-600' },
      orange: { border: 'hover:border-orange-500', bg: 'group-hover:bg-orange-500', iconBg: 'bg-orange-50 text-orange-600' },
      red: { border: 'hover:border-red-500', bg: 'group-hover:bg-red-600', iconBg: 'bg-red-50 text-red-600' },
      slate: { border: 'hover:border-slate-500', bg: 'group-hover:bg-slate-600', iconBg: 'bg-slate-50 text-slate-600' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Select a Module</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Choose a scheme or service below to view the detailed Finacle operating procedures, forms, and guidelines.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card) => {
          const colorStyles = getColorClasses(card.color);
          return (
            <div 
              key={card.id}
              onClick={() => onSelectModule(card.id)}
              className={`group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md ${colorStyles.border} transition-all cursor-pointer flex flex-col items-center text-center`}
            >
              <div className={`h-14 w-14 rounded-full flex items-center justify-center mb-4 ${colorStyles.iconBg} ${colorStyles.bg} group-hover:text-white transition-colors`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
