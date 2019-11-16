import React from "react";
import styled from "styled-components";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const Styled = styled.div`
  display: inline-block;
  width: 100%;
`;

const Searchbar = () => {
  return (
    <Styled>
      <InputGroup>
        <FormControl
          placeholder="I'm looking for ..."
          aria-label="I'm looking for ..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">GO</Button>
        </InputGroup.Append>
      </InputGroup>
    </Styled>
  );
};

export default Searchbar;
