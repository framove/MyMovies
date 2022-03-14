import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBtn, SearchContainer, SearchInput } from './stylesSearch';
import { useNavigate } from "react-router-dom";

export default function Search() {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    }

  return (
    <form onSubmit={handleSubmit}>
        <SearchContainer>
            <SearchInput 
            type="text" 
            placeholder="Search in My Movies" 
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchBtn type="submit"><SearchIcon fontSize="medium" sx={{ color: "#00abb5" }} /></SearchBtn>
        </SearchContainer>
    </form>
  )
}
