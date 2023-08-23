import logo_seibii_icon from '@/assets/images/seibii_icon.svg';
import { SelectedMaintenance, selectedName, selectedPrice } from '@/types/maintenance';
import React from 'react';
import { prettyPrice } from "@/utilities/viewHelper";
import { bem } from "@/utilities/bem";

type Props = {
  name: string;
  price?: number;
  isDynamicPrice?: boolean;
};

export const ChoiceCardView: React.FC<{ selectedMaintenance: SelectedMaintenance }> = ({ selectedMaintenance }) => (
  <ServiceCardListItem
    name={selectedName(selectedMaintenance)}
    price={selectedPrice(selectedMaintenance)}
  />
);

const ServiceCardListItem: React.FC<Props> = (props) => {
  const { name, price, isDynamicPrice } = props;
  return (
    <li className={bem('p-service-card-list', 'item')}>
      <div className={bem('p-service-card', null, { shadow: true, gray: true })}>
        <div className={bem('p-service-card', 'grid')}>
          <img className={bem('p-service-card', 'image', { 'no-image': true })} src={logo_seibii_icon} />
          <p className={bem('p-service-card', 'title')}>{name}</p>
          <p className={bem('p-service-card', 'price')}>
            {price ? `${prettyPrice(String(price))}${isDynamicPrice ? '〜' : ''}` : ''}
          </p>
        </div>
      </div>
    </li>
  );
};
