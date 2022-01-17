import React from 'react';
import { mapModifiers } from 'src/libs/component';

export const ICON_SHAPES = [
  'bell',
  'bullet',
  'cancel',
  'checkbox-checked',
  'checkbox',
  'dropdown',
  'location',
  'notification-bell',
  'search',
  'setting',
] as const;

export type IconShape = typeof ICON_SHAPES[number];

export interface IconProps {
  name: IconShape;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ name, onClick }) => (
  <i className={mapModifiers('a-icon', name)} onClick={onClick} />
);
