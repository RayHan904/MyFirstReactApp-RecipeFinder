import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
`;

export const SearchForm = styled.form`
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SearchBar = styled.input`
  width: 50%;
  border: none;
  padding: 10px;
`;
export const SearchButton = styled.button`
  background: lightcoral;
  border: none;
  padding: 10px 20px;
  color: white;
`;
export const Recipes = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const RecipeContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgb(71, 71, 71);
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: white;
  align-items: center;
  min-width: 40%;
`;
