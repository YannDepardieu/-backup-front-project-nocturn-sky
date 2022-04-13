function Form() {

    return (
        <div className="HomePage-InteractiveMap-Form">            
            <div className="HomePage-InteractiveMap-Form-left">
                <input
                    name="address"
                    type="text"
                    placeholder="1 rue Dupont, 75000 Paris"
                />
                <input
                    name="datetime"
                    type="datetime"
                />
                <button>Position actuelle</button>
            </div>            
            <div className="HomePage-InteractiveMap-Form-right">
                <button>Enregistrer ce lieu comme favori</button>
                <button>Enregistrer cet événement</button>
            </div>
        </div>
    );
}

export default Form;
