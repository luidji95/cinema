// Vraća žanrove kao niz čistih stringova, bez [] i "".
// Podržava: string[], JSON string '["Action","Drama"]', ili "Action, Drama".
export function normalizeGenre(genre: unknown): string[] {
  if (!genre) return [];
  if (Array.isArray(genre)) {
    return genre
      .map(String)
      .map((g) => g.trim())
      .filter(Boolean);
  }
  if (typeof genre === "string") {
    const s = genre.trim();
    // pokušaj JSON.parse ako liči na niz
    if (s.startsWith("[") && s.endsWith("]")) {
      try {
        const arr = JSON.parse(s);
        if (Array.isArray(arr)) {
          return arr
            .map(String)
            .map((g) => g.trim())
            .filter(Boolean);
        }
      } catch {
        /* padamo na ispod */
      }
    }
    // fallback: "Action, Drama"
    return s
      .split(",")
      .map((g) => g.replace(/["\[\]]/g, "").trim())
      .filter(Boolean);
  }
  return [];
}
