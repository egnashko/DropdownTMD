// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  host: "https://api.themoviedb.org/3/movie/popular?api_key=f2c299854f7ac8e69ef49715399c1bbe&language=en-US&page=1"
};
