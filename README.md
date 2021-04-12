# WeatherApp

Application done as demo for recruitment process (as usually :D).

You can try it out life at https://weather.dorious.com.

# Used Techs

* TypeScript
* OpenAPI Generators
* Yarn Workspaces
* React Hooks
* React Context
* NextJS
* Styled Components

# Development

After cloning: 

```bash
yarn install
yarn build # or yarn workspace @dorious/weather-api run build
yarn dev
```

# Docker

Project contains Dockerfile that does setup up whole project.
Just:

```
docker build -t weather-app .
docker run -p 3000:3000 weather-app
```

# TODO/Considerations

* Responsiveness, for example on desktop screens the CurrentWeather could go to the left as fixed and the whole scrollable part to the right
* API call error/loading handling
* Theming
* Using some more complex state managemnt like Redux or Overmind.
* Finish Searching by name (as started)
* Using NextJS routing & getStaticProps to generate static pages for Google :) and making some internal linking for indexing :)
* Nicer backgrounds :P
* Fixing bugs with timezones and "Now". 
* CI like Github Actions with semantic-release, Docker registry push, etc.