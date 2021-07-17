import { gql } from "apollo-boost";

export const getPokemonDetails_Query = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      abilities {
        ability {
          name
        }
      }
      base_experience
      height
      moves {
        move {
          name
        }
      }
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
