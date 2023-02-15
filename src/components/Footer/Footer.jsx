import React from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Grid container centered stackable columns={3}>
        <Grid.Column>
          <Segment className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae temporibus numquam. Eveniet, consectetur? Aperiam
            voluptatem quis delectus vitae rerum!
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae temporibus numquam. Eveniet, consectetur? Aperiam
            voluptatem quis delectus vitae rerum!
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae temporibus numquam. Eveniet, consectetur? Aperiam
            voluptatem quis delectus vitae rerum!
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}
