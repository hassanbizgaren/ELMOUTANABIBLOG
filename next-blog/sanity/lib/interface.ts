
// Define Sanity image reference structure
export interface SanityImageReference {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  // Could include additional fields like hotspot, crop, etc.
}

// Blog card interface with properly typed image field
export interface SimpleBlogCard {
  title: string;
  smalldescription: string; // Match the exact field name from the schema
  currentSlug: string;
  imageTitle: SanityImageReference | null;
}

export interface fullBlog {
    title: string;
    smalldescription: string;
    currentSlug: string;
    content: string;
    imageTitle: any;
}