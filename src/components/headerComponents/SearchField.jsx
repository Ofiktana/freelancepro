import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

function SearchField(props) {
  return (
    <InputGroup {...props} colorPalette={'gray'} startElement={<LuSearch />}>
      <Input placeholder="Search contacts" variant={'subtle'} />
    </InputGroup>
  );
}

export default SearchField;
