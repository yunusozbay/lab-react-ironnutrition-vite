// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchInput, setSearchInput}) {
    const handleChange = (event) => {
        setSearchInput(event.target.value);
      };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchInput} type="search" placeholder="Search here" onChange={handleChange} />
    </>
  );
}

export default Search;