import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'src/components/atoms/button';
import { Input } from 'src/components/atoms/input';
import { PageHeading } from 'src/components/atoms/page-heading';
import { InputForm } from 'src/components/molecules/input-form';

export const QuotationPrinting: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log('data', data);
  };

  return (
    <div className="t-quotation-printing">
      <section className="t-quotation-printing__input-form t-quotation-printing__item">
        <InputForm
          modifierLabel="gray"
          modifiers="datalist"
          listInput="sample"
          {...register('sampleInputId', { required: true })}
        >
          鍵情報
        </InputForm>
      </section>
      {errors.sampleInputId?.type === 'required' && <p>Required</p>}
      <section className="t-quotation-printing__item">
        <PageHeading>個別印刷</PageHeading>
      </section>
      <section className="t-quotation-printing__item">
        <div className="t-quotation-printing__input-form">
          <InputForm modifierLabel="gray">発注No.</InputForm>
        </div>
        <div className="t-quotation-printing__button">
          <Button modifiers="small" bgColor="green">
            印刷
          </Button>
        </div>
      </section>
      <div className="t-quotation-printing__item">
        <InputForm modifierLabel="gray">現場名</InputForm>
      </div>
      <div className="t-quotation-printing__item">
        <PageHeading>個別印刷</PageHeading>
      </div>
      <section className="t-quotation-printing__item">
        <div className="t-quotation-printing__input-form--small">
          <InputForm
            placeholder="YYYY-MM-DD"
            modifierLabel="gray"
            modifiers="datalist2"
            listInput="sample"
            // optionsInput={['google', 'safari']} TODO:
          >
            対象期間
          </InputForm>
        </div>
        <div className="t-quotation-printing__input">
          <Input
            placeholder="YYYY-MM-DD"
            id="test"
            modifiers="datalist2"
            list="browsers"
            // options={['google', 'cococ', 'chrome', 'safari']} TODO:
          ></Input>
        </div>
        <div className="t-quotation-printing__button--small">
          <Button modifiers="small" bgColor="green" onClickRequest={handleSubmit(onSubmit)}>
            一括印刷
          </Button>
        </div>
      </section>
    </div>
  );
};
