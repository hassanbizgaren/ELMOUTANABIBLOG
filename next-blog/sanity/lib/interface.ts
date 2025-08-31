import { Any } from "next-sanity";

export interface SimpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  imageTitle: Any,
}