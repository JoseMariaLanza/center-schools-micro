import {NavigationItem} from "@/app/shared/utils/types";

export const navigation = {
	pages: [
		{id: 1, name: "Home", href: "/", selected: true},
		{id: 2, name: "History", href: "/about", selected: false},
		{id: 3, name: "News", href: "/news", selected: false},
		{id: 4, name: "Contact", href: "/contact", selected: false},
	] as unknown as NavigationItem[],
	groups: [
		{
			id: "groups",
			name: "Schools",
			groupList: [
				{
					name: "Center Spartans",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
					imageAlt:
						"Drawstring top with elastic loop closure and textured interior padding.",
				},
				{
					name: "Other school",
					href: "#",
					imageSrc:
						"https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
					imageAlt:
						"Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
				},
			],
			sections: [
				{
					id: "byLocation",
					name: "Closer to my location",
					items: [
						{name: "Tops", href: "#"},
						{name: "Pants", href: "#"},
						{name: "Sweaters", href: "#"},
						{name: "T-Shirts", href: "#"},
						{name: "Jackets", href: "#"},
						{name: "Activewear", href: "#"},
						{name: "Browse All", href: "#"},
					],
				},
				{
					id: "by",
					name: "Accessories",
					items: [
						{name: "Watches", href: "#"},
						{name: "Wallets", href: "#"},
						{name: "Bags", href: "#"},
						{name: "Sunglasses", href: "#"},
						{name: "Hats", href: "#"},
						{name: "Belts", href: "#"},
					],
				},
				{
					id: "brands",
					name: "Brands",
					items: [
						{name: "Re-Arranged", href: "#"},
						{name: "Counterfeit", href: "#"},
						{name: "Full Nelson", href: "#"},
						{name: "My Way", href: "#"},
					],
				},
			],
		},
	],
};
