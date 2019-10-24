import * as React from "react";
import {
    Box,
    Typography,
  } from "@material-ui/core";
import ProjectComponentsStatus from "./project-components-status";
import { ProjectStatusDetail } from "../../common";
import ProjectTagList from "./project-tag-list";



const ProjectStatusDetails = (props: ProjectStatusDetail) => {
    const [ProjectTags, setProjectTags] = React.useState(props.tags);
    
    const statusCss = {
        background: props.status, 
        display: 'inline-block',
        borderRadius: '50%',
        width: '15px',
        height: '15px',
        marginRight: '10px'
      };

    const divContainerCss = {
        padding: '50px'
    };

    
    return (
        <div style={divContainerCss}>
            <Typography variant="h5">
                <Box fontWeight="fontWeightBold">
                    <span style={statusCss}></span>
                    { props.projectName }
                </Box>
            </Typography>
            <Typography gutterBottom color="textSecondary" display="inline" variant="subtitle1">
                {`${props.client} | ${props.team} | ${props.offshoreTeamLead}`}
            </Typography>
            <Typography display="block" variant="body1">
                <br/> 
                {props.executiveSummary}
            </Typography>
            <ProjectComponentsStatus projectComponents={props.projectComponents} />
            <Box style={{marginBottom:'20px'}}>
                <Typography variant="h6" color="textSecondary">
                    <Box fontWeight="fontWeightBold"> 
                        Issues
                    </Box>
                </Typography>
                <Typography display="block" variant="body1">
                    {props.issues}
                </Typography>
            </Box>
            <Box style={{marginBottom:'20px'}}>
                <Typography variant="h6" color="textSecondary">
                    <Box fontWeight="fontWeightBold"> 
                        Risks
                    </Box>
                </Typography>
                <Typography display="block" variant="body1">
                    {props.risks}
                </Typography>
            </Box>
            <Box style={{marginBottom:'20px'}}>
                <Typography display="block" variant="body1">
                    Mitigation: {props.mitigation}
                </Typography>
            </Box>
            <Box style={{marginBottom:'20px'}}>
                <Typography display="block" variant="body1">
                    Owner: {props.owner}
                </Typography>
            </Box>
            { <ProjectTagList projectTags={ProjectTags} setProjectTags={setProjectTags} /> }
        </div>
    );
}

export default ProjectStatusDetails;