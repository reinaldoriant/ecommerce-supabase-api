import { supabase } from "../config/supabase.js";

const tableName = "product"; 
const idProduct = "id";

export const ProductRepository = {
  async findAll() {
    const { data, error } = await supabase.from(tableName).select();
    return { data, error };
  },

  async findById(id) {
    const { data, error } = await supabase
      .from(tableName)
      .select()
      .eq(idProduct, id);
    return { data, error };
  },

  async create(productData) {
    const { data, error } = await supabase
      .from(tableName)
      .insert(productData);
    return { data, error };
  },

  async update(id, productData) {
    const { data, error } = await supabase
      .from(tableName)
      .update(productData)
      .eq(idProduct, id)
      .select();
    return { data, error };
  },

  async delete(id) {
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .eq(idProduct, id)
      .select();
    return { data, error };
  },
};
