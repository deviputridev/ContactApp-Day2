export default function ContactItem({imgUrl, name, email}) {
    return (
        <div className="contact_item_container">
        <div className="contact_detail_container">
        <img src="{imgUrl}l" alt="{name}" />
        <div className="contact_item_container">
            <p className="main_container-title">{name}</p>
            <p className="main_container-paragraph">
            {email}
            </p>
        </div>
        </div>
        <button className="main_container-button main_container-button-danger">
        x
        </button>
    </div>
    );
  }