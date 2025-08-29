# React Weather App

A simple weather application built with React. Enter a city name to get the current weather, temperature, humidity, and wind speed using the OpenWeatherMap API.

## Features

- Search for weather by city name
- Displays temperature, weather description, humidity, and wind speed
- Responsive and clean user interface

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/react-weather-app.git
   cd react-weather-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to a `.env` file in the root directory:
   ```
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```

### Running the App

Start the development server:
```sh
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

```sh
npm test
```

### Building for Production

```sh
npm run build
```
The production build will be in the `build` folder.

## Learn More

- [React Documentation](https://reactjs.org/)
- [OpenWeatherMap API Docs](https://openweathermap.org/api)

## License

This project is licensed under the MIT
