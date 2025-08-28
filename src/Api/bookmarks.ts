// src/api/bookmarks.ts
import { supabase } from "../Supabase/supabaseClient";

export async function getMyBookmarks(): Promise<string[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];
  const { data, error } = await supabase
    .from("bookmarks")
    .select("movie_id")
    .eq("user_id", user.id);
  if (error) throw error;
  return (data ?? []).map((r) => String((r as any).movie_id));
}

export async function toggleBookmark(
  movieId: string
): Promise<"added" | "removed"> {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { data: existing, error: selErr } = await supabase
    .from("bookmarks")
    .select("id")
    .eq("user_id", user.id)
    .eq("movie_id", movieId)
    .maybeSingle();

  if (selErr && selErr.code !== "PGRST116") throw selErr;

  if (existing?.id) {
    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("id", existing.id);
    if (error) throw error;
    return "removed";
  } else {
    const { error } = await supabase
      .from("bookmarks")
      .insert({ user_id: user.id, movie_id: movieId });
    if (error) throw error;
    return "added";
  }
}
