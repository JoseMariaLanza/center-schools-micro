import {useContext} from "react";
import WebGroups from "./Web/Groups/Index";
import MobileGroups from "./Mobile/Groups/Index";
import {GroupsContext} from "@/app/shared/utils/contexts";

interface Props {
	popupContainer: HTMLElement | null;
	render?: string;
}

const Groups = ({popupContainer, render}: Props) => {
	const groups = useContext(GroupsContext);

	return render === "mobile" ? (
		<MobileGroups groups={groups} popupContainer={popupContainer} />
	) : (
		<WebGroups groups={groups} popupContainer={popupContainer} />
	);
};

export default Groups;
