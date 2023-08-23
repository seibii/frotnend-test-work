import { notEmpty } from "@/utilities/extensions";

export type Maintenance = {
  id: number;
  name: string;
  displayName: string;
};

export type SelectedMaintenance = {
  maintenance: Maintenance;
  selectedChoices: MaintenanceChoice[];
};

export const selectedPrice = (maintenance: SelectedMaintenance): number =>
  maintenance.selectedChoices.reduce((sum, choice) => sum + choice.price, 0);

export const selectedName = (maintenance: SelectedMaintenance): string =>
  [maintenance.maintenance.displayName]
    .concat(maintenance.selectedChoices.map((choice) => choice.name).filter(notEmpty))
    .join(' ');

export type MaintenanceChoice = {
  id: number;
  name?: string;
  price: number;
};
