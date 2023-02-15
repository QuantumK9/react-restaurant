import React from "react";
import {
  Grid,
  Segment,
  Image,
  List,
  Header,
  Container,
} from "semantic-ui-react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <Segment vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided stackable>
            <Grid.Column width={4}>
              <Grid.Row>
                <Header as="h4" content="Follow Us" />
                <List link>
                  <List.Item as="a">Instagram</List.Item>
                  <List.Item as="a">Twitter</List.Item>
                  <List.Item as="a">Facebook</List.Item>
                </List>
              </Grid.Row>
              <Grid.Row>
                <Header as="h4" content="Restaurant location" />
                <List link>
                  <List.Item as="a">Address</List.Item>
                  <List.Item as="a">1234 Street Name, London, Uk</List.Item>
                </List>
              </Grid.Row>
              <Grid.Row>
                <Header as="h4" content="Contact Us" />
                <List>
                  <List.Item as="a">+4412345678</List.Item>
                  <List.Item as="a" id="email">
                    info@reactrestaurant.co.uk
                  </List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>
              <Grid.Row>
                <Header as="h4" content="Follow Us" />
                <List link>
                  <List.Item as="a">Instagram</List.Item>
                  <List.Item as="a">Twitter</List.Item>
                  <List.Item as="a">Facebook</List.Item>
                </List>
              </Grid.Row>
              <Grid.Row>
                <Header as="h4" content="Restaurant location" />
                <List link>
                  <List.Item as="a">Address</List.Item>
                  <List.Item as="a">1234 Street Name, London, Uk</List.Item>
                </List>
              </Grid.Row>
              <Grid.Row>
                <Header as="h4" content="Contact Us" />
                <List>
                  <List.Item as="a">+4412345678</List.Item>
                  <List.Item as="a" id="email">
                    info@reactrestaurant.co.uk
                  </List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={4}>React Stuff</Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </>
  );
}
