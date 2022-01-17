import React from 'react';
import { Page } from 'src/components/templates/page';
import { QuotationPrinting } from 'src/components/templates/quotation-printing';
import { HEADER_MASTER_REGISTER } from 'src/constants/constants';

export const OrderRegistrationPage: React.FC = () => {
  return (
    <Page
      textHeader={HEADER_MASTER_REGISTER}
      textIdHeader="ユーザーID"
      textNameHeader="ユーザー名"
      userIdHeader="0368"
      userNameHeader="テスト 太郎"
    >
      <QuotationPrinting />
    </Page>
  );
};
