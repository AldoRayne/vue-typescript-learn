interface allowedGetterNames {
  rents: string;
  sales: string;
}

interface allowedDispatchNames {
  getRents: string;
  getSales: string;
}

type getterNameKeys = keyof allowedGetterNames;
type dispatchNameKeys = keyof allowedDispatchNames;

export default interface StoreData {
  getterName: getterNameKeys;
  dispatchName: dispatchNameKeys;
}
