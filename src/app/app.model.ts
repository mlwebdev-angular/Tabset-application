import { ITabSetRecord } from '../tabset/tabset.model';

export interface IAppState {
  tabset: ITabSetRecord;

}

export const INITIAL_STATE: IAppState = {
  tabset: {},
};
