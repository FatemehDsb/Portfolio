import { Button } from "@mui/material";

type HeaderButtonProps = {
  label: string;
  href: string;
};

function HeaderButton({ label, href }: HeaderButtonProps) {
  return (
    <>
      <Button
        size="small"
        variant="outlined"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Button>
    </>
  );
}
export default HeaderButton;
