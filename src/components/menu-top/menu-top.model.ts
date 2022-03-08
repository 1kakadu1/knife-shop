export interface IMenuTopProps {
	container?: boolean;
	rightContent?: JSX.Element;
	links: IMenuLink[];
	catalogMenu?: JSX.Element;
	portal?: boolean;
}

export interface IMenuTopNavProps {
	links: IMenuLink[];
	catalogMenu?: JSX.Element;
	open: boolean;
}

export interface IMenuLink {
	name: string;
	href: string;
}
