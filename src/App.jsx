import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import "./styles.css";
import SaveUserModal from "./components/SaveUserModal";

function App() {
  const [users, setUsers] = useState([]);
  const [showSaveUserModal, setShowUserModal] =
    useState(false);

  useEffect(() => {
    fetch(
      "https://ufieaoipmfrdsaeuqiiw.supabase.co/rest/v1/users",
      {
        headers: {
          apikey:
            "sb_publishable_EMg9mHWGTEL52tLkacHaIg_tUZthVvZ",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) =>
        console.error(
          "Error fetching users:",
          error,
        ),
      );
  }, []);

  const addUserClickHandler = () => {
    setShowUserModal(true);
  };

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <UserSearch />

          <UserList users={users} />

          <button
            className="btn-add btn"
            onClick={addUserClickHandler}
          >
            Add new user
          </button>

          {showSaveUserModal && <SaveUserModal />}

          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
