# 🍿 MovieMate

Your personal movie companion! A modern, responsive movie search and tracking application built with React. Search for movies, view detailed information, rate them, and keep track of your watched movies list.

## 📝 Update Log

### Version 2.0.0 (Latest - Major Update)
- ✅ **CSS Modules**: Migrated from global CSS to modular architecture
- ✅ **Responsive Design**: Complete mobile-first responsive implementation
- ✅ **Debounced Search**: Added 500ms delay for optimized API calls
- ✅ **Enhanced Mobile UX**: Improved movie details layout for mobile devices
- ✅ **Better Component Organization**: Structured styling with CSS modules

## ✨ Features

- **🔍 Movie Search**: Search for movies using the OMDB API with debounced input
- **📱 Responsive Design**: Mobile-first design that works seamlessly on all devices
- **🎨 CSS Modules**: Modular styling architecture for better maintainability
- **📽️ Movie Details**: View comprehensive movie information including plot, cast, director, and IMDb ratings
- **⭐ Personal Ratings**: Rate movies with an interactive star rating system (1-10 scale)
- **📚 Watched List**: Keep track of movies you've watched with your personal ratings
- **⌨️ Keyboard Navigation**: Use Enter key to focus search, Escape key to close movie details
- **💾 Local Storage**: Your watched movies persist between browser sessions

## 🚀 Screenshots
![image](https://github.com/user-attachments/assets/967f0bdc-6604-4c94-bdeb-7aad13369379)



## 🛠️ Technologies Used

- **React 18** - Frontend framework with hooks
- **CSS Modules** - Scoped styling with responsive design
- **Custom Hooks** - For state management and side effects
- **OMDB API** - Movie data source
- **Local Storage API** - Data persistence
- **Debounced Search** - Optimized API calls with 500ms delay
- **Vite** - Build tool and development server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amirtavass/MovieMate.git
   cd MovieMate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your OMDB API key:
   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```
   
   Get your free API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the app in action!

## 🎯 How to Use

1. **Search Movies**: Type in the search bar to find movies (minimum 3 characters)
2. **View Details**: Click on any movie to see detailed information
3. **Rate Movies**: Use the star rating system to rate movies (1-10 stars)
4. **Add to Watched**: Click "Add to list" after rating to save to your watched movies
5. **Manage Watched List**: View your statistics and remove movies with the X button
6. **Responsive Experience**: Use on any device - mobile, tablet, or desktop
7. **Keyboard Shortcuts**: 
   - Press `Enter` to focus the search bar
   - Press `Escape` to close movie details

## 📁 Project Structure

```
moviemate/
├── src/
│   ├── components/
│   │   ├── movie/
│   │   │   ├── Movie.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   ├── MovieDetails.module.css
│   │   │   ├── MovieList.jsx
│   │   │   └── MovieList.module.css
│   │   ├── watched/
│   │   │   ├── WatchedMovie.jsx
│   │   │   ├── WatchedMovie.module.css
│   │   │   ├── WatchedMoviesList.jsx
│   │   │   ├── WatchedSummary.jsx
│   │   │   └── WatchedSummary.module.css
│   │   └── ui/
│   │       ├── Box.jsx
│   │       ├── Box.module.css
│   │       ├── ErrorMessage.jsx
│   │       ├── ErrorMessage.module.css
│   │       ├── Loader.jsx
│   │       ├── Loader.module.css
│   │       ├── Logo.jsx
│   │       ├── Logo.module.css
│   │       ├── Main.jsx
│   │       ├── Main.module.css
│   │       ├── NavBar.jsx
│   │       ├── NavBar.module.css
│   │       ├── NumResults.jsx
│   │       ├── NumResults.module.css
│   │       ├── Search.jsx
│   │       └── Search.module.css
│   ├── hooks/
│   │   ├── useKey.jsx
│   │   ├── useLocalStorageState.jsx
│   │   └── useMovies.jsx
│   ├── StarRating.jsx
│   ├── App.jsx
│   ├── App.module.css
│   └── index.css
├── .env
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features & Improvements

### 🎨 **CSS Modules Architecture**
- **Scoped Styling**: Each component has its own CSS module preventing style conflicts
- **Maintainable Code**: Better organization and easier debugging
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, and 1024px

### 🔍 **Optimized Search Experience**
- **Debounced Input**: 500ms delay reduces API calls and improves performance
- **Responsive Layout**: Search bar adapts to different screen sizes
- **Real-time Results**: Instant feedback with loading states

### 📱 **Mobile-First Responsive Design**
- **Adaptive Layout**: Stacked layout on mobile, side-by-side on desktop
- **Touch-Friendly**: Properly sized buttons and interactive elements
- **Optimized Content**: Condensed text and smart spacing on smaller screens

### 🎯 **Enhanced Components**
- **Custom Hooks**: 
  - `useMovies` - Handles movie API calls with abort controllers and error handling
  - `useLocalStorageState` - Manages localStorage with React state synchronization
  - `useKey` - Handles keyboard event listeners with cleanup
- **StarRating**: Reusable component with responsive sizing and hover effects
- **Collapsible Boxes**: Space-efficient design with toggle functionality

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Stacked layout, condensed content
- **Tablet**: `640px - 768px` - Intermediate sizing and spacing
- **Desktop**: `768px - 1024px` - Enhanced layout with more spacing
- **Large Desktop**: `> 1024px` - Side-by-side layout with optimal spacing

## 🚀 Deployment

The app can be easily deployed to platforms like:
- **Vercel**: `npm run build` then drag the `dist` folder
- **Netlify**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Use GitHub Actions for deployment

## 🔮 Future Enhancements

### 🎯 Next Major Features (In Development)
- [ ] **React Router**: Multi-page navigation with dedicated routes for search, details, and watchlist
- [ ] **Context API + useReducer**: Advanced state management for complex application state
- [ ] **Filtered Search**: Advanced filtering by genre, year, rating, and other criteria

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing movie data
- React team for the amazing framework
- All the open-source contributors who make projects like this possible

---



**Made with ❤️ by [Amirtavass](https://github.com/amirtavass)**

*MovieMate - Your personal movie companion that grows with you!*
