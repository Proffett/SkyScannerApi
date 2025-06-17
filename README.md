# SkyScannerApi - Flight Search API Integration

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![API](https://img.shields.io/badge/API-Integration-orange?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge)

</div>

## 📖 Overview

SkyScannerApi is a web application for searching and comparing flight tickets, integrated with flight search APIs. The project demonstrates skills in working with external APIs, handling asynchronous requests, and creating user-friendly interfaces for complex data.

### ✨ Key Features

- ✈️ **Flight Search** - Search flights by route and dates
- 💰 **Price Comparison** - Compare offers from different airlines
- 🔍 **Result Filtering** - Filters by price, time, airlines
- 📊 **Sorting** - Sort by price, departure time, duration
- 📱 **Responsive Interface** - Optimized for all devices
- ⚡ **Fast Search** - Optimized API requests
- 📈 **Price Analytics** - Track ticket price changes

## 🛠 Technology Stack

### Frontend
- **TypeScript** - Typed JavaScript for code reliability
- **React** - Library for building user interfaces
- **React Hooks** - Modern approach to state management
- **Axios** - HTTP client for API communication

### Styling
- **CSS Modules** - Modular styles for component isolation
- **SCSS** - Preprocessor for extended CSS capabilities
- **Flexbox/Grid** - Modern CSS layout methods

### API Integration
- **RapidAPI** - Platform for API access
- **SkyScanner API** - Primary source of flight data
- **Error Handling** - API request error management

## 🚀 Quick Start

### Prerequisites

- Node.js 14.0 or higher
- npm or yarn
- API key from RapidAPI/SkyScanner

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Proffett/SkyScannerApi.git
   cd SkyScannerApi
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create `.env.local` file:
   ```env
   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
   REACT_APP_RAPIDAPI_HOST=skyscanner-skyscanner-flight-search-v1.p.rapidapi.com
   ```

4. **Start the application**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open browser**
   
   Application will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
SkyScannerApi/
├── src/
│   ├── components/          # React components
│   │   ├── SearchForm/      # Flight search form
│   │   ├── FlightList/      # Found flights list
│   │   ├── FlightCard/      # Individual flight card
│   │   ├── Filters/         # Filter components
│   │   └── UI/              # Reusable UI components
│   ├── services/            # API services
│   │   └── flightApi.ts     # SkyScanner API integration
│   ├── types/               # TypeScript types
│   │   └── flight.types.ts  # Flight data types
│   ├── utils/               # Utilities and helpers
│   │   ├── dateUtils.ts     # Date manipulation
│   │   └── priceUtils.ts    # Price formatting
│   ├── hooks/               # Custom React hooks
│   │   └── useFlightSearch.ts # Flight search hook
│   └── styles/              # Global styles
├── public/                  # Static files
└── package.json             # Dependencies and scripts
```

## 🔧 Functionality

### Flight Search

```typescript
interface SearchParams {
  originPlace: string;
  destinationPlace: string;
  outboundDate: string;
  inboundDate?: string;
  adults: number;
  children?: number;
  infants?: number;
  cabinClass: 'Economy' | 'Business' | 'First';
}
```

### Result Processing

```typescript
interface FlightResult {
  id: string;
  price: number;
  currency: string;
  airline: string;
  duration: number;
  stops: number;
  departure: {
    time: string;
    airport: string;
    city: string;
  };
  arrival: {
    time: string;
    airport: string;
    city: string;
  };
}
```

### Filtering and Sorting

- **By Price**: from cheap to expensive and vice versa
- **By Time**: by departure or arrival time
- **By Duration**: from short to long flights
- **By Stops**: direct flights, 1 stop, 2+ stops
- **By Airlines**: filter by specific carriers

## 🎨 User Interface

### Responsive Design
- **Desktop**: Full interface with sidebar filters
- **Tablet**: Adapted element layout
- **Mobile**: Optimized for touch control

### UX Features
- Autocomplete for cities and airports
- Calendar for date selection
- Loading indicators during search
- Result pagination
- Search history saving

## 📊 Performance

### Optimizations
- Search request debouncing
- API result caching
- Component lazy loading
- Long list virtualization

### Error Handling
- Graceful degradation when API unavailable
- Informative error messages
- Retry mechanism for failed requests
- Fallback UI for critical errors

## 🔐 Security

### API Security
- Hide API keys through environment variables
- Rate limiting to prevent abuse
- Input data validation
- CORS settings for security

## 🧪 Testing

### Test Types
- Unit tests for utilities and hooks
- Integration tests for API services
- Component tests for React components
- E2E tests for critical user scenarios

```bash
# Run tests
npm test

# Tests with coverage
npm run test:coverage

# E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Add environment variables in project settings
3. Deployment will happen automatically

### Other Platforms
```bash
# Production build
npm run build

# Static files will be in build/ folder
```

## 🔮 Development Roadmap

### Upcoming Updates
- [ ] Save favorite flights
- [ ] Price change notifications
- [ ] Calendar integration
- [ ] Multi-currency support

### Long-term Plans
- [ ] Mobile app (React Native)
- [ ] Ticket booking functionality
- [ ] Hotel integration
- [ ] Personalized recommendations

## 🤝 Contributing

Welcome suggestions for functionality improvements!

### How to contribute:
1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 👨‍💻 Author

**Evgeny Sterkhov**
- GitHub: [@Proffett](https://github.com/Proffett)
- Email: montana-work@yandex.ru
- Telegram: @proffett

## 🙏 Acknowledgments

- [SkyScanner](https://www.skyscanner.com/) for providing the API
- [RapidAPI](https://rapidapi.com/) for the integration platform
- React community for excellent tools

---

<div align="center">

**⭐ Star this repo if you found it useful!**

</div>

