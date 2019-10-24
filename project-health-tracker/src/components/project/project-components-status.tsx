import * as React from "react";
import { Grid } from "@material-ui/core";

enum Status {
    GOOD = 'green',
    FAIR = 'yellow',
    POOR = 'red'
}

type ProjectComponent = {
    name: string;
    status: Status;
}

const ProjectComponentsStatus = (props: any) => {
    return (
        <Grid container spacing={1} style={{ padding: '30px 0px'}}>
            <Grid container item xs={10} spacing={2} alignItems="center">
                {props.projectComponents.map((val: ProjectComponent) => (
                    <Grid item key={val.name} >
                        <span style={{ padding: '5px 20px',
                                        background: val.status, 
                                        color: val.status === Status.FAIR ? 'black' : 'white'
                                    }}>{val.name}</span>
    
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default ProjectComponentsStatus;