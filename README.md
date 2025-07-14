# 🍿 MovieMate

Your personal movie companion! A modern, responsive movie search and tracking application built with React. Navigate through dedicated pages, search for movies, view detailed information, rate them, and keep track of your watched movies list with seamless routing.

## 📝 Update Log
Version 4.0.0 (Latest - Complete Router Implementation)

✅ Multi-Page Architecture: Fully implemented React Router with clean URL structure

✅ Dedicated Pages: Separate routes for Home (/), Search (/search), Movie Details (/movie/:id), and Watched List (/watched)

✅ Navigation System: Sticky navbar with active link highlighting and responsive design

✅ Movie Details Route: Dynamic routing with URL parameters for movie IDs

✅ Enhanced UX: Back navigation, breadcrumb-style routing, and intuitive page flow

✅ Layout Components: Structured layout system with AppLayout, NavBar, and Footer

✅ URL State Management: Movie details accessible via direct URLs for sharing

### Version 3.0.0 (Latest - Major Architecture Update)
- ✅ **React Router**: Multi-page navigation with dedicated routes
- ✅ **Route-Based Architecture**: Separate pages for Home, Search, Movie Details, and Watched List
- ✅ **Modern Layout System**: Sticky navigation with responsive layout
- ✅ **Enhanced Homepage**: Welcome experience with hero section and cinema imagery
- ✅ **Dedicated Search Page**: Full-page search experience with debounced input
- ✅ **Component Organization**: Improved structure with layouts and pages

## ✨ Features

🏠 Homepage Experience

Modern hero section with cinematic background imagery
Clear call-to-action guiding users to start exploring
Responsive design with smooth animations

🔍 Dedicated Search Experience

Full-Page Search: Dedicated /search route for focused movie discovery
Debounced Search: Real-time results with 500ms delay optimization
Search States: Loading, error, welcome, and results states with proper feedback
Results Display: Clean movie grid with click-to-view details

📽️ Movie Details System

Dynamic Routing: /movie/:id URLs for shareable movie pages
Comprehensive Information: Plot, cast, crew, ratings, awards, and box office data
Interactive Rating: Star rating system with instant feedback
Watched Status: Smart detection of already-rated movies
Navigation: Smooth back navigation with breadcrumb-style UX

📚 Personal Collection

Watched List Page: Dedicated /watched route for your movie collection
Rating Management: View and manage your personal ratings
Statistics Summary: Average ratings, runtime, and collection insights
Quick Actions: Remove movies from your watched list

🧭 Navigation & Routing

Clean URLs: RESTful routing structure for all pages
Active Navigation: Visual feedback for current page location
Responsive Navbar: Mobile-friendly navigation with logo branding
Footer Integration: Complete layout with footer and copyright

📱 Technical Excellence

React Router v6: Modern routing with nested layouts
CSS Modules: Scoped styling preventing conflicts
Custom Hooks: Reusable logic for movies, localStorage, and keyboard events
Local Storage: Persistent data across browser sessions
Responsive Design: Mobile-first approach with multiple breakpoints

## 🚀 Screenshots
#Homepage
<img width="1350" height="606" alt="image" src="https://github.com/user-attachments/assets/3d5cf2f7-4036-4aeb-91f6-799734dc2ee8" />


#Homepage
<img width="1363" height="612" alt="image" src="https://github.com/user-attachments/assets/371c787d-c38b-43c6-bee3-73f5dd7bf897" />





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

Navigation Flow

Homepage (/) - Start your movie journey with the hero section
Search Movies (/search) - Use the dedicated search page to find movies
Movie Details (/movie/:id) - Click any movie to view comprehensive details
Watched List (/watched) - Manage your personal movie collection

Key Actions

Search: Type in the search bar (minimum 3 characters) for real-time results
View Details: Click any movie card to navigate to its dedicated details page
Rate Movies: Use the 1-10 star rating system on movie detail pages
Add to Collection: Rate a movie to automatically add it to your watched list
Manage Collection: Navigate to /watched to view and remove movies
Share Movies: Copy movie detail URLs to share specific movies

Keyboard Shortcuts

Enter: Focus the search bar from anywhere
Escape: Navigate back from movie details
Browser Back/Forward: Full browser navigation support

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
│   │       ├── ErrorMessage.jsx
│   │       ├── Loader.jsx
│   │       ├── Logo.jsx
│   │       ├── StarRating.jsx
│   │       └── [Additional UI components]
│   ├── Layout/
│   │   ├── AppLayout.jsx
│   │   ├── AppLayout.module.css
│   │   ├── NavBar.jsx
│   │   ├── NavBar.module.css
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.module.css
│   │   ├── SearchPage.jsx
│   │   ├── SearchPage.module.css
│   │   ├── MovieDetailsPage.jsx
│   │   ├── MovieDetailsPage.module.css
│   │   ├── WatchedPage.jsx
│   │   └── WatchedPage.module.css
│   ├── hooks/
│   │   ├── useKey.jsx
│   │   ├── useLocalStorageState.jsx
│   │   └── useMovies.jsx
│   ├── App.jsx
│   ├── App.module.css
│   └── index.css
├── public/
│   └── images/
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

🎨 Modern Architecture

React Router Integration: Clean URL structure with /, /search, /movie/:id, /watched
Layout System: Reusable AppLayout with navbar and footer
Component Organization: Logical separation of pages, layouts, and components
CSS Modules: Scoped styling preventing conflicts across components

🔍 Enhanced Search Experience

Dedicated Search Page: Full-page focus on movie discovery
Debounced Input: 500ms delay reduces API calls and improves performance
State Management: Proper loading, error, and empty states
Responsive Results: Adaptive movie grid for all screen sizes

📱 Mobile-First Responsive Design

Adaptive Navigation: Collapsible mobile menu with touch-friendly interactions
Flexible Layouts: Stack-to-side transitions based on screen size
Optimized Content: Smart typography and spacing across devices
Touch Interactions: Properly sized buttons and interactive elements

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
🎯 Version 5.0.0 (Next Major Release - Advanced Features)

 Advanced State Management: Context API + useReducer for complex app state
 Search Filters: Filter by genre, year, rating, language, and director
 Sorting Options: Sort results by relevance, year, rating, or popularity
 Favorites System: Separate favorites list from watched movies
 Movie Recommendations: AI-powered suggestions based on viewing history
 Export Features: Export watched list as PDF or CSV
 Social Features: Share movie lists and ratings with friends
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
