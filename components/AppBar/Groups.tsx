import {useContext} from "react";
import WebGroups from "./Web/Groups/Index";
import MobileGroups from "./Mobile/Groups/Index";
import {NavigationContext} from "@/app/shared/utils/contexts";

interface Props {
	renderMobile?: boolean;
	popupContainer: HTMLElement | null;
}

const Groups = ({renderMobile, popupContainer}: Props) => {
	const navigation = useContext(NavigationContext);

	return renderMobile ? (
		<MobileGroups groups={navigation.groups} popupContainer={popupContainer} />
	) : (
		<WebGroups groups={navigation.groups} popupContainer={popupContainer} />
	);
};

export default Groups;
