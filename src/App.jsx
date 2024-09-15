import Brands from "./components/Brands/Brands"
import Categories from "./components/Categories/Categories"
import Clients from "./components/Clients/Clients"
import Courses from "./components/Courses/Courses"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"
import Questions from "./components/Questions/Questions"
import Rating from "./components/Rating/Rating"

function App() {


  return (
    <>
      <NavBar/>
      <Hero/>
      <Rating/>
      <Categories/>
      <Courses/>
      <Questions/>
      <Clients/>
      <Brands/>
      <Footer/>
    </>
  )
}

export default App
