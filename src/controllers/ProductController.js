import { ProductRepository } from "../repositories/ProductRepository.js";

export const ProductController = {
  async getAllProducts(req, res, next) {
    try {
      const { data, error } = await ProductRepository.findAll();
      console.log(data);

      if (error) {
        return res.status(400).json(error);
      }

      return res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  },

  async getProductById(req, res, next) {
    try {
      const { data, error } = await ProductRepository.findById(req.params.id);
      console.log(data);

      if (error) {
        return res.status(400).json(error);
      }

      return res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  },

  async createProduct(req, res, next) {
    try {
      console.log(req.body);
      const { data, error } = await ProductRepository.create(req.body);

      if (error) {
        return res.status(400).json(error);
      }

      res.status(201).json(req.body);
    } catch (error) {
      next(error);
    }
  },

  async updateProduct(req, res, next) {
    try {
      console.log(req.params);
      const { data, error } = await ProductRepository.update(
        req.params.id,
        req.body
      );

      if (error) {
        return res.status(400).json(error);
      }

      res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  },

  async deleteProduct(req, res, next) {
    try {
      const { data, error } = await ProductRepository.delete(req.params.id);

      if (error) {
        return res.status(400).json(error);
      }

      return res.send(data);
    } catch (error) {
      next(error);
    }
  },
};
