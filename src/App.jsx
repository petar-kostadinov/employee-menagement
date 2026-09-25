import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import "./styles.css";
import SaveUserModal from "./components/SaveUserModal";

const baseUrl =
  "https://ufieaoipmfrdsaeuqiiw.supabase.co/rest/v1/users";
const apiKey =
  "sb_publishable_EMg9mHWGTEL52tLkacHaIg_tUZthVvZ";

function App() {
  const [users, setUsers] = useState([]);
  const [showSaveUserModal, setShowUserModal] =
    useState(false);

  useEffect(() => {
    fetchUsers()
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

  const addUserCloseHandler = () => {
    setShowUserModal(false);
  };

  const submitUserHandler = async (user) => {
    try {
      await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: apiKey,
        },
        body: JSON.stringify(user),
      });

      const updatedUsers = await fetchUsers();

      setUsers(updatedUsers);
    } catch (error) {
      alert("Error adding users:" + error);
    } finally {
      setShowUserModal(false);
    }
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

          {showSaveUserModal && (
            <SaveUserModal
              onClose={addUserCloseHandler}
              onSubmit={submitUserHandler}
            />
          )}

          <Pagination />
        </section>
      </main>

      <Footer />
    </>
  );
}

async function fetchUsers() {
  const response = await fetch(baseUrl, {
    headers: {
      apiKey: apiKey,
    },
  });

  const data = await response.json();

  return data;
}

export default App;
