import { createClient } from "@supabase/supabase-js";
import { data } from "../src/data/dataMovies";
import { singleMovie } from "../src/types/movieTypes";

const supabase = createClient();
//   "https://ovde ide moj projekat.supabase.co",
//   "YOUR_ANON_KEY" // ovde cu da upacim anon key

const uploadMovies = async () => {
  try {
    await supabase.from("movies").delete().neq("id", "");
    for (const movie of data) {
      const { error } = await supabase.from("movies").insert([movie]);
      if (error) {
        console.error(`Greška pri unosu filma ${movie.title}:`, error.message);
      } else {
        console.log(`✅ Dodat film: ${movie.title}`);
      }
    }
  } catch (err) {
    console.error("🔥 Došlo je do greške:", err);
  }
};

uploadMovies();
