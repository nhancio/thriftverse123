import type { Product } from "@/types/product";

export const PLACEHOLDER_IMG = "/images/placeholder-product.svg";
export const LOGO_IMG = "/images/logo.png";
export const MAX_UPLOAD_SIZE_MB = 10;
export const MAX_UPLOAD_SIZE_BYTES = MAX_UPLOAD_SIZE_MB * 1024 * 1024;

export const conditionVariant: Record<Product["condition"], string> = {
  new: "condition-new",
  "new-with-tags": "condition-new-with-tags",
  "like-new": "condition-like-new",
  "gently-used": "condition-gently-used",
  worn: "condition-worn",
} as const;

export const conditionLabel: Record<Product["condition"], string> = {
  new: "New",
  "new-with-tags": "New with tags",
  "like-new": "Like New",
  "gently-used": "Gently Used",
  worn: "Well Loved",
} as const;

/** Safe image error handler — sets fallback once to avoid infinite loops */
export function handleImgError(
  e: React.SyntheticEvent<HTMLImageElement>,
  fallback: string = PLACEHOLDER_IMG
) {
  const t = e.currentTarget;
  if (!t.dataset.fallback) {
    t.dataset.fallback = "1";
    t.src = fallback;
  }
}
