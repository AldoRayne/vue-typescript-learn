interface AllowedGetterNames {
  rents: string;
  sales: string;
}

interface AllowedDispatchNames {
  getRents: string;
  getSales: string;
}

interface AllowedDispatchTypes {
  rent: string;
  sale: string;
}

type getterNameKeys = keyof AllowedGetterNames;
type dispatchNameKeys = keyof AllowedDispatchNames;
type dispatchTypeKeys = keyof AllowedDispatchTypes;

export interface PayloadData {
  name: dispatchNameKeys;
  type: dispatchTypeKeys;
}

export interface StoreData {
  getterName: getterNameKeys;
  dispatchName: dispatchNameKeys;
  dispatchType: dispatchTypeKeys;
}
