import { TBillStatus } from "../types/TBillStatus";

export interface ITenant {
  id: string,
  name: string,
  gas: number | null,
  power: number | null,
  utilities: number | null,
  internet: number | null,
  rent: number | null,
  total: number,
  status: TBillStatus,
  lastUpdate: string
}