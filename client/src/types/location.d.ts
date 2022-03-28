export interface Location {
  error?: string;
  loaded?: boolean;
  latitude?: string;
  longitude?: string;
  name: string;
  country: string;
}

export interface LocationCord {
  latitude?: string;
  longitude?: string;
  loaded: boolean;
  error?: string;
}
