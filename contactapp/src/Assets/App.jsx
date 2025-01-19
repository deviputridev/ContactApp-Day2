import "./App.css";
import ContactItem from "./components/ContactItem";
import Input from "./components/Input";

function App() {
  return (
    <main className="main_container">
        <h1 className="main_container-heading">Contact Apps</h1>
        <section className="add_contact_container">
        <h2 className="main_container-subheading">Add New Contact</h2>
            <div className="add_contact_container-input">
                <Input placeholder={Name}/>
                <Input placeholder={Email}/>
                <button className="main_container-button">Add</button>
            </div>
        </section>
        <section className="contact_list_container">
        <h2 className="main_container-subheading">Contact List</h2>
        <ContactItem 
            imgUrl="https://dummyjson.com/icon/emilys/128" 
            name="Emily Johnson" 
            email="emily.johnson@x.dummyjson.com"
        />
        <ContactItem 
            imgUrl="https://dummyjson.com/icon/emilys/128" 
            name="John Doe" 
            email="john.doe@x.dummyjson.com"
        />
        <ContactItem 
            imgUrl="https://dummyjson.com/icon/emilys/128" 
            name="Mark Musk" 
            email="mark.musk@x.dummyjson.com"
        />
        </section>
    </main>
    </>

  );
}

export default App;