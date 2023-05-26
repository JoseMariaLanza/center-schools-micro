import {NavigationItem} from "@/app/shared/utils/types";
import Link from "next/link";
import {Dispatch, FC, MouseEvent, SetStateAction} from "react";

interface Props {
	item: NavigationItem;
	className: string;
	setSelected: Dispatch<SetStateAction<NavigationItem>>;
}

const ActiveLink: FC<Props> = ({item, className, setSelected}) => {
	// const performSelect = (
	// 	e: MouseEvent<HTMLAnchorElement, MouseEvent>,
	// 	item: NavigationItem,
	// ) => {
	// 	console.log("EVENT: ", e);
	// 	setSelected(item);
	// };

	return (
		<Link
			href={item.href}
			onClick={() => setSelected(item)}
			// onClick={(e) => performSelect(e, item)}
			className={className}
			aria-current={item.current ? "page" : undefined}
		>
			{item.name}
		</Link>
	);
};

export default ActiveLink;
