import React from 'react';
import { Button } from 'src/components/atoms/button';
import { Input } from 'src/components/atoms/input';
import { Label } from 'src/components/atoms/label';
import { ButtonContainer } from 'src/components/molecules/button-container';

export const BranchMasterPopup: React.FC = () => {
  return (
    <div className="t-branch-master-popup">
      <Label id="sampleInputId" firstIcon="bullet">
        支店名称
      </Label>
      <Input />
      <Label id="sampleInputId" firstIcon="bullet">
        支店名称（カナ）
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
      <div className="t-branch-master-popup__container">
        <div className="t-branch-master-popup__container--item">
          <Label id="sampleInputId" firstIcon="bullet">
            緯度
          </Label>
          <Input />
        </div>
        <div className="t-branch-master-popup__container--item">
          <Label id="sampleInputId" firstIcon="bullet">
            経度
          </Label>
          <Input />
        </div>
      </div>
      <div className="t-branch-master-popup__container">
        <div className="t-branch-master-popup__container--item ">
          <Label id="sampleInputId" firstIcon="bullet">
            電話番号
          </Label>
          <Input />
        </div>
        <div className="t-branch-master-popup__container--item ">
          <Label id="sampleInputId" firstIcon="bullet">
            FAX番号
          </Label>
          <Input />
        </div>
      </div>
      <ButtonContainer modifiers="button-green">
        <Button bgColor="green">登録/編集</Button>
        <Button bgColor="green">キャンセル</Button>
      </ButtonContainer>
    </div>
  );
};
