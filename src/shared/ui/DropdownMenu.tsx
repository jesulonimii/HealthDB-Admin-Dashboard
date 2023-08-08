import React, {useState} from "react";
import {Avatar, Button} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/24/outline";
import CustomButton from "@ui/forms/CustomButton.tsx";

type DropdownMenuProps = {
	className?: string;
	currentItem?: string;
	noItemMessage?: string;
	menuItemWidth?: string;
	selector?: any;
	disabled?: boolean;
	items?: {name: string; value: string}[];
	onClick?: (id: any) => void;
}

function DropdownMenu(props : DropdownMenuProps) {
	const {
		className = "",
		currentItem = "selected Item",
		noItemMessage = "No items",
		menuItemWidth = "100%",
		selector = null,
		disabled = false,
		items = [
			{name: "Item 1", value: "1", icon: ""},
			{name: "Item 2", value: "2", icon: ""},
			{name: "Item 3", value: "3", icon: ""},
		],
		onClick = (id) => {
			console.log(id);
		},
	} = props;

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const setupButton = {
		id: "basic-button",
		// "aria-controls": open ? "basic-menu" : undefined,
		// "aria-haspopup": "true",
		// "aria-expanded": open ? "true" : "",
		onClick: !disabled && handleClick,
	};

	return (
		<>
			{selector ? (
				<button className="w-full" {...setupButton}>
					{selector}
				</button>
			) : (
				<CustomButton
					{...setupButton}
					className={`h-auto rounded-lg bg-gray-700 p-[10px] hover:ring-0 capitalize ${className}`}
					endIcon={Boolean(anchorEl) ? <ChevronUpIcon /> : <ChevronDownIcon />}>
					{currentItem}
				</CustomButton>
			)}

			<Menu
				id="basic-menu"
				className="z-[8000] max-h-[70vh] w-full px-4"
				sx={{pl: 4, py: 1, zIndex: 8000}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				{items.length > 0 ? (
					items.map((item, index) => {
						if (!item.value) {
							item.value = "";
						}

						return (
							<MenuItem
								key={index}
								className={"z-[5000]"}
								sx={{
									zIndex: 5000,
									display: "flex",
									flexGrow: 1,
									justifyBetween: "space-between",
									alignItems: "center",
									width: menuItemWidth,
									flexDirection: "row",
								}}
								onClick={() => {
									onClick(item.value);
									handleClose();
								}}>
								{item?.icon &&
									(typeof item?.icon === "string" ? (
										<Avatar src={item?.icon} sx={{width: 20, height: 20}} className="p-.5 mr-2" />
									) : typeof item?.icon === "object" ? (
										/* (
                                                     <Avatar
                                                         src={item.icon.src}
                                                         sx={{ width: 20, height: 20 }}
                                                         className='mr-2 p-.5 border border-primary'
                                                     />
                                                 )
                                                 :*/ <div className="mr-4 w-4 text-gray-400">{item.icon}</div>
									) : null)}
								{item.name}
							</MenuItem>
						);
					})
				) : (
					<MenuItem onClick={handleClose} className="capitalize">
						{noItemMessage}
					</MenuItem>
				)}
			</Menu>
		</>
	);
}

export default DropdownMenu;
