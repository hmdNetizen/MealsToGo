import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const StyledSearchBar = styled(Searchbar)`
  border-radius: 5px;
  background-color: "transparent";
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SearchContainer>
      <StyledSearchBar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        elevation={1}
      />
    </SearchContainer>
  );
};

export default Search;
