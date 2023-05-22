import {NavigationItem} from "@/app/shared/utils/types";
import Link from "next/link";
import {Dispatch, FC, SetStateAction} from "react";

interface Props {
	item: NavigationItem;
	defaultClasses: string;
	classNames: (onSelectionClasses: string, baseClasses: string) => {};
	selected: number;
	setSelected: Dispatch<SetStateAction<number>>;
}

const ActiveLink: FC<Props> = ({
	item,
	defaultClasses = "",
	classNames,
	selected,
	setSelected,
}) => {
	return (
		<Link
			href={item.href}
			onClick={() => setSelected(item.id)}
			className={
				defaultClasses +
				" " +
				classNames(
					selected === item.id
						? "border-indigo-600 text-indigo-600"
						: "flex items-center border-transparent text-gray-900",
					"flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base text-sm font-medium",
				)
			}
			aria-current={item.current ? "page" : undefined}
		>
			{item.name}
		</Link>
	);
};

export default ActiveLink;
