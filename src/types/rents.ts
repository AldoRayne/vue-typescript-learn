export interface RentItem {
  id: string;
  dt_update: string;
  new_city_id: string;
  new_street_id: string;
  region_id: string;
  district_id: string;
  metro_id: string;
  material_id: string;
  district: string;
  city: string;
  subway: string;
  street: string;
  house_number: string;
  layout: string;
  rooms: string;
  price: string;
  currency: string;
  total: string;
  living: string;
  kitchen: string;
  area: string;
  floor: string;
  floors: string;
  material: string;
  phone_number: string;
  dt: string;
  text: string;
  phones: string;
  layout_id: string;
  currency_id: string;
  is_owner: string;
  images: Array<string>;
  source_id: string;
  source_site: string;
  source_link: string;
  region: string;
}

export interface Rents {
  status: string;
  total: string;
  per_page: number;
  current_page: number;
  items: readonly RentItem[];
}
