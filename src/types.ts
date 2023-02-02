interface PostFrontmatter {
	title: string;
	pubDate: string;
	image: {
		url: string;
		alt: string;
	};
	description: string;
	tags: string[];
}

export type { PostFrontmatter };
