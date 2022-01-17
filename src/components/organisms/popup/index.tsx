import React from 'react';
import { Button } from 'src/components/atoms/button';
import { Checkbox } from 'src/components/atoms/checkbox';
import { Input } from 'src/components/atoms/input';
import { Label } from 'src/components/atoms/label';
import { CheckboxContainer } from 'src/components/molecules/checkbox-container';

export const Popup: React.FC = () => (
  <div className="o-popup">
    <Label id="sampleInputId" firstIcon="bullet">
      現場名称
    </Label>
    <Input />
    <Label id="sampleInputId" firstIcon="bullet">
      現場名称（カナ）
    </Label>
    <Input />
    <Label id="sampleInputId" firstIcon="bullet">
      郵便番号
    </Label>
    <Input />
    <Label id="sampleInputId" firstIcon="bullet">
      住所
    </Label>
    <Input />
    <div className="o-popup__container">
      <div className="o-popup__container-item">
        <Label id="sampleInputId" firstIcon="bullet">
          緯度
        </Label>
        <Input />
      </div>
      <div className="o-popup__container-item">
        <Label id="sampleInputId" firstIcon="bullet">
          経度
        </Label>
        <Input />
      </div>
    </div>
    <Label id="sampleInputId" firstIcon="bullet">
      建物種類
    </Label>
    <div className="checkbox">
      <CheckboxContainer modifiers="second-container">
        <Checkbox id="1" name="checkbox" modifiers="large-size">
          戸建て
        </Checkbox>
        <Checkbox id="2" name="checkbox" modifiers="large-size">
          集合住宅
        </Checkbox>
        <Checkbox id="3" name="checkbox" modifiers="large-size">
          商業施設
        </Checkbox>
      </CheckboxContainer>
    </div>
    <div className="button-container">
      <Button modifiers="small" bgColor="green">
        登録/編集
      </Button>
      <Button modifiers="small" bgColor="green">
        キャンセル
      </Button>
    </div>
  </div>
);
