import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Containers";
import { List, ListContainer, ListItem } from "../../components/List";
import { Header, Title } from "../../components/Typography";
import { useStoreContext } from "../../context/storeContext";

const Main = () => {
  const { categories } = useStoreContext();

  return (
    <Container>
      <div>
        <Header>
          Welcome to Jokely <span>🤪</span>
        </Header>
        <Title>
          “A simple smile. That’s the start of opening your heart and being
          compassionate to others.”
          <br />
          <br />
          Select Category and we will tell you a joke:
        </Title>
      </div>

      <ListContainer>
        <List>
          {(categories || [])?.map((category) => (
            <ListItem key={category}>
              <Button>
                <Link to={`joke/${category}`}>{category}</Link>
              </Button>
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </Container>
  );
};

export default Main;
