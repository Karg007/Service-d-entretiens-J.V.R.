"use client";

import type { FormEvent } from "react";

export default function QuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const type = String(form.get("type") ?? "").trim();
    const details = String(form.get("details") ?? "").trim();
    const subject = encodeURIComponent(`Demande d’estimation — Service d’entretien J.V.R. — ${company || name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEntreprise : ${company}\nTéléphone : ${phone}\nCourriel : ${email}\nType de bâtiment : ${type}\n\nDétails du projet :\n${details}`,
    );
    window.location.href = `mailto:rbernard@hotmail.ca?subject=${subject}&body=${body}`;
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-title">
        <span>Parlez-nous de votre projet</span>
        <small>Tous les champs marqués * sont requis.</small>
      </div>
      <div className="form-row">
        <label>Nom complet *<input name="name" type="text" autoComplete="name" required placeholder="Votre nom" /></label>
        <label>Entreprise<input name="company" type="text" autoComplete="organization" placeholder="Nom de l’entreprise" /></label>
      </div>
      <div className="form-row">
        <label>Téléphone *<input name="phone" type="tel" autoComplete="tel" required placeholder="514 000-0000" /></label>
        <label>Courriel *<input name="email" type="email" autoComplete="email" required placeholder="vous@entreprise.ca" /></label>
      </div>
      <label>Type de bâtiment *
        <select name="type" required defaultValue="">
          <option value="" disabled>Sélectionnez une option</option>
          <option value="Commercial">Commercial</option>
          <option value="Industriel">Industriel</option>
          <option value="Autre bâtiment professionnel">Autre bâtiment professionnel</option>
        </select>
      </label>
      <label>Quelques détails
        <textarea name="details" rows={3} placeholder="Nombre d’étages, surface approximative, fréquence souhaitée…" />
      </label>
      <button className="button button-primary form-submit" type="submit">Préparer ma demande <ArrowIcon /></button>
      <p className="form-note">Le bouton ouvrira votre application de courriel avec les renseignements déjà remplis.</p>
    </form>
  );
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
