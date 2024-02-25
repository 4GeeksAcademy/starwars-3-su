import React from "react";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import "../../styles/home.css";
import "../../styles/descriptionCard.css";
import {StarshipsCard} from "../component/starshipsCard"; 

export const Connection = () => (
	<div className="text-center mt-5">
	<CharacterCard/>
	<PlanetCard/>
	<StarshipsCard/>
	</div>
);
