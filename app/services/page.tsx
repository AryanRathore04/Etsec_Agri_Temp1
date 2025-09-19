import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Comprehensive agricultural solutions designed to maximize yield, minimize environmental impact, and ensure
              sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <CardTitle>Crop Consulting</CardTitle>
                <CardDescription>
                  Expert guidance on crop selection, rotation, and optimization for your specific climate and soil
                  conditions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Soil analysis and testing</li>
                  <li>• Crop rotation planning</li>
                  <li>• Yield optimization strategies</li>
                  <li>• Pest and disease management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚜</span>
                </div>
                <CardTitle>Precision Agriculture</CardTitle>
                <CardDescription>
                  Advanced technology solutions including GPS guidance, variable rate application, and field mapping.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• GPS-guided machinery</li>
                  <li>• Variable rate technology</li>
                  <li>• Field mapping and analysis</li>
                  <li>• Drone monitoring services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💧</span>
                </div>
                <CardTitle>Water Management</CardTitle>
                <CardDescription>
                  Efficient irrigation systems and water conservation strategies to optimize water usage and reduce
                  costs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Smart irrigation systems</li>
                  <li>• Water usage monitoring</li>
                  <li>• Drainage solutions</li>
                  <li>• Conservation planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔬</span>
                </div>
                <CardTitle>Research & Development</CardTitle>
                <CardDescription>
                  Cutting-edge agricultural research to develop new varieties, techniques, and sustainable practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Seed development programs</li>
                  <li>• Sustainable practice research</li>
                  <li>• Climate adaptation studies</li>
                  <li>• Innovation partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription>
                  Comprehensive data analysis and insights to make informed decisions about your farming operations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Yield prediction models</li>
                  <li>• Market analysis reports</li>
                  <li>• Performance tracking</li>
                  <li>• Risk assessment tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <CardTitle>Training & Education</CardTitle>
                <CardDescription>
                  Comprehensive training programs to help farmers adopt new technologies and sustainable practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hands-on workshops</li>
                  <li>• Online learning platforms</li>
                  <li>• Certification programs</li>
                  <li>• Ongoing support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to implementing sustainable agricultural solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Assessment</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive evaluation of your current farming practices and challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Planning</h3>
              <p className="text-muted-foreground text-sm">
                Custom solution design based on your specific needs and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Implementation</h3>
              <p className="text-muted-foreground text-sm">
                Careful rollout of solutions with hands-on support and training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Optimization</h3>
              <p className="text-muted-foreground text-sm">Ongoing monitoring and refinement to maximize results.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
