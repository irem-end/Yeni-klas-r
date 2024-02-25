import React from "react";

function Applies() {
  return (

    <div>
      <h1> BAŞVURU FORMU</h1>
    <div>
        <br />
      <div className="input-group">
        <span className="input-group-text">İsim ve Soyisim</span>
        <input type="text" aria-label="First name" className="form-control" />
        <input type="text" aria-label="Last name" className="form-control" />
      </div>
      <hr />
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          E-mail
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <hr/>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          Telefon Numarası
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <hr />
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          Adres
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <hr />
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">
          Atık Türü
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
      </div>
      <br />
      <button type="button" class="btn btn-primary">Kaydet</button>
      
    </div>
    </div>
  );
}

export default Applies;
