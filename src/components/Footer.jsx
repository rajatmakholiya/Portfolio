import { Typography, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const BuyMeACoffeeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2c-3.31 0-6 2.69-6 6 0 1.45.52 2.78 1.39 3.81C6.51 12.33 6 13.1 6 14v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2c0-.9-.51-1.67-1.39-2.19.87-1.03 1.39-2.36 1.39-3.81 0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-4 10v2h8v-2c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1z" />
  </svg>
);

const Footer = ({ currentTheme }) => {
  return (
    <footer
      className={`w-full py-4 px-8 mt-auto transition-all duration-300 ${
        currentTheme === "dark" ? "bg-black/10" : "bg-gray-100/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center gap-4 sm:gap-0">
        <Typography variant="body2" className="text-gray-500">
          © {new Date().getFullYear()} Rajat Makholiya. All Rights Reserved.
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            href="https://www.linkedin.com/in/rajat-makholiya-1b92a1222/"
            target="_blank"
            aria-label="LinkedIn"
            className={currentTheme === 'dark' ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://github.com/rajatmakholiya"
            target="_blank"
            aria-label="GitHub"
            className={currentTheme === 'dark' ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="mailto:rajatmakholiya07@gmail.com"
            aria-label="Email"
            className={currentTheme === 'dark' ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}
          >
            <EmailOutlinedIcon />
          </IconButton>
          <IconButton
            href="https://www.buymeacoffee.com/lostvibes"
            target="_blank"
            aria-label="Buy Me A Coffee"
            className={currentTheme === 'dark' ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}
          >
            <BuyMeACoffeeIcon />
          </IconButton>
        </Stack>
      </div>
    </footer>
  );
};

export default Footer;