import React from "react";

interface GridData {
  id: number;
  name: string;
  amount: number;
}

interface GridProps {
  data?: GridData[];
}

const AccountingGrid: React.FC<GridProps> = ({ data }) => {
  return (
    <div>
      <h2>Accounting Grid</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TaxGrid: React.FC<GridProps> = ({ data }) => {
  return (
    <div>
      <h2>Tax Grid</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PaymentGrid: React.FC<GridProps> = ({ data }) => {
  return (
    <div>
      <h2>Payment Grid</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { AccountingGrid, TaxGrid, PaymentGrid };
