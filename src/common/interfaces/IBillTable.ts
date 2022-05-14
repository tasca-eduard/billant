import { ITenant } from "./ITenant";
import { IDetails } from "./IDetails";

export interface IBillTable {
  tenants: ITenant[],
  details: IDetails
}