import { supabase } from "../config/supabase.js";

export const ProductRepository = {
  async findAll() {
    const { data, error } = await supabase.from("product").select();
    return { data, error };
  },

  async findById(id) {
    const { data, error } = await supabase
      .from("product")
      .select()
      .eq("id", id);
    return { data, error };
  },

  async create(productData) {
    const { data, error } = await supabase
      .from("product")
      .insert(productData);
    return { data, error };
  },

  async update(id, productData) {
    const { data, error } = await supabase
      .from("product")
      .update(productData)
      .eq("id", id)
      .select();
    return { data, error };
  },

  async delete(id) {
    const { data, error } = await supabase
      .from("product")
      .delete()
      .eq("id", id)
      .select();
    return { data, error };
  },
};
