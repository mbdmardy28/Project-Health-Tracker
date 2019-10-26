import * as React from "react";
import {
    Chip
  } from "@material-ui/core";

  const ProjectTagItem = (props: any) => {
      const deleteTag = () => {
        props.deleteTag(props.tag);
      }
      return (
        <Chip style={{ marginRight: '10px' }}
            label={props.tag}
            onDelete={deleteTag}
        />
      );
  }

  export default ProjectTagItem;