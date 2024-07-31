"use client";
import React from "react";

const UserForm = () => {
  return (
    <form>
      <label htmlFor="name">Nombre:</label>
      <input type="text" name="name" id="name" placeholder="Ingresa tu nombre"/>

      <label htmlFor="email">E-mail:</label>
      <input type="text" name="email" id="email" placeholder="Ingresa tu e-mail"/>

      <label htmlFor="age">Edad:</label>
      <input type="text" name="age" id="age" placeholder="Ingresa tu edad" />

      <p>Género:</p>
      <input type="radio" id="famale" name="gender" value="female" />
      <label htmlFor="famale">Mujer</label>
      <input type="radio" id="male" name="gender" value="male" />
      <label htmlFor="male">Hombre</label>
      <input type="radio" id="nonbinary" name="gender" value="nonbinary" />
      <label htmlFor="nonbinary">No binario</label>
      <input type="radio" id="other" name="gender" value="other" />
      <label htmlFor="other">Otros / Prefiero no decirlo</label>

      <label htmlFor="account">Tipo de cuenta:</label>
      <select name="account" id="account">
        <option value="" disabled selected>Escoge una</option>
        <option value="basic">Básica</option>
        <option value="premium">Premium</option>
        <option value="business">Business</option>
      </select>

      <label htmlFor="publicity">Acepto recibir publicidad por email:</label>
      <input type="checkbox" id="publicity" name="publicity" value={true} />

    </form>
  );
};

export default UserForm;


