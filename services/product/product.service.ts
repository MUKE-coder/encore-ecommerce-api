import { db } from "../../database";
import { CreateProductDTO, ProductResponse } from "./product.types";

const ProductService = {
  create: async (data: CreateProductDTO): Promise<ProductResponse> => {
    const product = await db.product.create({ data });
    return {
      success: true,
      result: product,
    };
  },

  findOne: async (id: string): Promise<ProductResponse> => {
    const product = await db.product.findFirst({ where: { id } });
    if (!product) {
      return {
        success: false,
        message: "Product not found",
      };
    }
    return {
      success: true,
      result: product,
    };
  },
  findAll: async (): Promise<ProductResponse> => {
    const products = await db.product.findMany();
    return {
      success: true,
      result: products,
    };
  },
  findAllByCategoryId: async (categoryId: string): Promise<ProductResponse> => {
    const products = await db.product.findMany({
      where: {
        categoryId,
      },
    });
    return {
      success: true,
      result: products,
    };
  },
};

export default ProductService;
