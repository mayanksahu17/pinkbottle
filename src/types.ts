// src/types.ts
export interface Field {
    id: string;
    required: boolean;
  }
  
  export interface Section {
    id: string;
    label: string;
    fields: Field[]; // Optional if required
    Component?: React.ComponentType<any>; // Optional to avoid errors in some contexts
  }
  