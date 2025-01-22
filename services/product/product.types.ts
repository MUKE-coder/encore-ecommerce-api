// DTO => Data Transfer object
export interface ProductDTO {
  id: string;
  title: string;
  price: number;
  categoryId: string;
}

export interface CreateProductDTO {
  title: string;
  price: number;
  categoryId: string;
}

export interface UpdateProductDto {
  title?: string;
  price?: number;
  categoryId?: string;
}

export interface Response {
  success: boolean;
  message?: string;
  result?: string | number;
}

export interface ProductResponse {
  /** Indicates if the request was successful */
  success: boolean;
  /** Error message if the request was not successful */
  message?: string;
  /** Category data */
  result?: ProductDTO | ProductDTO[];
}
