import * as React from "react";
import {
  makeStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination
} from "@material-ui/core";

interface Column {
  id:
    | "ProjectName"
    | "Client"
    | "Team"
    | "Location"
    | "WeekEnding"
    | "OffshoreTeamLead"
    | "Status";
  label: string;
  minWidth?: number;
  isDisplay: boolean;
  align?: "right";
  format?: (value: Date) => string;
}

const columns: Column[] = [
  {
    id: "ProjectName",
    label: "Project\u00a0Name",
    minWidth: 200,
    isDisplay: true
  },
  { id: "Client", label: "Client", minWidth: 100, isDisplay: true },
  { id: "Team", label: "Team", minWidth: 100, isDisplay: false },
  { id: "Location", label: "Location", minWidth: 100, isDisplay: false },
  {
    id: "WeekEnding",
    label: "Week\u00a0Ending",
    minWidth: 120,
    align: "right",
    isDisplay: true,
    format: (value: Date) => value.toString()
  },
  {
    id: "OffshoreTeamLead",
    label: "Offhore\u00a0Team\u00a0Lead",
    minWidth: 120,
    align: "right",
    isDisplay: true
  },
  {
    id: "Status",
    label: "Overall Status",
    minWidth: 120,
    align: "right",
    isDisplay: true
  }
];

interface Data {
  ProjectName: string;
  Client: string;
  Team: string;
  Location: string;
  WeekEnding: Date;
  OffshoreTeamLead: string;
  Status: string;
}

function createData(
  ProjectName: string,
  Client: string,
  Team: string,
  Location: string,
  WeekEnding: Date,
  OffshoreTeamLead: string,
  Status: string
): Data {
  return {
    ProjectName,
    Client,
    Team,
    Location,
    WeekEnding,
    OffshoreTeamLead,
    Status
  };
}
let date: Date = new Date();
const rows = [
  createData(
    "Taxation",
    "Ernest & Young",
    "Team Blue",
    "Chicago",
    date,
    "Mark Coro",
    "Red"
  ),
  createData(
    "Realty",
    "Google",
    "Team Blue",
    "Chicago",
    date,
    "Mark Coro",
    "Yellow"
  ),
  createData("CRM", "BCG", "Team Blue", "Chicago", date, "Mark Coro", "Red"),
  createData(
    "Backlog",
    "Merchants Fleet",
    "Team Blue",
    "Chicago",
    date,
    "Mily Opena",
    "Green"
  )
];

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

const ProjectList: React.FC = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      <div className="tableWrapper">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns
                .filter(x => x.isDisplay == true)
                .map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.Client}
                  >
                    {columns
                      .filter(x => x.isDisplay == true)
                      .map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "object" ? (
                              column.format(value)
                            ) : column.id === "Status" ? (
                              <span
                                className={`${value
                                  .toString()
                                  .toLowerCase()}-circle`}
                              ></span>
                            ) : (
                              value
                            )}
                            <br />
                            <sub className="subText">
                              {column.id == "ProjectName"
                                ? row["Team"]
                                : column.id == "Client"
                                ? row["Location"]
                                : ""}
                            </sub>
                          </TableCell>
                        );
                      })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "previous page"
        }}
        nextIconButtonProps={{
          "aria-label": "next page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};
export default ProjectList;
