import * as React from "react";
import {
  Box,
  FocusLock,
  IconButton,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverContent,
  PopoverProps,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { BiHelpCircle } from "react-icons/bi";

interface IPropsPopover extends PopoverProps {
  children: React.ReactNode;
}

const CustomPopover: React.FC<IPropsPopover> = ({
  children,
  placement = "bottom",
}) => {
  return (
    <Popover placement={placement} computePositionOnMount>
      <PopoverTrigger>
        <IconButton aria-label="" size="sm" icon={<BiHelpCircle />} />
      </PopoverTrigger>
      <PopoverContent p={5}>
        <FocusLock persistentFocus={false}>
          <PopoverArrow />
          <Stack spacing={".4rem"}>{children}</Stack>
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
