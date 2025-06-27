# 🎬 MovieMate

Your personal movie companion! A modern, responsive movie search and tracking application built with React. Search for movies, view detailed information, rate them, and keep track of your watched movies list.

## ✨ Features

- **Movie Search**: Search for movies using the OMDB API
- **Movie Details**: View comprehensive movie information including plot, cast, director, and IMDb ratings
- **Personal Ratings**: Rate movies with an interactive star rating system (1-10 scale)
- **Watched List**: Keep track of movies you've watched with your personal ratings
- **Keyboard Navigation**: Use Enter key to focus search, Escape key to close movie details
- **Local Storage**: Your watched movies persist between browser sessions

## 🚀 Demo

![MovieMate App Preview](screenshot.png) <!-- Add a screenshot of your app -->

## 🛠️ Technologies Used

- **React 18** - Frontend framework with hooks
- **Custom Hooks** - For state management and side effects
- **OMDB API** - Movie data source
- **Local Storage API** - Data persistence
- **CSS3** - Styling and responsive design
- **Vite** - Build tool and development server

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/moviemate.git
   cd moviemate
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
6. **Keyboard Shortcuts**: 
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
│   │   │   └── MovieList.jsx
│   │   ├── watched/
│   │   │   ├── WatchedMovie.jsx
│   │   │   ├── WatchedMoviesList.jsx
│   │   │   └── WatchedSummary.jsx
│   │   └── ui/
│   │       ├── Box.jsx
│   │       ├── ErrorMessage.jsx
│   │       ├── Loader.jsx
│   │       ├── Logo.jsx
│   │       ├── Main.jsx
│   │       ├── NavBar.jsx
│   │       ├── NumResults.jsx
│   │       └── Search.jsx
│   ├── hooks/
│   │   ├── useKey.jsx
│   │   ├── useLocalStorageState.jsx
│   │   └── useMovies.jsx
│   ├── StarRating.jsx
│   └── App.jsx
├── .env
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Components

- **Custom Hooks**: 
  - `useMovies` - Handles movie API calls with error handling
  - `useLocalStorageState` - Manages localStorage with React state
  - `useKey` - Handles keyboard event listeners
- **StarRating**: Reusable star rating component with hover effects
- **Responsive Design**: Mobile-friendly interface with collapsible sections

## 🚀 Deployment

The app can be easily deployed to platforms like:
- **Vercel**: `npm run build` then drag the `dist` folder
- **Netlify**: Connect your GitHub repo for automatic deployments
- **GitHub Pages**: Use GitHub Actions for deployment

## 🔮 Future Enhancements

- [ ] **Responsive Design**: Works seamlessly on desktop and mobile devices


## 📝 Update Log

### Version 1.0.0 (Initial Release)
- ✅ Basic movie search functionality
- ✅ Movie details view with comprehensive information
- ✅ Personal rating system (1-10 stars)
- ✅ Watched movies list with local storage
- ✅ Statistics dashboard
- ✅ Responsive design
- ✅ Keyboard navigation support

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

**Made with ❤️ by Amirtavass**

*MovieMate - Your personal movie companion!*
