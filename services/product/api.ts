import { api, APIError } from "encore.dev/api";
import { CreateProductDTO, ProductResponse } from "./product.types";
import ProductService from "./product.service";

export const create = api(
  { expose: true, method: "POST", path: "/products" },
  async (data: CreateProductDTO): Promise<ProductResponse> => {
    try {
      if (!data.title || !data.categoryId || !data.price) {
        throw APIError.invalidArgument("Missing fields");
      }
      const result = await ProductService.create(data);
      return result;
    } catch (error) {
      throw APIError.aborted(error?.toString() || "Error creating the product");
    }
  }
);

export const read = api(
  { expose: true, method: "GET", path: "/products" },
  async (): Promise<ProductResponse> => {
    try {
      const result = await ProductService.findAll();
      return result;
    } catch (error) {
      throw APIError.aborted(
        error?.toString() || "Error getting products data"
      );
    }
  }
);
export const readByCategory = api(
  { expose: true, method: "GET", path: "/products/category/:categoryId" },
  async ({ categoryId }: { categoryId: string }): Promise<ProductResponse> => {
    try {
      const result = await ProductService.findAllByCategoryId(categoryId);
      return result;
    } catch (error) {
      throw APIError.aborted(
        error?.toString() || "Error getting products data"
      );
    }
  }
);

export const readOne = api(
  { expose: true, method: "GET", path: "/products/:id" },
  async ({ id }: { id: string }): Promise<ProductResponse> => {
    try {
      const result = await ProductService.findOne(id);
      return result;
    } catch (error) {
      throw APIError.aborted(error?.toString() || "Error getting product data");
    }
  }
);
