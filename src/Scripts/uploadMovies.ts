import { createClient } from "@supabase/supabase-js";
import { data } from "../MoviesData/dataMovies";

const supabase = createClient(
  "https://vihdejdhouasksfmldlv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpaGRlamRob3Vhc2tzZm1sZGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyODcwNTAsImV4cCI6MjA2Mzg2MzA1MH0._3z56pwXSXSEU9icEKrbavVwwqxKwVUi771SHtz7SWQ"
);

const uploadToTable = async (tableName: string, movies: typeof data) => {
  console.log(`Brisem postojece podatke iz tabele ${tableName}...`);
  await supabase.from(tableName).delete().neq("id", "");

  for (const movie of movies) {
    const { error } = await supabase
      .from(tableName)
      .upsert([movie], { onConflict: "id" });

    if (error) {
      console.log(`${movie.title} nije dodat u ${tableName}`, error.message);
    } else {
      console.log(`Dodat film u ${tableName}: ${movie.title}`);
    }
  }
};

export const uploadMovies = async () => {
  await uploadToTable("movies", data);
};

export const uploadMoviesForSlider = async () => {
  await uploadToTable("tranding_movies", data);
};
