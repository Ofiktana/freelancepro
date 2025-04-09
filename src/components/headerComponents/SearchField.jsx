import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

function SearchField() {
  return (
    <InputGroup width={'200px'} startElement={<LuSearch />}>
      <Input placeholder="Search contacts" variant={'subtle'} />
    </InputGroup>
  );
}

export default SearchField;
