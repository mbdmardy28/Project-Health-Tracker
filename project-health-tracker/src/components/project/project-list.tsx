import * as React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination
} from "@material-ui/core";
import { StatusReportQuery } from "../../common/model/StatusReportQuery";


type Props = {
  reports: StatusReportQuery[]
}

const ProjectList: React.FC<Props> = props => {

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
            {props.reports
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, key)=> {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={key}
                  >
                    {columns
                      .filter(x => x.isDisplay == true)
                        .map(column => {
                          
                          console.log("column", column)
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {
                                  column.id === "overallStatus" 
                                    ? (
                                    <span
                                      className={`${getColorStatus(row.overallStatus)}-circle`}
                                    ></span>
                                    ) : ""
                                }
                                {
                                  (column.id === "weekEnding")? row.weekEnding : ""  
                                }
                                {
                                  (column.id === "user")? row.user : ""
                                }
                                {
                                  (column.id === "project")? row.project.projectName : ""
                                     
                                }
                                <br/>
                                 <sub className="subText">
                                  {
                                  column.id === "project"
                                  ? row.subTeam
                                  : column.id === "client"
                                  ? row.client.clientName
                                    : ""
                                }
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
        count={props.reports.length}
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

interface Column {
  id:
    | "project"
    | "client"
    | "weekEnding"
    | "overallStatus"
    | "subTeam"
    | "user";
  label: string;
  minWidth?: number;
  isDisplay: boolean;
  align?: "center"| "right";
  format?: (value: Date) => string;
}

const columns: Column[] = [
  {
    id: "project",
    label: "Project\u00a0Name",
    minWidth: 200,
    isDisplay: true
  },
  { id: "client", label: "Client", minWidth: 100, isDisplay: true },
 {
    id: "weekEnding",
    label: "Week\u00a0Ending",
    minWidth: 120,
    align: "center",
    isDisplay: true,
    format: (value: Date) => value.toString()
  },
  {
    id: "user",
    label: "Offshore\u00a0Team\u00a0Lead",
    minWidth: 200,
    isDisplay: true
  },
  {
    id: "overallStatus",
    label: "Overall Status",
    minWidth: 80,
    align: "center",
    isDisplay: true
  }
];

const getColorStatus = (status:string) => {
  switch (status) {
    case "Good":
        return "green"
    case "Fair":
        return "yellow"
    case "Poor":
        return "red"
    default:
      return "";
  }
}
