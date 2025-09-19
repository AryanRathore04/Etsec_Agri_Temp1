import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const slug = category;
  const categoryObj = (productsData as any).product_categories.find(
    (c: any) => slugify(c.category_name) === slug
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-6">
            Products — {category.replace(/-/g, " ")}
          </h1>

          {!categoryObj ? (
            <p className="text-muted-foreground">
              No products found for this category.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryObj.products.map((p: any) => {
                const productSlug = slugify(p.product_name);
                const img = pickImageForProduct(p.product_name);
                return (
                  <div
                    key={productSlug}
                    className="bg-card rounded-lg p-4 text-center space-y-4"
                  >
                    <div className="h-40 rounded-md overflow-hidden">
                      <Image
                        src={img}
                        alt={p.product_name}
                        width={400}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-foreground">
                      {p.product_name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {p.short_description}
                    </p>
                    <div className="text-lg font-bold text-primary">
                      {p.details?.price ?? ""}
                    </div>
                    <Link
                      href={`/products/${productSlug}`}
                      className="inline-block"
                    >
                      <button className="mt-2 inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2">
                        View
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
