import {
	createTheme,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	ThemeProvider,
} from "@mui/material";

declare module "@mui/material/styles" {
	interface Theme {
		typography: {
			fontFamily: string[];
		};
	}
}




const UsedDrugsTable = ({ className = "", data : rows = [] }) => {

	/*function createData(name, details, form, date) {
		return { name, form, details, date };
	}

	const rows = [
		createData("Apo-Ciproflux", "500mg, Apotex industries, twice daily", "Syrup", "12-07-2023"),
		createData("Acetamonophen", "500mg, Apotex industries, twice daily", "Capsule", "12-07-2023"),
		createData("Amoxicillin", "500mg, Apotex industries, twice daily", "Intravenous", "12-07-2023"),
	];*/

	const MuiTheme = createTheme({
		typography: {
			// color: '#ffffff',

			fontFamily: ["var(--outfit)", "Outfit"].join(","),
		},
	});

	return (
		<div className={`${className}`}>
			<ThemeProvider theme={MuiTheme}>
				{" "}
				{/*MUI Theme */}
				<TableContainer>
					<Table
						className="text-gray-200 "
						sx={{ minWidth: 650, color: "#ffffff" }}
						aria-label="simple table">
						<TableHead>
							<TableRow className="bg-bg-50 dark:bg-[rgba(141,141,141,0.1)]">
								<TableCell
									className="dark:text-white font-outfit w-[20%]"
									sx={{
										borderLeft: 1,
										borderTop: 1,
										borderColor: "rgba(141,141,141,0.28)",
									}}>
									Medication Name
								</TableCell>
								<TableCell
									className="dark:text-white font-outfit"
									sx={{ borderTop: 1, borderColor: "rgba(141,141,141,0.28)" }}>
									Medication Type
								</TableCell>
								<TableCell
									className="dark:text-white font-outfit w-[40%]"
									sx={{
										borderTop: 1,
										borderColor: "rgba(141,141,141,0.28)",
									}}>
									Medication Details
								</TableCell>
								<TableCell
									className="dark:text-white font-outfit"
									sx={{
										borderRight: 1,
										borderTop: 1,
										borderColor: "rgba(141,141,141,0.28)",
									}}>
									Date Admnistered
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.name}
									className="border-0"
									sx={{
										border: 0,
										borderColor: "red",
									}}>
									<TableCell
										className="text-gray-800 dark:text-white"
										component="th"
										scope="row"
										sx={{ borderColor: "rgba(141,141,141,0.28)" }}>
										{row.name}
									</TableCell>
									<TableCell
										className="text-gray-800 dark:text-white capitalize"
										sx={{ borderColor: "rgba(141,141,141,0.28)" }}>
										{row.form}
									</TableCell>
									<TableCell
										className="text-gray-800 dark:text-white capitalize w-[40%]"
										sx={{ borderColor: "rgba(141,141,141,0.28)" }}>
										{row.details}
									</TableCell>
									<TableCell
										className="text-gray-800 dark:text-white capitalize"
										sx={{ borderColor: "rgba(141,141,141,0.28)" }}>
										{row.date}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</ThemeProvider>
		</div>
	);
};

export default UsedDrugsTable;
