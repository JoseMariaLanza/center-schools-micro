import {useContext} from "react";
import WebGroups from "./Web/Groups/Index";
import MobileGroups from "./Mobile/Groups/Index";
import {
	NavigationContext,
	RenderMobileContext,
} from "@/app/shared/utils/contexts";

interface Props {
	popupContainer: HTMLElement | null;
}

const Groups = ({popupContainer}: Props) => {
	const renderMobile = useContext(RenderMobileContext);
	const navigation = useContext(NavigationContext);

	return renderMobile ? (
		<MobileGroups groups={navigation.groups} popupContainer={popupContainer} />
	) : (
		<WebGroups groups={navigation.groups} popupContainer={popupContainer} />
	);
};

export default Groups;
