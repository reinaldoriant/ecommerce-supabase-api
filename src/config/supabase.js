import { createClient } from "@supabase/supabase-js";
import { config } from "./env.js";

export const supabase = createClient(config.database.url, config.database.key);
