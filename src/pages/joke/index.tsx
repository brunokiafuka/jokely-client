import { NetworkStatus, useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, RowButtonContainer } from "../../components/Button";
import { Container } from "../../components/Containers";
import { Header, Body, Title } from "../../components/Typography";
import { GET_JOKE } from "../../config/queries";

interface IPageParams {
  category: string;
}

const Jokes = () => {
  const { category } = useParams<IPageParams>();
  const { loading, data, refetch, networkStatus } = useQuery(
    GET_JOKE(category),
    { notifyOnNetworkStatusChange: true }
  );

  if (loading || networkStatus === NetworkStatus.refetch) {
    return (
      <Container>
        <Title>Looking for something funny 👻...</Title>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <Header>{category}</Header>
        <Body>{data?.joke}</Body>
      </div>

      <RowButtonContainer>
        <Button>
          <Link to="/">go back 🔙</Link>
        </Button>
        <Button onClick={() => refetch()}>other joke 🤣</Button>
      </RowButtonContainer>
    </Container>
  );
};

export default Jokes;
