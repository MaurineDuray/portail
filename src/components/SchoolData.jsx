import React,{useEffect, useState} from 'react';
import data from '../data.json';

const SchoolData = () => {
    const [school, setSchool] = useState(null);
  
    useEffect(() => {
        // créer une fonction pour récupérer les données de l'école en analysant l'url
      const getSchoolInformation = () => {
        const currentURL = window.location.href;
        const schoolName = decodeURI(currentURL.substring(currentURL.lastIndexOf('/') + 1));
        const foundSchool = data.find((item) => item.name === schoolName);
        console.log('école='+currentURL)
        console.log('école='+schoolName)
        console.log('école='+foundSchool)
  
        if (foundSchool) {
          setSchool(foundSchool);
        } else {
          console.log("École non trouvée !");
        }
      };
  
      getSchoolInformation();
    }, []);
  
    return (
        <div>
        {school ? (
            <>
            <div className="card">
                Logo
            </div>
            <div className="infos-school">
                <h3>Informations</h3>
                <p>Adresse: {school.addresse}</p>
                <p>Téléphone: {school.telephone}</p>
                <p>Mail: {school.mail}</p>
                <p>{school.description}</p>
                <p>Site Web: {school.site}</p>
            </div>
        </>
            
        ) : (
            <>
            <p>Il n'existe pas (ou plus) d'école à ce nom </p>
            </>
            
        )}
          
        </div>
      
    );
  };
 
export default SchoolData ;

