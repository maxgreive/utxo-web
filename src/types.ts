export interface CommonFrontmatter {
	title?: string,
	reference?: string,
	description?: string,
	image?: string,
	previewImage?: string,
	canonicalURL?: string,
	file?: string,
	collection?: "pages" | "blog" | "services",
	noindex?: boolean
}
