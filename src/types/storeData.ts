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
  dispatchName: dispatchNameKeys;
  dispatchType: dispatchTypeKeys;
}

export interface StoreData extends PayloadData {
  getterName: getterNameKeys;
}
