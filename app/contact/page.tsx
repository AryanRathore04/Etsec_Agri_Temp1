import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">Contact Us</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Ready to transform your farming practices? Get in touch with our team of agricultural experts and discover
              how we can help you grow sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Farm Name</Label>
                    <Input id="company" placeholder="Green Valley Farms" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your farming needs and how we can assist you..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you succeed. Whether you're a small family farm or a large agricultural operation,
                  our team is ready to provide the support and solutions you need.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Agriculture Drive
                      <br />
                      Green Valley, CA 95123
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +1 (555) 123-4567
                      <br />
                      Mon-Fri: 8:00 AM - 6:00 PM PST
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@evergreen-ag.com
                      <br />
                      support@evergreen-ag.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Global Offices</h3>
                    <p className="text-muted-foreground">
                      40+ countries worldwide
                      <br />
                      Find your local representative
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    📚 Knowledge Base
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    💬 Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    📅 Schedule a Consultation
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    🎓 Training Resources
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Headquarters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of California's agricultural region, our headquarters features demonstration farms
              and research facilities.
            </p>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🗺️</span>
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">123 Agriculture Drive, Green Valley, CA 95123</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
