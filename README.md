# Currency Converter

A clean and responsive currency converter built with React, Vite, and Tailwind CSS. The app lets users enter an amount, choose source and target currencies, swap them instantly, and fetch live exchange-rate data for conversion.

## Overview

This project is a frontend currency conversion app designed to be simple, fast, and easy to use. It uses a custom React hook to fetch the latest available currency data and updates the conversion flow based on the selected base currency.

## Features

- Convert between multiple international currencies
- Swap source and destination currencies with one click
- Fetch live exchange-rate data dynamically
- Responsive interface for desktop and mobile screens
- Custom dropdown-based currency selection UI
- Input validation for non-negative amounts

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- JavaScript (ES Modules)

## Project Structure

```text
src/
|-- components/
|   |-- ExchangeBox.jsx
|   |-- Footer.jsx
|   |-- InputBox.jsx
|   `-- Title.jsx
|-- hooks/
|   `-- useCurrencyInfo.js
|-- App.jsx
|-- index.css
`-- main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## How It Works

The app keeps track of:

- the entered amount
- the source currency
- the target currency
- the converted amount

Whenever the source currency changes, the custom hook fetches the latest currency mapping for that currency. When the user clicks `Convert`, the app uses the selected target currency's rate to calculate the result.

## API Credit

Exchange-rate data in this project is powered by the public **Currency API by Fawaz Ahmed**.

- API source: `@fawazahmed0/currency-api`
- Delivery used in this project: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/`
- Example endpoint pattern:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

Full credit goes to the API author and maintainers for providing the currency data used by this app.

## Author

Created by **Subha**

- GitHub: [subhadipm08](https://github.com/subhadipm08)

