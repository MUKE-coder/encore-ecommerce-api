import { db } from "../../database";
import { CategoryResponse, CreateCategoryDTO } from "./types";

const CategoryService = {
  create: async (data: CreateCategoryDTO): Promise<CategoryResponse> => {
    const category = await db.category.create({ data });
    return {
      success: true,
      result: category,
    };
  },

  findOne: async (id: string): Promise<CategoryResponse> => {
    const category = await db.category.findFirst({ where: { id } });
    if (!category) {
      return {
        success: false,
        message: "Category not found",
      };
    }
    return {
      success: true,
      result: category,
    };
  },
  findAll: async (): Promise<CategoryResponse> => {
    const categories = await db.category.findMany();
    return {
      success: true,
      result: categories,
    };
  },
};

export default CategoryService;
