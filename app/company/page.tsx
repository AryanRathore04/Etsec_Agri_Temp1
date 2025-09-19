import { redirect } from "next/navigation";

export default function CompanyRedirectPage() {
  // Redirect users to the unified About page
  redirect("/about");
}
