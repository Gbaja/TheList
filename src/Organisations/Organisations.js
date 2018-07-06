import React from "react";
import { Link } from "react-router-dom"

import fetchingDataHOC from "./OrganisationsContainer";
import {fetchOrganisations} from "../requests/airtable";
import Header from "../StaticPages/Header";

const Organisations = ({ data, isLoading, error }) =>{
    const organisations = data || [];
    if (error) 
      <div>
        <Header />
        <p>{error.message}</p>
      </div>
      

      if (isLoading) 
        <div>
          <Header />
          <p>Loading...</p>
        </div>

    return (
      <div>
        <Header/>
        {organisations.map(organisation => (
          <ul key={organisation["Name of Organisation"]}>
            <li>
              <p>{organisation["Name of Organisation"]}</p>
              <p>
                {organisation["Services Provided to young people"].map(service => (
                  <span key={service}>{service}</span>
                ))}
              </p>
              <p>{organisation["Type of Organisation"]}</p>
              <Link to={`/organisation/${organisation["Name of Organisation"]}`}>View more info</Link>
            </li>
          </ul>
        ))}
      </div>
    );   
}


export default fetchingDataHOC(fetchOrganisations)(Organisations);
