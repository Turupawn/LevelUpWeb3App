import { MenuItem, Typography } from "@mui/material";

import Select from "@/components/Select";

const PlainSelect = (props) => {
  const { data, ...restProps } = props;
  return (
    <Select {...restProps}>
      {data.map((item) => (
        <MenuItem
          key={item}
          value={item}
          sx={{
            p: "10px 25px",
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor:
              restProps.value === item
                ? "#F4F4F4 !important"
                : "unset !important",
            "&:nth-of-type(n+2)": {
              marginTop: "3.5px",
            },
            "&:hover": {
              backgroundColor: "#F4F4F4 !important",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: ["1.4rem", "1.4rem", "1.6rem"],
              fontWeight: 500,
              cursor: "inherit",
            }}
          >
            {item}
          </Typography>
        </MenuItem>
      ))}
    </Select>
  );
};
export default PlainSelect;
