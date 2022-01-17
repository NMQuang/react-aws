import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ModalDialog } from './';

import { Popup } from '../popup';

storiesOf('Components/Organisms/ModalDialog', module).add('normal', () => {
  const [isOpened, setisOpened] = useState(true);

  return (
    <ModalDialog
      textTitleDialog="建物マスタ登録 / 編集"
      onCloseRequest={() => setisOpened(false)}
      opened={isOpened}
    >
      <Popup />
    </ModalDialog>
  );
});
