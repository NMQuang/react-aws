import React from 'react';
import { ButtonContainer } from 'src/components/molecules/button-container';
import { Button } from 'src/components/atoms/button';
import { useNavigate } from 'react-router-dom';
import { URL_MASTER_REGISTER } from 'src/constants/constants';

export const Form: React.FC = () => {
  const history = useNavigate();
  const handleClick = () => {
    history(URL_MASTER_REGISTER);
  };

  return (
    <div className="t-form">
      <div className="button-container">
        <ButtonContainer modifiers="button-green">
          <Button bgColor="green" onClickRequest={handleClick}>
            見積書印刷
          </Button>
          <Button bgColor="green" onClickRequest={handleClick}>
            受注表印刷
          </Button>
          <Button bgColor="green" onClickRequest={handleClick}>
            製作表印刷
          </Button>
          <Button bgColor="green" onClickRequest={handleClick}>
            納品書印刷
          </Button>
          <Button bgColor="green" onClickRequest={handleClick}>
            引上げ伝票印刷
          </Button>
          <Button bgColor="green" onClickRequest={handleClick}>
            工事注文書（配送）
          </Button>
          <Button bgColor="green" onClickRequest={handleClick}>
            工事注文書（製作）
          </Button>
          <Button bgColor="green" onClickRequest={handleClick}>
            得意先元帳
          </Button>
        </ButtonContainer>
      </div>
    </div>
  );
};
