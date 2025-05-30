import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => (
  <Input variant="solid" onChange={changeFn} {...props} />
);
