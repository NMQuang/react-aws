import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table, TableCell } from './';
import { InputSelect } from 'src/components/atoms/input-select';
import {
  list,
  listOrderLeft,
  listOrderLefttable,
  listOrderRight,
} from 'src/components/atoms/input-select/index.stories';
import { Input } from 'src/components/atoms/input';

storiesOf('Components/Molecules/Table', module).add('normal', () => (
  <Table
    leftTable={
      <React.Fragment>
        <tr>
          <TableCell>
            <InputSelect
              options={listOrderLefttable}
              name={'Select'}
              modifiers="none-border"
              placeholder=""
            />
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderLeft} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
        <tr>
          <TableCell>
            <InputSelect
              options={listOrderLefttable}
              name={'Select'}
              modifiers="none-border"
              placeholder=""
            />
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderLeft} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
        <tr>
          <TableCell>
            <InputSelect
              options={listOrderLefttable}
              name={'Select'}
              modifiers="none-border"
              placeholder=""
            />
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderLeft} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
        <tr>
          <TableCell>
            <InputSelect
              options={listOrderLefttable}
              name={'Select'}
              modifiers="none-border"
              placeholder=""
            />
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderLeft} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
        <tr>
          <TableCell>
            <InputSelect
              options={listOrderLefttable}
              name={'Select'}
              modifiers="none-border"
              placeholder=""
            />
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderLeft} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
      </React.Fragment>
    }
    midTable={
      <React.Fragment>
        <tr>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell />
          <TableCell />
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
        <tr>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
        <tr>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
        <tr>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
        <tr>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>
            <InputSelect options={list} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
        </tr>
      </React.Fragment>
    }
    rightTable={
      <React.Fragment>
        <tr>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderRight} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>4000</TableCell>
          <TableCell>5000</TableCell>
        </tr>
        <tr>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderRight} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>6000</TableCell>
          <TableCell>8000</TableCell>
        </tr>
        <tr>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderRight} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>3000</TableCell>
          <TableCell>5000</TableCell>
        </tr>
        <tr>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderRight} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>2000</TableCell>
          <TableCell>4000</TableCell>
        </tr>
        <tr>
          <TableCell>
            <Input></Input>
          </TableCell>
          <TableCell>
            <InputSelect options={listOrderRight} name={'Select'} modifiers="none-border" placeholder="" />
          </TableCell>
          <TableCell>1000</TableCell>
          <TableCell>3000</TableCell>
        </tr>
      </React.Fragment>
    }
  />
));
