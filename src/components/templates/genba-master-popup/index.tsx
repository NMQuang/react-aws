import React from 'react';
import { Button } from 'src/components/atoms/button';
import { Checkbox } from 'src/components/atoms/checkbox';
import { Input } from 'src/components/atoms/input';
import { Label } from 'src/components/atoms/label';
import { ButtonContainer } from 'src/components/molecules/button-container';
import { CheckboxContainer } from 'src/components/molecules/checkbox-container';
import { useForm } from 'react-hook-form';

export const GenbaMasterPopup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('data', data);
  };
  return (
    <div className="t-genba-master-popup">
      <Label htmlFor="sampleInputId" firstIcon="bullet">
        現場名称
      </Label>
      <Input {...register('sampleInputId', { required: true })} id="sampleInputId" />
      {errors.sampleInputId?.type === 'required' && <p>Required</p>}
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
      <div className="t-genba-master-popup__container">
        <div className="t-genba-master-popup__container--item">
          <Label id="sampleInputId" firstIcon="bullet">
            緯度
          </Label>
          <Input />
        </div>
        <div className="t-genba-master-popup__container--item">
          <Label id="sampleInputId" firstIcon="bullet">
            経度
          </Label>
          <Input />
        </div>
      </div>
      <Label id="sampleInputId" firstIcon="bullet">
        建物種類
      </Label>
      <div className="t-genba-master-popup__checkbox">
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
      <ButtonContainer modifiers="button-green">
        <Button bgColor="green" onClickRequest={handleSubmit(onSubmit)}>
          登録/編集
        </Button>
        <Button bgColor="green">キャンセル</Button>
      </ButtonContainer>
    </div>
  );
};
