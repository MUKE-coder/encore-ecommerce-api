// DTO => Data Transfer object
export interface CategoryDTO {
  id: string;
  name: string;
}

export interface CreateCategoryDTO {
  name: string;
}

export interface UpdateCategoryDto {
  name?: string;
}

export interface Response {
  success: boolean;
  message?: string;
  result?: string | number;
}

export interface CategoryResponse {
  /** Indicates if the request was successful */
  success: boolean;
  /** Error message if the request was not successful */
  message?: string;
  /** Category data */
  result?: CategoryDTO | CategoryDTO[];
}
