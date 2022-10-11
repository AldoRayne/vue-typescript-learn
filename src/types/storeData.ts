interface AllowedGetterNames {
  rents: string;
  sales: string;
}

interface AllowedDispatchNames {
  getRents: string;
  getSales: string;
}

type getterNameKeys = keyof AllowedGetterNames;
type dispatchNameKeys = keyof AllowedDispatchNames;

export default interface StoreData {
  getterName: getterNameKeys;
  dispatchName: dispatchNameKeys;
}
