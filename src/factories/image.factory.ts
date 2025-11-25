/**
 * Image Factory - Functions that return image/icon/avatar size styles
 */

import { imageSizes, ImageSize, iconSizes, IconSize, avatarSizes, AvatarSize } from '../tokens/scales/images.scale';

/**
 * Get image size style (width and height)
 */
export function getImageSize(size: ImageSize) {
  const dimension = imageSizes[size];
  return { width: dimension, height: dimension };
}

/**
 * Get icon size style (width and height)
 */
export function getIconSize(size: IconSize) {
  const dimension = iconSizes[size];
  return { width: dimension, height: dimension };
}

/**
 * Get avatar size style (width, height, and borderRadius for circle)
 */
export function getAvatarSize(size: AvatarSize) {
  const dimension = avatarSizes[size];
  return {
    width: dimension,
    height: dimension,
    borderRadius: dimension / 2,
  };
}

/**
 * Get raw image dimension value
 */
export function getImageDimension(size: ImageSize): number {
  return imageSizes[size];
}

/**
 * Get raw icon dimension value
 */
export function getIconDimension(size: IconSize): number {
  return iconSizes[size];
}
