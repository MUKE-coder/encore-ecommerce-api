import { api, APIError } from "encore.dev/api";
import { CategoryResponse, CreateCategoryDTO } from "./types";
import CategoryService from "./category.service";

export const create = api(
  { expose: true, method: "POST", path: "/categories" },
  async (data: CreateCategoryDTO): Promise<CategoryResponse> => {
    try {
      if (!data.name) {
        throw APIError.invalidArgument("Missing fields");
      }
      const result = await CategoryService.create(data);
      return result;
    } catch (error) {
      throw APIError.aborted(
        error?.toString() || "Error creating the category"
      );
    }
  }
);

export const read = api(
  { expose: true, method: "GET", path: "/categories" },
  async (): Promise<CategoryResponse> => {
    try {
      const result = await CategoryService.findAll();
      return result;
    } catch (error) {
      throw APIError.aborted(
        error?.toString() || "Error getting Categories data"
      );
    }
  }
);

export const readOne = api(
  { expose: true, method: "GET", path: "/categories/:id" },
  async ({ id }: { id: string }): Promise<CategoryResponse> => {
    try {
      const result = await CategoryService.findOne(id);
      return result;
    } catch (error) {
      throw APIError.aborted(
        error?.toString() || "Error getting category data"
      );
    }
  }
);
