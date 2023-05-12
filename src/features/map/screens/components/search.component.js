import React, { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../../services/location/location.context";

const StyledSearchBar = styled(Searchbar)`
  border-radius: 5px;
  background-color: #fff;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  top: 30px;
  z-index: 999;
  width: 100%;
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(keyword);

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <StyledSearchBar
        placeholder="Search"
        onChangeText={onChangeSearch}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        value={searchQuery}
        elevation={1}
        icon="map"
      />
    </SearchContainer>
  );
};

export default Search;
