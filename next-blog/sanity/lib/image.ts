import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityClient } from './client';

// Create an image URL builder with the Sanity client
const builder = imageUrlBuilder(sanityClient);

// Default placeholder image
const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400?text=No+Image';

/**
 * Helper function to generate image URLs from Sanity image references
 * @param source Sanity image reference object
 * @returns An image URL builder that can be further customized
 */
export function urlFor(source: SanityImageSource | null | undefined) {
  // Return a placeholder image if source is null or undefined
  if (!source) {
    return {
      url: () => PLACEHOLDER_IMAGE,
      width: () => 600,
      height: () => 400,
      format: () => ({ url: () => PLACEHOLDER_IMAGE }),
      auto: () => ({ url: () => PLACEHOLDER_IMAGE }),
    };
  }
  
  try {
    // Return the Sanity image URL builder for the source
    return builder.image(source);
  } catch (error) {
    console.error("Error generating image URL:", error);
    // Return placeholder if there's any error processing the image
    return {
      url: () => PLACEHOLDER_IMAGE,
      width: () => 600,
      height: () => 400,
      format: () => ({ url: () => PLACEHOLDER_IMAGE }),
      auto: () => ({ url: () => PLACEHOLDER_IMAGE }),
    };
  }
}
