export interface Seat {
  seat_id: number;
  seat_number: string;
  row_identifier: string;
  row: number;
  column: number;
  isOccupied: boolean;
}
