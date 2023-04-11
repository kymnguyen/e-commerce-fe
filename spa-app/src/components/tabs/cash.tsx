import React, { useState } from 'react';
import DynamicTable from '../commons/dynamic-table';

type Tab = {
  label: string;
  content: React.ReactNode;
};

const data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { name: 'Bob Johnson', age: 40, city: 'Chicago' },];

const columns_1 = ['name'];
const columns_2 = ['age'];
const columns_3 = ['city'];

const AccountingTab: Tab = {
  label: 'Accounting',
  content: <DynamicTable data={data} columns={columns_1} />,
};

const TaxTab: Tab = {
  label: 'Tax',
  content: <DynamicTable data={data} columns={columns_2} />,
};

const PaymentTab: Tab = {
  label: 'Payment',
  content: <DynamicTable data={data} columns={columns_3} />,
};

const CashTabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [AccountingTab, TaxTab, PaymentTab];

  return (
    <div>
      <div className="tab">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={activeTab === index ? 'active' : ''}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default CashTabsComponent;
