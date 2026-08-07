export interface BlogPost {
  slug: string;
  date: string;
  title: string;
  image: string;
  categories: BlogCategory[];
}

export type BlogCategory =
  | "Facts That Can Save You Money"
  | "Fun Facts"
  | "HAYS: Healthy Choices"
  | "Interview Exclusives"
  | "Products We L♡ve";

export interface NavLink {
  label: string;
  href: string;
}
