
const IMAGE_BASE_URL = "https://firebasestorage.googleapis.com/v0/b/yash-portfolio-79bbe.appspot.com/o/";

export const aboutMeImg = (name, extension = "png") => `${IMAGE_BASE_URL}about-me%2F${name.toString()}.${extension.toString()}?alt=media`

export const advertsThumbnail = (name, extension = "jpg") => `${IMAGE_BASE_URL}adverts%2Fthumbnails%2F${name.toString()}.${extension.toString()}?alt=media`

export const advertsOriginal = (name, extension = "jpg") => `${IMAGE_BASE_URL}adverts%2Foriginal%2F${name.toString()}.${extension.toString()}?alt=media`
