import firebase from 'firebase/compat';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/atoms/button';
import { ModalDialog } from 'src/components/organisms/modal-dialog';
import { BranchMasterPopup } from 'src/components/templates/branch-master-popup';
import { GenbaMasterPopup } from 'src/components/templates/genba-master-popup';
import { Page } from 'src/components/templates/page';
import { HEADER_DASHBOARD, URL_LOGIN } from 'src/constants/constants';
import { removeFromLocalStorage } from 'src/libs/utils';

export const DashBoard: React.FC = () => {

  // TODO
  const [isOpenedGenba, setisOpenedGenba] = useState(false);
  const [isOpenedBranch, setisOpenedBranch] = useState(false);
  const history = useNavigate();

  const signOut = () => {

    firebase.auth().signOut();
    removeFromLocalStorage('auth');
    removeFromLocalStorage('token');
    history(URL_LOGIN);
  };

  return (
    <Page
      textHeader={HEADER_DASHBOARD}
      textIdHeader="ユーザーID"
      textNameHeader="ユーザー名"
      userIdHeader="0368"
      userNameHeader="テスト 太郎"
    >
      <Button bgColor="white" modifiers="small" onClickRequest={signOut} >
        Sign out
      </Button>
      {/* TODO */}
      <Button bgColor="white" modifiers="small" onClickRequest={() => setisOpenedGenba(true)} >
        Show genba-master
      </Button>
      <ModalDialog
        textTitleDialog="建物マスタ登録 / 編集"
        onCloseRequest={() => setisOpenedGenba(false)}
        opened={isOpenedGenba}
        >
        <GenbaMasterPopup></GenbaMasterPopup>
      </ModalDialog>

      <Button bgColor="white" modifiers="small" onClickRequest={() => setisOpenedBranch(true)} >
        Show branch-master
      </Button>
      <ModalDialog
        textTitleDialog="支店マスタ登録 / 編集"
        onCloseRequest={() => setisOpenedBranch(false)}
        opened={isOpenedBranch}
        >
        <BranchMasterPopup></BranchMasterPopup>
      </ModalDialog>
    </Page>
  );
};
