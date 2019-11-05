import * as React from "react";
import { Box, Typography, TextField } from "@material-ui/core";
import ProjectTagItem from "./ProjectTagItem";
import IntegrationDownshift from "./ProjectTagInput";

const ProjectTagList = (props: any) => {

    const deleteTag = (tag: string) => {
        props.setProjectTags(props.projectTags.filter((t: string) => t !== tag));
    }

    return (
        <Box className="proj-tags" style={{margin:'30px 0px'}}>
            <Typography gutterBottom variant="h6" color="textSecondary">
                <Box fontWeight="fontWeightBold"> 
                    Tags
                </Box>
            </Typography>
            <Box className="tag-list" >
                {Object.entries(props.projectTags).map(([key,val]) => (
                    <ProjectTagItem key={key} deleteTag={deleteTag} tag={val} />                        
                ))}
                <IntegrationDownshift projectTags={props.projectTags} setProjectTags={props.setProjectTags} /> 
            </Box>
        </Box>
    );
}

export default ProjectTagList;