import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Share2 } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useSavedProducts } from "@/hooks/useProducts";
import { toast } from "sonner";
import { SignInDialog } from "@/components/SignInDialog";
import { useState } from "react";
import { conditionVariant, conditionLabel, handleImgError } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const { isSaved, toggleSave } = useSavedProducts(user?.id);
  const [signInPromptOpen, setSignInPromptOpen] = useState(false);
  const liked = isSaved(product.id);

  const requireAuth = (action: () => void) => {
    if (!user) {
      setSignInPromptOpen(true);
      return;
    }
    action();
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    requireAuth(() => {
      toggleSave(product.id);
      toast.success(liked ? "Removed from saved" : "Saved!");
    });
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/product/${product.id}`;
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Link copied!");
    }).catch(() => {
      toast.error("Failed to copy link");
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.4 }}
        className="w-full"
      >
        <Link to={`/product/${product.id}`} className="block group">
          <div className="feed-card rounded-xl overflow-hidden border border-border/50 bg-card">
            {/* Image */}
            <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={product.images[0]}
                alt={product.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={handleImgError}
              />

              {/* Badges top-left */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                <Badge variant={conditionVariant[product.condition]} className="text-[10px] px-1.5 py-0">
                  {conditionLabel[product.condition]}
                </Badge>
                {product.era && (
                  <Badge variant="era" className="text-[10px] px-1.5 py-0">{product.era}</Badge>
                )}
              </div>

              {/* Status badge top-right */}
              {product.status === "sold" ? (
                <Badge className="absolute top-2 right-2 bg-foreground text-background text-[10px]">
                  Sold out
                </Badge>
              ) : product.status === "hold" ? (
                <Badge className="absolute top-2 right-2 bg-amber-500 text-white text-[10px]">
                  On hold
                </Badge>
              ) : discount ? (
                <Badge variant="sale" className="absolute top-2 right-2 text-[10px]">
                  -{discount}%
                </Badge>
              ) : null}

              {/* Quick actions on hover */}
              <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ top: product.status === "sold" || product.status === "hold" || discount ? "2rem" : "0.5rem" }}>
                <Button variant="glass" size="icon" className="w-7 h-7" onClick={handleSave}>
                  <Heart className={`w-3.5 h-3.5 ${liked ? "fill-destructive text-destructive" : ""}`} />
                </Button>
                <Button variant="glass" size="icon" className="w-7 h-7" onClick={handleShare}>
                  <Share2 className="w-3.5 h-3.5" />
                </Button>
              </div>

            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="font-medium text-xs sm:text-sm leading-tight line-clamp-2 mb-1.5 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-baseline gap-1 min-w-0">
                  <span className="font-bold text-sm sm:text-base">{"\u20B9"}{product.price.toLocaleString()}</span>
                  {product.originalPrice && product.status !== "sold" && (
                    <span className="text-[10px] sm:text-xs text-muted-foreground line-through truncate">
                      {"\u20B9"}{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full shrink-0">
                  {product.size}
                </span>
              </div>

              {/* Action buttons: Love, Know more, Share */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 w-7 p-0 shrink-0"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSave(e);
                  }}
                  title={liked ? "Remove from saved" : "Save"}
                >
                  <Heart className={`w-3.5 h-3.5 ${liked ? "fill-destructive text-destructive" : ""}`} />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 flex-1 min-w-0 text-[10px] px-2"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(`/product/${product.id}`);
                  }}
                >
                  Know more
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 w-7 p-0 shrink-0"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleShare(e);
                  }}
                  title="Share"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      <SignInDialog
        open={signInPromptOpen}
        onOpenChange={setSignInPromptOpen}
        onSignIn={signInWithGoogle}
      />
    </>
  );
}
