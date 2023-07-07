import { modal } from "./modal.js";

import { onScrollNav } from "./navigation.js";

import { onHamb } from "./hamburger.js";

import { createFAQ } from "./render/faq.js";

window.addEventListener("DOMContentLoaded", () => {
  modal();
  createFAQ();
  onScrollNav();
  onHamb();
});
