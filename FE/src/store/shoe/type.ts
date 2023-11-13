export type ShoeType = {
  id: number;
  name: string;
  price: string;
  description: string;
  quantity: number;
  averageStar: number;
  category: string;
  shoeSizes: string[];
  imageUrls: string[];
};

export type GetShoeType = {
  id: number;
};

export type GetShoeByCategory = {
  category: string;
};

export type CreateShoeType = {
  name: string;
  price: number;
  description: string;
  shoeSizes: string[];
  imageUrls: string[];
};

export type UpdateShoeType = {
  id: number;
  name: string;
  price: number;
  description: string;
  shoeSizes: string[];
  imageUrls: string[];
};

export type DeleteShoeType = GetShoeType;
