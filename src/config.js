require("dotenv").config();

const PERSON_ID = "657c734b4e04f9001470e4a4";
const PERSON_TOKEN =
  "DEV_8jHCXutXAwUxs3bXG8hZotbYUG36GqURlHsz1fzC73mNMoC0gvAEKBDhHQDJ1v5k";

const MAX_SALE_TICKETS = 10;
const DOMAIN = "https://back.apisunat.com";
const PORT = process.PORT || 3000;

module.exports = {
  PERSON_ID,
  PERSON_TOKEN,
  MAX_SALE_TICKETS,
  DOMAIN,
  PORT,
};
