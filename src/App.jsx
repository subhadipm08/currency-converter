import Title from "./components/Title";
import ExchangeBox from "./components/ExchangeBox";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-between gap-6 px-4 py-4 sm:gap-8 sm:px-6 md:justify-evenly md:py-6">
        <Title />
        <ExchangeBox />
        <Footer />
      </div>
    </div>
  )
}

export default App
