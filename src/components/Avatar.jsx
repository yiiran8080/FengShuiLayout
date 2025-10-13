import { useSession } from "next-auth/react";
import { useState } from "react";
import MenuContent from "./MenuContent";
export default function ({ from }) {
	const { data: session } = useSession();
	const [isOpen, setIsOpen] = useState(false);
	const onMenuClick = () => {
		setIsOpen(true);
	};
	// session?.user?.name
	return (
		session?.user?.name && (
			<div>
				<div
					className="w-8 h-8 p-0.5 bg-[#b4b4b4] rounded-full text-center cursor-pointer"
					onClick={onMenuClick}
				>
					<span className="text-xl font-bold text-white">
						{session?.user?.name.slice(0, 1).toUpperCase()}
					</span>
				</div>
				<MenuContent
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					from={from}
				/>
			</div>
		)
	);
}
