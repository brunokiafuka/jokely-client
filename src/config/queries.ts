import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories
  }
`;

export const GET_JOKE = (category: string) => gql`
  query {
    joke(category: "${category}")
  }
`;
