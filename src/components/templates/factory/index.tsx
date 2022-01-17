import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/atoms/button';
import { Dropdown } from 'src/components/atoms/dropdown';
import { options } from 'src/components/atoms/dropdown/index.stories';
import { ButtonContainer } from 'src/components/molecules/button-container';
import { InputForm } from 'src/components/molecules/input-form';
import { TableContainer } from 'src/components/organisms/table-container';
import { URL_ORDER_REGISTER } from 'src/constants/constants';
import { Page } from '../page';

export const Factory: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="t-factory">
      <div className="t-factory__button-container">
        <ButtonContainer modifiers="rounded-container">
          <Button modifiers="big-rounded">新規</Button>
          <Button modifiers="big-rounded" bgColor="white">
            変更
          </Button>
          <Button modifiers="big-rounded" bgColor="white">
            削除
          </Button>
        </ButtonContainer>
      </div>
      <div className="t-factory__input">
        <InputForm modifierLabel="gray">発注No.</InputForm>
      </div>
      <div className="t-factory__input-list t-factory__item">
        <InputForm
          modifierLabel="gray"
          secondIconLable="search"
          modifiers="datalist2"
          listInput="sample"
          // optionsInput={['google', 'safari']} TODO:
        >
          現場名
        </InputForm>
      </div>
      <div className="t-factory__table-container t-factory__item">
        <TableContainer
          modifiers="two-button"
          textHeading="案件内訳入力"
          textButton1="案件内訳入力"
          textButton2="登録"
          onClick={() => navigate(URL_ORDER_REGISTER)}
        >
          <table className="t-factory__table">
            <thead>
              <tr className="t-factory__row1">
                <th className="t-factory__col1">品名</th>
                <th className="t-factory__col">備考</th>
                <th className="t-factory__col">配送(引き上げ)</th>
                <th className="t-factory__col">製作(社内)</th>
                <th className="t-factory__col">製作(外注①)</th>
                <th className="t-factory__col">製作(外注②)</th>
                <th className="t-factory__col">配送(納め)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="t-factory__row">
                <td className="t-factory__col1">畳 新規</td>
                <td className="t-factory__col"></td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
              </tr>
              <tr className="t-factory__row">
                <td className="t-factory__col1">畳 オプション</td>
                <td className="t-factory__col"></td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
              </tr>
              <tr className="t-factory__row">
                <td className="t-factory__col1">畳 オプション</td>
                <td className="t-factory__col"></td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
              </tr>
              <tr className="t-factory__row">
                <td className="t-factory__col1">畳 オプション</td>
                <td className="t-factory__col"></td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
              </tr>
              <tr className="t-factory__row">
                <td className="t-factory__col1">畳 オプション</td>
                <td className="t-factory__col"></td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
                <td className="t-factory__col">
                  <Dropdown listItem={options} />
                </td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </div>
    </div>
  );
};
