import React from 'react';

export interface TableInfomationProps {
  textId: string;
  textName: string;
  userId: string;
  userName: string;
}

export const TableInfomation: React.FC<TableInfomationProps> = props => (
  <table className="a-table-infomation">
    <thead className="a-table-infomation__head">
      <tr className="a-table-infomation__row">
        <th className="a-table-infomation__col">{props.textId}</th>
        <th className="a-table-infomation__col">{props.textName}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="a-table-infomation__row">
        <td className="a-table-infomation__col">{props.userId}</td>
        <td className="a-table-infomation__col">{props.userName}</td>
      </tr>
    </tbody>
  </table>
);
