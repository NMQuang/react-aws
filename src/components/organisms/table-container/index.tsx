import React from 'react';
import { Button } from 'src/components/atoms/button';
import { PageHeading } from 'src/components/atoms/page-heading';
import { mapModifiers } from 'src/libs/component';

export interface TableContainerProps {
  children: React.ReactNode;
  modifiers?: 'two-button';
  textHeading?: string;
  textButton1?: string;
  textButton2?: string;
  onClick?: () => void;
}

export const TableContainer: React.FC<TableContainerProps> = props => (
  <div className={mapModifiers('o-table-container', props.modifiers)}>
    <div className="o-table-container__container">
      <div className="o-table-container__header">
        <PageHeading> {props.textHeading}</PageHeading>
      </div>
      <div className="o-table-container__button-container">
        <div className="o-table-container__button">
          <Button bgColor="green" modifiers="small" onClickRequest={props.onClick}>
            {props.textButton1}
          </Button>
        </div>
        {props.modifiers === 'two-button' && (
          <div className="o-table-container__button">
            <Button bgColor="green" modifiers="small">
              {props.textButton2}
            </Button>
          </div>
        )}
      </div>
    </div>
    <div className="o-table-container__table">{props.children}</div>
  </div>
);
