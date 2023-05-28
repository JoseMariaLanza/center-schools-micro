export type NavigationItem = {
	id: number;
	name: string;
	label: string;
	href: string;
	current: boolean;
};

export type GroupItem = {
	id: number;
	name: "string";
	groupList: GroupListItem[];
	sections: Section[];
	selected: boolean;
};

export type GroupListItem = {
	id: number;
	name: string;
	href: string;
	imageSrc: string;
	imageAlt: string;
	subgroupList: [] | null;
};

export type Section = {
	id: number;
	name: string;
	items: NavigationItem[];
};
