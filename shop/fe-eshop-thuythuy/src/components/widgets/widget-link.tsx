import type { FC } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
interface Props {
	className?: string;
	data: {
		mainIcon: any;
		widgetTitle?: string;
		lists: {
			id: string;
			path?: string;
			title: string;
			icon?: any;
		}[];
	};
}

const WidgetLink: FC<Props> = ({ className, data}) => {
	const { widgetTitle, lists, mainIcon ,} = data;
	const { t } = useTranslation("footer");
	return (
		<div className={`${className}`}>
			<div className="flex justify-center">
				{mainIcon}
			</div>
			<h4 className="text-heading text-sm text-center md:text-base xl:text-lg font-semibold mb-5 2xl:mb-6 3xl:mb-7 ali">
				{t(`${widgetTitle}`)}
			</h4>
			<ul className="text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
				{lists.map((list) => (
					<li
						key={`widget-list--key${list.id}`}
						className="flex justify-center"
					>
						{list.icon && (
							<div className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
								{list.icon}
							</div>
						)}
						<Link href={list.path ? list.path : "#!"}>
							<a className="transition-colors duration-200 hover:text-black">
								{t(`${list.title}`)}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default WidgetLink;
