import { useContext } from "react";
import { FavoritesContext } from "../context/favoritesProvider";

export function FavoriteButton({ id, name, className }: { id: string; name: string, className?: string }) {
  const context = useContext(FavoritesContext);

  if (!context) return null;

  const { isFavorite, toggleFavorite } = context;
  
  return (
    <button
      className={`card-heart ${className} rounded-full bg-purple-500 cursor-pointer`}
      onClick={() => toggleFavorite({ id, name })}
      id={id}
      value={id}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
        <path
          d="M31.587 15.107a5.6 5.6 0 0 0-1.788-1.276 5.57 5.57 0 0 0-6.147 1.065l-.209.211a6 6 0 0 0-.966 1.364 6 6 0 0 0-.965-1.364 5.6 5.6 0 0 0-1.79-1.281 5.57 5.57 0 0 0-6.158 1.07l-.21.211a6.23 6.23 0 0 0-1.687 4.268c0 1.588.604 3.116 1.687 4.267l6.625 6.94a3.425 3.425 0 0 0 4.855.143l.108-.115 6.645-6.968a6.08 6.08 0 0 0 1.746-4.267c0-1.6-.628-3.134-1.746-4.268Z"
          fill={isFavorite(id) ? "var(--text)" : "none"}
          stroke="var(--text)"
          strokeWidth="1.8"
        />
      </svg>
    </button>
  );
}
