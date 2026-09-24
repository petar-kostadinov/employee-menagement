import Footer from "./components/Footer";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import "./styles.css";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <UserSearch />

          <UserList />

          <button className="btn-add btn">
            Add new user
          </button>

          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
