import React, { Children } from 'react';
import Modal from 'react-modal';
import { Icon } from 'src/components/atoms/icon';
import { Popup } from '../popup';

export interface ModalDialogProps {
  children: React.ReactNode;
  textTitleDialog?: string;
  onCloseRequest?: () => void;
  opened?: boolean;
}

export const ModalDialog: React.FC<ModalDialogProps> = props => (
  <Modal isOpen={props.opened || false} className="o-modal-dialog">
    <div className="o-modal-dialog__header">
      <div className="o-modal-dialog__title">{props.textTitleDialog}</div>
      <span className="o-modal-dialog__icon">
        <Icon name="cancel" onClick={props.onCloseRequest} />
      </span>
    </div>
    <div id="o-modal-dialog__description">
      {props.children}
    </div>
  </Modal>
);
