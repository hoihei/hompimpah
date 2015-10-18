Telescope.modules.remove("postMeta","post_comments_link");
Telescope.modules.remove("postComponents","post_rank");
Telescope.modules.remove("contentTop", "tagline_banner");
Telescope.modules.add("hero", {
  template: "tagline_banner",
  order: 1,
  only: ["postsDefault"]
});
