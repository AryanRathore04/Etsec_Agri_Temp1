import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">
              Agricultural Products
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Premium agricultural products designed to enhance crop yield,
              improve soil health, and support sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular and effective agricultural solutions trusted by
              farmers worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img
                  src="/organic-fertilizer-bag-product.jpg"
                  alt="Ultra Organic Fertilizer"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge className="mb-2">Best Seller</Badge>
                <CardTitle className="text-lg">Ultra Organic</CardTitle>
                <CardDescription>
                  Premium organic fertilizer blend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p>• 100% organic composition</p>
                  <p>• Slow-release nutrients</p>
                  <p>• Improves soil structure</p>
                  <p>• 25kg bags available</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$49</span>
                  <Link
                    href={`/products/${"Ultra Organic"
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/gi, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    <Button size="sm">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img
                  src="/perfect-start-seed-treatment-product.jpg"
                  alt="Perfect Start Seed Treatment"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge variant="secondary" className="mb-2">
                  New
                </Badge>
                <CardTitle className="text-lg">Perfect Start</CardTitle>
                <CardDescription>
                  Advanced seed treatment solution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p>• Enhanced germination</p>
                  <p>• Disease protection</p>
                  <p>• Stress tolerance</p>
                  <p>• 5L containers</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$89</span>
                  <Link
                    href={`/products/${"Perfect Start"
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/gi, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    <Button size="sm">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img
                  src="/organic-booster-plant-growth-product.jpg"
                  alt="Organic Booster"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge variant="outline" className="mb-2">
                  Eco-Friendly
                </Badge>
                <CardTitle className="text-lg">Organic Booster</CardTitle>
                <CardDescription>Natural plant growth enhancer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p>• Accelerated growth</p>
                  <p>• Natural ingredients</p>
                  <p>• Safe for all crops</p>
                  <p>• 10L containers</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$65</span>
                  <Link
                    href={`/products/${"Organic Booster"
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/gi, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    <Button size="sm">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img
                  src="/protection-shield-crop-protection-product.jpg"
                  alt="Protection Shield"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Badge variant="destructive" className="mb-2">
                  Professional
                </Badge>
                <CardTitle className="text-lg">Protection Shield</CardTitle>
                <CardDescription>Comprehensive crop protection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p>• Multi-pest control</p>
                  <p>• Long-lasting protection</p>
                  <p>• Weather resistant</p>
                  <p>• 20L containers</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">$125</span>
                  <Link
                    href={`/products/${"Protection Shield"
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/gi, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    <Button size="sm">Learn More</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of agricultural solutions
              organized by category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Fertilizers & Nutrients
              </h3>
              <p className="text-muted-foreground mb-4">
                Complete range of organic and synthetic fertilizers to nourish
                your crops.
              </p>
              <Link
                href={`/products/category/${"Fertilizers & Nutrients"
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/gi, "-")
                  .replace(/(^-|-$)/g, "")}`}
              >
                <Button variant="outline" size="sm">
                  View Products
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Crop Protection
              </h3>
              <p className="text-muted-foreground mb-4">
                Advanced solutions for pest control, disease management, and
                crop health.
              </p>
              <Link
                href={`/products/category/${"Crop Protection"
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/gi, "-")
                  .replace(/(^-|-$)/g, "")}`}
              >
                <Button variant="outline" size="sm">
                  View Products
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Seeds & Varieties
              </h3>
              <p className="text-muted-foreground mb-4">
                High-quality seeds and plant varieties optimized for different
                climates.
              </p>
              <Link
                href={`/products/category/${"Seeds & Varieties"
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/gi, "-")
                  .replace(/(^-|-$)/g, "")}`}
              >
                <Button variant="outline" size="sm">
                  View Products
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚿</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Irrigation Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                Smart irrigation systems and water management technologies.
              </p>
              <Link
                href={`/products/category/${"Irrigation Solutions"
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/gi, "-")
                  .replace(/(^-|-$)/g, "")}`}
              >
                <Button variant="outline" size="sm">
                  View Products
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Farm Equipment
              </h3>
              <p className="text-muted-foreground mb-4">
                Modern farming tools and equipment for efficient operations.
              </p>
              <Link
                href={`/products/category/${"Farm Equipment"
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/gi, "-")
                  .replace(/(^-|-$)/g, "")}`}
              >
                <Button variant="outline" size="sm">
                  View Products
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Digital Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                Software and digital tools for precision agriculture and farm
                management.
              </p>
              <Link
                href={`/products/category/${"Digital Solutions"
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/gi, "-")
                  .replace(/(^-|-$)/g, "")}`}
              >
                <Button variant="outline" size="sm">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
