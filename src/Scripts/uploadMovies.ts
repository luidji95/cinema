import { createClient } from "@supabase/supabase-js";
import { data } from "../MoviesData/dataMovies";

const supabase = createClient(
  "https://vihdejdhouasksfmldlv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpaGRlamRob3Vhc2tzZm1sZGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyODcwNTAsImV4cCI6MjA2Mzg2MzA1MH0._3z56pwXSXSEU9icEKrbavVwwqxKwVUi771SHtz7SWQ"
);

export const uploadMovies = async () => {
  console.log("Supabase client:", supabase);

  console.log(" Brišem postojeće filmove...");
  await supabase.from("movies").delete().neq("id", "");

  console.log(" Ubacujem filmove...");
  for (const movie of data) {
    const { error } = await supabase
      .from("movies")
      .upsert([movie], { onConflict: "id" });

    if (error) {
      console.error(` ${movie.title} nije dodat:`, error.message);
    } else {
      console.log(` Dodat film: ${movie.title}`);
    }
  }
};
