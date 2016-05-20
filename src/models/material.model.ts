export interface IMaterial {
  name: string;
  quantity: number;
  price: number;
}

//adding the id as it is added by mongoose
export class Material implements IMaterial{
  _id: string;
  name: string;
  quantity: number;
  price: number;
}
