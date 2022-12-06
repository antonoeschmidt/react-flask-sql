import React, { useState } from "react";
import { CircularProgress, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchPage.css";
import DataTable from "../../components/Shared/DataTable/DataTable";
import { dataColumn } from "../../models/dataGridColumns";

interface CitizenData {
  id: number;
  cpr: string;
  firstname: string;
  lastname: string;
  address: string;
  zip: number;
}

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<CitizenData[]>();
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (searchValue.length < 10) {
      alert("CPR must be 10 digits");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/test-results/cpr/${searchValue}`);
      setLoading(false);
      if (!response.ok) return;
      const data = await response.json();
      const indexedData = data.results.map((citizen: CitizenData, index: number) => ({ ...citizen, id: index }));
      setData(indexedData);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const cprFormatter = (cpr: string) => {
    cpr = cpr.replace(/[^0-9]/g, "");
    if (cpr.length < 7) return cpr;
    return `${cpr.slice(0, 6)}-${cpr.slice(6, 10)}`;
  };

  return (
    <div>
      <h2>Search Database</h2>
      <div className="search-page">
        <TextField
          sx={{ width: "300px" }}
          label="Search by CPR"
          variant="outlined"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          value={cprFormatter(searchValue)}
          onChange={(e) => {
            if (e.target.value.length > 11) return; // 10 digits + 1 dash
            setSearchValue(e.target.value.replace(/-/g, ""));
          }}
          disabled={loading}
        />
        <IconButton disabled={loading} sx={{ borderRadius: "5px", width: "2.5em" }} onClick={() => handleSearch()}>
          <SearchIcon />
        </IconButton>
        {loading && <CircularProgress />}
      </div>
      <div className="data-table">
        {data && <DataTable rows={data} columns={dataColumn} rowCount={data.length} loading={loading} />}
      </div>
    </div>
  );
};

export default SearchPage;
