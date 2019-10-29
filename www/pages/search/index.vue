<template>

  <div style="background: rgb(243, 243, 243)">
    <div class="col-sm s-t-search">
      <h3>resultats pour votre recherche: <i><b>{current_search}</b></i></h3>
    </div>

    <div class="row search-patern">
      <div class="col-sm">

        <div class="col-sm s-results">
          annonce 1
        </div>

        <div class="col-sm s-results">
          annonce 2
        </div>

        <div class="col-sm s-results">
          annonce 3
        </div>

        <div class="col-sm s-results">
          annonce 4
        </div>
      </div>

      <div class="col- a-search">
        affiner la recherche

        <ul>
          <p>Date de parution</p>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Un jour</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Trois jours</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Une semaine</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > deux semaines</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Un mois</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Afficher tous les resultats</li>
        </ul>
        Type de contrat
        <ul>
          <li><input
              type="checkbox"
              name=""
              id=""
            > CDI</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > CDD</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Saisonnier</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Contrat d'apprentissage</li>
        </ul>
        Duree hebdomadaire
        <ul>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Temps plein</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Temps partiel</li>
        </ul>
        Niveau d'experience
        <ul>
          <li><input
              type="checkbox"
              name=""
              id=""
            > moins de 1 an</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > de 1 à 2 ans</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > plus de 3 ans </li>
        </ul>
        qualification
        <ul>
          <li><input
              type="checkbox"
              name=""
              id=""
            >Cadre</li>
          <li><input
              type="checkbox"
              name=""
              id=""
            > Non cadre</li>

        </ul>
        salaire brut minimum
        <ul>
          <li>
            <input type="text">
            <select
              name=""
              id=""
            >
              <option value="">horaire</option>
            </select>
          </li>
        </ul>

      </div>

    </div>

  </div>

</template>

<script>
export default { layout: "fullscreen" };
</script>

<style>
.s-t-search {
  background: white;
  width: 100%;
}
.search-patern {
  margin: 0 auto;
  text-align: center;
}
.a-search {
  background: white;
  width: 55vh;
  margin-top: 15px;
  border-top-left-radius: 7px;
  box-shadow: 0px 0px 5px 2.5px rgb(218, 218, 218);
}
.a-search ul li {
  text-align: left;
  list-style: none;
}
input[type="checkbox"] {
  width: 1.3em;
  height: 1.3em;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background-color: rgb(0, 255, 0);
}
.s-results {
  height: 250px;
  border-radius: 7px;
  background: white;
  margin: 15px 0px 0px 0px;
  box-shadow: 0px 0px 5px 2.5px rgb(218, 218, 218);
}
</style>
