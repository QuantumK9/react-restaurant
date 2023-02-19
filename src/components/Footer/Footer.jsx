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
    <div className="footer-wrapper">
      <Segment vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided stackable>
            <Grid.Column width={4}>
              <Grid.Row>
                <Header as="h4" content="Follow Us" />
                <List link className="text-centered">
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
            <Grid.Column width={4}>
              <Grid.Row>
                <Header as="h4" content="Developed By" />
                <List>
                  <List.Item as="a">Crystal</List.Item>
                  <List.Item as="a">Ricky</List.Item>
                  <List.Item as="a">Adama</List.Item>
                  <List.Item as="a">Iraklis</List.Item>
                </List>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
