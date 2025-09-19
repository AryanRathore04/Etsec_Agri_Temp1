import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/(^-|-$)/g, "");
}

function pickImageForProduct(name: string) {
  const n = name.toLowerCase();
  if (n.includes("organic") || n.includes("fertilizer") || n.includes("manure"))
    return "/organic-fertilizer-bag-product.jpg";
  if (n.includes("seed") || n.includes("watermelon") || n.includes("corn"))
    return "/perfect-start-seed-treatment-product.jpg";
  if (n.includes("booster") || n.includes("plant"))
    return "/organic-plant-booster-product--sustainable-farming.jpg";
  if (
    n.includes("protection") ||
    n.includes("spray") ||
    n.includes("pesticide")
  )
    return "/plant-protection-spray-bottle--organic-pest-contro.jpg";
  if (n.includes("drip") || n.includes("irrigation") || n.includes("sprinkler"))
    return "/modern-agricultural-greenhouse-structure--sustaina.jpg";
  if (
    n.includes("tractor") ||
    n.includes("harvester") ||
    n.includes("equipment")
  )
    return "/farmers-working-together-in-field--agricultural-te.jpg";
  if (n.includes("drone") || n.includes("digital") || n.includes("software"))
    return "/professional-agricultural-scientist-portrait.jpg";
  return "/placeholder.jpg";
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // Find the product in products.json across categories
  const flatProducts: any[] = [];
  (productsData as any).product_categories.forEach((c: any) => {
    c.products.forEach((p: any) => flatProducts.push(p));
  });

  const product = flatProducts.find((p) => slugify(p.product_name) === slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          {!product ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground">
                Product not found
              </h1>
              <p className="text-muted-foreground mt-2">
                We couldn't find the product you're looking for.
              </p>
              <Link
                href="/products"
                className="inline-block mt-4 text-primary underline"
              >
                Back to products
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-card rounded-lg p-6">
                <div className="h-72 bg-muted rounded-md overflow-hidden mb-4">
                  <Image
                    src={pickImageForProduct(product.product_name)}
                    alt={product.product_name}
                    width={900}
                    height={540}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {product.product_name}
                </h1>
                <div className="text-xl font-semibold text-primary mb-4">
                  {product.details?.price ?? ""}
                </div>
                <p className="text-muted-foreground">
                  {product.details?.full_description ??
                    product.short_description}
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Details
                </h2>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {product.details &&
                    Object.entries(product.details).map(([k, v]) => (
                      <li key={k}>
                        • {k.replace(/_/g, " ")}: {String(v)}
                      </li>
                    ))}
                </ul>
                <div className="mt-6">
                  <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
