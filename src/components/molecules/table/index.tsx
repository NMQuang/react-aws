import React from 'react';
import { mapModifiers } from 'src/libs/component';

export interface TableProps extends Omit<React.TableHTMLAttributes<HTMLTableElement>, 'className'> {
  children?: React.ReactNode;
  modifiers?: 'scrollable';
  leftTable?: React.ReactNode;
  midTable?: React.ReactNode;
  rightTable?: React.ReactNode;
}

export const Table: React.FC<TableProps> = props => (
  <div className="m-table">
    <div>
      <table className="m-table__table-left">
        <tr>
          <th className="m-table__boder">大分類コード</th>
          <th className="m-table__boder">品名</th>
        </tr>
        {props.leftTable}
      </table>
    </div>
    <div className="m-table__center-region">
      <div className="m-table__table-center-title">中分類コード</div>
      <div className="m-table__table-center-container">
        <table className="m-table__table-center">{props.midTable}</table>
      </div>
    </div>

    <div>
      <table className="m-table__table-right">
        <tr>
          <th className="m-table__boder">数量</th>
          <th className="m-table__boder">単位</th>
          <th className="m-table__boder">単価</th>
          <th className="m-table__boder">合計</th>
        </tr>
        {props.rightTable}
      </table>
    </div>
  </div>
);

export const TableCell: React.FC = props => (
  <td className={mapModifiers('m-table__cell', !props.children && 'gray')}>{props.children}</td>
);
