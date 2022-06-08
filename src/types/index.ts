export type BreweryType = {
  id: string;
  name: string;
  brewery_type: string | null;
  street: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string | null;
  state: string | null;
  county_province: null;
  postal_code: string | null;
  country: string | null;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: null;
  updated_at: string | Date;
  created_at: string | Date;
};

export type ErrorType = {
  error: boolean;
  message: string;
  status: number | null;
};
