import { gql } from "apollo-boost";

export const getPokemonProfile_Query = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      sprites {
        front_shiny
        back_shiny
      }
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
      types {
        slot
        type {
          name
        }
      }
      weight
    }
  }
`;
